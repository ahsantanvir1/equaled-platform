import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7f9',
          100: '#e8ecf0',
          200: '#CCD1DB', // Pale Blue
          300: '#a8b8c7',
          400: '#849fb3',
          500: '#658EA4', // Sky Blue
          600: '#537283',
          700: '#415662',
          800: '#2f3b42',
          900: '#1d2021',
          950: '#0b0f10',
        },
        secondary: {
          50: '#fdf6f5',
          100: '#fbecea',
          200: '#f5d9d5',
          300: '#efc6c0',
          400: '#E8BAC2', // Blush
          500: '#E8A096', // Pink
          600: '#ba807a',
          700: '#8c605c',
          800: '#5e403d',
          900: '#30201f',
        },
        accent: {
          50: '#fdfbf5',
          100: '#fbf7ea',
          200: '#f5efd5',
          300: '#efe7c0',
          400: '#e9dfab',
          500: '#E0BA40', // Yellow
          600: '#b39533',
          700: '#867026',
          800: '#594a1a',
          900: '#2c250d',
        },
        neutral: {
          50: '#F3F2F0', // Beige (lightest)
          100: '#e9e8e6',
          200: '#d8d6d3',
          300: '#c7c4c0',
          400: '#b6b2ad',
          500: '#a5a09a',
          600: '#84807b',
          700: '#63605c',
          800: '#42403d',
          900: '#21201e',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        warning: {
          50: '#fdfbf5',
          100: '#fbf7ea',
          500: '#E0BA40',
          600: '#b39533',
          700: '#867026',
        },
        error: {
          50: '#fdf6f5',
          100: '#fbecea',
          500: '#E8A096',
          600: '#ba807a',
          700: '#8c605c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'focus-ring': '0 0 0 3px rgba(101, 142, 164, 0.3)',
      }
    },
  },
  plugins: [],
}

export default config

