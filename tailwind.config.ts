import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        heading: ["var(--font-crimson)", "Georgia", "serif"],
      },
      colors: {
        // Semantic tokens (theme-aware via CSS variables)
        bkg: "var(--color-bkg)",
        surface: "var(--color-surface)",
        textPrimary: "var(--color-text)",
        textSecondary: "var(--color-text-secondary)",
        accent: "var(--color-accent)",
        accentHover: "var(--color-accent-hover)",
        border: "var(--color-border)",

        // Raw palette tokens (always available)
        forestGreen: "#1B4D3E",
        terracotta: "#C84B31",
        cream: "#F5EDE4",
        charcoal: "#2A2A2A",
        sage: "#7B9E89",
        burntOrange: "#B85C2A",
        warmTan: "#D4C4B0",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
