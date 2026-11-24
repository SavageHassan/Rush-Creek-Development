'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { nav, site } from '@/lib/site';

const ease = [0.22, 1, 0.36, 1] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ${
          scrolled || open
            ? 'bg-ink/95 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="shell">
          <div
            className={`flex items-center justify-between transition-[height] duration-500 ease-editorial ${
              scrolled ? 'h-[66px]' : 'h-[88px]'
            }`}
          >
            <Link href="/" aria-label="Rush Creek Development — home" className="relative z-10 block">
              <Image
                src="/images/brand/wordmark.png"
                alt="Rush Creek Development"
                width={576}
                height={125}
                priority
                sizes="220px"
                className={`w-auto invert transition-[height] duration-500 ease-editorial ${
                  scrolled ? 'h-[26px]' : 'h-[34px]'
                }`}
              />
            </Link>

            <nav className="hidden items-center gap-10 lg:flex">
              {nav.map((item) => {
                const active =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`label link-underline py-1 text-white/85 transition-colors hover:text-white ${
                      active ? 'text-white' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="label border border-bronze px-6 py-3 text-bronze-light transition-colors duration-300 hover:bg-bronze hover:text-ink-deep"
              >
                Book a call
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="relative z-10 flex h-10 w-10 flex-col items-end justify-center gap-[6px] lg:hidden"
            >
              <span
                className={`block h-px bg-white transition-all duration-500 ease-editorial ${
                  open ? 'w-6 translate-y-[3.5px] rotate-45' : 'w-6'
                }`}
              />
              <span
                className={`block h-px bg-white transition-all duration-500 ease-editorial ${
                  open ? 'w-6 -translate-y-[3.5px] -rotate-45' : 'w-4'
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease }}
            className="fixed inset-0 z-40 bg-ink text-paper lg:hidden"
          >
            <div className="shell flex h-full flex-col justify-between pb-10 pt-32">
              <ul>
                {nav.map((item, i) => (
                  <li key={item.href} className="border-b border-white/12">
                    <motion.div
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease, delay: 0.18 + i * 0.07 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-baseline justify-between py-5"
                      >
                        <span className="display text-[2.4rem] leading-none">{item.label}</span>
                        <span className="label text-bronze-light">0{i + 1}</span>
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
              <motion.a
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer noopener"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease, delay: 0.5 }}
                className="label block border border-bronze bg-bronze py-5 text-center text-ink-deep"
              >
                Book a call
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
