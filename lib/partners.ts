/**
 * Industry partners carried over from the existing rushcreekdevelopment.com
 * partner strip. Names are read directly from each supplied logo; the marks
 * themselves are the original assets, normalised to a single ink weight so the
 * row reads evenly on the limestone ground.
 */
export type Partner = {
  name: string;
  discipline: string;
  logo: string;
  /** Optical scale so marks of different proportions read at the same weight. */
  scale: number;
};

export const partners: Partner[] = [
  { name: 'JLL', discipline: 'Capital markets', logo: '/images/partners-mono/partner-2.png', scale: 0.72 },
  { name: 'Kaas Wilson Architects', discipline: 'Architecture', logo: '/images/partners-mono/partner-6.png', scale: 0.95 },
  { name: 'Lyon Contracting', discipline: 'Construction', logo: '/images/partners-mono/partner-4.png', scale: 0.84 },
  { name: 'Ehlers', discipline: 'Public finance advisors', logo: '/images/partners-mono/partner-3.png', scale: 0.86 },
  { name: 'Maxfield Research & Consulting', discipline: 'Market research', logo: '/images/partners-mono/partner-5.png', scale: 1.0 },
  { name: 'Alliant', discipline: 'Engineering', logo: '/images/partners-mono/partner-7.png', scale: 0.78 },
  { name: 'F&C', discipline: 'Development partner', logo: '/images/partners-mono/partner-1.png', scale: 0.8 },
];
