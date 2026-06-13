import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LOCATIONS, SERVICES, getLocation } from '@/lib/locations'
import Breadcrumbs from '@/components/Breadcrumbs'

export function generateStaticParams() {
  return LOCATIONS.map(l => ({ slug: l.slug }))
}

export function generateMetadata({ params }) {
  const loc = getLocation(params.slug)
  if (!loc) return {}
  const title = `Computer Repair & IT Support in ${loc.city}, FL`
  return {
    title,
    description: loc.metaDescription,
    alternates: { canonical: `/service-areas/${loc.slug}` },
    openGraph: {
      title: `${title} | Witter Tech`,
      description: loc.metaDescription,
      type: 'website',
      siteName: 'Witter Tech',
      images: [{ url: '/assets/og.png', width: 1200, height: 630, alt: 'Witter Tech: Reliable Tech Repair & IT Support in Central Florida' }],
    },
  }
}

export default function ServiceArea({ params }) {
  const loc = getLocation(params.slug)
  if (!loc) notFound()

  const others = LOCATIONS.filter(l => l.slug !== loc.slug).slice(0, 5)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Computer repair and IT support',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Witter Tech',
      telephone: '+1-407-624-8459',
      url: 'https://wittertech.com',
      image: 'https://wittertech.com/assets/og.png',
      priceRange: '$$',
    },
    areaServed: { '@type': 'City', name: `${loc.city}, Florida` },
    url: `https://wittertech.com/service-areas/${loc.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="ghost on-dark" style={{ fontSize: '13vw', bottom: '-1vw' }}>{loc.city}</div>
        <div className="inner">
          <span className="eyebrow on-dark reveal">Service Area &middot; {loc.region}</span>
          <h1 className="anim-words">{`Computer Repair & IT Support in ${loc.city}`}</h1>
          <p className="sub reveal">{loc.intro}</p>
          <div className="hero-cta reveal" style={{ marginTop: '28px' }}>
            <div className="cta">
              <Link href="/contact" className="btn-pill accent">Get a free estimate</Link>
              <a href="tel:14076248459" className="btn-pill ghost-pill">Call &amp; text 407-624-8459</a>
            </div>
          </div>
        </div>
      </div>

      {/* LOCAL INTRO + SERVICES */}
      <section style={{ background: 'var(--paper)', padding: '90px 0' }}>
        <div className="wrap">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Service Areas', href: '/service-areas' }, { label: loc.city, href: `/service-areas/${loc.slug}` }]} />
          <div style={{ maxWidth: '760px' }}>
            <span className="eyebrow green reveal">{loc.local[0].h}</span>
            <p className="reveal" style={{ fontSize: '1.15rem', lineHeight: '1.7', color: 'var(--ink-2)', marginTop: '18px' }}>{loc.local[0].p}</p>
          </div>

          <h2 className="anim-words" style={{ marginTop: '60px' }}>{`Everything I help ${loc.city} with.`}</h2>
          <div className="loc-services">
            {SERVICES.map(s => (
              <div key={s.name} className="loc-card reveal">
                <h3>{s.name}</h3>
                <p>{s.blurb}</p>
                <Link href={s.href}>Learn more &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECOND LOCAL BLOCK + AREAS + TRUST */}
      <section style={{ background: 'var(--white)', padding: '90px 0', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div style={{ maxWidth: '760px' }}>
            <h2 className="anim-words">{loc.local[1].h}</h2>
            <p className="reveal" style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--ink-2)', marginTop: '16px' }}>{loc.local[1].p}</p>
          </div>

          <p className="reveal" style={{ marginTop: '40px', fontFamily: 'var(--font-mono),monospace', fontSize: '.85rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.04em' }}>Areas I cover around {loc.city}</p>
          <div className="loc-areas reveal">
            {loc.areas.map(a => <span key={a}>{a}</span>)}
          </div>

          <ul className="loc-trust reveal">
            <li>Rated 5.0 on Google, 36 reviews</li>
            <li>CompTIA A+ &amp; Network+, Microsoft certified</li>
            <li>Same-day service whenever scheduling allows</li>
            <li>An honest price quoted before any work starts</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--paper)', padding: '20px 0 100px' }}>
        <div className="wrap">
          <div className="cta-box reveal">
            <span className="eyebrow on-dark" style={{ justifyContent: 'center', display: 'inline-flex', marginBottom: '18px' }}>{loc.city} &middot; Central Florida</span>
            <h2>Tech trouble in {loc.city}? Let&apos;s sort it out.</h2>
            <p>Tell me what is going on in plain language and I will give you a straight answer and an honest price, no obligation.</p>
            <div className="cta-box-row">
              <Link href="/contact" className="btn-pill accent">Send Joe a message</Link>
              <a href="tel:14076248459" className="btn-pill ghost-pill">Call 407-624-8459</a>
            </div>
          </div>

          <div style={{ marginTop: '64px' }}>
            <p style={{ color: 'var(--muted)', marginBottom: '20px', fontFamily: 'var(--font-mono),monospace', fontSize: '.85rem', textTransform: 'uppercase', letterSpacing: '.04em' }}>Other areas I serve</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {others.map(o => (
                <Link key={o.slug} href={`/service-areas/${o.slug}`} className="btn-pill">{o.city}</Link>
              ))}
              <Link href="/service-areas" className="btn-pill">All service areas &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
