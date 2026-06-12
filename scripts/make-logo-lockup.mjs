import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'fs'

const DIR = '/Users/robertkoerber/code/WitterTech/public'
const VB = 1500 // original square viewBox width/height

// --- 1. find the wordmark (dark + green ink) bounding box from the light-bg logo ---
const W = 1500
const { data, info } = await sharp(`${DIR}/logo-white.svg`, { density: 200 })
  .resize({ width: W, height: W, fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .raw().toBuffer({ resolveWithObject: true })

const ch = info.channels
let minX = W, minY = W, maxX = 0, maxY = 0
const isInk = (r, g, b, a) => {
  if (a < 120) return false
  const orange = r > 180 && g > 80 && g < 195 && b < 130 && (r - b) > 90
  if (orange) return false
  const dark = r < 75 && g < 75 && b < 85
  const green = g > 140 && r < 175 && b < 110 && (g - r) > 40 && (g - b) > 80
  return dark || green
}
for (let y = 0; y < info.height; y++) {
  for (let x = 0; x < info.width; x++) {
    const i = (y * info.width + x) * ch
    if (isInk(data[i], data[i + 1], data[i + 2], ch === 4 ? data[i + 3] : 255)) {
      if (x < minX) minX = x; if (x > maxX) maxX = x
      if (y < minY) minY = y; if (y > maxY) maxY = y
    }
  }
}
const scale = VB / W
let bx = minX * scale, by = minY * scale, bw = (maxX - minX) * scale, bh = (maxY - minY) * scale
console.log(`wordmark bbox in viewBox units: x=${bx.toFixed(0)} y=${by.toFixed(0)} w=${bw.toFixed(0)} h=${bh.toFixed(0)} (aspect ${(bw/bh).toFixed(2)})`)

// --- 2. pad the box: generous left for the W, a little around, extra below for the wave swoosh ---
const padX = bw * 0.06, padTop = bh * 0.14, padBot = bh * 0.30
let cx = Math.max(0, bx - padX)
let cy = Math.max(0, by - padTop)
let cw = Math.min(VB - cx, bw + padX * 2)
let cheight = Math.min(VB - cy, bh + padTop + padBot)
const crop = `${cx.toFixed(1)} ${cy.toFixed(1)} ${cw.toFixed(1)} ${cheight.toFixed(1)}`
console.log('crop viewBox:', crop, `aspect ${(cw/cheight).toFixed(2)}`)

// --- 3. write cropped lockups: dark-ink (from white-bg) and light-ink (from black-bg) ---
for (const [src, out] of [['logo-white', 'wordmark-dark'], ['logo-black', 'wordmark-light']]) {
  let svg = readFileSync(`${DIR}/${src}.svg`, 'utf8')
  svg = svg
    .replace(/\swidth="[^"]*"/, '')
    .replace(/\sheight="[^"]*"/, '')
    .replace(/viewBox="[^"]*"/, `viewBox="${crop}"`)
  writeFileSync(`${DIR}/${out}.svg`, svg)
  // preview render on the bg it will sit on
  const bg = out === 'wordmark-dark' ? '#e9eaea' : '#0d1117'
  await sharp(Buffer.from(svg), { density: 200 }).resize({ height: 120 }).flatten({ background: bg }).png().toFile(`/tmp/${out}-preview.png`)
}
console.log('wrote public/wordmark-dark.svg and public/wordmark-light.svg')
