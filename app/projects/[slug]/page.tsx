import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/page-hero';
import SectionHead from '@/components/section-head';
import ParallaxImage from '@/components/parallax-image';
import { Reveal } from '@/components/reveal';
import { getProject, projects } from '@/lib/projects';
import { site } from '@/lib/site';
import ParkwayMarket from '@/components/parkway-market';
import ProjectVideo from '@/components/project-video';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Project | Rush Creek Development' };
  return {
    title: `${project.name} | Rush Creek Development`,
    description: project.lede,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <>
      <PageHero
        label={`${project.status} — ${project.location}`}
        lines={project.name.split(' | ').length > 1
          ? project.name.split(' | ')
          : [project.name]}
        intro={project.lede}
        image={project.cover.src}
        imageAlt={project.cover.alt}
        meta={[
          { label: 'Location', value: project.location },
          { label: 'Status', value: project.statusNote },
          { label: 'Timeline', value: project.year },
          { label: 'Reference', value: project.index },
        ]}
      />

      {/* Figures */}
      <section className="bg-paper py-20 md:py-24">
        <div className="shell">
          <dl className="grid gap-x-10 gap-y-12 sm:grid-cols-3">
            {project.figures.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.08}>
                <div className="border-t border-bronze/50 pt-6">
                  <dd className="display text-[clamp(2.3rem,4.6vw,3.8rem)] leading-none">{f.value}</dd>
                  <dt className="label mt-5 text-bronze-deep">{f.label}</dt>
                  {f.note && <p className="mt-2 text-[0.78rem] text-ink-muted/80">{f.note}</p>}
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-paper pb-24 md:pb-32">
        <div className="shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionHead index="01" label="Development overview" />
          </div>
          <div className="md:col-span-8 md:pl-[6%]">
            <Reveal className="prose-editorial max-w-2xl text-[1.0625rem] leading-[1.8] text-ink/75">
              <>
                {project.summary.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </>
            </Reveal>
            {project.externalUrl && (
              <Reveal delay={0.1}>
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="label link-underline mt-10 inline-block"
                >
                  {project.externalLabel}
                </a>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="bg-ink py-20 text-paper md:py-28">
        <div className="shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionHead index="02" label="Project details" tone="light" />
          </div>
          <dl className="md:col-span-8 md:pl-[6%]">
            {project.specs.map((s, i) => (
              <Reveal key={s.label} delay={Math.min(i * 0.04, 0.3)}>
                <div className="grid grid-cols-1 gap-2 border-t border-white/14 py-5 sm:grid-cols-12 sm:gap-6">
                  <dt className="label pt-1 text-bronze-light/85 sm:col-span-4">{s.label}</dt>
                  <dd className="text-[1rem] leading-relaxed text-paper/90 sm:col-span-8">
                    {s.value}
                    {s.note && (
                      <span className="mt-1 block text-[0.78rem] text-paper/45">{s.note}</span>
                    )}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {project.video && (
        <section className="bg-paper pb-24 md:pb-32">
          <div className="shell">
            <SectionHead label="Film" className="mb-10" />
            <ProjectVideo {...project.video} />
          </div>
        </section>
      )}

      {project.slug === 'parkway-neighborhood' && <ParkwayMarket />}

      {/* Timeline for completed projects */}
      {project.timeline && (
        <section className="bg-paper-deep py-24 md:py-32">
          <div className="shell grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionHead index="03" label="History" title={<>From close <em className="italic">to exit</em></>} />
            </div>
            <ol className="md:col-span-8 md:pl-[6%]">
              {project.timeline.map((t, i) => (
                <Reveal as="li" key={t.date} delay={i * 0.06}>
                  <div className="grid grid-cols-1 gap-2 border-t border-ink/14 py-7 sm:grid-cols-12 sm:gap-6">
                    <span className="label pt-1 text-bronze-deep sm:col-span-4">{t.date}</span>
                    <span className="display text-[1.2rem] leading-snug sm:col-span-8 md:text-[1.3rem]">
                      {t.event}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="bg-paper py-24 md:py-32">
          <div className="shell">
            <SectionHead index={project.timeline ? '04' : '03'} label="Project imagery" />
            <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-12">
              {project.gallery.map((g, i) => {
                const wide = i % 3 === 0;
                return (
                  <Reveal
                    key={g.src}
                    delay={0.05}
                    className={wide ? 'md:col-span-12' : 'md:col-span-6'}
                  >
                    <ParallaxImage
                      src={g.src}
                      alt={g.alt}
                      className={wide ? 'aspect-[16/8] w-full' : 'aspect-[4/3] w-full'}
                      sizes={wide ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
                      amount={7}
                    />
                    {g.caption && <p className="label mt-4 text-ink-muted">{g.caption}</p>}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Documents / offering */}
      {project.documents && (
        <section className="bg-ink py-24 text-paper md:py-28">
          <div className="shell grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionHead index="05" label="The limited partnership offering" tone="light" />
              <h2 className="display mt-8 text-[clamp(1.7rem,3.2vw,2.7rem)] leading-[1.06]">
                First investor round <em className="italic">launches 2/26</em>
              </h2>
              <p className="mt-8 max-w-md text-[1rem] leading-[1.75] text-paper/70">
                To receive the Private Placement Memorandum, Subscription Agreement and Operating
                Agreement, complete the investor questionnaire and a member of the team will be in touch.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="label border border-bronze bg-bronze px-8 py-4 text-ink-deep transition-colors duration-500 hover:bg-transparent hover:text-bronze-light"
                >
                  Investor questionnaire
                </Link>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="label link-underline py-4 text-paper/80"
                >
                  Book a call
                </a>
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <p className="label text-bronze-light">Offering materials</p>
              <ul className="mt-8">
                {project.documents.map((d, i) => (
                  <Reveal as="li" key={d} delay={i * 0.05}>
                    <div className="flex items-baseline justify-between gap-6 border-t border-white/14 py-5">
                      <span className="text-[1rem] text-paper/85">{d}</span>
                      <span className="label shrink-0 text-bronze-light/70">On request</span>
                    </div>
                  </Reveal>
                ))}
              </ul>
              <p className="mt-8 text-[0.78rem] leading-relaxed text-paper/40">
                Offering documents are released to qualified investors following the investor
                questionnaire. Any offering will be made solely through the delivery of all requisite
                offering documents.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Next projects */}
      <section className="bg-paper py-20 md:py-24">
        <div className="shell">
          <SectionHead label="More projects" />
          <ul className="mt-10 grid gap-10 md:grid-cols-2">
            {others.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="group block">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={p.cover.src}
                      alt={p.cover.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-6">
                    <h3 className="display text-[1.8rem] leading-tight md:text-[1.85rem]">{p.name}</h3>
                    <span className="label shrink-0 text-bronze-deep">{p.year}</span>
                  </div>
                  <p className="mt-2 text-[0.95rem] text-ink-muted">{p.location}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
