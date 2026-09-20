import Link from "next/link";
import { MaterialText } from "@/components/ui/MaterialText";
import { operatorRows } from "@/data/operator";

/** 運営者情報の表。show が false の行（data/site.ts のフラグ）は出力しない */
export function OperatorInfo() {
  const rows = operatorRows.filter((row) => row.show);

  return (
    <dl className="mx-auto max-w-3xl border-t border-navy-50">
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid gap-1 border-b border-navy-50 py-5 sm:grid-cols-[180px_1fr] sm:gap-6 sm:py-6"
        >
          <dt className="text-sm font-bold text-ink">{row.label}</dt>
          <dd className="leading-relaxed text-ink-muted">
            {row.href ? (
              <Link href={row.href} className="text-navy underline underline-offset-4">
                {row.value}
              </Link>
            ) : (
              <MaterialText text={row.value} />
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
