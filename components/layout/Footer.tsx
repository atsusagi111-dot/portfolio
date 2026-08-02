"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { useTranslations } from "@/components/i18n/LanguageProvider";

export function Footer() {
  const year = new Date().getFullYear();
  const t = useTranslations();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/contact", label: t.nav.achievements },
  ];

  return (
    <footer className="border-t border-navy-50 bg-surface-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <Logo variant="badge" className="h-12 w-12" />
          <div>
            <p className="text-sm font-semibold text-ink">ATSUSAGI LAB</p>
            <p className="text-xs text-ink-muted">{t.footer.tagline}</p>
          </div>
        </div>

        <nav className="flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-ink-muted">&copy; {year} ATSUSAGI LAB</p>
      </div>
    </footer>
  );
}
