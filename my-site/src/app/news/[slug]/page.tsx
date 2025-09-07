import { notFound } from "next/navigation";
import { getNews, listNews } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc"; // RSC対応
import { Section } from "@/components/Section";
import { formatJstYmdStrict } from "@/lib/date";


export const dynamic = "force-static"; // SSG明示

/** すべての slug をビルド時に静的生成 */
export async function generateStaticParams() {
  return listNews().map((n) => ({ slug: n.slug }));
}

/**
 * generateMetadata:
 * - Next.js 15 以降、params は Promise として扱われる場合があるため await が必要
 * - OGP等はここでページ単位に上書き
 */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const { meta } = getNews(slug);
    return {
      title: `${meta.title} | News`,
      description: meta.summary ?? meta.title,
      openGraph: {
        title: meta.title,
        description: meta.summary ?? meta.title,
        images: ["/og-image.png"],
      },
    };
  } catch {
    return {};
  }
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

function toJstIso(dateLike: string) {
  return `${dateLike}T00:00:00+09:00`;
}

/** 記事詳細: draft:true の場合は notFound で 404 にする */
export default async function NewsDetail(
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;        // ← ここ重要
    const { meta, content } = getNews(slug);
    if (meta.draft) notFound();

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: meta.title,
      datePublished: toJstIso(meta.date),   // JST
      dateModified: toJstIso(meta.date),    // 更新日があれば差し替え
      mainEntityOfPage: `${siteUrl}/news/${meta.slug}`,
      author: { "@type": "Organization", name: "PROXIT" },
      publisher: {
        "@type": "Organization",
        name: "PROXIT",
        logo: { "@type": "ImageObject", url: `${siteUrl}/og-image.png` },
      },
      description: meta.summary ?? meta.title,
    };

    return (
      <article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Section title={meta.title} subtitle={formatJstYmdStrict(meta.date)}>
          <div className="prose prose-invert max-w-none">
            <MDXRemote source={content} />
          </div>
        </Section>
      </article>
    );
  } catch {
    notFound();
  }
}