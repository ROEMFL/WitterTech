import Link from 'next/link'
import { SITE } from '@/lib/site'

export const metadata = {
  title: 'Pricing: How It Works',
  description: 'How Witter Tech prices computer repair and IT work in Central Florida: free diagnostic and estimate, a firm price before any work begins, no hidden fees, and a warranty on parts and labor.',
  alternates: { canonical: '/pricing' },
}

const FAQ = [
  { q: 'Do you charge for the diagnostic or the estimate?', a: 'No. Finding out what is wrong and what it will cost is free, with no obligation to book the repair. You only pay if you decide to go ahead and the work gets done.' },
  { q: 'How do I know the price will not change after I agree?', a: 'I quote a firm price before any work begins, and that is the price you pay. If something unexpected comes up mid-job and it would change the cost, I stop and tell you before I proceed, never after.' },
  { q: 'Why do you not post a flat price list?', a: 'Two computers with the same symptom can have very different causes. A flat rate either overcharges the simple jobs or cuts corners on the hard ones. I would rather look first, tell you the real cause, and give you a fair price for that specific fix.' },
  { q: 'How much does a custom PC build cost?', a: 'Custom builds start at $350 plus the cost of parts, and I quote the full price before I order anything. The part cost depends on what the build needs to do, and you approve the number first.' },
  { q: 'What payment methods do you take?', a: 'Cash, Zelle, CashApp, and Check. Payment is usually collected after the work is done and you are satisfied. For parts or a custom build, a deposit may be discussed in advance.' },
  { q: 'Is the work guaranteed?', a: 'Yes. Repairs are backed by a warranty on parts and labor, and screen replacements are covered. If something I worked on acts up afterward, bring it back and I will make it right.' },
  { q: 'What if I decide not to go ahead after the estimate?', a: 'That is completely fine. The diagnostic and estimate are free, there is no pressure, and you owe nothing if you choose not to proceed.' },
]

export default function Pricing() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <div className="page-hero">
        <div className="ghost on-dark" style={{ fontSize: '15vw', bottom: '-1vw' }}>Pricing</div>
        <div className="inner">
          <span className="eyebrow on-dark reveal">Pricing</span>
          <h1 className="anim-words">Honest, up-front pricing.</h1>
          <p className="sub reveal">I do not post a flat rate sheet, because the right price depends on what is actually wrong. Here is exactly how it works: the diagnostic and estimate are free, you get a firm price before any work begins, and you only pay if you decide to go ahead.</p>
          <div className="hero-cta reveal" style={{ marginTop: '28px' }}>
            <div className="cta">
              <Link href="/contact" className="btn-pill accent">Get a free estimate</Link>
              <a href={SITE.phoneHref} className="btn-pill ghost-pill">Call &amp; text {SITE.phone}</a>
            </div>
          </div>
        </div>
      </div>

      {/* HOW PRICING WORKS */}
      <section style={{ background: 'var(--paper)', padding: '90px 0' }}>
        <div className="wrap">
          <h2 className="anim-words">How pricing works</h2>
          <ul className="sd-list check reveal">
            <li>The diagnostic and estimate are free, with no obligation.</li>
            <li>I find the real problem first, then quote a firm price before any work begins.</li>
            <li>The price I quote is the price you pay. There are no hidden fees.</li>
            <li>You only pay if you decide to go ahead.</li>
            <li>If anything changes mid-job, I tell you before I proceed, never after.</li>
            <li>Repairs are backed by a warranty on parts and labor, and screen replacements are covered.</li>
          </ul>
        </div>
      </section>

      {/* FREE VS PAID */}
      <section style={{ background: 'var(--white)', padding: '90px 0', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="sd-cols">
            <div>
              <h2 className="anim-words">What is free</h2>
              <ul className="sd-list check reveal">
                <li>The full diagnostic to find the real cause</li>
                <li>A clear, firm written estimate if you want it</li>
                <li>Honest repair-or-replace advice, even when the answer is do not spend the money</li>
              </ul>
            </div>
            <div>
              <h2 className="anim-words">What you pay for</h2>
              <ul className="sd-list check reveal">
                <li>The repair, setup, or build you approve, only after you see the price</li>
                <li>Any parts the job needs, quoted before they are ordered</li>
                <li>Nothing else: no trip fees, no diagnostic fees, no surprises</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE ONE UP-FRONT PRICE */}
      <section style={{ background: 'var(--paper)', padding: '90px 0' }}>
        <div className="wrap">
          <h2 className="anim-words">The one price I can give you up front</h2>
          <div className="sd-price reveal" style={{ marginTop: '14px' }}>
            Custom PC builds start at <strong>$350 plus the cost of parts</strong>, with the full price quoted before any parts are ordered. The part cost depends on what the machine needs to do, and you approve the total first. Everything else, from repairs to networking to smart-home setup, is priced after a free diagnostic, because the honest number depends on what is actually wrong. Payment is by Cash, Zelle, CashApp, or Check.
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: 'var(--white)', padding: '90px 0', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <h2 className="anim-words">The steps, start to finish</h2>
          <div className="sd-steps reveal">
            <div className="sd-step"><span className="num" aria-hidden="true"></span><div><h3>Diagnose and quote</h3><p>I look at the problem first, then give you an honest price for the fix, in writing if you want it. This costs nothing.</p></div></div>
            <div className="sd-step"><span className="num" aria-hidden="true"></span><div><h3>You approve</h3><p>No work starts until you say go. If you would rather not proceed, that is completely fine, with no pressure, ever.</p></div></div>
            <div className="sd-step"><span className="num" aria-hidden="true"></span><div><h3>I do the work</h3><p>I complete the repair or setup, often the same day when scheduling and parts allow, and keep you posted if anything comes up.</p></div></div>
            <div className="sd-step"><span className="num" aria-hidden="true"></span><div><h3>The price holds, and so does the work</h3><p>What I quoted is what you pay, and the repair is backed by a warranty on parts and labor.</p></div></div>
          </div>
        </div>
      </section>

      {/* WHY NO FLAT LIST */}
      <section style={{ background: 'var(--paper)', padding: '90px 0' }}>
        <div className="wrap">
          <h2 className="anim-words">Why there is no flat price list</h2>
          <p className="sd-lead reveal">A slow computer might need a ten-minute cleanup or a new drive. A dead laptop might be a loose part or a failed board. If I posted one flat rate, I would either overcharge the easy jobs or lose money on the hard ones, and you would never know which one you got. Looking first and quoting honestly is fairer to both of us, and it means you never pay for work you do not need.</p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--white)', padding: '90px 0', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <h2 className="anim-words">Common questions about cost</h2>
          <div className="sd-faq reveal">
            {FAQ.map(f => (
              <div key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--paper)', padding: '20px 0 100px' }}>
        <div className="wrap">
          <div className="cta-box reveal">
            <span className="eyebrow on-dark" style={{ justifyContent: 'center', display: 'inline-flex', marginBottom: '18px' }}>No obligation</span>
            <h2>Find out what your fix costs, for free.</h2>
            <p>Tell me what is going on and I will give you a straight answer and an honest price before any work begins.</p>
            <div className="cta-box-row">
              <Link href="/contact" className="btn-pill accent">Get a free estimate</Link>
              <a href={SITE.phoneHref} className="btn-pill ghost-pill">Call {SITE.phone}</a>
            </div>
          </div>
          <div style={{ marginTop: '56px' }}>
            <p style={{ color: 'var(--muted)', marginBottom: '20px', fontFamily: 'var(--font-mono),monospace', fontSize: '.85rem', textTransform: 'uppercase', letterSpacing: '.04em' }}>Related</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/services" className="btn-pill">All services</Link>
              <Link href="/services/computer-repair" className="btn-pill">Computer Repair</Link>
              <Link href="/services/custom-pc-builds" className="btn-pill">Custom PC Builds</Link>
              <Link href="/reviews" className="btn-pill">Reviews</Link>
              <Link href="/faq" className="btn-pill">FAQ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
