/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans, sans-serif "],
      },
      backgroundColor: {
        themeDark: "#202C37",
        themeDarkLighter: "#2B3945",
        themeLight: "#F9F9F9",
      },
      textColor: {
        themeDark: "#FFFFFF",
        themeLight: "#111517",
      },
      boxShadow: {
        themeDark: "0 0 8px rgba(245, 245, 245, 0.2)",
        themeLight: "0 8px 24px rgba(149, 157, 165, 0.2)",
      },
    },
  },
  important: true,
  plugins: [],
};
