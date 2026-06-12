import sharp from 'sharp'

// Navy full-bleed "W." mark with generous safe-zone padding so the same icon
// works for purpose "any maskable" (platform masks crop up to ~20% on each edge).
const icon = (size) => `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="#0d1117"/>
  <text x="${size / 2}" y="${size * 0.63}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="bold" font-size="${size * 0.5}" letter-spacing="${-size * 0.028}" fill="#ffffff">W<tspan fill="#fb7a1e">.</tspan></text>
</svg>`

for (const size of [192, 512]) {
  const out = `/Users/robertkoerber/code/WitterTech/public/assets/icon-${size}.png`
  await sharp(Buffer.from(icon(size))).png().toFile(out)
  const m = await sharp(out).metadata()
  console.log(`icon-${size}.png: ${m.width}x${m.height}`)
}
