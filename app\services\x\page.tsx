import type { Metadata } from "next";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceBenefits from "@/components/sections/ServiceBenefits";
import ServiceProcess from "@/components/sections/ServiceProcess";
import ServiceDeliverables from "@/components/sections/ServiceDeliverables";
import ServiceCaseStudy from "@/components/sections/ServiceCaseStudy";
import ServicePricing from "@/components/sections/ServicePricing";
import ServiceFAQ from "@/components/sections/ServiceFAQ";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "X Growth Systems | The Brand Hive UK",
  description: "Outcome-focused growth on X: positioning, systemized content, and distribution engineered for compounding reach, trust, and booked calls.",
  alternates: { canonical: "/services/x" },
  openGraph: {
    title: "X Growth Systems | The Brand Hive UK",
    description: "Positioning, content, and distribution for compounding growth on X.",
    type: "website",
    url: "/services/x",
  },
  twitter: { card: "summary_large_image", title: "X Growth Systems", description: "Positioning, content, and distribution for compounding growth on X." },
};

export default function Page(){
  return (
    <>
      <ServiceHero
        title="Outcome-focused growth on X"
        subhead="Strategy, content, and distribution engineered for compounding reach, trust, and booked calls."
      />
      <ServiceBenefits
        items={[
          { title: "Positioning that sticks", desc: "Crystal-clear market POV that earns attention and affinity."},
          { title: "Systemized content", desc: "Pillars, formats, and cadences tuned for signal over noise."},
          { title: "Distribution flywheels", desc: "Workflows to spark conversations, not just impressions."},
          { title: "Conversion paths", desc: "Profiles and pins that move buyers to next steps."},
        ]}
      />
      <ServiceProcess
        steps={[
          { title: "Discovery & POV", desc: "Deep-dive on ICP, category, and narrative. Establish your market stance."},
          { title: "Engine & Cadence", desc: "Define pillars, formats, and weekly rhythm. Build the content system."},
          { title: "Distribution & Review", desc: "Engagement playbook, signal tracking, and iteration for compounding reach."},
        ]}
      />
      <ServiceDeliverables
        items={[
          "Positioning brief + content pillars",
          "30/60/90-day content roadmap",
          "Profile optimization + pinned post system",
          "Distribution playbook + engagement workflows",
          "Weekly review + iteration notes",
        ]}
      />
      <ServiceCaseStudy
        title="From zero to booked-out in 90 days"
        summary="We rebuilt positioning, implemented a content engine, and orchestrated distribution. The result: sustained growth and a pipeline that closed."
        stats={[
          { label: "Audience growth", value: "+210%" },
          { label: "Avg. engagement", value: "+3.2x" },
          { label: "Booked calls", value: "45" },
        ]}
      />
      <ServiceCaseStudy
        title="Category breakout in 12 weeks"
        summary="Launched a sharp POV, shipped weekly threads, and hosted Spaces with partners. Mentions climbed and inbound accelerated."
        stats={[
          { label: "Brand mentions", value: "+3.1x" },
          { label: "Avg. thread reach", value: "+2.4x" },
          { label: "Inbound trials", value: "+36" },
        ]}
      />
      <ServicePricing
        tiers={[
          { name: "Advisory", price: "from £1,500/mo", blurb: "Guidance, reviews, and systems to scale your output.", points: ["Bi-weekly strategy calls", "Editorial review", "Metrics tracking"]},
          { name: "Engine Build", price: "from £6,000", blurb: "End-to-end build of your X content system.", points: ["Positioning + pillars", "30-day content pack", "Distribution playbook"]},
          { name: "Done-With-You", price: "from £3,500/mo", blurb: "Shared execution with tight feedback loops.", points: ["Weekly planning", "Drafting support", "Signal-led iteration"]},
        ]}
      />
      <ServiceFAQ
        items={[
          { q: "How quickly do we see lift?", a: "Most see signal changes within 2–4 weeks and compounding growth by 8–12 weeks." },
          { q: "Do you ghostwrite?", a: "We prioritize authenticity. We can draft with your voice or coach you to ship at quality." },
          { q: "How is success measured?", a: "Signal quality (replies, saves), profile visits, DM velocity, and booked calls—not just impressions." },
        ]}
      />
      <CTA />
    </>
  );
}

