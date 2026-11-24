'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Reveals are driven by a native IntersectionObserver and plain CSS
 * transitions rather than a motion library's viewport helper, which proved
 * unreliable for content that is already on screen when the page mounts.
 *
 * The hidden state only applies once `SmoothScroll` has marked the document
 * with `.js`, so a failure to hydrate can never leave content invisible.
 */
function useShown(ref: React.RefObject<HTMLElement | null>) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScreen = () => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.96 && r.bottom > 0;
    };

    if (typeof IntersectionObserver === 'undefined' || onScreen()) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -6% 0px' },
    );
    io.observe(el);

    // Safety net: anything still hidden shortly after mount gets shown.
    const t = window.setTimeout(() => {
      if (onScreen()) setShown(true);
    }, 300);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [ref]);

  return shown;
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'span';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const shown = useShown(ref);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag
      ref={ref as any}
      className={`reveal ${shown ? 'is-shown' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}

/** Masked line reveal used for display headings. */
export function RevealLines({
  lines,
  className = '',
  lineClassName = '',
  delay = 0,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const shown = useShown(ref);

  return (
    <span ref={ref} className={`reveal-lines block ${shown ? 'is-shown' : ''} ${className}`}>
      {lines.map((line, i) => (
        <span key={i} className="line">
          <span
            className={lineClassName}
            style={{ transitionDelay: `${delay + i * 0.09}s` }}
          >
            {line}
          </span>
        </span>
      ))}
    </span>
  );
}
