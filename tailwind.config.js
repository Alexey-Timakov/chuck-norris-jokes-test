/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.4rem",
      "2xl": "1.6rem",
      "3xl": "2rem",
    },
    lineHeight: {
      sm: "1.2rem",
      base: "1.4rem",
      xl: "1.8rem",
      "2xl": "2rem",
      "3xl": "2.4rem",
    },
  },
  plugins: [],
};
