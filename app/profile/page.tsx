import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { OperatorInfo } from "@/components/sections/OperatorInfo";
import { MaterialText } from "@/components/ui/MaterialText";
import { operatorSection } from "@/data/operator";
import { profile, timeline } from "@/data/profile";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "代表プロフィール・運営者情報",
  description:
    "ATSUSAGI LAB代表のプロフィール（仕事への姿勢・経歴）と、運営者情報を掲載しています。",
  path: "/profile/",
});

export default function ProfilePage() {
  return (
    <>
      <PageHeader
        eyebrow="Profile"
        title="代表プロフィール・運営者情報"
        breadcrumb={[{ label: "プロフィール", href: "/profile/" }]}
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-[280px_1fr] md:gap-16">
          <div>
            {/* 比率固定（1:1）の写真枠。assets-src/profile/ の画像を差し替えるだけで反映される */}
            <div className="relative mx-auto aspect-square w-56 rounded-full p-1.5 ring-1 ring-gold/50 ring-offset-4 ring-offset-surface md:w-full">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-surface-alt">
                <Image
                  src={profile.photo}
                  alt={profile.photoAlt}
                  fill
                  priority
                  sizes="(min-width: 768px) 280px, 224px"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-ink-muted md:text-left">
              {profile.role}
            </p>
            <p className="mt-1 text-center text-xl font-bold text-ink md:text-left">
              <MaterialText text={profile.name} />
            </p>
          </div>

          <div>
            <h2 className="flex items-center gap-3 text-xl font-bold text-ink sm:text-2xl">
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
              {profile.messageTitle}
            </h2>
            <div className="mt-6 flex flex-col gap-4 leading-loose text-ink-muted">
              {profile.message.map((paragraph) => (
                <p key={paragraph}>
                  <MaterialText text={paragraph} />
                </p>
              ))}
            </div>
            <p className="mt-6 text-right font-bold text-ink">
              {profile.messageSignature}
            </p>

            {profile.qualifications.length > 0 && (
              <>
                <h2 className="mt-14 flex items-center gap-3 text-xl font-bold text-ink sm:text-2xl">
                  <span aria-hidden="true" className="h-px w-8 bg-gold" />
                  {profile.qualificationsTitle}
                </h2>
                <ul className="mt-6 flex flex-col gap-2 text-ink-muted">
                  {profile.qualifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </Section>

      <Section tone="alt" eyebrow="Career" title={profile.timelineTitle}>
        <ol className="flex max-w-3xl flex-col gap-10 border-l border-navy-50 pl-8">
          {timeline.map((item) => (
            <li key={item.year} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[38.5px] top-2.5 h-3 w-3 rounded-full bg-gold ring-4 ring-surface-alt"
              />
              <p className="font-en text-2xl text-gold-600">{item.year}</p>
              <h3 className="mt-1 text-lg font-bold text-ink sm:text-xl">
                {item.heading}
              </h3>
              <p className="mt-3 leading-loose text-ink-muted">{item.body}</p>
              {item.highlight && (
                <p className="mt-4 inline-block rounded-lg bg-gold-50 px-4 py-2 text-sm font-bold text-navy">
                  {item.highlight}
                </p>
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="operator"
        eyebrow="About"
        title={operatorSection.title}
        center
      >
        <OperatorInfo />
      </Section>
    </>
  );
}
