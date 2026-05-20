"use client"
import { motion, useReducedMotion } from 'framer-motion'
import { PropsWithChildren } from 'react'

type RevealProps = PropsWithChildren<{
  delay?: number
  className?: string
}>

export default function Reveal({ children, delay = 0.1, className }: RevealProps) {
  const prefersReducedMotion = useReducedMotion()
  if (prefersReducedMotion) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

