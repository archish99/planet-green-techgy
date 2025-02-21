import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        cormorandGaramond: ["var(--font-cormorand-garamond)"],
        allura: ["var(--font-allura)"],
        saintDelafield: ["var(--font-saint-delafield)"],
        prestigious: ["var(--font-prestigious)"],
        italiana: ["var(--font-italiana)"],
        serifDisplay: ["var(--font-dm-serif-display)"],
        sofiaPro: ["var(--font-sofia-pro)"],
        nunito: ["var(--font-nunito)"],
        cinzel: ["var(--font-cinzel)"],
        kumbhSans: ["var(--font-kumbh-sans)"],
        redHatDisplay: ["var(--font-red-hat-display)"],
        poppins: ["var(--font-poppins)"],
        libreCaslonDisplay: ["var(--font-libre-caslon-display)"],
        jost: ["var(--font-jost)"],
        josefinSans: ["var(--font-josefin-sans)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
