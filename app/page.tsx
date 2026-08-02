import { Hero } from "@/components/sections/Hero";
import { Achievements } from "@/components/sections/Achievements";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { ServicesSummaryGrid } from "@/components/sections/ServicesSummaryGrid";
import { ProcessFlow } from "@/components/sections/ProcessFlow";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Achievements />
      <TargetAudience />
      <ServicesSummaryGrid />
      <ProcessFlow />
      <CtaBanner />
    </>
  );
}
