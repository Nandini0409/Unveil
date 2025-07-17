/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0D1117',
        card: '#161B22',
        light: '#F0F6FC',
        muted: '#8B949E',
        button: '#2DFBD9',
        'button-hover': '#00E0FF',
        neutral: '#30363D',
        accent: '#00E0FF',
        accent2: '#00FFA3',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(to right, #009DB8, #00B2B5, #11EDCC)',
        'blue-gradient-hover': 'linear-gradient(to right, #11EDCC, #00B2B5, #009DB8)',
      },
      boxShadow: {
        custom: '0px 5px 15px rgba(0, 0, 0, 0.35)',
      },
    }
  },
  plugins: [],
}

