import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { reviews } from "@/content/site";

export const metadata = {
  title: "Client Reviews",
  description: "Client feedback and hospitality advisory outcomes."
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Reviews"
        title="What Our Clients Say"
        body="Client stories will appear here once approved testimonials are ready."
      />
      <section className="section">
        <div className="container review-grid">
          {reviews.length === 0 ? (
            <p className="lead">Reviews are coming soon.</p>
          ) : (
            reviews.map((review, index) => (
              <blockquote className="review-card" key={index}>
                <p>“{review.quote}”</p>
                <footer>{review.name}</footer>
              </blockquote>
            ))
          )}
        </div>
      </section>
      <CTA />
    </>
  );
}
