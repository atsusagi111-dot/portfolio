"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { contact } from "@/data/contact";

const inputClasses =
  "w-full rounded-lg border border-navy-50 bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-muted/60 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy";

type Status = "idle" | "submitting" | "error";

function RequiredMark() {
  return (
    <span className="ml-2 rounded bg-navy px-1.5 py-0.5 text-[11px] font-medium text-white">
      必須
    </span>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const router = useRouter();
  // スパム対策：フォームを開いてから送信までの秒数をサーバーに伝える
  const openedAt = useRef<number | null>(null);
  useEffect(() => {
    openedAt.current = performance.now();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = new URLSearchParams();
    new FormData(event.currentTarget).forEach((value, key) => body.append(key, String(value)));
    const elapsedMs = openedAt.current ? event.timeStamp - openedAt.current : 0;
    body.append("elapsed", String(Math.round(elapsedMs / 1000)));

    setStatus("submitting");

    try {
      // 送信処理（PHP）はConoHa WING上でのみ動く。開発サーバーでは送信せずに完了画面へ進む
      if (process.env.NODE_ENV === "development") {
        console.info("[ContactForm] 開発環境のため送信をスキップしました", Object.fromEntries(body));
      } else {
        const response = await fetch(contact.endpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body,
        });
        const result = await response.json().catch(() => null);
        if (!response.ok || !result?.ok) throw new Error("send_failed");
      }
      router.push("/contact/thanks/");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
    >
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
          {contact.nameLabel}
          <RequiredMark />
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={100}
          autoComplete="name"
          className={inputClasses}
          placeholder={contact.namePlaceholder}
        />
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-ink">
          {contact.companyLabel}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          maxLength={100}
          autoComplete="organization"
          className={inputClasses}
          placeholder={contact.companyPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
          {contact.emailLabel}
          <RequiredMark />
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          className={inputClasses}
          placeholder={contact.emailPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
          {contact.messageLabel}
          <RequiredMark />
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={7}
          maxLength={5000}
          className={inputClasses}
          placeholder={contact.messagePlaceholder}
        />
      </div>

      {/* スパム対策のハニーポット。人には見えず、自動入力するボットだけが埋める */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">このフィールドは入力しないでください</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <p className="text-sm leading-relaxed text-ink-muted">
        <Link href="/privacy/" className="text-navy underline underline-offset-4">
          プライバシーポリシー
        </Link>
        {contact.privacyNote}
      </p>

      <Button
        type="submit"
        variant="primary"
        className="w-full sm:w-auto sm:self-start sm:px-16"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? contact.submitting : contact.submit}
      </Button>

      <p role="alert" aria-live="assertive">
        {status === "error" && (
          <span className="block rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
            {contact.error}
          </span>
        )}
      </p>
    </form>
  );
}
