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
    <header className={"fixed top-0 inset-x-0 z-40 transition-all " + (scrolled ? 'backdrop-blur bg-background/60 border-b border-white/5' : 'bg-transparent')}>
      <nav className="container-slim flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md px-1">
          <span className="text-base font-semibold tracking-wide">The Brand Hive</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">Home</Link>
          <Link href="/process" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">Process</Link>
          <Link href="/book" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">Book</Link>
          <Link href="/contact" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
