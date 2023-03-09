/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    colors: {
      white: "#F7EDE2",
      darkwhite: "#DFD4C9",
      lightpink: "#F5CAC3",
      orange: "#F6BD60",
      green: "#84A59D",
      darkpink: "#F28482",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
