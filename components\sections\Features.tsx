"use client";
import Section from "../ui/Section";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { useMotion } from "@/components/providers/MotionProvider";

const items = [
  { title: "X Growth Systems", desc: "Strategy, content, and distribution engineered for compounding reach."},
  { title: "LinkedIn Authority", desc: "Proof-led narratives that attract buyers, partners, and press."},
  { title: "Lead Gen Engines", desc: "Funnel design that turns impressions into pipeline."},
  { title: "Web & App", desc: "Sleek, performant, conversion-first product surfaces."},
];

export default function Features(){
  const { enabled } = useMotion();
  return (
    <Section id="services">
      <motion.div {...(enabled ? { variants:stagger(0.1,0.06), initial:"hidden" as const, whileInView:"show" as const, viewport:{ once:true, margin:"-10%" } } : {})} className="grid md:grid-cols-2 gap-6">
        {items.map((it) => (
          <motion.div key={it.title} {...(enabled ? { variants:fadeUp } : {})} className="card hover:shadow-brand transition-all will-change-transform">
            <h3 className="h3">{it.title}</h3>
            <p className="p mt-2">{it.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
