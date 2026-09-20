// 代表プロフィール。timeline は既存サイトの経歴をそのまま使用。
// 【厳守】経歴・資格・数値はオーナーから提供された情報だけを書く。

export type TimelineItem = {
  year: string;
  heading: string;
  body: string;
  highlight?: string;
};

export const profile = {
  title: "代表プロフィール",
  /** 表示名。コラムの著者ボックスにも使う */
  name: "【要素材：代表者の表示名】",
  role: "ATSUSAGI LAB 代表／AI開発パートナー",
  /** 1:1 の枠に表示。assets-src/profile/profile.(png|jpg) を差し替える */
  photo: "/images/profile/profile.webp",
  photoAlt: "ATSUSAGI LAB プロフィール写真",
  /** コラムの著者ボックス用の短い紹介（既存の経歴「NOW」の文言） */
  shortBio:
    "Web・SEOで培った「ユーザーの課題を捉える力」と、AI・Web開発の技術を掛け合わせ、課題整理からAIを活用したシステム開発まで支援。",
  messageTitle: "仕事への姿勢",
  message: ["【要素材：仕事への姿勢・代表メッセージ（300〜500字）】"],
  specialtiesTitle: "専門領域",
  specialties: [
    {
      name: "【要素材：専門領域1】",
      description: "【要素材：専門領域1の補足（60字程度）】",
    },
    {
      name: "【要素材：専門領域2】",
      description: "【要素材：専門領域2の補足（60字程度）】",
    },
    {
      name: "【要素材：専門領域3】",
      description: "【要素材：専門領域3の補足（60字程度）】",
    },
  ],
  /** 保有資格。空配列ならセクションごと非表示 */
  qualificationsTitle: "保有資格",
  qualifications: [] as string[],
  timelineTitle: "経歴",
};

export const timeline: TimelineItem[] = [
  {
    year: "2017",
    heading: "Webライターとして活動開始",
    body: "クラウドソーシングサイトでライティング案件の受注を開始。Webコンテンツ制作を通じて、ユーザー視点で情報を整理し、価値を届ける力を培う。",
  },
  {
    year: "2024",
    heading: "SEOライター｜ベンチャー企業",
    body: "SEO記事の企画・構成・執筆に加え、オウンドメディアの運営を担当。コンテンツ戦略から記事制作まで携わり、検索結果上位の記事を複数制作。通常平均約300PVのサイトで、月間約7,000PVを生み出す記事を制作。",
    highlight: "月間約300PV → 約7,000PV",
  },
  {
    year: "2026",
    heading: "AIエンジニアとしての活動を開始",
    body: "AI・Web開発の学習を開始。AIチャットボットやWebアプリケーション、業務効率化システムなど、AIを活用した開発に取り組む。同年、現職企業のLP制作を担当。企画・構成から実装、公開まで、実際の企業サービスをWeb上で形にする経験を積む。",
  },
  {
    year: "NOW",
    heading: "AI開発パートナー｜ATSUSAGI LAB",
    body: "Web・SEOで培った「ユーザーの課題を捉える力」と、AI・Web開発の技術を掛け合わせ、課題整理からAIを活用したシステム開発まで支援。",
  },
];
