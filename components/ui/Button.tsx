import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type Variant = "primary" | "secondary" | "inverse";

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  onClick?: MouseEventHandler;
  disabled?: boolean;
};

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:text-base";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-white shadow-[0_10px_24px_-12px_rgba(25,44,68,0.6)] hover:-translate-y-0.5 hover:bg-navy-700 hover:shadow-[0_16px_32px_-12px_rgba(25,44,68,0.6)]",
  secondary:
    "border border-navy/70 text-navy hover:-translate-y-0.5 hover:border-navy hover:bg-navy-50/60",
  inverse:
    "bg-white text-navy shadow-[0_10px_24px_-12px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 hover:bg-gold-50",
};

/** ボタン末尾の矢印。装飾なので読み上げ対象外 */
function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Button({
  variant = "primary",
  className = "",
  children,
  href,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        <ArrowIcon />
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
      <ArrowIcon />
    </button>
  );
}
