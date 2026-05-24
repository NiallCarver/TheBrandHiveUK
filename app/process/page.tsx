import type { Metadata } from 'next'
import Section from '@/components/Section'
import ProcessDetailed from '@/components/ProcessDetailed'
import CTAButton from '@/components/ui/CTAButton'

export const metadata: Metadata = {
  title: 'Process - Brand Hive UK',
  description: 'Where structure meets storytelling, and every decision is evidence-driven.'
}

export default function ProcessPage() {
  return (
    <div className="space-y-10">
      <ProcessDetailed />
      <div className="flex items-center justify-center pb-16">
        <CTAButton href="/contact">Book a call</CTAButton>
      </div>
    </div>
  )
}
