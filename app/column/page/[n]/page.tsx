import { notFound } from "next/navigation";
import { ColumnList, columnListPath } from "@/components/column/ColumnList";
import { columnSection } from "@/data/column";
import { getAllColumns, pageCount } from "@/lib/column";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ n: string }> };

// 静的エクスポートのため、存在するページ番号だけをビルド時に生成する
export const dynamicParams = false;

export function generateStaticParams() {
  // 1ページ目は /column/ と同じ内容（canonical は /column/ に向ける）。
  // 静的エクスポートでは空配列を返せないため、1ページ目も必ず生成する
  const total = pageCount(getAllColumns().length);
  return Array.from({ length: total }, (_, index) => ({ n: String(index + 1) }));
}

export async function generateMetadata({ params }: Props) {
  const page = Number((await params).n);
  return pageMetadata({
    title: page > 1 ? `${columnSection.title}（${page}ページ目）` : columnSection.title,
    description: columnSection.description,
    path: columnListPath(undefined, page),
  });
}

export default async function ColumnPagedPage({ params }: Props) {
  const page = Number((await params).n);
  const columns = getAllColumns();
  if (!Number.isInteger(page) || page < 1 || page > pageCount(columns.length)) notFound();
  return <ColumnList columns={columns} page={page} />;
}
