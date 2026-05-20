"use client";
import Section from "@/components/ui/Section";
import LeadForm from "@/components/LeadForm";

export default function Contact(){
  return (
    <Section>
      <h1 className="h1">Contact</h1>
      <p className="p mt-2">Email <a className="underline" href="mailto:info@thebrandhiveuk.com">info@thebrandhiveuk.com</a> or connect below.</p>

      <div className="mt-4 flex items-center gap-4 text-sm">
        <a href="https://x.com/" target="_blank" rel="noreferrer" className="link">X (Twitter)</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="link">LinkedIn</a>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6 items-start">
        <div className="card p-6">
          <h2 className="text-lg font-medium">Message</h2>
          <p className="text-sm text-muted mt-1">Short form, fast reply.</p>
          <div className="mt-4">
            <LeadForm />
          </div>
        </div>
        <div className="card p-4 relative overflow-hidden">
          <h2 className="text-lg font-medium px-2">Book a Call</h2>
          <div className="mt-3 relative rounded-xl border border-border overflow-hidden">
            <div className="absolute right-0 top-0 w-3 h-full z-10 bg-background" aria-hidden />
            <iframe
              src="https://calendly.com/the-brand-hive-uk/discovery-call?hide_landing_page_details=1&background_color=0B0B0F&text_color=FFFFFF&primary_color=F5C542"
              className="w-[calc(100%+12px)] h-[70vh] -mr-3"
              title="Calendar"
              loading="lazy"
              allow="fullscreen; clipboard-read; clipboard-write"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
