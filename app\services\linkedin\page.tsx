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
  title: "LinkedIn Authority | The Brand Hive UK",
  description: "Proof-led narratives and targeted distribution that turn visibility into trust, inbound, and partnerships.",
  alternates: { canonical: "/services/linkedin" },
  openGraph: {
    title: "LinkedIn Authority | The Brand Hive UK",
    description: "Narratives and distribution that attract buyers, partners, and press.",
    type: "website",
    url: "/services/linkedin",
  },
  twitter: { card: "summary_large_image", title: "LinkedIn Authority", description: "Narratives and distribution that attract buyers, partners, and press." },
};

export default function Page(){
  return (
    <>
      <ServiceHero
        title="Authority that attracts on LinkedIn"
        subhead="Proof-led narratives and distribution that turn visibility into trust, inbound, and partnerships."
      />
      <ServiceBenefits
        items={[
          { title: "Executive positioning", desc: "Own a category and communicate it with clarity."},
          { title: "Story systems", desc: "Win hearts and minds with credible, repeatable stories."},
          { title: "Demand paths", desc: "From profile to DM to call—engineered for momentum."},
          { title: "Team enablement", desc: "Guides and templates to scale without dilution."},
        ]}
      />
      <ServiceProcess
        steps={[
          { title: "Narrative & Proof", desc: "Surface credible wins and craft a proof-led story stack."},
          { title: "Formats & Cadence", desc: "Carousels, thought leadership, and POV posts on a steady rhythm."},
          { title: "Distribution & Social", desc: "Comment strategy, partner tagging, and targeted engagement."},
        ]}
      />
      <ServiceDeliverables
        items={[
          "Positioning brief + narrative library",
          "Monthly content calendar + templates",
          "Profile optimization + featured system",
          "Engagement playbook for exec + team",
          "KPI dashboard (signals to pipeline)",
        ]}
      />
      <ServiceCaseStudy
        title="From lurker to industry voice"
        summary="We built a proof-forward narrative, shipped twice-weekly posts, and engaged with relevance. The pipeline and invites followed."
        stats={[
          { label: "Profile views", value: "+380%" },
          { label: "Inbound opportunities", value: "+22" },
          { label: "Win rate", value: "+18%" },
        ]}
      />
      <ServiceCaseStudy
        title="Funding narrative that opened doors"
        summary="Aligned the founder story to the product vision, showcased proof, and amplified with targeted engagement. Investors and senior talent reached out."
        stats={[
          { label: "Investor intros", value: "+15" },
          { label: "Exec connection rate", value: "+2.3x" },
          { label: "Inbound opps", value: "+19" },
        ]}
      />
      <ServicePricing
        tiers={[
          { name: "Advisory", price: "from £1,800/mo", blurb: "C-suite guidance and reviews to scale executive presence.", points: ["Bi-weekly strategy", "Narrative QA", "Metrics tracking"]},
          { name: "Narrative Build", price: "from £7,500", blurb: "Positioning + story systems built and shipped.", points: ["Narrative stack", "30-day content kit", "Engagement plan"]},
          { name: "Done-With-You", price: "from £4,500/mo", blurb: "Shared execution with editorial support.", points: ["Weekly planning", "Draft review", "Enablement for team"]},
        ]}
      />
      <ServiceFAQ
        items={[
          { q: "Do you manage personal profiles?", a: "We can co-create and optimize, keeping your voice intact." },
          { q: "What about company pages?", a: "Company pages support distribution, but exec profiles drive trust and reach." },
          { q: "How do we show ROI?", a: "We track signal quality, profile visits, DM volume, sourced pipeline, and close rate." },
        ]}
      />
      <CTA />
    </>
  );
}

