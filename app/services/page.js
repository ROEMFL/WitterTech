import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Services',
  description: 'One local technician for everything tech: computer repair, Wi-Fi, smart home, and small business IT in Kissimmee, Orlando, and surrounding Central Florida. Honest upfront pricing, same-day service available.',
  alternates: { canonical: '/services' },
}

export default function Services() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="ghost on-dark" style={{fontSize:'18vw',bottom:'-1vw'}}>Services</div>
        <div className="inner">
          <span className="eyebrow on-dark reveal">What I do</span>
          <h1 className="anim-words">One technician. Honest pricing. Every job done right.</h1>
          <p className="sub reveal">No ticket queues, no outsourcing. Whether it&apos;s your home laptop or your entire office network — I&apos;ll handle it.</p>
        </div>
      </div>

      {/* HOME TECH SUPPORT */}
      <section className="svc-section" id="home-tech">
        <div className="wrap svc-grid">
          <div>
            <span className="eyebrow green reveal">Home Tech Support</span>
            <h2 className="anim-words">Making tech simple for your home &amp; family.</h2>
            <p className="lede reveal">Fast, reliable tech help for your home — same-day appointments available whenever scheduling permits.</p>
            <ul className="svc-list reveal">
              <li><div><strong>PC &amp; Laptop Repair</strong><span>Speed up slow computers, fix crashes, hardware issues, screen damage, and spills. Windows and Mac.</span></div></li>
              <li><div><strong>Virus Removal &amp; System Cleanup</strong><span>Remove threats, malware, and junk — then lock things down so it doesn&apos;t happen again.</span></div></li>
              <li><div><strong>Home Wi-Fi Setup &amp; Optimization</strong><span>Stronger signal, better coverage, no more dead zones. Whole-home mesh networks and router setup.</span></div></li>
              <li><div><strong>Smart Home &amp; Device Setup</strong><span>Cameras, doorbells, smart TVs, streaming devices — installed cleanly and working together.</span></div></li>
              <li><div><strong>Printer &amp; Device Support</strong><span>Printers, tablets, and peripherals that just work. I fix the frustrating stuff so you don&apos;t have to.</span></div></li>
              <li><div><strong>Data Recovery</strong><span>Lost photos, deleted files, failed drives — if there&apos;s a way to get it back, I&apos;ll find it.</span></div></li>
            </ul>
            <div style={{marginTop:'32px'}}>
              <Link href="/contact" className="btn-pill accent">Schedule home service</Link>
            </div>
          </div>
          <div className="svc-photo reveal">
            <Image src="/assets/hero-tech.jpg" alt="Home computer repair and tech support in Central Florida" fill style={{objectFit:'cover'}} sizes="(max-width:980px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* SMALL BUSINESS IT */}
      <section className="svc-section dark" id="business-it">
        <div className="wrap svc-grid">
          <div className="svc-photo reveal">
            <Image src="/assets/network2.jpg" alt="Small business IT and network support in Kissimmee and Orlando" fill style={{objectFit:'cover'}} sizes="(max-width:980px) 100vw, 50vw" />
          </div>
          <div>
            <span className="eyebrow on-dark reveal">Small Business IT</span>
            <h2 className="anim-words">IT support that lets you focus on your business.</h2>
            <p className="lede reveal">Local, reliable, and responsive — affordable monthly plans for Kissimmee, Orlando, and surrounding areas.</p>
            <ul className="svc-list reveal">
              <li><div><strong>Microsoft 365 Administration</strong><span>Email setup, user management, Teams, SharePoint, and ongoing 365 support for your team.</span></div></li>
              <li><div><strong>Network &amp; Wi-Fi Reliability</strong><span>Wired and wireless networks built to stay up. Office infrastructure that doesn&apos;t interrupt your day.</span></div></li>
              <li><div><strong>Cybersecurity &amp; Data Protection</strong><span>Security assessments, antivirus, endpoint protection, backup strategies, and compliance basics.</span></div></li>
              <li><div><strong>Commercial PC Maintenance</strong><span>Keep every workstation running smoothly. Hardware diagnostics, updates, and proactive maintenance.</span></div></li>
              <li><div><strong>Office Equipment Support</strong><span>Printers, peripherals, and office tech — configured and troubleshot so your team stays productive.</span></div></li>
              <li><div><strong>Monthly IT Support Plans</strong><span>Ongoing coverage with priority response. One local contact for everything tech-related in your business.</span></div></li>
            </ul>
            <div className="price-note" style={{marginTop:'28px'}}>
              Monthly plans available · Contact for custom quote based on your business size
            </div>
            <div style={{marginTop:'24px'}}>
              <Link href="/contact" className="btn-pill accent">Inquire about monthly plans</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PC REPAIR & CUSTOM BUILDS */}
      <section className="svc-section paper" id="pc-repair">
        <div className="wrap svc-grid">
          <div>
            <span className="eyebrow reveal">PC Repair &amp; Custom Builds</span>
            <h2 className="anim-words">Is your computer slow, overheating, or not turning on? Don&apos;t replace it — fix it.</h2>
            <p className="lede reveal">Honest recommendations, no upselling. Fast turnaround. Affordable pricing. Local and reliable.</p>
            <ul className="svc-list reveal">
              <li><div><strong>Full PC Diagnostics</strong><span>A thorough check-up to identify exactly what&apos;s wrong before any repair work begins.</span></div></li>
              <li><div><strong>Hardware Repair &amp; Replacement</strong><span>Motherboards, power supplies, cooling systems, screens — repaired or replaced with quality parts.</span></div></li>
              <li><div><strong>SSD Upgrades</strong><span>A major speed boost — most computers feel brand new after swapping a hard drive for an SSD. <Link href="/tech-tips/ssd-upgrade-signs" className="svc-tip-link">Is an SSD right for your machine?</Link></span></div></li>
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
            <Image src="/assets/bench.jpg" alt="PC repair and custom computer builds in Central Florida" fill style={{objectFit:'cover'}} sizes="(max-width:980px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* SECURITY CAMERAS */}
      <section className="svc-section" id="security">
        <div className="wrap svc-grid">
          <div className="svc-photo reveal">
            <Image src="/assets/hands.jpg" alt="Security camera and smart home installation in Central Florida" fill style={{objectFit:'cover'}} sizes="(max-width:980px) 100vw, 50vw" />
          </div>
          <div>
            <span className="eyebrow green reveal">Security &amp; Smart Home</span>
            <h2 className="anim-words">Cameras, smart devices &amp; home security — set up right.</h2>
            <p className="lede reveal">From doorbell cameras to full security systems — installed cleanly and working together before I leave.</p>
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

      {/* HOW PRICING WORKS */}
      <section className="svc-section paper">
        <div className="wrap">
          <div style={{textAlign:'center',maxWidth:'600px',margin:'0 auto 48px'}}>
            <span className="eyebrow reveal">How pricing works</span>
            <h2 className="anim-words" style={{marginTop:'16px'}}>You&apos;ll know the price before any work begins.</h2>
          </div>
          <div className="steps-grid">
            <div className="step-card reveal">
              <div className="step-num">01</div>
              <h3>Diagnose &amp; quote</h3>
              <p>I look at the problem first, then give you an honest price for the fix — in writing if you want it.</p>
            </div>
            <div className="step-card reveal">
              <div className="step-num">02</div>
              <h3>You approve</h3>
              <p>No work starts until you say go. If you&apos;d rather not proceed, that&apos;s completely fine — no pressure, ever.</p>
            </div>
            <div className="step-card reveal">
              <div className="step-num">03</div>
              <h3>The price holds</h3>
              <p>What I quote is what you pay. If anything changes mid-job, I tell you before proceeding — never after.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust-bar">
        <div className="wrap">
          <p className="reveal">Trusted by families and businesses across Central Florida since 2019</p>
          <div className="trust-chips reveal">
            {['5.0 ★ on Google · 36 reviews','Local & family-owned','No hidden fees','Same-day available','Honest recommendations','13+ years experience','CompTIA A+ certified'].map(t => (
              <span key={t} className="trust-chip">{t}</span>
            ))}
          </div>
          <div className="reveal">
            <Link href="/contact" className="btn-pill accent">Get a free estimate →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
