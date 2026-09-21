// data/faq.json を public/chat/faq.json へコピーする（dev / build の前に自動実行）。
// チャットの中継エンドポイント（public/chat/chat.php）が、AIへの指示文にこのファイルを使う。
// 回答が【要確認】のままの項目と、根拠メモ（source）は公開ファイルに含めない。
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const SRC = path.join("data", "faq.json");
const DEST = path.join("public", "chat", "faq.json");

const items = JSON.parse(await readFile(SRC, "utf8"));
const published = items
  .filter((item) => !/^【要(確認|素材)/.test(item.answer))
  .map(({ id, question, answer, fixedAnswerOnly }) => ({
    id,
    question,
    answer,
    fixedAnswerOnly: Boolean(fixedAnswerOnly),
  }));

await mkdir(path.dirname(DEST), { recursive: true });
await writeFile(DEST, JSON.stringify(published, null, 2) + "\n");
console.log(`faq: ${published.length} item(s) -> ${DEST}`);
