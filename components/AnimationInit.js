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
        } else {
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
    document.querySelectorAll('.counters,.bento').forEach(el => cio.observe(el))

    // Ghost word parallax — rAF throttled (skipped under reduced motion)
    const ghosts = reducedMotion ? [] : [...document.querySelectorAll('[data-parallax]')].map(el => ({
      el, f: +el.dataset.parallax, base: 0,
    }))
    const measureG = () => ghosts.forEach(o => {
      o.base = o.el.parentElement.getBoundingClientRect().top +
        (window.scrollY || document.documentElement.scrollTop)
    })
    let pRaf = 0
    const applyP = () => {
      pRaf = 0
      const y = window.scrollY || document.documentElement.scrollTop
      ghosts.forEach(o => {
        o.el.style.transform = `translateY(${(-(y - o.base) * o.f * 0.14).toFixed(1)}px)`
      })
    }
    const onScroll = () => { if (!pRaf) pRaf = requestAnimationFrame(applyP) }
    const onResize = () => { measureG(); applyP() }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    measureG(); applyP()

    // FAQ accordion
    document.querySelectorAll('.faq-item').forEach(item => {
      const btn = item.querySelector('.faq-q')
      const ans = item.querySelector('.faq-a')
      if (!btn || !ans) return
      btn.setAttribute('aria-expanded', 'false')
      btn.onclick = () => {
        const isOpen = item.classList.contains('open')
        // Only close siblings in the same group — on the FAQ page each
        // category accordions independently
        item.parentElement.querySelectorAll('.faq-item.open').forEach(i => {
          i.classList.remove('open')
          const a = i.querySelector('.faq-a')
          const b = i.querySelector('.faq-q')
          if (a) a.style.maxHeight = '0'
          if (b) b.setAttribute('aria-expanded', 'false')
        })
        if (!isOpen) {
          item.classList.add('open')
          ans.style.maxHeight = ans.scrollHeight + 'px'
          btn.setAttribute('aria-expanded', 'true')
        }
      }
    })

    return () => {
      io.disconnect()
      cio.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [pathname])

  return null
}
