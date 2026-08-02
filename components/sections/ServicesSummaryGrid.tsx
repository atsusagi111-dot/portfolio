"use client";

import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { useTranslations } from "@/components/i18n/LanguageProvider";
import { SERVICE_IDS } from "@/lib/i18n/translations";

export function ServicesSummaryGrid() {
  const t = useTranslations();

  return (
    <Section
      className="bg-surface-card"
      title={t.servicesSection.title}
      description={t.servicesSection.homeDescription}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICE_IDS.map((id) => (
          <ServiceCard
            key={id}
            id={id}
            name={t.services[id].name}
            shortDescription={t.services[id].shortDescription}
            price={t.services[id].price}
            priceLabel={t.servicesSection.priceLabel}
          />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/services"
          className="text-sm font-medium text-gold hover:text-gold-600"
        >
          {t.servicesSection.readMore}
        </Link>
      </div>
    </Section>
  );
}
