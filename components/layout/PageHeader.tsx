import { Breadcrumb, type Crumb } from "@/components/ui/Breadcrumb";

type PageHeaderProps = {
  /** 英字ラベル（例：Service） */
  eyebrow: string;
  /** ページのh1 */
  title: string;
  description?: string;
  breadcrumb: Crumb[];
};

/** 下層ページ共通のタイトル部分。h1 は各ページでこの1つだけにする */
export function PageHeader({ eyebrow, title, description, breadcrumb }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden border-b border-navy-50 bg-surface-alt px-4 pb-14 pt-6 sm:px-6 sm:pb-20 lg:px-8">
      <div aria-hidden="true" className="bg-dots absolute inset-0 opacity-60" />
      {/* 背景の大きな中抜き英字 */}
      <p
        aria-hidden="true"
        className="text-outline pointer-events-none absolute -bottom-6 right-4 select-none font-en text-[7rem] leading-none tracking-wide sm:-bottom-10 sm:text-[12rem] lg:right-8"
      >
        {eyebrow}
      </p>
      <div className="relative mx-auto max-w-6xl">
        <Breadcrumb items={breadcrumb} />
        <p className="mt-12 flex items-center gap-3 font-en text-2xl tracking-[0.08em] text-gold-600 sm:mt-16 sm:text-3xl">
          <span aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-gold to-gold/30" />
          {eyebrow}
        </p>
        <h1 className="mt-4 text-[1.75rem] font-bold leading-snug text-ink sm:text-4xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl leading-loose text-ink-muted">{description}</p>
        )}
      </div>
    </div>
  );
}
