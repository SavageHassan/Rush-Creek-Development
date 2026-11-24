import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      opacity: Object.fromEntries(Array.from({ length: 101 }, (_, i) => [String(i), String(i / 100)])),
      colors: {
        /* Warm architectural ground — charcoal with a brown cast, not pure black. */
        ink: {
          DEFAULT: '#17120D',
          soft: '#241C14',
          deep: '#0E0A07',
          muted: '#7C6E5E',
        },
        /* Limestone paper. */
        paper: {
          DEFAULT: '#F1EBE1',
          deep: '#E4DACA',
          dim: '#D2C5B0',
        },
        /* Signature accent — weathered bronze. */
        bronze: {
          DEFAULT: '#B07C40',
          light: '#C99A5E',
          deep: '#8A5F2E',
        },
        clay: '#9A4A30',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Times New Roman', 'serif'],
        sans: ['var(--font-sans)', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.16em',
        tight2: '-0.02em',
        tight3: '-0.035em',
      },
      maxWidth: {
        shell: '1600px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
