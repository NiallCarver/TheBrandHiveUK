"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all ${scrolled ? 'backdrop-blur bg-background/60 border-b border-white/5' : 'bg-transparent'}`}>
      <nav className="container-slim flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md px-1">
          <img
            src="/logos/brand-logo.png"
            alt="BrandHive"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border border-white/20 ring-2 ring-white/80 ring-offset-2 ring-offset-background shadow-[0_0_36px_rgba(245,197,66,0.35),0_0_80px_rgba(245,197,66,0.20)]"
            style={{ filter: 'brightness(1.15) contrast(1.12)' }}
          />
          <span className="text-sm font-semibold tracking-wide">BrandHive</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/process" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">Process</Link>
          <Link href="/insight-hive" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">Insight Hive</Link>
          <Link href="/book" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">Book</Link>
          <Link href="/contact" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
