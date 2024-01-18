import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        main: '#c0c2c5',
        sub: '#1a1b1e',
      },
      backgroundColor: {
        main: '#1a1b1e',
      },
    },
  },
  plugins: [],
}
export default config
