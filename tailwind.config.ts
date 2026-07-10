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
          dark: '#f8fafc',
          surface: '#ffffff',
          primary: '#0f4c81',
          secondary: '#2563eb',
          gold: '#f59e0b',
          muted: '#64748b',
          accent: '#eff6ff',
        },
      },
      boxShadow: {
        glass: '0 24px 80px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(37, 99, 235, 0.14), transparent 32%), radial-gradient(circle at bottom right, rgba(245, 158, 11, 0.12), transparent 22%)',
      },
    },
  },
  plugins: [],
};

export default config;
