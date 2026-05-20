"use client"
import { useState } from 'react'
import Button from '@/components/Button'

type LeadResponse = { ok: true } | { ok: false; error: string }

export default function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setError(null)
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    const json = (await res.json()) as LeadResponse
    if ('ok' in json && json.ok) {
      setStatus('success')
      form.reset()
    } else {
      setStatus('error')
      setError((json as any).error || 'Something went wrong')
    }
  }

  return (
    <form onSubmit={onSubmit} className="card ui-glow p-6 space-y-4" aria-labelledby="contact-title">
      <div>
        <h3 id="contact-title" className="text-lg font-medium">Tell us about your project</h3>
        <p className="text-xs text-muted mt-1">We’ll get back within one business day.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="text-sm">Name</label>
          <input id="name" name="name" required className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus-visible:ring-2 focus-visible:ring-accent/60" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">Email</label>
          <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus-visible:ring-2 focus-visible:ring-accent/60" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="company" className="text-sm">Company</label>
          <input id="company" name="company" className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus-visible:ring-2 focus-visible:ring-accent/60" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm">What do you need?</label>
          <textarea id="message" name="message" required rows={4} className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus-visible:ring-2 focus-visible:ring-accent/60" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Send message'}</Button>
        {status === 'success' && <span role="status" className="text-xs text-accent">Thanks! We’ll be in touch.</span>}
        {status === 'error' && <span role="status" className="text-xs text-red-400">{error}</span>}
      </div>
    </form>
  )
}
