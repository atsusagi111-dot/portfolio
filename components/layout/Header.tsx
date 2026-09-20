"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { contactNav, mainNav } from "@/data/navigation";

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-navy-50 bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="ATSUSAGI LAB ホーム" onClick={close}>
          <Logo variant="horizontal" className="h-8 w-auto sm:h-10" priority />
        </Link>

        <nav aria-label="メインメニュー" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {mainNav.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`relative py-2 text-sm font-medium transition-colors hover:text-navy ${
                      current
                        ? "text-navy after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-gold"
                        : "text-ink-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* お問い合わせボタンは全画面幅で常時表示 */}
          <Link
            href={contactNav.href}
            onClick={close}
            aria-current={isCurrent(pathname, contactNav.href) ? "page" : undefined}
            className="inline-flex items-center justify-center rounded-full bg-navy px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-navy-700 sm:px-6 sm:py-2.5"
          >
            {contactNav.label}
          </Link>

          <button
            type="button"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-md text-navy lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="モバイルメニュー"
          className="border-t border-navy-50 bg-surface px-4 pb-6 lg:hidden"
        >
          <ul className="flex flex-col">
            {[{ href: "/", label: "ホーム", en: "Home" }, ...mainNav].map((item) => {
              const current =
                item.href === "/" ? pathname === "/" : isCurrent(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-navy-50">
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={current ? "page" : undefined}
                    className={`flex items-baseline justify-between py-4 text-base font-medium ${
                      current ? "text-navy" : "text-ink"
                    }`}
                  >
                    {item.label}
                    <span className="font-en text-sm text-gold-600">{item.en}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
