import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/page-hero';
import SectionHead from '@/components/section-head';
import ParallaxImage from '@/components/parallax-image';
import PartnerGrid from '@/components/partner-grid';
import { Reveal, RevealLines } from '@/components/reveal';
import { press, services, team } from '@/lib/firm';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'The Firm | Rush Creek Development',
  description:
    'Rush Creek Development transforms outdated and underutilised spaces into beautiful, thriving developments.',
};

export default function FirmPage() {
  return (
    <>
      <PageHero
        label="The firm — our mission"
        lines={[<span key="l1">Build a legacy of</span>, <em key="b" className="italic">beauty and resilience</em>]}
        intro="We solve the toughest real estate challenges by transforming outdated and underutilised spaces into beautiful, thriving developments. Every property has the potential to be reimagined into something exceptional."
        image="/images/context/east-flats.jpg"
        imageAlt="Multifamily development at dusk"
        height="short"
      />

      {/* Mission */}
      <section className="bg-paper py-24 md:py-32">
        <div className="shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionHead index="01" label="Our mission" />
          </div>
          <div className="md:col-span-8 md:pl-[6%]">
            <h2 className="display text-[clamp(1.65rem,3.1vw,2.6rem)] leading-[1.08]">
              <RevealLines
                lines={[
                  'We don’t just build.',
                  <em key="b" className="italic">We elevate, beautify and endure.</em>,
                ]}
              />
            </h2>
            <Reveal delay={0.12} className="prose-editorial mt-10 max-w-2xl text-[1.0625rem] leading-[1.8] text-ink/75">
              <>
                <p>
                  Our approach prioritises creativity, precision and an unwavering commitment to
                  delivering results that surpass expectations. By focusing on high-level funding
                  strategies and development efficiency, we consistently provide our clients with
                  exceptional value that exceeds the cost of our services.
                </p>
                <p>
                  That mission drives everything we do, from adaptive reuse projects to new construction
                  that reinvigorates communities and unlocks hidden potential. We create enduring value
                  for our partners and the communities we serve.
                </p>
              </>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Data-driven */}
      <section className="bg-ink py-24 text-paper md:py-32">
        <div className="shell grid items-center gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <ParallaxImage
              src="/images/parkway/aerial-overlay.jpg"
              alt="Development plan overlaid on an aerial photograph of the site"
              className="aspect-[4/3] w-full"
              sizes="(max-width: 768px) 100vw, 50vw"
              amount={9}
            />
          </Reveal>
          <div className="md:col-span-6 md:pl-[6%]">
            <SectionHead index="02" label="Our approach" tone="light" />
            <h2 className="display mt-8 text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.08]">
              Data-driven insights for <em className="italic">strategic investments</em>
            </h2>
            <Reveal delay={0.1} className="prose-editorial mt-8 text-[1rem] leading-[1.8] text-paper/70">
              <>
                <p>
                  We combine city development plans with in-depth analysis of commercial real estate
                  trends and demographic need to identify high-yield opportunities. By overlaying
                  municipal growth strategies with market demand, we uncover investments that align with
                  both community objectives and investor goals.
                </p>
                <p>
                  Leveraging tools and insights from industry-leading development firms, we analyse market
                  data, zoning overlays and long-term urban planning initiatives. That attention to detail
                  gives our investors an edge, enabling informed decision-making in dynamic markets.
                </p>
              </>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-paper py-24 md:py-32">
        <div className="shell">
          <SectionHead
            index="03"
            label="Who we are"
            title={
              <>
                Meet the <em className="italic">team</em>
              </>
            }
          />
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-[1.0625rem] leading-[1.8] text-ink/75">
              With decades of combined experience in real estate development, acquisitions and finance,
              our founders have a proven track record of delivering successful projects. Rush Creek
              Developments represents the culmination of their expertise and strategic vision.
            </p>
          </Reveal>

          <ul className="mt-16 grid gap-12 md:grid-cols-3">
            {team.map((member, i) => (
              <Reveal as="li" key={member.name} delay={i * 0.1}>
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-paper-deep">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top grayscale transition-[filter,transform] duration-[1200ms] ease-editorial hover:scale-[1.03] hover:grayscale-0"
                  />
                </div>
                <div className="mt-6 border-t border-ink/14 pt-5">
                  <h3 className="display text-[1.3rem] leading-tight">{member.name}</h3>
                  <p className="label mt-3 text-bronze-deep">{member.role}</p>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/70">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="bg-paper-deep py-24 md:py-32">
        <div className="shell">
          <SectionHead
            index="04"
            label="Our services"
            title={
              <>
                What we <em className="italic">do</em>
              </>
            }
          />
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.index} delay={i * 0.09}>
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <span className="numeral-outline mt-6 block text-[2rem] text-bronze">{s.index}</span>
                <h3 className="display mt-3 text-[1.2rem] leading-tight md:text-[1.2rem]">{s.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-[1.75] text-ink/70">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="bg-paper py-24 md:py-28">
        <div className="shell">
          <SectionHead index="05" label="Press — Rush Creek in the news" />
          <Reveal delay={0.08}>
            <p className="mt-8 max-w-2xl text-[1.0625rem] leading-[1.8] text-ink/75">
              Recent updates and media highlights featuring Rush Creek Developments as we continue
              contributing to real estate growth and community development.
            </p>
          </Reveal>
          <ul className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-3">
            {press.map((item, i) => (
              <Reveal as="li" key={item.name} delay={i * 0.08}>
                <div className="flex aspect-[16/9] w-full items-center justify-center border border-ink/12 bg-paper-deep/60 p-8 transition-colors duration-500 hover:border-bronze/50">
                  <div className="relative h-10 w-full">
                    <Image
                      src={item.logo}
                      alt={`${item.name} logo`}
                      fill
                      sizes="(max-width: 768px) 45vw, 30vw"
                      className="object-contain opacity-85"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          <div className="mt-20">
            <SectionHead label="Collaboration — our industry partners" />
            <div className="mt-10">
              <PartnerGrid />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 text-paper md:py-24">
        <div className="shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="display max-w-[18ch] text-[clamp(1.75rem,3.5vw,2.8rem)] leading-[1.06]">
            Let&rsquo;s build something <em className="italic">that lasts</em>
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="label border border-bronze bg-bronze px-9 py-5 text-ink-deep transition-colors duration-500 hover:bg-transparent hover:text-bronze-light"
            >
              Book a call
            </a>
            <Link href="/contact" className="label border border-white/25 px-9 py-5 transition-colors duration-500 hover:border-bronze hover:text-bronze-light">
              Contact the team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
