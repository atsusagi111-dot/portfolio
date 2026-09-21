// assets-src/ の元画像を WebP に変換して public/images/ へ出力する。
// 静的エクスポートでは next/image の自動最適化が使えないため、ビルド前（prebuild）に実行される。
// 元画像を差し替えるときは assets-src/ の同名ファイル（拡張子は jpg / png どちらでも可）を置き換える。
import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "assets-src";
const DEST = path.join("public", "images");

// フォルダごとの最大幅（px）。表示サイズの約2倍（Retina）を上限にする
const MAX_WIDTH = {
  logo: 720,
  profile: 800,
  works: 1600,
  rabbit: 480,
  testimonials: 400,
  column: 1200,
};

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.(png|jpe?g)$/i.test(entry.name)) yield full;
  }
}

async function isFresh(src, dest) {
  try {
    const [s, d] = await Promise.all([stat(src), stat(dest)]);
    return d.mtimeMs >= s.mtimeMs;
  } catch {
    return false;
  }
}

let converted = 0;
for await (const file of walk(SRC)) {
  const rel = path.relative(SRC, file);
  const folder = rel.split(path.sep)[0];
  const dest = path.join(DEST, rel).replace(/\.(png|jpe?g)$/i, ".webp");
  if (await isFresh(file, dest)) continue;

  await mkdir(path.dirname(dest), { recursive: true });
  await sharp(file)
    .resize({ width: MAX_WIDTH[folder] ?? 1200, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(dest);
  converted++;
  console.log(`optimized: ${rel} -> ${path.relative(".", dest)}`);
}
console.log(`images: ${converted} file(s) converted`);
