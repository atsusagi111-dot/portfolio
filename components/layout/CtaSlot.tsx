"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** 共通CTAの表示枠。お問い合わせページ自身ではフォームと重複するため表示しない */
export function CtaSlot({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith("/contact")) return null;
  return <>{children}</>;
}
