# チャットウィジェット（FAQ ベース）

2026-09-21 更新。外部の AI（OpenAI API）は使わず、`data/faq.json` の中から近い質問を探して回答する方式に変更した。
旧方式（OpenAI Responses API を PHP で中継）のファイルは `docs/archive/chatbot-openai/` に保管してある。

## 仕組み

- **FAQ ボタン**（`showAsButton: true` の項目）を押すと、その `answer` をそのまま表示し、続けて「他にお困りごとはありますか？」とボタン一覧を再表示する
- **自由入力**（50文字まで）は `lib/faq-search.ts` がブラウザ内で FAQ と照合する
  - 文字の2文字組（バイグラム）の重なりで近さを計算し、`keywords`（言い換え・関連語）が含まれていれば加点
  - 近さが高い（0.6 以上）→ その回答をそのまま表示
  - そこそこ近い（0.25 以上）→ 近い質問を最大3件ボタンで提示して選んでもらう
  - 見つからない → お問い合わせフォームへ案内
- サーバー処理・API キー・課金・ログはなし。会話は sessionStorage にだけ残る（タブを閉じると消える）

## FAQ の直し方

`data/faq.json` を編集して `npm run build`。1 件の形式：

```json
{
  "id": "price",
  "question": "料金はどのくらいかかりますか？",
  "buttonLabel": "料金の目安",
  "answer": "回答文",
  "keywords": ["料金", "値段", "いくら"],
  "showAsButton": true,
  "fixedAnswerOnly": true,
  "source": "根拠のメモ（サイトには出ない）"
}
```

- `keywords` は自由入力で拾いたい言い方を並べる。訪問者が使いそうな言葉（「いくら」「タダ」など）を足すほど当たりやすくなる
- `answer` が `【要確認` で始まる項目は FAQ ページにもチャットにも出ない
- `fixedAnswerOnly` は旧方式（AI）用の印。今は動作に影響しないが、料金・契約条件の目印として残している

## 関連ファイル

| ファイル | 内容 |
|---|---|
| `data/faq.json` | FAQ の正データ（FAQページとチャットが共通で参照） |
| `data/faq.ts` | faq.json の読み込みと型 |
| `data/chat.ts` | ウィジェットの文言・上限値 |
| `lib/faq-search.ts` | 自由入力と FAQ の照合 |
| `components/chat/ChatWidget.tsx` | ウィジェット本体 |
| `components/chat/chat-storage.ts` | sessionStorage の読み書き |
