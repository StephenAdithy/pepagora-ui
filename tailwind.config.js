/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'max-1440': { 'max': '1440px' }, // applies to 1440px and below
      },
      fontSize: {
        "sidebar-title": ["24px", { lineHeight: "32px", letterSpacing: "0" }],
      },
    },
  },
  plugins: [],
};
