import Link from "next/link";
import type { Service } from "@/lib/content";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services#${service.id}`}
      className="group flex flex-col rounded-2xl border border-navy-50 bg-surface-card p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-ink group-hover:text-navy">
        {service.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {service.shortDescription}
      </p>
      <span className="mt-4 text-sm font-medium text-gold">詳しく見る →</span>
    </Link>
  );
}
