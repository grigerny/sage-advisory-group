import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export default function Page() {
  return (
    <>
      <PageHero eyebrow="SAGE Resources" title="Human Capital Mgt Resources" />
      <section className="section">
        <div className="container narrow">
          <p className="lead">People-operations support can include HR systems, recruiting, onboarding, compliance, workforce management, compensation, and benefits.</p>
        </div>
      </section>
      <CTA />
    </>
  );
}
