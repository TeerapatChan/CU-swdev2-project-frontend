import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'IBM': ['IBM Plex Sans', 'sans-serif'],
        'Nova': ['Ibarra Real Nova', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
