import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { MaterialText } from "@/components/ui/MaterialText";
import { TextLink } from "@/components/ui/TextLink";
import { privacy } from "@/data/privacy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: privacy.title,
  description: "ATSUSAGI LABにおける個人情報の取り扱い方針（プライバシーポリシー）です。",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy Policy"
        title={privacy.title}
        breadcrumb={[{ label: privacy.title, href: "/privacy/" }]}
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="leading-loose text-ink-muted">{privacy.intro}</p>
          {privacy.sections.map((section) => (
            <section key={section.heading} className="mt-12">
              <h2 className="border-b border-navy-50 pb-3 text-lg font-bold text-ink sm:text-xl">
                {section.heading}
              </h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-loose text-ink-muted">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="mt-4 flex list-disc flex-col gap-2 pl-6 leading-loose text-ink-muted">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <div className="mt-8">
            <TextLink href="/contact/">お問い合わせフォームへ</TextLink>
          </div>
          <p className="mt-14 text-right text-sm leading-loose text-ink-muted">
            制定日：
            <MaterialText text={privacy.established} />
            <br />
            {privacy.operator}
          </p>
        </div>
      </Section>
    </>
  );
}
