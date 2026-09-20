import { columnSection } from "@/data/column";
import { absoluteUrl, site } from "@/data/site";
import { getAllColumns } from "@/lib/column";

// 静的エクスポートでは、ビルド時に out/feed.xml（RSS 2.0）として出力される
export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = getAllColumns()
    .slice(0, 30)
    .map((column) => {
      const url = absoluteUrl(`/column/${column.slug}/`);
      return `    <item>
      <title>${escapeXml(column.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(column.description)}</description>
      <category>${escapeXml(column.category.name)}</category>
      <pubDate>${new Date(`${column.date}T00:00:00+09:00`).toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${site.name} ${columnSection.title}`)}</title>
    <link>${absoluteUrl("/column/")}</link>
    <description>${escapeXml(columnSection.description)}</description>
    <language>ja</language>
    <atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
