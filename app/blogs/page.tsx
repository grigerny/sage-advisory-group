import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { blogPosts } from "@/content/blogs";

export const metadata = {
  title: "Restaurant Business Insights & Tips",
  description: "Restaurant operations, leadership, financial management, and hospitality insights."
};

export default function BlogsPage() {
  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blogs" }
            ]}
          />
        </div>
      </div>
      <PageHero
        eyebrow="Pre-Shift Notes"
        title="Industry Trends & Restaurant Insights"
        body="Thoughts from the field on operating restaurants with more clarity, structure, and consistency."
      />
      <section className="section">
        <div className="container blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <Link className="blog-image" href={`/blogs/detail/${post.slug}/`}>
                <img src={post.image} alt={post.title} />
              </Link>
              <p className="blog-meta">
                <span className="eyebrow">{post.date}</span>
                <span className="blog-author">{post.author}</span>
              </p>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Link className="text-link" href={`/blogs/detail/${post.slug}/`}>
                Read Article <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
