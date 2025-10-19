"use client";
import Section from "../ui/Section";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { useMotion } from "@/components/providers/MotionProvider";

type QA = { q: string; a: string };

export default function ServiceFAQ({ items, title = "FAQs" }: { items: QA[]; title?: string }){
  const { enabled } = useMotion();
  return (
    <Section>
      <motion.div {...(enabled ? { variants:stagger(0.1,0.06), initial:"hidden" as const, whileInView:"show" as const, viewport:{ once:true, margin:"-10%" } } : {})}>
        <motion.h2 {...(enabled ? { variants:fadeUp } : {})} className="h2">{title}</motion.h2>
        <div className="mt-6 grid gap-3">
          {items.map((qa) => (
            <motion.details key={qa.q} {...(enabled ? { variants:fadeUp } : {})} className="card">
              <summary className="h3 cursor-pointer select-none">{qa.q}</summary>
              <p className="p mt-2">{qa.a}</p>
            </motion.details>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

