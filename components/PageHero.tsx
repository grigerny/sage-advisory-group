type PageHeroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
};

export function PageHero({ eyebrow, title, body }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        {eyebrow && <p className="eyebrow light">{eyebrow}</p>}
        <h1>{title}</h1>
        {body && <p>{body}</p>}
      </div>
    </section>
  );
}
