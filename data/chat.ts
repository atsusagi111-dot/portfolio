// AIチャットウィジェットの文言と設定。

export const chat = {
  launcherLabel: "チャットを開く",
  launcherCloseLabel: "チャットを閉じる",
  dialogLabel: "ご質問チャット",
  title: "ご質問はこちら",
  note: "AIによる自動回答です。正確な内容はお問い合わせにてご確認ください。",
  welcome:
    "ATSUSAGI LABへのご質問にお答えします。下のボタンから選ぶか、ご質問を入力してください。",
  faqHeading: "よくある質問",
  faqLink: { href: "/flow/#faq", label: "よくある質問ページを見る →" },
  contactLink: { href: "/contact/", label: "お問い合わせフォームへ →" },
  placeholder: "ご質問を入力（300文字まで）",
  send: "送信",
  typing: "入力中…",
  error: "ただいま回答できません。お問い合わせフォームをご利用ください。",
  rateLimited:
    "短時間にたくさんのご質問をいただいたため、しばらく時間をおいてからお試しください。お急ぎの場合はお問い合わせフォームをご利用ください。",
  sessionLimit:
    "このチャットでお答えできる回数の上限に達しました。続きはお問い合わせフォームからお気軽にご連絡ください。",
  tooLong: "ご質問は300文字以内でご入力ください。",
  /** 開発サーバー（PHPが動かない）で自由入力したときのダミー回答 */
  devReply:
    "（開発環境のためAIには接続していません。本番ではここにAIの回答が表示されます）",
  /** 回答するうさぎ（ボットのアイコン）。assets-src/rabbit/rabbit-front.png */
  botAvatar: "/images/rabbit/rabbit-front.webp",
  botName: "ATSUSAGI LAB",
  /** ランチャーに使う丸ロゴ。assets-src/logo/logo-circle.png */
  launcherLogo: "/images/logo/logo-circle.webp",
  /** 初回訪問時にパネルを開いた状態にするか（PC のみ。スマホは画面を覆うため閉じた状態で始める） */
  openByDefaultOnDesktop: true,
  /** 中継エンドポイント（ConoHa WING 上のPHP）。public/chat/chat.php */
  endpoint: "/chat/chat.php",
  maxInputLength: 300,
  maxFreeMessages: 15,
  /** サーバーへ送る会話履歴の往復数 */
  historyTurns: 3,
};
