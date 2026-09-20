import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { TextLink } from "@/components/ui/TextLink";
import { contact } from "@/data/contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: contact.title,
  description:
    "ATSUSAGI LABへのご相談・お見積もりのご依頼はこちらから。要件が固まっていない段階でのご相談も歓迎です。",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={contact.title}
        description={contact.description}
        breadcrumb={[{ label: contact.title, href: "/contact/" }]}
      />
      <Section>
        <div className="mx-auto max-w-2xl">
          <ContactForm />
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-navy-50 pt-8">
            <TextLink href="/flow/">ご依頼の流れ</TextLink>
            <TextLink href="/flow/#faq">よくあるご質問</TextLink>
          </div>
        </div>
      </Section>
    </>
  );
}
