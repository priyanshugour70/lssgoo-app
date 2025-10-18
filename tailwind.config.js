/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.tsx',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        primary: {
          50: '#E6F2FF',
          100: '#CCE5FF',
          200: '#99CBFF',
          300: '#66B0FF',
          400: '#3396FF',
          500: '#007AFF',
          600: '#0062CC',
          700: '#004999',
          800: '#003166',
          900: '#001833',
        },
        // Secondary/Accent Colors
        secondary: {
          50: '#FFF5E6',
          100: '#FFEACC',
          200: '#FFD699',
          300: '#FFC166',
          400: '#FFAD33',
          500: '#FF9800',
          600: '#CC7A00',
          700: '#995B00',
          800: '#663D00',
          900: '#331E00',
        },
        // Success
        success: {
          light: '#4CAF50',
          DEFAULT: '#2E7D32',
          dark: '#1B5E20',
        },
        // Warning
        warning: {
          light: '#FFB74D',
          DEFAULT: '#FF9800',
          dark: '#F57C00',
        },
        // Error
        error: {
          light: '#E57373',
          DEFAULT: '#F44336',
          dark: '#D32F2F',
        },
        // Info
        info: {
          light: '#4FC3F7',
          DEFAULT: '#0288D1',
          dark: '#01579B',
        },
      },
      fontFamily: {
        sans: ['System'],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '40px',
        '3xl': '48px',
        '4xl': '64px',
      },
      borderRadius: {
        none: '0',
        sm: '4px',
        DEFAULT: '8px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        none: 'none',
      },
    },
  },
  plugins: [],
};
