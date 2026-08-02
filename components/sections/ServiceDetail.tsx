import Image from "next/image";
import type { AchievementScreenshot, TechItem } from "@/lib/i18n/translations";

type RelatedAchievement = {
  labelPrefix: string;
  title: string;
  screenshots: AchievementScreenshot[];
  techStack: TechItem[];
  techStackLabel: string;
  supportTools: TechItem[];
  supportToolsLabel: string;
  urls: string[];
  urlLabel: string;
};

type ServiceDetailProps = {
  id: string;
  name: string;
  fullDescription: string;
  price: string;
  priceLabel: string;
  examples?: string[];
  relatedAchievement?: RelatedAchievement;
};

function TagList({ items }: { items: TechItem[] }) {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item.name}
          className="rounded-xl border border-navy-50 bg-surface px-3 py-1.5 text-xs font-medium text-ink"
        >
          {item.name}
        </span>
      ))}
    </div>
  );
}

export function ServiceDetail({
  id,
  name,
  fullDescription,
  price,
  priceLabel,
  examples,
  relatedAchievement,
}: ServiceDetailProps) {
  return (
    <article
      id={id}
      className="scroll-mt-24 rounded-2xl border border-navy-50 bg-surface-card p-8"
    >
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <h3 className="text-xl font-bold text-ink sm:text-2xl">{name}</h3>
        <div className="flex items-baseline gap-2 sm:flex-col sm:items-end sm:gap-0">
          <span className="text-xs text-ink-muted">{priceLabel}</span>
          <span className="text-lg font-bold text-navy">{price}</span>
        </div>
      </div>
      <p className="mt-4 leading-relaxed text-ink-muted">{fullDescription}</p>
      {examples && examples.length > 0 && (
        <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {examples.map((example) => (
            <li
              key={example}
              className="flex items-start gap-2 text-sm leading-relaxed text-ink"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {example}
            </li>
          ))}
        </ul>
      )}

      {relatedAchievement && (
        <div className="mt-6 border-t border-navy-50 pt-6">
          <p className="text-sm font-semibold text-gold">
            {relatedAchievement.labelPrefix}
            {relatedAchievement.title}
          </p>

          {relatedAchievement.screenshots.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-4">
              {relatedAchievement.screenshots.map((shot) => (
                <figure
                  key={shot.label}
                  className="w-52 overflow-hidden rounded-lg border border-navy-50 bg-surface sm:w-64"
                >
                  <figcaption className="border-b border-navy-50 bg-surface-card px-2 py-1 text-xs font-semibold text-ink">
                    {shot.label}
                  </figcaption>
                  <Image
                    src={shot.src}
                    alt={shot.label}
                    width={787}
                    height={786}
                    className="h-auto w-full"
                  />
                </figure>
              ))}
            </div>
          )}

          {relatedAchievement.techStack.length > 0 && (
            <>
              <h4 className="mt-5 text-xs font-semibold text-gold">
                {relatedAchievement.techStackLabel}
              </h4>
              <TagList items={relatedAchievement.techStack} />
            </>
          )}

          {relatedAchievement.supportTools.length > 0 && (
            <>
              <h4 className="mt-5 text-xs font-semibold text-gold">
                {relatedAchievement.supportToolsLabel}
              </h4>
              <TagList items={relatedAchievement.supportTools} />
            </>
          )}

          {relatedAchievement.urls.length > 0 && (
            <>
              <h4 className="mt-5 text-xs font-semibold text-gold">
                {relatedAchievement.urlLabel}
              </h4>
              <ul className="mt-2 flex flex-col gap-1">
                {relatedAchievement.urls.map((url) => (
                  <li key={url}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm break-all text-navy underline hover:text-navy-700"
                    >
                      {url}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </article>
  );
}
