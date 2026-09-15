import Link from "next/link";
import { images, site } from "@/content/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="SAGE home">
          <img
            className="brand-logo"
            src={images.logo}
            alt="SAGE Advisory Group"
            width={220}
            height={119}
          />
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
