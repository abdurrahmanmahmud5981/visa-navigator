import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // For Tailwind's dark mode support
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  themes: [
    {
      light: {
        primary: "#3b82f6", // Blue primary color
        secondary: "#10b981", // Green secondary
        accent: "#6366f1", // Indigo accent
        neutral: "#f3f4f6", // Light neutral
        "base-100": "#ffffff",
      },
      dark: {
        primary: "#60a5fa", // Lighter blue for dark mode
        secondary: "#34d399", // Lighter green
        accent: "#818cf8", // Lighter indigo
        neutral: "#1f2937", // Dark neutral
        "base-100": "#111827", // Very dark background
        "base-content": "#f3f4f6", // Light text
      },
    },
  ],
}