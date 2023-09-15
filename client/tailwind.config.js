/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
			sans: ["Inter"],
		},
    screens: {

      'sm': '640px',

      'sm-md': '900px',

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}