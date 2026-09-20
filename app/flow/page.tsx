import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Faq } from "@/components/sections/Faq";
import { ProcessFlow } from "@/components/sections/ProcessFlow";
import { faqSection } from "@/data/faq";
import { flowSection } from "@/data/flow";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "ご依頼の流れ・よくあるご質問",
  description:
    "お問い合わせからヒアリング、お見積もり、制作、納品、アフターフォローまでのご依頼の流れと、よくあるご質問をまとめています。",
  path: "/flow/",
});

export default function FlowPage() {
  return (
    <>
      <PageHeader
        eyebrow="Flow"
        title={flowSection.title}
        description={flowSection.description}
        breadcrumb={[{ label: flowSection.title, href: "/flow/" }]}
      />
      <Section eyebrow="Step" title="お問い合わせから納品後まで、8つのステップ" center>
        <ProcessFlow />
      </Section>
      <Section id="faq" tone="alt" eyebrow="FAQ" title={faqSection.title} center>
        <Faq />
      </Section>
    </>
  );
}
