# ATSUSAGI LAB 公式サイト

中小企業の経営者向けのコーポレートサイトです（日本語のみ）。
Next.js の**静的エクスポート**で作っており、最終的な公開先は ConoHa WING（共用レンタルサーバー）です。

- **GitHub**: https://github.com/atsusagi111-dot/portfolio （公開リポジトリ）
- **現在の本番（旧サイト・Vercel）**: https://portfolio-three-alpha-2lkobfo48b.vercel.app/ … `main` ブランチ
- **リニューアル版のプレビュー（Vercel）**: `renewal` ブランチを push するたびに自動で作られます。URL は GitHub のコミット横の ✓ マーク、または Vercel の管理画面 https://vercel.com/atsu4/portfolio （Deployments → Preview）で確認できます。閲覧には Vercel へのログインが必要です
- **最終的な公開先（ConoHa WING）**: 【後で指定】atsusagi-lab.◯◯

> ⚠️ **`main` ブランチへ push／マージすると、Vercel の本番（旧サイト）が新サイトに置き換わります。**
> 新サイトのお問い合わせフォームは ConoHa 上の PHP で動くため、Vercel 上では送信できません。
> 素材とドメインが揃うまでは `renewal` ブランチで作業してください。

---

## 📌 明日やること

### 1. 決めること（決まらないと先に進めないもの）

- [ ] **本番ドメインの末尾** … `atsusagi-lab` の後ろを `.com` / `.jp` / `.co.jp` などから決めて、取得する
- [ ] **お問い合わせの受信アドレス** … フォームの内容をどのメールアドレスで受け取るか
- [ ] **送信元アドレス** … ドメイン取得後、ConoHa で作る独自ドメインのアドレス（例：`info@ドメイン`）
- [ ] **メールアドレスを GitHub に載せるか** … このリポジトリは**公開**なので、`public/contact/config.php` に書いたアドレスは誰でも見られます。
      載せたくない場合は、`config.php` だけサーバーに手動で置く運用にする（`docs/deploy.md` の 5 を参照）か、リポジトリを非公開にする
- [ ] **運営者情報の公開範囲** … 代表者名（`data/operator.ts` に「平良敦子」を入れてあります。運営者情報として表示するかは未決定）、所在地（都道府県まで／市区町村まで／全部）、電話番号・メールアドレス、設立年月を、それぞれ載せるかどうか
- [x] ~~FAQ「相談や見積もりに費用はかかりますか？」の回答~~ … 「いいえ。無料でご相談いただけます。」（反映済）
- [x] ~~お客様の声を載せるか~~ … **載せない**（2026-09-21 決定。`showTestimonials` は `false` のまま）
- [x] ~~旧サイト（Vercel）の扱い~~ … **ConoHa で公開した後、停止する**（2026-09-21 決定。手順は下の 4 と `docs/deploy.md` の 4）

### 2. 確認すること（私が下書きした文章。事実と違う・言い回しを変えたい箇所を教えてください）

プレビュー、または `npm run dev` → http://localhost:3000 で確認できます（Claude に「dev サーバーを起動して」と頼めば起動します）。

- [ ] ホーム「こんなお悩みはありませんか」（6項目） … `data/home.ts`
- [ ] 各サービスの「こんな課題をお持ちの方に」（6サービス×3項目） … `data/services.ts`
- [ ] よくあるご質問（11問） … `data/faq.ts`
- [ ] プライバシーポリシー … `data/privacy.ts`（法的な最終確認はご自身でお願いします）
- [ ] サンプルのコラム記事 … `content/column/homepage-order-checklist.md`（残す／書き換える／削除する）
- [ ] デザイン全体 … スマホ実機・PC の両方で、見づらい箇所や崩れがないか
- [ ] 自分で決めた変更点の可否 … フォームに「会社名・屋号」（任意）を追加／プロフィール写真の枠を円形に／英字フォント（Cormorant Garamond）

### 3. 用意する素材（詳細・文字数の目安は `docs/materials.md`）

- [x] ~~代表者の表示名~~ … 平良敦子（反映済）
- [x] ~~仕事への姿勢・代表メッセージ~~ … 反映済（PV の実績は「1日あたり」で記載）
- [x] ~~専門領域~~ … 掲載しない（セクションごと削除）
- [ ] 保有資格（あれば）
- [x] ~~実績「某大手退職代行業者｜LP制作」の課題と成果~~ … 反映済
- [x] ~~追加の実績~~ … 「Minato Piano Atelier｜HP制作」「髙野養鶏場｜Webサイト診断」を追加済（画面キャプチャ・技術構成は任意で後から追加可）

サイト上で**金色の点線枠**になっている箇所が、未提供の素材です。

### 4. 素材・ドメインが揃ったあとの作業（Claude に依頼できます）

- [ ] 素材を `data/` に反映し、`docs/materials.md` の提供状況を「済」に更新
- [ ] `.env.local` に `NEXT_PUBLIC_SITE_URL=https://本番ドメイン` を設定
- [ ] `public/contact/config.php` にメールアドレスを設定
- [ ] Lighthouse を計測し、90点未満の項目を改善（**未計測**）
- [ ] ConoHa WING の初期設定（ドメイン追加・無料SSL・メールアドレス作成・PHP 8.x）→ `docs/deploy.md` の 0
- [ ] `out/` をアップロードし、公開後チェックリストを確認（フォームの実送信、HTTPS転送、404、`config.php` が 403 になること）→ `docs/deploy.md` の 3〜4
- [ ] 髙野養鶏場の診断レポート画像 ①〜④（高解像度）を `assets-src/works/takanofarm-report-1.jpg` 〜 `-4.jpg` として上書き（今は仮画像）
- [ ] AIチャットの設定ファイル（APIキー）を `atsusagi-private/chat-config.php` としてサーバーに置く → `docs/chatbot.md`
- [ ] Google Search Console に登録し、sitemap.xml を送信
- [ ] 公開後チェックがすべて済んだら、旧サイト（Vercel）を停止する（Vercel 管理画面 → `portfolio` → Settings → Delete Project）
- [ ] （任意）GitHub Actions による自動デプロイを設定 → `docs/deploy.md` の 5

---

## 開発コマンド

```bash
npm install      # 初回、または package.json が変わったとき
npm run dev      # 開発サーバー（http://localhost:3000）。フォームは送信せず完了ページへ進みます
npm run build    # 本番ビルド（静的エクスポート）。出力先は out/
npm run preview  # out/ をローカルの静的サーバーで配信（本番と同じ挙動の確認用）
npm run lint     # ESLint
npm run images   # assets-src/ の画像を WebP に変換（dev / build の前にも自動実行されます）
```

## ページ構成

| パス | 内容 |
|---|---|
| `/` | ホーム（お悩み・サービス・実績・プロフィール・流れ・コラムの要約） |
| `/services/` | サービス内容（6サービスと料金目安、ご利用にあたって） |
| `/works/` | 実績（課題→対応→成果） |
| `/flow/` | ご依頼の流れ（8ステップ）＋よくあるご質問 |
| `/profile/` | 代表プロフィール・運営者情報 |
| `/column/` | コラム一覧（`/column/category/<カテゴリ>/`、`/column/page/<n>/`） |
| `/column/<slug>/` | コラム記事 |
| `/contact/` | お問い合わせ（送信後は `/contact/thanks/`） |
| `/privacy/` | プライバシーポリシー |
| （全ページ右下） | AIチャットウィジェット（FAQボタン＋自由入力。仕組みと設定は `docs/chatbot.md`） |

## ディレクトリ構成

```
app/                 ルーティング、sitemap.ts、robots.ts、feed.xml/、not-found.tsx
components/          layout / sections / ui / column / forms / seo
data/                掲載文言・表示フラグ（素材の反映はここを書き換える）
content/column/      コラム記事（Markdown）
lib/                 コラムのMarkdown処理、メタデータ生成
assets-src/          元画像（差し替えはここ。ビルド時に public/images/ へ WebP 変換）
public/              .htaccess、contact/send.php・config.php（ConoHa上で動作）、画像
scripts/             画像最適化、OGP画像生成
docs/                materials.md（素材一覧）／deploy.md（デプロイ手順）／column.md（記事の追加手順）
```

## よく触るファイル

| やりたいこと | ファイル |
|---|---|
| お客様の声・運営者情報の表示を切り替える | `data/site.ts` の `flags` |
| サービス内容・料金を変える | `data/services.ts` |
| 実績を追加・修正する | `data/works.ts`（画像は `assets-src/works/`） |
| プロフィール・経歴を変える | `data/profile.ts`（写真は `assets-src/profile/profile.png`） |
| コラムを追加する | `content/column/` に `.md` を追加（手順は `docs/column.md`） |
| よくある質問・チャットのFAQを変える | `data/faq.json`（FAQページ・チャットボタン・AIの指示文に共通で反映） |
| ヘッダー・フッターのメニューを変える | `data/navigation.ts` |

## 守るルール（詳細は `CLAUDE.md`）

1. **静的エクスポート前提**（`output: 'export'`、`trailingSlash: true`）。APIルート・Server Actions・middleware・next/image の自動最適化は使わない
2. **実績・数値・お客様の声・経歴・資格を創作しない**。情報がない箇所は `【要素材：〇〇】` のままにする
3. 参考サイトの文言・画像・配色・レイアウトを流用しない

## 自動コミットについて

`.claude/settings.json` のフックにより、Claude Code の作業が一区切りつくたびに、
**ビルド → コミット → 現在のブランチを GitHub へ push** が自動で行われます（push 先は作業中のブランチです）。
`renewal` ブランチで作業している限り、Vercel の本番（`main`）には影響しません。
