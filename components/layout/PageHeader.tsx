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
    <div className="border-b border-navy-50 bg-surface-alt px-4 pb-14 pt-6 sm:px-6 sm:pb-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Breadcrumb items={breadcrumb} />
        <p className="mt-12 font-en text-4xl tracking-wide text-gold-600 sm:mt-16 sm:text-5xl">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-xl font-bold text-ink sm:text-2xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl leading-loose text-ink-muted">{description}</p>
        )}
      </div>
    </div>
  );
}
