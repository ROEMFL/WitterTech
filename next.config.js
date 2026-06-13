/** @type {import('next').NextConfig} */

// Site-wide security headers, applied to every route in addition to the
// asset caching rules in vercel.json.
const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
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
