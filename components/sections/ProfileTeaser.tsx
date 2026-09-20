import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { MaterialText } from "@/components/ui/MaterialText";
import { TextLink } from "@/components/ui/TextLink";
import { profile } from "@/data/profile";

/** ホーム用：代表プロフィールへの導線 */
export function ProfileTeaser() {
  return (
    <Section eyebrow="Profile" title={profile.title}>
      <div className="grid items-center gap-10 md:grid-cols-[240px_1fr] md:gap-16">
        {/* 比率固定（1:1）の写真枠 */}
        <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-full bg-surface-alt md:w-full">
          <Image
            src={profile.photo}
            alt={profile.photoAlt}
            fill
            sizes="(min-width: 768px) 240px, 192px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm text-ink-muted">{profile.role}</p>
          <p className="mt-2 text-xl font-bold text-ink">
            <MaterialText text={profile.name} />
          </p>
          <p className="mt-6 leading-loose text-ink-muted">{profile.shortBio}</p>
          <div className="mt-8">
            <TextLink href="/profile/">プロフィールを詳しく見る</TextLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
