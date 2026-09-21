import { Section } from "@/components/layout/Section";
import { worries } from "@/data/home";

export function Worries() {
  return (
    <Section tone="alt" eyebrow="Problem" title={worries.title} center>
      <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
        {worries.items.map((item, index) => (
          <li
            key={item}
            className="group flex items-start gap-5 rounded-2xl border border-navy-50/80 bg-surface p-6 leading-relaxed text-ink shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-card-hover)]"
          >
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-50 font-en text-lg text-gold-600 transition-colors group-hover:bg-gold group-hover:text-white"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="pt-1.5">{item}</span>
          </li>
        ))}
      </ul>
      <div className="mx-auto mt-14 max-w-2xl text-center">
        <span aria-hidden="true" className="mx-auto mb-6 block h-10 w-px bg-gradient-to-b from-gold to-transparent" />
        <p className="text-base font-medium leading-loose text-ink sm:text-lg sm:leading-loose">
          {worries.closing}
        </p>
      </div>
    </Section>
  );
}
