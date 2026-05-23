/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class', // <--- Ei line-ti dark mode active korbe
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}", // Apnar 'component' folder-er path
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;