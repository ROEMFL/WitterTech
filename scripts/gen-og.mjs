import sharp from 'sharp'

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0d1117"/>

  <!-- ghost wordmark -->
  <text x="600" y="610" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="bold" font-size="190" letter-spacing="-8" fill="rgba(255,255,255,0.05)">Witter Tech</text>

  <!-- top accent rule -->
  <rect x="80" y="92" width="56" height="6" rx="3" fill="#fb7a1e"/>

  <!-- brand -->
  <text x="80" y="218" font-family="Helvetica, Arial, sans-serif" font-weight="bold" font-size="96" letter-spacing="-3" fill="#ffffff">Witter Tech<tspan fill="#fb7a1e">.</tspan></text>

  <!-- tagline -->
  <text x="80" y="290" font-family="Helvetica, Arial, sans-serif" font-size="40" fill="#9aa3ad">Reliable tech repair &amp; IT support,</text>
  <text x="80" y="344" font-family="Helvetica, Arial, sans-serif" font-size="40" fill="#9aa3ad">done right &#8212; priced fairly.</text>

  <!-- rating chip -->
  <rect x="80" y="404" width="330" height="64" rx="32" fill="rgba(251,122,30,0.14)" stroke="#fb7a1e" stroke-width="2"/>
  <text x="245" y="446" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="bold" font-size="28" fill="#fb7a1e">&#9733; 5.0 on Google</text>

  <!-- location chip -->
  <rect x="430" y="404" width="406" height="64" rx="32" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.16)" stroke-width="2"/>
  <text x="633" y="445" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#d7dce2">Kissimmee &#183; Orlando &#183; Central FL</text>

  <!-- footer line -->
  <circle cx="88" cy="540" r="7" fill="#74cc00"/>
  <text x="110" y="550" font-family="Helvetica, Arial, sans-serif" font-weight="bold" font-size="28" fill="#ffffff">wittertech.com</text>
  <text x="370" y="550" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#9aa3ad">407-624-8459</text>
</svg>`

await sharp(Buffer.from(svg)).png().toFile('/Users/robertkoerber/code/WitterTech/public/assets/og.png')
const meta = await sharp('/Users/robertkoerber/code/WitterTech/public/assets/og.png').metadata()
console.log('generated:', meta.width + 'x' + meta.height)
