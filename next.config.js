/** @type {import('next').NextConfig} */

// Content-Security-Policy, REPORT-ONLY: it monitors and logs violations to the
// browser console without blocking anything, so it cannot break the live site.
// Covers the resources this site actually uses (GA, Vercel insights, Formspree,
// the contact-page Google Maps iframe, next/font, next/image). 'unsafe-inline'
// is required because the site uses inline styles and inline JSON-LD/GA scripts;
// an enforcing CSP would need those refactored to classes + nonces first.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://www.google.com https://www.googletagmanager.com",
  "font-src 'self' data:",
  "frame-src https://www.google.com",
  "connect-src 'self' https://formspree.io https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.vercel-insights.com",
  "base-uri 'self'",
  "form-action 'self' https://formspree.io",
  "frame-ancestors 'self'",
  "object-src 'none'",
].join('; ')

// Site-wide security headers, applied to every route in addition to the
// asset caching rules in vercel.json.
const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Content-Security-Policy-Report-Only', value: csp },
]

const nextConfig = {
  // Consistent trailing-slash policy: no trailing slash on any URL.
  trailingSlash: false,
  // Serve AVIF first (smallest), then WebP, falling back to the source format
  // for any browser that supports neither. next/image converts on the fly.
  images: { formats: ['image/avif', 'image/webp'] },
  async headers() {
    const headers = [...securityHeaders]
    // Keep non-production Vercel deployments (preview/branch URLs, *.vercel.app)
    // out of search indexes. VERCEL_ENV is 'production' only on the live domain.
    if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production') {
      headers.push({ key: 'X-Robots-Tag', value: 'noindex, nofollow' })
    }
    return [{ source: '/:path*', headers }]
  },
}

module.exports = nextConfig
