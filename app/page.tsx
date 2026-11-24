import Link from 'next/link';
import Image from 'next/image';
import HomeHero from '@/components/home-hero';
import StatementBand from '@/components/statement-band';
import SectionHead from '@/components/section-head';
import Counter from '@/components/counter';
import ParallaxImage from '@/components/parallax-image';
import PartnerGrid from '@/components/partner-grid';
import ProjectIndex from '@/components/project-index';
import { Reveal, RevealLines } from '@/components/reveal';
import { projects } from '@/lib/projects';
import { site, trackRecord } from '@/lib/site';

const capabilities = [
  {
    index: '01',
    title: 'Expertise in complex urban projects',
    body: 'Adaptive reuse, public-private partnerships and large-scale redevelopment. Land use optimisation, parking logistics, public easements and regulatory complexity. A working knowledge of financing structures — including federal programmes and strategic investment frameworks — that secures optimal funding and delivers financially sound projects.',
  },
  {
    index: '02',
    title: 'A vision for sustainable growth',
    body: 'Vibrant, sustainable places that elevate communities and carry long-term economic impact. We revitalise underutilised areas and build walkable, connected urban environments — from site feasibility through to adaptive design — so that projects meet financial goals and improve quality of life.',
  },
  {
    index: '03',
    title: 'Transformative solutions for long-term success',
    body: 'We manage the entire development process, from capital raising through project execution and strategic exits. Our portfolio reflects an ability to deliver on time and on budget in demanding environments, tailoring solutions to the particular demands of each project.',
  },
  {
    index: '04',
    title: 'Collaboration and innovation',
    body: 'The strongest projects come from strong collaboration. We work closely with public and private partners to align with their vision — blending community need with private investment so that developments create value for every stakeholder.',
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <StatementBand />

      {/* Introduction */}
      <section className="bg-paper py-24 md:py-32">
        <div className="shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionHead index="01" label="The firm" />
            <Reveal delay={0.15}>
              <dl className="mt-12 space-y-7">
                {[
                  { k: 'Discipline', v: 'Boutique real estate development' },
                  { k: 'Focus', v: 'Challenging and historic sites across the Midwest' },
                  { k: 'Scope', v: 'Capital raising, development, strategic asset sales' },
                ].map((row) => (
                  <div key={row.k} className="border-t border-ink/12 pt-4">
                    <dt className="label text-bronze-deep">{row.k}</dt>
                    <dd className="mt-2 max-w-[26ch] text-[0.95rem] leading-relaxed text-ink/70">
                      {row.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <div className="md:col-span-8 md:pl-[6%]">
            <h2 className="display text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.06]">
              <RevealLines
                lines={[
                  'Unmatched expertise',
                  <span key="l1">
                    and <em className="italic">execution.</em>
                  </span>,
                ]}
              />
            </h2>
            <Reveal delay={0.1} className="prose-editorial mt-10 max-w-2xl text-[1.0625rem] leading-[1.75] text-ink/75">
              <p>
                At Rush Creek we create lasting value for our investors by building projects that drive
                growth and opportunity. Our disciplined approach — spanning capital raising, development
                and strategic asset sales — lets us navigate complex markets and create value for the
                people who invest alongside us.
              </p>
              <p>
                With a proven track record, strategic partnerships and a data-driven strategy, we deploy
                capital in dynamic sectors positioned for long-term success, ensuring our investors&rsquo;
                capital is both protected and maximised.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/firm" className="label link-underline mt-10 inline-block">
                Learn more about the firm
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="bg-ink py-24 text-paper md:py-32">
        <div className="shell grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHead index="02" label="Track record" tone="light" />
            <h2 className="display mt-8 text-[clamp(2rem,3.8vw,3.2rem)] leading-[1.06]">
              <RevealLines
                lines={[
                  <span key="l1">A record built on</span>,
                  <em key="l2" className="italic text-bronze-light">
                    delivery, not projection.
                  </em>,
                ]}
              />
            </h2>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-md text-[1rem] leading-[1.8] text-paper/70">
                Three developments across Minnesota and Kansas, each taken from site assembly
                through entitlement, capital and construction. Two more are underway for 2026.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link
                  href="/projects"
                  className="label border border-bronze px-7 py-4 text-bronze-light transition-colors duration-500 hover:bg-bronze hover:text-ink-deep"
                >
                  See the portfolio
                </Link>
                <Link href="/firm" className="label link-underline py-4 text-paper/70 hover:text-white">
                  How we underwrite
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <dl className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {trackRecord.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.08}>
                  <div className="border-t border-bronze/45 py-8">
                    <dd className="display text-[clamp(3rem,6vw,5.2rem)] leading-none">
                      <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    </dd>
                    <dt className="label mt-4 text-bronze-light/85">{stat.label}</dt>
                  </div>
                </Reveal>
              ))}
            </dl>
            <Reveal delay={0.3}>
              <p className="mt-6 border-t border-white/12 pt-6 text-[0.78rem] leading-relaxed text-paper/40">
                Figures as published by Rush Creek Development. Average IRR reflects realised
                results across completed projects; target returns on current offerings are stated
                as targets on each project page.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured result */}
      <section className="relative bg-paper py-24 md:py-32">
        <div className="shell grid items-center gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <ParallaxImage
              src="/images/rush-creek-apartments/amenity.webp"
              alt="Rush Creek Apartments, Maple Grove, Minnesota"
              className="aspect-[4/3] w-full"
              sizes="(max-width: 768px) 100vw, 58vw"
              amount={9}
            />
            <p className="label mt-4 text-ink-muted">Rush Creek Apartments, Maple Grove, Minnesota</p>
          </Reveal>

          <div className="md:col-span-5 md:-ml-[8%] md:pt-10">
            <Reveal>
              <div className="relative bg-paper p-0 md:border md:border-bronze/35 md:bg-paper md:p-12 md:shadow-[0_40px_90px_-60px_rgba(23,18,13,0.55)]">
                <p className="label text-bronze-deep">Delivering for investors</p>
                <p className="display mt-8 text-[clamp(3.5rem,8vw,6.5rem)] leading-none">
                  <Counter value={20} prefix="$" suffix="m" />
                </p>
                <p className="display mt-2 text-[1.6rem] italic text-bronze-deep">yield in 19 months</p>
                <p className="mt-8 text-[1rem] leading-[1.75] text-ink/75">
                  Our last project in Maple Grove, Minnesota went from green dirt to 98.4% occupancy,
                  yielding our investors $20,000,000 in 19 months.
                </p>
                <Link
                  href="/projects/rush-creek-apartments"
                  className="label link-underline mt-9 inline-block"
                >
                  Read the project
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-paper pb-24 md:pb-32">
        <div className="shell">
          <SectionHead
            index="03"
            label="Portfolio"
            title={
              <>
                Projects that <em className="italic">compound</em>
                <br className="hidden sm:block" /> value over time
              </>
            }
          />
          <div className="mt-16">
            <ProjectIndex items={projects} />
          </div>
          <Reveal>
            <Link href="/projects" className="label link-underline mt-12 inline-block">
              All projects
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why cities turn to Rush Creek */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="relative h-[42vh] min-h-[280px] w-full">
          <ParallaxImage
            src="/images/context/east-flats.jpg"
            alt="Multifamily development at dusk"
            className="h-full w-full"
            sizes="100vw"
            amount={10}
          />
          <div className="absolute inset-0 bg-ink/55" />
          <div className="shell absolute inset-x-0 bottom-0 pb-10">
            <h2 className="display max-w-[20ch] text-[clamp(2rem,5vw,4.2rem)]">
              <RevealLines
                lines={['Turning vision into', <em key="l" className="italic">lasting value</em>]}
              />
            </h2>
          </div>
        </div>

        <div className="shell py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="md:sticky md:top-32">
                <SectionHead index="04" label="Why cities turn to Rush Creek" tone="light" />
                <p className="mt-8 max-w-sm text-[0.98rem] leading-[1.75] text-paper/70">
                  We deliver high-impact development projects that transform urban landscapes and drive
                  lasting economic growth. The ability to navigate complex development challenges makes us
                  a trusted partner for municipalities, stakeholders and investors.
                </p>
                <Link href="/firm" className="label link-underline mt-9 inline-block text-paper/80">
                  The firm
                </Link>
              </div>
            </div>

            <ol className="md:col-span-8 md:pl-[6%]">
              {capabilities.map((item, i) => (
                <Reveal as="li" key={item.index} delay={i * 0.05} className="border-t border-white/15 py-9">
                  <div className="flex gap-6 md:gap-10">
                    <span className="numeral-outline shrink-0 text-[2.5rem] text-bronze-light">{item.index}</span>
                    <div>
                      <h3 className="display text-[1.7rem] leading-tight md:text-[2.1rem]">{item.title}</h3>
                      <p className="mt-4 max-w-2xl text-[0.98rem] leading-[1.75] text-paper/65">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-paper py-20">
        <div className="shell">
          <SectionHead index="05" label="Collaboration — our industry partners" />
          <div className="mt-12">
            <PartnerGrid />
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative bg-paper-deep pb-24 pt-10 md:pb-32">
        <div className="shell grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <h2 className="display text-[clamp(2.4rem,6.5vw,5.6rem)] leading-[1.02]">
              <RevealLines
                lines={[
                  <span key="l1">Legacy isn&rsquo;t found.</span>,
                  <em key="b" className="italic">It is built.</em>,
                ]}
              />
            </h2>
            <Reveal delay={0.12}>
              <p className="mt-9 max-w-xl text-[1.0625rem] leading-[1.75] text-ink/70">
                We partner with people who share our vision — those who value community, growth and lasting
                impact. This isn&rsquo;t just about investment; it&rsquo;s about building something
                meaningful together with people we trust and enjoy.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="md:col-span-5 md:text-right">
            <div className="flex flex-wrap gap-4 md:justify-end">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="label border border-bronze bg-bronze px-9 py-5 text-ink-deep transition-colors duration-500 hover:bg-transparent hover:text-bronze-deep"
              >
                Book a call
              </a>
              <Link
                href="/contact"
                className="label border border-ink/30 px-9 py-5 transition-colors duration-500 hover:border-bronze hover:text-bronze-deep"
              >
                Investor enquiries
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="shell mt-20">
          <Reveal>
            <div className="relative aspect-[21/9] w-full overflow-hidden">
              <Image
                src="/images/parkway/view-from-northeast.jpg"
                alt="Rendering of The Parkway Neighborhood, Dayton, Minnesota"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <p className="label mt-4 text-ink-muted">
              The Parkway Neighborhood, Dayton, Minnesota — rendering
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
