/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'Menlo',
          'Consolas',
          'Monaco',
          'Liberation Mono',
          'Lucida Console',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};
