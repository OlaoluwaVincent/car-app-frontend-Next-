import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#E0E9F4',
          200: '#C3D4E9',
          300: '#90A3BF',
          400: '#596780',
          500: '#1A202C',
          600: '#131825',
          700: '#0D121F',
          800: '#080C19',
          900: '#040815',
        },
        blue: {
          100: '#DCF3FF',
          200: '#BAE5FF',
          300: '#98D3FF',
          400: '#7EC2FF',
          500: '#54A6FF',
          600: '#3D81DB',
          700: '#2A60B7',
          800: '#1A4393',
          900: '#102E7A',
        },
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        fancy: ['Yanone Kaffeesatz', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
