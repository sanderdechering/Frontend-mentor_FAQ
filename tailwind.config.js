/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'soft-violet': 'hsl(273, 75%, 66%)',
        'soft-blue': 'hsl(240, 73%, 65%)',

        //
        'very-dark-desaturated-blue': 'hsl(238, 29%, 16%)',
        'soft-red': 'hsl(14, 88%, 65%)',

        // Text
        'very-dark-grayish-blue': 'hsl(237, 12%, 33%)',
        'dark-grayish-blue': 'hsl(240, 6%, 50%)',

        // Divider
        'light-grayish-blue': 'hsl(240, 5%, 91%)'
      }
    },
  },
  plugins: [],
}
