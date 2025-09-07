import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "PROXIT Sample HP",
  description: "Next.js 15 + React 19 + Tailwind SSG sample site",
  openGraph: {
    title: "PROXIT Sample HP",
    description: "Next.js 15 + React 19 + Tailwind SSG sample site",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
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
