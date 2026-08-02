import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type Variant = "primary" | "secondary";

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
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors sm:text-base";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-navy-700",
  secondary: "border border-navy text-navy hover:bg-navy-50",
};

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
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
