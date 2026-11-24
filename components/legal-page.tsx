import { RevealLines, Reveal } from '@/components/reveal';
import type { ReactNode } from 'react';

export type LegalSection = { heading?: string; paragraphs?: string[]; list?: string[] };

export default function LegalPage({
  title,
  lines,
  intro,
  effective,
  sections,
}: {
  title: string;
  lines: ReactNode[];
  intro?: string;
  effective?: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="bg-ink pb-16 pt-36 text-paper md:pb-20 md:pt-44">
        <div className="shell">
          <p className="label text-bronze-light">Legal</p>
          <h1 className="display mt-6 max-w-[16ch] text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98]">
            <RevealLines lines={lines} />
          </h1>
          {intro && (
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-2xl text-[1rem] leading-[1.8] text-paper/70">{intro}</p>
            </Reveal>
          )}
          {effective && <p className="label mt-8 text-bronze-light/85">{effective}</p>}
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="shell grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="label text-bronze-deep md:sticky md:top-32">{title}</p>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            {sections.map((section, i) => (
              <Reveal key={i} delay={0.03}>
                <div className="border-t border-ink/14 py-9 first:border-t-0 first:pt-0">
                  {section.heading && (
                    <h2 className="display text-[1.5rem] leading-snug md:text-[1.9rem]">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs?.map((p, j) => (
                    <p key={j} className="mt-5 max-w-2xl text-[0.98rem] leading-[1.85] text-ink/75">
                      {p}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mt-6 max-w-2xl space-y-3">
                      {section.list.map((item, j) => (
                        <li key={j} className="flex gap-4 text-[0.98rem] leading-[1.75] text-ink/75">
                          <span className="label mt-[6px] shrink-0 text-bronze">
                            {String(j + 1).padStart(2, '0')}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
