import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
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
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
