// 運営者情報。show が false の行は表示されない（切り替えは data/site.ts の flags）。
import { flags } from "./site";

export type OperatorRow = {
  label: string;
  value: string;
  show: boolean;
  /** 値をリンクにする場合のサイト内パス */
  href?: string;
};

export const operatorSection = {
  title: "運営者情報",
};

export const operatorRows: OperatorRow[] = [
  { label: "屋号", value: "ATSUSAGI LAB", show: true },
  {
    label: "代表者",
    value: "平良敦子",
    show: flags.showOperatorRepresentative,
  },
  {
    label: "所在地",
    value: "【要素材：所在地（公開範囲を決めて記載）】",
    show: flags.showOperatorAddress,
  },
  {
    label: "設立",
    value: "【要素材：設立（開業）年月】",
    show: flags.showOperatorEstablished,
  },
  {
    label: "事業内容",
    value:
      "ホームページ制作／LP制作／Webシステム開発／AIチャットボット制作／AIを活用した業務効率化／システム連携・業務自動化",
    show: true,
  },
  {
    label: "電話番号",
    value: "【要素材：電話番号】",
    show: flags.showOperatorPhone,
  },
  {
    label: "メールアドレス",
    value: "【要素材：メールアドレス】",
    show: flags.showOperatorEmail,
  },
  {
    label: "ご連絡方法",
    value: "お問い合わせフォームよりご連絡ください",
    show: true,
    href: "/contact/",
  },
];
