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
        <div className="relative mx-auto aspect-square w-48 rounded-full p-1.5 ring-1 ring-gold/50 ring-offset-4 ring-offset-surface md:w-full">
          <div className="relative h-full w-full overflow-hidden rounded-full bg-surface-alt">
            <Image
              src={profile.photo}
              alt={profile.photoAlt}
              fill
              sizes="(min-width: 768px) 240px, 192px"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <p className="font-en text-lg tracking-[0.08em] text-gold-600">
            Representative
          </p>
          <p className="mt-1 text-sm text-ink-muted">{profile.role}</p>
          <p className="mt-2 text-2xl font-bold text-ink">
            <MaterialText text={profile.name} />
          </p>
          <p className="mt-6 leading-loose text-ink-muted">
            {profile.shortBio}
          </p>
          <div className="mt-8">
            <TextLink href="/profile/">プロフィールを詳しく見る</TextLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
