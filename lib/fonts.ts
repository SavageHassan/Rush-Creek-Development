import localFont from 'next/font/local';

/**
 * Fonts are self-hosted (Instrument Serif + Inter Tight, both SIL Open Font
 * License) so the build does not depend on a third-party font CDN at runtime.
 */
export const display = localFont({
  src: [
    { path: '../public/fonts/instrument-serif-latin-400.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/instrument-serif-latin-400-italic.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-display',
  display: 'swap',
  fallback: ['Times New Roman', 'serif'],
});

export const sans = localFont({
  src: [{ path: '../public/fonts/inter-tight-latin-var.woff2', weight: '300 600', style: 'normal' }],
  variable: '--font-sans',
  display: 'swap',
  fallback: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
});
