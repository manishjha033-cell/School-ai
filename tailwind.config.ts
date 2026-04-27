import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 950: "#06111f", 900: "#0a1830", 800: "#102446", 700: "#17315c" },
        gold: { 300: "#f3d27a", 400: "#e8be56", 500: "#d8a93b", 600: "#b98922" }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(4, 12, 24, 0.35)",
        glow: "0 0 0 1px rgba(232, 190, 86, 0.18), 0 12px 30px rgba(0,0,0,0.25)"
      },
      backgroundImage: {
        panel: "linear-gradient(180deg, rgba(17,34,62,0.95) 0%, rgba(9,20,37,0.96) 100%)"
      }
    }
  },
  plugins: []
};
export default config;
