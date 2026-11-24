import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/contact-form';
import SectionHead from '@/components/section-head';
import ParallaxImage from '@/components/parallax-image';
import { Reveal, RevealLines } from '@/components/reveal';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact | Rush Creek Development',
  description:
    'Reach out to Rush Creek Development with a question, a partnership enquiry or an interest in the current offering.',
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-deep pb-16 pt-36 text-paper md:pb-20 md:pt-44">
        {/* Quiet plate behind the hero so the page opens on something, not a void */}
        <div className="absolute inset-0">
          <Image
            src="/images/parkway/night-rendering.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover grayscale contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-ink-deep/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/80 to-ink-deep/35" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-deep to-transparent" />
          <div className="grain absolute inset-0" />
        </div>

        <div className="shell relative">
          <p className="label text-paper/55">Contact</p>
          <h1 className="display mt-7 text-[clamp(2.4rem,7vw,6rem)] leading-[0.94]">
            <RevealLines lines={[<span key="l1">Get in</span>, <span key="l2">touch</span>]} />
          </h1>

          <Reveal delay={0.25}>
            <p className="mt-8 max-w-xl text-[1.05rem] leading-[1.75] text-paper/75">
              Reach out, share a question or provide feedback. Complete the questionnaire below and
              we&rsquo;ll respond as soon as possible &mdash; or book an introductory meeting
              directly with the team.
            </p>
          </Reveal>

          {/* Actions sit under the headline, where the eye already is */}
          <Reveal delay={0.33}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="label border border-paper bg-paper px-8 py-4 text-ink transition-colors duration-500 hover:bg-transparent hover:text-paper"
              >
                Book a call
              </a>
              <a href="#enquiry" className="label link-underline py-4 text-paper/80 hover:text-white">
                Investor questionnaire
              </a>
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="label link-underline py-4 text-paper/60 hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>

          {/* Who this page is for — drawn from the firm's own audiences */}
          <Reveal delay={0.4}>
            <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/20 pt-7 sm:grid-cols-4">
              {[
                { k: 'Investors', v: 'Private and institutional partners' },
                { k: 'Development partners', v: 'Design, construction and capital' },
                { k: 'Municipalities', v: 'Master planning and land use' },
                { k: 'Landowners', v: 'Site assembly and feasibility' },
              ].map((row) => (
                <div key={row.k}>
                  <dt className="label text-paper/85">{row.k}</dt>
                  <dd className="mt-2 text-[0.88rem] leading-relaxed text-paper/50">{row.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section id="enquiry" className="bg-paper py-20 md:py-28">
        <div className="shell grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-32">
              <SectionHead index="01" label="Investor questionnaire" />
              <p className="mt-8 max-w-sm text-[0.98rem] leading-[1.75] text-ink/70">
                The questionnaire below helps us understand how best to respond. Qualified investors
                receive the Private Placement Memorandum, Subscription Agreement and Operating Agreement
                for the current offering.
              </p>
              <Link href="/projects/parkway-neighborhood" className="label link-underline mt-8 inline-block">
                About the current offering
              </Link>

              <div className="mt-12 hidden md:block">
                <ParallaxImage
                  src="/images/parkway/massing-model.jpg"
                  alt="Massing study of The Parkway Neighborhood"
                  className="aspect-[4/3] w-full"
                  sizes="30vw"
                  amount={6}
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
