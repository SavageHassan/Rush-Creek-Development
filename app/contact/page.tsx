import type { Metadata } from 'next';
import Link from 'next/link';
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
      <section className="relative bg-ink pb-20 pt-36 text-paper md:pb-24 md:pt-44">
        <div className="shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="label text-bronze-light">Contact</p>
            <h1 className="display mt-7 text-[clamp(2.4rem,6.2vw,5rem)] leading-[0.95]">
              <RevealLines lines={[<span key="l1">Get in</span>, <em key="b" className="italic">touch</em>]} />
            </h1>
            <Reveal delay={0.25}>
              <p className="mt-8 max-w-xl text-[1.0625rem] leading-[1.75] text-paper/75">
                Reach out, share a question or provide feedback. Complete the form and we&rsquo;ll respond
                as soon as possible.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.2}>
              <div className="border-t border-bronze/45 pt-7">
                <p className="label text-bronze-light">Prefer to talk?</p>
                <p className="display mt-5 text-[1.2rem] leading-snug">
                  Book an introductory meeting directly with the team.
                </p>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="label mt-8 inline-block border border-bronze bg-bronze px-8 py-4 text-ink-deep transition-colors duration-500 hover:bg-transparent hover:text-bronze-light"
                >
                  Book a call
                </a>
              </div>
              <div className="mt-10 border-t border-bronze/45 pt-7">
                <p className="label text-bronze-light">Follow</p>
                <a
                  href={site.linkedinUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline mt-5 inline-block text-[1rem] text-paper/85"
                >
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
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
