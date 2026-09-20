import { Section } from "@/components/layout/Section";
import { TextLink } from "@/components/ui/TextLink";
import { flowSection, processSteps } from "@/data/flow";

/** ホーム用：8ステップの見出しだけを並べた要約 */
export function FlowSummary() {
  return (
    <Section
      tone="alt"
      eyebrow="Flow"
      title={flowSection.title}
      description={flowSection.description}
    >
      <ol className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {processSteps.map((step) => (
          <li
            key={step.number}
            className="flex flex-col gap-2 rounded-xl border border-navy-50 bg-surface p-5 sm:p-6"
          >
            <span className="font-en text-2xl text-gold-600">{step.number}</span>
            <span className="text-sm font-bold leading-snug text-ink sm:text-base">
              {step.title}
            </span>
          </li>
        ))}
      </ol>
      <div className="mt-12 flex flex-wrap justify-end gap-x-10 gap-y-4">
        <TextLink href="/flow/">ご依頼の流れを詳しく見る</TextLink>
        <TextLink href="/flow/#faq">よくあるご質問</TextLink>
      </div>
    </Section>
  );
}
