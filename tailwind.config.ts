import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinLeft: {
          to: { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "spin-left": "spinLeft 0.5s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
