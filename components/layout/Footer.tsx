import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { footerNav } from "@/data/navigation";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-700 text-white">
      <div aria-hidden="true" className="bg-dots-light absolute inset-0 opacity-40" />
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-en text-[5rem] leading-none tracking-[0.12em] text-white/[0.04] sm:text-[9rem]"
      >
        ATSUSAGI LAB
      </p>
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Logo variant="badge" className="h-14 w-14 rounded-full bg-white p-1" />
            <span>
              <span className="block text-sm font-bold tracking-[0.2em] text-white">
                {site.name}
              </span>
              <span className="block text-xs text-white/60">{site.tagline}</span>
            </span>
          </Link>
        </div>

        <nav aria-label="フッターメニュー" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerNav.map((group) => (
            <div key={group.heading}>
              <p className="font-en text-lg tracking-[0.08em] text-gold">{group.heading}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
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

      <div className="relative border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-center text-xs tracking-wider text-white/50 sm:px-6 lg:px-8">
          &copy; {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
