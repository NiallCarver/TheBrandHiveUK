"use client";
import { useMotion } from "@/components/providers/MotionProvider";

export default function Footer() {
  const { enabled, toggle } = useMotion();

  return (
    <footer className="relative z-10 border-t border-white/5 mt-10">
      <div className="container-slim py-6 text-xs sm:text-sm text-muted">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src="/logos/The_Brand_Hive_UK_Transparent.png" alt="BrandHive" className="h-6 w-6 rounded-full" onError={(e)=>{ const t=e.currentTarget; if(t.src.indexOf('brand-logo.png')===-1) t.src='/logos/brand-logo.png'; }} />
            <span className="text-foreground font-medium">Brand Hive UK</span>
            <span className="hidden sm:inline-block">•</span>
            <a className="hover:text-foreground" href="mailto:info@thebrandhive.uk">info@thebrandhive.uk</a>
            <span className="hidden sm:inline-block">•</span>
            <a className="hover:text-foreground" href="https://x.com/" target="_blank" rel="noreferrer">X</a>
            <a className="hover:text-foreground" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a className="hover:text-foreground" href="/process">Process</a>
            <a className="hover:text-foreground" href="/about">About</a>
            <a className="hover:text-foreground" href="/contact">Contact</a>
            <a className="hover:text-foreground" href="/book">Book</a>
            <span className="opacity-40">|</span>
            <a className="hover:text-foreground" href="/legal/terms">Terms</a>
            <a className="hover:text-foreground" href="/legal/privacy">Privacy</a>
            <a className="hover:text-foreground" href="/legal/cookies">Cookies</a>
            <button
              type="button"
              onClick={toggle}
              className="ml-1 inline-flex items-center gap-1 rounded-full border border-white/10 px-2 py-0.5 text-[11px] hover:bg-white/5"
              aria-pressed={enabled}
              aria-label="Toggle animations"
              title={`Animations: ${enabled ? "On" : "Off"}`}
            >
              <span className={`inline-block h-2 w-2 rounded-full ${enabled ? "bg-emerald-400" : "bg-zinc-500"}`} />
              <span>{enabled ? "Anim On" : "Anim Off"}</span>
            </button>
          </div>
        </div>
        <div className="mt-2 text-[11px] text-center sm:text-right">© {new Date().getFullYear()} Brand Hive UK. All rights reserved.</div>
      </div>
    </footer>
  )
}

