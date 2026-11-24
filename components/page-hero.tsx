import Image from 'next/image';
import { RevealLines, Reveal } from '@/components/reveal';
import type { ReactNode } from 'react';

export default function PageHero({
  label,
  lines,
  intro,
  image,
  imageAlt,
  meta,
  height = 'tall',
}: {
  label: string;
  lines: ReactNode[];
  intro?: ReactNode;
  image: string;
  imageAlt: string;
  meta?: { label: string; value: string }[];
  height?: 'tall' | 'short';
}) {
  return (
    <section
      className={`relative w-full overflow-hidden bg-ink text-paper ${
        height === 'tall' ? 'min-h-[86svh]' : 'min-h-[66svh]'
      } flex flex-col justify-end`}
    >
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink/88" />
      </div>

      <div className="shell relative pb-14 pt-36 md:pb-16">
        <p className="label text-bronze-light">{label}</p>
        <h1 className="display mt-7 max-w-[16ch] text-[clamp(2.3rem,6vw,5.2rem)]">
          <RevealLines lines={lines} />
        </h1>
        {intro && (
          <Reveal delay={0.25}>
            <p className="mt-8 max-w-2xl text-[1.0625rem] leading-[1.75] text-paper/75">{intro}</p>
          </Reveal>
        )}
        {meta && (
          <Reveal delay={0.35}>
            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-bronze/45 pt-7 sm:grid-cols-4">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="label text-bronze-light/85">{m.label}</dt>
                  <dd className="mt-3 text-[0.98rem] text-paper/90">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}
      </div>
    </section>
  );
}
