// 実績。「課題→対応→成果」で見せる。
// 【厳守】オーナーから提供された情報だけを書く。未提供の項目は【要素材：〇〇】のままにする。

export type TechItem = { name: string; note: string };

export type Work = {
  id: string;
  /** クライアント表記（社名を伏せる場合は「某〇〇業者」など） */
  client: string;
  category: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string;
  result: string;
  /** 画像は 1:1 の枠に表示（assets-src/works/ に元画像を置く） */
  screenshots: { label: string; src: string }[];
  techStack: TechItem[];
  supportTools: TechItem[];
  urls: string[];
};

export const worksSection = {
  title: "実績",
  description: "これまでに担当した制作・開発の一部をご紹介します。",
  challengeLabel: "課題",
  approachLabel: "対応",
  resultLabel: "成果",
  techStackLabel: "技術構成",
  supportToolsLabel: "補助ツール",
  screenshotsLabel: "制作画面",
  urlLabel: "制作URL",
};

export const works: Work[] = [
  {
    id: "resignation-agency-lp",
    client: "某大手退職代行業者",
    category: "LP制作",
    title: "某大手退職代行業者｜LP制作",
    summary:
      "某大手退職代行業者紹介LPを制作(メール問い合わせ・メール＆LINE問い合わせの2種)。デザイン・コーディング・レスポンシブ対応・公開まで担当。",
    challenge: "【要素材：ご依頼前にお客様が抱えていた課題】",
    approach:
      "メール問い合わせ用と、メール＆LINE問い合わせ用の2種類のLPを制作。デザイン・コーディング・レスポンシブ対応・公開まで担当。",
    result: "【要素材：公開後の成果（数値は事実のみ。定性的な変化でも可）】",
    screenshots: [
      { label: "メール・LINE動線", src: "/images/works/lp-email-line-flow.webp" },
      { label: "メール動線", src: "/images/works/lp-email-flow.webp" },
    ],
    techStack: [
      { name: "Vite", note: "開発を高速に進めるためのツール" },
      { name: "React", note: "部品を組み合わせて画面を作るツール" },
      { name: "TypeScript", note: "バグを防ぎやすくする言語" },
      {
        name: "Tailwind CSS",
        note: "あらかじめ用意されたスタイルを組み合わせてCSSを書く手間を減らすツール",
      },
      { name: "lucide-react", note: "Webサイトで使えるアイコン集" },
      { name: "ESLint", note: "コードチェックツール" },
      { name: "Render", note: "インターネット上へ公開するサービス" },
    ],
    supportTools: [
      { name: "Bolt.new", note: "AIとの対話でページを作成するツール" },
    ],
    urls: ["https://momuri.com/lp/", "https://momuri.com/lp2/"],
  },
];

export function getWork(id: string): Work | undefined {
  return works.find((work) => work.id === id);
}
