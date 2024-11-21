/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        basefont: ["Lora", "serif"],
      },
    },
    colors: {
      basecolor: "#00ABE4",
      bluecolor: "#00ABE4",
      lbluecolor: "#E9F1FA",
    },
  },
  plugins: [require("flowbite/plugin")],
};
