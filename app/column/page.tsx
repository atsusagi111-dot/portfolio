import { ColumnList } from "@/components/column/ColumnList";
import { columnSection } from "@/data/column";
import { getAllColumns } from "@/lib/column";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: columnSection.title,
  description: columnSection.description,
  path: "/column/",
});

export default function ColumnIndexPage() {
  return <ColumnList columns={getAllColumns()} page={1} />;
}
