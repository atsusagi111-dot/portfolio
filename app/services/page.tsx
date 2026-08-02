import type { Metadata } from "next";
import { ServicesPageBody } from "@/components/sections/ServicesPageBody";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "サービス内容｜AI開発パートナー ATSUSAGI LAB",
  description:
    "ホームページ制作・LP制作・Webシステム開発・AIチャットボット制作・業務効率化・システム連携まで、ATSUSAGI LABのサービス内容をご紹介します。",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesPageBody />
      <CtaBanner />
    </>
  );
}
