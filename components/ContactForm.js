'use client'
import { useState } from 'react'

// Formspree endpoint, e.g. 'https://formspree.io/f/abcdwxyz' (free tier: formspree.io).
// While empty, the form falls back to opening the visitor's email app via mailto.
const FORM_ENDPOINT = ''

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', topic: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | mailto | error

  const update = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    const { name, phone, email, topic, message } = form

    if (!FORM_ENDPOINT) {
      const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`
      window.location.href = `mailto:joe@wittertech.com?subject=Service Request from ${encodeURIComponent(name)}&body=${encodeURIComponent(body)}`
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
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-success">
        <div className="check">✓</div>
        <h3>Message received.</h3>
        <p>Joe reads every message personally and will get back to you the same day.<br /><br />Need help sooner? Call or text <a href="tel:14076248459" style={{ color: 'var(--accent-deep)', fontWeight: '600' }}>407-624-8459</a></p>
        <button onClick={() => { setStatus('idle'); setForm({ name: '', phone: '', email: '', topic: '', message: '' }) }} style={{ marginTop: '24px', background: 'none', border: '1px solid var(--line)', borderRadius: 'var(--pill)', padding: '.7rem 1.4rem', cursor: 'pointer', fontFamily: 'inherit', fontSize: '.95rem' }}>
          Send another message
        </button>
      </div>
    )
  }

  if (status === 'mailto') {
    return (
      <div className="form-success">
        <div className="check">✓</div>
        <h3>Your email app should open.</h3>
        <p>Hit send in your email app and Joe will get back to you the same day.<br /><br />Nothing opened? Email <a href="mailto:joe@wittertech.com" style={{ color: 'var(--accent-deep)', fontWeight: '600' }}>joe@wittertech.com</a> directly, or call or text <a href="tel:14076248459" style={{ color: 'var(--accent-deep)', fontWeight: '600' }}>407-624-8459</a></p>
        <button onClick={() => setStatus('idle')} style={{ marginTop: '24px', background: 'none', border: '1px solid var(--line)', borderRadius: 'var(--pill)', padding: '.7rem 1.4rem', cursor: 'pointer', fontFamily: 'inherit', fontSize: '.95rem' }}>
          Back to the form
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Describe what&apos;s going on</h3>
      <p className="sm">Joe reads every message. No obligation — just a fast, honest response.</p>
      <div className="frow">
        <div className="field">
          <label htmlFor="c-name">Your name</label>
          <input id="c-name" name="name" type="text" placeholder="First name is fine" value={form.name} onChange={update} required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="c-phone">Phone</label>
          <input id="c-phone" name="phone" type="tel" placeholder="Best number to reach you" value={form.phone} onChange={update} autoComplete="tel" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="c-email">Email</label>
        <input id="c-email" name="email" type="email" placeholder="you@email.com" value={form.email} onChange={update} autoComplete="email" />
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
        <textarea id="c-msg" name="message" rows="4" placeholder="In your own words — whatever comes to mind." value={form.message} onChange={update}></textarea>
      </div>
      {status === 'error' && (
        <p style={{ color: 'var(--accent-deep)', fontSize: '.92rem', marginBottom: '14px' }}>
          Something went wrong sending your message. Please try again, or call or text <a href="tel:14076248459" style={{ fontWeight: '600', textDecoration: 'underline' }}>407-624-8459</a>.
        </p>
      )}
      <button type="submit" className="btn-pill btn-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send it over →'}
      </button>
    </form>
  )
}
