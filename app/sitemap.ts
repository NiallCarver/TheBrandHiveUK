import type { MetadataRoute } from 'next'
import { getAllArticles } from '../data/articles'
import { siteConfig } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url
  const routes = [
    '/',
    '/about',
    '/contact',
    '/insight-hive',
    '/services',
    '/services/x',
    '/services/linkedin',
    '/services/lead-gen',
    '/services/web-app-dev',
  ]
  const lastModified = new Date()
  const staticRoutes = routes.map((path) => ({ url: new URL(path, base).toString(), lastModified }))
  const articleRoutes = getAllArticles().map((article) => ({
    url: new URL(`/insight-hive/${article.slug}`, base).toString(),
    lastModified: new Date(article.updatedAt),
  }))

  return [...staticRoutes, ...articleRoutes]
}
