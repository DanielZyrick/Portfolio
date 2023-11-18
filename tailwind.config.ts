import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    data: {
      light: "light",
      dark: "dark",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
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
    },
  },

  plugins: [],
};
export default config;
