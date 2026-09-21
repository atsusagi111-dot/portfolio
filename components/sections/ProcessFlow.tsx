import { processSteps } from "@/data/flow";

/** ご依頼の流れ（8ステップ）の詳細表示 */
export function ProcessFlow() {
  return (
    <ol className="mx-auto flex max-w-3xl flex-col">
      {processSteps.map((step, index) => {
        const last = index === processSteps.length - 1;
        return (
          <li key={step.number} id={`step-${step.number}`} className="flex scroll-mt-28 gap-5 sm:gap-8">
            <div className="flex flex-col items-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy font-en text-lg text-white shadow-[0_10px_24px_-12px_rgba(25,44,68,0.7)] ring-4 ring-surface sm:h-14 sm:w-14 sm:text-xl">
                {step.number}
              </span>
              {!last && <span aria-hidden="true" className="w-px flex-1 bg-gradient-to-b from-gold/60 to-navy-50" />}
            </div>

            <div className={`flex-1 ${last ? "" : "pb-12"}`}>
              <h3 className="pt-2.5 text-lg font-bold text-ink sm:pt-3 sm:text-xl">
                {step.title}
              </h3>
              <div className="mt-3 flex flex-col gap-2">
                {step.body.map((paragraph) => (
                  <p key={paragraph} className="leading-loose text-ink-muted">
                    {paragraph}
                  </p>
                ))}
              </div>

              {step.bullets && (
                <ul className="mt-4 flex flex-col gap-2 rounded-xl bg-surface-alt p-5">
                  {step.bullets.map((bullet) => (
                    <li key={bullet.label} className="text-sm text-ink">
                      <span className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                        />
                        {bullet.label}
                      </span>
                      {bullet.subItems && (
                        <ul className="ml-4 mt-1.5 flex flex-col gap-1 border-l border-navy-50 pl-4">
                          {bullet.subItems.map((sub) => (
                            <li key={sub} className="text-sm text-ink-muted">
                              {sub}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {step.afterBullets && (
                <p className="mt-3 leading-loose text-ink-muted">{step.afterBullets}</p>
              )}
              {step.note && (
                <p className="mt-3 text-xs leading-relaxed text-ink-muted">{step.note}</p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
