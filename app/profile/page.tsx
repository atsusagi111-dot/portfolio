import type { Metadata } from "next";
import { Profile } from "@/components/sections/Profile";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "開発者プロフィール｜AI開発パートナー ATSUSAGI LAB",
  description:
    "ATSUSAGI LABの開発者プロフィール。Webライター・SEOライターとしての経験から、AIエンジニアとしての活動まで、これまでの歩みをご紹介します。",
};

export default function ProfilePage() {
  return (
    <>
      <Profile />
      <CtaBanner />
    </>
  );
}
