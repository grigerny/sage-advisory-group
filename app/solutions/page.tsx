import { CTA } from "@/components/CTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SolutionGrid } from "@/components/SolutionGrid";
import { resources } from "@/content/site";
import Link from "next/link";

export const metadata = {
  title: "Restaurant Consulting Services",
  description: "Financial, operational, project management, and owner advisory solutions for restaurants."
};

export default function SolutionsPage() {
  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Solutions" }
            ]}
          />
        </div>
      </div>
      <PageHero
        eyebrow="Solutions"
        title="How We Deliver Results"
        body="Practical systems and hands-on advisory tailored to the way the restaurant actually operates."
      />
      <section className="section">
        <div className="container">
          <SolutionGrid />
        </div>
      </section>
      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="SAGE Resources"
            title="Specialists for the parts of restaurant ownership that need trusted support"
          />
          <div className="resource-grid">
            {resources.map((resource) => (
              <Link className="resource-card" href={resource.href} key={resource.href}>
                <h3>{resource.title}</h3>
                <p>{resource.body}</p>
                <span>Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
