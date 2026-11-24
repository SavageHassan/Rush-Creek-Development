import type { ReactNode } from 'react';
import { Reveal } from '@/components/reveal';

export default function SectionHead({
  index,
  label,
  title,
  className = '',
  tone = 'dark',
}: {
  index?: string;
  label: string;
  title?: ReactNode;
  className?: string;
  tone?: 'dark' | 'light';
}) {
  const rule = tone === 'dark' ? 'bg-ink/15' : 'bg-white/20';
  const muted = tone === 'dark' ? 'text-ink-muted' : 'text-paper/50';

  return (
    <Reveal className={className}>
      <div className="flex items-start gap-6">
        {index && (
          <span
            className={`numeral-outline shrink-0 text-[clamp(3rem,6vw,5rem)] ${
              tone === 'dark' ? 'text-bronze' : 'text-bronze-light'
            }`}
            aria-hidden
          >
            {index}
          </span>
        )}
        <div className="flex-1 pt-2">
          <div className={`h-px w-full ${rule}`} />
          <span className={`label mt-4 block ${tone === 'dark' ? 'text-bronze-deep' : 'text-bronze-light'}`}>
            {label}
          </span>
        </div>
      </div>
      {title && (
        <h2 className={`display mt-8 text-[clamp(2.2rem,5vw,4.4rem)] ${muted ? '' : ''}`}>{title}</h2>
      )}
    </Reveal>
  );
}
