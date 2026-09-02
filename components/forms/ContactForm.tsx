"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "@/components/i18n/LanguageProvider";

const inputClasses =
  "w-full rounded-lg border border-navy-50 bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy";

type Status = "idle" | "submitting" | "submitted" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const t = useTranslations();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("send_failed");
      }

      setStatus("submitted");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
          {t.contact.nameLabel} <span className="text-gold">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClasses}
          placeholder={t.contact.namePlaceholder}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
          {t.contact.emailLabel} <span className="text-gold">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClasses}
          placeholder={t.contact.emailPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
          {t.contact.messageLabel} <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={inputClasses}
          placeholder={t.contact.messagePlaceholder}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        className="w-full sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? t.contact.submitting : t.contact.submit}
      </Button>

      {status === "submitted" && (
        <p className="rounded-lg bg-gold-50 px-4 py-3 text-sm text-ink">
          {t.contact.submitted}
        </p>
      )}

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {t.contact.error}
        </p>
      )}
    </form>
  );
}
