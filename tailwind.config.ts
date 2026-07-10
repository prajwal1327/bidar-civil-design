import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0d1117',
          navy: '#0f1b33',
          'navy-light': '#162040',
          gold: '#c4922a',
          'gold-light': '#e8b84b',
          cream: '#f8f4ee',
          muted: '#6b7280',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 20px 60px rgba(15, 23, 42, 0.10)',
        card: '0 4px 24px rgba(15, 23, 42, 0.07)',
      },
    },
  },
  plugins: [],
};

export default config;
