"use client";

import { Section } from "@/components/layout/Section";
import { useTranslations } from "@/components/i18n/LanguageProvider";
import type { TechItem } from "@/lib/i18n/translations";

function TechList({ items }: { items: TechItem[] }) {
  return (
    <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item.name}
          className="flex items-start gap-2 text-sm leading-relaxed text-ink"
        >
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          <span>
            <span className="font-medium">{item.name}</span>
            {" "}({item.note})
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Achievements() {
  const t = useTranslations();

  return (
    <Section id="achievements" title={t.achievementsSection.title}>
      <div className="flex flex-col gap-6">
        {t.achievements.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-navy-50 bg-surface-card p-8"
          >
            <h3 className="text-xl font-bold text-ink sm:text-2xl">
              {item.title}
            </h3>
            <p className="mt-4 leading-relaxed text-ink-muted">
              {item.description}
            </p>

            <h4 className="mt-6 text-sm font-semibold text-gold">
              {t.achievementsSection.techStackLabel}
            </h4>
            <TechList items={item.techStack} />

            {item.supportTools.length > 0 && (
              <>
                <h4 className="mt-6 text-sm font-semibold text-gold">
                  {t.achievementsSection.supportToolsLabel}
                </h4>
                <TechList items={item.supportTools} />
              </>
            )}

            <h4 className="mt-6 text-sm font-semibold text-gold">
              {t.achievementsSection.urlLabel}
            </h4>
            <ul className="mt-2 flex flex-col gap-1">
              {item.urls.map((url) => (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm break-all text-navy underline hover:text-navy-700"
                  >
                    {url}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
