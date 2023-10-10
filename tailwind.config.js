const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "blue-black" :"#132638",
      "verde-azul":"#1b3a41",
      "verde-negro":"#215359",
      "verde-claro-negro":"#90afa9",
      "verde-claro":"#d0e8d4",
      "azul-info":"#0000ff"
    },
    fontFamily: {
      poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      victor: ['Victor Mono', ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [],
}
