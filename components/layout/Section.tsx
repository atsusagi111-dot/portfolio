import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  /** 英字のセクションラベル（例：Service） */
  eyebrow?: string;
  title?: string;
  description?: string;
  id?: string;
  /** 背景を薄いグレーにして、白背景のセクションと交互に見せる */
  tone?: "default" | "alt";
  /** 見出しブロックを中央寄せにする */
  center?: boolean;
};

export function Section({
  children,
  className = "",
  eyebrow,
  title,
  description,
  id,
  tone = "default",
  center = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`px-4 py-20 sm:px-6 sm:py-28 lg:px-8 ${
        tone === "alt" ? "bg-surface-alt" : ""
      } ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || description) && (
          <div className={`mb-12 max-w-2xl sm:mb-16 ${center ? "mx-auto text-center" : ""}`}>
            {eyebrow && (
              <p
                className={`mb-3 flex items-center gap-3 font-en text-xl tracking-wide text-gold-600 ${
                  center ? "justify-center" : ""
                }`}
              >
                <span aria-hidden="true" className="h-px w-8 bg-gold" />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl font-bold leading-snug text-ink sm:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 leading-loose text-ink-muted">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
