/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      //
      fontFamily: {
        burtons: "burtons",
      },
      backgroundColor: {
        "custom-color": "#EBEBEB",
        // "custom-color": "#EAF6FF",
      },
    },
  },
  plugins: [],
};

