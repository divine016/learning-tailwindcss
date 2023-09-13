/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '16': '16rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}

