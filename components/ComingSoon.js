import { SITE, MAILTO } from '@/lib/site'

export default function ComingSoon() {
  return (
    <div style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '48px 24px', background: 'var(--dark)', color: '#fff' }}>
      {/* eslint-disable-next-line @next/next/no-img-element -- standalone coming-soon screen, next/image not warranted */}
      <img src="/comingsoon-logo.webp" alt="Witter Tech" width="280" height="280" style={{ width: 'min(280px,72vw)', height: 'auto', marginBottom: '8px' }} />

      <span style={{ fontFamily: 'var(--font-mono),monospace', fontSize: '.82rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '22px' }}>
        Reliable &middot; Honest &middot; Affordable
      </span>

      <h1 style={{ fontSize: 'clamp(2rem,6vw,3.4rem)', fontWeight: 600, letterSpacing: '-.04em', lineHeight: 1.05, maxWidth: '15ch', margin: '0 0 20px' }}>
        Our new site is launching soon.
      </h1>

      <p style={{ fontSize: '1.12rem', lineHeight: 1.65, color: 'rgba(255,255,255,.72)', maxWidth: '48ch', margin: '0 0 36px' }}>
        Reliable tech repair and IT support for homes and businesses across Central Florida. Need help right now? Joe is just a call or text away.
      </p>

      <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href={SITE.phoneHref} style={{ background: 'var(--accent)', color: 'var(--dark)', fontWeight: 600, padding: '1rem 1.9rem', borderRadius: 'var(--pill)', fontSize: '1rem' }}>
          Call or text {SITE.phone}
        </a>
        {/* Off-screen separator so crawlers/screen readers don't run the phone
            and email together (e.g. "407-624-8459joe@wittertech.com"). */}
        <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }}> or email </span>
        <a href={MAILTO} style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.28)', fontWeight: 600, padding: '1rem 1.9rem', borderRadius: 'var(--pill)', fontSize: '1rem' }}>
          {SITE.email}
        </a>
      </div>

      <p style={{ marginTop: '52px', fontSize: '.8rem', color: 'rgba(255,255,255,.42)' }}>
        Serving Kissimmee, Orlando, St. Cloud, Celebration, Davenport &amp; Central Florida
      </p>
      <p style={{ marginTop: '10px', fontSize: '.78rem', color: 'rgba(255,255,255,.34)' }}>
        &copy; 2026 {SITE.name} &middot; a DBA of {SITE.legalName}
      </p>
    </div>
  )
}
