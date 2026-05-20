import Section from '@/components/ui/Section'

export default function InsightsTeaser(){
  const posts = [
    { title: 'How to scale a personal brand on LinkedIn in 2025', status: 'Coming soon' },
    { title: 'Why authority marketing outperforms ads for B2B growth', status: 'Coming soon' },
    { title: 'The psychology behind viral B2B content', status: 'Coming soon' },
  ]
  return (
    <Section>
      <h2 className="h2">Insights</h2>
      <p className="p mt-2">Monthly journals on authority systems, distribution, and growth.</p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((p) => (
          <div key={p.title} className="card p-5">
            <div className="text-xs text-muted">{p.status}</div>
            <h3 className="mt-1 text-base font-medium">{p.title}</h3>
          </div>
        ))}
      </div>
    </Section>
  )
}

