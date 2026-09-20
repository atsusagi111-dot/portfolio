import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ColumnCard } from "@/components/column/ColumnCard";
import { columnListPath } from "@/components/column/ColumnList";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MaterialText, isPlaceholder } from "@/components/ui/MaterialText";
import { TextLink } from "@/components/ui/TextLink";
import { columnSection } from "@/data/column";
import { profile } from "@/data/profile";
import { absoluteUrl, site } from "@/data/site";
import { formatDate, getAllColumns, getColumn, getRelatedColumns } from "@/lib/column";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

// 静的エクスポートのため、content/column/ にある記事だけをビルド時に生成する
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllColumns().map((column) => ({ slug: column.slug }));
}

export async function generateMetadata({ params }: Props) {
  const column = await getColumn((await params).slug);
  if (!column) return {};
  return pageMetadata({
    title: column.title,
    description: column.description,
    path: `/column/${column.slug}/`,
    // SVGのプレースホルダーはOGP画像に使えないため、サムネイル未設定の記事はサイト共通の画像にする
    ogImage: column.thumbnail.endsWith(".svg") ? undefined : column.thumbnail,
    type: "article",
    publishedTime: column.date,
    modifiedTime: column.updated ?? column.date,
  });
}

export default async function ColumnArticlePage({ params }: Props) {
  const column = await getColumn((await params).slug);
  if (!column) notFound();

  const related = getRelatedColumns(column);
  const url = `/column/${column.slug}/`;
  const authorName = isPlaceholder(profile.name) ? site.name : profile.name;

  return (
    <>
      <article className="px-4 pb-20 pt-6 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Breadcrumb
            items={[
              { label: columnSection.title, href: "/column/" },
              { label: column.category.name, href: columnListPath(column.category, 1) },
              { label: column.title, href: url },
            ]}
          />

          <header className="mt-12">
            <p className="flex flex-wrap items-center gap-3 text-sm text-ink-muted">
              <Link
                href={columnListPath(column.category, 1)}
                className="rounded-full bg-gold-50 px-4 py-1 text-xs font-medium text-gold-600 hover:underline"
              >
                {column.category.name}
              </Link>
              <span>
                公開日：<time dateTime={column.date}>{formatDate(column.date)}</time>
              </span>
              {column.updated && column.updated !== column.date && (
                <span>
                  更新日：<time dateTime={column.updated}>{formatDate(column.updated)}</time>
                </span>
              )}
            </p>
            <h1 className="mt-5 text-2xl font-bold leading-normal text-ink sm:text-[2rem] sm:leading-normal">
              {column.title}
            </h1>
            <p className="mt-5 leading-loose text-ink-muted">{column.description}</p>
            {/* 比率固定（1200×630）のサムネイル枠 */}
            <div className="relative mt-8 aspect-[40/21] overflow-hidden rounded-2xl border border-navy-50 bg-surface-alt">
              <Image
                src={column.thumbnail}
                alt=""
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
          </header>

          {column.toc.length > 0 && (
            <nav aria-labelledby="toc-title" className="mt-10 rounded-2xl bg-surface-alt p-6 sm:p-8">
              <p id="toc-title" className="font-en text-xl text-gold-600">
                Contents
                <span className="ml-3 font-sans text-sm font-bold text-ink">目次</span>
              </p>
              <ol className="mt-4 flex flex-col gap-2.5 text-sm leading-relaxed">
                {column.toc.map((item) => (
                  <li key={item.id} className={item.level === 3 ? "ml-5" : ""}>
                    <a href={`#${item.id}`} className="text-ink hover:text-navy hover:underline">
                      {item.level === 3 && (
                        <span aria-hidden="true" className="mr-2 text-ink-muted">
                          └
                        </span>
                      )}
                      {item.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Markdownをビルド時にHTMLへ変換したもの（content/column/ の自前の記事のみ） */}
          <div className="article-body mt-12" dangerouslySetInnerHTML={{ __html: column.html }} />

          {column.tags.length > 0 && (
            <ul aria-label="タグ" className="mt-12 flex flex-wrap gap-2">
              {column.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-navy-50 px-3 py-1 text-xs text-ink-muted"
                >
                  #{tag}
                </li>
              ))}
            </ul>
          )}

          <aside
            aria-label="この記事を書いた人"
            className="mt-12 flex flex-col gap-6 rounded-2xl border border-navy-50 p-6 sm:flex-row sm:items-center sm:p-8"
          >
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-surface-alt">
              <Image src={profile.photo} alt={profile.photoAlt} fill sizes="96px" className="object-cover" />
            </div>
            <div>
              <p className="text-xs text-ink-muted">この記事を書いた人</p>
              <p className="mt-1 font-bold text-ink">
                <MaterialText text={profile.name} />
              </p>
              <p className="mt-0.5 text-xs text-ink-muted">{profile.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{profile.shortBio}</p>
              <div className="mt-4">
                <TextLink href="/profile/">プロフィールを見る</TextLink>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section
          aria-labelledby="related-title"
          className="bg-surface-alt px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <p className="flex items-center gap-3 font-en text-xl tracking-wide text-gold-600">
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
              Related
            </p>
            <h2 id="related-title" className="mt-3 text-2xl font-bold text-ink">
              関連記事
            </h2>
            <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <ColumnCard column={item} headingLevel="h3" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: column.title,
          description: column.description,
          datePublished: column.date,
          dateModified: column.updated ?? column.date,
          mainEntityOfPage: absoluteUrl(url),
          image: absoluteUrl(column.thumbnail.endsWith(".svg") ? site.ogImage : column.thumbnail),
          author: {
            "@type": isPlaceholder(profile.name) ? "Organization" : "Person",
            name: authorName,
            url: absoluteUrl("/profile/"),
          },
          publisher: {
            "@type": "Organization",
            name: site.name,
            logo: { "@type": "ImageObject", url: absoluteUrl("/images/logo/atsusagi-lab-badge.webp") },
          },
        }}
      />
    </>
  );
}
