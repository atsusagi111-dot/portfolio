// 実績。「課題→対応→成果」で見せる。
// 【厳守】オーナーから提供された情報だけを書く。未提供の項目は【要素材：〇〇】のままにする。
// 2026-09-21：実績①の課題・成果、実績②（Minato Piano Atelier）、実績③（髙野養鶏場）をオーナーから提供。
// 文体は「ですます調」で統一する。

export type TechItem = { name: string };

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
  /** 複数ページを横一列に隙間なく並べて見せる画像（レポートなど）。ratio は 1 枚の「幅/高さ」 */
  strip?: {
    label: string;
    ratio: number;
    pages: { src: string; alt: string }[];
  };
  techStack: TechItem[];
  supportTools: TechItem[];
  urls: string[];
  /** 公開サイトへの導線（概要文の直下にテキストリンクとして表示） */
  siteUrl?: string;
  /** リンクの文言。未指定なら worksSection.siteLinkLabel */
  siteLinkLabel?: string;
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
      "某大手退職代行業者の紹介LPを制作しました（メール問い合わせ・メール＆LINE問い合わせの2種）。デザイン・コーディング・レスポンシブ対応・公開まで担当しました。",
    challenge:
      "集客のためアフィリエイトサイトに出稿したいものの、専用LPがなくHPのみで、知識がないため制作できない状態でした。",
    approach:
      "メール問い合わせ用と、メール＆LINE問い合わせ用の2種類のLPを制作しました。デザイン・コーディング・レスポンシブ対応・公開まで担当しました。",
    result:
      "既存のHPをもとにLPを制作・納品しました。問い合わせ導線を「メールのみ」「メール・LINEのみ」に絞った2パターンを用意することで、掲載条件の異なるメディアにも対応できるようになり、掲載先の拡大に貢献しています。",
    screenshots: [
      {
        label: "メール・LINE動線",
        src: "/images/works/lp-email-line-flow.webp",
      },
      { label: "メール動線", src: "/images/works/lp-email-flow.webp" },
    ],
    techStack: [
      { name: "Vite" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "lucide-react" },
      { name: "ESLint" },
      { name: "Render" },
    ],
    supportTools: [{ name: "Bolt.new" }],
    urls: ["https://momuri.com/lp/", "https://momuri.com/lp2/"],
  },
  {
    id: "minato-piano-atelier-hp",
    client: "Minato Piano Atelier",
    category: "HP制作",
    title: "Minato Piano Atelier｜HP制作",
    summary:
      "出張型ピアノ教室の開業にあわせてHPを新規制作しました。ドメイン取得・サーバー設定から、デザイン・コーディング・レスポンシブ対応・公開まで一貫して担当しました。",
    challenge:
      "出張型のピアノ教室を新たに始めるにあたり、教室の顔となるHPが必要になりました。富裕層向けというコンセプトを、Web上でどう表現し、どう見つけてもらうかが課題でした。",
    approach:
      "「富裕層向けの教室」というコンセプトのもと、上質感のあるデザインを設計しました。SEO・AIO（AI検索対策）・MEOを意識した構成とし、ドメイン取得からサーバー設定、公開まで対応しました。",
    result:
      "ドメイン取得から公開までをワンストップで完了しました。開業と同時に、検索・AI検索・Googleマップからの集客に対応できる土台が整いました。",
    // 画面キャプチャ・技術構成は未提供（届いたら追加）
    screenshots: [
      { label: "トップページ", src: "/images/works/minato-atelier-piano.webp" },
    ],
    techStack: [],
    supportTools: [],
    urls: ["https://atelier-minato.com/"],
    siteUrl: "https://atelier-minato.com/",
  },
  {
    id: "takano-farm-site-audit",
    client: "髙野養鶏場",
    category: "サイト診断",
    title: "髙野養鶏場｜Webサイト診断",
    summary:
      "新鮮たまごの産地直送「髙野養鶏場」様のWebサイト診断を担当しました。集客強化を目的に、表示速度やセキュリティの状態を診断し、レポートとしてご提出しました。",
    challenge:
      "集客を強化するにあたり、現在のサイトの状態を客観的に把握し、どこから手をつけるべきかを明確にする必要がありました。",
    approach:
      "サイトの表示速度やセキュリティなどを項目ごとに診断。良い点と改善点を整理し、優先度をつけた一覧としてレポートにまとめました。",
    result:
      "サイトの現状と改善の優先順位が明確に。今すぐ無料で取り組める具体的な改善策もあわせてご提案しました。",
    screenshots: [],
    // 元画像：assets-src/works/takanofarm-report-1.jpg 〜 -4.jpg（A4 縦）。差し替えは同名で上書き
    strip: {
      label:
        "診断レポートのイメージ（内容は非公開のためぼかし加工をしています）",
      ratio: 2481 / 3508,
      pages: [1, 2, 3, 4].map((n) => ({
        src: `/images/works/takanofarm-report-${n}.webp`,
        alt: `Webサイト診断レポート ${n}ページ目`,
      })),
    },
    techStack: [],
    supportTools: [],
    urls: ["https://takanofarm.jp/"],
    siteUrl: "https://takanofarm.jp/",
    siteLinkLabel: "公式HPを見る",
  },
];

export function getWork(id: string): Work | undefined {
  return works.find((work) => work.id === id);
}
