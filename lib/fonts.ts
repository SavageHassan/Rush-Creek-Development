import localFont from 'next/font/local';

/**
 * Display face: Archivo. A heavy, tightly-set neo-grotesque chosen to echo the
 * Rush Creek wordmark, which is drawn in the same register — high x-height,
 * square terminals, closed apertures, very tight fit.
 *
 * Text face: Inter Tight, for body copy and the tracked-out micro labels.
 *
 * Both are self-hosted (SIL Open Font License) so the build depends on no
 * third-party font CDN.
 */
export const display = localFont({
  src: [
    { path: '../public/fonts/archivo-latin-var.woff2', weight: '400 800', style: 'normal' },
    { path: '../public/fonts/archivo-latin-var-italic.woff2', weight: '400 800', style: 'italic' },
  ],
  variable: '--font-display',
  display: 'swap',
  fallback: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
});

export const sans = localFont({
  src: [{ path: '../public/fonts/inter-tight-latin-var.woff2', weight: '300 600', style: 'normal' }],
  variable: '--font-sans',
  display: 'swap',
  fallback: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
});
