"use client";

import { Section } from "@/components/layout/Section";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { useTranslations } from "@/components/i18n/LanguageProvider";
import { SERVICE_IDS } from "@/lib/i18n/translations";

export function ServicesPageBody() {
  const t = useTranslations();
  const lpAchievement = t.achievements.find(
    (item) => item.id === "resignation-agency-lp"
  );

  return (
    <Section
      title={t.servicesSection.title}
      description={t.servicesSection.pageDescription}
    >
      <div className="flex flex-col gap-6">
        {SERVICE_IDS.map((id) => (
          <ServiceDetail
            key={id}
            id={id}
            name={t.services[id].name}
            fullDescription={t.services[id].fullDescription}
            price={t.services[id].price}
            priceLabel={t.servicesSection.priceLabel}
            examples={t.services[id].examples}
            relatedAchievement={
              id === "lp" && lpAchievement
                ? {
                    labelPrefix: t.servicesSection.achievementLabel,
                    title: lpAchievement.title,
                    screenshots: lpAchievement.screenshots,
                  }
                : undefined
            }
          />
        ))}
      </div>
    </Section>
  );
}
