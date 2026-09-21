// チャットの開閉状態と会話履歴を sessionStorage に保存する（タブを閉じると消える）。

export type ChatMessage = {
  id: string;
  role: "user" | "bot";
  text: string;
  /** "faq" は text を見出しにしてよくある質問のボタンを表示、"candidates" は candidateIds の質問だけを表示する */
  kind?: "faq" | "candidates";
  candidateIds?: string[];
  /** 回答の末尾に添えるリンク（FAQボタンの回答など） */
  link?: { href: string; label: string };
};

export type ChatState = {
  open: boolean;
  messages: ChatMessage[];
  /** 旧仕様（外部AI）の名残。互換のため残す */
  freeCount: number;
};

const KEY = "atsusagi-chat";

export const emptyState: ChatState = {
  open: false,
  messages: [],
  freeCount: 0,
};

/** 保存された状態を返す。未保存（初回訪問）なら null */
export function loadChatState(): ChatState | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ChatState>;
    return {
      open: Boolean(parsed.open),
      messages: Array.isArray(parsed.messages) ? parsed.messages : [],
      freeCount: typeof parsed.freeCount === "number" ? parsed.freeCount : 0,
    };
  } catch {
    return emptyState;
  }
}

export function saveChatState(state: ChatState): void {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // プライベートモードなどで保存できない場合は無視する
  }
}

export function newId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
