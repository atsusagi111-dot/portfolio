import { ColumnCard } from "@/components/column/ColumnCard";
import { Section } from "@/components/layout/Section";
import { TextLink } from "@/components/ui/TextLink";
import { columnSection } from "@/data/column";
import { getAllColumns } from "@/lib/column";

/** ホーム用：新着コラム3件。記事が1本もなければセクションごと表示しない */
export function LatestColumns() {
  const columns = getAllColumns().slice(0, 3);
  if (columns.length === 0) return null;

  return (
    <Section eyebrow="Column" title={columnSection.title} description={columnSection.description}>
      <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {columns.map((column) => (
          <li key={column.slug}>
            <ColumnCard column={column} headingLevel="h3" />
          </li>
        ))}
      </ul>
      <div className="mt-12 text-right">
        <TextLink href="/column/">コラム一覧を見る</TextLink>
      </div>
    </Section>
  );
}
