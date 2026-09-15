import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thesageadvisorygroup.com"),
  title: {
    default: "Restaurant Operations Consultant | SAGE Advisory Group",
    template: "%s | SAGE Advisory Group"
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "SAGE Advisory Group",
    description: site.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
