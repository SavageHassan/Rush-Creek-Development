'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { partners } from '@/lib/partners';

const ease = [0.22, 1, 0.36, 1] as const;

export default function PartnerGrid({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const ref = useRef<HTMLUListElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const line = tone === 'dark' ? 'border-ink/15' : 'border-white/15';
  const nameColor = tone === 'dark' ? 'text-ink' : 'text-paper';
  const subColor = tone === 'dark' ? 'text-ink-muted' : 'text-paper/50';

  return (
    <ul ref={ref} className={`grid grid-cols-2 border-t md:grid-cols-4 ${line}`}>
      {partners.map((p, i) => (
        <motion.li
          key={p.name}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease, delay: i * 0.06 }}
          className={`group flex flex-col justify-between gap-6 border-b border-r p-6 last:border-r-0 md:p-8 ${line} [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(4n)]:border-r-0`}
        >
          <div className="relative h-10 w-full md:h-12">
            <Image
              src={p.logo}
              alt={`${p.name} logo`}
              fill
              sizes="(max-width: 768px) 45vw, 22vw"
              className={`object-contain object-left transition-opacity duration-500 ${
                tone === 'dark'
                  ? 'opacity-85 group-hover:opacity-100'
                  : 'opacity-80 invert group-hover:opacity-100'
              }`}
            />
          </div>
          <div>
            <p className={`text-[0.95rem] leading-snug ${nameColor}`}>{p.name}</p>
            <p className={`label mt-2 ${subColor}`}>{p.discipline}</p>
          </div>
        </motion.li>
      ))}

      {/* Balancing cell so the 4-column grid closes cleanly */}
      <li className={`hidden border-b border-r-0 p-6 md:block md:p-8 ${line}`}>
        <p className="label text-bronze-deep">Collaboration</p>
        <p className={`mt-3 max-w-[22ch] text-[0.9rem] leading-relaxed ${subColor}`}>
          The strongest projects come from strong collaboration with public and private partners.
        </p>
      </li>
    </ul>
  );
}
