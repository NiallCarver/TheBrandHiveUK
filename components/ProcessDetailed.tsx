"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Step = { n: number; title: string; body: string; bullets?: string[] };

function StepGraphic({ n }: { n: number }){
  const gold = "#F5C542";
  const idx = ((n - 1) % 12) + 1;
  return (
    <svg viewBox="0 0 200 80" className="w-full h-20" aria-hidden>
      <defs>
        <linearGradient id={`gold${n}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(245,197,66,0.15)" />
          <stop offset="100%" stopColor="rgba(245,197,66,0.35)" />
        </linearGradient>
        <marker id={`arrow${n}`} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill={gold} />
        </marker>
      </defs>
      <rect x="0" y="0" width="200" height="80" rx="10" fill={`url(#gold${n})`} />
      <g stroke={gold} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {idx === 1 && (
          <>
            <circle cx="70" cy="40" r="18" />
            <line x1="83" y1="53" x2="100" y2="66" />
            <line x1="20" y1="20" x2="55" y2="20" />
            <line x1="20" y1="60" x2="55" y2="60" />
          </>
        )}
        {idx === 2 && (
          <>
            <path d="M25 30 L40 45 L70 20" />
            <path d="M25 55 L40 70 L70 45" />
            <rect x="90" y="22" width="70" height="36" rx="6" />
          </>
        )}
        {idx === 3 && (
          <>
            <circle cx="40" cy="40" r="8" />
            <circle cx="80" cy="24" r="6" />
            <circle cx="80" cy="56" r="6" />
            <circle cx="120" cy="40" r="10" />
            <line x1="46" y1="40" x2="74" y2="24" />
            <line x1="46" y1="40" x2="74" y2="56" />
            <line x1="86" y1="24" x2="110" y2="40" />
            <line x1="86" y1="56" x2="110" y2="40" />
          </>
        )}
        {idx === 4 && (
          <>
            <path d="M25 55 C40 20, 85 20, 100 55" />
            <line x1="30" y1="30" x2="95" y2="30" />
            <path d="M120 25 h40 v30 h-40 z" />
            <path d="M120 40 h40" />
          </>
        )}
        {idx === 5 && (
          <>
            <circle cx="40" cy="40" r="10" />
            <rect x="85" y="25" width="30" height="30" rx="4" />
            <path d="M52 40 H85" markerEnd={`url(#arrow${n})`} />
            <path d="M115 40 H150" markerEnd={`url(#arrow${n})`} />
          </>
        )}
        {idx === 6 && (
          <>
            <rect x="24" y="28" width="24" height="24" rx="4" />
            <rect x="60" y="20" width="36" height="20" rx="4" />
            <rect x="60" y="46" width="36" height="20" rx="4" />
            <path d="M96 30 H135" markerEnd={`url(#arrow${n})`} />
            <path d="M96 56 H135" markerEnd={`url(#arrow${n})`} />
          </>
        )}
        {idx === 7 && (
          <>
            <circle cx="40" cy="40" r="6" />
            <circle cx="25" cy="25" r="4" />
            <circle cx="25" cy="55" r="4" />
            <circle cx="55" cy="25" r="4" />
            <circle cx="55" cy="55" r="4" />
            <line x1="25" y1="25" x2="40" y2="40" />
            <line x1="25" y1="55" x2="40" y2="40" />
            <line x1="55" y1="25" x2="40" y2="40" />
            <line x1="55" y1="55" x2="40" y2="40" />
          </>
        )}
        {idx === 8 && (
          <>
            <path d="M40 20 L46 34 L60 40 L46 46 L40 60 L34 46 L20 40 L34 34 Z" />
            <rect x="85" y="28" width="36" height="24" rx="4" />
            <path d="M121 40 H150" markerEnd={`url(#arrow${n})`} />
          </>
        )}
        {idx === 9 && (
          <>
            <path d="M30 25 h40 v30 l-20 10 l-20 -10 z" />
            <path d="M95 30 h22 v24 h-22 z" />
            <path d="M117 42 h28" markerEnd={`url(#arrow${n})`} />
          </>
        )}
        {idx === 10 && (
          <>
            <rect x="20" y="20" width="8" height="40" />
            <rect x="36" y="32" width="8" height="28" />
            <rect x="52" y="26" width="8" height="34" />
            <path d="M80 52 C100 35, 120 45, 140 34" />
            <circle cx="140" cy="34" r="4" />
          </>
        )}
        {idx === 11 && (
          <>
            <path d="M30 40 C30 25, 55 25, 55 40 C55 55, 30 55, 30 40 Z" />
            <path d="M58 40 H100" markerEnd={`url(#arrow${n})`} />
            <path d="M100 40 C100 25, 125 25, 125 40 C125 55, 100 55, 100 40 Z" />
          </>
        )}
        {idx === 12 && (
          <>
            <path d="M30 55 h60 l-10 -20 h-40 z" />
            <path d="M110 55 v-22" markerEnd={`url(#arrow${n})`} />
            <path d="M130 55 v-30" markerEnd={`url(#arrow${n})`} />
            <path d="M150 55 v-38" markerEnd={`url(#arrow${n})`} />
          </>
        )}
      </g>
    </svg>
  );
}

const steps: Step[] = [
  {
    n: 1,
    title: "Research & Intelligence Sweep",
    body:
      "We interrogate markets, audience vernacular, and competitor frames to expose narrative whitespace and decision-making triggers. The outcome is a reality map, not opinions, and it directs every subsequent move.",
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
      "We assemble proof at depth: press, case studies, outcomes, and testimonials. We then order them by persuasion weight. This converts social attention into trust without theatrics.",
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
      "We engineer a voice that reads unmistakably like leadership, structured for recall, respect, and response. Phrasing, rhythm, and stance are codified for speed and fidelity.",
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
      "Narrative, channel, and proof mapping ensures each touchpoint compounds belief. Distribution is designed, not hoped for.",
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
    title: "3-Step Community",
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
      "Hooks and formats are tuned to platform physics. We ship original work at pace, structured for saves, replies, and downstream revenue, not vanity graphs.",
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
      "Niche experts run the stack: social growth, PR, copy, and paid, all under a shared standard. This is craftsmanship at scale.",
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
      "Partner distribution and co-creation",
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
          <p className="text-sm text-muted-foreground mt-2">Where structure meets storytelling, and every decision is evidence-driven.</p>
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
              <div className="mt-4 rounded-lg overflow-hidden">
                <StepGraphic n={s.n} />
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
                  <div className="mt-3 rounded-lg overflow-hidden">
                    <StepGraphic n={s.n} />
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
