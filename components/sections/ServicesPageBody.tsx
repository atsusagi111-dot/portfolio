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
                    techStack: lpAchievement.techStack,
                    techStackLabel: t.achievementsSection.techStackLabel,
                    supportTools: lpAchievement.supportTools,
                    supportToolsLabel: t.achievementsSection.supportToolsLabel,
                    urls: lpAchievement.urls,
                    urlLabel: t.achievementsSection.urlLabel,
                  }
                : undefined
            }
          />
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-navy-50 bg-surface-card p-8">
        <h3 className="text-lg font-bold text-ink">
          {t.servicesSection.notesTitle}
        </h3>
        <dl className="mt-4 flex flex-col gap-4">
          {t.pricingNotes.map((note) => (
            <div key={note.label}>
              <dt className="text-sm font-semibold text-gold">{note.label}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink-muted">
                {note.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
