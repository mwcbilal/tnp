import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'hero':"url('/public/home/bg.png')"
      },
      colors:{
          'primary':'#00ADEE',
          'golden':"#FF970D",
          'secon':'#A3A3A3',
          'grayy':'#E4E4E4'
      },
       screens: {
        '2xl': '1820px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
export default config;
