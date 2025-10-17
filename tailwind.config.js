

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      //  heading: ['"Playfair Display"', 'serif'], 
      //  heading: ['"Bricolage Grotesque"', 'sans-serif'],
        heading: ["'Exo 2'", "sans-serif"],
        body: ['"Quicksand"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

