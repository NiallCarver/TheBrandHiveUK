"use client";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import { fadeUp, stagger } from "@/lib/motion";
import { useMotion } from "@/components/providers/MotionProvider";

type Benefit = { title: string; desc: string };

export default function ServiceBenefits({ items }: { items: Benefit[] }){
  const { enabled } = useMotion();
  return (
    <Section>
      <motion.div {...(enabled ? { variants:stagger(0.1,0.08), initial:"hidden" as const, whileInView:"show" as const, viewport:{ once: true, margin: "-10%" } } : {})} className="grid md:grid-cols-2 gap-6">
        {items.map((it) => (
          <motion.div key={it.title} {...(enabled ? { variants:fadeUp } : {})} className="card">
            <h3 className="h3">{it.title}</h3>
            <p className="p mt-2">{it.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
