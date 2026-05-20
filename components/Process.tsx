"use client"
import Reveal from '@/components/Reveal'

type Step = { title: string; body: string }

const introTitle = 'The Brand Hive UK Process'
const introLead = 'Where structure meets storytelling — and every decision is evidence-driven.'
const introBody = `Every engagement starts with deep research and deliberate intent. We build systems that help founders become recognized industry leaders with measurable influence, authority, and revenue growth.`

const steps: Step[] = [
  {
    title: '1. Research & Intelligence',
    body:
      'We study market dynamics, audience language, objections, and competitors to find whitespace and the narratives that will resonate with decision-makers.',
  },
  {
    title: '2. Strategy Blueprint (Amplifyr)',
    body:
      'Our Amplifyr layer maps ICPs, emotional motivators, positioning opportunities, and proof points. This data-backed blueprint guides creative and commercial moves.',
  },
  {
    title: '3. Narrative & Positioning (Brand Hive Matrix)',
    body:
      'We translate research into a category-leading story. The Brand Hive Matrix aligns narrative — channel — proof so every message builds belief and trust.',
  },
  {
    title: '4. System & Channels (3‑Step Community)',
    body:
      'We architect the operating system across LinkedIn, X, PR, and lead gen. Our 3‑Step Community Process (reach → resonance → relationships) compounds demand.',
  },
  {
    title: '5. Specialist Execution',
    body:
      'Niche experts across social growth, PR, copy, and paid run their crafts to a global standard. Launch focuses on clarity, proof order, and conversion.',
  },
  {
    title: '6. Optimize — Authority — Scale',
    body:
      'We iterate weekly on engagement and conversion signals, expand PR and thought leadership, and report transparently — compounding reach, trust, and revenue.',
  },
]

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="py-20">
      <div className="container-slim space-y-8">
        <div>
          <h2 id="process-title" className="text-2xl sm:text-3xl font-semibold tracking-tight">{introTitle}</h2>
          <p className="text-sm text-muted mt-2">{introLead}</p>
          <p className="p mt-4 max-w-3xl">
            Every engagement starts with deep research and deliberate intent. We build systems that help founders become recognized industry leaders with measurable influence, authority, and revenue <span className="whitespace-nowrap">growth.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={0.04 * i}>
              <div className="card ui-glow p-6 h-full">
                <div className="text-accent text-xs font-semibold tracking-wider">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="mt-2 text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.body}</p>
                {/* Infographic removed for now */}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
