import Reveal from '@/components/Reveal'

export default function Founder() {
  return (
    <section aria-label="Founder and team" className="py-20">
      <div className="container-slim grid md:grid-cols-3 gap-6 items-start">
        <Reveal>
          <div className="card ui-glow p-6">
            <h3 className="text-lg font-medium">Founder Story</h3>
            <p className="text-sm text-muted mt-2">
              Founded by <strong>Niall Carver</strong>, Brand Hive UK was built after six years of testing and refining what actually drives authority and inbound revenue for global founders.
            </p>
            <p className="text-sm text-muted mt-2">
              Niall established strategies that worked on his own accounts—growing from 0 → 14k followers and $10k revenue in less than three months. From there, he assembled a small team of experts who each manage their own specialist pods under Brand Hive UK.
            </p>
            <p className="text-sm text-muted mt-2">
              Today, we work with some of the largest brands across B2B, SaaS, Tech, Finance, Health & Wellness, Entertainment, and PR‑driven categories.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="card ui-glow p-6">
            <h3 className="text-lg font-medium">Team</h3>
            <ul className="mt-4 grid grid-cols-3 gap-3 text-center">
              {['Design', 'Build', 'Growth'].map((role) => (
                <li key={role} className="p-4 rounded-lg bg-white/5">
                  <div className="h-10 w-10 rounded-full mx-auto bg-white/10 mb-2" aria-hidden />
                  <div className="text-sm font-medium">{role}</div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card ui-glow p-6">
            <h3 className="text-lg font-medium">Founder Photo</h3>
            <div className="mt-3 aspect-square rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-xs text-muted">Add your photo here</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
