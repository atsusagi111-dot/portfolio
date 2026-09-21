// 自由入力の質問に近い FAQ をブラウザ内で探す（外部APIは使わない）。
// 日本語は単語の区切りがないため、文字の2文字組（バイグラム）の重なりで近さを測る。
// faq.json の keywords（言い換え・関連語）が含まれていれば加点する。
import type { FaqItem } from "@/data/faq";

export type FaqMatch = { item: FaqItem; score: number };

/** 表記ゆれをそろえる：全角英数→半角、大文字→小文字、空白と記号を除く */
export function normalize(text: string): string {
  return text
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\s　。、．，,.!！?？「」『』（）()【】・:：;；\-ー〜~]/g, "");
}

/** 質問の意味に関係しない言い回し（先に長いものから消す） */
const STOP_PHRASES = [
  "教えてください",
  "教えて",
  "ください",
  "できますか",
  "できるか",
  "できる",
  "でしょうか",
  "ですか",
  "ますか",
  "について",
  "したいです",
  "したい",
  "ほしい",
  "んですが",
  "のですが",
  "ですが",
  "ます",
  "です",
];
const STOP_CHARS = /[はをがのにでとへもやか]/g;

/** 言い回しと助詞を取り除き、意味のある語だけにする */
export function stripFiller(normalized: string): string {
  let t = normalized;
  for (const phrase of STOP_PHRASES) t = t.split(phrase).join("");
  return t.replace(STOP_CHARS, "");
}

function bigrams(text: string): Set<string> {
  const out = new Set<string>();
  for (let i = 0; i < text.length - 1; i++) out.add(text.slice(i, i + 2));
  return out;
}

/** 質問文と FAQ の近さを 0〜1 で返す */
function similarity(query: string, target: string): number {
  const a = bigrams(query);
  const b = bigrams(target);
  if (a.size === 0 || b.size === 0) return 0;
  let hit = 0;
  for (const g of a) if (b.has(g)) hit++;
  // 質問側の文字組がどれだけ FAQ に含まれているか（短い質問でも拾えるよう質問側を分母にする）
  return hit / a.size;
}

/**
 * 近い順に FAQ を返す。
 * score = 質問文と「質問＋キーワード」の類似度に、キーワード完全一致の加点を足したもの
 */
export function searchFaq(query: string, items: FaqItem[]): FaqMatch[] {
  const raw = normalize(query);
  const q = stripFiller(raw);
  if (q.length < 2) return [];

  return items
    .map((item) => {
      const keywords = (item.keywords ?? []).map(normalize);
      const haystack =
        stripFiller(normalize(item.question)) + keywords.join("");
      let score = similarity(q, haystack);
      // キーワードがそのまま含まれていれば強く加点（例：「キャンセル」「支払い」）
      for (const k of keywords) {
        if (k.length >= 2 && raw.includes(k)) score += 0.5;
      }
      // 回答文にも含まれる語があれば少し加点
      score += similarity(q, normalize(item.answer)) * 0.2;
      return { item, score };
    })
    .filter((m) => m.score > 0)
    .sort((x, y) => y.score - x.score);
}

/** 自信を持って答えられる下限と、候補として提示する下限 */
export const FAQ_MATCH = {
  confident: 0.6,
  candidate: 0.25,
  maxCandidates: 3,
} as const;
