import Link from "next/link";
import { site } from "@/content/site";

export function CTA() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow light">Ready to get started?</p>
          <h2>Build more clarity into the way your restaurant runs.</h2>
        </div>
        <Link className="button button-light" href={site.contactUrl}>
          Schedule an Advisory Call
        </Link>
      </div>
    </section>
  );
}
