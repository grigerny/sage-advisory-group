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
      <PageHero eyebrow={post.date} title={post.title} />
      <article className="section article">
        <div className="container article-body">
          <p className="lead">{post.excerpt}</p>
          {post.body.map((section, index) => (
            <section key={index}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
