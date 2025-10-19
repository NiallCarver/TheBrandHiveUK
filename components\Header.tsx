"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import CTAButton from "./ui/CTAButton";

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
        <Link href="/" className="flex items-center gap-3 font-medium">
          <img
            src="/logos/brand-logo.png"
            alt="BrandHive"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border border-white/20 ring-2 ring-white/80 ring-offset-2 ring-offset-background shadow-[0_0_36px_rgba(245,197,66,0.35),0_0_80px_rgba(245,197,66,0.20)]"
            style={{ filter: 'brightness(1.15) contrast(1.12)' }}
          />
          <span>The Brand Hive UK</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/services" className="link">Services</Link>
          <Link href="/process" className="link">Process</Link>
          <Link href="/insight-hive" className="link">Insight Hive</Link>
          <Link href="/about" className="link">About</Link>
          <Link href="/contact" className="link">Contact</Link>
          <CTAButton href="#book">Book a Call</CTAButton>
        </div>
      </nav>
    </header>
  );
}
