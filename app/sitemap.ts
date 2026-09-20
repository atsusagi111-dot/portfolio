import type { MetadataRoute } from "next";
import { columnCategories } from "@/data/column";
import { absoluteUrl } from "@/data/site";
import { getAllColumns, getColumnsByCategory } from "@/lib/column";

// 静的エクスポートでは、ビルド時に out/sitemap.xml として出力される
export const dynamic = "force-static";

const STATIC_PATHS = [
  "/",
  "/services/",
  "/works/",
  "/flow/",
  "/profile/",
  "/column/",
  "/contact/",
  "/privacy/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const columns = getAllColumns();

  return [
    ...STATIC_PATHS.map((path) => ({ url: absoluteUrl(path) })),
    // 記事のあるカテゴリだけを載せる
    ...columnCategories
      .filter((category) => getColumnsByCategory(category.slug).length > 0)
      .map((category) => ({ url: absoluteUrl(`/column/category/${category.slug}/`) })),
    ...columns.map((column) => ({
      url: absoluteUrl(`/column/${column.slug}/`),
      lastModified: column.updated ?? column.date,
    })),
  ];
}
