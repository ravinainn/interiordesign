/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/image1.jpg')",
        hero1: "url('/image3.jpg')",
      },
      colors: {
        color1: "#d4c8bc",
        color2: "#78ABA8",
      },
    },
  },
  plugins: [],
};
