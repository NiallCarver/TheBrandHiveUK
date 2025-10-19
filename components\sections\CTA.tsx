"use client";
import Section from "../ui/Section";
import CTAButton from "../ui/CTAButton";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { useMotion } from "@/components/providers/MotionProvider";

export default function CTA(){
  const { enabled } = useMotion();
  return (
    <Section>
      <motion.div {...(enabled ? { variants:stagger(0.1,0.06), initial:"hidden" as const, whileInView:"show" as const, viewport:{ once:true, margin:"-10%" } } : {})} className="card text-center">
        <motion.h3 {...(enabled ? { variants:fadeUp } : {})} className="h2">Ready to build authority?</motion.h3>
        <motion.p {...(enabled ? { variants:fadeUp } : {})} className="p mt-2">Let’s map your growth plan across X & LinkedIn.</motion.p>
        <motion.div {...(enabled ? { variants:fadeUp } : {})} className="mt-6"><CTAButton href="#book" /></motion.div>
      </motion.div>
    </Section>
  );
}
