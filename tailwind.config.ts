import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        cute: ['"Cute Font"', "cursive"], // Google Fonts: Cute Font
        poppins: ['"Poppins"', "sans-serif"], // Google Fonts: Poppins
        notcourier: ['"NotCourierSans"', "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
