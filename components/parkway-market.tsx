import SectionHead from '@/components/section-head';
import ParallaxImage from '@/components/parallax-image';
import { Reveal } from '@/components/reveal';

const marketNotes = [
  {
    index: '01',
    title: 'Driving growth: the I-94 interchange advantage',
    body: 'The $24 million double diamond interchange demonstrates the region’s commitment to growth along the I-94 corridor, paving the way for future development. As expansion continues from Maple Grove to Dayton, this project cements the area’s role as a key economic corridor.',
    image: '/images/parkway/i94-interchange.jpg',
    alt: 'Aerial photograph of the Dayton Parkway double diamond interchange on I-94',
  },
  {
    index: '02',
    title: 'Expanding demand along the corridor',
    body: 'Dayton has emerged as a key growth hub along the I-94 corridor, with population growth surging by over 35% since 2010. This expansion is paired with a median household income of $155,406 in 2024, projected to grow at an annual rate of 2.99% to $180,104 by 2029. The primary market area reflects similar strength, with incomes rising from $126,796 to $148,982 over the same period.',
    image: '/images/parkway/dayton.jpg',
    alt: 'Landscape photograph of Dayton, Minnesota',
  },
  {
    index: '03',
    title: 'A rental market poised for continued growth',
    body: 'Despite new development, Dayton’s rental market remains tight, with vacancy rates consistently below 5%. Average rents for apartments and townhomes stand at $1,866 and $3,265 respectively. Employment growth of 14.8% from 2020 to 2024 has bolstered housing need, attracting lifestyle renters — high-income earners, young professionals and downsizing baby boomers — who seek modern, convenience-driven living.',
    image: '/images/context/neighborhood-aerial.jpg',
    alt: 'Aerial photograph of apartments and townhomes in the Dayton and Maple Grove area',
  },
];

const marketStats = [
  { value: '14.8%', label: 'Employment growth', note: '2020–2024' },
  { value: '$155,406', label: 'Median household income', note: 'Dayton, 2024' },
  { value: '< 5%', label: 'Rental vacancy' },
  { value: '35%+', label: 'Population growth', note: 'Since 2010' },
];

export default function ParkwayMarket() {
  return (
    <section className="bg-paper-deep py-24 md:py-32">
      <div className="shell">
        <SectionHead
          index="03"
          label="Why Dayton, Minnesota?"
          title={
            <>
              A market with <em className="italic">momentum</em>
            </>
          }
        />

        <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {marketStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <div className="border-t border-bronze/50 pt-6">
                <dd className="display text-[clamp(2rem,4.2vw,3.4rem)] leading-none">{s.value}</dd>
                <dt className="label mt-4 text-bronze-deep">{s.label}</dt>
                {s.note && <p className="mt-2 text-[0.78rem] text-ink-muted/80">{s.note}</p>}
              </div>
            </Reveal>
          ))}
        </dl>

        <div className="mt-24 space-y-24 md:space-y-32">
          {marketNotes.map((note, i) => (
            <div
              key={note.index}
              className={`grid items-center gap-10 md:grid-cols-12 ${
                i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Reveal className="md:col-span-7">
                <ParallaxImage
                  src={note.image}
                  alt={note.alt}
                  className="aspect-[16/10] w-full"
                  sizes="(max-width: 768px) 100vw, 58vw"
                  amount={8}
                />
              </Reveal>
              <Reveal delay={0.1} className="md:col-span-5">
                <div className={i % 2 === 1 ? 'md:pr-[8%]' : 'md:pl-[8%]'}>
                  <span className="numeral-outline block text-[2.6rem] text-bronze">{note.index}</span>
                  <h3 className="display mt-5 text-[clamp(1.7rem,3vw,2.5rem)] leading-[1.1]">
                    {note.title}
                  </h3>
                  <p className="mt-6 text-[1rem] leading-[1.8] text-ink/75">{note.body}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal className="mt-28">
          <div className="grid gap-10 border-t border-ink/14 pt-12 md:grid-cols-12">
            <h3 className="display text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[1.08] md:col-span-5">
              A community-centred <em className="italic">vision for growth</em>
            </h3>
            <p className="text-[1rem] leading-[1.8] text-ink/75 md:col-span-7 md:pl-[6%]">
              Our development isn&rsquo;t just about buildings &mdash; it&rsquo;s about creating a
              thriving neighbourhood that integrates modern living with community well-being. Featuring
              over 600 residential units, the project offers a diverse mix of housing, including
              townhomes, apartments and more affordable 30-plex buildings designed for a range of
              lifestyles. By constructing the smaller units first, investors can secure certificates of
              occupancy sooner and stabilise cash flow before the larger apartment buildings are
              developed. With green spaces, walking paths and proximity to essential services, the
              project blends convenience with liveability in Dayton&rsquo;s rapidly expanding market.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
