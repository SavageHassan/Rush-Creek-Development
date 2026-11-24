'use client';

import Image from 'next/image';

const partners = [
  '/images/partners/partner-2.jpg',
  '/images/partners/partner-3.jpg',
  '/images/partners/partner-5.jpg',
  '/images/partners/partner-4.png',
  '/images/partners/partner-7.jpg',
  '/images/partners/partner-6.jpg',
  '/images/partners/partner-1.png',
];

export default function PartnerMarquee() {
  const row = [...partners, ...partners];
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-[marquee_42s_linear_infinite] items-center gap-20 hover:[animation-play-state:paused]">
        {row.map((src, i) => (
          <div key={i} className="relative h-12 w-40 shrink-0 opacity-80 contrast-125 transition-opacity duration-500 hover:opacity-100">
            <Image
              src={src}
              alt="Industry partner"
              fill
              sizes="200px"
              className="object-contain mix-blend-multiply"
            />
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
