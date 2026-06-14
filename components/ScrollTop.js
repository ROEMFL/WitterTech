'use client'
import { useState, useEffect } from 'react'

// Floating "back to top" button: hidden until the visitor scrolls down a bit,
// then fades in at the bottom-right. Smooth-scrolls to the top on click
// (instant when the visitor prefers reduced motion).
export default function ScrollTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => {
    const start = window.scrollY || document.documentElement.scrollTop
    if (start <= 0) return
    // The root uses overflow:clip, which disables native smooth scrolling, so
    // animate it ourselves: override scroll-behavior to auto (instant per frame)
    // and ease to the top in rAF. Reduced motion -> a single instant jump.
    const html = document.documentElement
    const prevBehavior = html.style.scrollBehavior
    html.style.scrollBehavior = 'auto'
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo(0, 0)
      html.style.scrollBehavior = prevBehavior
      return
    }
    const dur = Math.min(720, 260 + start * 0.32)
    let t0 = null
    const step = t => {
      if (t0 === null) t0 = t
      const p = Math.min((t - t0) / dur, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      window.scrollTo(0, start * (1 - ease))
      if (p < 1) requestAnimationFrame(step)
      else html.style.scrollBehavior = prevBehavior
    }
    requestAnimationFrame(step)
  }

  return (
    <button
      type="button"
      onClick={toTop}
      className={`scrolltop${show ? ' show' : ''}`}
      aria-label="Scroll back to top"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}
