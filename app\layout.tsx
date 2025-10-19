import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HexBackground from '@/components/HexBackground'
import SeoOrg from '@/components/SeoOrg'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BrandHive — Startup Websites that Convert',
  description: 'We design, build, and iterate high-converting marketing sites for ambitious startups.',
  metadataBase: new URL('https://brandhive.uk'),
  openGraph: {
    title: 'BrandHive — Startup Websites that Convert',
    description: 'We design, build, and iterate high-converting marketing sites for ambitious startups.',
    url: 'https://brandhive.uk',
    siteName: 'BrandHive',
    images: ['/og-image.svg'],
    type: 'website'
  },
  icons: { icon: '/logos/brand-logo.png' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <SeoOrg />
        <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-3 focus:py-2 focus:bg-card focus:rounded-md">Skip to content</a>
        <HexBackground />
        <Navbar />
        <main id="content" className="relative z-10 container-slim pt-28 pb-20">{children}</main>
        <Footer />
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
