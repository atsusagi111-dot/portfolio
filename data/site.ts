// サイト全体の設定と、セクションの表示切り替えフラグ。

// 【後で指定】本番ドメインは環境変数 NEXT_PUBLIC_SITE_URL で指定する（.env.local.example 参照）
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com").replace(/\/+$/, "");

export const site = {
  name: "ATSUSAGI LAB",
  tagline: "AI開発パートナー",
  url: siteUrl,
  defaultTitle: "AI開発パートナー｜ATSUSAGI LAB",
  description:
    "ホームページ制作・LP制作・Webシステム開発・AIチャットボット構築・業務自動化まで、AI開発パートナーATSUSAGI LABがワンストップでサポートします。",
  ogImage: "/images/ogp.png",
  locale: "ja_JP",
} as const;

// 素材が揃っていないセクションは false にするとセクションごと非表示になる
export const flags = {
  /** お客様の声（ホーム・実績ページ）。掲載しない方針（2026-09-21 決定）のため false のまま */
  showTestimonials: false,
  /** 運営者情報：代表者名 */
  showOperatorRepresentative: false,
  /** 運営者情報：所在地 */
  showOperatorAddress: false,
  /** 運営者情報：電話番号・メールアドレス */
  showOperatorPhone: false,
  showOperatorEmail: false,
  /** 運営者情報：設立（開業）年月 */
  showOperatorEstablished: false,
} as const;

/** サイト内パスから絶対URLを作る（canonical・OGP・sitemap・RSS用） */
export function absoluteUrl(path = "/"): string {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
