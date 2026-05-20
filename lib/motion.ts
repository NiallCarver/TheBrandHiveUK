"use client";
import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 14 } },
};

export const stagger = (delay=0.1, interval=0.06): Variants => ({
  show: { transition: { staggerChildren: interval, delayChildren: delay } }
});
