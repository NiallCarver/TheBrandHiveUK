import type { Metadata } from 'next'
import Section from '@/components/Section'
import ProcessDetailed from '@/components/ProcessDetailed'

export const metadata: Metadata = {
  title: 'Process — Brand Hive UK',
  description: 'Where structure meets storytelling, and every decision is evidence‑driven.'
}

export default function ProcessPage() {
  return (
    <div className="space-y-10">
      <ProcessDetailed />
    </div>
  )
}
