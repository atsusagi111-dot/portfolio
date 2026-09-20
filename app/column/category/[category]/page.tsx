import { notFound } from "next/navigation";
import { ColumnList, columnListPath } from "@/components/column/ColumnList";
import { columnCategories, getCategoryBySlug } from "@/data/column";
import { getColumnsByCategory } from "@/lib/column";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ category: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return columnCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: Props) {
  const category = getCategoryBySlug((await params).category);
  if (!category) return {};
  return pageMetadata({
    title: `${category.name}のコラム`,
    description: `${category.name}に関するコラムの一覧です。`,
    path: columnListPath(category, 1),
    // 記事が1本もないカテゴリは検索結果に出さない
    noindex: getColumnsByCategory(category.slug).length === 0,
  });
}

export default async function ColumnCategoryPage({ params }: Props) {
  const category = getCategoryBySlug((await params).category);
  if (!category) notFound();
  return <ColumnList columns={getColumnsByCategory(category.slug)} category={category} page={1} />;
}
