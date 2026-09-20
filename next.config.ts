import type { NextConfig } from "next";

// 公開先（ConoHa WING）はNode.jsが動かないため、静的エクスポートで運用する。
const nextConfig: NextConfig = {
  output: "export",
  // Apacheで /services/ などへ直接アクセスできるよう、各ページを <path>/index.html として出力する
  trailingSlash: true,
  images: {
    // 画像最適化サーバーが使えないため無効化。画像は事前に最適化したものを public/ に置く
    unoptimized: true,
  },
};

export default nextConfig;
