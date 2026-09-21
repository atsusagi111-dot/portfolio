import Link from "next/link";
import type { ReactNode } from "react";

const linkClass =
  "group inline-flex items-center gap-3 text-sm font-medium text-navy";

/** 「詳しく見る →」形式の導線リンク。external を付けると別タブで開く外部リンクになる */
export function TextLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const body = (
    <>
      <span className="relative pb-1 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-100 after:bg-navy after:transition-transform after:duration-300 group-hover:after:origin-right group-hover:after:scale-x-0">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-navy/60 transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-white"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {body}
      </a>
    );
  }
  return (
    <Link href={href} className={linkClass}>
      {body}
    </Link>
  );
}
