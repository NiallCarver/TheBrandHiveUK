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
  title: "Lead Gen Engines | The Brand Hive UK",
  description: "Conversion-first funnels that move qualified buyers from attention to action with clarity and speed.",
  alternates: { canonical: "/services/lead-gen" },
  openGraph: {
    title: "Lead Gen Engines | The Brand Hive UK",
    description: "Offers, pages, and paths that convert—backed by clear signals.",
    type: "website",
    url: "/services/lead-gen",
  },
  twitter: { card: "summary_large_image", title: "Lead Gen Engines", description: "Offers, pages, and paths that convert—backed by clear signals." },
};

export default function Page(){
  return (
    <>
      <ServiceHero
        title="Lead gen that compounds"
        subhead="Conversion-first funnels that move qualified buyers from attention to action without friction."
      />
      <ServiceBenefits
        items={[
          { title: "Offer architecture", desc: "Clear value props, proof, and risk-reversal tuned to ICP."},
          { title: "Landing systems", desc: "Fast, focused pages that persuade and convert."},
          { title: "Capture & nurture", desc: "Zero-guesswork paths from click to call to close."},
          { title: "Attribution clarity", desc: "Signals that help you double down on what's working."},
        ]}
      />
      <ServiceProcess
        steps={[
          { title: "Offer & ICP", desc: "Tighten ICP, prove value, and align incentives."},
          { title: "Pages & Paths", desc: "Design pages and flows that reduce friction to action."},
          { title: "Signals & Scale", desc: "Instrument for clarity and scale what performs."},
        ]}
      />
      <ServiceDeliverables
        items={[
          "Offer matrix + messaging",
          "Figma wireframes + copy deck",
          "High-performance landing pages",
          "Tracking plan + dashboards",
          "Experiment backlog + cadence",
        ]}
      />
      <ServiceCaseStudy
        title="Pipeline rebuilt in six weeks"
        summary="We refactored offers, rebuilt landing pages, and aligned capture to sales. The pipeline—and close rate—lifted."
        stats={[
          { label: "CPL", value: "-43%" },
          { label: "SQLs", value: "+2.1x" },
          { label: "Close rate", value: "+14%" },
        ]}
      />
      <ServiceCaseStudy
        title="From spray-and-pray to signal-led growth"
        summary="Reworked offers, focused channels, and instrumented for clarity. Budget went further and quality rose across the funnel."
        stats={[
          { label: "CAC", value: "-28%" },
          { label: "MQL->SQL lift", value: "+22 pts" },
          { label: "Revenue (90 days)", value: "+1.6x" },
        ]}
      />
      <ServicePricing
        tiers={[
          { name: "Audit", price: "from £2,500", blurb: "Assess offers, pages, analytics, and pathways.", points: ["Comprehensive review", "Action plan", "Prioritized roadmap"]},
          { name: "Build", price: "from £8,500", blurb: "Design and ship conversion-first pages and flows.", points: ["Copy + design", "Next.js build", "Instrumentation"]},
          { name: "Optimize", price: "from £3,000/mo", blurb: "Ongoing testing and iteration on what matters.", points: ["A/B tests", "Experiment cadence", "Reporting"]},
        ]}
      />
      <ServiceFAQ
        items={[
          { q: "Do you handle ads?", a: "We can collaborate with paid teams; we focus the surfaces that convert." },
          { q: "What tools do you prefer?", a: "Next.js, modern analytics, and lightweight CRM connections—no heavy CMS required." },
          { q: "Can you plug into sales?", a: "Yes. We align capture to qualification and handoff for fewer dropped leads." },
        ]}
      />
      <CTA />
    </>
  );
}

