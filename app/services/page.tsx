import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { pricingNotes, services, servicesSection } from "@/data/services";
import { targetAudience } from "@/data/home";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "サービス内容・料金目安",
  description:
    "ATSUSAGI LABのサービス内容と料金目安。ホームページ制作、LP制作、Webシステム開発、AIチャットボット制作、AIを活用した業務効率化、システム連携・業務自動化に対応しています。",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title={servicesSection.title}
        description={servicesSection.pageDescription}
        breadcrumb={[{ label: servicesSection.title, href: "/services/" }]}
      />

      <Section>
        <nav aria-label="サービス一覧" className="mb-12">
          <ul className="flex flex-wrap gap-2">
            {services.map((service) => (
              <li key={service.id}>
                <a
                  href={`#${service.id}`}
                  className="inline-block rounded-full border border-navy-50 px-4 py-2 text-sm text-ink transition-colors hover:border-navy hover:bg-surface-alt"
                >
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-8">
          {services.map((service, index) => (
            <ServiceDetail key={service.id} service={service} index={index} />
          ))}
        </div>
      </Section>

      <Section tone="alt" eyebrow="Notes" title={servicesSection.notesTitle}>
        <dl className="max-w-3xl border-t border-navy-50">
          {pricingNotes.map((note) => (
            <div
              key={note.label}
              className="grid gap-1 border-b border-navy-50 py-5 sm:grid-cols-[180px_1fr] sm:gap-6"
            >
              <dt className="text-sm font-bold text-ink">{note.label}</dt>
              <dd className="text-sm leading-loose text-ink-muted">{note.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section
        eyebrow="For you"
        title={targetAudience.title}
        description={targetAudience.description}
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {targetAudience.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-navy-50 p-5 text-sm leading-relaxed text-ink"
            >
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {item}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
