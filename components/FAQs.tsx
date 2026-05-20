export default function FAQs() {
  const faqs = [
    {
      q: 'What makes your process different from other agencies?',
      a: "We don't guess; we systemize creativity. Every engagement begins in Amplifyr, our proprietary intelligence layer that builds a detailed onboarding blueprint (strategy, ICP, voice architecture, positioning, and creative direction). From that foundation, our specialists ship high‑impact, conversion‑ready content and campaigns. This system has been proven across our client portfolio since August 1, 2025.",
    },
    {
      q: 'Are you a full-service shop or specialists?',
      a: 'We specialize in X (Twitter), LinkedIn, Lead Generation, and PR. Our CEO spent six years hand‑selecting elite platform specialists for every function, so each process is dialed to a world‑class standard. As a result, Brand Hive UK is routinely cited as a benchmark for modern marketing firms.',
    },
    {
      q: 'What industries do you serve best?',
      a: 'Technology, finance, insurance, and professional services—categories where credibility, compliance, and message precision directly impact revenue. Our frameworks adapt seamlessly to adjacent B2B markets.',
    },
    {
      q: 'How do you capture my brand voice accurately?',
      a: 'Amplifyr maps your communication DNA via our Strategic Messaging Bridge and Archetype Matrix. We ingest approved past content, interviews, and leadership notes to model phrasing, rhythm, and stance—then our editors refine until it reads unmistakably like you.',
    },
    {
      q: 'What happens after I sign?',
      a: 'Onboarding flows through Amplifyr (strategy, ICP, voice architecture) → campaign roadmap and editorial plan → first deliverables (hooks, posts, PR angles, offers) → rapid iteration based on early signal data. You see progress in a transparent dashboard with clear milestones.',
    },
    {
      q: 'How do you ensure originality (and avoid the “AI feel”)?',
      a: 'We run structural and cadence checks to remove symmetry and templated phrasing, then apply a Human Rewrite Standard: an editor restores natural rhythm, specificity, and narrative intent. Nothing ships without human direction and director‑level sign‑off.',
    },
    {
      q: 'What outcomes should we expect in the first 90 days?',
      a: 'Early engagement lift (weeks 2–4), clearer positioning and authority signals (weeks 4–8), and compounding inbound (weeks 8–12). Leading indicators include higher save rates, replies, profile visits, qualified DMs, and booked calls.',
    },
    {
      q: 'Do you work across LinkedIn and X simultaneously?',
      a: 'Yes. We write natively to each platform’s pace, character economy, and discovery mechanics. Hooks, proof order, and CTA styles are tuned per channel to maximize reach and response.',
    },
    {
      q: 'How do you generate qualified pipeline, not just impressions?',
      a: 'We align content pillars (Growth, Authority, Personal) to specific conversion paths: credibility assets, social proof, offer sequencing, PR placements, and DM frameworks. We track engagement velocity → response quality → call bookings, then tighten the loop monthly.',
    },
    {
      q: 'What metrics do you track and report on?',
      a: 'Channel‑level: impressions, saves, replies, shares, profile clicks. Business‑level: qualified replies/DMs, booked calls, press hits, and deal influence. We highlight narrative learnings (what moved people)—not just vanity counts.',
    },
    {
      q: 'How do revisions and collaboration work?',
      a: 'Feedback is structured (voice, stance, proof hierarchy, sensitivity notes). We iterate quickly within a defined cadence, and your leadership can drop voice notes or examples anytime; the system adapts immediately.',
    },
    {
      q: 'How do you handle data privacy and compliance?',
      a: "Each client runs in an isolated, encrypted environment. We're GDPR/CCPA compliant, never train public models on private data, and honor clear retention/deletion policies.",
    },
    {
      q: 'Can you integrate with our internal team or existing agency?',
      a: 'Seamlessly. Think of Brand Hive UK as your strategic backbone and quality‑control layer: we provide the voice system, editorial standards, and conversion logic your team executes against—or we execute end‑to‑end.',
    },
    {
      q: 'Do you offer white‑label or partnership programs?',
      a: 'Yes. Vetted partners can license our frameworks under NDA, with governance, editorial training, and compliance standards to protect brand integrity.',
    },
  ]
  return (
    <section id="faqs" aria-labelledby="faqs-title" className="py-20">
      <div className="container-slim">
        <h2 id="faqs-title" className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">FAQs</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((f) => (
            <details key={f.q} className="card ui-glow p-5">
              <summary className="marker:content-none cursor-pointer list-none flex items-center justify-between">
                <span className="font-medium">{f.q}</span>
                <span className="text-muted">+</span>
              </summary>
              <p className="text-sm text-muted mt-3">{f.a}</p>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: faqs.map((q) => ({
                      '@type': 'Question',
                      name: q.q,
                      acceptedAnswer: { '@type': 'Answer', text: q.a },
                    })),
                  }),
                }}
              />
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
