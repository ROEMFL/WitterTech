import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact',
  description: 'Reach Joe Witter directly — call, text, or email for computer repair, IT support, Wi-Fi setup, or any tech help in Kissimmee, Orlando, and Central Florida.',
  alternates: { canonical: '/contact' },
}

export default function Contact() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="ghost on-dark" style={{fontSize:'14vw',bottom:'-1vw'}}>Contact</div>
        <div className="inner">
          <span className="eyebrow on-dark reveal">Get in touch</span>
          <h1 className="anim-words">Reach out — Joe reads every message and responds the same day.</h1>
          <p className="sub reveal">A sentence or two is all you need. Joe responds personally, asks any follow-up questions, and gives you a straight answer — no scripts, no runaround.</p>
        </div>
      </div>

      {/* CONTACT CONTENT */}
      <section className="contact">
        <div className="wrap contact-grid">
          <div>
            <span className="eyebrow reveal">Contact info</span>
            <h2 className="anim-words">You&apos;re talking to Joe — every time.</h2>
            <p className="lede reveal">No call centers, no ticket queues. The person who picks up the phone is the person who shows up and does the work.</p>

            <div className="cinfo reveal">
              <div className="row">
                <div className="ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <b>Call or text</b>
                  <a href="tel:14076248459">407-624-8459</a>
                  <span> &middot; Mon–Fri 8am–7pm</span>
                </div>
              </div>
              <div className="row">
                <div className="ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 5L2 7"/></svg>
                </div>
                <div>
                  <b>Email</b>
                  <a href="mailto:joe@wittertech.com">joe@wittertech.com</a>
                </div>
              </div>
              <div className="row">
                <div className="ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
                </div>
                <div>
                  <b>Hours</b>
                  <span>Mon–Fri 8am–7pm &middot; weekends by appointment</span>
                  <span style={{display:'block',marginTop:'4px'}}>Same-day service available when scheduling permits</span>
                </div>
              </div>
              <div className="row">
                <div className="ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <b>Service area</b>
                  <span>Kissimmee &middot; Orlando &middot; St. Cloud &middot; Celebration &middot; Davenport &amp; surrounding Central Florida</span>
                </div>
              </div>
              <div className="row">
                <div className="ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                </div>
                <div>
                  <b>Payment accepted</b>
                  <div className="pay">
                    <span>Cash</span><span>Zelle</span><span>CashApp</span><span>Check</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{marginTop:'36px',padding:'24px',background:'rgba(116,204,0,.07)',borderRadius:'var(--r-sm)',border:'1px solid rgba(116,204,0,.2)'}}>
              <p style={{fontFamily:'var(--font-mono),monospace',fontSize:'.82rem',color:'var(--green-deep)',marginBottom:'10px'}}>Quick links</p>
              <div style={{display:'flex',gap:'10px',flexWrap:'wrap',alignItems:'center'}}>
                <Link href="/services" style={{color:'var(--ink)',fontSize:'.95rem',fontWeight:'500',textDecoration:'underline',textUnderlineOffset:'3px',display:'inline-block',padding:'8px 0'}}>View all services</Link>
                <span style={{color:'var(--muted)'}}>·</span>
                <Link href="/faq" style={{color:'var(--ink)',fontSize:'.95rem',fontWeight:'500',textDecoration:'underline',textUnderlineOffset:'3px',display:'inline-block',padding:'8px 0'}}>Read FAQ</Link>
                <span style={{color:'var(--muted)'}}>·</span>
                <Link href="/about" style={{color:'var(--ink)',fontSize:'.95rem',fontWeight:'500',textDecoration:'underline',textUnderlineOffset:'3px',display:'inline-block',padding:'8px 0'}}>About Joe</Link>
              </div>
            </div>
          </div>

          {/* CLIENT FORM COMPONENT */}
          <div className="form reveal">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{background:'var(--white)',padding:'80px 0',borderTop:'1px solid var(--line)'}}>
        <div className="wrap">
          <div className="steps-grid">
            {[
              { step:'01', title:'Reach out', desc:"Call, text, email, or fill out the form above. Describe the issue in your own words — no tech jargon needed." },
              { step:'02', title:'Get a clear answer', desc:"Joe reads your message and responds with a straightforward plan and honest price — usually the same day." },
              { step:'03', title:'Problem solved', desc:"On-site, remote, or drop-off — whichever works best for you. Explained throughout, start to finish." },
            ].map(s => (
              <div key={s.step} className="step-card reveal">
                <div className="step-num">{s.step}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
