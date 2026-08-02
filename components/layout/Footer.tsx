import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-50 bg-surface-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <Logo variant="badge" className="h-12 w-12" />
          <div>
            <p className="text-sm font-semibold text-ink">ATSUSAGI LAB</p>
            <p className="text-xs text-ink-muted">AI開発パートナー</p>
          </div>
        </div>

        <nav className="flex gap-6">
          {NAV_LINKS.map((link) => (
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
