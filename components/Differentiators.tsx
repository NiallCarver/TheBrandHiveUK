import Section from '@/components/ui/Section'

export default function Differentiators(){
  const items = [
    'Specialists, not generalists',
    'Proven data-driven frameworks',
    'Proprietary Authority Architecture system',
    'Transparent results and reporting',
  ]
  return (
    <Section>
      <div className="card ui-glow p-8">
        <h3 className="text-xl font-semibold tracking-tight">Why the best brands choose Brand Hive UK</h3>
        <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-muted">
          {items.map((it) => (
            <li key={it} className="rounded-lg border border-white/10 bg-white/5 p-3">{it}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}


