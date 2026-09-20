import Link from "next/link";
import type { ReactNode } from "react";

/** 「詳しく見る →」形式の導線リンク */
export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 border-b border-navy pb-1 text-sm font-medium text-navy"
    >
      {children}
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
