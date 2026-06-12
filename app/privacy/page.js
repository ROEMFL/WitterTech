import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Witter Tech handles your information, what we collect through the contact form, how it is used, and how to reach Joe with questions.',
  alternates: { canonical: '/privacy' },
}

export default function Privacy() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="ghost on-dark" style={{fontSize:'15vw',bottom:'-1vw'}}>Privacy</div>
        <div className="inner">
          <span className="eyebrow on-dark reveal">Privacy Policy</span>
          <h1 className="anim-words">Your information, handled the same way as your tech: carefully.</h1>
          <p className="sub reveal">Effective June 12, 2026 &middot; Witter Tech, a DBA of Witt-Tech Solutions LLC</p>
        </div>
      </div>

      {/* POLICY */}
      <section className="article-section">
        <div className="wrap">
          <article className="article">
            <div className="article-block">
              <h2>The short version</h2>
              <p>Witter Tech collects only what you choose to share, typically your name, phone number, email address, and a description of your tech problem. That information is used to respond to you and do the work you asked for. It is never sold, rented, or shared for marketing. That&apos;s the whole policy; the details below just spell it out.</p>
            </div>

            <div className="article-block">
              <h2>What we collect</h2>
              <p>When you fill out the contact form, call, text, or email, you may share your name, phone number, email address, and whatever you tell us about your devices or problem. If we work on your equipment, we may also handle information stored on it, which stays on your device and is never copied or kept unless you ask (for example, during a data recovery or backup job you requested).</p>
            </div>

            <div className="article-block">
              <h2>How it&apos;s used</h2>
              <p>To respond to your message, give you a quote, schedule and perform the work, and follow up about the job. Nothing else. You won&apos;t be added to a mailing list, and your information won&apos;t be sold or shared with advertisers.</p>
            </div>

            <div className="article-block">
              <h2>Services that help run this site</h2>
              <p>The website is hosted by Vercel, which provides anonymous, aggregate visit statistics (page views, not who you are, and no advertising cookies). Messages sent through the contact form are delivered by a form-processing service and by email. These providers process data only to deliver your message and are not permitted to use it for anything else.</p>
            </div>

            <div className="article-block">
              <h2>Cookies</h2>
              <p>This site does not use advertising or tracking cookies. There is no cookie banner because there&apos;s nothing to consent to.</p>
            </div>

            <div className="article-block">
              <h2>Links to other sites</h2>
              <p>Pages on this site link to Google (for reviews), Facebook, and Instagram. Those sites have their own privacy policies, and what they collect is governed by their rules, not this policy.</p>
            </div>

            <div className="article-block">
              <h2>Children</h2>
              <p>This site is for adults arranging tech services and does not knowingly collect information from children under 13.</p>
            </div>

            <div className="article-block">
              <h2>Your choices</h2>
              <p>Want to know what information we have about you, or want it deleted? Email <a href="mailto:joe@wittertech.com" style={{color:'var(--accent-deep)',fontWeight:'600'}}>joe@wittertech.com</a> or call or text <a href="tel:14076248459" style={{color:'var(--accent-deep)',fontWeight:'600'}}>407-624-8459</a> and it will be handled promptly, by Joe, like everything else here.</p>
            </div>

            <div className="article-block">
              <h2>Changes to this policy</h2>
              <p>If this policy changes, the updated version will be posted on this page with a new effective date.</p>
            </div>

            <div className="article-cta reveal">
              <p>Questions about any of this? Just ask, straight answers, as always.</p>
              <div className="article-cta-row">
                <Link href="/contact" className="btn-pill accent">Contact Joe</Link>
                <Link href="/" className="btn-pill">Back to home</Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
