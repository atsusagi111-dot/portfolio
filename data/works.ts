// 実績。「課題→対応→成果」で見せる。
// 【厳守】オーナーから提供された情報だけを書く。未提供の項目は【要素材：〇〇】のままにする。
// 2026-09-21：実績①の課題・成果、実績②（Minato Piano Atelier）をオーナーから提供。

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
  /** 公開サイトへの導線（タイトル直下に「サイトを見る」リンクとして表示） */
  siteUrl?: string;
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
  siteLinkLabel: "サイトを見る",
};

export const works: Work[] = [
  {
    id: "resignation-agency-lp",
    client: "某大手退職代行業者",
    category: "LP制作",
    title: "某大手退職代行業者｜LP制作",
    summary:
      "某大手退職代行業者紹介LPを制作(メール問い合わせ・メール＆LINE問い合わせの2種)。デザイン・コーディング・レスポンシブ対応・公開まで担当。",
    challenge:
      "集客のためアフィリエイトサイトに出稿したい。専用LPがなくHPのみで、知識がないため制作できない。",
    approach:
      "メール問い合わせ用と、メール＆LINE問い合わせ用の2種類のLPを制作。デザイン・コーディング・レスポンシブ対応・公開まで担当。",
    result:
      "既存のHPをもとにLPを制作・納品。問い合わせ導線を「メールのみ」「メール・LINEのみ」に絞った2パターンを用意することで、掲載条件の異なるメディアにも対応できるようになり、掲載先の拡大に貢献。",
    screenshots: [
      {
        label: "メール・LINE動線",
        src: "/images/works/lp-email-line-flow.webp",
      },
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
  {
    id: "minato-piano-atelier-hp",
    client: "Minato Piano Atelier",
    category: "HP制作",
    title: "Minato Piano Atelier｜HP制作",
    summary:
      "出張型ピアノ教室の開業にあわせてHPを新規制作。ドメイン取得・サーバー設定から、デザイン・コーディング・レスポンシブ対応・公開まで一貫して担当。",
    challenge:
      "出張型のピアノ教室を新たに始めるにあたり、教室の顔となるHPが必要に。富裕層向けというコンセプトを、Web上でどう表現し、どう見つけてもらうかが課題でした。",
    approach:
      "「富裕層向けの教室」というコンセプトのもと、上質感のあるデザインを設計。SEO・AIO（AI検索対策）・MEOを意識した構成とし、ドメイン取得からサーバー設定、公開まで対応。",
    result:
      "ドメイン取得から公開までをワンストップで完了。開業と同時に、検索・AI検索・Googleマップからの集客に対応できる土台が整いました。",
    // 画面キャプチャ・技術構成は未提供（届いたら追加）
    screenshots: [],
    techStack: [],
    supportTools: [],
    urls: ["https://atelier-minato.com/"],
    siteUrl: "https://atelier-minato.com/",
  },
];

export function getWork(id: string): Work | undefined {
  return works.find((work) => work.id === id);
}
