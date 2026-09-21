import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ctaBanner } from "@/data/home";

/** 全ページ下部に表示する共通のお問い合わせCTA（app/layout.tsx で配置） */
export function CtaBanner() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative overflow-hidden bg-navy px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      <div aria-hidden="true" className="bg-dots-light absolute inset-0 opacity-50" />
      {/* 金色の淡い光 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/25 blur-3xl"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <Image
          src="/images/rabbit/rabbit-run.webp"
          alt=""
          width={480}
          height={278}
          className="animate-float h-auto w-24 opacity-90"
        />
        <p className="mt-6 font-en text-xl tracking-[0.12em] text-gold">Contact</p>
        <h2 id="cta-title" className="mt-3 text-2xl font-bold leading-snug text-white sm:text-[2.125rem]">
          {ctaBanner.title}
        </h2>
        <p className="mt-5 leading-loose text-white/80">{ctaBanner.description}</p>
        <Button href="/contact/" variant="inverse" className="mt-10 w-full sm:w-auto sm:px-12">
          {ctaBanner.button}
        </Button>
      </div>
    </section>
  );
}
