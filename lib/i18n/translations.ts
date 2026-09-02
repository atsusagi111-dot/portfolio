export type Locale = "ja" | "en" | "es";

export const LOCALES: Locale[] = ["ja", "en", "es"];

export const SERVICE_IDS = [
  "homepage",
  "lp",
  "web-system",
  "ai-chatbot",
  "ai-efficiency",
  "system-integration",
] as const;

export type ServiceId = (typeof SERVICE_IDS)[number];

export type ServiceContent = {
  name: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  examples?: string[];
};

export type TechItem = {
  name: string;
  note: string;
};

export type AchievementScreenshot = {
  label: string;
  src: string;
};

export type AchievementItem = {
  id: string;
  title: string;
  description: string;
  techStack: TechItem[];
  supportTools: TechItem[];
  screenshots: AchievementScreenshot[];
  urls: string[];
};

export type ProfileTimelineItem = {
  year: string;
  heading: string;
  body: string;
  highlight?: string;
};

export type ProcessBullet = {
  label: string;
  subItems?: string[];
};

export type PricingNote = {
  label: string;
  body: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  body: string[];
  bullets?: ProcessBullet[];
  afterBullets?: string;
  note?: string;
};

export type Translations = {
  languageName: string;
  nav: {
    home: string;
    services: string;
    achievements: string;
    contactCta: string;
  };
  hero: {
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    developerProfileCta: string;
  };
  targetAudience: {
    title: string;
    description: string;
    items: string[];
  };
  servicesSection: {
    title: string;
    homeDescription: string;
    pageDescription: string;
    readMore: string;
    priceLabel: string;
    achievementLabel: string;
    notesTitle: string;
  };
  services: Record<ServiceId, ServiceContent>;
  pricingNotes: PricingNote[];
  achievementsSection: {
    title: string;
    techStackLabel: string;
    supportToolsLabel: string;
    screenshotsLabel: string;
    urlLabel: string;
  };
  achievements: AchievementItem[];
  profileSection: {
    title: string;
    photoAlt: string;
  };
  profileTimeline: ProfileTimelineItem[];
  processSection: {
    title: string;
    description: string;
  };
  processSteps: ProcessStep[];
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    submitted: string;
  };
  footer: {
    tagline: string;
  };
  ctaBanner: {
    title: string;
    description: string;
    button: string;
  };
};

const ja: Translations = {
  languageName: "日本語",
  nav: {
    home: "ホーム",
    services: "サービス内容",
    achievements: "実績",
    contactCta: "お問い合わせ",
  },
  hero: {
    title: "ホームページ制作からAI活用まで、丸ごとサポートします。",
    description:
      "LP・ホームページ制作、Webシステム開発、AIチャットボット構築、業務自動化まで。初めてのご依頼でも安心してお任せいただけます。",
    ctaPrimary: "お問い合わせ",
    ctaSecondary: "サービスを見る",
    developerProfileCta: "開発者プロフィールはこちら",
  },
  targetAudience: {
    title: "こんな方におすすめ",
    description: "Web制作からAI活用まで、幅広いご要望に対応しています。",
    items: [
      "LP（ランディングページ）の制作を依頼したい個人・企業",
      "ホームページを制作したい個人・企業",
      "Webシステムを開発したい個人・企業",
      "AIを活用して業務を効率化したい個人・企業",
      "ホームページやLINEで、お客様からの問い合わせに自動で対応する仕組みを作りたい方",
      "複数のサービスを連携させて、業務を自動化したい方",
      "初めてWeb制作・システム開発を依頼する方",
    ],
  },
  servicesSection: {
    title: "サービス内容",
    homeDescription:
      "ホームページ制作からAIを活用した業務自動化まで、幅広くご対応します。",
    pageDescription:
      "ホームページ制作からAIを活用した業務自動化まで、お客様の目的に合わせてワンストップでご対応します。",
    readMore: "詳しく見る →",
    priceLabel: "料金目安",
    achievementLabel: "実績：",
    notesTitle: "ご利用にあたって",
  },
  services: {
    homepage: {
      name: "ホームページ制作",
      shortDescription:
        "企業・店舗・個人向けのホームページ制作。スマートフォンにも対応した、見やすく使いやすいデザイン。",
      fullDescription:
        "企業・店舗・個人事業主向けに、目的に合わせたホームページを制作します。スマートフォンにも対応した、見やすく使いやすいデザインをご提供します。実装込み・トップページ＋基本下層ページの料金で、初校は最短3日でお出しします。",
      price: "30万円〜",
      examples: [
        "採用ページカスタマイズ（動画演出など） +5万円〜",
        "AIチャットボット追加 +10万円〜・月額3万円〜（シナリオ更新・セキュリティ保守込み）",
        "SEO記事作成（求人効果を高める記事／Google上位対策） 文字単価5円〜",
        "GA4（Googleアナリティクス4）初期設定代行 3万円〜",
      ],
    },
    lp: {
      name: "LP制作",
      shortDescription:
        "商品・サービスを紹介し、お問い合わせや申し込みにつなげる1ページのWebサイト制作。",
      fullDescription:
        "商品やサービスの魅力を分かりやすく伝え、お問い合わせや申し込みにつながるページを制作します。既存のホームページを元にした制作と、新規制作の2パターンをご用意しています。",
      price: "20万円〜",
      examples: [
        "ホームページを元にLP制作：20万円〜（初校最短1日〜）",
        "新規でLP制作：25万円〜（初校最短2日〜）",
      ],
    },
    "web-system": {
      name: "Webシステム開発",
      shortDescription:
        "予約・顧客管理・問い合わせ管理など、業務を便利にするWebシステムの開発。",
      fullDescription:
        "予約管理・顧客管理・お問い合わせ管理など、日々の業務を効率化するオリジナルシステムを開発します。",
      price: "15万円〜",
      examples: [
        "データ管理・予約管理システムの開発",
        "お客様の目的に合わせたオリジナルシステムの開発",
      ],
    },
    "ai-chatbot": {
      name: "AIチャットボット制作",
      shortDescription:
        "ホームページやLINEで、お客様の質問に24時間自動で回答するAIチャットボットの構築。",
      fullDescription:
        "ホームページやLINEにAIを導入し、お客様からの質問に24時間自動で回答できる仕組みを構築します。月額費用にはシナリオ更新・セキュリティ対策などの保守が含まれます。",
      price: "+10万円〜・月額3万円〜",
      examples: [
        "商品についての質問",
        "サービス内容の案内",
        "よくある質問への回答",
        "社内マニュアルの検索",
      ],
    },
    "ai-efficiency": {
      name: "AIを活用した業務効率化",
      shortDescription:
        "AIを利用して、お問い合わせ対応や情報検索などを自動化する仕組みを構築。",
      fullDescription:
        "AIを活用して、お問い合わせ対応や情報検索など、これまで人が行っていた作業を自動化します。業務の負担を減らし、より効率的な運営をサポートします。「こんなこともAIでできる？」というご相談だけでも歓迎です。",
      price: "時給3,000円〜",
      examples: ["GA4（Googleアナリティクス4）初期設定代行 3万円〜"],
    },
    "system-integration": {
      name: "システム連携・業務自動化",
      shortDescription:
        "複数のサービスを連携し、データ入力・通知・情報共有などの作業を自動化。",
      fullDescription:
        "複数のサービスを連携し、データ入力や通知などの繰り返し作業を自動化します。お客様の業務に合わせたシステムを構築します。",
      price: "10万円〜",
      examples: [
        "フォームの内容を自動で管理表へ登録",
        "LINEやメールへ自動通知",
        "AIと連携した問い合わせ対応",
        "複数のシステム間でデータを自動共有",
      ],
    },
  },
  pricingNotes: [
    {
      label: "修正回数",
      body: "軽微な修正は3回まで対応いたします。4回目以降の修正、および大幅な変更・追加については別途お見積もりとなります。",
    },
    {
      label: "素材について",
      body: "ロゴ・写真・文章などの素材はお客様にご準備いただいております。素材画像のご提供も可能です。",
    },
    {
      label: "キャンセルについて",
      body: "ご契約後の原則キャンセル不可です。やむを得ずキャンセルされる場合は、制作費の8割を頂戴いたします。",
    },
    {
      label: "お支払い条件",
      body: "月末締め、翌月3営業日以内のお支払いをお願いいたします。",
    },
    {
      label: "決済方法",
      body: "銀行振込・クレジットカード決済に対応しております。",
    },
  ],
  achievementsSection: {
    title: "実績",
    techStackLabel: "技術構成",
    supportToolsLabel: "補助ツール",
    screenshotsLabel: "制作画面",
    urlLabel: "制作URL",
  },
  achievements: [
    {
      id: "resignation-agency-lp",
      title: "某大手退職代行業者｜LP制作",
      description:
        "某大手退職代行業者紹介LPを制作(メール問い合わせ・メール＆LINE問い合わせの2種)。デザイン・コーディング・レスポンシブ対応・公開まで担当。",
      techStack: [
        { name: "Vite", note: "開発を高速に進めるためのツール" },
        { name: "React", note: "部品を組み合わせて画面を作るツール" },
        { name: "TypeScript", note: "バグを防ぎやすくする言語" },
        {
          name: "Tailwind CSS",
          note: "あらかじめ用意されたスタイルを組み合わせてCSSを書く手間を減らすツール",
        },
        { name: "lucide-react", note: "Webサイトで使えるアイコン集" },
        { name: "ESLint", note: "コードチェックツール" },
        { name: "Render", note: "インターネット上へ公開するサービス" },
      ],
      supportTools: [
        { name: "Bolt.new", note: "AIとの対話でページを作成するツール" },
      ],
      screenshots: [
        {
          label: "メール・LINE動線",
          src: "/achievements/lp-email-line-flow.png",
        },
        {
          label: "メール動線",
          src: "/achievements/lp-email-flow.png",
        },
      ],
      urls: ["https://momuri.com/lp/", "https://momuri.com/lp2/"],
    },
  ],
  profileSection: {
    title: "プロフィール",
    photoAlt: "ATSUSAGI LAB プロフィール写真",
  },
  profileTimeline: [
    {
      year: "2017",
      heading: "Webライターとして活動開始",
      body: "クラウドソーシングサイトでライティング案件の受注を開始。Webコンテンツ制作を通じて、ユーザー視点で情報を整理し、価値を届ける力を培う。",
    },
    {
      year: "2024",
      heading: "SEOライター｜ベンチャー企業",
      body: "SEO記事の企画・構成・執筆に加え、オウンドメディアの運営を担当。コンテンツ戦略から記事制作まで携わり、検索結果上位の記事を複数制作。通常平均約300PVのサイトで、月間約7,000PVを生み出す記事を制作。",
      highlight: "月間約300PV → 約7,000PV",
    },
    {
      year: "2026",
      heading: "AIエンジニアとしての活動を開始",
      body: "AI・Web開発の学習を開始。AIチャットボットやWebアプリケーション、業務効率化システムなど、AIを活用した開発に取り組む。同年、現職企業のLP制作を担当。企画・構成から実装、公開まで、実際の企業サービスをWeb上で形にする経験を積む。",
    },
    {
      year: "NOW",
      heading: "AI開発パートナー｜ATSUSAGI LAB",
      body: "Web・SEOで培った「ユーザーの課題を捉える力」と、AI・Web開発の技術を掛け合わせ、課題整理からAIを活用したシステム開発まで支援。",
    },
  ],
  processSection: {
    title: "ご依頼の流れ",
    description:
      "お問い合わせから納品、納品後のアフターフォローまで、安心してご依頼いただけるよう丁寧にサポートいたします。",
  },
  processSteps: [
    {
      number: "01",
      title: "お問い合わせ",
      body: [
        "まずは「お問い合わせフォーム」よりお気軽にご連絡ください。",
        "ご相談段階でのご連絡も歓迎しております。「こんなことはAIでできる？」「何を作ればいいか分からない」といったご相談もお気軽にお問い合わせください。",
      ],
    },
    {
      number: "02",
      title: "ヒアリング",
      body: [
        "お問い合わせ内容を確認後、メールにてご連絡いたします。",
        "以下の内容をお伺いします。",
      ],
      bullets: [
        { label: "個人・法人の区分" },
        {
          label: "ご希望のサービス・開発内容",
          subItems: [
            "LP・Webサイト制作",
            "AIチャットボット開発",
            "AIを活用した業務効率化システム",
            "その他のAI・Web開発",
          ],
        },
        { label: "ご希望の納品物・完成イメージ" },
        { label: "参考サイトや参考資料" },
        { label: "ご希望の納期" },
        { label: "オンライン面談のご希望日時" },
      ],
    },
    {
      number: "03",
      title: "オンライン面談",
      body: [
        "ヒアリング内容をもとに、オンラインで詳しいご要望や課題をお伺いします。",
        "「何を作れば課題を解決できるか分からない」という場合も、目的や現状をお聞きしたうえで、最適な方法をご提案いたします。",
      ],
    },
    {
      number: "04",
      title: "お見積もり・ご契約",
      body: [
        "ご要望や仕様、納期などをすり合わせたうえで、お見積もりをご提示いたします。",
        "内容にご納得いただき、双方の合意が確認できましたら、契約書を締結いたします。",
      ],
    },
    {
      number: "05",
      title: "お支払い",
      body: [
        "原則として、ご契約後にお支払いをお願いいたします。",
        "なお、法人のお客様など一定の条件を満たす場合は、本人確認書類や登記情報等をご提示いただくことで、後払いにも対応可能です。",
      ],
      note: "※後払いの可否や条件については、個別にご相談ください。",
    },
    {
      number: "06",
      title: "開発・制作",
      body: [
        "ご契約内容に基づき、開発・制作を開始します。",
        "進捗状況や確認事項については、必要に応じてご連絡しながら進行いたします。",
      ],
    },
    {
      number: "07",
      title: "納品・修正",
      body: [
        "完成した成果物をご確認いただきます。",
        "納品後、契約内容の範囲内で必要な修正にも対応いたします。",
      ],
    },
    {
      number: "08",
      title: "アフターフォロー",
      body: [
        "【期間限定】今なら、通常月額3万円〜のアフターフォローを6ヶ月間無料でご提供しています。",
      ],
      bullets: [
        { label: "エラーが発生して正常に動作しない" },
        { label: "納品後に操作方法が分からない" },
        { label: "社員・関係者への使い方のレクチャーが必要" },
        { label: "開発したシステムについて相談したい" },
      ],
      afterBullets: "など、納品後のお困りごとにも対応いたします。",
      note: "※アフターフォローの対象範囲や対応内容は、開発・制作内容により異なります。無料期間終了後は月額3万円〜で継続いただけます。",
    },
  ],
  contact: {
    eyebrow: "Contact",
    title: "お問い合わせ",
    description:
      "ご相談・お見積もりのご依頼はこちらのフォームからお気軽にお送りください。",
    nameLabel: "お名前",
    namePlaceholder: "山田 太郎",
    emailLabel: "メールアドレス",
    emailPlaceholder: "you@example.com",
    messageLabel: "お問い合わせ内容",
    messagePlaceholder: "ご相談内容やご要望をご記入ください",
    submit: "送信する",
    submitted:
      "ご入力ありがとうございます。現在、送信機能は準備中です。お急ぎの場合はお手数ですが別途ご連絡方法をご案内するまでお待ちください。",
  },
  footer: {
    tagline: "AI開発パートナー",
  },
  ctaBanner: {
    title: "まずはお気軽にお問い合わせください",
    description:
      "初めてのご依頼でも安心。要件が固まっていない段階でのご相談も歓迎です。",
    button: "お問い合わせはこちら",
  },
};

const en: Translations = {
  languageName: "English",
  nav: {
    home: "Home",
    services: "Services",
    achievements: "Achievements",
    contactCta: "Contact",
  },
  hero: {
    title:
      "From website creation to AI adoption — we support it all, end to end.",
    description:
      "From landing pages and websites to web systems, AI chatbots, and business automation. First-time clients are always welcome — we'll guide you every step of the way.",
    ctaPrimary: "Contact Us",
    ctaSecondary: "View Services",
    developerProfileCta: "Meet the Developer",
  },
  targetAudience: {
    title: "Who We Help",
    description:
      "We support a wide range of needs, from web production to AI adoption.",
    items: [
      "Individuals and companies who want a landing page (LP) built",
      "Individuals and companies who want a website built",
      "Individuals and companies who want a web system developed",
      "Individuals and companies who want to improve efficiency using AI",
      "Those who want to build a system that automatically responds to customer inquiries on their website or LINE",
      "Those who want to integrate multiple services to automate their operations",
      "Those requesting web production or system development for the first time",
    ],
  },
  servicesSection: {
    title: "Services",
    homeDescription:
      "We handle everything from website creation to AI-powered business automation.",
    pageDescription:
      "From website creation to AI-powered business automation, we provide one-stop support tailored to your goals.",
    readMore: "Learn more →",
    priceLabel: "Starting Price",
    achievementLabel: "Case Study: ",
    notesTitle: "Terms of Service",
  },
  services: {
    homepage: {
      name: "Website Production",
      shortDescription:
        "Website production for businesses, shops, and individuals. Clear, user-friendly designs that also work great on smartphones.",
      fullDescription:
        "We build websites tailored to your goals for businesses, shops, and sole proprietors, with clear, user-friendly designs that work great on smartphones too. Price includes implementation for a top page plus core sub-pages, with a first draft in as little as 3 days.",
      price: "From ¥300,000",
      examples: [
        "Recruitment page customization (video, etc.) +¥50,000〜",
        "Add an AI chatbot +¥100,000〜, ¥30,000〜/month (includes scenario updates & security maintenance)",
        "SEO article writing (recruitment-focused, aimed at top Google rankings) From ¥5/character",
        "GA4 (Google Analytics 4) initial setup From ¥30,000",
      ],
    },
    lp: {
      name: "Landing Page Production",
      shortDescription:
        "A single-page website that showcases your product or service and drives inquiries and sign-ups.",
      fullDescription:
        "We create pages that clearly communicate the appeal of your products and services and lead to inquiries and applications. Available either built from your existing website or created entirely from scratch.",
      price: "From ¥200,000",
      examples: [
        "Built from your existing website: From ¥200,000 (first draft in as little as 1 day)",
        "Built from scratch: From ¥250,000 (first draft in as little as 2 days)",
      ],
    },
    "web-system": {
      name: "Web System Development",
      shortDescription:
        "Web systems for reservations, customer management, inquiry management, and more to streamline your operations.",
      fullDescription:
        "We develop custom systems for reservation management, customer management, inquiry management, and more to streamline your day-to-day operations.",
      price: "From ¥150,000",
      examples: [
        "Development of data and reservation management systems",
        "Custom systems built around your specific goals",
      ],
    },
    "ai-chatbot": {
      name: "AI Chatbot Development",
      shortDescription:
        "AI chatbots that automatically answer customer questions 24/7 on your website or LINE.",
      fullDescription:
        "We integrate AI into your website or LINE to automatically answer customer questions around the clock. The monthly fee includes ongoing maintenance such as scenario updates and security measures.",
      price: "+¥100,000〜, ¥30,000〜/month",
      examples: [
        "Questions about products",
        "Information about services",
        "Answers to frequently asked questions",
        "Searching internal manuals",
      ],
    },
    "ai-efficiency": {
      name: "AI-Driven Efficiency",
      shortDescription:
        "We use AI to automate tasks like inquiry response and information search.",
      fullDescription:
        "We use AI to automate tasks that used to be done manually, such as handling inquiries and searching for information — reducing workload and supporting more efficient operations. Even a quick \"can AI do this?\" question is welcome.",
      price: "From ¥3,000/hour",
      examples: ["GA4 (Google Analytics 4) initial setup From ¥30,000"],
    },
    "system-integration": {
      name: "System Integration & Automation",
      shortDescription:
        "We connect multiple services to automate data entry, notifications, information sharing, and more.",
      fullDescription:
        "We connect multiple services to automate repetitive tasks like data entry and notifications, building systems tailored to your business.",
      price: "From ¥100,000",
      examples: [
        "Automatically registering form submissions into a management spreadsheet",
        "Automatic notifications via LINE or email",
        "AI-integrated inquiry response",
        "Automatic data sharing across multiple systems",
      ],
    },
  },
  pricingNotes: [
    {
      label: "Revisions",
      body: "Minor revisions are included up to 3 rounds. From the 4th round onward, and for major changes or additions, a separate quote will apply.",
    },
    {
      label: "Materials",
      body: "Please prepare materials such as logos, photos, and text on your end. We can also supply image materials if needed.",
    },
    {
      label: "Cancellation",
      body: "In principle, cancellations are not accepted once a contract is signed. If cancellation is unavoidable, 80% of the project fee will be charged.",
    },
    {
      label: "Payment Terms",
      body: "Billing is closed at month-end, with payment due within 3 business days of the following month.",
    },
    {
      label: "Payment Methods",
      body: "We accept bank transfer and credit card payment.",
    },
  ],
  achievementsSection: {
    title: "Achievements",
    techStackLabel: "Tech Stack",
    supportToolsLabel: "Supporting Tools",
    screenshotsLabel: "Screenshots",
    urlLabel: "Live URLs",
  },
  achievements: [
    {
      id: "resignation-agency-lp",
      title: "Major Resignation Agency | Landing Page Production",
      description:
        "Produced the introductory landing page for a major resignation-proxy agency (two versions: email-only inquiries, and email + LINE inquiries). Handled design, coding, responsive support, and publishing.",
      techStack: [
        { name: "Vite", note: "A tool for fast development" },
        { name: "React", note: "A tool for building UIs from reusable components" },
        { name: "TypeScript", note: "A language that helps prevent bugs" },
        {
          name: "Tailwind CSS",
          note: "A tool that reduces the effort of writing CSS by combining pre-built styles",
        },
        { name: "lucide-react", note: "An icon set for websites" },
        { name: "ESLint", note: "A code-checking tool" },
        { name: "Render", note: "A service for publishing to the internet" },
      ],
      supportTools: [
        { name: "Bolt.new", note: "A tool for building pages through conversation with AI" },
      ],
      screenshots: [
        {
          label: "Email & LINE Flow",
          src: "/achievements/lp-email-line-flow.png",
        },
        {
          label: "Email Flow",
          src: "/achievements/lp-email-flow.png",
        },
      ],
      urls: ["https://momuri.com/lp/", "https://momuri.com/lp2/"],
    },
  ],
  profileSection: {
    title: "Profile",
    photoAlt: "ATSUSAGI LAB profile photo",
  },
  profileTimeline: [
    {
      year: "2017",
      heading: "Started Working as a Web Writer",
      body: "Began taking on writing projects through crowdsourcing platforms. Through web content creation, developed the ability to organize information from the user's perspective and deliver real value.",
    },
    {
      year: "2024",
      heading: "SEO Writer | Venture Company",
      body: "Planned, structured, and wrote SEO articles, and also managed owned media. Involved in everything from content strategy to article production, creating multiple articles that ranked at the top of search results. On a site that typically averaged around 300 PV per month, produced articles that grew traffic to about 7,000 PV per month.",
      highlight: "About 300 PV/month → About 7,000 PV/month",
    },
    {
      year: "2026",
      heading: "Began Working as an AI Engineer",
      body: "Started learning AI and web development, working on AI-powered projects such as chatbots, web applications, and business-efficiency systems. That same year, took charge of the landing page production for my current company, gaining hands-on experience turning a real business service into a live website, from planning through implementation and launch.",
    },
    {
      year: "NOW",
      heading: "AI Development Partner | ATSUSAGI LAB",
      body: "Combining the ability to grasp user challenges cultivated through web and SEO work with technical skills in AI and web development, I support clients from organizing their challenges through to building AI-powered systems.",
    },
  ],
  processSection: {
    title: "Our Process",
    description:
      "From your first inquiry through delivery and after-launch support, we provide careful, attentive support every step of the way so you can request our services with confidence.",
  },
  processSteps: [
    {
      number: "01",
      title: "Inquiry",
      body: [
        'Please feel free to reach out via our "Contact Form" to get started.',
        'We also welcome inquiries at the consultation stage — questions like "Can AI do something like this?" or "I\'m not sure what I need" are always welcome.',
      ],
    },
    {
      number: "02",
      title: "Hearing",
      body: [
        "After reviewing your inquiry, we'll follow up by email.",
        "We'll ask you about the following:",
      ],
      bullets: [
        { label: "Whether you're an individual or a company" },
        {
          label: "Your desired service / type of development",
          subItems: [
            "Landing page / website production",
            "AI chatbot development",
            "AI-powered business efficiency systems",
            "Other AI / web development",
          ],
        },
        { label: "Your desired deliverables and vision for the finished product" },
        { label: "Reference sites or materials" },
        { label: "Your desired timeline" },
        { label: "Preferred date/time for an online meeting" },
      ],
    },
    {
      number: "03",
      title: "Online Meeting",
      body: [
        "Based on the hearing, we'll discuss your detailed requirements and challenges online.",
        "Even if you're not sure what to build to solve your challenge, we'll ask about your goals and current situation and propose the best approach.",
      ],
    },
    {
      number: "04",
      title: "Quote & Contract",
      body: [
        "After aligning on requirements, specifications, and timeline, we'll provide a quote.",
        "Once you're satisfied with the content and both parties agree, we'll sign a contract.",
      ],
    },
    {
      number: "05",
      title: "Payment",
      body: [
        "In principle, payment is due after the contract is signed.",
        "For corporate clients and others who meet certain conditions, deferred payment is also available upon providing identification documents or company registration information.",
      ],
      note: "※Please contact us individually to discuss eligibility and terms for deferred payment.",
    },
    {
      number: "06",
      title: "Development & Production",
      body: [
        "Development and production begin based on the contract terms.",
        "We'll keep you updated on progress and confirm details with you as needed along the way.",
      ],
    },
    {
      number: "07",
      title: "Delivery & Revisions",
      body: [
        "You'll review the completed deliverable.",
        "After delivery, we handle any necessary revisions within the scope of the contract.",
      ],
    },
    {
      number: "08",
      title: "After-Launch Support",
      body: [
        "【Limited-time offer】Get 6 months of after-launch support free of charge — normally from ¥30,000/month.",
      ],
      bullets: [
        { label: "An error occurs and something isn't working properly" },
        { label: "You're not sure how to operate the system after delivery" },
        { label: "You need training on how to use it for staff or other stakeholders" },
        { label: "You'd like to consult about the system that was developed" },
      ],
      afterBullets: "and other post-delivery concerns — we're here to help.",
      note: "※The scope and details of after-launch support vary depending on the development/production content. After the free period ends, support can continue from ¥30,000/month.",
    },
  ],
  contact: {
    eyebrow: "Contact",
    title: "Contact",
    description:
      "Feel free to reach out using the form below for consultations or quote requests.",
    nameLabel: "Name",
    namePlaceholder: "John Smith",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Please describe your inquiry or request",
    submit: "Send",
    submitted:
      "Thank you for your message. Our online submission feature is currently in preparation. If your matter is urgent, we apologize for the inconvenience — please wait while we arrange an alternative way to reach you.",
  },
  footer: {
    tagline: "AI Development Partner",
  },
  ctaBanner: {
    title: "Get in Touch — We'd Love to Hear From You",
    description:
      "First-time clients are welcome. We're happy to talk even if your requirements aren't fully defined yet.",
    button: "Contact Us Here",
  },
};

const es: Translations = {
  languageName: "Español",
  nav: {
    home: "Inicio",
    services: "Servicios",
    achievements: "Logros",
    contactCta: "Contacto",
  },
  hero: {
    title:
      "Desde la creación de sitios web hasta la adopción de IA: te apoyamos en todo, de principio a fin.",
    description:
      "Desde landing pages y sitios web hasta sistemas web, chatbots con IA y automatización de procesos. Si es tu primera vez, no te preocupes: te acompañamos en todo el proceso.",
    ctaPrimary: "Contáctanos",
    ctaSecondary: "Ver Servicios",
    developerProfileCta: "Conoce al Desarrollador",
  },
  targetAudience: {
    title: "A quién ayudamos",
    description:
      "Atendemos una amplia variedad de necesidades, desde el desarrollo web hasta la adopción de IA.",
    items: [
      "Personas y empresas que desean crear una landing page (LP)",
      "Personas y empresas que desean crear un sitio web",
      "Personas y empresas que desean desarrollar un sistema web",
      "Personas y empresas que desean mejorar su eficiencia mediante IA",
      "Quienes desean crear un sistema que responda automáticamente a las consultas de los clientes en su sitio web o LINE",
      "Quienes desean integrar varios servicios para automatizar sus operaciones",
      "Quienes solicitan por primera vez desarrollo web o de sistemas",
    ],
  },
  servicesSection: {
    title: "Servicios",
    homeDescription:
      "Nos encargamos de todo, desde la creación de sitios web hasta la automatización empresarial con IA.",
    pageDescription:
      "Desde la creación de sitios web hasta la automatización empresarial con IA, ofrecemos un servicio integral adaptado a tus objetivos.",
    readMore: "Ver más →",
    priceLabel: "Precio Estimado",
    achievementLabel: "Logro: ",
    notesTitle: "Condiciones del Servicio",
  },
  services: {
    homepage: {
      name: "Creación de Sitios Web",
      shortDescription:
        "Creación de sitios web para empresas, comercios y particulares. Diseños claros y fáciles de usar, también optimizados para móviles.",
      fullDescription:
        "Creamos sitios web adaptados a tus objetivos para empresas, comercios y autónomos, con diseños claros y fáciles de usar que también funcionan muy bien en móviles. El precio incluye la implementación de la página principal y las subpáginas básicas, con un primer borrador en tan solo 3 días.",
      price: "Desde ¥300,000",
      examples: [
        "Personalización de página de empleo (vídeo, etc.) +¥50,000〜",
        "Añadir chatbot con IA +¥100,000〜, ¥30,000〜/mes (incluye actualización de guiones y mantenimiento de seguridad)",
        "Redacción de artículos SEO (enfocados a empleo, para posicionar en Google) Desde ¥5/carácter",
        "Configuración inicial de GA4 (Google Analytics 4) Desde ¥30,000",
      ],
    },
    lp: {
      name: "Creación de Landing Pages",
      shortDescription:
        "Un sitio web de una sola página que presenta tu producto o servicio y genera consultas y registros.",
      fullDescription:
        "Creamos páginas que comunican claramente el atractivo de tus productos y servicios, generando consultas y solicitudes. Disponible tanto a partir de tu sitio web existente como creada completamente desde cero.",
      price: "Desde ¥200,000",
      examples: [
        "A partir de tu sitio web existente: Desde ¥200,000 (primer borrador en tan solo 1 día)",
        "Creación desde cero: Desde ¥250,000 (primer borrador en tan solo 2 días)",
      ],
    },
    "web-system": {
      name: "Desarrollo de Sistemas Web",
      shortDescription:
        "Sistemas web para reservas, gestión de clientes, gestión de consultas y más, para optimizar tus operaciones.",
      fullDescription:
        "Desarrollamos sistemas personalizados para la gestión de reservas, clientes, consultas y más, optimizando tus operaciones diarias.",
      price: "Desde ¥150,000",
      examples: [
        "Desarrollo de sistemas de gestión de datos y reservas",
        "Sistemas personalizados adaptados a tus objetivos específicos",
      ],
    },
    "ai-chatbot": {
      name: "Desarrollo de Chatbots con IA",
      shortDescription:
        "Chatbots con IA que responden automáticamente a las preguntas de los clientes las 24 horas en tu sitio web o LINE.",
      fullDescription:
        "Integramos IA en tu sitio web o LINE para responder automáticamente a las preguntas de los clientes las 24 horas. La cuota mensual incluye mantenimiento continuo, como actualización de guiones y medidas de seguridad.",
      price: "+¥100,000〜, ¥30,000〜/mes",
      examples: [
        "Preguntas sobre productos",
        "Información sobre servicios",
        "Respuestas a preguntas frecuentes",
        "Búsqueda en manuales internos",
      ],
    },
    "ai-efficiency": {
      name: "Eficiencia con IA",
      shortDescription:
        "Utilizamos IA para automatizar tareas como la respuesta a consultas y la búsqueda de información.",
      fullDescription:
        "Utilizamos IA para automatizar tareas que antes se hacían manualmente, como la atención de consultas y la búsqueda de información, reduciendo la carga de trabajo y apoyando una operación más eficiente. Consúltanos incluso si solo quieres saber si algo se puede hacer con IA.",
      price: "Desde ¥3,000/hora",
      examples: ["Configuración inicial de GA4 (Google Analytics 4) Desde ¥30,000"],
    },
    "system-integration": {
      name: "Integración de Sistemas y Automatización",
      shortDescription:
        "Conectamos varios servicios para automatizar la entrada de datos, notificaciones, el intercambio de información y más.",
      fullDescription:
        "Conectamos varios servicios para automatizar tareas repetitivas como la entrada de datos y las notificaciones, creando sistemas adaptados a tu negocio.",
      price: "Desde ¥100,000",
      examples: [
        "Registro automático de formularios en una hoja de gestión",
        "Notificaciones automáticas por LINE o correo electrónico",
        "Atención de consultas integrada con IA",
        "Compartición automática de datos entre varios sistemas",
      ],
    },
  },
  pricingNotes: [
    {
      label: "Revisiones",
      body: "Incluimos hasta 3 rondas de revisiones menores. A partir de la 4ª ronda, así como para cambios o adiciones importantes, se aplicará un presupuesto aparte.",
    },
    {
      label: "Materiales",
      body: "Te pedimos que prepares materiales como logo, fotos y textos. También podemos proporcionar imágenes si es necesario.",
    },
    {
      label: "Cancelación",
      body: "En principio, no se aceptan cancelaciones una vez firmado el contrato. Si la cancelación es inevitable, se cobrará el 80% del importe del proyecto.",
    },
    {
      label: "Condiciones de Pago",
      body: "La facturación se cierra a fin de mes, con pago dentro de los 3 días hábiles siguientes.",
    },
    {
      label: "Métodos de Pago",
      body: "Aceptamos transferencia bancaria y pago con tarjeta de crédito.",
    },
  ],
  achievementsSection: {
    title: "Logros",
    techStackLabel: "Stack Tecnológico",
    supportToolsLabel: "Herramientas de Apoyo",
    screenshotsLabel: "Capturas de Pantalla",
    urlLabel: "URLs del Proyecto",
  },
  achievements: [
    {
      id: "resignation-agency-lp",
      title: "Importante Agencia de Renuncias | Creación de Landing Page",
      description:
        "Creación de la landing page de presentación de una importante agencia de renuncias (dos versiones: solo consultas por correo, y consultas por correo y LINE). Responsable del diseño, la programación, la adaptación responsiva y la publicación.",
      techStack: [
        { name: "Vite", note: "Herramienta para un desarrollo más rápido" },
        { name: "React", note: "Herramienta para construir interfaces combinando componentes" },
        { name: "TypeScript", note: "Lenguaje que ayuda a prevenir errores" },
        {
          name: "Tailwind CSS",
          note: "Herramienta que reduce el esfuerzo de escribir CSS combinando estilos predefinidos",
        },
        { name: "lucide-react", note: "Conjunto de iconos para sitios web" },
        { name: "ESLint", note: "Herramienta de revisión de código" },
        { name: "Render", note: "Servicio para publicar en internet" },
      ],
      supportTools: [
        { name: "Bolt.new", note: "Herramienta para crear páginas mediante conversación con IA" },
      ],
      screenshots: [
        {
          label: "Flujo por Correo y LINE",
          src: "/achievements/lp-email-line-flow.png",
        },
        {
          label: "Flujo por Correo",
          src: "/achievements/lp-email-flow.png",
        },
      ],
      urls: ["https://momuri.com/lp/", "https://momuri.com/lp2/"],
    },
  ],
  profileSection: {
    title: "Perfil",
    photoAlt: "Foto de perfil de ATSUSAGI LAB",
  },
  profileTimeline: [
    {
      year: "2017",
      heading: "Inicio como Redactora Web",
      body: "Comencé a aceptar proyectos de redacción a través de plataformas de crowdsourcing. A través de la creación de contenido web, desarrollé la capacidad de organizar información desde la perspectiva del usuario y aportar valor real.",
    },
    {
      year: "2024",
      heading: "Redactora SEO | Empresa Emergente",
      body: "Planifiqué, estructuré y redacté artículos SEO, además de gestionar medios propios. Participé desde la estrategia de contenido hasta la producción de artículos, creando varios que alcanzaron los primeros puestos en los resultados de búsqueda. En un sitio con un promedio habitual de unas 300 PV mensuales, logré crear artículos que generaron alrededor de 7,000 PV al mes.",
      highlight: "Aprox. 300 PV/mes → Aprox. 7,000 PV/mes",
    },
    {
      year: "2026",
      heading: "Inicio como Ingeniera de IA",
      body: "Comencé a aprender IA y desarrollo web, trabajando en proyectos con IA como chatbots, aplicaciones web y sistemas de eficiencia empresarial. Ese mismo año, asumí la producción de la landing page de mi empresa actual, ganando experiencia práctica en convertir un servicio empresarial real en un sitio web, desde la planificación hasta la implementación y publicación.",
    },
    {
      year: "NOW",
      heading: "Socia de Desarrollo de IA | ATSUSAGI LAB",
      body: "Combinando la capacidad de comprender los desafíos del usuario, cultivada a través del trabajo web y SEO, con habilidades técnicas en IA y desarrollo web, apoyo a los clientes desde la organización de sus desafíos hasta la construcción de sistemas impulsados por IA.",
    },
  ],
  processSection: {
    title: "Nuestro Proceso",
    description:
      "Desde el primer contacto hasta la entrega y el soporte posterior, te acompañamos con atención en cada paso para que puedas solicitar nuestros servicios con total confianza.",
  },
  processSteps: [
    {
      number: "01",
      title: "Contacto",
      body: [
        "Ponte en contacto con nosotros a través del formulario de contacto.",
        'También recibimos consultas en la etapa de exploración: preguntas como "¿esto se puede hacer con IA?" o "no sé qué necesito" son bienvenidas.',
      ],
    },
    {
      number: "02",
      title: "Entrevista",
      body: [
        "Tras revisar tu consulta, te responderemos por correo electrónico.",
        "Te preguntaremos lo siguiente:",
      ],
      bullets: [
        { label: "Si eres particular o empresa" },
        {
          label: "El servicio o tipo de desarrollo que deseas",
          subItems: [
            "Creación de LP / sitio web",
            "Desarrollo de chatbot con IA",
            "Sistemas de eficiencia empresarial con IA",
            "Otro desarrollo de IA / web",
          ],
        },
        { label: "Los entregables deseados y tu visión del resultado final" },
        { label: "Sitios o materiales de referencia" },
        { label: "El plazo deseado" },
        { label: "Fecha y hora preferidas para una reunión en línea" },
      ],
    },
    {
      number: "03",
      title: "Reunión en Línea",
      body: [
        "A partir de la entrevista, conversaremos en línea sobre tus requisitos y desafíos en detalle.",
        "Incluso si no sabes qué construir para resolver tu problema, te preguntaremos sobre tus objetivos y tu situación actual, y te propondremos la mejor solución.",
      ],
    },
    {
      number: "04",
      title: "Presupuesto y Contrato",
      body: [
        "Tras acordar requisitos, especificaciones y plazos, te presentaremos un presupuesto.",
        "Una vez que estés conforme y ambas partes lleguemos a un acuerdo, firmaremos el contrato.",
      ],
    },
    {
      number: "05",
      title: "Pago",
      body: [
        "En principio, el pago se realiza después de firmar el contrato.",
        "Para empresas y otros casos que cumplan ciertas condiciones, también es posible el pago diferido, presentando documentos de identificación o información del registro mercantil.",
      ],
      note: "※Consulta con nosotros de forma individual sobre la disponibilidad y condiciones del pago diferido.",
    },
    {
      number: "06",
      title: "Desarrollo y Producción",
      body: [
        "El desarrollo y la producción comienzan según lo acordado en el contrato.",
        "Te mantendremos informado sobre el progreso y confirmaremos los detalles necesarios a lo largo del proceso.",
      ],
    },
    {
      number: "07",
      title: "Entrega y Ajustes",
      body: [
        "Revisarás el resultado final terminado.",
        "Después de la entrega, atendemos los ajustes necesarios dentro del alcance del contrato.",
      ],
    },
    {
      number: "08",
      title: "Soporte Posterior",
      body: [
        "【Oferta por tiempo limitado】Ahora incluimos 6 meses de soporte posterior gratuito, normalmente desde ¥30,000/mes.",
      ],
      bullets: [
        { label: "Se produce un error y algo no funciona correctamente" },
        { label: "No sabes cómo operar el sistema después de la entrega" },
        { label: "Necesitas capacitación para el personal u otras partes interesadas" },
        { label: "Quieres consultar sobre el sistema desarrollado" },
      ],
      afterBullets: "y otras inquietudes posteriores a la entrega: estamos aquí para ayudarte.",
      note: "※El alcance y los detalles del soporte posterior varían según el contenido del desarrollo/producción. Tras finalizar el periodo gratuito, el soporte puede continuar desde ¥30,000/mes.",
    },
  ],
  contact: {
    eyebrow: "Contacto",
    title: "Contacto",
    description:
      "No dudes en contactarnos mediante el siguiente formulario para consultas o solicitudes de presupuesto.",
    nameLabel: "Nombre",
    namePlaceholder: "Juan Pérez",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "tucorreo@example.com",
    messageLabel: "Mensaje",
    messagePlaceholder: "Describe tu consulta o solicitud",
    submit: "Enviar",
    submitted:
      "Gracias por tu mensaje. La función de envío en línea está actualmente en preparación. Si es urgente, disculpa las molestias: espera mientras te proporcionamos otro medio de contacto.",
  },
  footer: {
    tagline: "Socio de Desarrollo de IA",
  },
  ctaBanner: {
    title: "Ponte en contacto: nos encantaría saber de ti",
    description:
      "Los clientes primerizos son bienvenidos. Con gusto conversamos contigo incluso si tus requisitos aún no están definidos.",
    button: "Contáctanos Aquí",
  },
};

export const translations: Record<Locale, Translations> = { ja, en, es };
