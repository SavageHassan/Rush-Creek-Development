'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { partners } from '@/lib/partners';

const ease = [0.22, 1, 0.36, 1] as const;

export default function PartnerGrid({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const ref = useRef<HTMLUListElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });

  const line = tone === 'dark' ? 'border-ink/12' : 'border-white/12';
  const nameColor = tone === 'dark' ? 'text-ink' : 'text-paper';
  const subColor = tone === 'dark' ? 'text-ink-muted' : 'text-paper/50';

  return (
    <ul
      ref={ref}
      className={`grid grid-cols-2 gap-px border md:grid-cols-4 ${line} ${
        tone === 'dark' ? 'bg-ink/12' : 'bg-white/12'
      }`}
    >
      {partners.map((p, i) => (
        <motion.li
          key={p.name}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease, delay: i * 0.05 }}
          className={`group flex flex-col items-center justify-between gap-7 px-5 py-9 text-center md:px-7 md:py-11 ${
            tone === 'dark' ? 'bg-paper' : 'bg-ink'
          }`}
        >
          {/* Fixed optical box: every mark is centred in the same space */}
          <div className="flex h-12 w-full items-center justify-center md:h-14">
            <div
              className="relative h-full w-full transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
              style={{ transform: `scale(${p.scale})` }}
            >
              <Image
                src={p.logo}
                alt={`${p.name} logo`}
                fill
                sizes="(max-width: 768px) 42vw, 20vw"
                className={`object-contain transition-opacity duration-500 ${
                  tone === 'dark'
                    ? 'opacity-70 group-hover:opacity-100'
                    : 'opacity-70 invert group-hover:opacity-100'
                }`}
              />
            </div>
          </div>

          <div>
            <p className={`text-[0.92rem] leading-snug ${nameColor}`}>{p.name}</p>
            <p className={`label mt-2 ${subColor}`}>{p.discipline}</p>
          </div>
        </motion.li>
      ))}

      {/* Closing cell keeps the four-column grid square */}
      <li
        className={`hidden flex-col justify-center px-5 py-9 text-center md:flex md:px-7 md:py-11 ${
          tone === 'dark' ? 'bg-paper-deep/70' : 'bg-ink-soft'
        }`}
      >
        <p className="label text-bronze-deep">Collaboration</p>
        <p className={`mx-auto mt-4 max-w-[24ch] text-[0.88rem] leading-relaxed ${subColor}`}>
          The strongest projects come from strong collaboration with public and private partners.
        </p>
      </li>
    </ul>
  );
}
