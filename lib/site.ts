const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://thebrandhive.uk').replace(/\/$/, '')

export const siteConfig = {
  name: 'The Brand Hive UK',
  legalName: 'Brand Hive UK',
  url: siteUrl,
  ogImage: '/og-image.svg',
  logo: '/logos/The_Brand_Hive_UK_Transparent.png',
  email: 'info@thebrandhive.uk',
}

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString()
}
