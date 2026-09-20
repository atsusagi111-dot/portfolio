import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Testimonials } from "@/components/sections/Testimonials";
import { WorkCard } from "@/components/sections/WorkCard";
import { works, worksSection } from "@/data/works";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "実績",
  description:
    "ATSUSAGI LABがこれまでに担当した制作・開発の実績を、課題・対応・成果の流れでご紹介します。",
  path: "/works/",
});

export default function WorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Works"
        title={worksSection.title}
        description={worksSection.description}
        breadcrumb={[{ label: worksSection.title, href: "/works/" }]}
      />
      <Section>
        <div className="flex flex-col gap-10">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </Section>
      <Testimonials />
    </>
  );
}
