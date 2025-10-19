"use client"
import { motion } from 'framer-motion'
import Button from '@/components/Button'
import Reveal from '@/components/Reveal'

export default function CTA() {
  return (
    <section aria-label="Get in touch" className="py-20">
      <div className="container-slim">
        <Reveal>
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-white/5 to-white/[0.02] p-0"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0" style={{ background:
              'radial-gradient(600px 220px at 20% -10%, rgba(245,197,66,0.08), transparent 60%), radial-gradient(600px 220px at 80% -10%, rgba(245,197,66,0.06), transparent 60%)' }} />
            <div className="relative z-10 text-center px-8 py-14">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-glow">Ready To Move Faster?</h2>
              <p className="text-muted mt-2">Book a Quick Discovery Now</p>
              <div className="mt-6 flex justify-center">
                <Button className="px-7 py-3 text-base sm:text-lg" onClick={() => (window.location.href = '/book')}>Book A Quick Discovery Now</Button>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
