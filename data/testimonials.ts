// お客様の声。表示は data/site.ts の flags.showTestimonials で切り替える（初期値：非表示）。
// 【厳守】掲載許可を得た実際のお客様の声だけを書く。ダミーの人名・社名・感想文は入れない。

export type Testimonial = {
  /** 実名、または「業種＋役職」（例：製造業・代表取締役） */
  attribution: string;
  /** 依頼内容（例：ホームページ制作） */
  service: string;
  body: string;
  /** 任意。1:1。assets-src/testimonials/ に元画像を置く。なければプレースホルダー画像 */
  photo?: string;
};

export const testimonialsSection = {
  title: "お客様の声",
};

export const testimonials: Testimonial[] = [
  {
    attribution: "【要素材：お客様の実名 または 業種＋役職】",
    service: "【要素材：ご依頼内容】",
    body: "【要素材：お客様の声（100〜250字）】",
  },
];
