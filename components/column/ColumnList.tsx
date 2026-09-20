import Link from "next/link";
import { ColumnCard } from "@/components/column/ColumnCard";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { columnCategories, columnSection, type ColumnCategory } from "@/data/column";
import { pageCount, paginate, type ColumnMeta } from "@/lib/column";

/** 一覧のURL。1ページ目はカテゴリ（または一覧）のトップ、2ページ目以降は page/<n>/ */
export function columnListPath(category: ColumnCategory | undefined, page: number): string {
  const base = category ? `/column/category/${category.slug}/` : "/column/";
  return page > 1 ? `${base}page/${page}/` : base;
}

type ColumnListProps = {
  /** 絞り込み済みの記事（新しい順） */
  columns: ColumnMeta[];
  category?: ColumnCategory;
  page: number;
};

/** コラム一覧（全件／カテゴリ別／ページ送り）で共通の表示 */
export function ColumnList({ columns, category, page }: ColumnListProps) {
  const totalPages = pageCount(columns.length);
  const visible = paginate(columns, page);
  const title = category ? `${category.name}のコラム` : columnSection.title;

  const breadcrumb = [{ label: columnSection.title, href: "/column/" }];
  if (category) breadcrumb.push({ label: category.name, href: columnListPath(category, 1) });

  const tabs = [
    { label: "すべて", href: "/column/", current: !category },
    ...columnCategories.map((item) => ({
      label: item.name,
      href: columnListPath(item, 1),
      current: item.slug === category?.slug,
    })),
  ];

  return (
    <>
      <PageHeader
        eyebrow="Column"
        title={page > 1 ? `${title}（${page}ページ目）` : title}
        description={columnSection.description}
        breadcrumb={breadcrumb}
      />
      <Section>
        <nav aria-label="カテゴリで絞り込む" className="mb-12">
          <ul className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <li key={tab.href}>
                <Link
                  href={tab.href}
                  aria-current={tab.current ? "page" : undefined}
                  className={`inline-block rounded-full border px-5 py-2 text-sm transition-colors ${
                    tab.current
                      ? "border-navy bg-navy text-white"
                      : "border-navy-50 text-ink hover:border-navy hover:bg-surface-alt"
                  }`}
                >
                  {tab.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {visible.length === 0 ? (
          <p className="py-16 text-center text-ink-muted">
            このカテゴリの記事は、ただいま準備中です。
          </p>
        ) : (
          <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((column) => (
              <li key={column.slug}>
                <ColumnCard column={column} />
              </li>
            ))}
          </ul>
        )}

        {totalPages > 1 && (
          <nav aria-label="ページ送り" className="mt-16">
            <ul className="flex flex-wrap justify-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
                <li key={number}>
                  <Link
                    href={columnListPath(category, number)}
                    aria-current={number === page ? "page" : undefined}
                    aria-label={`${number}ページ目`}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border font-en text-lg transition-colors ${
                      number === page
                        ? "border-navy bg-navy text-white"
                        : "border-navy-50 text-ink hover:border-navy"
                    }`}
                  >
                    {number}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Section>
    </>
  );
}
