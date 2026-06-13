import sharp from 'sharp'

const DIR = '/Users/robertkoerber/code/WitterTech/public'

// Header/footer wordmark lockups: rasterize the cropped SVGs (which still carry
// ~115KB of wave path data each) to small WebP. Displayed at ~46px tall, so 3x
// is plenty crisp. This replaces ~230KB of SVG per page load with ~10-20KB.
for (const name of ['wordmark-dark', 'wordmark-light']) {
  const out = `${DIR}/${name}.webp`
  await sharp(`${DIR}/${name}.svg`, { density: 220 }).resize({ width: 440 }).webp({ quality: 90 }).toFile(out)
  const m = await sharp(out).metadata()
  console.log(`${name}.webp: ${m.width}x${m.height}`)
}

// Coming-soon full wave logo, displayed up to ~280px. Render at 3x.
{
  const out = `${DIR}/comingsoon-logo.webp`
  await sharp(`${DIR}/logo-black.svg`, { density: 200 }).resize({ width: 840 }).webp({ quality: 88 }).toFile(out)
  const m = await sharp(out).metadata()
  console.log(`comingsoon-logo.webp: ${m.width}x${m.height}`)
}
