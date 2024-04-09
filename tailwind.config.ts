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
        black: {
          900: '#040815',
          800: '#080C19',
          700: '#0D121F',
          600: '#131825',
          500: '#1A202C',
          400: '#596780',
          300: '#90A3BF',
          200: '#C3D4E9',
          100: '#E0E9F4',
        },
        warning: {
          900: '#7A4D0B',
          800: '#936312',
          700: '#B7821D',
          600: '#DBA32A',
          500: '#FFC73A',
          400: '#FFD96B',
          300: '#FFE488',
          200: '#FFEFB0',
          100: '#FFF8D7',
        },
        error: {
          900: '#7A0619',
          800: '#930B16',
          700: '#B71112',
          600: '#DB2719',
          500: '#FF4423',
          400: '#FF7F59',
          300: '#FFA37A',
          200: '#FFC8A6',
          100: '#FFE7D3',
        },
        success: {
          900: '#3B6506',
          800: '#4C7A0B',
          700: '#659711',
          600: '#7FB519',
          500: '#9CD323',
          400: '#BCE455',
          300: '#D3F178',
          200: '#E8FAA6',
          100: '#F5FCD2',
        },
        darkblue: {
          900: '#0A196F',
          800: '#102587',
          700: '#1A37A7',
          600: '#264BC8',
          500: '#3563E9',
          400: '#658DF1',
          300: '#85A8F8',
          200: '#AEC8FC',
          100: '#D6E4FD',
        },
      },

      fontSize: {
        xs: [
          '12px',
          {
            lineHeight: 'normal',
            letterSpacing: '-0.12px',
          },
        ],
        sm: [
          '14px',
          {
            lineHeight: '24px',
            letterSpacing: '-0.28px',
          },
        ],

        base: [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: '-0.32px',
          },
        ],
        lg: [
          '18px',
          {
            lineHeight: '27px',
            letterSpacing: '-0.36px',
          },
        ],
        xl: [
          '20px',
          {
            lineHeight: '30px',
            letterSpacing: '-0.4px',
          },
        ],
        '2xl': [
          '24px',
          {
            lineHeight: '36px',
            letterSpacing: '-0.48px',
          },
        ],
        '3xl': [
          '32px',
          {
            lineHeight: '48px',
            letterSpacing: '-0.64px',
          },
        ],
        '4xl': [
          '36px',
          {
            lineHeight: '54px',
            letterSpacing: '-1.08px',
          },
        ],
        '5xl': [
          '40px',
          {
            lineHeight: '60px',
            letterSpacing: '-1.2px',
          },
        ],
        '6xl': [
          '72px',
          {
            lineHeight: '108px',
            letterSpacing: '-2.88px',
          },
        ],
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        fancy: ['Yanone Kaffeesatz', 'sans-serif'],
      },

      screens: {
        base: '420px',
      },
    },
  },
  plugins: [],
};
export default config;
