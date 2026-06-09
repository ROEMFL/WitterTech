import Link from 'next/link'

export const metadata = {
  title: 'FAQ',
  description: 'Common questions about Witter Tech services, pricing, scheduling, and how Joe works. Straight answers — no scripts, no hedging.',
}

const FAQS = [
  {
    category: 'Getting started',
    items: [
      {
        q: 'Do you come to me, or do I bring the device to you?',
        a: "Whatever's easiest for you. I work on-site at homes and businesses across Central Florida, I can often help remotely over the internet, or you're welcome to drop a device off. We'll figure out the simplest option when you reach out.",
      },
      {
        q: 'How quickly can you help?',
        a: "Often the same day, depending on the schedule and the parts needed. When you reach out I'll give you a realistic window — not an empty promise. Same-day service is available whenever scheduling permits.",
      },
      {
        q: 'Do I need to explain it in technical terms?',
        a: "Not at all. Just describe what's happening in plain language — \"it's slow,\" \"it won't turn on,\" \"the Wi-Fi keeps dropping.\" That's enough to get started. I'll ask any follow-up questions I need.",
      },
      {
        q: 'Which areas do you serve?',
        a: 'Kissimmee, Orlando, St. Cloud, Celebration, Davenport, and the surrounding Central Florida communities. Not sure if you\'re in range? Just ask — I\'ll tell you straight.',
      },
    ],
  },
  {
    category: 'Pricing & payment',
    items: [
      {
        q: 'How much is this going to cost?',
        a: "You'll get an honest price up front, before any work begins. I'd rather lose a job than surprise someone with a bill. If something turns out simpler than expected, that's reflected in what you pay — you won't be charged for time that wasn't needed.",
      },
      {
        q: 'Are there any hidden fees?',
        a: "Never. What I quote is what you pay. If something changes mid-job and it affects the price, I'll tell you before proceeding. No surprises, no extras tacked on at the end.",
      },
      {
        q: 'How do I pay?',
        a: 'I accept Cash, Zelle, CashApp, and Check. Payment is typically collected after the work is complete and you\'re satisfied. For parts or custom builds, a deposit may be discussed in advance.',
      },
      {
        q: 'Do you offer monthly IT support plans for businesses?',
        a: "Yes. Monthly support plans are available for small businesses that want ongoing coverage — priority response, proactive maintenance, and one local contact for everything tech-related. Contact me to discuss what's right for your business.",
      },
      {
        q: 'What does a custom PC build cost?',
        a: 'Custom builds start at $350 plus the cost of parts. The final price depends on what you need the machine to do — gaming, creative work, home office, business use. I\'ll spec it out and give you an honest estimate before any parts are ordered.',
      },
    ],
  },
  {
    category: 'Repairs & safety',
    items: [
      {
        q: 'Will my files and photos be safe?',
        a: "In most repairs your data stays exactly where it is. If there's ever a chance something could be lost, I'll tell you clearly before I start — so you can decide what you're comfortable with. Nothing happens behind your back.",
      },
      {
        q: 'What if my computer can\'t be fixed?',
        a: "Then I'll tell you straight, and help you figure out the most sensible next step — whether that's a replacement, recovering what's on it, or another option. You won't pay for work that didn't help.",
      },
      {
        q: 'Do you work on Macs as well as Windows PCs?',
        a: 'Yes, I work on both. Most common repairs — slow performance, virus removal, hardware issues, WiFi problems — apply to both platforms. Some specialized Mac hardware repairs may have limitations, which I\'ll always disclose upfront.',
      },
      {
        q: 'Can you recover files from a dead hard drive?',
        a: "In many cases, yes. Data recovery depends on the type and extent of the failure — I'll do a diagnostic first and tell you honestly what's recoverable and what it will take. I won't charge for recovery attempts that don't succeed.",
      },
    ],
  },
  {
    category: 'Services & scope',
    items: [
      {
        q: 'Do you do smart home setup — cameras, doorbells, etc.?',
        a: 'Yes. Security cameras, video doorbells, smart locks, thermostats, streaming devices — installed, configured, and connected to your phone before I leave. I also handle home automation hubs and device pairing.',
      },
      {
        q: 'Can you help with my office network?',
        a: "Absolutely. I set up and maintain networks for small businesses — routers, switches, access points, VPNs, and server environments. I also help with Microsoft 365 setup and administration, email, and office equipment.",
      },
      {
        q: 'Do you offer cybersecurity services?',
        a: "Yes. I provide cybersecurity assessments, antivirus setup, endpoint protection, secure network configuration, and data backup strategies. For small businesses, I can also help with basic compliance and security policy guidance.",
      },
      {
        q: 'What if my issue isn\'t listed anywhere on your site?',
        a: "Just describe it in your own words — if it's technology-related, I can almost certainly help or point you in the right direction. I'd rather you ask and find out than assume I can't help.",
      },
    ],
  },
]

export default function FAQ() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="ghost on-dark" style={{fontSize:'14vw',bottom:'-1vw'}}>FAQ</div>
        <div className="inner">
          <span className="eyebrow on-dark reveal">Questions</span>
          <h1 className="anim-words">Straight answers to the questions I get most.</h1>
          <p className="sub reveal">Still unsure? Ask Joe directly — he&apos;d rather answer a question than have you guess.</p>
        </div>
      </div>

      {/* FAQ SECTIONS */}
      <section style={{background:'var(--paper)',padding:'100px 0'}}>
        <div className="wrap">
          <div style={{maxWidth:'860px',margin:'0 auto'}}>
            {FAQS.map(section => (
              <div key={section.category} style={{marginBottom:'64px'}}>
                <div style={{display:'flex',alignItems:'center',gap:'14px',marginBottom:'8px'}}>
                  <span className="eyebrow green">{section.category}</span>
                </div>
                <div>
                  {section.items.map((item, i) => (
                    <div key={i} className="faq-item">
                      <button className="faq-q">
                        {item.q}
                        <span className="ic"></span>
                      </button>
                      <div className="faq-a">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* STILL HAVE QUESTIONS */}
            <div className="reveal" style={{marginTop:'20px',padding:'44px',background:'var(--dark)',borderRadius:'var(--r)',textAlign:'center'}}>
              <span className="eyebrow on-dark" style={{justifyContent:'center',display:'inline-flex',marginBottom:'16px'}}>Still have questions?</span>
              <h2 style={{fontSize:'clamp(1.6rem,3vw,2.2rem)',color:'#fff',fontWeight:'600',margin:'0 0 16px'}}>Ask Joe directly — he&apos;ll answer in plain language.</h2>
              <p style={{color:'var(--muted-d)',maxWidth:'44ch',margin:'0 auto 32px'}}>No phone trees, no ticket systems. You&apos;re talking to the person who&apos;ll actually do the work.</p>
              <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
                <Link href="/contact" className="btn-pill accent">Send a message</Link>
                <a href="tel:14076248459" className="btn-pill" style={{background:'rgba(255,255,255,.08)',color:'#fff',border:'1px solid rgba(255,255,255,.12)'}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight:'6px'}}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  407-624-8459
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
