/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#DABC70",
        brightColor: "#dd8036",
        backgroundColor: "#ffffff",
        customPurple: '#5A3E67',
        customYellow: '#DABC70',
      },
    },
  },
  plugins: [],
};
