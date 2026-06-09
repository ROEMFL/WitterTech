'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', topic: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const { name, phone, email, topic, message } = form
    const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`
    window.location.href = `mailto:joe@wittertech.com?subject=Service Request from ${encodeURIComponent(name)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="form-success">
        <div className="check">✓</div>
        <h3>Your email app should open.</h3>
        <p>Fill in your message and hit send — Joe will get back to you the same day.<br /><br />Prefer to call? <a href="tel:14076248459" style={{ color: 'var(--accent-deep)', fontWeight: '600' }}>407-624-8459</a></p>
        <button onClick={() => setSent(false)} style={{ marginTop: '24px', background: 'none', border: '1px solid var(--line)', borderRadius: 'var(--pill)', padding: '.7rem 1.4rem', cursor: 'pointer', fontFamily: 'inherit', fontSize: '.95rem' }}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>A quick note to Joe</h3>
      <p className="sm">No pressure, no obligation — just the start of a conversation.</p>
      <div className="frow">
        <div className="field">
          <label htmlFor="c-name">Your name</label>
          <input id="c-name" name="name" type="text" placeholder="First name is fine" value={form.name} onChange={update} required />
        </div>
        <div className="field">
          <label htmlFor="c-phone">Phone</label>
          <input id="c-phone" name="phone" type="tel" placeholder="Best number to reach you" value={form.phone} onChange={update} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="c-email">Email</label>
        <input id="c-email" name="email" type="email" placeholder="you@email.com" value={form.email} onChange={update} />
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
      <button type="submit" className="btn-pill btn-submit">Send it over →</button>
    </form>
  )
}
