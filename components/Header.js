'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/tech-tips', label: 'Tech Tips' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const closeBtnRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Escape closes the mobile menu; focus moves to the close button on open
  useEffect(() => {
    if (!menuOpen) return
    // small delay, the overlay is visibility:hidden until its transition starts
    const t = setTimeout(() => closeBtnRef.current?.focus(), 120)
    const onKey = e => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => { clearTimeout(t); window.removeEventListener('keydown', onKey) }
  }, [menuOpen])

  const headerStyle = {
    background: scrolled ? 'rgba(233,234,234,.94)' : 'transparent',
    borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
  }

  // Inner pages open on a dark hero, the header needs light text until it
  // gains its frosted background on scroll
  const onDarkHero = pathname !== '/' && !scrolled

  return (
    <>
      <header style={headerStyle} className={onDarkHero ? 'hdr-dark' : ''}>
        <div className="wrap nav">
          <Link href="/" className="brand" aria-label="Witter Tech, home">
            <img src="/wordmark-dark.svg" alt="Witter Tech" className="brand-logo brand-logo-dark" width="63" height="42" />
            <img src="/wordmark-light.svg" alt="" aria-hidden="true" className="brand-logo brand-logo-light" width="63" height="42" />
          </Link>
          <nav className="nav-mid" role="navigation" aria-label="Main navigation">
            {NAV.map(l => {
              const active = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href)
              return (
                <Link key={l.href} href={l.href} className={active ? 'active' : ''}>
                  {l.label}
                </Link>
              )
            })}
          </nav>
          <div className="nav-right">
            <a href="tel:14076248459" className="nav-phone">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              407-624-8459
            </a>
            <Link href="/contact" className="header-pill">Get a free estimate</Link>
            <button className="menu-btn" onClick={() => setMenuOpen(true)} aria-label="Open menu" aria-expanded={menuOpen} aria-controls="mobile-menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`m-overlay${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen} role="navigation" aria-label="Mobile navigation">
        <button className="m-close" ref={closeBtnRef} onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
        </button>
        {NAV.map(l => (
          <Link key={l.href} href={l.href} className="m-link" onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="m-link m-cta" onClick={() => setMenuOpen(false)}>Get a free estimate</Link>
        <div className="m-foot">Call or text Joe &middot; <a href="tel:14076248459">407-624-8459</a></div>
      </div>
    </>
  )
}
