import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Reveal from "@/components/Reveal";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "About - Brand Hive UK",
  description:
    "Brand Hive UK builds authority systems for founders and executives across X, LinkedIn, and PR. Strategy, narrative, and execution from a focused team of specialists.",
};

export default function About() {
  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <h1 className="h1">About Brand Hive UK</h1>
          <p className="p mt-4">
            We build authority systems for founders and executives across X, LinkedIn,
            and PR. We turn credibility into commercial outcomes.
          </p>
          <p className="p mt-4">
            We are a small, focused agency. No mass-production content,
            no vanity dashboards. Every engagement is run by a senior operator who
            takes accountability for the work and the results.
          </p>
        </div>
      </Section>

      <section className="py-12">
        <div className="container-slim grid md:grid-cols-2 gap-6 items-start">
          <Reveal>
            <div className="card ui-glow p-6 h-full">
              <h2 className="text-xl font-medium">What we do</h2>
              <p className="text-sm text-muted mt-3">
                We design and run authority systems that move attention into
                revenue. The system covers four layers:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted list-disc pl-5">
                <li>Research and positioning that isolates whitespace</li>
                <li>Narrative architecture and a voice that reads like leadership</li>
                <li>Channel execution across X, LinkedIn, and PR</li>
                <li>Conversion paths that turn signal into booked calls</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="card ui-glow p-6 h-full">
              <h2 className="text-xl font-medium">How we work</h2>
              <p className="text-sm text-muted mt-3">
                Brand Hive UK is a done-for-you service. Every engagement is
                handled manually by senior specialists, not templated by software.
                We start with a deep research and strategy sprint, then move into
                weekly publishing, distribution, and review cycles tuned to your
                category.
              </p>
              <p className="text-sm text-muted mt-3">
                We measure what predicts revenue, not what flatters dashboards:
                reply quality, saves, profile intent, qualified DMs, press
                momentum, and booked calls. Reporting is plain English, with what
                we learned and what we will do next.
              </p>
              <p className="text-sm text-muted mt-3">
                The result is an autonomous strategy, content, and client
                acquisition ecosystem that keeps producing whether you are in
                the room or not. Built for founders and executives in B2B tech,
                finance, SaaS, health and wellness, and entertainment.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="container-slim">
          <Reveal>
            <div className="card ui-glow p-6 sm:p-8">
              <h2 className="text-xl font-medium">Founder</h2>
              <div className="mt-4 grid md:grid-cols-5 gap-6 lg:gap-10 items-start">
                <div className="md:col-span-3 space-y-3 text-sm text-muted">
                  <p>
                    Brand Hive UK was founded by <strong className="text-foreground">Niall Carver</strong>,
                    a founder-operator who spent six years inside the trenches
                    of social, PR, and lead generation, working out what actually
                    moves attention into revenue rather than what looks impressive
                    in a deck.
                  </p>
                  <p>
                    The work started solo. Niall built the system on his own
                    accounts first, growing from zero to <strong className="text-foreground">14,000 followers</strong>{" "}
                    and over <strong className="text-foreground">$10,000 in revenue in under three months</strong>{" "}
                    as proof that authority can be engineered, not waited for. That
                    early case study became the blueprint for everything Brand Hive UK
                    does today.
                  </p>
                  <p>
                    From that foundation, Niall assembled a small, hand-picked
                    team of senior specialists across X, LinkedIn, PR, lead
                    generation, and creative. We operate as one cohesive unit,
                    not separate departments. Every client engagement is run
                    end-to-end by people who own the outcome, with Niall in the
                    detail.
                  </p>
                  <p>
                    Today, Brand Hive UK designs and operates autonomous strategy,
                    content, and client acquisition ecosystems for founders and
                    executives in B2B tech, finance, SaaS, health and wellness,
                    and entertainment. Done-for-you, built for compounding, and
                    accountable to revenue.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div className="relative aspect-[4/5] max-w-xs ml-auto">
                    {/* Primary portrait */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(245,197,66,0.08)]">
                      <img
                        src="/people/niall-1.png"
                        alt="Niall Carver, founder of Brand Hive UK"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    {/* Secondary candid, offset bottom-left */}
                    <div className="absolute -bottom-6 -left-6 w-2/5 aspect-square rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] rotate-[-4deg]">
                      <img
                        src="/people/niall-2.webp"
                        alt="Niall Carver"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container-slim">
          <Reveal>
            <div className="card ui-glow p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Ready to build authority that converts?
              </h2>
              <p className="text-sm text-muted mt-3 max-w-xl mx-auto">
                If your category is competitive and the message has to be
                precise, book a call and we will walk through the system.
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <CTAButton href="/contact">Book a call</CTAButton>
                <a href="/services" className="link">See services</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
