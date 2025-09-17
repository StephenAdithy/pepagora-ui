/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-1440": { max: "1440px" },
        "max-1280": { max: "1280px" },
        "max-992": { max: "992px" },
        "max-768": { max: "767px" },
      },
      fontSize: {
        "sidebar-title": ["24px", { lineHeight: "32px", letterSpacing: "0" }],
      },
    },
  },
  plugins: [],
};
