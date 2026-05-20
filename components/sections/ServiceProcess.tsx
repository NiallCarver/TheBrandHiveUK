"use client";
import Section from "../ui/Section";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { useMotion } from "@/components/providers/MotionProvider";

type Step = { title: string; desc: string };

export default function ServiceProcess({ steps, title = "Process" }: { steps: Step[]; title?: string }){
  const { enabled } = useMotion();
  return (
    <Section>
      <motion.div {...(enabled ? { variants:stagger(0.1,0.06), initial:"hidden" as const, whileInView:"show" as const, viewport:{ once:true, margin:"-10%" } } : {})}>
        <motion.h2 {...(enabled ? { variants:fadeUp } : {})} className="h2">{title}</motion.h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <motion.div key={s.title} {...(enabled ? { variants:fadeUp } : {})} className="card">
              <div className="text-sm text-muted-foreground">Step {idx+1}</div>
              <div className="h3 mt-1">{s.title}</div>
              <p className="p mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

