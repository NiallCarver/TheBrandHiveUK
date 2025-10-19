"use client"
import { useEffect } from 'react'

export default function BookPage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto'
    return () => { document.documentElement.style.scrollBehavior = '' }
  }, [])

  return (
    <div className="container-slim min-h-[60vh]">
      <h1 className="text-3xl font-semibold tracking-tight mb-4">Book a Call</h1>
      <p className="text-muted mb-6">Pick a time that works — we’ll confirm by email.</p>
      <div className="card p-2 overflow-hidden">
        <iframe
          title="Calendar scheduling"
          src="https://calendly.com/the-brand-hive-uk/discovery-call?hide_landing_page_details=1&background_color=0B0B0C&text_color=F3F3F3&primary_color=5EEAD4"
          className="w-full h-[70vh] rounded-md"
          loading="lazy"
        />
      </div>
      <p className="text-xs text-muted mt-3">
        If the embed doesn’t load, use this link: <a className="underline" href="https://calendly.com/the-brand-hive-uk/discovery-call">calendly.com/the-brand-hive-uk/discovery-call</a>
      </p>
    </div>
  )
}
