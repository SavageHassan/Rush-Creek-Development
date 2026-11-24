'use client';

import Image from 'next/image';

/** Full-bleed kinetic band. Pure identity — no claims. */
export default function StatementBand() {
  const unit = (
    <span className="flex shrink-0 items-center gap-10 pr-10">
      <span className="display whitespace-nowrap text-[clamp(2.4rem,6vw,5rem)] leading-none">
        Building <em className="italic">Legacy</em> Developments
      </span>
      <Image
        src="/images/brand/mark.avif"
        alt=""
        width={788}
        height={555}
        sizes="120px"
        className="h-[0.5em] w-auto shrink-0 opacity-70"
        style={{ fontSize: 'clamp(2.4rem,6vw,5rem)' }}
      />
    </span>
  );

  return (
    <div className="overflow-hidden border-y border-ink/12 bg-paper-deep py-7">
      <div className="flex w-max animate-[band_34s_linear_infinite] items-center">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="flex">
            {unit}
          </span>
        ))}
      </div>
      <style jsx global>{`
        @keyframes band {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[band_34s_linear_infinite\\] { animation: none; }
        }
      `}</style>
    </div>
  );
}
