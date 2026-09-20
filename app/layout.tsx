import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaSlot } from "@/components/layout/CtaSlot";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl, site } from "@/data/site";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// 英字ラベル用
const cormorant = Cormorant_Garamond({
  variable: "--font-en",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.defaultTitle,
  description: site.description,
  alternates: {
    types: { "application/rss+xml": [{ url: "/feed.xml", title: `${site.name} コラム` }] },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          本文へ移動
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <CtaSlot>
          <CtaBanner />
        </CtaSlot>
        <Footer />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.name,
            url: absoluteUrl("/"),
            logo: absoluteUrl("/images/logo/atsusagi-lab-badge.webp"),
            description: site.description,
          }}
        />
      </body>
    </html>
  );
}
