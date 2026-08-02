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
  examples?: string[];
};

export type TechItem = {
  name: string;
  note: string;
};

export type AchievementItem = {
  id: string;
  title: string;
  description: string;
  techStack: TechItem[];
  supportTools: TechItem[];
  urls: string[];
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
  };
  services: Record<ServiceId, ServiceContent>;
  achievementsSection: {
    title: string;
    techStackLabel: string;
    supportToolsLabel: string;
    urlLabel: string;
  };
  achievements: AchievementItem[];
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
  },
  services: {
    homepage: {
      name: "ホームページ制作",
      shortDescription:
        "企業・店舗・個人向けのホームページ制作。スマートフォンにも対応した、見やすく使いやすいデザイン。",
      fullDescription:
        "企業・店舗・個人事業主向けに、目的に合わせたホームページを制作します。スマートフォンにも対応した、見やすく使いやすいデザインをご提供します。",
    },
    lp: {
      name: "LP制作",
      shortDescription:
        "商品・サービスを紹介し、お問い合わせや申し込みにつなげる1ページのWebサイト制作。",
      fullDescription:
        "商品やサービスの魅力を分かりやすく伝え、お問い合わせや申し込みにつながるページを制作します。",
    },
    "web-system": {
      name: "Webシステム開発",
      shortDescription:
        "予約・顧客管理・問い合わせ管理など、業務を便利にするWebシステムの開発。",
      fullDescription:
        "予約管理・顧客管理・お問い合わせ管理など、日々の業務を効率化するオリジナルシステムを開発します。",
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
        "ホームページやLINEにAIを導入し、お客様からの質問に24時間自動で回答できる仕組みを構築します。",
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
        "AIを活用して、お問い合わせ対応や情報検索など、これまで人が行っていた作業を自動化します。業務の負担を減らし、より効率的な運営をサポートします。",
    },
    "system-integration": {
      name: "システム連携・業務自動化",
      shortDescription:
        "複数のサービスを連携し、データ入力・通知・情報共有などの作業を自動化。",
      fullDescription:
        "複数のサービスを連携し、データ入力や通知などの繰り返し作業を自動化します。お客様の業務に合わせたシステムを構築します。",
      examples: [
        "フォームの内容を自動で管理表へ登録",
        "LINEやメールへ自動通知",
        "AIと連携した問い合わせ対応",
        "複数のシステム間でデータを自動共有",
      ],
    },
  },
  achievementsSection: {
    title: "実績",
    techStackLabel: "技術構成",
    supportToolsLabel: "補助ツール",
    urlLabel: "制作URL",
  },
  achievements: [
    {
      id: "momuri-lp",
      title: "退職代行モームリ｜LP制作",
      description:
        "退職代行モームリ紹介LPを制作(メール問い合わせ・メール＆LINE問い合わせの2種)。デザイン・コーディング・レスポンシブ対応・公開まで担当。",
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
      urls: ["https://momuri.com/lp/", "https://momuri.com/lp2/"],
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
  },
  services: {
    homepage: {
      name: "Website Production",
      shortDescription:
        "Website production for businesses, shops, and individuals. Clear, user-friendly designs that also work great on smartphones.",
      fullDescription:
        "We build websites tailored to your goals for businesses, shops, and sole proprietors, with clear, user-friendly designs that work great on smartphones too.",
    },
    lp: {
      name: "Landing Page Production",
      shortDescription:
        "A single-page website that showcases your product or service and drives inquiries and sign-ups.",
      fullDescription:
        "We create pages that clearly communicate the appeal of your products and services and lead to inquiries and applications.",
    },
    "web-system": {
      name: "Web System Development",
      shortDescription:
        "Web systems for reservations, customer management, inquiry management, and more to streamline your operations.",
      fullDescription:
        "We develop custom systems for reservation management, customer management, inquiry management, and more to streamline your day-to-day operations.",
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
        "We integrate AI into your website or LINE to automatically answer customer questions around the clock.",
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
        "We use AI to automate tasks that used to be done manually, such as handling inquiries and searching for information — reducing workload and supporting more efficient operations.",
    },
    "system-integration": {
      name: "System Integration & Automation",
      shortDescription:
        "We connect multiple services to automate data entry, notifications, information sharing, and more.",
      fullDescription:
        "We connect multiple services to automate repetitive tasks like data entry and notifications, building systems tailored to your business.",
      examples: [
        "Automatically registering form submissions into a management spreadsheet",
        "Automatic notifications via LINE or email",
        "AI-integrated inquiry response",
        "Automatic data sharing across multiple systems",
      ],
    },
  },
  achievementsSection: {
    title: "Achievements",
    techStackLabel: "Tech Stack",
    supportToolsLabel: "Supporting Tools",
    urlLabel: "Live URLs",
  },
  achievements: [
    {
      id: "momuri-lp",
      title: "Moumuri Resignation Agency | Landing Page Production",
      description:
        "Produced the introductory landing page for Moumuri, a resignation-proxy agency (two versions: email-only inquiries, and email + LINE inquiries). Handled design, coding, responsive support, and publishing.",
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
      urls: ["https://momuri.com/lp/", "https://momuri.com/lp2/"],
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
  },
  services: {
    homepage: {
      name: "Creación de Sitios Web",
      shortDescription:
        "Creación de sitios web para empresas, comercios y particulares. Diseños claros y fáciles de usar, también optimizados para móviles.",
      fullDescription:
        "Creamos sitios web adaptados a tus objetivos para empresas, comercios y autónomos, con diseños claros y fáciles de usar que también funcionan muy bien en móviles.",
    },
    lp: {
      name: "Creación de Landing Pages",
      shortDescription:
        "Un sitio web de una sola página que presenta tu producto o servicio y genera consultas y registros.",
      fullDescription:
        "Creamos páginas que comunican claramente el atractivo de tus productos y servicios, generando consultas y solicitudes.",
    },
    "web-system": {
      name: "Desarrollo de Sistemas Web",
      shortDescription:
        "Sistemas web para reservas, gestión de clientes, gestión de consultas y más, para optimizar tus operaciones.",
      fullDescription:
        "Desarrollamos sistemas personalizados para la gestión de reservas, clientes, consultas y más, optimizando tus operaciones diarias.",
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
        "Integramos IA en tu sitio web o LINE para responder automáticamente a las preguntas de los clientes las 24 horas.",
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
        "Utilizamos IA para automatizar tareas que antes se hacían manualmente, como la atención de consultas y la búsqueda de información, reduciendo la carga de trabajo y apoyando una operación más eficiente.",
    },
    "system-integration": {
      name: "Integración de Sistemas y Automatización",
      shortDescription:
        "Conectamos varios servicios para automatizar la entrada de datos, notificaciones, el intercambio de información y más.",
      fullDescription:
        "Conectamos varios servicios para automatizar tareas repetitivas como la entrada de datos y las notificaciones, creando sistemas adaptados a tu negocio.",
      examples: [
        "Registro automático de formularios en una hoja de gestión",
        "Notificaciones automáticas por LINE o correo electrónico",
        "Atención de consultas integrada con IA",
        "Compartición automática de datos entre varios sistemas",
      ],
    },
  },
  achievementsSection: {
    title: "Logros",
    techStackLabel: "Stack Tecnológico",
    supportToolsLabel: "Herramientas de Apoyo",
    urlLabel: "URLs del Proyecto",
  },
  achievements: [
    {
      id: "momuri-lp",
      title: "Moumuri (Agencia de Renuncias) | Creación de Landing Page",
      description:
        "Creación de la landing page de presentación de Moumuri, una agencia de renuncias (dos versiones: solo consultas por correo, y consultas por correo y LINE). Responsable del diseño, la programación, la adaptación responsiva y la publicación.",
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
      urls: ["https://momuri.com/lp/", "https://momuri.com/lp2/"],
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
