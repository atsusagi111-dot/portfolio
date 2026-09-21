import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { hero } from "@/data/home";
import { services } from "@/data/services";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-32 pt-20 sm:px-6 sm:pb-44 sm:pt-32 lg:px-8">
      {/* 背景：ドット＋右上の淡い金色の光＋大きな中抜き英字 */}
      <div aria-hidden="true" className="bg-dots absolute inset-0 opacity-50" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(176,141,87,0.16),transparent)]"
      />
      <p
        aria-hidden="true"
        className="text-outline pointer-events-none absolute -bottom-6 left-1/2 w-max -translate-x-1/2 select-none whitespace-nowrap font-en text-[5rem] leading-none tracking-[0.06em] sm:text-[8rem] lg:text-[11rem]"
      >
        ATSUSAGI LAB
      </p>

      <div className="relative mx-auto max-w-6xl">
        <p className="animate-rise flex items-center gap-3 font-en text-lg tracking-[0.12em] text-gold-600 sm:text-xl">
          <span
            aria-hidden="true"
            className="h-px w-10 bg-gradient-to-r from-gold to-gold/30"
          />
          {hero.label}
        </p>
        <h1 className="animate-rise animate-rise-delay-1 mt-6 max-w-4xl text-[1.85rem] font-bold leading-[1.5] text-ink sm:text-5xl sm:leading-[1.4] lg:text-[3.75rem]">
          {hero.title}
        </h1>
        <p className="animate-rise animate-rise-delay-2 mt-8 max-w-2xl text-base leading-loose text-ink-muted sm:text-lg sm:leading-loose">
          {hero.description}
        </p>
        <div className="animate-rise animate-rise-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact/" variant="primary" className="sm:px-10">
            {hero.ctaPrimary}
          </Button>
          <Button href="/services/" variant="secondary" className="sm:px-10">
            {hero.ctaSecondary}
          </Button>
        </div>

        {/* 対応サービスのタグ（data/services.ts から生成） */}
        <ul className="animate-rise animate-rise-delay-3 mt-14 flex max-w-3xl flex-wrap gap-2 sm:mt-16">
          {services.map((service) => (
            <li
              key={service.id}
              className="rounded-full border border-navy-50 bg-surface/80 px-4 py-1.5 text-xs font-medium tracking-wide text-ink-muted backdrop-blur-sm"
            >
              {service.name}
            </li>
          ))}
        </ul>
      </div>

      {/* ブランドモチーフのうさぎ。装飾なので読み上げ対象外 */}
      <Image
        src="/images/rabbit/rabbit-run.webp"
        alt=""
        width={480}
        height={278}
        priority
        className="animate-float pointer-events-none absolute bottom-16 right-4 hidden h-auto w-44 opacity-30 sm:block lg:bottom-20 lg:right-16 lg:w-64"
      />
    </section>
  );
}
