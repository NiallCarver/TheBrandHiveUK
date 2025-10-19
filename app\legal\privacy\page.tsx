import Section from '@/components/Section'

export default function PrivacyPage(){
  return (
    <Section>
      <h1 className="h1">Privacy Policy</h1>
      <div className="prose prose-invert mt-4 max-w-none">
        <p>Last updated: 1 June 2025</p>
        <p>We respect your privacy. We collect minimal personal data required to respond to inquiries and deliver services. We do not sell personal data.</p>
        <h3>Data We Collect</h3>
        <p>Contact details, project information, and communication records that you provide to us.</p>
        <h3>How We Use Data</h3>
        <p>To provide services, respond to requests, and improve our offerings.</p>
        <h3>Your Rights</h3>
        <p>You may request access, correction, or deletion of your data by emailing <a href="mailto:info@thebrandhiveuk.com">info@thebrandhiveuk.com</a>.</p>
      </div>
    </Section>
  )
}

