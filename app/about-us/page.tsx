import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { founder, home, images } from "@/content/site";

export const metadata = {
  title: "About SAGE Advisory Group",
  description: "Learn about SAGE's restaurant and hospitality advisory approach."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SAGE"
        title="The SAGE Approach"
        body="Restaurant advisory grounded in hands-on operating experience, practical systems, and partnership."
      />

      <section className="section">
        <div className="container narrow">
          <SectionHeading
            title="Clarity, visibility, and operating structure"
            body="The engagement begins with the restaurant as it actually exists: the concept, team, numbers, operating routines, and pressure points."
          />
          <p>
            This rebuild keeps the page architecture of the current site while placing the client's
            approved long-form copy in a content layer that is easier for an AI agent to edit safely.
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading eyebrow={home.why.eyebrow} title={home.why.title} body={home.why.body} />
          <div className="stats-grid">
            {home.why.features.map((feature) => (
              <div className="stat" key={feature}><strong>{feature}</strong></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">SAGE's Mission</p>
            <h2>Built from a career inside hospitality</h2>
            <p>
              Replace this section with the client-approved mission statement from the source material.
            </p>
          </div>
          <div className="photo-frame mission-placeholder">
            <img src={images.mission} alt="SAGE mission hospitality setting" />
          </div>
        </div>
      </section>

      <section className="section founder-section">
        <div className="container split-grid">
          <div className="photo-frame founder-placeholder">
            <img
              src={images.founder}
              alt={`${founder.name}, ${founder.role}`}
            />
          </div>
          <div>
            <p className="eyebrow">Meet the Founder</p>
            <h2>{founder.name}</h2>
            <h3>{founder.role}</h3>
            <p>{founder.intro}</p>
            {founder.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
