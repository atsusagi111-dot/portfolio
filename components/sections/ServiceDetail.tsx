type ServiceDetailProps = {
  id: string;
  name: string;
  fullDescription: string;
  price: string;
  priceLabel: string;
  examples?: string[];
};

export function ServiceDetail({
  id,
  name,
  fullDescription,
  price,
  priceLabel,
  examples,
}: ServiceDetailProps) {
  return (
    <article
      id={id}
      className="scroll-mt-24 rounded-2xl border border-navy-50 bg-surface-card p-8"
    >
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <h3 className="text-xl font-bold text-ink sm:text-2xl">{name}</h3>
        <div className="flex items-baseline gap-2 sm:flex-col sm:items-end sm:gap-0">
          <span className="text-xs text-ink-muted">{priceLabel}</span>
          <span className="text-lg font-bold text-navy">{price}</span>
        </div>
      </div>
      <p className="mt-4 leading-relaxed text-ink-muted">{fullDescription}</p>
      {examples && examples.length > 0 && (
        <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {examples.map((example) => (
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
