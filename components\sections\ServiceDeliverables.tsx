"use client";
import Section from "../ui/Section";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { useMotion } from "@/components/providers/MotionProvider";

export default function ServiceDeliverables({ items, title = "Deliverables" }: { items: string[]; title?: string }){
  const { enabled } = useMotion();
  return (
    <Section>
      <motion.div {...(enabled ? { variants:stagger(0.1,0.06), initial:"hidden" as const, whileInView:"show" as const, viewport:{ once:true, margin:"-10%" } } : {})}>
        <motion.h2 {...(enabled ? { variants:fadeUp } : {})} className="h2">{title}</motion.h2>
        <div className="mt-6 grid md:grid-cols-2 gap-3">
          {items.map((it) => (
            <motion.div key={it} {...(enabled ? { variants:fadeUp } : {})} className="card">
              <p className="p">{it}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

