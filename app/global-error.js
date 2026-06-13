'use client'
import { SITE } from '@/lib/site'

// Root error boundary. Replaces the whole document when an unexpected client
// error escapes a route, so visitors get a branded recovery screen with a way
// to reach Joe instead of the default white crash page.
export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
        <div style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '48px 24px', background: '#0d1117', color: '#fff' }}>
          <span style={{ fontSize: '.82rem', letterSpacing: '.1em', textTransform: 'uppercase', color: '#fb7a1e', marginBottom: '18px' }}>
            Something went wrong
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem,5vw,2.8rem)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.1, maxWidth: '18ch', margin: '0 0 18px' }}>
            Sorry, this page hit a snag.
          </h1>
          <p style={{ fontSize: '1.08rem', lineHeight: 1.6, color: 'rgba(255,255,255,.72)', maxWidth: '46ch', margin: '0 0 32px' }}>
            Try again in a moment. If it keeps happening, Joe is one call or text away and will help you directly.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button onClick={() => reset()} style={{ background: '#fb7a1e', color: '#0d1117', fontWeight: 600, padding: '1rem 1.9rem', borderRadius: '999px', fontSize: '1rem', border: 'none', cursor: 'pointer' }}>
              Try again
            </button>
            <a href={SITE.phoneHref} style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.28)', fontWeight: 600, padding: '1rem 1.9rem', borderRadius: '999px', fontSize: '1rem', textDecoration: 'none' }}>
              Call or text {SITE.phone}
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
