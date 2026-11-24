/**
 * Industry partners carried over from the existing rushcreekdevelopment.com
 * partner strip. Names are read directly from each supplied logo; the marks
 * themselves are the original assets, normalised to a single ink weight so the
 * row reads evenly on the limestone ground.
 */
export type Partner = { name: string; discipline: string; logo: string; width: number; height: number };

export const partners: Partner[] = [
  { name: 'JLL', discipline: 'Capital markets', logo: '/images/partners-mono/partner-2.png', width: 900, height: 404 },
  { name: 'Kaas Wilson Architects', discipline: 'Architecture', logo: '/images/partners-mono/partner-6.png', width: 900, height: 229 },
  { name: 'Lyon Contracting', discipline: 'Construction', logo: '/images/partners-mono/partner-4.png', width: 808, height: 283 },
  { name: 'Ehlers', discipline: 'Public finance advisors', logo: '/images/partners-mono/partner-3.png', width: 900, height: 232 },
  { name: 'Maxfield Research & Consulting', discipline: 'Market research', logo: '/images/partners-mono/partner-5.png', width: 900, height: 318 },
  { name: 'Alliant', discipline: 'Engineering', logo: '/images/partners-mono/partner-7.png', width: 900, height: 156 },
  { name: 'F&C', discipline: 'Development partner', logo: '/images/partners-mono/partner-1.png', width: 177, height: 176 },
];
