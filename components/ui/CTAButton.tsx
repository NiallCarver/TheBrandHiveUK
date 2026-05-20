"use client";
import { motion } from "framer-motion";
import Link from "next/link";

function ArrowIcon({ size = 18 }: { size?: number }){
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M5 12h12M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function CTAButton({ href = "#book", children = "Book a Call", as='link' }: { href?: string; children?: React.ReactNode; as?: 'link'|'button' }) {
  const className = "btn";
  if (as==='button') return <motion.button whileHover={{scale:1.02}} whileTap={{scale:0.98}} className={className}>{children}<ArrowIcon/></motion.button>;
  return <motion.div whileHover={{scale:1.02}} whileTap={{scale:0.98}}><Link href={href} className={className}>{children}<ArrowIcon/></Link></motion.div>;
}
