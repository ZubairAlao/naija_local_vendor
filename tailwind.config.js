import fluid, { extract, screens, fontSize } from "fluid-tailwind";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: {
    files: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    extract,
  },
  theme: {
    screens,
    fontSize,
  	extend: {
  		backgroundImage: {},
  		fontFamily: {
        sans: ["Satoshi", "sans-serif"],
      },
  		colors: {
        primary: "#008753", // Green from logo
        secondary: "#FF7F32", // Orange from logo
        lightGreen: "#6BCB77", // Light green from logo
        white: "#FFFFFF", // White background
        lightGray: "#F5F5F5", // Light gray for subtle backgrounds
        textPrimary: "#222222", // Dark text
        accentRed: "#E53935", // Red for warnings or CTAs
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    animate,
    fluid,
      require("tailwindcss-animate")
],
}

