"use client"
import Reveal from '@/components/Reveal'
import { useEffect, useState } from 'react'

type LogoItem = { name: string; src?: string }

export default function Logos() {
  const [items, setItems] = useState<LogoItem[]>([])

  useEffect(() => {
    let cancelled = false
    fetch('/api/logos')
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return
        const logos = Array.isArray(data?.logos)
          ? (data.logos as { src: string; alt?: string }[]).map((l) => ({ name: l.alt || l.src, src: l.src }))
          : []
        setItems(logos)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section aria-label="Trusted by" className="py-16">
      <div className="w-full">
        <Reveal>
          <div className="text-center text-muted text-sm mb-6 px-5">
            Trusted by the world’s leading 7 - 11 figure brands across; B2B, SAAS, Tech, Info, Finance, Health & Wellness, Entertainment.
          </div>
          <div className="relative overflow-hidden marquee-mask">
            <div className="marquee-track px-3">
              {[...(items.length ? items : [{ name: 'T1 Advertising', src: '/logos/t1-advertising.png' }]), ...(items.length ? items : [])].map((item: LogoItem, i: number) => (
                <div
                  key={item.name + i}
                  className="h-20 sm:h-24 w-56 sm:w-64 flex items-center justify-center text-sm sm:text-base font-medium text-foreground/80 border border-white/5 rounded-xl bg-card/40 backdrop-blur-sm overflow-hidden"
                >
                  {item.src ? (
                    <img
                      src={item.src}
                      alt={item.name}
                      className="max-h-12 sm:max-h-14 w-auto object-contain opacity-90"
                      loading="lazy"
                    />
                  ) : (
                    <span>{item.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
