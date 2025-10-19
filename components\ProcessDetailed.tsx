"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Step = { n: number; title: string; body: string };

const steps: Step[] = [
  { n: 1, title: "Research & Intel Sweep", body: "Market, audience, objections, and competitor language mapped to uncover whitespace and high‑leverage narratives." },
  { n: 2, title: "Signal Mining", body: "Collect proof assets, case studies, press, and authority markers to anchor all messaging with credibility." },
  { n: 3, title: "Amplifyr Blueprint", body: "Our intelligence layer defines ICPs, motivators, positioning angles, and proof order—your operating thesis." },
  { n: 4, title: "Voice Architecture", body: "Strategic Messaging Bridge + Archetype Matrix shape phrasing, cadence, and stance so it reads unmistakably like you." },
  { n: 5, title: "Brand Hive Matrix", body: "Narrative × Channel × Proof mapping so each touchpoint compounds belief and moves people toward intent." },
  { n: 6, title: "System Design", body: "Operating system across LinkedIn, X, PR, and lead gen. Map reach → relevance → conversion pathways." },
  { n: 7, title: "3‑Step Community", body: "Reach → resonance → relationships. Rituals and formats that earn attention and convert attention into pipeline." },
  { n: 8, title: "Creative Engine", body: "Hooks, angles, and formats tuned per channel. Templates for speed without sacrificing originality." },
  { n: 9, title: "Specialist Execution", body: "Niche experts across social growth, PR, copy, and paid run their craft to a global standard." },
  { n: 10, title: "Measurement Layer", body: "Track engagement velocity, response quality, booked calls, and press hits—signal over vanity counts." },
  { n: 11, title: "Optimization Loops", body: "Weekly reviews refine tone, cadence, and topic selection. Compounds reach, trust, and revenue predictably." },
  { n: 12, title: "Authority & Scale", body: "Expand PR and thought leadership. Cement category leadership with repeatable, evidence‑backed storytelling." },
];

export default function ProcessDetailed() {
  const [active, setActive] = useState(0);
  const x = useMotionValue(0);
  const glow = useTransform(x, [0, 1], [0.06, 0.12]);
  const contRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const t = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
      x.set(t);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [x]);

  return (
    <section className="py-16">
      <div className="container-slim">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">The Brand Hive UK Process</h1>
            <p className="text-sm text-muted-foreground mt-2">Where structure meets storytelling—and every decision is evidence‑driven.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex h-6 items-center rounded-full border border-white/10 bg-white/5 px-2">Drag ▸</span>
            <span className="inline-flex h-6 items-center rounded-full border border-white/10 bg-white/5 px-2">← / →</span>
          </div>
        </div>

        {/* Desktop grid */}
        <motion.div
          ref={contRef}
          className="hidden lg:grid grid-cols-3 gap-4"
          style={{ filter: glow.get().toString() }}
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              onHoverStart={() => setActive(i)}
              className="card p-5 relative overflow-hidden ui-glow"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background:
                `radial-gradient(600px 200px at ${10 + (i%3)*40}% -20%, rgba(245,197,66,${active===i?0.10:0.04}), transparent 60%)` }} />
              <div className="text-accent text-xs font-semibold tracking-wider">{String(s.n).padStart(2,'0')}</div>
              <h3 className="mt-1 text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              <div className="mt-4 h-24 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-[11px] text-muted-foreground">
                Interactive diagram placeholder
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile horizontal carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-x-auto snap-x snap-mandatory no-scrollbar" aria-label="Process steps carousel">
            <div className="flex gap-3 pr-4">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  className="min-w-[85%] snap-center card p-5 ui-glow"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                >
                  <div className="text-accent text-xs font-semibold tracking-wider">{String(s.n).padStart(2,'0')}</div>
                  <h3 className="mt-1 text-base font-medium">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

