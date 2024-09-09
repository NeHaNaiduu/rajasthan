/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 2px 10px rgba(0,0,0,0.4)',
        'tertiary':'5px 0px 0px red',
        'tertiaryy':'-5px 0px 0px red',
        'main': '0 5px 10px gray',
      },
      colors: {
        'custom-gray': 'rgb(228, 228, 228)', 
      },
    },
  },
  plugins: [],
}

