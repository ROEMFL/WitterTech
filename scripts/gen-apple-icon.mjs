import sharp from 'sharp'

// 180x180 opaque apple-touch-icon. iOS ignores transparency and applies its own
// rounded mask, so this is a full-bleed navy square with the brand "W." mark.
const svg = `<svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
  <rect width="180" height="180" fill="#0d1117"/>
  <rect x="35" y="40" width="40" height="6" rx="3" fill="#fb7a1e"/>
  <text x="90" y="138" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="bold" font-size="120" letter-spacing="-6" fill="#ffffff">W<tspan fill="#fb7a1e">.</tspan></text>
</svg>`

await sharp(Buffer.from(svg)).png().toFile('/Users/robertkoerber/code/WitterTech/public/assets/apple-touch-icon.png')
const meta = await sharp('/Users/robertkoerber/code/WitterTech/public/assets/apple-touch-icon.png').metadata()
console.log('generated apple-touch-icon:', meta.width + 'x' + meta.height)
