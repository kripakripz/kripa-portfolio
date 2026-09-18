/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0C',
        bgalt: '#131316',
        card: '#17171B',
        border: '#232327',
        ink: '#F1F1F0',
        inksoft: '#8E8E95',
        red: '#FF2D3D',
        reddeep: '#B3101F',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
