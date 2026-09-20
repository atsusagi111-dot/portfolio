import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { hero } from "@/data/home";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-20 sm:px-6 sm:pb-36 sm:pt-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="flex items-center gap-3 font-en text-lg tracking-wide text-gold-600 sm:text-xl">
          <span aria-hidden="true" className="h-px w-8 bg-gold" />
          {hero.label}
        </p>
        <h1 className="mt-6 max-w-4xl text-[1.75rem] font-bold leading-[1.5] text-ink sm:text-5xl sm:leading-[1.45] lg:text-[3.5rem]">
          {hero.title}
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-loose text-ink-muted sm:text-lg sm:leading-loose">
          {hero.description}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact/" variant="primary" className="sm:px-10">
            {hero.ctaPrimary}
          </Button>
          <Button href="/services/" variant="secondary" className="sm:px-10">
            {hero.ctaSecondary}
          </Button>
        </div>
      </div>
      {/* ブランドモチーフのうさぎ。装飾なので読み上げ対象外 */}
      <Image
        src="/images/rabbit/rabbit-run.webp"
        alt=""
        width={480}
        height={278}
        className="pointer-events-none absolute -bottom-2 right-4 hidden h-auto w-40 opacity-25 sm:block lg:right-16 lg:w-56"
      />
    </section>
  );
}
