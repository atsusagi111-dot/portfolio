import Image from "next/image";
import Link from "next/link";
import { formatDate, type ColumnMeta } from "@/lib/column";

export function ColumnCard({
  column,
  headingLevel = "h2",
}: {
  column: ColumnMeta;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <article className="group relative flex h-full flex-col">
      {/* 比率固定（1200×630 と同じ 40:21）のサムネイル枠 */}
      <div className="relative aspect-[40/21] overflow-hidden rounded-xl border border-navy-50 bg-surface-alt">
        <Image
          src={column.thumbnail}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <p className="mt-5 flex flex-wrap items-center gap-3 text-xs text-ink-muted">
        <time dateTime={column.date}>{formatDate(column.date)}</time>
        <span className="rounded-full bg-gold-50 px-3 py-0.5 font-medium text-gold-600">
          {column.category.name}
        </span>
      </p>
      <Heading className="mt-3 text-base font-bold leading-relaxed text-ink sm:text-lg sm:leading-relaxed">
        <Link
          href={`/column/${column.slug}/`}
          className="after:absolute after:inset-0 group-hover:underline group-hover:underline-offset-4"
        >
          {column.title}
        </Link>
      </Heading>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">
        {column.description}
      </p>
    </article>
  );
}
