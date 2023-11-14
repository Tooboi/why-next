/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'brand': {
          50: '#e0f7f8',
          100: '#b2ebec',
          200: '#80dee1',
          300: '#4fd0d6',
          400: '#29c6cf',
          500: '#00bcc9',
          600: '#02acb7',
          700: '#07969e',
          800: '#088286',
          900: '#095f5d',
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
};
