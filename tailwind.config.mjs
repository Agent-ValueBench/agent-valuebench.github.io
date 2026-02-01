/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          50: '#f5f3ef',
          100: '#e7e0d5',
          200: '#c9bba9',
          300: '#ad987d',
          400: '#8c6f52',
          500: '#6f5435',
          600: '#5a4129',
          700: '#3f2c1b',
          800: '#2a1c11',
          900: '#1b120b',
        },
        moss: {
          100: '#e1efe7',
          300: '#8bc8aa',
          500: '#2e8b57',
          700: '#1f5c3a',
        },
        amber: {
          100: '#fff1d6',
          300: '#ffca7a',
          500: '#f39b33',
          700: '#a35f17',
        },
        slateblue: {
          100: '#e7ebff',
          300: '#9aa7ff',
          500: '#5a64ff',
          700: '#2a35b8',
        },
      },
      boxShadow: {
        soft: '0 20px 60px -40px rgba(31, 16, 2, 0.35)',
        card: '0 18px 40px -30px rgba(20, 12, 4, 0.55)',
      },
    },
  },
  plugins: [],
};
