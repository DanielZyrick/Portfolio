import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "90": "90vh",
        "85": "85vh",
      },
      colors: {
        bkg: "hsl(var(--bg-color) / <alpha-value>)",
        txt: "hsl(var(--txt-color) / <alpha-value>)",
        ctxt: "hsl(var(--c-text) / <alpha-value>)",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        reveal: "reveal .5s ease-in-out",
      },
    },
  },

  plugins: [],
};
export default config;
