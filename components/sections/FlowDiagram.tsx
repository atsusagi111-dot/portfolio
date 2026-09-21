import { processSteps } from "@/data/flow";

const PER_ROW = 4;

/** 右向き・下向きの矢印。装飾なので読み上げ対象外 */
function Arrow({ direction }: { direction: "right" | "down" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-5 w-5 text-gold ${direction === "down" ? "rotate-90" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

type FlowDiagramProps = {
  /** 各ステップのリンク先の前に付けるパス。ホームでは "/flow/"、流れページでは "" */
  hrefBase?: string;
};

/**
 * ご依頼の流れ（8ステップ）のフロー図。
 * PC では 4 列 × 2 段を矢印でつなぎ、段の切り替わりは折り返しの線で表す。スマホでは縦一列に矢印でつなぐ。
 */
export function FlowDiagram({ hrefBase = "" }: FlowDiagramProps) {
  const rows: (typeof processSteps)[] = [];
  for (let i = 0; i < processSteps.length; i += PER_ROW) {
    rows.push(processSteps.slice(i, i + PER_ROW));
  }

  return (
    <ol className="mx-auto flex max-w-5xl flex-col gap-4 sm:gap-0">
      {rows.map((row, rowIndex) => (
        <li key={rowIndex} className="contents">
          {rowIndex > 0 && (
            <div aria-hidden="true" className="relative hidden h-14 sm:block">
              {/* 前の段の右端から下へ → 左へ → 次の段の左端へ折り返す線 */}
              <div className="absolute inset-x-[12.5%] top-0 h-7 rounded-br-2xl border-b border-r border-gold/60" />
              <div className="absolute left-[12.5%] top-7 h-7 border-l border-gold/60" />
              <div className="absolute bottom-0 left-[12.5%] -translate-x-1/2">
                <Arrow direction="down" />
              </div>
            </div>
          )}
          <ol className="grid grid-cols-1 gap-8 sm:grid-cols-4 sm:gap-6">
            {row.map((step, index) => {
              const lastInRow = index === row.length - 1;
              const lastOverall = rowIndex === rows.length - 1 && lastInRow;
              return (
                <li key={step.number} className="relative">
                  <a
                    href={`${hrefBase}#step-${step.number}`}
                    className="flex h-full flex-col gap-2 rounded-xl border border-navy-50 bg-surface p-5 transition-colors hover:border-gold hover:bg-gold-50/40 sm:p-6"
                  >
                    <span className="font-en text-2xl leading-none text-gold-600">
                      {step.number}
                    </span>
                    <span className="text-base font-bold leading-snug text-ink">{step.title}</span>
                    <span className="text-xs leading-relaxed text-ink-muted">{step.summary}</span>
                  </a>
                  {/* スマホ：最後以外は下向き矢印。PC：段の最後以外は右向き矢印 */}
                  {!lastOverall && (
                    <span className="absolute -bottom-[1.6rem] left-1/2 -translate-x-1/2 sm:hidden">
                      <Arrow direction="down" />
                    </span>
                  )}
                  {!lastInRow && (
                    <span className="absolute -right-[1.4rem] top-1/2 hidden -translate-y-1/2 sm:block">
                      <Arrow direction="right" />
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </li>
      ))}
    </ol>
  );
}
