import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f4ff',
          100: '#f3e9ff',
          200: '#e7d3ff',
          300: '#dbbbff',
          400: '#cf9fff',
          500: '#2d00f7',
          600: '#2700d6',
          700: '#2100b5',
          800: '#1b0094',
          900: '#0f0052',
        },
        secondary: {
          50: '#f0f5ff',
          100: '#e0ebff',
          200: '#c7d9ff',
          300: '#a3bbff',
          400: '#7a98ff',
          500: '#003D82',
          600: '#002d61',
          700: '#002149',
          800: '#001631',
          900: '#000b19',
        },
        accent: '#1cc2ff ',
        success: '#06A77D',
        danger: '#D62828',
        info: '#0077BE',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
      },
      borderRadius: {
        'DEFAULT': '8px',
      },
      boxShadow: {
        'sm': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'lg': '0 8px 16px rgba(0, 0, 0, 0.15)',
      },
      maxWidth: {
        'container': '1280px',
        'content': '1280px',
      },
    },
  },
  plugins: [],
} satisfies Config
