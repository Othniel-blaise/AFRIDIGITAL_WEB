import { ContactHero } from "../components/contact/ContactHero";
import { ContactInfoCards } from "../components/contact/ContactInfoCards";
import { ContactForm } from "../components/contact/ContactForm";
import { ContactMap } from "../components/contact/ContactMap";
import { NewsletterCta } from "../components/contact/NewsletterCta";

export function Contact() {
  return (
    <div className="pb-24">
      <ContactHero />

      <section className="px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
        <ContactInfoCards />
        <div className="lg:col-span-8 flex flex-col gap-gutter-desktop">
          <ContactForm />
          <ContactMap />
        </div>
      </section>

      <NewsletterCta />
    </div>
  );
}
