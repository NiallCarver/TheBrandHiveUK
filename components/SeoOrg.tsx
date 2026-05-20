export default function SeoOrg(){
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Brand Hive UK',
    url: 'https://brandhive.uk',
    logo: 'https://brandhive.uk/brandhive-logo.svg',
    sameAs: ['https://x.com/', 'https://www.linkedin.com/'],
  }
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Brand Hive UK',
    url: 'https://brandhive.uk',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://brandhive.uk/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  )
}

