// 【要素材：〇〇】【後で指定】のプレースホルダーを、未提供だと一目で分かる見た目で表示する。
// 素材が届いて data/ の文言を書き換えると、通常のテキストとして表示される。

export function isPlaceholder(text: string) {
  return text.startsWith("【要素材") || text.startsWith("【後で指定");
}

export function MaterialText({ text }: { text: string }) {
  if (!isPlaceholder(text)) return <>{text}</>;
  return (
    <span className="inline-block rounded border border-dashed border-gold bg-gold-50 px-2 py-0.5 text-sm font-medium text-gold-600">
      {text}
    </span>
  );
}
