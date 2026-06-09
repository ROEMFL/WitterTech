import Link from 'next/link'

export const metadata = {
  title: 'About Joe Witter',
  description: 'Meet Joe Witter — 13+ years of IT experience, Microsoft MCSE/MCSA and CompTIA certified, serving Central Florida families and small businesses since 2019.',
}

export default function About() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="ghost on-dark" style={{fontSize:'16vw',bottom:'-1vw'}}>About Joe</div>
        <div className="inner">
          <span className="eyebrow on-dark reveal">Meet Joe</span>
          <h1 className="anim-words">Hi, I&apos;m Joe. Witter Tech is just me — doing this the way I&apos;d want it done for my own family.</h1>
          <p className="sub reveal">13+ years in IT. Family-owned. Honest pricing. Real explanations. Serving Central Florida since 2019.</p>
        </div>
      </div>

      {/* STORY */}
      <section className="about-page">
        <div className="wrap about-page-grid">
          <div className="about-photo" id="aboutPhoto">
            <img src="/assets/joe-hero.jpg" alt="Joe Witter, owner of Witter Tech" />
          </div>
          <div>
            <span className="eyebrow green reveal">My story</span>
            <h2 className="anim-words">Built on a passion for making technology work for people — not the other way around.</h2>
            <p className="reveal">I started Witt-Tech Solutions because I&apos;ve always enjoyed helping people solve technology problems and making technology easier to understand. Technology has been a passion of mine for more than 13 years, both professionally and personally. What I enjoy most is helping families and small businesses get reliable, affordable IT support without the frustration that often comes with technical issues.</p>
            <p className="reveal">Witter Tech is family-inspired. I wanted to build something of my own that reflects my values of honesty, reliability, and treating customers the way I would want my own family treated. Clear communication, fair pricing, and doing the job right the first time — that&apos;s what you can count on from me.</p>
            <p className="reveal">Witt-Tech Solutions was founded in 2019 as a way to provide trusted technology support to local families and small businesses throughout Central Florida. While continuing my career in Information Technology leadership, I launched Witter Tech to offer personalized service and practical technology solutions.</p>
            <div className="creds reveal" style={{marginTop:'28px'}}>
              <span>13+ years in IT</span>
              <span>CompTIA A+ &amp; Network+</span>
              <span>Microsoft MCSE / MCSA</span>
              <span>Security+ in progress</span>
              <span>CISSP in progress</span>
              <span>Family-owned since 2019</span>
            </div>
            <div className="owner-sign reveal" style={{marginTop:'28px'}}>Joe Witter<small>Owner, Witter Tech &middot; DBA of Witt-Tech Solutions LLC</small></div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="cert-section">
        <div className="wrap">
          <div style={{textAlign:'center',maxWidth:'600px',margin:'0 auto'}}>
            <span className="eyebrow reveal">Credentials</span>
            <h2 className="anim-words" style={{marginTop:'16px'}}>Enterprise-trained. Neighbor-level care.</h2>
            <p className="reveal" style={{color:'var(--muted)',marginTop:'14px'}}>Over 13 years of training, professional development, and real-world experience — brought to your home or office.</p>
          </div>
          <div className="cert-grid">
            <div className="cert-card reveal">
              <div className="badge">Microsoft</div>
              <h4>MCSE</h4>
              <p>Microsoft Certified Solutions Expert — enterprise infrastructure and cloud services.</p>
            </div>
            <div className="cert-card reveal">
              <div className="badge">Microsoft</div>
              <h4>MCSA</h4>
              <p>Microsoft Certified Solutions Associate — Windows Server administration and management.</p>
            </div>
            <div className="cert-card reveal">
              <div className="badge">CompTIA</div>
              <h4>A+</h4>
              <p>Industry-standard hardware and software troubleshooting certification.</p>
            </div>
            <div className="cert-card reveal">
              <div className="badge">CompTIA</div>
              <h4>Network+</h4>
              <p>Networking fundamentals, infrastructure design, and troubleshooting.</p>
            </div>
            <div className="cert-card reveal" style={{borderStyle:'dashed'}}>
              <div className="badge" style={{background:'rgba(251,122,30,.1)',color:'var(--accent-deep)'}}>In Progress</div>
              <h4>Security+</h4>
              <p>CompTIA Security+ — cybersecurity fundamentals and risk management.</p>
            </div>
            <div className="cert-card reveal" style={{borderStyle:'dashed'}}>
              <div className="badge" style={{background:'rgba(251,122,30,.1)',color:'var(--accent-deep)'}}>In Progress</div>
              <h4>CISSP</h4>
              <p>Certified Information Systems Security Professional — advanced security leadership.</p>
            </div>
          </div>

          {/* Experience highlights */}
          <div style={{marginTop:'80px',padding:'48px',background:'var(--white)',borderRadius:'var(--r)',border:'1px solid var(--line)'}}>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'48px'}}>
              <div className="reveal">
                <h3 style={{fontSize:'1.3rem',marginBottom:'16px'}}>Experience &amp; Specialties</h3>
                <p style={{color:'var(--ink-2)',marginBottom:'16px',lineHeight:'1.7'}}>I bring more than 13 years of Information Technology experience, including leadership, infrastructure management, cybersecurity, cloud services, networking, and end-user support.</p>
                <ul style={{listStyle:'none',display:'grid',gap:'10px'}}>
                  {['Computer repair & troubleshooting','Microsoft 365 administration','Cybersecurity & data protection','Network design & support','Smart home technology','Small business IT services'].map(s => (
                    <li key={s} style={{display:'flex',gap:'10px',alignItems:'center',fontSize:'.96rem',color:'var(--ink-2)'}}>
                      <span style={{width:'7px',height:'7px',borderRadius:'50%',background:'var(--green)',flex:'none',display:'block'}}></span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="reveal">
                <h3 style={{fontSize:'1.3rem',marginBottom:'16px'}}>Accomplishments</h3>
                <p style={{color:'var(--ink-2)',lineHeight:'1.7'}}>Over the course of my career, I have supported thousands of users and managed technology environments that require high levels of uptime and security. I have helped customers recover from malware infections, hardware failures, network outages, and performance issues while minimizing downtime.</p>
                <p style={{color:'var(--muted)',marginTop:'16px',fontFamily:"'Fragment Mono',monospace",fontSize:'.84rem'}}>Customers often compliment my responsiveness, professionalism, and ability to explain technical concepts in a way that is easy to understand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOURS & SERVICE AREA */}
      <section className="hours-section">
        <div className="wrap">
          <div style={{textAlign:'center',maxWidth:'560px',margin:'0 auto'}}>
            <span className="eyebrow reveal">Availability</span>
            <h2 className="anim-words" style={{marginTop:'16px'}}>Hours &amp; service area.</h2>
            <p className="reveal" style={{color:'var(--muted)',marginTop:'14px'}}>On-site, remote, or drop-off — whatever works best for you.</p>
          </div>
          <div className="hours-grid">
            <div className="hours-card reveal">
              <div className="icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              </div>
              <h4>Business Hours</h4>
              <p>Monday – Friday: 8:00 AM – 7:00 PM<br/>Saturday &amp; Sunday: By appointment<br/>Same-day service available whenever scheduling permits.</p>
            </div>
            <div className="hours-card reveal">
              <div className="icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h4>Service Area</h4>
              <p>Kissimmee · Orlando · St. Cloud · Celebration · Davenport · and surrounding Central Florida communities.</p>
            </div>
            <div className="hours-card reveal">
              <div className="icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <h4>Get in Touch</h4>
              <p>Call or text: <a href="tel:14076248459" style={{color:'var(--accent-deep)',fontWeight:'600'}}>407-624-8459</a><br/>Email: <a href="mailto:joe@wittertech.com" style={{color:'var(--accent-deep)',fontWeight:'600'}}>joe@wittertech.com</a><br/>Payment: Cash, Zelle, CashApp, Check</p>
            </div>
          </div>

          {/* Community */}
          <div style={{marginTop:'60px',padding:'44px',background:'rgba(116,204,0,.07)',borderRadius:'var(--r)',border:'1px solid rgba(116,204,0,.2)'}}>
            <div className="reveal" style={{maxWidth:'680px'}}>
              <span className="eyebrow green" style={{marginBottom:'16px',display:'inline-flex'}}>Community</span>
              <h3 style={{fontSize:'1.4rem',fontWeight:'600',margin:'12px 0 14px'}}>Giving back to Central Florida</h3>
              <p style={{color:'var(--ink-2)',lineHeight:'1.7'}}>Witter Tech is a locally owned, family-owned business proudly serving the Central Florida community. Giving back to the community is important to me — I enjoy helping local families and small businesses make the most of their technology and am open to participating in community events, technology workshops, and educational opportunities that help people become more comfortable and confident with technology.</p>
              <p style={{color:'var(--muted)',marginTop:'12px',fontFamily:"'Fragment Mono',monospace",fontSize:'.84rem'}}>Member: CAFA · Serving Kissimmee, Orlando &amp; surrounding areas</p>
            </div>
          </div>

          <div style={{textAlign:'center',marginTop:'60px'}} className="reveal">
            <Link href="/contact" className="btn-pill accent" style={{fontSize:'1.05rem',padding:'1.1rem 2.2rem'}}>Ready to get started? Let&apos;s talk. →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
