import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "@/components/i18n/LanguageProvider";

export function DeveloperProfileBadge() {
  const t = useTranslations();

  return (
    <Link
      href="/profile"
      className="inline-flex items-center gap-2 rounded-full border border-navy-50 bg-surface-card py-1 pr-4 pl-1 shadow-sm transition-shadow hover:shadow-md"
    >
      <span className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-navy-50">
        <Image
          src="/profile/profile.png"
          alt=""
          width={64}
          height={64}
          className="h-full w-full object-cover"
        />
      </span>
      <span className="text-sm font-medium text-ink">
        {t.hero.developerProfileCta}
        <span className="animate-nudge ml-0.5 inline-block text-gold">
          ≫≫
        </span>
      </span>
    </Link>
  );
}
