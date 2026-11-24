'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

/**
 * Anything already on screen when the component mounts plays straight away.
 * Waiting on the intersection observer for above-the-fold content left heroes
 * blank for as long as the first paint took.
 */
function useReveal(ref: React.RefObject<HTMLElement | null>, amount: number) {
  const observed = useInView(ref, { once: true, amount });
  const [onScreenAtMount, setOnScreenAtMount] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) setOnScreenAtMount(true);
  }, [ref]);

  return observed || onScreenAtMount;
}

export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'span';
}) {
  const Comp = motion[as];
  const ref = useRef<HTMLDivElement>(null);
  const show = useReveal(ref, 0.08);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Comp
      ref={ref as any}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </Comp>
  );
}

/** Masked line reveal used for display headings. */
export function RevealLines({
  lines,
  className,
  lineClassName,
  delay = 0,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const show = useReveal(ref, 0.15);

  return (
    <span ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.05em]">
          <motion.span
            className={`block ${lineClassName ?? ''}`}
            initial={{ y: '112%' }}
            animate={show ? { y: '0%' } : { y: '112%' }}
            transition={{ duration: 1.05, ease, delay: delay + i * 0.08 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
