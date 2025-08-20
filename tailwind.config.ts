import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#7c5cff",
          50: "#ffffffff",
          500: "#7c5cff",
          600: "#6647ff"
          
        }
        
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.25)"
      }
    }
  },
  plugins: []
} satisfies Config;