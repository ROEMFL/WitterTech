import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimationInit from '@/components/AnimationInit'

export const metadata = {
  title: {
    template: '%s | Witter Tech',
    default: 'Witter Tech — Calm, Personal Tech Help in Central Florida',
  },
  description:
    'Computer repair, Wi-Fi, smart home, and IT support for homes and small businesses in Kissimmee, Orlando, St. Cloud, Celebration, and Davenport. Honest pricing, same-day service available.',
  keywords: 'computer repair Kissimmee, IT support Orlando, PC repair Central Florida, WiFi setup, smart home, virus removal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fragment+Mono:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <AnimationInit />
        {/* Mobile sticky bar */}
        <div className="mbar">
          <a href="/contact" className="msg">Tell us what&apos;s going on</a>
          <a href="tel:14076248459" className="call">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call
          </a>
        </div>
      </body>
    </html>
  )
}
