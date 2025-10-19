"use client";
import Section from "../ui/Section";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { useMotion } from "@/components/providers/MotionProvider";

type Tier = { name: string; price: string; blurb: string; points: string[] };

export default function ServicePricing({ tiers, title = "Pricing" }: { tiers: Tier[]; title?: string }){
  const { enabled } = useMotion();
  return (
    <Section>
      <motion.div {...(enabled ? { variants:stagger(0.1,0.06), initial:"hidden" as const, whileInView:"show" as const, viewport:{ once:true, margin:"-10%" } } : {})}>
        <motion.h2 {...(enabled ? { variants:fadeUp } : {})} className="h2">{title}</motion.h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <motion.div key={t.name} {...(enabled ? { variants:fadeUp } : {})} className="card">
              <div className="h3">{t.name}</div>
              <div className="text-2xl font-semibold mt-2">{t.price}</div>
              <p className="p mt-2">{t.blurb}</p>
              <ul className="mt-4 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                {t.points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

