import { notFound } from "next/navigation";
import { blogPosts } from "@/content/blogs";
import { PageHero } from "@/components/PageHero";

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
      <PageHero
        eyebrow="Pre-Shift Notes and Industry Trends"
        title={post.title}
        body={post.author}
      />
      <article className="section article">
        <div className="container article-body">
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
