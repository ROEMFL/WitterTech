import './globals.css'
import { Inter, Fragment_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimationInit from '@/components/AnimationInit'
import ScrollTop from '@/components/ScrollTop'
import { COMING_SOON } from '@/lib/config'
import { SITE } from '@/lib/site'
import { businessJsonLd } from '@/lib/schema'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'

// Google Analytics 4. The Measurement ID is public (gtag), so it lives in
// lib/site.js; a Vercel env var can still override it. It only loads on the
// production domain (VERCEL_ENV === 'production'), so preview/local traffic
// never pollutes the analytics.
const GA_ID =
  process.env.VERCEL_ENV === 'production' ? (process.env.NEXT_PUBLIC_GA_ID || SITE.gaId) : null

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fragmentMono = Fragment_Mono({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-mono',
  display: 'swap',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#e9eaea',
}

export const metadata = {
  metadataBase: new URL('https://wittertech.com'),
  title: {
    template: '%s | Witter Tech',
    default: 'Witter Tech: Reliable Tech Repair & IT Support in Central Florida',
  },
  description:
    'Computer repair, Wi-Fi, smart home, and IT support for homes and businesses across Kissimmee, Orlando, and Central Florida. Free estimate, honest upfront pricing.',
  openGraph: {
    title: 'Witter Tech: Reliable Tech Repair & IT Support in Central Florida',
    description:
      'Computer repair, Wi-Fi setup, smart home, and IT support for homes and small businesses in Central Florida. Honest upfront pricing, same-day service available.',
    url: 'https://wittertech.com',
    siteName: 'Witter Tech',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/assets/og.png', width: 1200, height: 630, alt: 'Witter Tech: Reliable Tech Repair & IT Support in Central Florida' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Witter Tech: Reliable Tech Repair & IT Support in Central Florida',
    description:
      'Computer repair, Wi-Fi setup, smart home, and IT support for homes and small businesses in Central Florida. Honest pricing, same-day service.',
    images: ['/assets/og.png'],
  },
}

// Base LocalBusiness schema, sitewide. Rating + reviews are attached only on
// the home page and /reviews (see lib/schema.js businessRatingJsonLd), via the
// shared @id, so self-serving review markup is not repeated on every route.
const jsonLd = businessJsonLd()

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fragmentMono.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {COMING_SOON ? (
          <main id="main-content">{children}</main>
        ) : (
          <>
            <a href="#main-content" className="skip-link">Skip to content</a>
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
            <AnimationInit />
            <ScrollTop />
            {/* Mobile sticky bar */}
            <div className="mbar">
              <a href="/contact" className="msg">Get a free estimate</a>
              <a href={SITE.phoneHref} className="call">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call
              </a>
            </div>
          </>
        )}
        <Analytics />
        <SpeedInsights />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');` }} />
          </>
        )}
      </body>
    </html>
  )
}
