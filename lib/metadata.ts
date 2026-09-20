import type { Metadata } from "next";
import { site } from "@/data/site";

type PageMetaInput = {
  /** ページ名（「｜ATSUSAGI LAB」は自動で付く）。省略時はサイト既定のタイトル */
  title?: string;
  description: string;
  /** サイト内パス（例：/services/）。canonical と og:url に使う */
  path: string;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
};

/** ページごとの title / description / canonical / OGP をまとめて作る */
export function pageMetadata({
  title,
  description,
  path,
  ogImage = site.ogImage,
  type = "website",
  publishedTime,
  modifiedTime,
  noindex = false,
}: PageMetaInput): Metadata {
  const fullTitle = title ? `${title}｜${site.name}` : site.defaultTitle;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      locale: site.locale,
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: site.name }],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
