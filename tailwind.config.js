/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1E3A8A",  // Dark Blue
          secondary: "#4682B4",  // Steel Blue
          accent: "#FFB6C1",  // Light Pink
          neutral: "#F0F8FF",  // Alice Blue
          "base-100": "#E6E6FA",  // Lavender
          info: "#06b6d4",
          success: "#10b981",
          warning: "#d97706",
          error: "#e11d48",
        },
      },
    ],
  },
};
