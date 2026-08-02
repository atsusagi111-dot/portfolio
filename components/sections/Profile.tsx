"use client";

import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { useTranslations } from "@/components/i18n/LanguageProvider";

export function Profile() {
  const t = useTranslations();

  return (
    <Section id="profile" title={t.profileSection.title}>
      <div className="mb-12 flex justify-center">
        <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-surface-card shadow-lg sm:h-48 sm:w-48">
          <Image
            src="/profile/profile.png"
            alt={t.profileSection.photoAlt}
            width={900}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <ol className="mx-auto flex max-w-2xl flex-col gap-10 border-l-2 border-navy-50 pl-8">
        {t.profileTimeline.map((item) => (
          <li key={item.year} className="relative">
            <span className="absolute top-1.5 -left-[41px] h-3 w-3 rounded-full bg-gold ring-4 ring-surface" />
            <p className="text-sm font-semibold text-gold">{item.year}</p>
            <h3 className="mt-1 text-lg font-bold text-ink sm:text-xl">
              {item.heading}
            </h3>
            <p className="mt-2 leading-relaxed text-ink-muted">{item.body}</p>
            {item.highlight && (
              <p className="mt-3 inline-block rounded-lg bg-gold-50 px-4 py-2 text-sm font-semibold text-navy">
                {item.highlight}
              </p>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
