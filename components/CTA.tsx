import { site } from "@/content/site";

export function CTA() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow light">Ready to get started?</p>
          <h2>Build more clarity into the way your restaurant runs.</h2>
        </div>
        <a className="button button-light" href={site.contactUrl} target="_blank" rel="noreferrer">
          Schedule an Advisory Call
        </a>
      </div>
    </section>
  );
}
