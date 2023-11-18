/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightColor: 'white',
        // blueSky: '#7DF9FF'
        // blueSky: '#87CEEB',
        // blueSky: '#D0F0C0'
        // blueSky: '#98FB98',
        // blueSky: '#FFEED9'
        // blueSky: '#FAF1E6'
        // blueSky:'#FFE8DF',
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
    fontFamily: {
			sans: ["Inter"],
		},

    
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}