import { PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  id?: string
  title?: string
  subtitle?: string
}>

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-title` : undefined} className="py-14 sm:py-16">
      <div className="container-slim">
        {title && (
          <div className="mb-8">
            <h2 id={id ? `${id}-title` : undefined} className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
            {subtitle && <p className="text-muted mt-2 max-w-2xl">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

