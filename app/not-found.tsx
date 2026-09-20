import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "ページが見つかりません｜ATSUSAGI LAB",
  robots: { index: false, follow: true },
};

// 静的エクスポートでは out/404.html として出力され、.htaccess の ErrorDocument から表示される
export default function NotFound() {
  return (
    <section className="px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
      <Image
        src="/images/rabbit/rabbit-run.webp"
        alt=""
        width={480}
        height={278}
        className="mx-auto h-auto w-32 opacity-80"
      />
      <p className="mt-8 font-en text-6xl text-gold-600">404</p>
      <h1 className="mt-4 text-xl font-bold text-ink sm:text-2xl">
        お探しのページが見つかりませんでした
      </h1>
      <p className="mx-auto mt-5 max-w-xl leading-loose text-ink-muted">
        ページが移動または削除されたか、URLが間違っている可能性があります。
      </p>
      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
        <Button href="/" variant="primary" className="sm:px-12">
          ホームへ戻る
        </Button>
        <Button href="/contact/" variant="secondary" className="sm:px-12">
          お問い合わせ
        </Button>
      </div>
    </section>
  );
}
