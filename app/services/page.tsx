import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "サービス内容｜AI開発パートナー ATSUSAGI LAB",
  description:
    "ホームページ制作・LP制作・Webシステム開発・AIチャットボット制作・業務効率化・システム連携まで、ATSUSAGI LABのサービス内容をご紹介します。",
};

export default function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Services"
        title="サービス内容"
        description="ホームページ制作からAIを活用した業務自動化まで、お客様の目的に合わせてワンストップでご対応します。"
      >
        <div className="flex flex-col gap-6">
          {services.map((service) => (
            <ServiceDetail key={service.id} service={service} />
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
