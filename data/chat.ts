// チャットウィジェットの文言と設定。
// 自由入力は外部AIを使わず、data/faq.json の中から近い質問を探して回答する。

export const chat = {
  launcherLabel: "チャットを開く",
  launcherCloseLabel: "チャットを閉じる",
  dialogLabel: "ご質問チャット",
  title: "ご質問はこちら",
  note: "よくある質問をもとに自動で回答します。正確な内容はお問い合わせにてご確認ください。",
  welcome:
    "ATSUSAGI LABへのご質問にお答えします。下のボタンから選ぶか、ご質問を入力してください。",
  faqHeading: "よくある質問から選ぶ",
  /** 回答のあとに再度ボタンを出すときの見出し */
  faqAgain: "他にお困りごとはありますか？",
  /** 自由入力に近い質問が複数あるときの見出し */
  candidatesHeading: "こちらのご質問に近いものをお選びください",
  /** 近い質問が見つからなかったとき */
  noMatch:
    "申し訳ありません。そのご質問にはこちらでお答えできる内容が見つかりませんでした。お問い合わせフォームからご連絡いただければ、担当よりご返信いたします。",
  faqLink: { href: "/flow/#faq", label: "よくある質問ページを見る →" },
  contactLink: { href: "/contact/", label: "お問い合わせフォームへ →" },
  placeholder: "ご質問を入力（50文字まで）",
  send: "送信",
  tooLong: "ご質問は50文字以内でご入力ください。",
  /** 回答するうさぎ（ボットのアイコン）。assets-src/rabbit/rabbit-front.png */
  botAvatar: "/images/rabbit/rabbit-front.webp",
  /** ランチャーに使う丸ロゴ。assets-src/logo/logo-circle.png */
  launcherLogo: "/images/logo/logo-circle.webp",
  /** 初回訪問時にパネルを開いた状態にするか（PC のみ。スマホは画面を覆うため閉じた状態で始める） */
  openByDefaultOnDesktop: true,
  maxInputLength: 50,
};
