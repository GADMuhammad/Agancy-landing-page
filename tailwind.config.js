/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // If you have an HTML entry file
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all JavaScript and TypeScript files in the src folder
  ],
  theme: {
    extend: {
      screens: {
        first: "1125px",
        second: "750px",
        third: "660px",
        forth: "510px",
        fifth: "470px",
        sixth: "435px",
        seventh: "345px",
      },

      colors: {
        lightRed: "rgb(254, 120, 103, 0.4)",
        softRed: "hsl(7, 99%, 70%)",
        lightYellow: "rgb(250, 212, 0, 0.4)",
        softYellow: "hsl(51, 100%, 49%)",
        "light-moderate-cyan": "#90D4C5",
        "light-blue": "#3DBEFF",

        "Dark-desaturated-cyan": "hsl(167, 40%, 24%)",
        "Dark-blue": "hsl(198, 62%, 26%)",
        "Dark-moderate-cyan": "hsl(168, 34%, 41%)",
        "Very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "Very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "Dark-grayish-blue": "hsl(232, 10%, 55%)",
        "Grayish-blue": "hsl(210, 4%, 67%)",
        "light-Grayish-blue": "rgba(167, 171, 174, .3)",
      },

      fontSize: {
        size: "1.134rem",
      },

      fontFamily: {
        Barlow: ["Barlow", "Fraunces", "Inter", "sans-serif"],
        Fraunces: ["Fraunces", "Barlow", "Inter", "sans-serif"],
      },

      backgroundImage: {
        headerBg: "url('/src/assets/desktop/image-header.jpg')",
        headerMobileBg: "url('/src/assets/mobile/image-header.jpg')",
      },

      boxShadow: {
        header:
          "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
      },

      height: {
        restScreenAfterHeader: "calc(100vh - 5rem)",
      },
    },
  },
  plugins: [],
};
