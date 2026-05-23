import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Section from '@/components/Section'
import { absoluteUrl, siteConfig } from '@/lib/site'
import {
  getAllArticles,
  getArticleBySlug,
  getArticleUrl,
  getArticleWordCount,
  getRelatedArticles,
} from '../../../data/articles'

type PageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: 'Article not found | The Brand Hive UK',
    }
  }

  const path = `/insight-hive/${article.slug}`

  return {
    title: `${article.title} | The Brand Hive UK`,
    description: article.description,
    alternates: { canonical: path },
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      url: path,
      siteName: siteConfig.name,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      tags: article.tags,
      images: [siteConfig.ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [siteConfig.ogImage],
    },
  }
}

export default function ArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(article)
  const articleUrl = getArticleUrl(article)
  const authorId = `${siteConfig.url}/#author-niall-carver`
  const publisherId = `${siteConfig.url}/#organization`
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': authorId,
        name: article.author.name,
        jobTitle: article.author.role,
        worksFor: { '@id': publisherId },
        url: siteConfig.url,
      },
      {
        '@type': 'Organization',
        '@id': publisherId,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl(siteConfig.logo),
        },
      },
      {
        '@type': 'Article',
        '@id': `${articleUrl}#article`,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': articleUrl,
        },
        headline: article.title,
        description: article.description,
        image: [absoluteUrl(siteConfig.ogImage)],
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        author: { '@id': authorId },
        publisher: { '@id': publisherId },
        articleSection: article.category,
        keywords: article.tags,
        about: article.entities.map((entity) => ({ '@type': 'Thing', name: entity })),
        wordCount: getArticleWordCount(article),
        inLanguage: 'en-GB',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${articleUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteConfig.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Insight Hive',
            item: absoluteUrl('/insight-hive'),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title,
            item: articleUrl,
          },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Section>
        <article className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
            <Link href="/insight-hive" className="link">Insight Hive</Link>
            <span className="mx-2">/</span>
            <span>{article.category}</span>
          </nav>
          <header>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
              <span>{article.category}</span>
              <span aria-hidden>|</span>
              <time dateTime={article.publishedAt}>
                {new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(article.publishedAt))}
              </time>
              <span aria-hidden>|</span>
              <span>{article.readingTime}</span>
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">{article.title}</h1>
            <p className="p mt-6 text-lg leading-8">{article.intro}</p>
            <p className="mt-6 text-sm text-muted">By {article.author.name}, {article.author.role}</p>
          </header>

          <div className="mt-12 space-y-7">
            {article.blocks.map((block, index) => {
              if (block.type === 'heading') {
                return <h2 key={`${block.type}-${index}`} className="pt-5 text-2xl sm:text-3xl font-semibold tracking-tight">{block.text}</h2>
              }

              if (block.type === 'list') {
                return (
                  <ul key={`${block.type}-${index}`} className="space-y-3 pl-5 text-base leading-7 text-muted-foreground list-disc">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )
              }

              return <p key={`${block.type}-${index}`} className="p">{block.text}</p>
            })}
          </div>

          <aside className="card mt-12 p-5">
            <h2 className="text-base font-medium">Connected services</h2>
            <div className="mt-4 grid gap-3">
              {article.serviceLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block rounded-xl border border-border px-4 py-3 hover:bg-white/5 transition-colors">
                  <span className="block text-sm font-medium">{link.title}</span>
                  <span className="block mt-1 text-sm text-muted">{link.label}</span>
                </Link>
              ))}
            </div>
          </aside>

          {relatedArticles.length > 0 && (
            <aside className="mt-12 border-t border-border pt-8">
              <h2 className="text-base font-medium">Related reading</h2>
              <div className="mt-4 grid gap-3">
                {relatedArticles.map((relatedArticle) => (
                  <Link key={relatedArticle.slug} href={`/insight-hive/${relatedArticle.slug}`} className="block rounded-xl border border-border px-4 py-3 hover:bg-white/5 transition-colors">
                    <span className="block text-sm text-muted">{relatedArticle.category}</span>
                    <span className="block mt-1 font-medium">{relatedArticle.title}</span>
                  </Link>
                ))}
              </div>
            </aside>
          )}
        </article>
      </Section>
    </>
  )
}
