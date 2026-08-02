import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  id?: string;
};

export function Section({
  children,
  className = "",
  eyebrow,
  title,
  description,
  id,
}: SectionProps) {
  return (
    <section id={id} className={`px-4 py-16 sm:px-6 sm:py-20 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-2xl">
            {eyebrow && (
              <p className="mb-2 text-sm font-semibold tracking-wide text-gold">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
            )}
            {description && <p className="mt-3 text-ink-muted">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
