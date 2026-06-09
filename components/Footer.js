import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-lead reveal">Calm, honest tech help — whenever you need it.</div>
          <div>
            <h4>Help with</h4>
            <ul>
              <li><Link href="/services#home-tech">Computers &amp; laptops</Link></li>
              <li><Link href="/services#home-tech">Wi-Fi &amp; networks</Link></li>
              <li><Link href="/services#home-tech">Smart home</Link></li>
              <li><Link href="/services#business-it">Business IT</Link></li>
              <li><Link href="/services#pc-repair">PC repairs &amp; builds</Link></li>
            </ul>
          </div>
          <div>
            <h4>Around here</h4>
            <ul>
              <li>Kissimmee</li>
              <li>Orlando</li>
              <li>St. Cloud</li>
              <li>Celebration</li>
              <li>Davenport</li>
            </ul>
          </div>
          <div>
            <h4>Reach Joe</h4>
            <ul>
              <li><a href="tel:14076248459">407-624-8459</a></li>
              <li><a href="mailto:joe@wittertech.com">joe@wittertech.com</a></li>
              <li>Mon–Fri · 8am–7pm</li>
              <li>Weekends by appt.</li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> &middot; <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="foot-ghost" aria-hidden="true">Witter Tech</div>
      <div className="wrap">
        <div className="foot-bottom">
          <span>&copy; 2026 Witter Tech &middot; a DBA of Witt-Tech Solutions LLC</span>
          <span>Website by <a href="https://roemdigital.com" target="_blank" rel="noopener noreferrer">ROEM Digital</a></span>
        </div>
      </div>
    </footer>
  )
}
