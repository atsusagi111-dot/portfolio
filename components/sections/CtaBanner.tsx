import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ctaBanner } from "@/data/home";

/** 全ページ下部に表示する共通のお問い合わせCTA（app/layout.tsx で配置） */
export function CtaBanner() {
  return (
    <section aria-labelledby="cta-title" className="bg-navy px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Image
          src="/images/rabbit/rabbit-run.webp"
          alt=""
          width={480}
          height={278}
          className="h-auto w-20 opacity-90"
        />
        <p className="mt-6 font-en text-xl tracking-wide text-gold">Contact</p>
        <h2 id="cta-title" className="mt-3 text-2xl font-bold leading-snug text-white sm:text-3xl">
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
