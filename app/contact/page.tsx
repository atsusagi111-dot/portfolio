import type { Metadata } from "next";
import { ContactPageBody } from "@/components/sections/ContactPageBody";

export const metadata: Metadata = {
  title: "お問い合わせ｜AI開発パートナー ATSUSAGI LAB",
  description:
    "ホームページ制作、Webシステム開発、AI活用に関するご相談はこちらから。初めてのご依頼も歓迎です。",
};

export default function ContactPage() {
  return <ContactPageBody />;
}
