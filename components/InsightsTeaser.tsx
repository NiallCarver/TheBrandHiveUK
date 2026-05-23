import Section from '@/components/ui/Section'
import Link from 'next/link'
import { getAllArticles } from '../data/articles'

export default function InsightsTeaser(){
  const posts = getAllArticles().slice(0, 3)

  return (
    <Section>
      <h2 className="h2">Insights</h2>
      <p className="p mt-2">Monthly journals on authority systems, distribution, and growth.</p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((p) => (
          <Link key={p.slug} href={`/insight-hive/${p.slug}`} className="card p-5 block hover:shadow-brand transition-all">
            <div className="text-xs text-muted">{p.category}</div>
            <h3 className="mt-1 text-base font-medium">{p.title}</h3>
          </Link>
        ))}
      </div>
    </Section>
  )
}
