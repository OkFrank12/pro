/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        big: { max: "1430px" },
        medium: { max: "1400px" },
        minMedium: { max: "1300px" },
        tablet: { max: "1100px" },
        timeLine: { max: "700px" },
        smallTab: { max: "450px" },
        tinyTab: { max: "360px" },
      },
    },
  },
  plugins: [],
};
