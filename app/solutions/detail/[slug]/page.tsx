import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { solutions } from "@/content/site";

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export default async function SolutionDetail({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);

  if (!solution) notFound();

  return (
    <>
      <PageHero eyebrow="SAGE Solution" title={solution.pageTitle} />
      <section className="section">
        <div className="container split-grid detail-grid">
          <div className="photo-frame service-placeholder">
            <img src={solution.image} alt={solution.title} />
          </div>
          <div>
            <p className="eyebrow">{solution.title}</p>
            <h2>{solution.pageTitle}</h2>
            <p className="lead">{solution.summary}</p>
            <p>{solution.details}</p>
            <ul className="check-list">
              {solution.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
