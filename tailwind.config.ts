import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { navy: '#0B2A4A', forest: '#165B2D', deep: '#073B24', gold: '#D6A514', cream: '#F7F4EA', ink: '#18251F' },
      fontFamily: { display: ['var(--font-display)', 'Georgia', 'serif'], sans: ['var(--font-sans)', 'Arial', 'sans-serif'] },
      backgroundImage: { 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))' },
    },
  },
  plugins: [],
};
export default config;
