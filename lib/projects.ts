export type Spec = { label: string; value: string; note?: string };
export type Figure = { value: string; label: string; note?: string };
export type Gallery = { src: string; alt: string; caption?: string };

export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  location: string;
  year: string;
  status: 'Current' | 'Completed';
  statusNote: string;
  index: string;
  lede: string;
  summary: string[];
  figures: Figure[];
  specs: Spec[];
  cover: Gallery;
  gallery: Gallery[];
  externalLabel?: string;
  externalUrl?: string;
  documents?: string[];
  video?: { src: string; poster: string; caption: string };
  timeline?: { date: string; event: string }[];
};

export const projects: Project[] = [
  {
    slug: 'parkway-neighborhood',
    name: 'The Parkway Neighborhood',
    subtitle: 'A master planned market-rate community on the I-94 corridor',
    location: 'Dayton / Maple Grove, Minnesota',
    year: 'Spring 2026',
    status: 'Current',
    statusNote: 'Open Round',
    index: '01',
    lede:
      'Scenic views, prime access and a market with momentum. Parkway Neighborhood is a master planned market-rate community at the southwest corner of I-94 and the recently opened Dayton Parkway exit ramp.',
    summary: [
      'Parkway Neighborhood, Dayton / Maple Grove, MN 55311, sits at the southwest corner of I-94 and the recently opened Dayton Parkway exit ramp, where average daily traffic exceeds 94,000 vehicles. The master planned market-rate community features 1, 2 and 3-bedroom, 1-bedroom + den, and studio floor plans.',
      'Building types range from 4-story apartment complexes with over 100 units to 2-story and 3-story 30-plexes and individual townhomes. The site is a few minutes’ drive from “Medical Alley” — a cluster of life science companies occupying more than 4.2 million square feet — and from more than 5.2 million square feet of commercial retail.',
      'Final plat and building permits will be obtained in time for site construction to begin in Spring 2026.',
    ],
    figures: [
      { value: '600+', label: 'Units' },
      { value: '21%', label: 'Target LP IRR', note: 'Target, not a realised return' },
      { value: '94,000+', label: 'Avg. daily traffic', note: 'Dayton Parkway interchange' },
    ],
    specs: [
      { label: 'Location', value: 'Dayton / Maple Grove, MN 55311' },
      { label: 'Programme', value: '600+ residential units' },
      { label: 'Typologies', value: 'Studio, 1BR, 1BR + den, 2BR, 3BR' },
      { label: 'Building types', value: '4-storey apartments (100+ units), 2 & 3-storey 30-plexes, townhomes' },
      { label: 'Phasing', value: 'Six build phases' },
      { label: 'Target LP IRR', value: '21%', note: 'Target return' },
      { label: 'Site construction', value: 'Spring 2026, subject to final plat and permits' },
      { label: 'Structure', value: 'Limited Partnership offering' },
    ],
    cover: {
      src: '/images/parkway/view-from-northeast.jpg',
      alt: 'Rendering of The Parkway Neighborhood seen from the north-east',
      caption: 'The Parkway Neighborhood — view from the north-east. Rendering.',
    },
    gallery: [
      {
        src: '/images/parkway/night-rendering.jpg',
        alt: 'Night rendering of multifamily buildings beside water',
        caption: 'Night rendering.',
      },
      {
        src: '/images/parkway/master-plan.jpg',
        alt: 'Colour master plan of the Parkway Neighborhood site',
        caption: 'Master plan.',
      },
      {
        src: '/images/parkway/massing-model.jpg',
        alt: 'Three-dimensional massing model of the development',
        caption: 'Massing study.',
      },
      {
        src: '/images/parkway/site-plan.jpg',
        alt: 'Technical site plan drawing',
        caption: 'Site plan.',
      },
      {
        src: '/images/parkway/aerial-overlay.jpg',
        alt: 'Aerial photograph of the site with the master plan overlaid',
        caption: 'Plan overlaid on the site.',
      },
      {
        src: '/images/parkway/i94-interchange.jpg',
        alt: 'Aerial photograph of the Dayton Parkway double diamond interchange on I-94',
        caption: 'The $24m Dayton Parkway interchange.',
      },
    ],
    video: {
      src: '/video/parkway-master-plan.mp4',
      poster: '/images/parkway/master-plan.jpg',
      caption: 'Master plan walkthrough \u2014 The Parkway Neighborhood.',
    },
    documents: [
      'Parkway Apartments Brochure (PDF)',
      'Parkway Neighborhood Site Plan',
      'Parkway Neighborhood Proforma',
      'Maxfield Research Market Update',
      'Parkway Apartments Architectural Set',
    ],
  },
  {
    slug: 'rush-creek-apartments',
    name: 'Rush Creek Apartments',
    subtitle: 'Green dirt to 98.4% occupancy, and a sale inside twenty-four months',
    location: 'Maple Grove, Minnesota',
    year: '2022',
    status: 'Completed',
    statusNote: 'Sold July 2022',
    index: '02',
    lede:
      'A market-rate apartment community on an 8.22-acre site in Maple Grove — entitled, designed, financed, delivered and sold by Rush Creek.',
    summary: [
      'Rush Creek Apartments (“RCA”) is a market-rate apartment community on an 8.22-acre site in Maple Grove, MN. RCA comprises five residential buildings with 246 homes, 436 parking spaces — 251 of them heated, below-grade — and one clubhouse.',
      'Michael Elzufon entitled the site, designed the project, and arranged $53.50m in financing through a $35.8m construction loan and $17.7m of owner equity. RCA funding closed on October 9, 2020. Construction was completed and delivered fifteen months later in December 2021.',
      'RCA was sold in July 2022 for $73,750,000. As of August 18, 2023, RCA occupancy was 98.4%.',
    ],
    figures: [
      { value: '246', label: 'Homes' },
      { value: '61%', label: 'IRR', note: 'Reported, 24-month hold' },
      { value: '$73.75m', label: 'Sale price', note: 'July 2022' },
    ],
    specs: [
      { label: 'Site', value: '8.22 acres' },
      { label: 'Buildings', value: 'Five residential buildings, one clubhouse' },
      { label: 'Homes', value: '246' },
      { label: 'Parking', value: '436 spaces, 251 heated below-grade' },
      { label: 'Capital structure', value: '$53.50m — $35.8m construction loan, $17.7m owner equity' },
      { label: 'Hold', value: '24 months' },
      { label: 'Reported IRR', value: '61% over the 24-month hold' },
      { label: 'Occupancy', value: '98.4% as of August 18, 2023' },
    ],
    cover: {
      src: '/images/rush-creek-apartments/amenity.webp',
      alt: 'Amenity terrace at Rush Creek Apartments, Maple Grove, Minnesota',
      caption: 'Rush Creek Apartments, Maple Grove, Minnesota.',
    },
    gallery: [
      {
        src: '/images/rush-creek-apartments/aerial.jpg',
        alt: 'Aerial photograph of Rush Creek Apartments in Maple Grove, Minnesota',
        caption: 'The completed community, Maple Grove.',
      },
      {
        src: '/images/context/neighborhood-aerial.jpg',
        alt: 'Aerial photograph of multifamily buildings and townhomes in the Maple Grove area',
        caption: 'The surrounding Maple Grove rental market.',
      },
    ],
    video: {
      src: '/video/rush-creek-apartments.mp4',
      poster: '/images/rush-creek-apartments/aerial.jpg',
      caption: 'Rush Creek Apartments, Maple Grove \u2014 the completed community.',
    },
    timeline: [
      { date: 'October 9, 2020', event: 'Funding closed — $53.50m capitalisation' },
      { date: 'December 2021', event: 'Construction complete and delivered, fifteen months later' },
      { date: 'July 2022', event: 'Sold for $73,750,000' },
      { date: 'August 18, 2023', event: 'Occupancy reported at 98.4%' },
    ],
    externalLabel: 'Visit rushcreekapartments.com',
    externalUrl: 'https://www.rushcreekapartments.com/',
  },
  {
    slug: 'renew-wichita',
    name: 'Renew | Wichita',
    subtitle: 'An urban market-rate project assembled from a layered capital stack',
    location: 'Wichita, Kansas',
    year: '2017',
    status: 'Completed',
    statusNote: 'Delivered 2017',
    index: '03',
    lede:
      'A 239-unit urban market-rate project, designed, entitled and underwritten by Rush Creek, and capitalised through a structure built from federal, state and municipal programmes.',
    summary: [
      'Renew | Wichita is a 239-unit urban market-rate project. Rush Creek Developments designed, entitled and underwrote the project.',
      'Mr. Elzufon secured $66m in capital, including a $36m construction-to-perm 221(d)(4) HUD loan, $12m of Tax Increment Financing, and $18m of Federal and State Historic tax credits.',
    ],
    figures: [
      { value: '239', label: 'Units' },
      { value: '$66m', label: 'Capital secured' },
      { value: '$18m', label: 'Historic tax credits', note: 'Federal and state' },
    ],
    specs: [
      { label: 'Units', value: '239' },
      { label: 'Type', value: 'Urban market-rate' },
      { label: 'Rush Creek scope', value: 'Design, entitlement, underwriting' },
      { label: 'Total capital', value: '$66m' },
      { label: 'Senior debt', value: '$36m construction-to-perm 221(d)(4) HUD loan' },
      { label: 'Public finance', value: '$12m Tax Increment Financing' },
      { label: 'Tax credits', value: '$18m Federal and State Historic tax credits' },
    ],
    cover: {
      src: '/images/renew-wichita/downtown.jpg',
      alt: 'Aerial photograph of downtown Wichita, Kansas',
      caption: 'Downtown Wichita, Kansas.',
    },
    gallery: [],
    externalLabel: 'Visit renewwichita.com',
    externalUrl: 'https://www.renewwichita.com/',
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const currentProjects = projects.filter((p) => p.status === 'Current');
export const completedProjects = projects.filter((p) => p.status === 'Completed');
