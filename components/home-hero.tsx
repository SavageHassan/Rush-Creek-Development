'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    v.play().catch(() => {
      /* autoplay blocked — the poster still carries the hero */
    });
  }, []);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink-deep text-paper">
      {/* Media */}
      <motion.div style={{ y: mediaY, scale: mediaScale }} className="absolute inset-0">
        <Image
          src="/images/renew-wichita/downtown.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setReady(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            ready ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/video/renew-wichita.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Grade — warm, architectural, legible */}
      <div className="absolute inset-0 bg-bronze-deep/25 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/45 to-ink-deep/30 lg:bg-gradient-to-r lg:from-ink-deep lg:via-ink-deep/72 lg:to-ink-deep/25" />
      <div className="absolute inset-0 bg-ink-deep/25 lg:bg-gradient-to-t lg:from-ink-deep lg:via-ink-deep/20 lg:to-ink-deep/70" />
      <div className="grain absolute inset-0" />

      {/* Architectural frame */}
      <div className="pointer-events-none absolute inset-[var(--shell-gutter)] hidden border border-bronze/25 lg:block" />

      {/* Content */}
      <div className="relative flex h-full flex-col">
        <div className="shell flex flex-1 flex-col justify-center pb-36 pt-28 sm:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.3 }}
            className="flex items-center gap-5"
          >
            <Image
              src="/images/brand/mark.avif"
              alt=""
              width={788}
              height={555}
              sizes="120px"
              className="h-10 w-auto invert sm:h-12"
            />
            <span className="h-10 w-px bg-bronze/50" />
            <span className="label text-bronze-light">
              Real estate development
              <br />
              Minnesota &amp; the Midwest
            </span>
          </motion.div>

          <h1 className="display mt-10 max-w-[13ch] text-[clamp(2.5rem,7.6vw,6.6rem)] leading-[0.9]">
            {['Building', 'Legacy', 'Developments'].map((word, i) => (
              <span key={word} className="block overflow-hidden pb-[0.055em]">
                <motion.span
                  className="block"
                  initial={{ y: '114%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1.2, ease, delay: 0.1 + i * 0.1 }}
                >
                  {i === 1 ? <em className="italic text-bronze-light">{word}</em> : word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.72 }}
            className="mt-8 flex flex-col gap-7 lg:mt-10 lg:flex-row lg:items-end lg:justify-between"
          >
            <p className="max-w-lg text-[1.05rem] leading-[1.7] text-paper/80">
              Creating lasting value for investors by building institutional quality product for the
              communities of tomorrow.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="/projects/parkway-neighborhood"
                className="label border border-bronze bg-bronze px-8 py-4 text-ink-deep transition-colors duration-500 hover:bg-transparent hover:text-bronze-light"
              >
                The current offering
              </Link>
              <Link href="/projects" className="label link-underline py-4 text-paper/80 hover:text-white">
                View the portfolio
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom rail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.95 }}
          className="absolute inset-x-0 bottom-0"
        >
          <div className="shell">
            <div className="border-t border-bronze/40 py-5">
              <dl className="grid grid-cols-2 gap-x-8 gap-y-4 sm:flex sm:gap-12 lg:gap-16">
                {rail.map((s) => (
                  <div key={s.label} className="flex items-baseline gap-3">
                    <dd className="display text-[1.45rem] leading-none">{s.value}</dd>
                    <dt className="label text-bronze-light/75">{s.label}</dt>
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
