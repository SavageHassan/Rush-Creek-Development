'use client';

import Image from 'next/image';

/**
 * Quiet kinetic band between the hero and the firm introduction.
 * Identity only — it makes no claim.
 */
const phrases = [
  'Building Legacy Developments',
  'Minnesota & the Midwest',
  'Institutional quality product',
  'Established development partner',
];

export default function StatementBand() {
  const run = (
    <div className="flex shrink-0 items-center">
      {phrases.map((phrase, i) => (
        <span key={i} className="flex shrink-0 items-center">
          <span className="display whitespace-nowrap text-[clamp(1rem,1.6vw,1.45rem)] leading-none tracking-tight2 text-ink/80">
            {phrase}
          </span>
          <Image
            src="/images/brand/mark.avif"
            alt=""
            width={788}
            height={555}
            sizes="40px"
            className="mx-7 h-[0.72em] w-auto shrink-0 opacity-45 sm:mx-10"
            style={{ fontSize: 'clamp(1rem,1.6vw,1.45rem)' }}
          />
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden border-y border-ink/12 bg-paper-deep/70 py-4">
      <div className="flex w-max animate-[band_46s_linear_infinite] items-center">
        {run}
        {run}
      </div>
      <style jsx global>{`
        @keyframes band {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[band_46s_linear_infinite\\] { animation: none; }
        }
      `}</style>
    </div>
  );
}
