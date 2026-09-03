# Atsusagi Lab ポートフォリオサイト

Atsusagi Lab のポートフォリオ／サービス紹介サイトです。ホームページ制作・LP制作・Webシステム開発・AIチャットボット・業務自動化などのサービスを紹介する、多言語対応（i18n）の Next.js サイトです。

- **GitHub**: https://github.com/atsusagi111-dot/portfolio
- **本番URL (Vercel)**: https://portfolio-three-alpha-2lkobfo48b.vercel.app/

## 技術スタック

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- ESLint (eslint-config-next)
- デプロイ: Vercel

## ディレクトリ構成

```
app/                          # ルーティング（/, /profile, /services, /contact）、レイアウト、グローバルCSS
components/layout/            # Header, Footer, Section
components/sections/          # 各ページのセクション（Hero, Achievements, ServicesPageBody, ContactPageBody, ProcessFlow など）
components/ui/                # 汎用UI部品（Button, ServiceCard, LanguageSwitcher, RevealOnScroll など）
components/forms/ContactForm.tsx  # お問い合わせフォーム
components/i18n/LanguageProvider.tsx + lib/i18n/translations.ts  # 多言語対応
lib/hooks/                    # useIsMobile, usePrefersReducedMotion
portfolio-requirements.md     # サービス内容・ターゲット・掲載文言の要件定義
```

## セットアップ

依存パッケージをインストールします。

```bash
npm install
```

## 開発コマンド

```bash
npm run dev    # 開発サーバーを起動
npm run build  # 本番ビルド
npm run start  # 本番サーバーを起動
npm run lint   # ESLint によるコードチェック
```

`npm run dev` を実行したら、ブラウザで以下のURLにアクセスしてください。

**http://localhost:3000**

ファイルを編集すると自動的にページが更新されます。

## ページ構成

| パス | 内容 |
|------|------|
| `/` | トップページ |
| `/profile` | プロフィール |
| `/services` | サービス紹介 |
| `/contact` | お問い合わせ |

## デプロイ

このプロジェクトは [Vercel](https://vercel.com) にデプロイされています。`main` ブランチへのプッシュで自動的に本番環境に反映されます。
