/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // AGIX-inspired dark palette
        base: '#000000',           // Black background
        surface: '#14213D',        // Deep navy surface
        primary: '#FFFFFF',        // White text
        primaryLight: '#E5E5E5',   // Light gray text
        secondary: '#1F2A44',      // Border navy
        highlight: '#FCA311',      // Accent orange
        accent: '#FCA311',         // Accent orange
        dark: '#000000',           // Dark background variant
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 24px rgba(0, 0, 0, 0.35)',
        'medium': '0 12px 36px rgba(0, 0, 0, 0.45)',
        'large': '0 24px 60px rgba(0, 0, 0, 0.55)',
      },
    },
  },
  plugins: [],
};