import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      opacity: Object.fromEntries(Array.from({ length: 101 }, (_, i) => [String(i), String(i / 100)])),
      colors: {
        /* Monochrome ground, matching the wordmark's own black. */
        ink: {
          DEFAULT: '#0A0A0A',
          soft: '#171717',
          deep: '#000000',
          muted: '#6E6E6E',
        },
        /* Paper — near-white, a hair off pure so large fields don't glare. */
        paper: {
          DEFAULT: '#FAFAFA',
          deep: '#F0F0F0',
          dim: '#E0E0E0',
        },
        /* Neutral accent: rules, eyebrows and secondary labels. */
        accent: {
          DEFAULT: '#8C8C8C',
          light: '#C8C8C8',
          deep: '#6E6E6E',
        },
        clay: '#8A8A8A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
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
