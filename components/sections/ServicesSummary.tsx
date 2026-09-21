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
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <li key={service.id}>
            <Link
              href={`/services/#${service.id}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-50/80 bg-surface p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-card-hover)]"
            >
              {/* 上辺の金色ライン（ホバーで伸びる） */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold to-gold/40 transition-transform duration-500 group-hover:scale-x-100"
              />
              <span className="flex items-center justify-between">
                <span className="font-en text-3xl leading-none text-gold-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-50 text-navy transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">
                {service.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                {service.shortDescription}
              </p>
              <p className="mt-6 flex items-baseline justify-between border-t border-navy-50 pt-4 text-sm">
                <span className="text-ink-muted">
                  {servicesSection.priceLabel}
                </span>
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
