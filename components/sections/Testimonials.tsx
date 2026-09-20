import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { MaterialText } from "@/components/ui/MaterialText";
import { flags } from "@/data/site";
import { testimonials, testimonialsSection } from "@/data/testimonials";

/** お客様の声。flags.showTestimonials が false の間はセクションごと表示しない */
export function Testimonials() {
  if (!flags.showTestimonials || testimonials.length === 0) return null;

  return (
    <Section eyebrow="Voice" title={testimonialsSection.title}>
      <ul className="grid gap-6 md:grid-cols-2">
        {testimonials.map((item) => (
          <li key={item.body} className="rounded-2xl border border-navy-50 bg-surface p-8">
            <blockquote className="leading-loose text-ink">
              <MaterialText text={item.body} />
            </blockquote>
            <div className="mt-6 flex items-center gap-4 border-t border-navy-50 pt-6">
              {/* 比率固定（1:1）の写真枠 */}
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-surface-alt">
                <Image
                  src={item.photo ?? "/placeholder/person.svg"}
                  alt=""
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <p className="text-sm">
                <span className="block font-medium text-ink">
                  <MaterialText text={item.attribution} />
                </span>
                <span className="mt-1 block text-ink-muted">
                  <MaterialText text={item.service} />
                </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
