import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero":"url('/public/bg.jpg')"
      },
      colors:{
        'white-light':'#fffff30',
        'white-medium':'#fffff40'
      }
    },
  },
  plugins: [],
};
export default config;
