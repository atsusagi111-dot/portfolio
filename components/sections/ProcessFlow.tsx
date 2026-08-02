"use client";

import { Section } from "@/components/layout/Section";
import { useTranslations } from "@/components/i18n/LanguageProvider";

export function ProcessFlow() {
  const t = useTranslations();
  const steps = t.processSteps;

  return (
    <Section
      className="bg-surface-card"
      title={t.processSection.title}
      description={t.processSection.description}
    >
      <ol className="mx-auto flex max-w-3xl flex-col">
        {steps.map((step, index) => (
          <li key={step.number} className="flex gap-5 sm:gap-6">
            <div className="flex flex-col items-center">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base">
                {step.number}
              </span>
              {index < steps.length - 1 && (
                <span className="w-0.5 flex-1 bg-navy-50" />
              )}
            </div>

            <div className={`flex-1 ${index < steps.length - 1 ? "pb-10" : ""}`}>
              <h3 className="pt-2 text-lg font-bold text-ink sm:text-xl">
                {step.title}
              </h3>
              <div className="mt-2 flex flex-col gap-2">
                {step.body.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-ink-muted">
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
                            <li key={sub} className="text-sm text-ink-muted">
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
