// content/column/*.md を読み込み、一覧・記事ページ・RSS・sitemap に渡す。
// すべてビルド時に実行される（静的エクスポート）。
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Element, ElementContent, Root } from "hast";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { columnCategories, columnSection, getCategoryByName, type ColumnCategory } from "@/data/column";

const COLUMN_DIR = path.join(process.cwd(), "content", "column");

export type ColumnMeta = {
  slug: string;
  title: string;
  description: string;
  /** YYYY-MM-DD */
  date: string;
  updated?: string;
  category: ColumnCategory;
  tags: string[];
  thumbnail: string;
};

export type TocItem = { id: string; text: string; level: 2 | 3 };

export type ColumnArticle = ColumnMeta & { html: string; toc: TocItem[] };

function toDateString(value: unknown, file: string, field: string): string {
  // YAMLの日付は Date として読み込まれるため、YYYY-MM-DD の文字列にそろえる
  const text = value instanceof Date ? value.toISOString().slice(0, 10) : String(value ?? "");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) {
    throw new Error(`${file}: frontmatter の ${field} は YYYY-MM-DD 形式で書いてください`);
  }
  return text;
}

function parseMeta(file: string, data: Record<string, unknown>): ColumnMeta {
  const slug = file.replace(/\.md$/, "");
  if (!/^[a-z0-9-]+$/.test(slug)) {
    throw new Error(`${file}: ファイル名（URLになります）は半角英小文字・数字・ハイフンだけにしてください`);
  }
  if (slug === "page" || slug === "category") {
    throw new Error(`${file}: 「page」「category」は一覧ページのURLで使うため、記事のファイル名にできません`);
  }
  for (const field of ["title", "description", "date", "category"]) {
    if (!data[field]) throw new Error(`${file}: frontmatter に ${field} がありません`);
  }
  const category = getCategoryByName(String(data.category));
  if (!category) {
    const names = columnCategories.map((c) => c.name).join(" / ");
    throw new Error(`${file}: category「${data.category}」は未登録です（${names}）`);
  }
  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    date: toDateString(data.date, file, "date"),
    updated: data.updated ? toDateString(data.updated, file, "updated") : undefined,
    category,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    thumbnail: data.thumbnail ? String(data.thumbnail) : "/placeholder/thumbnail.svg",
  };
}

function readFiles(): { file: string; data: Record<string, unknown>; content: string }[] {
  if (!fs.existsSync(COLUMN_DIR)) return [];
  return fs
    .readdirSync(COLUMN_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(COLUMN_DIR, file), "utf8"));
      return { file, data, content };
    })
    .filter(({ data }) => data.draft !== true);
}

/** 公開中の全記事（新しい順） */
export function getAllColumns(): ColumnMeta[] {
  return readFiles()
    .map(({ file, data }) => parseMeta(file, data))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug)));
}

export function getColumnsByCategory(categorySlug: string): ColumnMeta[] {
  return getAllColumns().filter((column) => column.category.slug === categorySlug);
}

function textOf(node: ElementContent): string {
  if (node.type === "text") return node.value;
  if (node.type === "element") return node.children.map(textOf).join("");
  return "";
}

/** 見出し（h2・h3）を集めて目次にする。id は rehype-slug が付けたものを使う */
function collectToc(toc: TocItem[]) {
  return () => (tree: Root) => {
    const walk = (nodes: (Root["children"][number] | ElementContent)[]) => {
      for (const node of nodes) {
        if (node.type !== "element") continue;
        const element = node as Element;
        if (element.tagName === "h1") {
          throw new Error("記事本文に「# 見出し」（h1）は使えません。h1 は記事タイトルに使うため、本文は「## 」から始めてください");
        }
        if (element.tagName === "h2" || element.tagName === "h3") {
          toc.push({
            id: String(element.properties.id),
            text: textOf(element),
            level: element.tagName === "h2" ? 2 : 3,
          });
        }
        walk(element.children);
      }
    };
    walk(tree.children);
  };
}

export async function getColumn(slug: string): Promise<ColumnArticle | undefined> {
  const entry = readFiles().find(({ file }) => file === `${slug}.md`);
  if (!entry) return undefined;

  const toc: TocItem[] = [];
  const html = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(collectToc(toc))
    .use(rehypeStringify)
    .process(entry.content);

  return { ...parseMeta(entry.file, entry.data), html: String(html), toc };
}

/** 関連記事：同じカテゴリ → 共通タグの多い順 → 新しい順 */
export function getRelatedColumns(current: ColumnMeta, limit = 3): ColumnMeta[] {
  return getAllColumns()
    .filter((column) => column.slug !== current.slug)
    .map((column) => ({
      column,
      score:
        (column.category.slug === current.category.slug ? 10 : 0) +
        column.tags.filter((tag) => current.tags.includes(tag)).length,
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ column }) => column);
}

export function pageCount(total: number): number {
  return Math.max(1, Math.ceil(total / columnSection.perPage));
}

export function paginate<T>(items: T[], page: number): T[] {
  const start = (page - 1) * columnSection.perPage;
  return items.slice(start, start + columnSection.perPage);
}

export function formatDate(date: string): string {
  const [year, month, day] = date.split("-").map(Number);
  return `${year}年${month}月${day}日`;
}
