'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Project } from '@/lib/projects';

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProjectIndex({ items }: { items: Project[] }) {
  const [active, setActive] = useState<string>(items[0]?.slug ?? '');
  const activeProject = items.find((p) => p.slug === active);

  return (
    <div
      className="relative"
      onMouseLeave={() => setActive(items[0]?.slug ?? '')}
    >
      {/* Floating preview, desktop only */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[34%] lg:block">
        <div className="sticky top-1/2 aspect-[4/5] w-full -translate-y-1/2">
          <AnimatePresence mode="wait">
            {activeProject && (
              <motion.div
                key={activeProject.slug}
                initial={{ opacity: 0, scale: 1.04, clipPath: 'inset(12% 0 12% 0)' }}
                animate={{ opacity: 1, scale: 1, clipPath: 'inset(0% 0 0% 0)' }}
                exit={{ opacity: 0, scale: 1.02, clipPath: 'inset(12% 0 12% 0)' }}
                transition={{ duration: 0.65, ease }}
                className="relative h-full w-full overflow-hidden ring-1 ring-accent/35"
              >
                <Image
                  src={activeProject.cover.src}
                  alt={activeProject.cover.alt}
                  fill
                  sizes="34vw"
                  className="object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <ul className="relative z-10">
        {items.map((p) => (
          <li key={p.slug} className="group/row relative border-t border-ink/15 last:border-b">
            <Link
              href={`/projects/${p.slug}`}
              onMouseEnter={() => setActive(p.slug)}
              onFocus={() => setActive(p.slug)}
              className="group block py-8 md:py-10"
            >
              <div className="flex flex-col gap-5 lg:w-[62%] lg:flex-row lg:items-baseline lg:gap-10">
                <span className="numeral-outline w-16 shrink-0 text-[2.75rem] text-accent">{p.index}</span>
                <div className="flex-1">
                  <h3 className="display text-[1.8rem] leading-[1.05] transition-transform duration-700 ease-editorial group-hover:translate-x-2 sm:text-[2.3rem] lg:text-[2.3rem]">
                    {p.name}
                  </h3>
                  <p className="mt-3 max-w-xl text-[0.98rem] leading-relaxed text-ink/70">
                    {p.subtitle}
                  </p>
                </div>
                <div className="flex shrink-0 flex-col gap-1 text-right lg:w-44">
                  <span className="label text-ink-muted">{p.location}</span>
                  <span className="label text-accent-deep">{p.year}</span>
                </div>
              </div>

              {/* Inline image, mobile and tablet */}
              <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden lg:hidden">
                <Image
                  src={p.cover.src}
                  alt={p.cover.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
