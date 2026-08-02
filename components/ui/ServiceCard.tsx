import Link from "next/link";

type ServiceCardProps = {
  id: string;
  name: string;
  shortDescription: string;
  price: string;
  priceLabel: string;
};

export function ServiceCard({
  id,
  name,
  shortDescription,
  price,
  priceLabel,
}: ServiceCardProps) {
  return (
    <Link
      href={`/services#${id}`}
      className="group flex flex-col rounded-2xl border border-navy-50 bg-surface-card p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-ink group-hover:text-navy">
        {name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {shortDescription}
      </p>
      <div className="mt-4 flex items-baseline gap-2 border-t border-navy-50 pt-3">
        <span className="text-xs text-ink-muted">{priceLabel}</span>
        <span className="text-base font-bold text-navy">{price}</span>
      </div>
    </Link>
  );
}
