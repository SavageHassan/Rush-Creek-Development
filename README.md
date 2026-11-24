# Rush Creek Development — Website Revamp Concept

A complete redesign concept for [rushcreekdevelopment.com](https://www.rushcreekdevelopment.com/),
built as a client presentation piece. The company's identity, business model, positioning,
services, project portfolio and disclosures are preserved exactly; the presentation of all of it
is rebuilt from scratch.

> This is a concept build. It does not touch, replace or publish to the live website.

---

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3 |
| Motion | Framer Motion |
| Smooth scroll | Lenis |
| Fonts | Instrument Serif + Inter Tight, self-hosted (SIL OFL) |
| Images | `next/image`, assets sourced from the existing site |

No CMS, no analytics, no SEO tooling — out of scope for this deliverable.

## Running it

```bash
npm install
npm run dev     # http://localhost:4310
```

```bash
npm run build && npm start
```

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Homepage — hero, firm introduction, track record, featured result, portfolio, capabilities, partners, closing |
| `/projects` | Portfolio index, split into current and completed developments |
| `/projects/parkway-neighborhood` | Current offering: overview, specifications, Dayton market analysis, offering materials |
| `/projects/rush-creek-apartments` | Completed: overview, specifications, close-to-exit timeline, gallery |
| `/projects/renew-wichita` | Completed: overview and capital structure |
| `/firm` | Mission, data-driven approach, team, services, press, partners |
| `/contact` | Investor questionnaire with validation |
| `/legal/terms` | Terms & Conditions, including the fraud-prevention notice |
| `/legal/privacy` | Privacy Policy |

## Design direction

**Warm architectural editorial.** The existing site is achromatic — black, white and grey,
set in Arial with Times accents. That restraint is kept, but warmed and given structure:

- **Ground**: `#17120D`, a charcoal with a brown cast, rather than pure black.
- **Paper**: `#F1EBE1` limestone, replacing flat white.
- **Accent**: `#B07C40` weathered bronze — used for eyebrows, rules, outlined section
  numerals, primary buttons and active states. It is the one chromatic note in the system.
- **Type**: Instrument Serif for display (a high-contrast serif that reads as an evolution of the
  site's existing Times accents) against Inter Tight for body and tracked-out uppercase labels.
- **Layout**: a 12-column editorial grid used asymmetrically — sticky left rails against long
  right-hand columns, offset image/text pairs, full-bleed dark interludes between paper sections.
  No repeated card grid.

## Brand preservation

- Logo and brand mark are the original assets from the existing site.
- Every statistic, project figure, service description, disclaimer and legal page is carried over
  from the live site. Copy was lightly re-edited for rhythm and readability; meaning is unchanged.
- Target returns are labelled as targets; realised returns as reported results.
- Securities, Regulation A and forward-looking-statement disclosures appear on every page footer.
- Imagery is Rush Creek's own project photography, renderings and plans. No stock substitutes.

## Interactions

- Lenis smooth scrolling, disabled under `prefers-reduced-motion`.
- Hero: cross-fading project stage with slow Ken Burns, masked line-by-line headline reveal,
  scroll-linked parallax, and a clickable project rail.
- Section reveals driven by `useInView` (opacity/translate; masked line reveals for headings).
- Scroll-linked parallax on feature imagery.
- Portfolio index: a floating preview pane that swaps on row hover, with inline images on
  touch sizes.
- Animated statistics counters.
- Kinetic brand band and a looping partner-logo marquee.
- Header that shrinks and grounds itself on scroll; full-screen clip-path mobile menu.

## Contact form configuration

`app/api/contact/route.ts` validates submissions server-side and returns success. It does not yet
deliver anywhere — the destination is a client decision. To make it live, set:

```bash
RUSH_CREEK_FORM_WEBHOOK=https://…   # HubSpot, Zapier, Make, Power Automate, etc.
```

Without it, submissions are logged server-side so the flow can be demonstrated.

## Open items for client confirmation

1. **Phasing for Parkway Neighborhood** — the existing homepage says six build phases; the
   offering page says four. The site uses six; please confirm.
2. **Hero / night rendering attribution** — "Night Rendering 1" appears in the Renew | Wichita block
   on the current homepage but depicts contemporary multifamily buildings. It is used here without
   a project caption.
3. **Partner and press logos** — carried over as images; the organisations are not named in copy.
4. **Governing law** — the Terms page still reads "the State of [Insert State]" on the live site.
5. **Office address and phone** — not published on the existing site, so not invented here.
6. **Offering documents** — listed by name and shown as available on request rather than linked.

## Repository layout

```
app/              routes, layout, global styles, contact API route
components/       header, footer, hero, reveals, project index, form, templates
lib/              site copy, project data, firm data, fonts
public/images/    brand, project, team, partner and press assets
public/fonts/     self-hosted woff2
```
