module.exports = {
  content: [
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    // './*/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {},
  plugins: [require('@tailwindcss/aspect-ratio')],
};
