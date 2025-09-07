import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


export const metadata: Metadata = {
  title: "About | PROXIT Sample HP",
  description: "私たちの会社についてのご紹介ページです。",
  openGraph: {
    title: "About | PROXIT Sample HP",
    description: "小回りの効くチームで、堅実なシステムを提供します。",
    url: "https://example.com/about",
    siteName: "PROXIT Sample HP",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PROXIT Sample",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_handle",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-dvh antialiased">
        <Navbar />
        <main className="container py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
