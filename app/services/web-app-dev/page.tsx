import type { Metadata } from "next";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceBenefits from "@/components/sections/ServiceBenefits";
import ServiceProcess from "@/components/sections/ServiceProcess";
import ServiceDeliverables from "@/components/sections/ServiceDeliverables";
import ServiceCaseStudy from "@/components/sections/ServiceCaseStudy";
import ServiceFAQ from "@/components/sections/ServiceFAQ";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Web & App | The Brand Hive UK",
  description: "Sleek, performant, and accessible surfaces that tell your story and drive action.",
  alternates: { canonical: "/services/web-app-dev" },
  openGraph: {
    title: "Web & App | The Brand Hive UK",
    description: "Design systems, performance, and conversion flows that drive growth.",
    type: "website",
    url: "/services/web-app-dev",
  },
  twitter: { card: "summary_large_image", title: "Web & App", description: "Design systems, performance, and conversion flows that drive growth." },
};

export default function Page(){
  return (
    <>
      <ServiceHero
        title="Web & app experiences that convert"
        subhead="Sleek, performant, and accessible surfaces that tell your story and drive action."
      />
      <ServiceBenefits
        items={[
          { title: "Design systems", desc: "Cohesive tokens, components, and patterns for speed and quality."},
          { title: "Performance-first", desc: "Ship fast experiences that feel premium and effortless."},
          { title: "Conversion flows", desc: "From homepage to signup to success. No dead ends."},
          { title: "A11y by default", desc: "Clear contrast, logical hierarchy, keyboard friendly."},
        ]}
      />
      <ServiceProcess
        steps={[
          { title: "Audit & Goals", desc: "Map jobs-to-be-done, success metrics, and constraints."},
          { title: "System & Surfaces", desc: "Define tokens, components, and critical flows."},
          { title: "Build & Hardening", desc: "Ship, test, and optimize for performance and a11y."},
        ]}
      />
      <ServiceDeliverables
        items={[
          "Design tokens + Tailwind map",
          "Component library + docs",
          "Key flows (home, product, signup)",
          "Perf + a11y reports",
          "Deployment playbook",
        ]}
      />
      <ServiceCaseStudy
        title="From brochureware to growth surface"
        summary="We re-platformed to a modern stack, improved clarity, and streamlined flows. The site started pulling real weight."
        stats={[
          { label: "Conversion rate", value: "+38%" },
          { label: "Speed index", value: "-32%" },
          { label: "Bounce rate", value: "-18%" },
        ]}
      />
      <ServiceCaseStudy
        title="Replatformed and re-architected for speed"
        summary="Moved to Next.js with a lean design system and optimized for performance and a11y. Experience felt premium, and faster."
        stats={[
          { label: "Time to interactive", value: "-40%" },
          { label: "Pages/session", value: "+22%" },
          { label: "Signups", value: "+31%" },
        ]}
      />
      <ServiceFAQ
        items={[
          { q: "Do you use a CMS?", a: "Only when needed. Simple sites run faster and are easier to maintain without one." },
          { q: "Do you handle hosting?", a: "We provide a Docker-ready build. Coolify or Vercel are both supported." },
          { q: "Can you integrate analytics?", a: "Yes, privacy-friendly analytics with actionable dashboards." },
        ]}
      />
      <CTA />
    </>
  );
}

