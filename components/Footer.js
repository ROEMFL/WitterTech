import Link from 'next/link'
import { SITE, MAILTO } from '@/lib/site'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-lead reveal">Reliable tech help for homes &amp; businesses, right here in Central Florida.</div>
          {/* display:contents so this landmark adds footer-nav semantics without
              changing the foot-top grid layout. */}
          <nav className="foot-nav" aria-label="Footer">
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
                <li><a href={SITE.phoneHref}>{SITE.phone}</a></li>
                <li><a href={MAILTO}>{SITE.email}</a></li>
                <li>Mon-Fri · 8am-7pm</li>
                <li>Weekends by appt.</li>
                <li><a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a> &middot; <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* Big watermark, above the divider line. */}
      <div className="foot-ghost" aria-hidden="true">Witter Tech</div>
      <div className="wrap">
        {/* eslint-disable-next-line @next/next/no-img-element -- small fixed-size webp lockup, next/image not needed */}
        <img src="/wordmark-light.webp" alt="Witter Tech" className="foot-logo" width="76" height="72" />
        <div className="foot-bottom">
          <span>&copy; 2026 {SITE.name} &middot; a DBA of {SITE.legalName} &middot; <Link href="/pricing">Pricing</Link> &middot; <Link href="/reviews">Reviews</Link> &middot; <Link href="/privacy">Privacy</Link></span>
          <span>Website by <a href="https://roemdigital.com" target="_blank" rel="noopener noreferrer">ROEM Digital</a></span>
        </div>
      </div>
    </footer>
  )
}
