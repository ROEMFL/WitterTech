import './globals.css'
import { Inter, Fragment_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimationInit from '@/components/AnimationInit'

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
    'Computer repair, Wi-Fi setup, smart home installation, and IT support for homes and small businesses in Kissimmee, Orlando, St. Cloud, Celebration, and Davenport. Honest upfront pricing, same-day service available.',
  keywords: 'computer repair Kissimmee, IT support Orlando, PC repair Central Florida, WiFi setup, smart home, virus removal, data recovery',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Witter Tech',
  alternateName: 'Witt-Tech Solutions LLC',
  description:
    'Reliable computer repair, Wi-Fi setup, smart home installation, and IT support for homes and small businesses in Kissimmee, Orlando, St. Cloud, Celebration, and Davenport. Honest upfront pricing, same-day service when available.',
  url: 'https://wittertech.com',
  telephone: '+1-407-624-8459',
  email: 'joe@wittertech.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kissimmee',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '19:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Kissimmee' },
    { '@type': 'City', name: 'Orlando' },
    { '@type': 'City', name: 'St. Cloud' },
    { '@type': 'City', name: 'Celebration' },
    { '@type': 'City', name: 'Davenport' },
  ],
  founder: { '@type': 'Person', name: 'Joe Witter' },
  foundingDate: '2019',
  sameAs: [
    'https://www.facebook.com/WittTechSol/',
    'https://www.instagram.com/witt.tech.solutions/',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '36',
    bestRating: '5',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Mark Bynes' },
      reviewBody:
        "I'm truly impressed. When I called Joseph to fix my PC I assumed it would take days and most of my bank account, but he met me, took my computer to his lab, and within only a couple hours it was fixed and for way less money than I expected. I'm currently writing this review from that computer, his 5-star status is well deserved.",
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Haylis Perez' },
      reviewBody:
        "My gaming PC just crashed on me while playing and I couldn't get it back up and running. I went to him and he fixed the problem within a couple hours and for a reasonable price. He is very professional.",
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Naomi Simmons' },
      reviewBody:
        'Joseph was so amazing. Quick to respond to my request, gave me an accurate quote and had the job done so fast! I will definitely reach out to him for all my future tech needs!',
    },
  ],
}

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
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <AnimationInit />
        <Analytics />
        {/* Mobile sticky bar */}
        <div className="mbar">
          <a href="/contact" className="msg">Get a free estimate</a>
          <a href="tel:14076248459" className="call">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call
          </a>
        </div>
      </body>
    </html>
  )
}
