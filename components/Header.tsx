"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header(){
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? "header-blur border-b border-border" : ""}`}>
      <nav className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-base sm:text-lg hover:text-accent transition-colors">
          The Brand Hive UK
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className="link">Home</Link>
          <Link href="/services" className="link">Services</Link>
          <Link href="/process" className="link">Process</Link>
          <Link href="/insight-hive" className="link">Insight Hive</Link>
          <Link href="/about" className="link">About</Link>
          <Link href="/contact" className="link">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
