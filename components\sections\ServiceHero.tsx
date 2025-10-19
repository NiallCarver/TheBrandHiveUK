"use client";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import { fadeUp, stagger } from "@/lib/motion";
import { useMotion } from "@/components/providers/MotionProvider";

export default function ServiceHero({ title, subhead }: { title: string; subhead: string }){
  const { enabled } = useMotion();
  return (
    <Section className="pt-28">
      <div className="relative overflow-hidden rounded-2xl border border-border">
        <motion.div {...(enabled ? { initial:{opacity:0}, animate:{opacity:1}, transition:{duration:1.0} } : {})} className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(900px 300px at 20% -10%, rgba(245,197,66,.16), transparent 60%), radial-gradient(700px 250px at 80% -10%, rgba(255,211,77,.12), transparent 60%)"}}/>
        <div className="relative z-10 p-10 md:p-16">
          <motion.div {...(enabled ? { variants:stagger(0.1,0.06), initial:"hidden" as const, animate:"show" as const } : {})} className="max-w-3xl">
            <motion.h1 {...(enabled ? { variants:fadeUp } : {})} className="h1">{title}</motion.h1>
            <motion.p {...(enabled ? { variants:fadeUp } : {})} className="p mt-6">{subhead}</motion.p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
