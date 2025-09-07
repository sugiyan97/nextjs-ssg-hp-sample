import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 画像最適化の注意：純SSG ではデフォの next/image 最適化は使えないため、静的サイトなら images.unoptimized: true を併用
  output: 'export',
  images: { unoptimized: true }, // 静的ホスティング向け
};

export default nextConfig;
