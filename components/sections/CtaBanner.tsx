"use client";

import { Button } from "@/components/ui/Button";
import { useTranslations } from "@/components/i18n/LanguageProvider";

export function CtaBanner() {
  const t = useTranslations();

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-3xl bg-navy px-6 py-14 text-center sm:px-12">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          {t.ctaBanner.title}
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
          {t.ctaBanner.description}
        </p>
        <Button
          href="/contact"
          variant="secondary"
          className="border-white bg-white text-navy hover:bg-white/90"
        >
          {t.ctaBanner.button}
        </Button>
      </div>
    </section>
  );
}
