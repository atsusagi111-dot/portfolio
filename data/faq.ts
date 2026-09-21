// よくあるご質問。正データは data/faq.json（FAQページ・チャットのボタン・AIへの指示文が共通で参照する）。
// 回答が【要確認】のままの項目は、ページにもチャットにも出さない。
import { isPlaceholder } from "@/components/ui/MaterialText";
import faqJson from "./faq.json";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  /** チャットのボタンに表示する短い文言。未指定なら question */
  buttonLabel?: string;
  /** チャットの「よくある質問」ボタンに出す */
  showAsButton?: boolean;
  /** AIが言い換えずに answer をそのまま返す項目（料金・契約条件など） */
  fixedAnswerOnly?: boolean;
  /** 根拠にしたファイル */
  source?: string;
};

export const faqSection = {
  title: "よくあるご質問",
};

/** 【要確認】が残っている項目を除いた一覧 */
export const faqItems: FaqItem[] = (faqJson as FaqItem[]).filter(
  (item) => !isPlaceholder(item.answer) && !item.answer.startsWith("【要確認"),
);

/** チャットの「よくある質問」ボタンに出す項目 */
export const faqButtons: FaqItem[] = faqItems.filter(
  (item) => item.showAsButton,
);
