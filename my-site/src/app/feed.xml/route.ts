export const dynamic = "force-static";

import { listNews, getNews } from "@/lib/mdx";

/** RFC-822（JST +0900）日時を生成 */
function toRfc822Jst(dateStr: string) {
  const d = new Date(`${dateStr}T00:00:00+09:00`);
  const w = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][d.getDay()];
  const dd = String(d.getDate()).padStart(2, "0");
  const mon = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][d.getMonth()];
  const yyyy = d.getFullYear();
  const hh = String(d.getHours()).padStart(2, "0");
  const mi = String(d.getMinutes()).padStart(2, "0");
  const ss = String(d.getSeconds()).padStart(2, "0");
  return `${w}, ${dd} ${mon} ${yyyy} ${hh}:${mi}:${ss} +0900`;
}

/** /feed.xml: シンプルなRSS 2.0 */
export async function GET() {
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const items = listNews(); // 新しい順（lib 側で sort 済）

  const xmlItems = items
    .map((n) => {
      const { meta, content } = getNews(n.slug);
      // description は summary を優先、無ければタイトル
      const desc = meta.summary ?? meta.title;
      return `
        <item>
          <title>${escapeXml(meta.title)}</title>
          <link>${site}/news/${meta.slug}</link>
          <guid>${site}/news/${meta.slug}</guid>
          <pubDate>${toRfc822Jst(meta.date)}</pubDate>
          <description>${escapeXml(desc)}</description>
        </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>PROXIT News</title>
      <link>${site}/news</link>
      <description>Updates from PROXIT</description>
      ${xmlItems}
    </channel>
  </rss>`;

  return new Response(xml.trim(), {
    headers: { "Content-Type": "application/rss+xml; charset=UTF-8" },
  });
}

function escapeXml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
