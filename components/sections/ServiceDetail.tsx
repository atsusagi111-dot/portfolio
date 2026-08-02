import type { Service } from "@/lib/content";

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <article
      id={service.id}
      className="scroll-mt-24 rounded-2xl border border-navy-50 bg-surface-card p-8"
    >
      <h3 className="text-xl font-bold text-ink sm:text-2xl">{service.name}</h3>
      <p className="mt-4 leading-relaxed text-ink-muted">{service.fullDescription}</p>
      {service.examples && service.examples.length > 0 && (
        <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {service.examples.map((example) => (
            <li
              key={example}
              className="flex items-start gap-2 text-sm leading-relaxed text-ink"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {example}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
