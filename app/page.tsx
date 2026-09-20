import { Hero } from "@/components/sections/Hero";
import { Worries } from "@/components/sections/Worries";
import { ServicesSummary } from "@/components/sections/ServicesSummary";
import { WorkCard } from "@/components/sections/WorkCard";
import { Testimonials } from "@/components/sections/Testimonials";
import { FlowSummary } from "@/components/sections/FlowSummary";
import { ProfileTeaser } from "@/components/sections/ProfileTeaser";
import { LatestColumns } from "@/components/column/LatestColumns";
import { Section } from "@/components/layout/Section";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TextLink } from "@/components/ui/TextLink";
import { works, worksSection } from "@/data/works";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ description: site.description, path: "/" });

export default function Home() {
  return (
    <>
      <Hero />
      <RevealOnScroll>
        <Worries />
      </RevealOnScroll>
      <RevealOnScroll>
        <ServicesSummary />
      </RevealOnScroll>
      <RevealOnScroll>
        <Section
          tone="alt"
          eyebrow="Works"
          title={worksSection.title}
          description={worksSection.description}
        >
          <WorkCard work={works[0]} detailed={false} headingLevel="h3" />
          <div className="mt-12 text-right">
            <TextLink href="/works/">実績を詳しく見る</TextLink>
          </div>
        </Section>
      </RevealOnScroll>
      <RevealOnScroll>
        <Testimonials />
      </RevealOnScroll>
      <RevealOnScroll>
        <ProfileTeaser />
      </RevealOnScroll>
      <RevealOnScroll>
        <FlowSummary />
      </RevealOnScroll>
      <RevealOnScroll>
        <LatestColumns />
      </RevealOnScroll>
    </>
  );
}
