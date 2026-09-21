"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { chat } from "@/data/chat";
import { faqButtons, type FaqItem } from "@/data/faq";
import {
  emptyState,
  loadChatState,
  newId,
  saveChatState,
  type ChatMessage,
  type ChatState,
} from "./chat-storage";

type Status = "idle" | "loading";

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
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

/**
 * 右下に固定表示するAIチャットウィジェット。
 * FAQボタンは data/faq.json の回答をそのまま表示し、自由入力は /chat/chat.php（PHP）経由でOpenAIに問い合わせる。
 */
export function ChatWidget() {
  const [state, setState] = useState<ChatState>(emptyState);
  const [hydrated, setHydrated] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState<string | null>(null);

  const launcherRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const openedByUser = useRef(false);

  // 初回表示時に sessionStorage から復元（ページ遷移しても開閉状態と履歴が残る）
  useEffect(() => {
    // sessionStorage はサーバーにないため、初回描画後に読み込んで同期する（意図的な setState）
    // 初回訪問（未保存）なら、PC では開いた状態で始める
    const saved = loadChatState();
    const desktop = window.matchMedia("(min-width: 640px)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(
      saved ?? { ...emptyState, open: chat.openByDefaultOnDesktop && desktop },
    );
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveChatState(state);
  }, [state, hydrated]);

  // 新着メッセージで末尾へスクロール
  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [state.messages, status, state.open]);

  // 開いたら入力欄へフォーカス（ユーザー操作で開いたときだけ。復元時はフォーカスを奪わない）
  useEffect(() => {
    if (state.open && openedByUser.current) {
      inputRef.current?.focus();
      openedByUser.current = false;
    }
  }, [state.open]);

  const close = useCallback(() => {
    setState((s) => ({ ...s, open: false }));
    launcherRef.current?.focus();
  }, []);

  // Esc で閉じる
  useEffect(() => {
    if (!state.open) return;
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state.open, close]);

  const toggle = () => {
    if (state.open) {
      close();
    } else {
      openedByUser.current = true;
      setState((s) => ({ ...s, open: true }));
    }
  };

  const push = (...messages: ChatMessage[]) =>
    setState((s) => ({ ...s, messages: [...s.messages, ...messages] }));

  /** FAQボタン：APIは呼ばず、faq.json の回答をそのまま表示する */
  const answerFaq = (item: FaqItem) => {
    push(
      { id: newId(), role: "user", text: item.buttonLabel ?? item.question },
      { id: newId(), role: "bot", text: item.answer, link: chat.faqLink },
    );
  };

  /** 自由入力：中継エンドポイント経由でAIに問い合わせる */
  const submit = async (event?: FormEvent) => {
    event?.preventDefault();
    const text = input.trim();
    if (!text || status === "loading") return;
    if (text.length > chat.maxInputLength) {
      setInputError(chat.tooLong);
      return;
    }
    setInputError(null);
    setInput("");

    if (state.freeCount >= chat.maxFreeMessages) {
      push(
        { id: newId(), role: "user", text },
        {
          id: newId(),
          role: "bot",
          text: chat.sessionLimit,
          link: chat.contactLink,
        },
      );
      return;
    }

    // 直近 N 往復だけを送る（コスト対策）
    const history = state.messages
      .filter((m) => m.role === "user" || m.role === "bot")
      .slice(-chat.historyTurns * 2)
      .map((m) => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.text,
      }));

    push({ id: newId(), role: "user", text });
    setState((s) => ({ ...s, freeCount: s.freeCount + 1 }));
    setStatus("loading");

    try {
      let answer: string;
      let link: ChatMessage["link"] | undefined;

      if (process.env.NODE_ENV === "development") {
        // 開発サーバーではPHPが動かないためダミー回答を返す
        await new Promise((r) => setTimeout(r, 600));
        answer = chat.devReply;
      } else {
        const response = await fetch(chat.endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            messages: [...history, { role: "user", content: text }],
          }),
        });
        const result = (await response.json().catch(() => null)) as
          { ok: true; answer: string } | { ok: false; error?: string } | null;

        if (
          response.status === 429 ||
          (result?.ok === false && result.error === "rate_limited")
        ) {
          answer = chat.rateLimited;
          link = chat.contactLink;
        } else if (
          !response.ok ||
          !result ||
          !result.ok ||
          typeof result.answer !== "string"
        ) {
          throw new Error("chat_failed");
        } else {
          answer = result.answer;
        }
      }
      push({ id: newId(), role: "bot", text: answer, link });
    } catch {
      push({
        id: newId(),
        role: "bot",
        text: chat.error,
        link: chat.contactLink,
      });
    } finally {
      setStatus("idle");
      inputRef.current?.focus();
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    // Enter で送信、Shift+Enter で改行。日本語変換の確定 Enter（isComposing）では送信しない
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      event.preventDefault();
      void submit();
    }
  };

  const remaining = chat.maxInputLength - input.length;

  return (
    <>
      {/* パネル */}
      <div
        id="chat-panel"
        role="dialog"
        aria-label={chat.dialogLabel}
        aria-hidden={!state.open}
        className={`fixed inset-x-3 bottom-3 z-50 flex h-[78dvh] max-h-[640px] flex-col overflow-hidden rounded-2xl border border-navy-50/80 bg-surface shadow-[var(--shadow-card-hover)] transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none sm:inset-x-auto sm:bottom-24 sm:right-5 sm:h-[520px] sm:max-h-[70vh] sm:w-[360px] ${
          state.open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        {/* ヘッダー */}
        <div className="flex items-center justify-between gap-3 bg-navy px-4 py-3 text-white">
          <p className="flex items-center gap-2 font-bold">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-gold/60"
            >
              <Image
                src={chat.botAvatar}
                alt=""
                width={158}
                height={227}
                className="h-6 w-auto"
              />
            </span>
            {chat.title}
          </p>
          <button
            type="button"
            onClick={close}
            aria-label={chat.launcherCloseLabel}
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <CloseIcon />
          </button>
        </div>
        <p className="border-b border-navy-50 bg-surface-alt px-4 py-2 text-[11px] leading-relaxed text-ink-muted">
          {chat.note}
        </p>

        {/* メッセージ */}
        <div
          ref={logRef}
          className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4"
          aria-live="polite"
        >
          <Bubble role="bot" text={chat.welcome} />
          {state.messages.map((m) => (
            <Bubble key={m.id} role={m.role} text={m.text} link={m.link} />
          ))}
          {status === "loading" && (
            <p className="text-xs text-ink-muted" aria-live="assertive">
              {chat.typing}
            </p>
          )}
          {/* よくある質問：会話の末尾に常に表示する（回答のあとも消さない） */}
          <div className="flex items-end gap-2">
            <BotAvatar />
            <div className="max-w-[88%] rounded-2xl rounded-bl-md border border-navy-50 bg-surface-alt px-3.5 py-3">
              <p className="mb-2 text-xs font-medium text-ink-muted">
                {chat.faqHeading}
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {faqButtons.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => answerFaq(item)}
                      disabled={status === "loading"}
                      className="rounded-full border border-navy/30 bg-surface px-3 py-1.5 text-xs font-medium text-navy transition-colors hover:border-gold hover:bg-gold-50 disabled:opacity-50"
                    >
                      {item.buttonLabel ?? item.question}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 入力欄 */}
        <form onSubmit={submit} className="border-t border-navy-50 px-3 py-2.5">
          <div className="flex items-end gap-2">
            <label htmlFor="chat-input" className="sr-only">
              {chat.placeholder}
            </label>
            <textarea
              id="chat-input"
              ref={inputRef}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                if (inputError) setInputError(null);
              }}
              onKeyDown={onKeyDown}
              rows={1}
              maxLength={chat.maxInputLength}
              placeholder={chat.placeholder}
              className="max-h-28 min-h-[2.5rem] flex-1 resize-none rounded-lg border border-navy-50 bg-surface px-3 py-2 text-sm leading-relaxed text-ink placeholder:text-ink-muted/60 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
            />
            <button
              type="submit"
              disabled={status === "loading" || input.trim() === ""}
              aria-label={chat.send}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-white transition-colors hover:bg-navy-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <SendIcon />
            </button>
          </div>
          <p className="mt-1 flex justify-between text-[11px] text-ink-muted">
            <span className={inputError ? "text-red-600" : ""}>
              {inputError ?? ""}
            </span>
            <span>{remaining < 50 ? `残り${remaining}文字` : ""}</span>
          </p>
        </form>
      </div>

      {/* ランチャー：丸ロゴ＋吹き出しバッジ。スマホで開いている間は入力欄と重なるため隠す（パネルの×で閉じる） */}
      <button
        ref={launcherRef}
        type="button"
        onClick={toggle}
        aria-label={state.open ? chat.launcherCloseLabel : chat.launcherLabel}
        aria-expanded={state.open}
        aria-controls="chat-panel"
        className={`group fixed bottom-5 right-5 z-50 h-16 w-16 rounded-full bg-white shadow-[0_12px_28px_-10px_rgba(25,44,68,0.7)] ring-1 ring-navy-50 transition-all duration-200 hover:-translate-y-0.5 motion-reduce:transition-none ${
          state.open ? "hidden sm:block" : ""
        }`}
      >
        <Image
          src={chat.launcherLogo}
          alt=""
          width={506}
          height={506}
          priority
          className="h-full w-full rounded-full object-cover"
        />
        {/* 吹き出しバッジ（開いているときは×） */}
        <span
          aria-hidden="true"
          className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-navy text-white ring-2 ring-white transition-colors group-hover:bg-navy-700"
        >
          {state.open ? (
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H9.2l-3.8 3.1c-.5.4-1.4.1-1.4-.6V5.5Z" />
              <circle cx="8.5" cy="9.5" r="1.1" fill="#192c44" />
              <circle cx="12" cy="9.5" r="1.1" fill="#192c44" />
              <circle cx="15.5" cy="9.5" r="1.1" fill="#192c44" />
            </svg>
          )}
        </span>
      </button>
    </>
  );
}

/** 回答するうさぎ（ボットのアイコン） */
function BotAvatar() {
  return (
    <span
      aria-hidden="true"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-gold/50"
    >
      <Image
        src={chat.botAvatar}
        alt=""
        width={158}
        height={227}
        className="h-6 w-auto"
      />
    </span>
  );
}

function Bubble({
  role,
  text,
  link,
}: {
  role: ChatMessage["role"];
  text: string;
  link?: ChatMessage["link"];
}) {
  const user = role === "user";
  return (
    <div
      className={`flex items-end gap-2 ${user ? "justify-end" : "justify-start"}`}
    >
      {!user && <BotAvatar />}
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
          user
            ? "rounded-br-md bg-navy text-white"
            : "rounded-bl-md border border-navy-50 bg-surface-alt text-ink"
        }`}
      >
        {/* テキストノードとして描画する（innerHTML は使わない） */}
        <p className="whitespace-pre-wrap break-words">{text}</p>
        {link && (
          <p className="mt-2">
            <Link
              href={link.href}
              className="text-xs font-medium text-navy underline underline-offset-4"
            >
              {link.label}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
