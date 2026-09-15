import Link from "next/link";
import { images, resources, site, solutions } from "@/content/site";

const socialLinks = [
  {
    label: "Facebook",
    href: site.socials.facebook,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M14.5 8.5V6.8c0-.7.5-1.3 1.2-1.3H17V3h-2.1C12.3 3 11 4.5 11 6.7v1.8H9v2.7h2V21h3.5v-9.8h2.3l.5-2.7h-2.8z" />
      </svg>
    )
  },
  {
    label: "Instagram",
    href: site.socials.instagram,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 7.4A4.6 4.6 0 1 0 16.6 12 4.6 4.6 0 0 0 12 7.4zm0 7.6A3 3 0 1 1 15 12a3 3 0 0 1-3 3zm5.9-8.9a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1zM12 3.5c-2.3 0-2.6 0-3.5.1a5.2 5.2 0 0 0-3.4 1.4A5.2 5.2 0 0 0 3.6 8.5C3.5 9.4 3.5 9.7 3.5 12s0 2.6.1 3.5a5.2 5.2 0 0 0 1.4 3.4 5.2 5.2 0 0 0 3.4 1.4c.9.1 1.2.1 3.5.1s2.6 0 3.5-.1a5.2 5.2 0 0 0 3.4-1.4 5.2 5.2 0 0 0 1.4-3.4c.1-.9.1-1.2.1-3.5s0-2.6-.1-3.5a5.2 5.2 0 0 0-1.4-3.4A5.2 5.2 0 0 0 15.5 3.6C14.6 3.5 14.3 3.5 12 3.5zm0 1.6c2.3 0 2.5 0 3.4.1a3.6 3.6 0 0 1 2.4 2.4c.1.9.1 1.1.1 3.4s0 2.5-.1 3.4a3.6 3.6 0 0 1-2.4 2.4c-.9.1-1.1.1-3.4.1s-2.5 0-3.4-.1a3.6 3.6 0 0 1-2.4-2.4c-.1-.9-.1-1.1-.1-3.4s0-2.5.1-3.4a3.6 3.6 0 0 1 2.4-2.4c.9-.1 1.1-.1 3.4-.1z" />
      </svg>
    )
  },
  {
    label: "LinkedIn",
    href: site.socials.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M6.4 9.2H3.7V20h2.7zm.2-3.1a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0zM20.3 13c0-3-1.6-4.4-3.8-4.4a3.3 3.3 0 0 0-3 1.6V9.2h-2.7c0 .9 0 10.8 0 10.8h2.7v-6c0-.3 0-.6.1-.8a2.2 2.2 0 0 1 2.1-1.5c1.5 0 2.1 1.1 2.1 2.8V20h2.7z" />
      </svg>
    )
  }
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img
            className="footer-logo"
            src={images.footerLogo}
            alt="SAGE Advisory Group"
            width={75}
            height={75}
          />
          <p>
            Restaurant and hospitality advisory built around clarity, structure,
            execution, and measurable progress.
          </p>
          <h3 className="follow-heading">Follow us</h3>
          <div className="social-links">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
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
          {site.nav.map((item) =>
            item.external ? (
              <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            )
          )}
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
