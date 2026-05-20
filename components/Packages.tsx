"use client"
import Button from '@/components/Button'
import Reveal from '@/components/Reveal'

const tiers = [
  {
    name: 'Standard',
    price: '£3,500',
    features: [
      'Strategy + wireframes',
      'Design + build (up to 6 pages)',
      'CMS for content',
      'Basic analytics setup',
    ],
  },
  {
    name: 'Growth',
    price: '£6,500',
    features: [
      'Everything in Standard',
      'A/B testing + experiments',
      'Ongoing CRO iterations (first month)',
      'Advanced analytics + dashboards',
    ],
    highlight: true,
  }
]

export default function Packages() {
  return (
    <section id="packages" aria-labelledby="packages-title" className="py-20">
      <div className="container-slim">
        <h2 id="packages-title" className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">Packages</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={0.05 * i}>
              <div className={`card ui-glow p-6 h-full ${t.highlight ? 'ring-1 ring-accent/30' : ''}`}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-medium">{t.name}</h3>
                  <div className="text-2xl font-semibold">{t.price}</div>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2"><span className="text-accent">•</span><span className="text-muted">{f}</span></li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button className="px-6 py-3 text-base" onClick={() => (window.location.href = '/book')}>Choose {t.name}</Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
