import Link from 'next/link'
import { REVIEWS, RATING, GOOGLE_REVIEWS_URL } from '@/lib/reviews'

export const metadata = {
  title: 'Reviews',
  description: `Rated ${RATING.value} on Google from ${RATING.count} reviews. Read what homes and businesses across Kissimmee, Orlando, and Central Florida say about working with Joe at Witter Tech.`,
  alternates: { canonical: '/reviews' },
}

export default function Reviews() {
  return (
    <>
      {/* HERO */}
      <div className="page-hero">
        <div className="ghost on-dark" style={{ fontSize: '13vw', bottom: '-1vw' }}>Reviews</div>
        <div className="inner">
          <span className="eyebrow on-dark reveal">Reviews</span>
          <h1 className="anim-words">{`Rated ${RATING.value} on Google, ${RATING.count} five-star reviews.`}</h1>
          <p className="sub reveal">Real reviews from real neighbors, posted to Google under Witt-Tech Solutions, Witter Tech&apos;s legal name. Same Joe, same honest work.</p>
        </div>
      </div>

      {/* REVIEWS */}
      <section style={{ background: 'var(--paper)', padding: '90px 0' }}>
        <div className="wrap">
          <div className="rev-grid">
            {REVIEWS.map(r => (
              <div key={r.name} className="rev-card reveal">
                <div className="stars">★★★★★</div>
                <p>&ldquo;{r.text}&rdquo;</p>
                <div className="who">{r.name}<span>{r.source}</span></div>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: 'center', marginTop: '52px' }}>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="btn-pill">Read all {RATING.count} reviews on Google &rarr;</a>
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="btn-pill">Leave a review</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--white)', padding: '20px 0 100px', borderTop: '1px solid var(--line)' }}>
        <div className="wrap" style={{ paddingTop: '70px' }}>
          <div className="cta-box reveal">
            <span className="eyebrow on-dark" style={{ justifyContent: 'center', display: 'inline-flex', marginBottom: '18px' }}>Your turn</span>
            <h2>Want the same straight answer and fair price?</h2>
            <p>Tell me what is going on in plain language. The diagnostic and estimate are free, with no obligation.</p>
            <div className="cta-box-row">
              <Link href="/contact" className="btn-pill accent">Get a free estimate</Link>
              <a href="tel:14076248459" className="btn-pill ghost-pill">Call 407-624-8459</a>
            </div>
          </div>
          <div style={{ marginTop: '56px' }}>
            <p style={{ color: 'var(--muted)', marginBottom: '20px', fontFamily: 'var(--font-mono),monospace', fontSize: '.85rem', textTransform: 'uppercase', letterSpacing: '.04em' }}>Explore</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/services" className="btn-pill">All services</Link>
              <Link href="/pricing" className="btn-pill">How pricing works</Link>
              <Link href="/service-areas" className="btn-pill">Service areas</Link>
              <Link href="/about" className="btn-pill">About Joe</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
