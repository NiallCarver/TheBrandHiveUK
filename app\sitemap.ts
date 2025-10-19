import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  const routes = [
    '/',
    '/about',
    '/contact',
    '/services',
    '/services/x',
    '/services/linkedin',
    '/services/lead-gen',
    '/services/web-app-dev',
  ]
  const lastModified = new Date()
  return routes.map((path) => ({ url: new URL(path, base).toString(), lastModified }))
}

