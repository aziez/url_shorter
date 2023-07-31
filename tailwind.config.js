/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "image-input": "url('/images/bg-shorten-desktop.svg')",
        boost: "url('/images/bg-boost-desktop.svg')",
      },
      colors: {
        Cyan: "hsl(180, 66%, 49%)",
        Violet: "hsl(257, 27%, 26%)",
        Red: "hsl(0, 87%, 67%)",
        Gray: "hsl(0, 0%, 75%)",
        Grayish: "hsl(257, 7%, 63%)",
        DarkBlue: "hsl(255, 11%, 22%)",
        DarkViolet: "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        custom: ["Poppins", "sans"],
      },
    },
  },
  plugins: [],
};
