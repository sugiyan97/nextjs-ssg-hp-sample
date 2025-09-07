import type { NextConfig } from "next";

/**
 * Next.js 全体設定
 * - output: 'export' で「完全SSG（静的エクスポート）」にする
 * - images.unoptimized: true で next/image の最適化を無効化（純静的ホスティング向け）
 */
const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: { unoptimized: true }, // 静的ホスティング向け
  // 必要に応じて basePath / assetPrefix などを追加
};

export default nextConfig;
