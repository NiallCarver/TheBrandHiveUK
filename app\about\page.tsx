import Section from "@/components/ui/Section";
import Founder from "@/components/Founder";

export default function About(){
  return (
    <>
      <Section>
        <h1 className="h1">About Brand Hive UK</h1>
        <p className="p mt-4 max-w-2xl">We build authority systems for founders and executives across X, LinkedIn, and PR—turning credibility into commercial outcomes.</p>
      </Section>
      <Founder/>
    </>
  );
}
