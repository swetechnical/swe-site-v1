// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'swe-purple': '#5A5377',
        'swe-gold': '#DBC554',
        'swe-gray': '#A9A8A9',
        'cream-white': '#FFFFFF', // A common cream white shade
      },
      // You can also extend other properties like spacing, fontSize, etc.
    },
  },
  plugins: [require('daisyui')],
  // DaisyUI configuration (optional, but good for theme customization)
  daisyui: {
    themes: [
      {
        'swe-theme': {
          "primary": "#DBC554",    // DaisyUI primary will map to swe-gold
          "secondary": "#5A5377",  // DaisyUI secondary will map to swe-purple
          "accent": "#A9A8A9",     // DaisyUI accent will map to swe-gray
          "neutral": "#3D4451",
          "base-100": "#F5F5DC",   // DaisyUI base-100 (background) will map to cream-white
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      // You can add other DaisyUI themes if needed, or just use 'swe-theme'
      "light", // Fallback to a default light theme if 'swe-theme' isn't fully defined
    ],
    darkTheme: "light", // Or "dark" if you want a dark mode
  },
};