import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { footerNav } from "@/data/navigation";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-50 bg-surface-alt">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Logo variant="badge" className="h-14 w-14" />
            <span>
              <span className="block text-sm font-bold tracking-wider text-ink">
                {site.name}
              </span>
              <span className="block text-xs text-ink-muted">{site.tagline}</span>
            </span>
          </Link>
        </div>

        <nav aria-label="フッターメニュー" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerNav.map((group) => (
            <div key={group.heading}>
              <p className="font-en text-lg text-gold-600">{group.heading}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-ink-muted transition-colors hover:text-navy"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t border-navy-50">
        <p className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-ink-muted sm:px-6 lg:px-8">
          &copy; {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
