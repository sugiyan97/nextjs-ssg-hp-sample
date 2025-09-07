// MDX/記事リストの取得ユーティリティ
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * content/news の探索:
 * - ルート直下 or src/ 配下どちらにも対応
 * - 将来的に統一したら CANDIDATE_DIRS を1つにできる
 */
const CANDIDATE_DIRS = [
  path.join(process.cwd(), "content/news"),
  path.join(process.cwd(), "src/content/news"),
];

const showDrafts = process.env.NEXT_PUBLIC_SHOW_DRAFTS === "1";

// 見つかった最初のディレクトリを使う
function resolveNewsDir(): string | null {
  for (const p of CANDIDATE_DIRS) {
    if (fs.existsSync(p) && fs.statSync(p).isDirectory()) return p;
  }
  return null;
}

export type NewsMeta = {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  draft?: boolean;
};

/** 一覧取得（draft 除外・新しい順） */
export function listNews(): NewsMeta[] {
  const NEWS_DIR = resolveNewsDir();
  if (!NEWS_DIR) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("⚠️ NEWS_DIR not found. Tried:", CANDIDATE_DIRS);
    }
    return [];
  }

  const files = fs
    .readdirSync(NEWS_DIR)
    .filter((f) => f.toLowerCase().endsWith(".md") || f.toLowerCase().endsWith(".mdx"));

  const items = files.map((file) => {
    const slug = file.replace(/\.(md|mdx)$/i, "");
    const raw = fs.readFileSync(path.join(NEWS_DIR, file), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? "1970-01-01"),
      summary: data.summary ? String(data.summary) : undefined,
      draft: Boolean(data.draft ?? false),
    } satisfies NewsMeta;
  });

  return items
    .filter((i) => showDrafts ? true : !i.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** 単一記事取得（.mdx 優先、無ければ .md） */
export function getNews(slug: string) {
  const NEWS_DIR = resolveNewsDir();
  if (!NEWS_DIR) throw new Error("NEWS_DIR not found");
  const file = path.join(NEWS_DIR, `${slug}.mdx`);
  const alt = path.join(NEWS_DIR, `${slug}.md`);
  const target = fs.existsSync(file) ? file : alt;
  if (!fs.existsSync(target)) throw new Error(`News file not found: ${slug}`);
  const raw = fs.readFileSync(target, "utf8");
  const { data, content } = matter(raw);
  const meta: NewsMeta = {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? "1970-01-01"),
    summary: data.summary ? String(data.summary) : undefined,
    draft: Boolean(data.draft ?? false),
  };
  return { meta, content };
}
