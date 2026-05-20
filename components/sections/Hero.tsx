"use client";
import { motion } from "framer-motion";
import CTAButton from "../ui/CTAButton";
import Section from "../ui/Section";
import { fadeUp, stagger } from "@/lib/motion";
import { useMotion } from "@/components/providers/MotionProvider";

export default function Hero(){
  const { enabled } = useMotion();
  return (
    <Section className="pt-28">
      <div className="relative overflow-hidden rounded-2xl border border-border">
        <motion.div {...(enabled ? { initial:{opacity:0}, animate:{opacity:1}, transition:{duration:1.2} } : {})} className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(1200px 400px at 20% -10%, rgba(245,197,66,.10), transparent 60%), radial-gradient(800px 300px at 80% -10%, rgba(255,211,77,.08), transparent 60%)"}}/>
        <div className="relative z-10 p-10 md:p-16">
          <motion.div {...(enabled ? { variants:stagger(0.1,0.06), initial:"hidden" as const, animate:"show" as const } : {})} className="max-w-3xl">
            <motion.h1 {...(enabled ? { variants:fadeUp } : {})} className="h1">We position founders as industry leaders and turn attention into revenue.</motion.h1>
            <motion.p {...(enabled ? { variants:fadeUp } : {})} className="p mt-6">Modern, premium, and tech-forward brand building across X & LinkedIn—engineered for reach, trust, and booked calls.</motion.p>
            <motion.div {...(enabled ? { variants:fadeUp } : {})} className="mt-8 flex items-center gap-4">
              <CTAButton href="#book">Book a Call</CTAButton>
              <a className="link" href="#services">Explore Services</a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
