import Link from "next/link";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="SAGE home">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span className="brand-copy">
            <strong>SAGE</strong>
            <small>ADVISORY GROUP</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <a className="button button-small" href={site.contactUrl}>
          Get Started
        </a>
      </div>
    </header>
  );
}
