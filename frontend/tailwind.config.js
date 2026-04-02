/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#FAF8F5",
        primary: "#1C1917",
        accent: "#8B5E3C",
        "accent-dark": "#6B4226",
        "accent-light": "#C4956A",
        "earth-green": "#4A6741",
        "earth-green-light": "#6B8F63",
        "warm-cream": "#F5EFE6",
        "warm-gold": "#D4A853",
        "tribal-red": "#A0522D",
        "tribal-orange": "#CD853F",
        "deep-brown": "#3E2723",
        "soft-gray": "#E8E4DF",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "Georgia", "serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
