import Image from "next/image";
import { MaterialText } from "@/components/ui/MaterialText";
import { TextLink } from "@/components/ui/TextLink";
import { worksSection, type TechItem, type Work } from "@/data/works";

function TechList({ items }: { items: TechItem[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item.name}
          className="rounded-md border border-navy-50 bg-surface-alt px-3 py-1 font-en text-base font-semibold tracking-wide text-navy"
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

/** 実績1件分。「課題→対応→成果」の順で見せる。detailed=false は要約表示（ホーム用） */
export function WorkCard({
  work,
  detailed = true,
  headingLevel = "h2",
}: {
  work: Work;
  detailed?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const SubHeading = headingLevel === "h2" ? "h3" : "h4";
  const steps = [
    {
      label: worksSection.challengeLabel,
      en: "Challenge",
      text: work.challenge,
    },
    { label: worksSection.approachLabel, en: "Approach", text: work.approach },
    { label: worksSection.resultLabel, en: "Result", text: work.result },
  ];

  return (
    <article
      id={work.id}
      className="overflow-hidden rounded-2xl border border-navy-50/80 bg-surface shadow-[var(--shadow-card)]"
    >
      <div className="p-6 sm:p-10">
        <p className="inline-block rounded-full bg-gold-50 px-4 py-1 text-xs font-medium text-gold-600">
          {work.category}
        </p>
        <Heading className="mt-4 text-xl font-bold leading-snug text-ink sm:text-2xl">
          {work.title}
        </Heading>
        <p className="mt-4 leading-loose text-ink-muted">{work.summary}</p>
        {work.siteUrl && (
          <p className="mt-4">
            <TextLink href={work.siteUrl} external>
              {work.siteLinkLabel ?? worksSection.siteLinkLabel}
            </TextLink>
          </p>
        )}

        <ol className="mt-8 grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.label}
              className="relative rounded-xl border border-navy-50/60 bg-surface-alt p-6 transition-colors hover:border-gold/40"
            >
              <p className="flex items-baseline gap-3">
                <span className="font-en text-xl text-gold-600">{step.en}</span>
                <span className="text-sm font-bold text-ink">{step.label}</span>
              </p>
              <p className="mt-3 text-sm leading-loose text-ink">
                <MaterialText text={step.text} />
              </p>
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-[1.35rem] left-1/2 z-10 flex h-7 w-7 -translate-x-1/2 rotate-90 items-center justify-center rounded-full border border-gold/40 bg-surface text-gold lg:-right-[1.15rem] lg:bottom-auto lg:left-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:rotate-0"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ol>

        {work.screenshots.length > 0 && (
          <div className="mt-10">
            <SubHeading className="text-sm font-bold text-ink">
              {worksSection.screenshotsLabel}
            </SubHeading>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {work.screenshots.map((shot) => (
                <figure key={shot.src}>
                  {/* 比率固定（1:1）の枠。差し替えてもレイアウトが崩れない */}
                  <div className="relative aspect-square overflow-hidden rounded-xl border border-navy-50 bg-surface-alt shadow-[var(--shadow-card)]">
                    <Image
                      src={shot.src}
                      alt={`${work.title}の制作画面（${shot.label}）`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <figcaption className="mt-2 text-xs text-ink-muted">
                    {shot.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        {detailed &&
          (work.techStack.length > 0 ||
            work.supportTools.length > 0 ||
            work.urls.length > 0) && (
            <div className="mt-10 grid gap-8 border-t border-navy-50 pt-8 sm:grid-cols-2">
              {work.techStack.length > 0 && (
                <div>
                  <SubHeading className="text-sm font-bold text-ink">
                    {worksSection.techStackLabel}
                  </SubHeading>
                  <TechList items={work.techStack} />
                </div>
              )}
              <div className="flex flex-col gap-8">
                {work.supportTools.length > 0 && (
                  <div>
                    <SubHeading className="text-sm font-bold text-ink">
                      {worksSection.supportToolsLabel}
                    </SubHeading>
                    <TechList items={work.supportTools} />
                  </div>
                )}
                {work.urls.length > 0 && (
                  <div>
                    <SubHeading className="text-sm font-bold text-ink">
                      {worksSection.urlLabel}
                    </SubHeading>
                    <ul className="mt-3 flex flex-col gap-1">
                      {work.urls.map((url) => (
                        <li key={url}>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="break-all text-sm text-navy underline underline-offset-4 hover:text-navy-700"
                          >
                            {url}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
      </div>
    </article>
  );
}
