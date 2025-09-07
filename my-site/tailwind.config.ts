import type { Config } from "tailwindcss";

/**
 * Tailwind のスキャン対象に MD/MDX を含める（prose 用クラス自動抽出のため）
 * typography プラグインで記事本文の見た目を整える
 */
export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f0f7ff",
          100: "#e0efff",
          200: "#b9dbff",
          300: "#8ec5ff",
          400: "#5b9fff",
          500: "#327dff",
          600: "#1f60e6",
          700: "#174cb3",
          800: "#123a8a",
          900: "#0f306f",
        },
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
