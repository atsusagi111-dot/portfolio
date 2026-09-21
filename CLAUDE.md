@AGENTS.md

# プロジェクト概要

- ATSUSAGI LAB 公式サイト。中小企業の経営者向けコーポレートサイト
- Next.js製（App Router / React 19 / TypeScript / Tailwind CSS v4）。日本語のみ
- 公開先は ConoHa WING（共用レンタルサーバー。Node.js実行不可、Apache、PHP利用可）
- GitHub: https://github.com/atsusagi111-dot/portfolio （リニューアル作業は `renewal` ブランチ。`main` へのpushはVercelに自動デプロイされるので注意）

# 絶対に守るルール

## 1. 静的エクスポート前提

- 公開先はNode.jsが動かないため、`output: 'export'` で運用する
- APIルート、Server Actions、middleware、next/image の自動最適化など、サーバー実行が必要な機能は使わない
- `trailingSlash: true` を維持する（Apacheでの直接URLアクセスのため）
- 変更後は build が通り、`out/` が生成されることを確認する

## 2. 実績・数値・お客様の声を創作しない

- 実績、数値、お客様の声、取引先名、経歴、資格は、オーナーが提供した情報だけを使う
- 情報がない箇所は `【要素材：〇〇】` のプレースホルダーにし、推測で埋めない
- 理由：虚偽の実績は信用を失い、景品表示法上の問題にもなるため

## 3. 参考サイトの流用禁止

- 参考サイト（consulting.crowdworks.co.jp / trail-inc.jp）から学ぶのは「ページ構成」と「信頼要素の置き方」だけ
- 文言、画像、イラスト、配色、レイアウトの丸写しはしない

# コミット・プッシュ

- コミットと push は、オーナーが明示的に指示したときだけ行う（自動コミットのフックは無効化済み）

# 素材の扱い

- 顔写真、経歴、実績の詳細、お客様の声、運営者情報は後から提供される
- 未提供の素材は `docs/materials.md` の一覧で管理し、受け取ったら反映して一覧を更新する
- 差し替え対象のテキスト・表示フラグは `data/` 配下に集約する（コンポーネントに文言を直書きしない）
- 未確定の設定値（本番ドメイン、メールアドレス等）は `【後で指定】` と明記する

# ディレクトリ構成

- `app/` — ルーティング（各ページ、`sitemap.ts`、`robots.ts`、`feed.xml/`、`not-found.tsx`）
- `components/` — `layout/`（Header, Footer）、`sections/`、`ui/`、`column/`、`seo/`
- `data/` — サイト設定・表示フラグ・サービス・実績・プロフィール・運営者情報・FAQ などの掲載データ
- `content/column/*.md` — コラム記事（追加手順は `docs/column.md`）
- `lib/` — コラムのMarkdown処理など
- `public/` — 画像、`.htaccess`、`contact/send.php`（お問い合わせ送信。ConoHa上のPHPで動作）
- `docs/` — `materials.md`（素材一覧）、`deploy.md`（デプロイ手順）、`column.md`（記事追加手順）、`chatbot.md`（チャットウィジェットの仕組み）

# コマンド

```bash
npm run dev    # 開発サーバー（http://localhost:3000）
npm run build  # 本番ビルド（静的エクスポート）。出力先は out/
npm run lint   # ESLint
```

- `out/` の中身をそのままサーバーへアップロードする（手順は `docs/deploy.md`）
- `next start` は静的エクスポートでは使えない。`out/` の確認は `npx serve out` など静的サーバーで行う
- 本番ドメインは環境変数 `NEXT_PUBLIC_SITE_URL` で指定する（canonical・OGP・sitemap・RSSに反映）
