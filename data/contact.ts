// お問い合わせページ・フォームの文言（既存サイトの文言をそのまま使用）。

export const contact = {
  title: "お問い合わせ",
  description:
    "ご相談・お見積もりのご依頼はこちらのフォームからお気軽にお送りください。",
  nameLabel: "お名前",
  namePlaceholder: "山田 太郎",
  companyLabel: "会社名・屋号",
  companyPlaceholder: "株式会社〇〇",
  emailLabel: "メールアドレス",
  emailPlaceholder: "you@example.com",
  messageLabel: "お問い合わせ内容",
  messagePlaceholder: "ご相談内容やご要望をご記入ください",
  privacyNote: "に同意のうえ、送信してください。",
  submit: "送信する",
  submitting: "送信中...",
  error: "送信に失敗しました。お手数ですが、時間をおいて再度お試しください。",
  thanksTitle: "お問い合わせありがとうございます",
  thanksBody:
    "お問い合わせありがとうございます。内容を確認のうえ、担当より折り返しご連絡いたします。",
  /** 送信先（ConoHa WING 上のPHP）。public/contact/send.php */
  endpoint: "/contact/send.php",
};
