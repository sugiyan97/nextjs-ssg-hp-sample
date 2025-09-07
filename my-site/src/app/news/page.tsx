import Link from "next/link";
import { listNews } from "@/lib/mdx";
import { Section } from "@/components/Section";
import { formatJstYmdStrict } from "@/lib/date";

export const dynamic = "force-static"; // SSG明示

export const metadata = {
  title: "News | PROXIT Sample HP",
  description: "お知らせ一覧",
};

/**
 * News一覧:
 * - lib/mdx.ts の listNews() は draft を除外済み
 * - 日付は Date 直描画せずフォーマッタ経由で文字列にする
 */
export default function NewsIndex() {
  const items = listNews();
  if (items.length === 0) {
    return (
      <Section title="News" subtitle="最新のお知らせをお届けします。">
        <p className="text-slate-400">現在お知らせはありません。</p>
      </Section>
    );
  }
  return (
    <Section title="News" subtitle="最新のお知らせをお届けします。">
      <ul className="space-y-3">
        {items.map((n) => (
          <li key={n.slug} className="card p-5">
            <div className="flex flex-col gap-1">
              <time className="text-sm text-slate-400">{formatJstYmdStrict(n.date)}</time>
              <Link href={`/news/${n.slug}`} className="text-lg font-semibold hover:underline">
                {n.title}
              </Link>
              {n.summary && <p className="text-slate-400">{n.summary}</p>}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
