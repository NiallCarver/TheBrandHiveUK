import type { Metadata } from 'next'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'Insight Hive — Brand Hive UK',
  description: 'Monthly journals on authority systems, distribution, and growth. Coming soon.'
}

const posts = [
  'How to scale a personal brand on LinkedIn in 2025',
  'Why authority marketing outperforms ads for B2B growth',
  'The psychology behind viral B2B content',
]

export default function InsightHivePage(){
  return (
    <Section>
      <h1 className="h1">Insight Hive</h1>
      <p className="p mt-2">Monthly journals on authority systems, distribution, and growth.</p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((title) => (
          <div key={title} className="card p-5">
            <div className="text-xs text-muted">Coming soon</div>
            <h3 className="mt-1 text-base font-medium">{title}</h3>
          </div>
        ))}
      </div>
    </Section>
  )
}

