# AIチャットボット（ウィジェット）実装方針

2026-09-21 調査。オーナー承認後に実装する。

## 1. 現状の構成

| 項目 | 内容 |
|---|---|
| フレームワーク | Next.js 16（App Router / React 19 / TypeScript / Tailwind CSS v4）。`output: "export"` の静的エクスポート |
| ホスティング | 本番は ConoHa WING（Apache + PHP 8.x、Node.js 不可）。Vercel は旧サイトのプレビュー用で、公開後に停止予定 |
| 既存のサーバー処理 | `public/contact/send.php`（お問い合わせ送信）。Origin/Referer チェック、IP ロック、`config.php` を `.htaccess` で閲覧禁止、という前例あり |
| FAQ の実装 | `data/faq.ts` の配列を `components/sections/Faq.tsx` が `details` 要素で描画。FAQPage 構造化データも同じ配列から生成 |
| 固定表示の要素 | なし（ページトップへ戻るボタン・固定CTAは未実装）。ヘッダーは `sticky` で `z-40` |
| デザイントークン | `app/globals.css` の `--color-navy` / `--color-gold` / `--shadow-card` 等。角丸は `rounded-2xl`、英字は `font-en` |

## 2. 実装方針

### バックエンド：PHP（ConoHa WING）

- `public/chat/chat.php` … 中継エンドポイント。POST の JSON を受け、OpenAI Responses API を `curl` で呼び出して JSON を返す
- APIキーの置き場所（優先順）
  1. 環境変数 `OPENAI_API_KEY` / `OPENAI_MODEL`（`getenv`。ConoHa の `.htaccess` `SetEnv` でも可）
  2. 公開ディレクトリの外の設定ファイル `../atsusagi-private/chat-config.php`（`DOCUMENT_ROOT` の1つ上。サーバーに手動で置く）
  3. 保険として `public/chat/config.php`（`.htaccess` で閲覧禁止。リポジトリには `config.php.example` のみ置き、`config.php` は `.gitignore` に追加）
- レート制限・質問ログも公開ディレクトリの外（上記 `atsusagi-private/`）に保存。書けない場合は `sys_get_temp_dir()` にフォールバック
- 開発環境（`npm run dev`）では PHP が動かないため、フォームと同様に「FAQボタンは動く／自由入力はダミー応答」にする

### フロントエンド：既存スタックで自作

- `components/chat/ChatWidget.tsx`（client component）。`app/layout.tsx` の末尾に1行追加するだけ
- 状態と履歴は `sessionStorage`（キー `atsusagi-chat`）。ページ遷移後も復元
- `z-50`（ヘッダー `z-40` より上）。ランチャー 56px、画面端から 20px

### FAQ データの一元化

- `data/faq.json` を正とし、`data/faq.ts` はそこから読み込んで既存の型で再エクスポート（`Faq.tsx` は無変更）
- チャットのボタン：`showAsButton: true` の項目（5件）。表示文言は `buttonLabel`（20字以内）、なければ `question`
- AIへの指示文：`chat.php` がビルド後の `out/data/faq.json` … ではなく、`public/chat/faq.json` をビルド時にコピーして参照する（`scripts/` に1行追加）
- 【要確認】のままの項目は、FAQページには表示せず、AIにも渡さない（フィルタで除外）

### モデルの候補（OpenAI 公式料金ページ、2026-09-21 時点、100万トークンあたり・USD）

| モデル | 入力 | キャッシュ済み入力 | 出力 | 備考 |
|---|---|---|---|---|
| **gpt-5-nano（推奨）** | $0.05 | $0.005 | $0.40 | 最安。推論モデルなので `reasoning.effort: "minimal"` を指定 |
| gpt-4.1-nano | $0.10 | $0.025 | $0.40 | 推論なし。設定が簡単だが世代が古い |
| gpt-4o-mini | $0.15 | $0.075 | $0.60 | 推論なし |
| gpt-5-mini | $0.25 | $0.025 | $2.00 | 精度重視ならこちら |
| gpt-5.4-nano | $0.20 | $0.02 | $1.25 | 新世代だが nano としては割高 |

試算：システムプロンプト＋FAQ ≈ 4,000 トークン（大半がキャッシュ対象）、回答 ≈ 300 トークン → 1回あたり約 $0.0003（0.05円前後）。月1,000回でも 50円程度。

### API の使い方（公式ドキュメント確認済み）

- Responses API `POST /v1/responses`。`instructions`（固定文）＋ `input`（会話履歴＋質問）
- 出力上限：`max_output_tokens: 400`
- 推論最小：`reasoning: { effort: "minimal" }`（gpt-5 系）。モデルが非対応なら省略できるよう設定で切替
- プロンプトキャッシュ：先頭の固定部分（instructions と FAQ）が 1,024 トークン以上で同一なら自動適用。`prompt_cache_key` に固定値を渡してルーティングを安定させる
- `store: false`（OpenAI 側に会話を保存しない）

### コスト・セキュリティ・ログ

- 履歴は直近3往復、入力300文字（フロント・サーバー両方で検証）
- レート制限：IPごとに 1分5回・1日30回（IPはハッシュ化してファイル名に使い、平文では保存しない）
- 1セッション15回まで（フロントでカウント、超えたらフォームへ案内）
- Origin/Referer が自ドメインでなければ 403。CORS ヘッダーは付けない（同一オリジンのみ）
- 回答は React のテキストノードとして描画（`innerHTML` 不使用）。リンクは固定の1本だけ
- ログ：`{"at":"2026-09-21T12:00:00+09:00","q":"質問文"}` を1行JSONで追記。IPやUAは記録しない

## 3. ファイル構成（予定）

```
data/faq.json                     FAQ の正データ（新規）
data/faq.ts                       faq.json を読み込むよう変更
components/chat/ChatWidget.tsx    ウィジェット本体（新規）
components/chat/chat-storage.ts   sessionStorage の読み書き（新規）
app/layout.tsx                    <ChatWidget /> を1行追加
public/chat/chat.php              中継エンドポイント（新規）
public/chat/config.php.example    設定のひな形（新規）。config.php は .gitignore
public/chat/faq.json              ビルド時に data/faq.json からコピー
public/.htaccess                  chat/config.php と chat/*.log の閲覧禁止を追記
scripts/copy-faq.mjs              コピー処理（新規、prebuild に追加）
docs/chatbot.md                   この文書＋運用手順
data/privacy.ts                   チャットの質問ログについて追記（文案は別途提示）
```
