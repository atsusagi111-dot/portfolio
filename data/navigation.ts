export type NavItem = {
  href: string;
  label: string;
  /** 英字ラベル（フッターなどの装飾用） */
  en: string;
};

// ヘッダーのタブ。お問い合わせはCTAボタンとして別に常時表示する
export const mainNav: NavItem[] = [
  { href: "/services/", label: "サービス内容", en: "Service" },
  { href: "/works/", label: "実績", en: "Works" },
  { href: "/flow/", label: "ご依頼の流れ", en: "Flow" },
  { href: "/profile/", label: "プロフィール", en: "Profile" },
  { href: "/column/", label: "コラム", en: "Column" },
];

export const contactNav: NavItem = {
  href: "/contact/",
  label: "お問い合わせ",
  en: "Contact",
};

// フッター（サイトマップ型）。全ページへのリンクを置く
export const footerNav: { heading: string; items: { href: string; label: string }[] }[] = [
  {
    heading: "Service",
    items: [
      { href: "/services/", label: "サービス内容・料金目安" },
      { href: "/works/", label: "実績" },
      { href: "/flow/", label: "ご依頼の流れ" },
      { href: "/flow/#faq", label: "よくあるご質問" },
    ],
  },
  {
    heading: "About",
    items: [
      { href: "/profile/", label: "代表プロフィール" },
      { href: "/profile/#operator", label: "運営者情報" },
      { href: "/column/", label: "コラム" },
    ],
  },
  {
    heading: "Contact",
    items: [
      { href: "/contact/", label: "お問い合わせ" },
      { href: "/privacy/", label: "プライバシーポリシー" },
    ],
  },
];
