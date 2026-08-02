"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useTranslations } from "@/components/i18n/LanguageProvider";

export function Header() {
  const [open, setOpen] = useState(false);
  const t = useTranslations();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/#achievements", label: t.nav.achievements },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-navy-50 bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo variant="horizontal" className="h-8 w-auto sm:h-10" priority />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <Button href="/contact" className="px-5 py-2 text-sm">
            {t.nav.contactCta}
          </Button>
        </nav>

        <button
          type="button"
          aria-label="メニューを開く"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-md text-navy md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t border-navy-50 bg-surface px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-base font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <LanguageSwitcher />
            </li>
            <li>
              <Button href="/contact" className="w-full">
                {t.nav.contactCta}
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
