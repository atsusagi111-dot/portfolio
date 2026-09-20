import { notFound } from "next/navigation";
import { ColumnList, columnListPath } from "@/components/column/ColumnList";
import { columnCategories, getCategoryBySlug } from "@/data/column";
import { getColumnsByCategory, pageCount } from "@/lib/column";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ category: string; n: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  // 1ページ目はカテゴリのトップと同じ内容（canonical はカテゴリのトップに向ける）
  return columnCategories.flatMap((category) => {
    const total = pageCount(getColumnsByCategory(category.slug).length);
    return Array.from({ length: total }, (_, index) => ({
      category: category.slug,
      n: String(index + 1),
    }));
  });
}

export async function generateMetadata({ params }: Props) {
  const { category: slug, n } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  const page = Number(n);
  return pageMetadata({
    title: page > 1 ? `${category.name}のコラム（${page}ページ目）` : `${category.name}のコラム`,
    description: `${category.name}に関するコラムの一覧です。`,
    path: columnListPath(category, page),
    noindex: getColumnsByCategory(category.slug).length === 0,
  });
}

export default async function ColumnCategoryPagedPage({ params }: Props) {
  const { category: slug, n } = await params;
  const category = getCategoryBySlug(slug);
  const page = Number(n);
  if (!category) notFound();
  const columns = getColumnsByCategory(category.slug);
  if (!Number.isInteger(page) || page < 1 || page > pageCount(columns.length)) notFound();
  return <ColumnList columns={columns} category={category} page={page} />;
}
