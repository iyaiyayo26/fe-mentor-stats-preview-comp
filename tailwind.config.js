/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-desaturated-blue": "#1b1938",
        "slightly-transparent-white": "hsla(0, 0%, 100%, 0.6)",
        "soft-violet-accent": "#aa5cdb",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "lexend-deca": ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};
