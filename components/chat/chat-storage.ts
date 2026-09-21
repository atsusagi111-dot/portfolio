// チャットの開閉状態と会話履歴を sessionStorage に保存する（タブを閉じると消える）。

export type ChatMessage = {
  id: string;
  role: "user" | "bot";
  text: string;
  /** 回答の末尾に添えるリンク（FAQボタンの回答など） */
  link?: { href: string; label: string };
};

export type ChatState = {
  open: boolean;
  messages: ChatMessage[];
  /** このセッションで自由入力を送った回数（上限あり） */
  freeCount: number;
};

const KEY = "atsusagi-chat";

export const emptyState: ChatState = {
  open: false,
  messages: [],
  freeCount: 0,
};

export function loadChatState(): ChatState {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return emptyState;
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
