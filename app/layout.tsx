import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HexBackground from '@/components/HexBackground'
import SeoOrg from '@/components/SeoOrg'
import Providers from '@/components/providers/Providers'
import { siteConfig } from '@/lib/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Brand Hive UK - Authority That Converts',
  description: 'Modern, premium, tech-forward brand building across X and LinkedIn for founders and CEOs.',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: 'The Brand Hive UK - Authority That Converts',
    description: 'Modern, premium, tech-forward brand building across X and LinkedIn for founders and CEOs.',
    url: siteConfig.url,
    siteName: 'The Brand Hive UK',
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
        <Providers>
          <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-3 focus:py-2 focus:bg-card focus:rounded-md">Skip to content</a>
          <HexBackground />
          <Header />
          <main id="content" className="relative z-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
