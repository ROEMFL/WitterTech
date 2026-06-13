import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-lead reveal">Reliable tech help for homes &amp; businesses, right here in Central Florida.</div>
          <div>
            <h3>Help with</h3>
            <ul>
              <li><Link href="/services#home-tech">Computers &amp; laptops</Link></li>
              <li><Link href="/services#home-tech">Wi-Fi &amp; networks</Link></li>
              <li><Link href="/services#home-tech">Smart home</Link></li>
              <li><Link href="/services#business-it">Business IT</Link></li>
              <li><Link href="/services#pc-repair">PC repairs &amp; builds</Link></li>
            </ul>
          </div>
          <div>
            <h3>Around here</h3>
            <ul>
              <li><Link href="/service-areas/kissimmee">Kissimmee</Link></li>
              <li><Link href="/service-areas/orlando">Orlando</Link></li>
              <li><Link href="/service-areas/st-cloud">St. Cloud</Link></li>
              <li><Link href="/service-areas/celebration">Celebration</Link></li>
              <li><Link href="/service-areas/davenport">Davenport</Link></li>
              <li><Link href="/service-areas">All service areas</Link></li>
            </ul>
          </div>
          <div>
            <h3>Reach Joe</h3>
            <ul>
              <li><a href="tel:14076248459">407-624-8459</a></li>
              <li><a href="mailto:joe@wittertech.com">joe@wittertech.com</a></li>
              <li>Mon-Fri · 8am-7pm</li>
              <li>Weekends by appt.</li>
              <li><a href="https://www.facebook.com/WittTechSol/" target="_blank" rel="noopener noreferrer">Facebook</a> &middot; <a href="https://www.instagram.com/witt.tech.solutions/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wrap">
        <img src="/wordmark-light.webp" alt="Witter Tech" className="foot-logo" width="72" height="48" />
        <div className="foot-bottom">
          <span>&copy; 2026 Witter Tech &middot; a DBA of Witt-Tech Solutions LLC &middot; <Link href="/pricing">Pricing</Link> &middot; <Link href="/reviews">Reviews</Link> &middot; <Link href="/privacy">Privacy</Link></span>
          <span>Website by <a href="https://roemdigital.com" target="_blank" rel="noopener noreferrer">ROEM Digital</a></span>
        </div>
      </div>
      <div className="foot-ghost" aria-hidden="true">Witter Tech</div>
    </footer>
  )
}
