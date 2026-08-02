"use client";

import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { useTranslations } from "@/components/i18n/LanguageProvider";

export function ContactPageBody() {
  const t = useTranslations();

  return (
    <Section
      eyebrow={t.contact.eyebrow}
      title={t.contact.title}
      description={t.contact.description}
      className="min-h-[60vh]"
    >
      <div className="mx-auto max-w-xl rounded-2xl border border-navy-50 bg-surface-card p-6 sm:p-10">
        <ContactForm />
      </div>
    </Section>
  );
}
