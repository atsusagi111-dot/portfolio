import { JsonLd } from "@/components/seo/JsonLd";
import { MaterialText, isPlaceholder } from "@/components/ui/MaterialText";
import { faqItems } from "@/data/faq";

/** よくあるご質問。JavaScriptなしで開閉できる details 要素を使う */
export function Faq() {
  // 回答が未提供（プレースホルダー）の項目は、構造化データには含めない
  const answered = faqItems.filter((item) => !isPlaceholder(item.answer));

  return (
    <>
      <div className="mx-auto flex max-w-3xl flex-col gap-3">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-navy-50/80 bg-surface shadow-[var(--shadow-card)] transition-colors open:border-gold/40"
          >
            <summary className="flex cursor-pointer list-none items-start gap-4 p-5 font-medium leading-relaxed text-ink sm:p-6 [&::-webkit-details-marker]:hidden">
              <span
                aria-hidden="true"
                className="font-en text-xl leading-7 text-gold-600"
              >
                Q
              </span>
              <span className="flex-1">{item.question}</span>
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy-50 text-navy transition-all duration-300 group-open:rotate-45 group-open:border-gold group-open:bg-gold group-open:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <div className="flex items-start gap-4 px-5 pb-6 sm:px-6">
              <span
                aria-hidden="true"
                className="font-en text-xl leading-7 text-navy"
              >
                A
              </span>
              <p className="flex-1 leading-loose text-ink-muted">
                <MaterialText text={item.answer} />
              </p>
            </div>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: answered.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
    </>
  );
}
