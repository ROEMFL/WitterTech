'use client'
import { useState } from 'react'
import { SITE } from '@/lib/site'

// Formspree endpoint, e.g. 'https://formspree.io/f/abcdwxyz' (free tier: formspree.io).
// While empty, the form falls back to opening the visitor's email app via mailto.
const FORM_ENDPOINT = 'https://formspree.io/f/mjgdaeja'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', topic: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | mailto | error
  const [err, setErr] = useState('') // inline validation / submit error message

  const update = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    // Service/package interest: fire when the visitor picks what they need.
    if (name === 'topic' && value && typeof window !== 'undefined' && window.gtag) {
      if (value === 'Monthly IT support plan') window.gtag('event', 'package_interest', { plan: value })
      else if (value !== 'Honestly not sure yet') window.gtag('event', 'service_interest', { topic: value })
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const { name, phone, email, topic, message } = form

    // Honeypot: real users never fill a hidden field. If it has a value, treat
    // the submission as spam and silently no-op (bot thinks it succeeded).
    if (e.currentTarget.elements._gotcha?.value) {
      setStatus('sent')
      return
    }

    // A lead with no phone and no email is unreachable. Require at least one.
    if (!phone.trim() && !email.trim()) {
      setErr('Add a phone number or email so Joe can get back to you.')
      return
    }
    setErr('')

    if (!FORM_ENDPOINT) {
      const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`
      window.location.href = `mailto:${SITE.email}?subject=Service Request from ${encodeURIComponent(name)}&body=${encodeURIComponent(body)}`
      setStatus('mailto')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, phone, email, topic, message }),
      })
      if (res.ok && typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'generate_lead', { method: 'contact_form' })
        window.gtag('event', 'form_submit', { method: 'contact_form' })
        // A lead with name + a way to reach them + a described problem is the
        // highest-quality signal.
        if (phone.trim() && email.trim() && message.trim()) {
          window.gtag('event', 'lead_qualified', { method: 'contact_form' })
        }
      }
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <div className="check">✓</div>
        <h3>Message received.</h3>
        <p>Joe reads every message personally and will get back to you the same day.<br /><br />Need help sooner? Call or text <a href={SITE.phoneHref} style={{ color: 'var(--accent-deep)', fontWeight: '600' }}>{SITE.phone}</a></p>
        <button onClick={() => { setStatus('idle'); setForm({ name: '', phone: '', email: '', topic: '', message: '' }) }} style={{ marginTop: '24px', background: 'none', border: '1px solid var(--line)', borderRadius: 'var(--pill)', padding: '.7rem 1.4rem', cursor: 'pointer', fontFamily: 'inherit', fontSize: '.95rem' }}>
          Send another message
        </button>
      </div>
    )
  }

  if (status === 'mailto') {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <div className="check">✓</div>
        <h3>Your email app should open.</h3>
        <p>Hit send in your email app and Joe will get back to you the same day.<br /><br />Nothing opened? Email <a href={`mailto:${SITE.email}`} style={{ color: 'var(--accent-deep)', fontWeight: '600' }}>{SITE.email}</a> directly, or call or text <a href={SITE.phoneHref} style={{ color: 'var(--accent-deep)', fontWeight: '600' }}>{SITE.phone}</a></p>
        <button onClick={() => setStatus('idle')} style={{ marginTop: '24px', background: 'none', border: '1px solid var(--line)', borderRadius: 'var(--pill)', padding: '.7rem 1.4rem', cursor: 'pointer', fontFamily: 'inherit', fontSize: '.95rem' }}>
          Back to the form
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} aria-busy={status === 'sending'}>
      {/* Honeypot: hidden from people, catnip for bots. Formspree also drops
          any submission where _gotcha is filled. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
      />
      <h3>Describe what&apos;s going on</h3>
      <p className="sm">Joe reads every message. No obligation, just a fast, honest response.</p>
      {SITE.booking && (
        <p className="sm" style={{ marginTop: '-4px', marginBottom: '18px' }}>
          Prefer to pick a time? <a href={SITE.booking} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-deep)', fontWeight: '600' }}>Book a visit &rarr;</a>
        </p>
      )}
      <div className="frow">
        <div className="field">
          <label htmlFor="c-name">Your name</label>
          <input id="c-name" name="name" type="text" placeholder="First name is fine" value={form.name} onChange={update} required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="c-phone">Phone</label>
          <input id="c-phone" name="phone" type="tel" placeholder="Best number to reach you" value={form.phone} onChange={update} autoComplete="tel" aria-describedby="contact-hint" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="c-email">Email</label>
        <input id="c-email" name="email" type="email" placeholder="you@email.com" value={form.email} onChange={update} autoComplete="email" aria-describedby="contact-hint" />
        <p id="contact-hint" className="sm" style={{ marginTop: '6px', color: 'var(--muted)' }}>A phone number or email, whichever you prefer, so Joe can reach you.</p>
      </div>
      <div className="field">
        <label htmlFor="c-topic">What&apos;s this about?</label>
        <select id="c-topic" name="topic" value={form.topic} onChange={update}>
          <option value="">Pick whatever&apos;s closest…</option>
          <option>A computer or laptop</option>
          <option>Wi-Fi or networking</option>
          <option>It&apos;s running slow</option>
          <option>A cracked screen or spill</option>
          <option>Recovering files or photos</option>
          <option>Cameras, doorbell, or smart home</option>
          <option>Business / office IT</option>
          <option>Custom PC build</option>
          <option>Monthly IT support plan</option>
          <option>Honestly not sure yet</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="c-msg">Tell me what&apos;s going on</label>
        <textarea id="c-msg" name="message" rows="4" placeholder="In your own words, whatever comes to mind." value={form.message} onChange={update}></textarea>
      </div>
      {err && (
        <p role="alert" style={{ color: 'var(--accent-deep)', fontSize: '.92rem', marginBottom: '14px' }}>
          {err}
        </p>
      )}
      {status === 'error' && (
        <p role="alert" style={{ color: 'var(--accent-deep)', fontSize: '.92rem', marginBottom: '14px' }}>
          Something went wrong sending your message. Please try again, or call or text <a href={SITE.phoneHref} style={{ fontWeight: '600', textDecoration: 'underline' }}>{SITE.phone}</a>.
        </p>
      )}
      <button type="submit" className="btn-pill btn-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send it over →'}
      </button>
    </form>
  )
}
