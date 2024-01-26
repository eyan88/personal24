/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      "display": ['clamp(2.25rem,9.5vw,8rem)'],
      "heading-1": "6rem",
      "body-1": "32px",
      "body-2": "1.5rem",
    },
    fontFamily: {
      "sentient": ["Sentient-Variable", "sans-serif"],
      "satoshi-bold": ["Satoshi-Bold", "sans-serif"],
      "satoshi-regular": ["Satoshi-Regular", "sans-serif"],
    },
    colors: {
      "transparent": "transparent",
      "primary-bg": "#F3F3F1",
      "primary-100": "#FAFAF9",
      "primary-200": "#D7D7D1",
      "secondary-100": "#476438",
      "secondary-200": "#51733F",
      "secondary-300": "#7E9772",
      "tertiary-100": "#514B4E",
      "tertiary-200": "#63585E",
      "tertiary-300": "#898085",
    },
  },
  plugins: [],
};
