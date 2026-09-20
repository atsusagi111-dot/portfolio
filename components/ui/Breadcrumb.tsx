import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl } from "@/data/site";

export type Crumb = { label: string; href: string };

/** パンくずリスト。BreadcrumbList の構造化データも同時に出力する */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  const crumbs: Crumb[] = [{ label: "ホーム", href: "/" }, ...items];

  return (
    <nav aria-label="パンくずリスト">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-muted">
        {crumbs.map((crumb, index) => {
          const last = index === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page">{crumb.label}</span>
              ) : (
                <>
                  <Link href={crumb.href} className="hover:text-navy hover:underline">
                    {crumb.label}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: crumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.label,
            item: absoluteUrl(crumb.href),
          })),
        }}
      />
    </nav>
  );
}
