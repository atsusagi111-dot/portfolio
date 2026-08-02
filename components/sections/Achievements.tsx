"use client";

import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { useTranslations } from "@/components/i18n/LanguageProvider";
import type { TechItem } from "@/lib/i18n/translations";

function TechList({ items }: { items: TechItem[] }) {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {items.map((item) => (
        <div key={item.name} className="group relative">
          <span
            tabIndex={0}
            className="rounded-xl border border-navy-50 bg-surface px-4 py-2 text-sm font-medium text-ink outline-none"
          >
            {item.name}
          </span>
          <div
            role="tooltip"
            className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1.5 w-max max-w-[200px] -translate-x-1/2 translate-y-0.5 rounded-md bg-ink/80 px-2.5 py-1 text-center text-[11px] leading-relaxed text-white opacity-0 transition-all duration-300 delay-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
          >
            {item.note}
          </div>
        </div>
      ))}
    </div>
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

            {item.screenshots.length > 0 && (
              <>
                <h4 className="mt-6 text-sm font-semibold text-gold">
                  {t.achievementsSection.screenshotsLabel}
                </h4>
                <div className="mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {item.screenshots.map((shot) => (
                    <figure
                      key={shot.label}
                      className="overflow-hidden rounded-xl border border-navy-50 bg-surface"
                    >
                      <figcaption className="border-b border-navy-50 bg-surface-card px-4 py-2 text-sm font-semibold text-ink">
                        {shot.label}
                      </figcaption>
                      <Image
                        src={shot.src}
                        alt={shot.label}
                        width={787}
                        height={786}
                        className="h-auto w-full"
                      />
                    </figure>
                  ))}
                </div>
              </>
            )}

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
          </article>
        ))}
      </div>
    </Section>
  );
}
