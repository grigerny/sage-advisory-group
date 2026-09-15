import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { legalPage } from "@/content/site";

export const metadata = {
  title: "Legal",
  description:
    "Legal information, financial administration disclaimer, and legal resource overview for SAGE Advisory Group."
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="SAGE Resources" title="Legal" />
      <section className="section">
        <div className="container article-body">
          <p>{legalPage.intro}</p>
          <h2>{legalPage.financialDisclaimer.title}</h2>
          <p>{legalPage.financialDisclaimer.body}</p>
          <p>{legalPage.closing}</p>
        </div>
      </section>
      <CTA />
    </>
  );
}
