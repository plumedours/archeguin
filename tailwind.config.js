/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6", // Bleu moderne
          dark: "#1E40AF",
          light: "#93C5FD",
        },
        secondary: {
          DEFAULT: "#FACC15", // Jaune accent
          dark: "#CA8A04",
          light: "#FEF08A",
        },
        accent: {
          DEFAULT: "#10B981", // Vert jade subtil
          dark: "#047857",
          light: "#6EE7B7",
        },
        dark: "#111827", // Gris foncé
        light: "#F9FAFB", // Fond très clair
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
