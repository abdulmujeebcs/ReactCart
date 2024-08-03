/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF8C00",  // Darker Orange
          secondary: "#FFA500",  // Lime Green
          accent: "#FFD700",  // Gold
          neutral: "#FFFFFF",  // White
          "base-100": "#F5F5F5",  // White Smoke
          "base-200": "#FAFAFA",  // White Smoke
          info: "#06b6d4",
          success: "#10b981",
          warning: "#d97706",
          error: "#e11d48",
        },
      },
    ],
  },
};
