"use client";

import { Section } from "@/components/layout/Section";
import { useTranslations } from "@/components/i18n/LanguageProvider";

export function TargetAudience() {
  const t = useTranslations();
  const highlights = t.targetAudience.items.slice(0, 4);

  return (
    <Section
      className="bg-surface-card"
      eyebrow={t.targetAudience.eyebrow}
      title={t.targetAudience.title}
      description={t.targetAudience.description}
    >
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {highlights.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-xl border border-navy-50 bg-surface p-4 text-sm leading-relaxed text-ink"
          >
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
