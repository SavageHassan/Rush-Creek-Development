import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/page-hero';
import ProjectIndex from '@/components/project-index';
import SectionHead from '@/components/section-head';
import { Reveal } from '@/components/reveal';
import { completedProjects, currentProjects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Projects | Rush Creek Development',
  description:
    'Current and completed developments by Rush Creek Development across Minnesota and the Midwest.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Portfolio"
        lines={[<span key="l1">Current and</span>, <em key="b" className="italic">completed work</em>]}
        intro="A boutique real estate development firm specialising in challenging and historic sites throughout the Midwest. Every project below has been designed, entitled, underwritten or delivered by Rush Creek."
        image="/images/parkway/view-from-northeast.jpg"
        imageAlt="Rendering of The Parkway Neighborhood, Dayton, Minnesota"
        height="short"
        meta={[
          { label: 'Capital raised', value: '$120m' },
          { label: 'Units built', value: '485' },
          { label: 'Average IRR', value: '21%' },
          { label: '2026 projects', value: '2' },
        ]}
      />

      <section className="bg-paper py-24 md:py-32">
        <div className="shell">
          <SectionHead
            index="01"
            label="Current developments"
            title={<>In development</>}
          />
          <div className="mt-14">
            <ProjectIndex items={currentProjects} />
          </div>
        </div>
      </section>

      <section className="bg-paper-deep py-24 md:py-32">
        <div className="shell">
          <SectionHead
            index="02"
            label="Completed developments"
            title={<>Delivered and <em className="italic">realised</em></>}
          />
          <div className="mt-14">
            <ProjectIndex items={completedProjects} />
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-paper md:py-24">
        <div className="shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <h2 className="display max-w-[18ch] text-[clamp(1.75rem,3.5vw,2.8rem)] leading-[1.06]">
              Interested in the current <em className="italic">offering?</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/projects/parkway-neighborhood"
              className="label inline-block border border-bronze bg-bronze px-9 py-5 text-ink-deep transition-colors duration-500 hover:bg-transparent hover:text-bronze-light"
            >
              The Parkway Neighborhood
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
