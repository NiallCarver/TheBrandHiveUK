"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { useMotion } from "@/components/providers/MotionProvider";

export default function Footer() {
  const { enabled, toggle } = useMotion();

  const MotionWrapper = enabled ? motion.div : ("div" as any);
  const motionProps = enabled ? { variants: stagger(0.06, 0.05), initial: "hidden" as const, animate: "show" as const } : {};
  const itemProps = enabled ? { variants: fadeUp } : {};

  return (
    <footer className="relative z-10 border-t border-white/5 mt-10">
      <div className="container-slim py-10 text-sm text-muted grid gap-8 md:grid-cols-4">
        <MotionWrapper {...motionProps}>
          <motion.div {...itemProps} className="contents">
            <div>
              <div className="flex items-center gap-2">
                <img src="/logos/brand-logo.png" alt="BrandHive" className="h-7 w-7 rounded-full" />
                <span className="font-medium">Brand Hive UK</span>
              </div>
              <p className="mt-3 text-xs">Authority systems for founders on X, LinkedIn, and PR.</p>
              <p className="mt-3 text-xs">info@thebrandhiveuk.com</p>
              <div className="mt-3 flex items-center gap-3 text-xs">
                <a className="hover:text-foreground" href="https://x.com/" target="_blank" rel="noreferrer">X</a>
                <a className="hover:text-foreground" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </motion.div>

          <motion.div {...itemProps}>
            <div className="text-foreground font-medium mb-3">Company</div>
            <ul className="space-y-2">
              <li><a className="hover:text-foreground" href="/process">Process</a></li>
              <li><a className="hover:text-foreground" href="/about">About</a></li>
              <li><a className="hover:text-foreground" href="/insight-hive">Insight Hive</a></li>
              <li><a className="hover:text-foreground" href="/contact">Contact</a></li>
              <li><a className="hover:text-foreground" href="/book">Book</a></li>
            </ul>
          </motion.div>

          <motion.div {...itemProps}>
            <div className="text-foreground font-medium mb-3">Legal</div>
            <ul className="space-y-2">
              <li><a className="hover:text-foreground" href="/legal/terms">Terms of Service</a></li>
              <li><a className="hover:text-foreground" href="/legal/privacy">Privacy Policy</a></li>
              <li><a className="hover:text-foreground" href="/legal/cookies">Cookies</a></li>
              <li><a className="hover:text-foreground" href="/legal/security">Security</a></li>
            </ul>
          </motion.div>

          <motion.div {...itemProps}>
            <div className="text-foreground font-medium mb-3">App-style Badges</div>
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="rounded-lg border border-white/10 p-3 text-center bg-white/5">Coming Soon</div>
              <div className="rounded-lg border border-white/10 p-3 text-center bg-white/5">Case Studies</div>
              <div className="rounded-lg border border-white/10 p-3 text-center bg-white/5">Press</div>
              <div className="rounded-lg border border-white/10 p-3 text-center bg-white/5">Careers</div>
            </div>
          </motion.div>
        </MotionWrapper>

        <div className="md:col-span-4 border-t border-white/5 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Brand Hive UK. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-foreground" href="/legal/terms">Terms</a>
            <a className="hover:text-foreground" href="/legal/privacy">Privacy</a>
            <a className="hover:text-foreground" href="/legal/cookies">Cookies</a>
          </div>
          <button
            type="button"
            onClick={toggle}
            className="ml-auto inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs hover:bg-white/5"
            aria-pressed={enabled}
            aria-label="Toggle footer animations"
            title={`Animations: ${enabled ? "On" : "Off"}`}
          >
            <span className={`inline-block h-2.5 w-2.5 rounded-full ${enabled ? "bg-emerald-400" : "bg-zinc-500"}`} />
            <span className="select-none">Animations: {enabled ? "On" : "Off"}</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

