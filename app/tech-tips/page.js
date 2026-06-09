import Link from 'next/link'

export const metadata = {
  title: 'Tech Tips',
  description: 'Practical tech advice from Joe Witter — plain-language guides on PC health, Wi-Fi, cybersecurity, smart home setup, and knowing when to repair vs. replace.',
}

const TIPS = [
  {
    tag: 'PC Performance',
    title: "5 Signs Your PC Needs an SSD Upgrade",
    summary: "If your computer is slow, loud, and struggling with everyday tasks, the culprit is almost always the hard drive. An SSD upgrade is the single biggest speed boost you can make — usually without replacing the whole machine.",
    points: [
      "Takes more than 2 minutes to fully boot up",
      "Opening a browser or Word takes 30+ seconds",
      "The computer is constantly making grinding or clicking sounds",
      "Tasks that used to feel instant now feel sluggish",
      "The machine is 4–8 years old but otherwise works fine",
    ],
  },
  {
    tag: 'Cybersecurity',
    title: "How to Protect Your Home Network from Hackers",
    summary: "Most home networks are one default password away from being compromised. A few simple changes put your home in much better shape than 90% of people around you.",
    points: [
      "Change your router's default username and password immediately",
      "Use WPA3 or WPA2 encryption — never leave it open or on WEP",
      "Keep your router's firmware updated (most do this automatically)",
      "Create a separate guest network for visitors and smart home devices",
      "Disable remote management unless you specifically need it",
    ],
  },
  {
    tag: 'Wi-Fi',
    title: "Dead Zones? Here's How to Fix Your Home Wi-Fi",
    summary: "Wi-Fi problems are almost always a placement or hardware issue — not an internet speed issue. Before you upgrade your plan, check these things first.",
    points: [
      "Router placement matters more than most people think — central location wins",
      "Thick walls, appliances, and other devices all block signal",
      "Mesh Wi-Fi systems (Eero, Orbi, Google) eliminate dead zones in large homes",
      "The 5GHz band is faster but shorter range; 2.4GHz reaches further",
      "If your router is more than 5 years old, the hardware is the bottleneck",
    ],
  },
  {
    tag: 'Repair vs. Replace',
    title: "When to Repair vs. Replace Your Computer",
    summary: "The gut reaction is to replace a broken computer. But most of the time, the problem is one fixable part — and a repair costs a fraction of a new machine.",
    points: [
      "Slow performance: usually a storage or RAM issue, not the whole computer",
      "Won't turn on: power supply or battery — both replaceable",
      "Overheating: thermal paste or fans — a $50 fix, not a $800 replacement",
      "Replace if: the repair cost exceeds 60% of what a comparable new machine costs",
      "Always get a diagnostic first — you can't make a good decision without knowing what's wrong",
    ],
  },
  {
    tag: 'Business IT',
    title: "What is Microsoft 365 — and Does Your Small Business Need It?",
    summary: "Microsoft 365 is more than Outlook and Word. For small businesses, it's a complete platform for email, file sharing, communication, and security — at a price that makes sense.",
    points: [
      "Professional @yourcompany.com email that builds trust with customers",
      "1TB of OneDrive cloud storage per user — files accessible anywhere",
      "Teams for communication reduces reliance on personal texting",
      "Built-in security features protect your business data",
      "Plans start around $6/user/month — far cheaper than separate tools",
    ],
  },
  {
    tag: 'Data Safety',
    title: "How to Back Up Your Data (and Why It Actually Matters)",
    summary: "Hard drives fail. Laptops get dropped. Ransomware encrypts your files. The only question is whether you had a backup when it happened. Here's a simple approach that works.",
    points: [
      "The 3-2-1 rule: 3 copies, 2 different media, 1 offsite (cloud counts)",
      "External hard drive + cloud backup is the minimum for most people",
      "Google Drive, OneDrive, and iCloud all work — pick one and actually use it",
      "Photos are the most common thing people regret losing — back them up first",
      "Test your backup occasionally — a backup you can't restore isn't really a backup",
    ],
  },
  {
    tag: 'Smart Home',
    title: "Smart Home Setup: Where to Start (Without Getting Overwhelmed)",
    summary: "Smart home technology is useful — but only if it's set up correctly. Start simple, add gradually, and make sure everything is on a secure network.",
    points: [
      "Start with one high-impact device: a smart thermostat or video doorbell",
      "Choose a single ecosystem when possible (Google, Amazon, Apple) for compatibility",
      "Always put smart home devices on a dedicated guest or IoT network",
      "Change default passwords on every device before connecting it",
      "Professional installation saves hours of frustration — and ensures it actually works",
    ],
  },
  {
    tag: 'Cybersecurity',
    title: "Cybersecurity Basics for Small Businesses",
    summary: "Small businesses are the number one target for cybercriminals — because defenses are weaker. A few baseline practices dramatically reduce your risk without requiring a big IT budget.",
    points: [
      "Use a password manager — unique passwords for every account, no excuses",
      "Enable multi-factor authentication (MFA) on email and banking — always",
      "Keep all software and operating systems updated automatically",
      "Train employees to recognize phishing emails — it's the #1 attack vector",
      "Have a backup strategy before you need it, not after",
    ],
  },
]

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
            {TIPS.map((tip, i) => (
              <div key={i} className="tip-card reveal">
                <div className="tc-body">
                  <span className="tc-tag">{tip.tag}</span>
                  <h3>{tip.title}</h3>
                  <p>{tip.summary}</p>
                  <ul className="tc-points">
                    {tip.points.map((pt, j) => <li key={j}>{pt}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM CTA */}
          <div className="reveal" style={{marginTop:'80px',padding:'60px 48px',background:'var(--dark)',borderRadius:'var(--r)',textAlign:'center'}}>
            <span className="eyebrow on-dark" style={{justifyContent:'center',display:'inline-flex',marginBottom:'20px'}}>Still not sure?</span>
            <h2 style={{fontSize:'clamp(1.8rem,3.2vw,2.6rem)',color:'#fff',fontWeight:'600',margin:'0 0 16px',maxWidth:'22ch',marginLeft:'auto',marginRight:'auto'}}>Ask Joe — he&apos;ll give you a straight answer.</h2>
            <p style={{color:'var(--muted-d)',maxWidth:'46ch',margin:'0 auto 36px',lineHeight:'1.7'}}>Every situation is different. Describe yours in plain language and get a real recommendation — not a generic one.</p>
            <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
              <Link href="/contact" className="btn-pill accent">Send Joe a message</Link>
              <a href="tel:14076248459" className="btn-pill" style={{background:'rgba(255,255,255,.08)',color:'#fff',border:'1px solid rgba(255,255,255,.12)'}}>Call 407-624-8459</a>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED LINKS */}
      <section style={{background:'var(--white)',padding:'80px 0',borderTop:'1px solid var(--line)'}}>
        <div className="wrap" style={{textAlign:'center'}}>
          <p style={{color:'var(--muted)',marginBottom:'28px',fontFamily:"'Fragment Mono',monospace",fontSize:'.9rem'}}>More from Witter Tech</p>
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
