/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: { // menimpa fitur
    container : {
      center: true,
      padding: '16px',
    },
    extend: { // menambahkan fitur yang dimiliki tailwind
      colors : {
        primary : '#14b8a6',
        dark : '#0f172a',
        secondary: '#64748b'
      },
      screens: {
        '2xl' : '1320px'
      },
    },
  },
  plugins: [],
}

