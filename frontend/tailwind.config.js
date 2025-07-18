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
        light: '#FAF9F6',
        muted: '#8B949E',
        button: '#2DFBD9',
        'button-hover': '#00E0FF',
        neutral: '#30363D',
        accent: '#00E0FF',
        accent2: '#00FFA3',
      },
      backgroundImage: {
        'nav-gradient': 'linear-gradient(to right, #2b003e, #1b0624)',
      },
      boxShadow: {
        custom: '0px 5px 15px rgba(0, 0, 0, 0.35)',
      },
    }
  },
  plugins: [],
}

