module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    boxShadow: {
      custom: '0 8px 6px -1px rgba(124, 58, 237, 0.1), 0 2px 4px -1px rgba(124, 58, 237, 0.06)',
    },
  },
  variants: {
    extend: { backgroundColor: ['checked'], borderColor: ['checked'] },
  },
  plugins: [require('@tailwindcss/forms')],
};
