import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { contact } from "@/data/contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "お問い合わせ完了",
  description: "お問い合わせを受け付けました。",
  path: "/contact/thanks/",
  noindex: true,
});

export default function ContactThanksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Thank you"
        title={contact.thanksTitle}
        breadcrumb={[
          { label: contact.title, href: "/contact/" },
          { label: "送信完了", href: "/contact/thanks/" },
        ]}
      />
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="leading-loose text-ink-muted">{contact.thanksBody}</p>
          <Button href="/" variant="secondary" className="mt-10 sm:px-12">
            ホームへ戻る
          </Button>
        </div>
      </Section>
    </>
  );
}
