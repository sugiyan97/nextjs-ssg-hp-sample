export const dynamic = "force-static";

import { MetadataRoute } from "next";
import { listNews } from "@/lib/mdx";

/** JST(+09:00) の ISO 文字列を返す（sitemap 用） */
function toJstIso(dateLike: string | Date) {
  const d =
    typeof dateLike === "string"
      ? new Date(`${dateLike}T00:00:00+09:00`)
      : dateLike;
  // 文字列として +09:00 を含む ISO にする
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const hh = String(d.getHours()).padStart(2, "0");
  const mi = String(d.getMinutes()).padStart(2, "0");
  const ss = String(d.getSeconds()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}T${hh}:${mi}:${ss}+09:00`;
}

/** sitemap.xml: 固定ページ + News（MDX）を列挙 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const nowJst = toJstIso(new Date());

  // News を front-matter から列挙
  const news = listNews().map((n) => ({
    url: `${base}/news/${n.slug}`,
    lastModified: toJstIso(n.date), // 記事の date を利用（JST）
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 固定ページ
  const fixed: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: nowJst, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services`, lastModified: nowJst, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: nowJst, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: nowJst, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/news`, lastModified: nowJst, changeFrequency: "daily", priority: 0.9 },
  ];

  return [...fixed, ...news];
}
