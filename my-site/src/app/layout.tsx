import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Noto_Sans_JP } from "next/font/google";

/**
 * フォント最適化:
 * - next/font を使うと FOUT/CLS を抑えた最適読み込みになる
 * - display: "swap" でフォールバック → 置換表示
 */
const noto = Noto_Sans_JP({ subsets: ["latin"], display: "swap" });

/**
 * metadataBase:
 * - OGPなどの相対URLを絶対URLへ解決する基準
 * - 警告回避 & 検索エンジン/シェア時のURL崩れ防止
 */
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "PROXIT Sample HP",
  description: "Next.js 15 + React 19 + Tailwind SSG sample site",
  openGraph: {
    title: "PROXIT Sample HP",
    description: "Next.js 15 + React 19 + Tailwind SSG sample site",
    images: ["/og-image.png"], // metadataBase で絶対URL化される
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  // 構造化データ（組織）
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PROXIT",
    url: siteUrl,
    logo: `${siteUrl}/og-image.png`,
    sameAs: ["https://x.com/your", "https://github.com/your"],
  };

  return (
    <html lang="ja">
      <body className={`${noto.className} min-h-dvh antialiased`}>
        {/* Skip to content（アクセシビリティ） */}
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1000] rounded bg-brand-500 px-3 py-2 text-white">
          Skip to content
        </a>

        {/* Cloudflare Web Analytics（任意／環境変数でON/OFF） */}
        {/* {process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN && (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN}"}`}
          />
        )} */}

        {/* JSON-LD（構造化データ） */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <Navbar />
        <main id="main" className="container py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
