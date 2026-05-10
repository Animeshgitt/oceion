/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#042C53',
        mid: '#185FA5',
        bright: '#378ADD',
        light: '#85B7EB',
        pale: '#E6F1FB',
        white: '#FFFFFF',
        off: '#F4F8FD',
        text: '#0D1F33',
        muted: '#5A7A9A',
        border: '#C8DDEF',
      },
    },
  },
  plugins: [],
}