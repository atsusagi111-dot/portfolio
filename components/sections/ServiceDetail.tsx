import { TextLink } from "@/components/ui/TextLink";
import { servicesSection, type Service } from "@/data/services";
import { getWork } from "@/data/works";

export function ServiceDetail({ service, index }: { service: Service; index: number }) {
  const relatedWork = service.relatedWorkId ? getWork(service.relatedWorkId) : undefined;

  return (
    <article
      id={service.id}
      className="rounded-2xl border border-navy-50/80 bg-surface p-6 shadow-[var(--shadow-card)] sm:p-10"
    >
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <span className="font-en text-2xl text-gold-600">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2 className="mt-1 text-xl font-bold text-ink sm:text-2xl">{service.name}</h2>
        </div>
        <p className="flex shrink-0 items-baseline gap-3 sm:flex-col sm:items-end sm:gap-0">
          <span className="text-xs text-ink-muted">{servicesSection.priceLabel}</span>
          <span className="text-xl font-bold text-navy">{service.price}</span>
        </p>
      </div>

      <p className="mt-6 leading-loose text-ink-muted">{service.fullDescription}</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl bg-gold-50 p-6">
          <h3 className="text-sm font-bold text-ink">{servicesSection.concernsLabel}</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {service.concerns.map((concern) => (
              <li key={concern} className="flex items-start gap-3 text-sm leading-relaxed text-ink">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                {concern}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl bg-surface-alt p-6">
          <h3 className="text-sm font-bold text-ink">{service.examplesLabel}</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {service.examples.map((example) => (
              <li key={example} className="flex items-start gap-3 text-sm leading-relaxed text-ink">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                />
                {example}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {relatedWork && (
        <p className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-navy-50 pt-6 text-sm">
          <span className="text-ink-muted">実績：{relatedWork.title}</span>
          <TextLink href={`/works/#${relatedWork.id}`}>この実績を見る</TextLink>
        </p>
      )}
    </article>
  );
}
