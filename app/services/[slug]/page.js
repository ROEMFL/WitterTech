import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SERVICE_PAGES, getServicePage } from '@/lib/servicePages'

export function generateStaticParams() {
  return SERVICE_PAGES.map(s => ({ slug: s.slug }))
}

export function generateMetadata({ params }) {
  const svc = getServicePage(params.slug)
  if (!svc) return {}
  // Some metaTitles include the brand; strip it so the layout title template
  // ("%s | Witter Tech") does not double it.
  const title = svc.metaTitle.replace(/\s*\|\s*Witter Tech\s*$/i, '')
  return {
    title,
    description: svc.metaDescription,
    alternates: { canonical: `/services/${svc.slug}` },
    openGraph: {
      title: `${title} | Witter Tech`,
      description: svc.metaDescription,
      type: 'website',
      siteName: 'Witter Tech',
      images: [{ url: '/assets/og.png', width: 1200, height: 630, alt: 'Witter Tech: Reliable Tech Repair & IT Support in Central Florida' }],
    },
  }
}

export default function ServicePage({ params }) {
  const svc = getServicePage(params.slug)
  if (!svc) notFound()

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: svc.name,
    description: svc.metaDescription,
    url: `https://wittertech.com/services/${svc.slug}`,
    areaServed: { '@type': 'AdministrativeArea', name: 'Central Florida' },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Witter Tech',
      telephone: '+1-407-624-8459',
      email: 'joe@wittertech.com',
      url: 'https://wittertech.com',
      image: 'https://wittertech.com/assets/og.png',
      priceRange: '$$',
    },
  }
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: svc.faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <div className="page-hero">
        <div className="ghost on-dark" style={{ fontSize: '13vw', bottom: '-1vw' }}>{svc.tag}</div>
        <div className="inner">
          <span className="eyebrow on-dark reveal">{svc.name}</span>
          <h1 className="anim-words">{svc.h1}</h1>
          <p className="sub reveal">{svc.intro}</p>
          <div className="hero-cta reveal" style={{ marginTop: '28px' }}>
            <div className="cta">
              <Link href="/contact" className="btn-pill accent">Get a free estimate</Link>
              <a href="tel:14076248459" className="btn-pill ghost-pill">Call &amp; text 407-624-8459</a>
            </div>
          </div>
        </div>
      </div>

      {/* OVERVIEW + INCLUDED */}
      <section style={{ background: 'var(--paper)', padding: '90px 0' }}>
        <div className="wrap">
          <p className="sd-lead reveal">{svc.overview}</p>

          <h2 className="anim-words" style={{ marginTop: '56px' }}>What is included</h2>
          <ul className="sd-grid check reveal">
            {svc.included.map(i => <li key={i}>{i}</li>)}
          </ul>

          {svc.notIncluded?.length > 0 && (
            <>
              <h2 className="anim-words" style={{ marginTop: '52px' }}>What is handled separately</h2>
              <ul className="sd-list muted reveal">
                {svc.notIncluded.map(i => <li key={i}>{i}</li>)}
              </ul>
            </>
          )}
        </div>
      </section>

      {/* WHO IT IS FOR + OUTCOMES */}
      <section style={{ background: 'var(--white)', padding: '90px 0', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="sd-cols">
            <div>
              <h2 className="anim-words">Who this is for</h2>
              <ul className="sd-list check reveal">
                {svc.bestFor.map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="anim-words">What it solves</h2>
              <ul className="sd-list check reveal">
                {svc.outcomes.map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: 'var(--paper)', padding: '90px 0' }}>
        <div className="wrap">
          <h2 className="anim-words">How it works</h2>
          <div className="sd-steps reveal">
            {svc.process.map(step => (
              <div key={step.h} className="sd-step">
                <span className="num" aria-hidden="true"></span>
                <div>
                  <h3>{step.h}</h3>
                  <p>{step.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPECTATIONS + TRUST */}
      <section style={{ background: 'var(--white)', padding: '90px 0', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <h2 className="anim-words">What you can expect</h2>
          <ul className="sd-list check reveal">
            {svc.guarantees.map(i => <li key={i}>{i}</li>)}
          </ul>
          <ul className="loc-trust reveal" style={{ marginTop: '36px' }}>
            <li>Rated 5.0 on Google, 36 reviews</li>
            <li>CompTIA A+ &amp; Network+, Microsoft certified, serving Central Florida since 2019</li>
            <li>On-site, remote, or drop-off, whichever is easiest for you</li>
          </ul>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ background: 'var(--paper)', padding: '90px 0' }}>
        <div className="wrap">
          <h2 className="anim-words">What it costs</h2>
          <div className="sd-price reveal" style={{ marginTop: '14px' }}>{svc.pricing}</div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--white)', padding: '90px 0', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <h2 className="anim-words">Common questions</h2>
          <div className="sd-faq reveal">
            {svc.faq.map(f => (
              <div key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + RELATED */}
      <section style={{ background: 'var(--paper)', padding: '20px 0 100px' }}>
        <div className="wrap">
          <div className="cta-box reveal">
            <span className="eyebrow on-dark" style={{ justifyContent: 'center', display: 'inline-flex', marginBottom: '18px' }}>Central Florida</span>
            <h2>Get a free estimate on your {svc.name.toLowerCase()}.</h2>
            <p>Tell me what is going on in plain language. I will give you a straight answer and an honest price before any work begins, with no obligation.</p>
            <div className="cta-box-row">
              <Link href="/contact" className="btn-pill accent">Send Joe a message</Link>
              <a href="tel:14076248459" className="btn-pill ghost-pill">Call 407-624-8459</a>
            </div>
          </div>

          <div style={{ marginTop: '64px' }}>
            <p style={{ color: 'var(--muted)', marginBottom: '20px', fontFamily: 'var(--font-mono),monospace', fontSize: '.85rem', textTransform: 'uppercase', letterSpacing: '.04em' }}>Related</p>
            <div className="sd-related">
              {svc.related.map(r => (
                <Link key={r.href} href={r.href} className="btn-pill">{r.label}</Link>
              ))}
              <Link href="/services" className="btn-pill">All services &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
