/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  theme: {
    screens: {
      sm: "300px",
      // => @media (min-width: 640px) { ... }
      sm2: "400px",
      sm3: "451px",
      // => @media (min-width: 640px) { ... }

      mmd: "550px",
      mmd2: "650px",
      md: "768px",

      md2: "820px",
      // => @media (min-width: 768px) { ... }

      md3: "900px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      lg2: "1220px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
