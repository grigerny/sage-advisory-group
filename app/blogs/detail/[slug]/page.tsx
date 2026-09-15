import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { blogPosts } from "@/content/blogs";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetail({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blogs", href: "/blogs/" },
              { label: post.title }
            ]}
          />
        </div>
      </div>
      <PageHero
        eyebrow="Pre-Shift Notes and Industry Trends"
        title={post.title}
        body={`By ${post.author} · ${post.date}`}
      />
      <article className="section article">
        <div className="container article-body">
          <p className="article-meta">
            <span>{post.date}</span>
            <span aria-hidden="true">·</span>
            <span>{post.author}</span>
          </p>
          <div className="article-image">
            <img src={post.image} alt={post.title} />
          </div>
          {post.body.map((section, index) => (
            <section key={index}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
