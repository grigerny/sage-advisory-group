import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export default function Page() {
  return (
    <>
      <PageHero eyebrow="SAGE Resources" title="Permits, Licenses and Insurance" />
      <section className="section">
        <div className="container narrow">
          <p className="lead">SAGE works with hospitality-focused specialists across licensing, permits, compliance, and insurance. Replace this paraphrase with approved production copy.</p>
        </div>
      </section>
      <CTA />
    </>
  );
}
