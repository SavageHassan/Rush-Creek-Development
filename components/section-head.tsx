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
            className={`numeral-outline shrink-0 text-[clamp(2.4rem,4.6vw,3.8rem)] ${
              tone === 'dark' ? 'text-accent' : 'text-accent-light'
            }`}
            aria-hidden
          >
            {index}
          </span>
        )}
        <div className="flex-1 pt-2">
          <div className={`h-px w-full ${rule}`} />
          <span className={`label mt-4 block ${tone === 'dark' ? 'text-accent-deep' : 'text-accent-light'}`}>
            {label}
          </span>
        </div>
      </div>
      {title && (
        <h2 className={`display mt-8 text-[clamp(1.9rem,3.9vw,3.3rem)] ${muted ? '' : ''}`}>{title}</h2>
      )}
    </Reveal>
  );
}
