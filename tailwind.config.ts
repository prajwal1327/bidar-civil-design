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
          dark: '#0f1316',
          surface: '#111820',
          gold: '#c9a16f',
          muted: '#8f958f',
          accent: '#f3e6d0',
        },
      },
      boxShadow: {
        glass: '0 24px 80px rgba(9, 16, 24, 0.24)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(201,161,111,0.16), transparent 32%), radial-gradient(circle at bottom right, rgba(255,255,255,0.08), transparent 22%)',
      },
    },
  },
  plugins: [],
};

export default config;
