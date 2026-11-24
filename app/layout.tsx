import type { Metadata } from 'next';
import './globals.css';
import { display, sans } from '@/lib/fonts';
import SmoothScroll from '@/components/smooth-scroll';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';


export const metadata: Metadata = {
  title: 'Rush Creek Development | Building Legacy Developments',
  description:
    'Rush Creek Development creates lasting value for investors by building institutional quality product for the communities of tomorrow.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <SmoothScroll />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
