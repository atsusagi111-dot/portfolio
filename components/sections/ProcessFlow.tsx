"use client";

import { Section } from "@/components/layout/Section";
import { useTranslations } from "@/components/i18n/LanguageProvider";

export function ProcessFlow() {
  const t = useTranslations();

  return (
    <Section
      className="bg-surface-card"
      title={t.processSection.title}
      description={t.processSection.description}
    >
      <ol className="flex flex-col gap-8">
        {t.processSteps.map((step) => (
          <li
            key={step.number}
            className="flex flex-col gap-4 rounded-2xl border border-navy-50 bg-surface p-6 sm:flex-row sm:gap-6 sm:p-8"
          >
            <div className="shrink-0 text-2xl font-bold text-gold sm:text-3xl">
              {step.number}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-ink sm:text-xl">
                {step.title}
              </h3>
              <div className="mt-2 flex flex-col gap-2">
                {step.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="leading-relaxed text-ink-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {step.bullets && (
                <ul className="mt-3 flex flex-col gap-2">
                  {step.bullets.map((bullet) => (
                    <li key={bullet.label} className="text-sm text-ink">
                      <span className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {bullet.label}
                      </span>
                      {bullet.subItems && (
                        <ul className="mt-1.5 ml-3.5 flex flex-col gap-1 border-l border-navy-50 pl-3">
                          {bullet.subItems.map((sub) => (
                            <li
                              key={sub}
                              className="text-sm text-ink-muted"
                            >
                              {sub}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {step.afterBullets && (
                <p className="mt-3 leading-relaxed text-ink-muted">
                  {step.afterBullets}
                </p>
              )}

              {step.note && (
                <p className="mt-3 text-xs leading-relaxed text-ink-muted">
                  {step.note}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
