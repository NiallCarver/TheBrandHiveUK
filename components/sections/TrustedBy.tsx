"use client";
import Section from "../ui/Section";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { useMotion } from "@/components/providers/MotionProvider";

export default function TrustedBy(){
  const { enabled } = useMotion();
  const items = Array.from({ length: 6 }, (_, i) => i);
  return (
    <Section>
      <div className="text-center">
        <p className="text-sm uppercase tracking-wider text-muted-foreground">Trusted by</p>
        <motion.div {...(enabled ? { variants:stagger(0.1,0.06), initial:"hidden" as const, whileInView:"show" as const, viewport:{ once:true, margin:"-10%" } } : {})} className="mt-6 grid grid-cols-2 md:grid-cols-6 gap-4 opacity-80">
          {items.map(i => (
            <motion.div key={i} {...(enabled ? { variants:fadeUp } : {})} className="card p-3">
              <div aria-label="Client logo placeholder" className="h-12 md:h-14 flex items-center justify-center text-xs text-muted-foreground">
                Your Logo
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
