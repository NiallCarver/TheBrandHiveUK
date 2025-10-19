"use client";
import Section from "../ui/Section";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { useMotion } from "@/components/providers/MotionProvider";

export default function Results(){
  const { enabled } = useMotion();
  return (
    <Section>
      <motion.div {...(enabled ? { variants:stagger(0.1,0.06), initial:"hidden" as const, whileInView:"show" as const, viewport:{ once:true, margin:"-10%" } } : {})} className="grid md:grid-cols-3 gap-6">
        {[
          { value: "+312%", label: "Avg. engagement lift" },
          { value: "6.8x", label: "Median ROAS (content-led)" },
          { value: "120+", label: "Booked calls in 90 days" },
        ].map((s) => (
          <motion.div key={s.label} {...(enabled ? { variants:fadeUp } : {})} className="card">
            <div className="h2">{s.value}</div>
            <p className="p mt-2">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
