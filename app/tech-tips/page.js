import Link from 'next/link'
import { TIPS } from '@/lib/tips'

export const metadata = {
  title: 'Tech Tips',
  description: 'Practical tech advice from Joe Witter — plain-language guides on PC health, Wi-Fi, cybersecurity, smart home setup, and knowing when to repair vs. replace.',
  alternates: { canonical: '/tech-tips' },
}

export default function TechTips() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="ghost on-dark" style={{fontSize:'13vw',bottom:'-1vw'}}>Tech Tips</div>
        <div className="inner">
          <span className="eyebrow on-dark reveal">Knowledge base</span>
          <h1 className="anim-words">Plain-language tech advice from someone who actually does this.</h1>
          <p className="sub reveal">No fluff, no affiliate links. Just practical guidance to help you make better decisions about your technology.</p>
        </div>
      </div>

      {/* TIPS GRID */}
      <section style={{background:'var(--paper)',padding:'100px 0'}}>
        <div className="wrap">
          <div className="tips-grid">
            {TIPS.map(tip => (
              <Link key={tip.slug} href={`/tech-tips/${tip.slug}`} className="tip-card reveal">
                <div className="tc-body">
                  <span className="tc-tag">{tip.tag}</span>
                  <h3>{tip.title}</h3>
                  <p>{tip.intro}</p>
                  <span className="tc-read">Read the full guide →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* BOTTOM CTA */}
          <div className="cta-box reveal" style={{marginTop:'80px'}}>
            <span className="eyebrow on-dark" style={{justifyContent:'center',display:'inline-flex',marginBottom:'20px'}}>Still not sure?</span>
            <h2>Ask Joe — he&apos;ll give you a straight answer.</h2>
            <p>Every situation is different. Describe yours in plain language and get a real recommendation — not a generic one.</p>
            <div className="cta-box-row">
              <Link href="/contact" className="btn-pill accent">Send Joe a message</Link>
              <a href="tel:14076248459" className="btn-pill ghost-pill">Call 407-624-8459</a>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED LINKS */}
      <section style={{background:'var(--white)',padding:'80px 0',borderTop:'1px solid var(--line)'}}>
        <div className="wrap" style={{textAlign:'center'}}>
          <p style={{color:'var(--muted)',marginBottom:'28px',fontFamily:'var(--font-mono),monospace',fontSize:'.9rem'}}>More from Witter Tech</p>
          <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/services" className="btn-pill">View all services</Link>
            <Link href="/faq" className="btn-pill">Read FAQ</Link>
            <Link href="/contact" className="btn-pill accent">Get help now</Link>
          </div>
        </div>
      </section>
    </>
  )
}
