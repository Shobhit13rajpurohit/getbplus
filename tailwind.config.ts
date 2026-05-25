import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "var(--color-navy)",
          mid: "var(--color-navy-mid)",
          light: "var(--color-navy-light)",
        },
        gold: {
          DEFAULT: "var(--color-gold)",
          light: "var(--color-gold-light)",
          bright: "var(--color-gold-bright)",
        },
        offWhite: "var(--color-off-white)",
        gray: {
          100: "var(--color-gray-100)",
          300: "var(--color-gray-300)",
          500: "var(--color-gray-500)",
          800: "var(--color-gray-800)",
        },
        success: "var(--color-success)",
        error: "var(--color-error)",
        trustBlue: "var(--color-trust-blue)",
      },
      fontFamily: {
        display: ["var(--font-dm-serif)"],
        sans: ["var(--font-sora)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      letterSpacing: {
        tightest: '-2px',
        tighter: '-1.5px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
