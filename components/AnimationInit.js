'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function AnimationInit() {
  const pathname = usePathname()

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Word-splitting for blur-in heading animations
    document.querySelectorAll('.anim-words').forEach(el => {
      if (el.dataset.split) return
      el.dataset.split = '1'
      const tmp = document.createElement('div')
      tmp.innerHTML = el.innerHTML
      const out = []
      tmp.childNodes.forEach(node => {
        if (node.nodeType === 3) {
          node.textContent.split(/(\s+)/).forEach(t => {
            if (t.trim()) out.push('<span class="word">' + t + '</span>')
            else if (t) out.push(t)
          })
        } else if (node.nodeType === 1) {
          out.push('<span class="word">' + node.outerHTML + '</span>')
        }
      })
      el.innerHTML = out.join('')
    })

    // IntersectionObserver for .reveal + .anim-words
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const t = e.target
        if (t.classList.contains('anim-words')) {
          t.querySelectorAll('.word').forEach((w, i) =>
            setTimeout(() => w.classList.add('in'), reducedMotion ? 0 : i * 55)
          )
        } else {
          t.classList.add('in')
        }
        io.unobserve(t)
      })
    }, { threshold: 0.15 })
    document.querySelectorAll('.reveal,.anim-words').forEach(el => io.observe(el))

    // Hero + owner photo zoom-in
    ;['heroPhoto', 'ownerPhoto', 'aboutPhoto'].forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      new IntersectionObserver((es, obs) => {
        es.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) }
        })
      }, { threshold: 0.2 }).observe(el)
    })

    // Count-up animation
    const cio = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        e.target.querySelectorAll('[data-val]').forEach(el => {
          const target = +el.dataset.val
          if (reducedMotion) { el.textContent = target; return }
          const isYear = target > 1900
          const dur = 1300
          const t0 = performance.now()
          const step = now => {
            const p = Math.min((now - t0) / dur, 1)
            const ease = 1 - Math.pow(1 - p, 3)
            el.textContent = isYear ? Math.floor(target) : Math.floor(target * ease)
            if (p < 1) requestAnimationFrame(step)
            else el.textContent = target
          }
          requestAnimationFrame(step)
        })
        cio.unobserve(e.target)
      })
    }, { threshold: 0.4 })
    // Real numbers are rendered in the HTML (no-JS friendly + crawlable). For
    // JS users, reset non-year counters to 0 on mount so the count-up animates;
    // years (data-val > 1900) keep their real value.
    if (!reducedMotion) {
      document.querySelectorAll('.counters [data-val],.bento [data-val]').forEach(el => {
        if (+el.dataset.val <= 1900) el.textContent = '0'
      })
    }
    document.querySelectorAll('.counters,.bento').forEach(el => cio.observe(el))

    // Ghost word parallax, rAF throttled (skipped under reduced motion)
    const ghosts = reducedMotion ? [] : [...document.querySelectorAll('[data-parallax]')].map(el => ({
      el, f: +el.dataset.parallax, base: 0,
    }))
    const measureG = () => ghosts.forEach(o => {
      o.base = o.el.parentElement.getBoundingClientRect().top +
        (window.scrollY || document.documentElement.scrollTop)
    })
    // In-frame media parallax: pan the image crop vertically as its frame
    // scrolls through the viewport, for depth within the boxes.
    const frameImgs = reducedMotion ? [] : [...document.querySelectorAll('.pcard .ph img,.rcard .rph img,.bcard.feature .bimg img,.hero-photo .frame img')]
    let pRaf = 0
    const applyP = () => {
      pRaf = 0
      const y = window.scrollY || document.documentElement.scrollTop
      ghosts.forEach(o => {
        o.el.style.transform = `translateY(${(-(y - o.base) * o.f * 0.22).toFixed(1)}px)`
      })
      const vh = window.innerHeight
      frameImgs.forEach(img => {
        const r = img.getBoundingClientRect()
        if (r.bottom < -120 || r.top > vh + 120) return
        const p = Math.min(Math.max((vh - r.top) / (vh + r.height), 0), 1)
        img.style.objectPosition = `50% ${(30 + p * 40).toFixed(1)}%`
      })
    }
    const onScroll = () => { if (!pRaf) pRaf = requestAnimationFrame(applyP) }
    const onResize = () => { measureG(); applyP() }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    measureG(); applyP()

    // FAQ accordion (accessible): each answer gets an id and the button an
    // aria-controls reference; collapsed answers are marked `inert` so their
    // content is removed from the tab order and the accessibility tree (a
    // maxHeight:0 panel alone still leaves links keyboard-focusable).
    let faqId = 0
    document.querySelectorAll('.faq-item').forEach(item => {
      const btn = item.querySelector('.faq-q')
      const ans = item.querySelector('.faq-a')
      if (!btn || !ans) return
      if (!ans.id) ans.id = `faq-panel-${++faqId}`
      btn.setAttribute('aria-controls', ans.id)
      const startOpen = item.classList.contains('open')
      btn.setAttribute('aria-expanded', startOpen ? 'true' : 'false')
      if (!startOpen) ans.setAttribute('inert', '')
      btn.onclick = () => {
        const isOpen = item.classList.contains('open')
        // Only close siblings in the same group, on the FAQ page each
        // category accordions independently
        item.parentElement.querySelectorAll('.faq-item.open').forEach(i => {
          i.classList.remove('open')
          const a = i.querySelector('.faq-a')
          const b = i.querySelector('.faq-q')
          if (a) { a.style.maxHeight = '0'; a.setAttribute('inert', '') }
          if (b) b.setAttribute('aria-expanded', 'false')
        })
        if (!isOpen) {
          item.classList.add('open')
          ans.removeAttribute('inert')
          ans.style.maxHeight = ans.scrollHeight + 'px'
          btn.setAttribute('aria-expanded', 'true')
        }
      }
    })

    // Conversion event taxonomy (all no-ops until GA4 is active via window.gtag):
    //   contact     -> click-to-call (tel:)
    //   email_click -> mailto: click
    //   cta_click   -> any primary call-to-action link
    //   form_start  -> first interaction with the contact form (once)
    // generate_lead fires separately, on successful form submit, in ContactForm.
    const track = (name, params) => { if (window.gtag) window.gtag('event', name, params) }
    const onClick = e => {
      const tel = e.target.closest?.('a[href^="tel:"]')
      if (tel) return track('contact', { method: 'phone' })
      const mail = e.target.closest?.('a[href^="mailto:"]')
      if (mail) return track('email_click', { method: 'email' })
      const cta = e.target.closest?.('a.btn-pill, a.header-pill, a.btn-circle, a.m-cta')
      if (cta) track('cta_click', { label: (cta.textContent || '').trim().slice(0, 60), href: cta.getAttribute('href') || '' })
    }
    document.addEventListener('click', onClick)

    let formStarted = false
    const onFormFocus = e => {
      if (formStarted || !e.target.closest?.('form')) return
      formStarted = true
      track('form_start', {})
    }
    document.addEventListener('focusin', onFormFocus)

    return () => {
      io.disconnect()
      cio.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('click', onClick)
      document.removeEventListener('focusin', onFormFocus)
    }
  }, [pathname])

  return null
}
