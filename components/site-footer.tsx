import Link from 'next/link';
import Image from 'next/image';
import { disclosures, site } from '@/lib/site';
import { projects } from '@/lib/projects';

const company = [
  { label: 'Home', href: '/' },
  { label: 'The Firm', href: '/firm' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const legal = [
  { label: 'Terms & Conditions', href: '/legal/terms' },
  { label: 'Privacy Policy', href: '/legal/privacy' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="shell">
        {/* Primary row */}
        <div className="grid gap-10 py-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Image
              src="/images/brand/wordmark.png"
              alt="Rush Creek Development"
              width={576}
              height={125}
              sizes="220px"
              className="h-6 w-auto invert"
            />
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-paper/65">
              Building institutional quality product for the communities of tomorrow.
            </p>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="label mt-7 inline-block border border-bronze bg-bronze px-7 py-3.5 text-ink-deep transition-colors duration-500 hover:bg-transparent hover:text-bronze-light"
            >
              Book a call
            </a>
          </div>

          <nav className="md:col-span-2 md:col-start-7">
            <p className="label text-bronze-light">Company</p>
            <ul className="mt-5 space-y-2.5">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline text-[0.9rem] text-paper/75 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-2">
            <p className="label text-bronze-light">Projects</p>
            <ul className="mt-5 space-y-2.5">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="link-underline text-[0.9rem] text-paper/75 hover:text-white"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-2">
            <p className="label text-bronze-light">Legal</p>
            <ul className="mt-5 space-y-2.5">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline text-[0.9rem] text-paper/75 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={site.linkedinUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline text-[0.9rem] text-paper/75 hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Compact legal bar — full disclosures stay on the page, one click away */}
        <div className="border-t border-white/12 py-5">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <span className="label text-bronze-light/80">
                Important disclosures &mdash; securities, Regulation A &amp; forward-looking statements
              </span>
              <span className="label shrink-0 text-paper/45 transition-colors group-hover:text-bronze-light">
                <span className="group-open:hidden">Read</span>
                <span className="hidden group-open:inline">Close</span>
              </span>
            </summary>
            <div className="mt-6 grid gap-4 text-[0.7rem] leading-[1.75] text-paper/45 md:grid-cols-2 md:gap-x-10">
              <p>{disclosures.securities}</p>
              <p>{disclosures.regA}</p>
              <p>{disclosures.forwardLooking}</p>
              <p>{disclosures.forwardLooking2}</p>
            </div>
          </details>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/12 py-5 text-[0.7rem] text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {site.copyrightYear} {site.legalName}. All rights reserved.
          </p>
          <p>Minnesota &amp; the Midwest</p>
        </div>
      </div>
    </footer>
  );
}
