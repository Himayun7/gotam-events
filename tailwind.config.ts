import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: "#FFD700", // Gold color
      },
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        lora: ["var(--font-lora)"],
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};

export default config;
