import Link from 'next/link'

export const metadata = {
  title: 'Services',
  description: 'Home tech support, small business IT, PC repair, custom builds, WiFi setup, smart home, data recovery, and cybersecurity for Kissimmee, Orlando, and Central Florida.',
}

export default function Services() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="ghost on-dark" style={{fontSize:'18vw',bottom:'-1vw'}}>Services</div>
        <div className="inner">
          <span className="eyebrow on-dark reveal">What we do</span>
          <h1 className="anim-words">Simple. Secure. Stress-Free tech support.</h1>
          <p className="sub reveal">One person, honest pricing, no ticket queues. Whether it&apos;s your home laptop or your entire office network — I&apos;ll handle it.</p>
        </div>
      </div>

      {/* HOME TECH SUPPORT */}
      <section className="svc-section" id="home-tech" style={{background:'var(--white)',padding:'100px 0'}}>
        <div className="wrap svc-grid">
          <div>
            <span className="eyebrow green reveal">Home Tech Support</span>
            <h2 className="anim-words">We Make Tech Easy for Your Home &amp; Family.</h2>
            <p className="lede reveal" style={{color:'var(--ink-2)'}}>Fast, friendly, and reliable tech support for your home — same-day appointments available whenever scheduling permits.</p>
            <ul className="svc-list reveal">
              <li><div><strong>PC &amp; Laptop Repair</strong><span>Speed up slow computers, fix crashes, hardware issues, screen damage, and spills. Windows and Mac.</span></div></li>
              <li><div><strong>Virus Removal &amp; System Cleanup</strong><span>Remove threats, malware, and junk — then lock things down so it doesn&apos;t happen again.</span></div></li>
              <li><div><strong>Home Wi-Fi Setup &amp; Optimization</strong><span>Stronger signal, better coverage, no more dead zones. Whole-home mesh networks and router setup.</span></div></li>
              <li><div><strong>Smart Home &amp; Device Setup</strong><span>Cameras, doorbells, smart TVs, streaming devices — installed cleanly and working together.</span></div></li>
              <li><div><strong>Printer &amp; Device Support</strong><span>Printers, tablets, and peripherals that just work. We fix the frustrating stuff so you don&apos;t have to.</span></div></li>
              <li><div><strong>Data Recovery</strong><span>Lost photos, deleted files, failed drives — if there&apos;s a way to get it back, I&apos;ll find it.</span></div></li>
            </ul>
            <div style={{marginTop:'32px'}}>
              <Link href="/contact" className="btn-pill accent">Schedule home service</Link>
            </div>
          </div>
          <div className="svc-photo reveal">
            <img src="/assets/hero-tech.jpg" alt="Home tech support" />
          </div>
        </div>
      </section>

      {/* SMALL BUSINESS IT */}
      <section className="svc-section" id="business-it" style={{background:'var(--dark)',color:'#fff',padding:'100px 0'}}>
        <div className="wrap svc-grid">
          <div className="svc-photo reveal">
            <img src="/assets/network2.jpg" alt="Small business IT support" />
          </div>
          <div>
            <span className="eyebrow on-dark reveal">Small Business IT</span>
            <h2 className="anim-words" style={{color:'#fff'}}>IT Support That Lets You Focus on Your Business.</h2>
            <p className="lede reveal" style={{color:'var(--muted-d)'}}>Local, reliable, and responsive — affordable monthly plans for Kissimmee, Orlando, and surrounding areas.</p>
            <ul className="svc-list reveal" style={{'--dot-color':'var(--green)'}}>
              <li><div><strong style={{color:'#fff'}}>Microsoft 365 Administration</strong><span style={{color:'var(--muted-d)'}}>Email setup, user management, Teams, SharePoint, and ongoing 365 support for your team.</span></div></li>
              <li><div><strong style={{color:'#fff'}}>Network &amp; Wi-Fi Reliability</strong><span style={{color:'var(--muted-d)'}}>Wired and wireless networks built to stay up. Office infrastructure that doesn&apos;t interrupt your day.</span></div></li>
              <li><div><strong style={{color:'#fff'}}>Cybersecurity &amp; Data Protection</strong><span style={{color:'var(--muted-d)'}}>Security assessments, antivirus, endpoint protection, backup strategies, and compliance basics.</span></div></li>
              <li><div><strong style={{color:'#fff'}}>Commercial PC Maintenance</strong><span style={{color:'var(--muted-d)'}}>Keep every workstation running smoothly. Hardware diagnostics, updates, and proactive maintenance.</span></div></li>
              <li><div><strong style={{color:'#fff'}}>Office Equipment Support</strong><span style={{color:'var(--muted-d)'}}>Printers, peripherals, and office tech — configured and troubleshot so your team stays productive.</span></div></li>
              <li><div><strong style={{color:'#fff'}}>Monthly IT Support Plans</strong><span style={{color:'var(--muted-d)'}}>Ongoing coverage with priority response. One local contact for everything tech-related in your business.</span></div></li>
            </ul>
            <div className="price-note" style={{marginTop:'28px',borderColor:'var(--line-d)',color:'var(--muted-d)'}}>
              Monthly plans available · Contact for custom quote based on your business size
            </div>
            <div style={{marginTop:'24px'}}>
              <Link href="/contact" className="btn-pill accent">Inquire about monthly plans</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PC REPAIR & CUSTOM BUILDS */}
      <section className="svc-section" id="pc-repair" style={{background:'var(--paper)',padding:'100px 0'}}>
        <div className="wrap svc-grid">
          <div>
            <span className="eyebrow reveal">PC Repair &amp; Custom Builds</span>
            <h2 className="anim-words">Is your computer slow, overheating, or not turning on? Don&apos;t replace it — fix it.</h2>
            <p className="lede reveal" style={{color:'var(--ink-2)'}}>Honest recommendations, no upselling. Fast turnaround. Affordable pricing. Local and reliable.</p>
            <ul className="svc-list reveal">
              <li><div><strong>Full PC Diagnostics</strong><span>A thorough check-up to identify exactly what&apos;s wrong before any repair work begins.</span></div></li>
              <li><div><strong>Hardware Repair &amp; Replacement</strong><span>Motherboards, power supplies, cooling systems, screens — repaired or replaced with quality parts.</span></div></li>
              <li><div><strong>SSD Upgrades</strong><span>A major speed boost — most computers feel brand new after swapping a hard drive for an SSD.</span></div></li>
              <li><div><strong>RAM &amp; Performance Upgrades</strong><span>More memory, better thermal paste, hardware tuning — faster without buying a whole new machine.</span></div></li>
              <li><div><strong>Virus Removal &amp; System Cleanup</strong><span>Deep clean, malware removal, bloatware uninstall, and a fresh system tune-up.</span></div></li>
              <li><div><strong>Custom PC Builds</strong><span>Spec&apos;d for your exact use case — gaming, creative work, home office, or business. Starting at $350 + parts.</span></div></li>
            </ul>
            <div className="price-note" style={{marginTop:'28px'}}>
              Custom PC builds starting at $350 + parts · Diagnostics quoted before work begins
            </div>
            <div style={{marginTop:'24px'}}>
              <Link href="/contact" className="btn-pill accent">Get a repair quote</Link>
            </div>
          </div>
          <div className="svc-photo reveal">
            <img src="/assets/bench.jpg" alt="PC repair and custom builds" />
          </div>
        </div>
      </section>

      {/* SECURITY CAMERAS */}
      <section className="svc-section" id="security" style={{background:'var(--white)',padding:'100px 0'}}>
        <div className="wrap svc-grid">
          <div className="svc-photo reveal">
            <img src="/assets/hands.jpg" alt="Security camera and smart device installation" />
          </div>
          <div>
            <span className="eyebrow green reveal">Security &amp; Smart Home</span>
            <h2 className="anim-words">Cameras, smart devices &amp; home security — set up right.</h2>
            <p className="lede reveal" style={{color:'var(--ink-2)'}}>From doorbell cameras to full security systems — installed cleanly and working together before I leave.</p>
            <ul className="svc-list reveal">
              <li><div><strong>Security Camera Installation</strong><span>Indoor and outdoor cameras, wired or wireless, positioned for maximum coverage of your property.</span></div></li>
              <li><div><strong>Video Doorbell Setup</strong><span>Ring, Nest, Eufy, Arlo — configured, connected to your phone, and working reliably.</span></div></li>
              <li><div><strong>Smart Home Automation</strong><span>Smart lights, locks, thermostats, and hubs — set up so they actually work together the way they should.</span></div></li>
              <li><div><strong>Streaming &amp; Entertainment</strong><span>Smart TVs, Roku, Fire Stick, Apple TV, and surround sound — connected and configured simply.</span></div></li>
              <li><div><strong>Security Compliance</strong><span>Basic security assessments for homes and small businesses to help protect your data and devices.</span></div></li>
            </ul>
            <div style={{marginTop:'32px'}}>
              <Link href="/contact" className="btn-pill accent">Book smart home setup</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{background:'var(--dark)',padding:'80px 0',textAlign:'center'}}>
        <div className="wrap">
          <p className="reveal" style={{color:'var(--muted-d)',fontFamily:"'Fragment Mono',monospace",fontSize:'.9rem',marginBottom:'36px'}}>Trusted by families and businesses across Central Florida since 2019</p>
          <div style={{display:'flex',gap:'32px',justifyContent:'center',flexWrap:'wrap'}}>
            {['Local & family-owned','No hidden fees','Same-day available','Honest recommendations','13+ years experience','CompTIA A+ certified'].map(t => (
              <span key={t} style={{color:'var(--muted-d)',fontFamily:"'Fragment Mono',monospace",fontSize:'.8rem',border:'1px solid var(--line-d)',borderRadius:'999px',padding:'.4rem .9rem'}}>{t}</span>
            ))}
          </div>
          <div style={{marginTop:'48px'}} className="reveal">
            <Link href="/contact" className="btn-pill accent">Tell us what&apos;s going on →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
