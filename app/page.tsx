import { Hero } from "@/components/sections/Hero";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { ServicesSummaryGrid } from "@/components/sections/ServicesSummaryGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TargetAudience />
      <ServicesSummaryGrid />
      <CtaBanner />
    </>
  );
}
