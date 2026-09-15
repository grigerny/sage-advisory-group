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
        body="Use only approved testimonials and attribution in the production version."
      />
      <section className="section">
        <div className="container review-grid">
          {reviews.map((review, index) => (
            <blockquote className="review-card" key={index}>
              <p>“{review.quote}”</p>
              <footer>{review.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
