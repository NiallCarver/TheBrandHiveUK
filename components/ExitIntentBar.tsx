"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ExitIntentBar(){
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const seen = window.localStorage.getItem('exitSeen');
    if (seen === '1') return;
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) setOpen(true);
    };
    const onScroll = () => {
      if (window.scrollY > 600) setOpen(true);
    }
    window.addEventListener('mouseout', onLeave);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('mouseout', onLeave);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if(open && typeof window !== 'undefined') window.localStorage.setItem('exitSeen','1');
  }, [open]);

  if(!open) return null;
  return (
    <div className="fixed bottom-3 inset-x-3 z-50">
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-card/95 backdrop-blur p-4 shadow-xl">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="text-sm"><strong>Free Authority Checklist</strong> — Want the 7 steps we use to turn founders into industry leaders?</div>
          <div className="ml-auto flex items-center gap-2">
            <Link href="#book" className="btn px-3 py-1.5 text-sm">Book a Quick Discovery</Link>
            <button className="text-xs text-muted hover:text-foreground" onClick={() => setOpen(false)} aria-label="Close">Dismiss</button>
          </div>
        </div>
      </div>
    </div>
  );
}

