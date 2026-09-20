import { Section } from "@/components/layout/Section";
import { worries } from "@/data/home";

export function Worries() {
  return (
    <Section tone="alt" eyebrow="Problem" title={worries.title} center>
      <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
        {worries.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-4 rounded-xl border border-navy-50 bg-surface p-6 leading-relaxed text-ink"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="mt-0.5 h-5 w-5 shrink-0 text-gold"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
      <p className="mx-auto mt-12 max-w-2xl text-center text-base font-medium leading-loose text-ink sm:text-lg sm:leading-loose">
        {worries.closing}
      </p>
    </Section>
  );
}
