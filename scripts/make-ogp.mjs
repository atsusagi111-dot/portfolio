// サイト共通のOGP画像（1200×630）を、ロゴから生成する。ロゴを変更したときだけ手動で実行する。
//   node scripts/make-ogp.mjs
import sharp from "sharp";

const logo = await sharp("assets-src/logo/atsusagi-lab-horizontal.png")
  .resize({ width: 860 })
  .toBuffer();

await sharp({
  create: { width: 1200, height: 630, channels: 3, background: "#ffffff" },
})
  .composite([
    { input: logo, gravity: "center" },
    {
      // 下端のアクセントライン（ゴールド）
      input: { create: { width: 1200, height: 12, channels: 3, background: "#b08d57" } },
      gravity: "south",
    },
  ])
  .png({ compressionLevel: 9, palette: true })
  .toFile("public/images/ogp.png");

console.log("created: public/images/ogp.png");
