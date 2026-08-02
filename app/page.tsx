import { Hero } from "@/components/sections/Hero";
import { Achievements } from "@/components/sections/Achievements";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { ServicesSummaryGrid } from "@/components/sections/ServicesSummaryGrid";
import { ProcessFlow } from "@/components/sections/ProcessFlow";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export default function Home() {
  return (
    <>
      <Hero />
      <RevealOnScroll>
        <ServicesSummaryGrid />
      </RevealOnScroll>
      <RevealOnScroll>
        <Achievements />
      </RevealOnScroll>
      <RevealOnScroll>
        <TargetAudience />
      </RevealOnScroll>
      <RevealOnScroll>
        <ProcessFlow />
      </RevealOnScroll>
      <RevealOnScroll>
        <CtaBanner />
      </RevealOnScroll>
    </>
  );
}
