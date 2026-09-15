import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export default function Page() {
  return (
    <>
      <PageHero eyebrow="SAGE Resources" title="Legal" />
      <section className="section">
        <div className="container narrow">
          <p className="lead">SAGE can connect operators with legal professionals familiar with restaurant entities, contracts, leases, and ongoing obligations. Production legal disclaimers should be reviewed by counsel.</p>
        </div>
      </section>
      <CTA />
    </>
  );
}
