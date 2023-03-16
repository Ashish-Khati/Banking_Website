/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage:{
        logo: "url('../assets/logo.png')",
        bglogo: "url('../assets/banklogo.png')",
        bank: "url('../assets/bank.png')"
      }
        
    },
  },
  plugins: [],
}
