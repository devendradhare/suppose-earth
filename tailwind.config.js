/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // final colors
        primary: "rgb(151, 254, 42)",
        secondary: "rgb(112, 138, 255)",
        gray: "rgb(170, 170, 170)",
        black: "rgb(15,15,15)",
        bluewood: "rgb(52, 73, 94)",
        // transparent: {
        //   100: "rgba(0, 0, 0, 0.1)",
        //   200: "rgba(0, 0, 0, 0.2)",
        //   300: "rgba(0, 0, 0, 0.3)",
        //   400: "rgba(0, 0, 0, 0.4)",
        //   500: "rgba(0, 0, 0, 0.5)",
        //   600: "rgba(0, 0, 0, 0.6)",
        //   700: "rgba(0, 0, 0, 0.7)",
        //   800: "rgba(0, 0, 0, 0.8)",
        //   900: "rgba(0, 0, 0, 0.9)",
        // },
        //
        transparent: "transparent",
        current: "currentColor",
        white: "rgb(255,255,255,0.9)",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
