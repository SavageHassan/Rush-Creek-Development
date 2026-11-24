'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '@/lib/projects';

const ease = [0.22, 1, 0.36, 1] as const;

const rail = [
  { value: '21%', label: 'Average IRR' },
  { value: '485', label: 'Units built' },
  { value: '$120m', label: 'Capital raised' },
  { value: '2', label: '2026 projects' },
];

export default function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [curtain, setCurtain] = useState(true);
  const [hovered, setHovered] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const t = setTimeout(() => setCurtain(false), 420);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // `canplay` often fires before React attaches its handler, which left the
    // video playing underneath a poster at zero opacity.
    const show = () => setReady(true);
    if (v.readyState >= 2) show();
    v.addEventListener('loadeddata', show);
    v.addEventListener('canplay', show);
    v.addEventListener('playing', show);

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.play().catch(() => undefined);
    }

    return () => {
      v.removeEventListener('loadeddata', show);
      v.removeEventListener('canplay', show);
      v.removeEventListener('playing', show);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink-deep text-paper"
    >
      {/* Opening curtain */}
      <AnimatePresence>
        {curtain && (
          <motion.div
            key="curtain"
            className="absolute inset-0 z-30 bg-ink-deep"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease }}
          />
        )}
      </AnimatePresence>

      {/* Media — desaturated so the picture reads as tone, not colour */}
      <motion.div style={{ y: mediaY, scale: mediaScale }} className="absolute inset-0">
        <Image
          src="/images/renew-wichita/downtown.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale contrast-[1.12]"
        />
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 h-full w-full object-cover grayscale contrast-[1.12] transition-opacity duration-[1400ms] ${
            ready ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/video/renew-wichita.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Grade — dark enough to read against, light enough to see the film */}
      <div className="absolute inset-0 bg-ink-deep/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/35 to-ink-deep/45 lg:bg-gradient-to-r lg:from-ink-deep/95 lg:via-ink-deep/30 lg:to-ink-deep/5" />
      {/* Panel behind the project index */}
      <div className="absolute inset-y-0 right-0 hidden w-[40%] bg-gradient-to-l from-ink-deep/95 via-ink-deep/75 to-transparent lg:block" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-ink-deep/75 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink-deep to-transparent" />
      <div className="grain absolute inset-0" />

      {/* Content */}
      <div className="relative flex h-full flex-col">
        <div className="shell flex flex-1 items-center pb-36 pt-28 sm:pb-40">
          <div className="w-full lg:flex lg:items-end lg:justify-between lg:gap-16">
            <div className="lg:max-w-[62%]">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.55 }}
                className="flex items-center gap-5"
              >
                <Image
                  src="/images/brand/mark.avif"
                  alt=""
                  width={788}
                  height={555}
                  sizes="120px"
                  className="h-9 w-auto invert sm:h-11"
                />
                <span className="h-9 w-px bg-white/30" />
                <span className="label text-paper/65">
                  Real estate development
                  <br />
                  Minnesota &amp; the Midwest
                </span>
              </motion.div>

              <h1 className="display mt-9 text-[clamp(2.5rem,7.4vw,6.4rem)] leading-[0.92]">
                {['Building', 'Legacy', 'Developments'].map((word, i) => (
                  <span key={word} className="block overflow-hidden pb-[0.055em]">
                    <motion.span
                      className="block"
                      initial={{ y: '114%' }}
                      animate={{ y: '0%' }}
                      transition={{ duration: 1.2, ease, delay: 0.42 + i * 0.09 }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.95 }}
                className="mt-8 max-w-lg text-[1.05rem] leading-[1.7] text-paper/75"
              >
                Creating lasting value for investors by building institutional quality product for
                the communities of tomorrow.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease, delay: 1.05 }}
                className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
              >
                <Link
                  href="/projects/parkway-neighborhood"
                  className="label border border-paper bg-paper px-8 py-4 text-ink transition-colors duration-500 hover:bg-transparent hover:text-paper"
                >
                  The current offering
                </Link>
                <Link
                  href="/projects"
                  className="label link-underline py-4 text-paper/75 hover:text-white"
                >
                  View the portfolio
                </Link>
              </motion.div>
            </div>

            {/* Project index — a second way in, and it gives the right side weight */}
            <motion.ul
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease, delay: 1.15 }}
              onMouseLeave={() => setHovered(null)}
              className="hidden w-[30%] shrink-0 lg:block"
            >
              <li className="label pb-4 text-paper/70">Selected work</li>
              {projects.map((p) => (
                <li key={p.slug} className="border-t border-white/30">
                  <Link
                    href={`/projects/${p.slug}`}
                    onMouseEnter={() => setHovered(p.slug)}
                    className="group flex items-baseline gap-4 py-4"
                  >
                    <span className="label w-6 shrink-0 text-paper/60">{p.index}</span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block truncate text-[1.02rem] transition-all duration-500 ease-editorial ${
                          hovered === p.slug ? 'translate-x-1 text-white' : 'text-paper'
                        }`}
                      >
                        {p.name}
                      </span>
                      <span className="label mt-1 block text-paper/70">{p.location}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Bottom rail — one rule above the figures, nothing boxed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 1.25 }}
          className="absolute inset-x-0 bottom-0"
        >
          <div className="shell">
            <div className="border-t border-white/25 py-5">
              <dl className="grid grid-cols-2 gap-x-8 gap-y-4 sm:flex sm:gap-12 lg:gap-20">
                {rail.map((s) => (
                  <div key={s.label} className="flex items-baseline gap-3">
                    <dd className="display text-[1.55rem] leading-none">{s.value}</dd>
                    <dt className="label text-paper/55">{s.label}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
