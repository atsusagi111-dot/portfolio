import { Section } from "@/components/layout/Section";
import { TextLink } from "@/components/ui/TextLink";
import { FlowDiagram } from "@/components/sections/FlowDiagram";
import { flowSection } from "@/data/flow";

/** ホーム用：8ステップの見出しだけを並べた要約 */
export function FlowSummary() {
  return (
    <Section
      tone="alt"
      eyebrow="Flow"
      title={flowSection.title}
      description={flowSection.description}
    >
      <FlowDiagram hrefBase="/flow/" />
      <div className="mt-12 flex flex-wrap justify-end gap-x-10 gap-y-4">
        <TextLink href="/flow/">ご依頼の流れを詳しく見る</TextLink>
        <TextLink href="/flow/#faq">よくあるご質問</TextLink>
      </div>
    </Section>
  );
}
