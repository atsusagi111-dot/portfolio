"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { LOCALES, translations, type Locale } from "@/lib/i18n/translations";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(next: Locale) {
    setLocale(next);
    setOpen(false);
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1 text-sm font-medium text-ink hover:text-navy"
      >
        {translations[locale].languageName}
        <span aria-hidden="true" className="text-xs text-ink-muted">
          ▼
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-10 mt-2 w-32 overflow-hidden rounded-lg border border-navy-50 bg-surface-card shadow-md"
        >
          {LOCALES.map((code) => (
            <li key={code}>
              <button
                type="button"
                role="option"
                aria-selected={code === locale}
                onClick={() => handleSelect(code)}
                className={`block w-full px-4 py-2 text-left text-sm hover:bg-navy-50 ${
                  code === locale ? "font-semibold text-navy" : "text-ink"
                }`}
              >
                {translations[code].languageName}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
