import { Section } from "@/components/layout/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/content";

export function ServicesSummaryGrid() {
  return (
    <Section
      eyebrow="Services"
      title="サービス内容"
      description="ホームページ制作からAIを活用した業務自動化まで、幅広くご対応します。"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Section>
  );
}
