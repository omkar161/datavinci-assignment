module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F5F9FF',
          100: '#EAF2FF',
          200: '#FCE1FF',
          300: '#A9C7FF',
          400: '#7A7AFF',
          500: '#4848FF',
          600: '#326AFF',
          700: '#234FE0',
          800: '#1C3FB3',
          900: '#162F85',
        },
        accent: '#FF7A59',
      },
      fontFamily: {
        display: ["Inter", 'system-ui', 'sans-serif'],
        body: ["Inter", 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
