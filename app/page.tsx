import Link from "next/link";
import { CTA } from "@/components/CTA";
import { SectionHeading } from "@/components/SectionHeading";
import { SolutionGrid } from "@/components/SolutionGrid";
import { blogPosts } from "@/content/blogs";
import { home, images, site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${images.heroHome})` }}
      >
        <div className="hero-overlay" />
        <img
          className="hero-brand-mark"
          src={images.heroLogo}
          alt=""
          aria-hidden="true"
          width={163}
          height={63}
        />
        <div className="container hero-content">
          <p className="eyebrow light">{home.hero.eyebrow}</p>
          <h1>{home.hero.title}</h1>
          <p>{home.hero.body}</p>
          <div className="hero-actions">
            <a className="button" href={site.contactUrl}>{home.hero.primaryCta}</a>
            <Link className="button button-outline" href="/solutions/">
              {home.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div className="container split-grid">
          <div className="photo-frame">
            <img src={images.aboutKitchen} alt="Restaurant team in the kitchen" />
          </div>
          <div>
            <SectionHeading
              eyebrow={home.about.kicker}
              title={home.about.title}
            />
            {home.about.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <Link className="text-link" href="/about-us/">Read More <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading title="How We Deliver Results" center />
          <SolutionGrid />
        </div>
      </section>

      <section
        className="investment-band"
        style={{ backgroundImage: `url(${images.partnerBg})` }}
      >
        <div className="investment-overlay" />
        <div className="container investment-content">
          <p className="eyebrow light">{home.investment.eyebrow}</p>
          <h2>{home.investment.title}</h2>
          <p>{home.investment.body}</p>
          <div className="hero-actions">
            <a className="button button-light" href={site.contactUrl}>Contact Us</a>
            <a className="button button-outline-light" href={site.contactUrl}>
              Schedule a Free Advisory Call
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container why-grid">
          <div>
            <SectionHeading eyebrow={home.why.eyebrow} title={home.why.title} body={home.why.body} />
            <Link className="text-link" href="/about-us/">Learn More <span>→</span></Link>
          </div>
          <div className="why-visual">
            <div className="photo-frame plates-placeholder">
              <img src={images.whyFood} alt="Plated hospitality dishes" />
            </div>
            <div className="photo-frame pos-placeholder">
              <img src={images.whyPos} alt="Restaurant point of sale system" />
            </div>
          </div>
        </div>
        <div className="container stats-grid">
          {home.why.features.map((feature) => (
            <div className="stat" key={feature}><strong>{feature}</strong></div>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeading
            eyebrow="Testimonials"
            title="Real Stories from the Field"
            body="Hospitality is built on partnership. Use this section for approved client feedback and proof."
          />
          <div className="quote-card">
            <p>“Approved testimonial content can live here.”</p>
            <strong>SAGE Client</strong>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Pre-Shift Notes and Industry Trends"
            title="Insights from the Restaurant Industry"
            body="Questions, operating challenges, and practical ideas from the field."
          />
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article className="blog-card" key={post.slug}>
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <p className="eyebrow">{post.date}</p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link className="text-link" href={`/blogs/detail/${post.slug}/`}>
                  Read Article <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
