/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: 'eidTheme',
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
          "base-200": "#FAFAFA",
          info: "#06b6d4",
          success: "#10b981",
          warning: "#d97706",
          error: "#e11d48",
        },
        eidTheme: {
          primary: "#FF6347",  // Tomato
          secondary: "#FFD700",  // Gold
          accent: "#32CD32",  // Lime Green
          neutral: "#FFFFFF",  // White
          "base-100": "#F5F5F5",  // White Smoke (a soft, clean background color)
          "base-200": "#E0E0E0",
          info: "#00CED1",  // Dark Turquoise
          success: "#3CB371",  // Medium Sea Green
          warning: "#FFA07A",  // Light Salmon
          error: "#DC143C",  // Crimson
        },
      },
    ],
  },
};
