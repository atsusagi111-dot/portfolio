import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/data/site";

// 静的エクスポートでは、ビルド時に out/robots.txt として出力される
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/contact/thanks/"] }],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
