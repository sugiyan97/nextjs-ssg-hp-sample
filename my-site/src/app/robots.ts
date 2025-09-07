export const dynamic = "force-static"; // SSG での静的化を明示

import { MetadataRoute } from "next";

/** robots.txt を静的生成。sitemap の場所も案内する */
export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
