// tailwind.config.mjs
import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./fonts"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Commissioner"', "sans-serif"],
      },
      gridTemplateColumns: {
        responsive: "repeat(auto-fill, minmax(200px, 1fr))",
        "responsive-sm": "repeat(auto-fill, minmax(180px, 1fr))",
      },
      colors: {
        oliveLight: "#36460A",
        oliveDark: "#101500",
        olive: "#759719",
        oliveGreen: "#89AF20",
        oliveHover: "#C6FC2B",
        yellow: "#CDB30A",
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        scroll: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
});
