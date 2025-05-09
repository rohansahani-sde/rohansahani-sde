/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // calibri: ['"Calibri"', 'sans-serif'],
        calibri: ["Calibre", "Inter", "San Francisco", "SF Pro Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
