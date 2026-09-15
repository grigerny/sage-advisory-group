import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export default function Page() {
  return (
    <>
      <PageHero eyebrow="SAGE Resources" title="CRM Design & Build" />
      <section className="section">
        <div className="container narrow">
          <p className="lead">Technology partners can design CRM and workflow systems around restaurant ownership, guest information, communication, and operating routines.</p>
        </div>
      </section>
      <CTA />
    </>
  );
}
