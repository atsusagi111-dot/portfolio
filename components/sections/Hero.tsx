"use client";

import { Button } from "@/components/ui/Button";
import { CodeShowcase } from "@/components/ui/CodeShowcase";
import { DeveloperProfileBadge } from "@/components/ui/DeveloperProfileBadge";
import { useTranslations } from "@/components/i18n/LanguageProvider";

export function Hero() {
  const t = useTranslations();

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <DeveloperProfileBadge />
          <h1 className="max-w-2xl text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            {t.hero.title}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {t.hero.description}
          </p>
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Button href="/contact" variant="primary">
              {t.hero.ctaPrimary}
            </Button>
            <Button href="/services" variant="secondary">
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <CodeShowcase />
        </div>
      </div>
    </section>
  );
}
