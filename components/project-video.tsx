'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProjectVideo({
  src,
  poster,
  caption,
}: {
  src: string;
  poster: string;
  caption: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(wrapRef, { amount: 0.3 });
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (inView) {
      v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      v.pause();
      setPlaying(false);
    }
  }, [inView]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => undefined);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <motion.div
      ref={wrapRef}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.9, ease }}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-ink-deep">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          className="h-full w-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>

        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? 'Pause film' : 'Play film'}
          className="group absolute inset-0 flex items-end justify-start p-6 md:p-8"
        >
          <span className="label flex items-center gap-3 border border-bronze/60 bg-ink-deep/55 px-5 py-3 text-paper backdrop-blur-sm transition-colors duration-500 group-hover:bg-bronze group-hover:text-ink-deep">
            <span className="relative flex h-1.5 w-1.5">
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-bronze-light group-hover:bg-ink-deep" />
            </span>
            {playing ? 'Pause' : 'Play'} &mdash; silent film
          </span>
        </button>
      </div>
      <p className="label mt-4 text-bronze-deep">{caption}</p>
    </motion.div>
  );
}
