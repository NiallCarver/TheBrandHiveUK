"use client";
import Section from "../ui/Section";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { useMotion } from "@/components/providers/MotionProvider";

type Stat = { label: string; value: string };

export default function ServiceCaseStudy({ title, summary, stats }: { title: string; summary: string; stats: Stat[] }){
  const { enabled } = useMotion();
  return (
    <Section>
      <motion.div {...(enabled ? { variants:stagger(0.1,0.06), initial:"hidden" as const, whileInView:"show" as const, viewport:{ once:true, margin:"-10%" } } : {})} className="grid md:grid-cols-5 gap-6 items-stretch">
        <motion.div {...(enabled ? { variants:fadeUp } : {})} className="card md:col-span-3">
          <h3 className="h2">{title}</h3>
          <p className="p mt-3">{summary}</p>
          <div className="mt-4 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted grid place-items-center">
            <span className="text-sm text-muted-foreground">Image/Video placeholder</span>
          </div>
        </motion.div>
        <div className="md:col-span-2 grid gap-4">
          {stats.map((s) => (
            <motion.div key={s.label} {...(enabled ? { variants:fadeUp } : {})} className="card">
              <div className="h2">{s.value}</div>
              <p className="p mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
