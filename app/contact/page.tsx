import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { contact, site } from "@/content/site";

export const metadata = {
  title: "Contact SAGE Advisory Group",
  description:
    "Share a few details about your restaurant operation and start a conversation with SAGE."
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow={contact.eyebrow} title={contact.title} body={contact.body} />

      <section className="section contact-section">
        <div className="container contact-layout">
          <aside className="contact-aside">
            <p className="eyebrow">Get in touch</p>
            <h2>We&apos;d like to hear from you</h2>
            <p>
              Reach out with a short overview of your operation. The more context you share,
              the better we can prepare for a useful first conversation.
            </p>
            <div className="contact-details">
              <p>
                {contact.address.line1}
                <br />
                {contact.address.line2}
              </p>
              <p>
                <a href={`mailto:${contact.formEmail}`}>{contact.formEmail}</a>
              </p>
              <p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </div>
            <blockquote className="contact-quote">
              <p>&ldquo;{contact.quote.text}&rdquo;</p>
              <footer>— {contact.quote.attribution}</footer>
            </blockquote>
          </aside>

          <div className="contact-panel">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
