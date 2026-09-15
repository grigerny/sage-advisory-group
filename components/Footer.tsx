import Link from "next/link";
import { resources, site, solutions } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-wave" aria-hidden="true">S</div>
          <p>
            Restaurant and hospitality advisory built around clarity, structure,
            execution, and measurable progress.
          </p>
        </div>

        <div>
          <h3>SAGE Resources</h3>
          {resources.slice(0, 3).map((item) => (
            <Link key={item.href} href={item.href}>{item.title}</Link>
          ))}
        </div>

        <div>
          <h3>Solutions</h3>
          {solutions.map((item) => (
            <Link key={item.slug} href={`/solutions/detail/${item.slug}/`}>
              {item.title}
            </Link>
          ))}
        </div>

        <div>
          <h3>Quick Links</h3>
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
          <a href={site.contactUrl}>Contact</a>
          <Link href="/legal/">Legal</Link>
          <Link href="/terms-of-service/">Terms & Conditions</Link>
          <Link href="/privacy-policy/">Privacy Policy</Link>
        </div>

        <div>
          <h3>Get in touch</h3>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>

      <div className="container copyright">
        <span>© 2026 The SAGE Advisory Group. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
