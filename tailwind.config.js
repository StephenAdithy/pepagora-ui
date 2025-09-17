/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "sidebar-title": ["24px", { lineHeight: "32px", letterSpacing: "0" }],
      },
    },
  },
  plugins: [],
};
