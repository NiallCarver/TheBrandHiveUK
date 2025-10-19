import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";

type Svc = { href: string; title: string; goal: string; clients: number; popular?: boolean };

const services: Svc[] = [
  { href: "/services/x", title: "X (Twitter) Management", goal: "Industry leadership and revenue growth", clients: 47, popular: true },
  { href: "/services/linkedin", title: "LinkedIn Authority Growth", goal: "Category credibility and pipeline", clients: 33, popular: true },
  { href: "/services/lead-gen", title: "Lead Generation", goal: "Qualified pipeline and booked calls", clients: 38, popular: true },
  { href: "/services/pr", title: "PR", goal: "Consistent earned media and trust", clients: 21 },
  { href: "/services/paid-ads", title: "Paid Advertising", goal: "Targeted amplification of winning narratives", clients: 18 },
  { href: "/services/web-app-dev", title: "Web & App Design", goal: "Premium surfaces that convert", clients: 12 },
];

export default function ServicesIndex(){
  return (
    <>
      <Section className="pt-28">
        <h1 className="h1">Services</h1>
        <p className="p mt-3 max-w-2xl">Every service is Done‑For‑You and run by specialists. Please book a call to learn more (including pricing).</p>
      </Section>
      <Section>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="card hover:shadow-brand transition-all block">
              <div className="flex items-center justify-between text-xs text-muted">
                <span>{s.popular ? "Popular" : "Comprehensive"}</span>
                <span>Worked with {s.clients}+ clients</span>
              </div>
              <h3 className="h3 mt-1">{s.title}</h3>
              <p className="p mt-2">Goal: {s.goal}</p>
              <p className="mt-4 text-sm underline decoration-transparent underline-offset-4 hover:decoration-primary">View service →</p>
            </Link>
          ))}
        </div>
        <p className="text-xs text-muted mt-6">Note: Twitter (X) management and Lead Generation are our most in‑demand services by client count.</p>
      </Section>
    </>
  );
}

export const metadata: Metadata = {
  title: "Services | The Brand Hive UK",
  description: "Done-for-you authority systems across X (Twitter), LinkedIn, Lead Generation, PR, Paid Ads, and Web/App Design.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | The Brand Hive UK",
    description: "X, LinkedIn, Lead Gen, PR, Paid Ads, and Web/App services engineered for outcomes.",
    type: "website",
    url: "/services",
  },
  twitter: { card: "summary_large_image", title: "Services", description: "X, LinkedIn, Lead Gen, PR, Paid Ads, and Web/App services engineered for outcomes." },
};
