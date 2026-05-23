import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/Section'
import { getAllArticles } from '../../data/articles'

export const metadata: Metadata = {
  title: 'Insight Hive - Brand Hive UK',
  description: 'Operator-level articles on founder-led marketing, ghostwriting, positioning, content systems, social strategy, and authority-led acquisition.',
  alternates: { canonical: '/insight-hive' },
  openGraph: {
    title: 'Insight Hive - Brand Hive UK',
    description: 'Operator-level articles on founder-led marketing, ghostwriting, positioning, content systems, social strategy, and authority-led acquisition.',
    type: 'website',
    url: '/insight-hive',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insight Hive',
    description: 'Operator-level articles on founder-led marketing, ghostwriting, positioning, content systems, social strategy, and authority-led acquisition.',
  },
}

export default function InsightHivePage(){
  const posts = getAllArticles()

  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <h1 className="h1">Insight Hive</h1>
          <p className="p mt-4">
            Operator-level writing on founder-led marketing, ghostwriting, positioning, content systems, social strategy, and authority-led acquisition.
          </p>
        </div>
      </Section>
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/insight-hive/${post.slug}`} className="card p-5 block hover:shadow-brand transition-all">
              <div className="flex items-center justify-between gap-3 text-xs text-muted">
                <span>{post.category}</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="mt-3 text-base font-medium">{post.title}</h2>
              <p className="p mt-3 text-sm leading-6">{post.description}</p>
              <p className="mt-4 text-sm underline decoration-transparent underline-offset-4 hover:decoration-primary">Read article</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}
