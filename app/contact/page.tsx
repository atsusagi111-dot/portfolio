import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ｜AI開発パートナー ATSUSAGI LAB",
  description:
    "ホームページ制作、Webシステム開発、AI活用に関するご相談はこちらから。初めてのご依頼も歓迎です。",
};

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="お問い合わせ"
      description="ご相談・お見積もりのご依頼はこちらのフォームからお気軽にお送りください。"
      className="min-h-[60vh]"
    >
      <div className="mx-auto max-w-xl rounded-2xl border border-navy-50 bg-surface-card p-6 sm:p-10">
        <ContactForm />
      </div>
    </Section>
  );
}
