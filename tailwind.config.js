/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      display:["group-hover"],
      backgroundImage:{
        "presentation": "url('./media/presentation.png')",
        "presentation2": "url('./media/7.jpg')"
      },
      colors:{
        "dgray": "#a7a7a7",
        "lpink": "#ffcccc",
        "vanilla": "#f1efe7",
        "dvanilla": "#cbcac1",
        "peach": "#ffe5b4"
      },
      display:["group-hover"]
    },
    screens:{
      'xs': '474px',
      'sm': '640px',
      'md': '768px',
      'sp': '875px',
      'lg': '1024px',
      'sp2': '1241px',
      'xl': '1334px',
      'sp3': '1417px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}