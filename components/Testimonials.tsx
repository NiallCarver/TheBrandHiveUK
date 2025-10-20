"use client"
import Reveal from '@/components/Reveal'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useCallback } from 'react'

type Testimonial = {
  quote: string
  name: string
  role?: string
  img?: string
  imgs?: string[]
}

const testimonials: Testimonial[] = [
  // Left
  {
    quote:
      "Worked with Niall for over six years—never disappointed. Always successful and profitable campaigns. If you're thinking of working with him, you should.",
    name: 'Sam Poyan',
    role: 'Solo Entrepreneur',
    img: '/people/sam-poyan.png',
    imgs: ['/people/sam-poyan.png','/people/sam-poyan-2.jpg','/people/sam-poyan-3.jpg'],
  },
  // Center (Thomas Herd)
  {
    quote:
      'Niall is my preferred specialist for all things Twitter/X. In my ten years running an agency, I have never found a more highly skilled Twitter specialist than Niall. I hired him for several brand projects, and he always overdelivered for my clients and handled communication with the utmost care and attentiveness.',
    name: 'Thomas Herd',
    role: 'CEO, T1 Advertising',
    img: '/people/thomas-herd.jpg',
    imgs: ['/people/thomas-herd.jpg','/people/thomas-herd-2.jpg','/people/thomas-herd-3.jpg'],
  },
  // Right
  {
    quote:
      'I engaged with Niall and his team about a year ago. Since then, my followers, engagement, community, and revenue have all increased. Highly recommended.',
    name: 'Randy Waldrum',
    role: 'National Soccer Coach',
    img: '/people/randy-waldrum.webp',
    imgs: ['/people/randy-waldrum.webp','/people/randy-waldrum-2.jpg','/people/randy-waldrum-3.jpg'],
  },
]

function Initials({ name }: { name: string }) {
  const parts = name.split(' ').filter(Boolean)
  const letters = (parts[0]?.[0] || '') + (parts[1]?.[0] || '')
  return (
    <div className="h-12 w-12 rounded-full bg-white/5 text-foreground/80 flex items-center justify-center text-sm">
      {letters.toUpperCase()}
    </div>
  )
}

export default function Testimonials() {
  const rx = useMotionValue(0), ry = useMotionValue(0)
  const rotateX = useTransform(ry, [-20,20], [6,-6])
  const rotateY = useTransform(rx, [-20,20], [-6,6])
  const onMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const dx = (e.clientX - (r.left + r.width/2)) / (r.width/2)
    const dy = (e.clientY - (r.top + r.height/2)) / (r.height/2)
    rx.set(Math.max(-20, Math.min(20, dx*20)))
    ry.set(Math.max(-20, Math.min(20, dy*20)))
  }, [rx, ry])
  const onLeave = useCallback(() => { rx.set(0); ry.set(0); }, [rx, ry])

  return (
    <section aria-label="Testimonials" className="py-16">
      <div className="container-slim grid md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={0.05 * i}>
            <motion.figure
              initial="rest"
              whileHover="hover"
              animate="rest"
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="card p-5 h-full relative group"
            >
              {/* Header with avatar */}
              <div className="flex items-center gap-3">
                {t.img ? (
                  <img
                    src={t.img}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <Initials name={t.name} />
                )}
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  {t.role ? <div className="text-xs text-muted">{t.role}</div> : null}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-sm leading-relaxed mt-4">“{t.quote}”</blockquote>

              {/* Hover stack: pulled-from-wallet effect */}
              <motion.div
                variants={{
                  rest: { opacity: 0, y: 16, scale: 0.98, transition: { duration: 0.25 } },
                  hover: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, staggerChildren: 0.06 } },
                }}
                className="pointer-events-none hidden md:block absolute right-4 -top-6 z-10"
                style={{ perspective: 800 }}
              >
                {(t.imgs && t.imgs.length ? t.imgs : [t.img || '']).slice(0, 3).map((src, idx) => (
                  <motion.img
                    key={src + idx}
                    src={src}
                    alt={t.name}
                    className="h-28 w-28 rounded-xl object-cover shadow-lg border border-white/10 bg-card"
                    loading="lazy"
                    variants={{
                      rest: { opacity: 0, rotate: -2 + idx * 2, translateY: 8 + idx * 4, translateZ: 0 },
                      hover: { opacity: 1, rotate: -6 + idx * 6, translateY: -6 + idx * 4, translateZ: 0 },
                    }}
                    style={{ transformOrigin: '80% 20%' }}
                  />
                ))}
              </motion.div>

              {/* Soft depth glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: '0 30px 80px rgba(245,197,66,0.08), inset 0 0 0 1px rgba(255,255,255,0.05)' }} />
            </motion.figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
