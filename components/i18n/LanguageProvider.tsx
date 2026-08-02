"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { translations, type Locale, type Translations } from "@/lib/i18n/translations";

const STORAGE_KEY = "atsusagi-lab-locale";

function isLocale(value: string | null): value is Locale {
  return value === "ja" || value === "en" || value === "es";
}

type Listener = () => void;

let cachedLocale: Locale | null = null;
const listeners = new Set<Listener>();

function readStoredLocale(): Locale {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return isLocale(saved) ? saved : "ja";
}

function subscribeLocale(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getLocaleSnapshot(): Locale {
  if (cachedLocale === null) {
    cachedLocale = readStoredLocale();
  }
  return cachedLocale;
}

function getLocaleServerSnapshot(): Locale {
  return "ja";
}

function commitLocale(next: Locale) {
  cachedLocale = next;
  window.localStorage.setItem(STORAGE_KEY, next);
  listeners.forEach((listener) => listener());
}

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeLocale,
    getLocaleSnapshot,
    getLocaleServerSnapshot
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale: commitLocale, t: translations[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

export function useTranslations() {
  return useLanguage().t;
}
