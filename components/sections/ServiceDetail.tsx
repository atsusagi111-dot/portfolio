type ServiceDetailProps = {
  id: string;
  name: string;
  fullDescription: string;
  examples?: string[];
};

export function ServiceDetail({
  id,
  name,
  fullDescription,
  examples,
}: ServiceDetailProps) {
  return (
    <article
      id={id}
      className="scroll-mt-24 rounded-2xl border border-navy-50 bg-surface-card p-8"
    >
      <h3 className="text-xl font-bold text-ink sm:text-2xl">{name}</h3>
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
