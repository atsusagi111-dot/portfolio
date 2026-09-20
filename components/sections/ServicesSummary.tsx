import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { TextLink } from "@/components/ui/TextLink";
import { services, servicesSection } from "@/data/services";

export function ServicesSummary() {
  return (
    <Section
      eyebrow="Service"
      title={servicesSection.title}
      description={servicesSection.homeDescription}
    >
      <ul className="grid gap-px overflow-hidden rounded-2xl border border-navy-50 bg-navy-50 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <li key={service.id} className="bg-surface">
            <Link
              href={`/services/#${service.id}`}
              className="group flex h-full flex-col p-8 transition-colors hover:bg-surface-alt"
            >
              <span className="font-en text-2xl text-gold-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-bold text-ink">{service.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                {service.shortDescription}
              </p>
              <p className="mt-6 flex items-baseline justify-between border-t border-navy-50 pt-4 text-sm">
                <span className="text-ink-muted">{servicesSection.priceLabel}</span>
                <span className="font-bold text-navy">{service.price}</span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-12 text-right">
        <TextLink href="/services/">サービス内容を詳しく見る</TextLink>
      </div>
    </Section>
  );
}
