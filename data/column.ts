// コラムの設定。カテゴリを追加・変更するときはここを編集する（docs/column.md 参照）。

export const columnSection = {
  title: "コラム",
  description:
    "ホームページ制作やAI活用、業務効率化について、経営者の方に向けて分かりやすくお伝えします。",
  /** 一覧ページ1ページあたりの記事数 */
  perPage: 9,
};

// slug はURLに使う（/column/category/<slug>/）。記事の frontmatter の category には name を書く
export const columnCategories = [
  { slug: "homepage", name: "ホームページ制作" },
  { slug: "ai", name: "AI活用" },
  { slug: "efficiency", name: "業務効率化" },
  { slug: "news", name: "お知らせ" },
] as const;

export type ColumnCategory = (typeof columnCategories)[number];

export function getCategoryBySlug(slug: string): ColumnCategory | undefined {
  return columnCategories.find((category) => category.slug === slug);
}

export function getCategoryByName(name: string): ColumnCategory | undefined {
  return columnCategories.find((category) => category.name === name);
}
