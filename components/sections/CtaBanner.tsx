import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-3xl bg-navy px-6 py-14 text-center sm:px-12">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          まずはお気軽にお問い合わせください
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
          初めてのご依頼でも安心。要件が固まっていない段階でのご相談も歓迎です。
        </p>
        <Button
          href="/contact"
          variant="secondary"
          className="border-white bg-white text-navy hover:bg-white/90"
        >
          お問い合わせはこちら
        </Button>
      </div>
    </section>
  );
}
