import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Features from "@/components/sections/Features";
import Results from "@/components/sections/Results";
import CTA from "@/components/sections/CTA";
import Section from "@/components/ui/Section";

export default function Page(){
  return (
    <>
      <Hero/>
      <TrustedBy/>
      <Features/>
      <Results/>
      <CTA/>
      <Section id="book">
        <div className="card">
          <h3 className="h2">Book a Call</h3>
          <p className="p mt-2">Embed your calendar provider by replacing the iframe src below.</p>
          <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-border">
            <iframe
              src="https://calendly.com/the-brand-hive-uk/discovery-call?hide_landing_page_details=1&background_color=0B0B0F&text_color=FFFFFF&primary_color=F5C542" 
              className="w-full h-full" 
              title="Calendar"
              allow="fullscreen; clipboard-read; clipboard-write"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
