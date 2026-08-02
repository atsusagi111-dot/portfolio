import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6">
        <p className="text-sm font-semibold tracking-wide text-gold">
          AI開発パートナー
        </p>
        <h1 className="max-w-2xl text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
          ホームページ制作からAI活用まで、
          <br className="hidden sm:block" />
          ATSUSAGI LABがワンストップでサポートします
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          LP・ホームページ制作、Webシステム開発、AIチャットボット構築、業務自動化まで。
          初めてのご依頼でも安心してお任せいただけます。
        </p>
        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Button href="/contact" variant="primary">
            お問い合わせ
          </Button>
          <Button href="/services" variant="secondary">
            サービスを見る
          </Button>
        </div>
      </div>
    </section>
  );
}
