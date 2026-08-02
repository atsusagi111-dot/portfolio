"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

const inputClasses =
  "w-full rounded-lg border border-navy-50 bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO(v1.1): wire this up to a real email/backend service (e.g. Resend API route).
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
          お名前 <span className="text-gold">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClasses}
          placeholder="山田 太郎"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
          メールアドレス <span className="text-gold">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClasses}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
          お問い合わせ内容 <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={inputClasses}
          placeholder="ご相談内容やご要望をご記入ください"
        />
      </div>

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        送信する
      </Button>

      {submitted && (
        <p className="rounded-lg bg-gold-50 px-4 py-3 text-sm text-ink">
          ご入力ありがとうございます。現在、送信機能は準備中です。お急ぎの場合はお手数ですが別途ご連絡方法をご案内するまでお待ちください。
        </p>
      )}
    </form>
  );
}
