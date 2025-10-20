"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Infographic from "@/components/ui/Infographic";

type Step = { n: number; title: string; body: string; bullets?: string[] };

const steps: Step[] = [
  {
    n: 1,
    title: "Research & Intelligence Sweep",
    body:
      "We interrogate markets, audience vernacular, and competitor frames to expose narrative whitespace and decision-making triggers. The outcome is a reality map—not opinions—that directs every subsequent move.",
    bullets: [
      "Audience linguistics and objection mining",
      "Competitor narrative decomposition",
      "Category power-dynamics and whitespace"
    ],
  },
  {
    n: 2,
    title: "Signal Mining",
    body:
      "We assemble proof at depth—press, case studies, outcomes, testimonials—and order them by persuasion weight. This converts social attention into trust without theatrics.",
    bullets: [
      "Proof inventory and credibility hierarchy",
      "Case study structure and quotable assets",
      "Press angles and authority anchors"
    ],
  },
  {
    n: 3,
    title: "Amplifyr Blueprint",
    body:
      "Our intelligence layer defines ICPs, motivational drivers, positioning vectors, and proof order. It becomes the operating thesis for brand, content, and distribution.",
    bullets: [
      "ICP segmentation and pain-language",
      "Positioning vectors and category stance",
      "Proof cadence and CTA architecture"
    ],
  },
  {
    n: 4,
    title: "Voice Architecture",
    body:
      "We engineer a voice that reads unmistakably like leadership—structured for recall, respect, and response. Phrasing, rhythm, and stance are codified for speed and fidelity.",
    bullets: [
      "Messaging bridge and stance calibration",
      "Archetype alignment and cadence rules",
      "Editorial guardrails and exemplars"
    ],
  },
  {
    n: 5,
    title: "Brand Hive Matrix",
    body:
      "Narrative — Channel — Proof mapping ensures each touchpoint compounds belief. Distribution is designed, not hoped for.",
    bullets: [
      "Message mapping per surface",
      "Proof placement and friction removal",
      "Discovery mechanics and recirculation"
    ],
  },
  {
    n: 6,
    title: "System Design",
    body:
      "We build an operating system across LinkedIn, X, PR, and lead gen that converts attention into pipeline. The system scales without diluting voice.",
    bullets: [
      "Weekly cadences and content pillars",
      "Engagement workflows and distribution",
      "Conversion paths and offer sequencing"
    ],
  },
  {
    n: 7,
    title: "3‑Step Community",
    body:
      "Reach → resonance → relationships. We operationalize rituals that earn attention, build affinity, and open qualified conversations at will.",
    bullets: [
      "Surface area expansion without spam",
      "Signal-led interaction rituals",
      "DM frameworks and call creation"
    ],
  },
  {
    n: 8,
    title: "Creative Engine",
    body:
      "Hooks and formats are tuned to platform physics. We ship original work at pace—structured for saves, replies, and downstream revenue, not vanity graphs.",
    bullets: [
      "Hook libraries and angle packs",
      "Format templates for speed",
      "Editorial QA and variance checks"
    ],
  },
  {
    n: 9,
    title: "Specialist Execution",
    body:
      "Niche experts run the stack—social growth, PR, copy, paid—under a shared standard. This is craftsmanship at scale.",
    bullets: [
      "Role clarity and baton passes",
      "Review rhythms and escalation",
      "Quality gates per discipline"
    ],
  },
  {
    n: 10,
    title: "Measurement Layer",
    body:
      "We track leading indicators that predict revenue: response quality, saves velocity, profile intent, press momentum, booked calls. Reporting reads like strategy, not a dashboard dump.",
    bullets: [
      "Leading vs. lagging indicator set",
      "Insight memos and decision logs",
      "Attribution sanity, not theater"
    ],
  },
  {
    n: 11,
    title: "Optimization Loops",
    body:
      "Weekly reviews tighten narrative, cadence, and offer order. Compounding reach and trust are engineered, not accidental.",
    bullets: [
      "Topic pruning and angle deepening",
      "Cadence and CTA experiments",
      "Proof stacking and recency bias"
    ],
  },
  {
    n: 12,
    title: "Authority & Scale",
    body:
      "We expand PR and thought leadership, institutionalize voice, and cement category leadership. The compounding machine becomes a moat.",
    bullets: [
      "Executive platform development",
      "Partner distribution and co‑creation",
      "Playbook hardening and training"
    ],
  },
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
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">The Brand Hive UK Process</h1>
          <p className="text-sm text-muted-foreground mt-2">Where structure meets storytelling — and every decision is evidence-driven.</p>
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
              {s.bullets && s.bullets.length ? (
                <ul className="mt-3 text-xs text-muted-foreground space-y-1 list-disc pl-5">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-4 h-24 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-[11px] text-muted-foreground">
                <Infographic kind={i} />
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
                  {s.bullets && s.bullets.length ? (
                    <ul className="mt-3 text-[11px] text-muted-foreground space-y-1 list-disc pl-5">
                      {s.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="mt-3 h-20 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
                    <Infographic kind={i} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
