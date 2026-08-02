export type Service = {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  examples?: string[];
};

export const services: Service[] = [
  {
    id: "homepage",
    name: "ホームページ制作",
    shortDescription:
      "企業・店舗・個人向けのホームページ制作。スマートフォンにも対応した、見やすく使いやすいデザイン。",
    fullDescription:
      "企業・店舗・個人事業主向けに、目的に合わせたホームページを制作します。スマートフォンにも対応した、見やすく使いやすいデザインをご提供します。",
  },
  {
    id: "lp",
    name: "LP制作",
    shortDescription:
      "商品・サービスを紹介し、お問い合わせや申し込みにつなげる1ページのWebサイト制作。",
    fullDescription:
      "商品やサービスの魅力を分かりやすく伝え、お問い合わせや申し込みにつながるページを制作します。",
  },
  {
    id: "web-system",
    name: "Webシステム開発",
    shortDescription:
      "予約・顧客管理・問い合わせ管理など、業務を便利にするWebシステムの開発。",
    fullDescription:
      "予約管理・顧客管理・お問い合わせ管理など、日々の業務を効率化するオリジナルシステムを開発します。",
    examples: [
      "データ管理・予約管理システムの開発",
      "お客様の目的に合わせたオリジナルシステムの開発",
    ],
  },
  {
    id: "ai-chatbot",
    name: "AIチャットボット制作",
    shortDescription:
      "ホームページやLINEで、お客様の質問に24時間自動で回答するAIチャットボットの構築。",
    fullDescription:
      "ホームページやLINEにAIを導入し、お客様からの質問に24時間自動で回答できる仕組みを構築します。",
    examples: [
      "商品についての質問",
      "サービス内容の案内",
      "よくある質問への回答",
      "社内マニュアルの検索",
    ],
  },
  {
    id: "ai-efficiency",
    name: "AIを活用した業務効率化",
    shortDescription:
      "AIを利用して、お問い合わせ対応や情報検索などを自動化する仕組みを構築。",
    fullDescription:
      "AIを活用して、お問い合わせ対応や情報検索など、これまで人が行っていた作業を自動化します。業務の負担を減らし、より効率的な運営をサポートします。",
  },
  {
    id: "system-integration",
    name: "システム連携・業務自動化",
    shortDescription:
      "複数のサービスを連携し、データ入力・通知・情報共有などの作業を自動化。",
    fullDescription:
      "複数のサービスを連携し、データ入力や通知などの繰り返し作業を自動化します。お客様の業務に合わせたシステムを構築します。",
    examples: [
      "フォームの内容を自動で管理表へ登録",
      "LINEやメールへ自動通知",
      "AIと連携した問い合わせ対応",
      "複数のシステム間でデータを自動共有",
    ],
  },
];

export const targetAudience: string[] = [
  "LP（ランディングページ）の制作を依頼したい個人・企業",
  "ホームページを制作したい個人・企業",
  "Webシステムを開発したい個人・企業",
  "AIを活用して業務を効率化したい個人・企業",
  "ホームページやLINEで、お客様からの問い合わせに自動で対応する仕組みを作りたい方",
  "複数のサービスを連携させて、業務を自動化したい方",
  "初めてWeb制作・システム開発を依頼する方",
];
