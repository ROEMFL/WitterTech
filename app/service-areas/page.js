import Link from 'next/link'
import { LOCATIONS } from '@/lib/locations'
import { SITE } from '@/lib/site'

export const metadata = {
  title: 'Service Areas in Central Florida',
  description:
    'Witter Tech provides on-site computer repair and IT support across Central Florida, including Kissimmee, Orlando, St. Cloud, Celebration, Davenport, and the communities near Disney.',
  alternates: { canonical: '/service-areas' },
}

export default function ServiceAreas() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="ghost on-dark" style={{ fontSize: '12vw', bottom: '-1vw' }}>Local</div>
        <div className="inner">
          <span className="eyebrow on-dark reveal">Service Areas</span>
          <h1 className="anim-words">On-site tech help across Central Florida.</h1>
          <p className="sub reveal">I come to you. Pick your town for local computer repair and IT support, or just call and I will tell you straight whether you are in range.</p>
        </div>
      </div>

      {/* AREA GRID */}
      <section style={{ background: 'var(--paper)', padding: '100px 0' }}>
        <div className="wrap">
          <div className="loc-services">
            {LOCATIONS.map(loc => (
              <Link key={loc.slug} href={`/service-areas/${loc.slug}`} className="loc-card loc-card-link reveal">
                <h2>{loc.city}</h2>
                <p>{loc.region}</p>
                <span className="loc-read">Computer repair &amp; IT support &rarr;</span>
              </Link>
            ))}
          </div>

          <div className="cta-box reveal" style={{ marginTop: '80px' }}>
            <span className="eyebrow on-dark" style={{ justifyContent: 'center', display: 'inline-flex', marginBottom: '18px' }}>Not listed?</span>
            <h2>Don&apos;t see your town? Just ask.</h2>
            <p>I cover much of Central Florida and the surrounding communities. Tell me where you are and I will let you know.</p>
            <div className="cta-box-row">
              <Link href="/contact" className="btn-pill accent">Send Joe a message</Link>
              <a href={SITE.phoneHref} className="btn-pill ghost-pill">Call {SITE.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
