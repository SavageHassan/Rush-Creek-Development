export const site = {
  name: 'Rush Creek Development',
  legalName: 'Rush Creek Developments',
  tagline: 'Building Legacy Developments',
  positioning:
    'Creating lasting value for investors by building institutional quality product for the communities of tomorrow.',
  bookingUrl:
    'https://outlook.office.com/book/IntroductoryMeeting@rushcreekdevelopment.com/?ismsaljsauthenabled',
  linkedinUrl: 'https://www.linkedin.com/company/105588369/admin/dashboard/',
  liveSite: 'https://www.rushcreekdevelopment.com/',
  copyrightYear: '2024',
};

export const nav = [
  { label: 'The Firm', href: '/firm' },
  { label: 'Projects', href: '/projects' },
  { label: 'Current Offering', href: '/projects/parkway-neighborhood' },
  { label: 'Contact', href: '/contact' },
];

export type Stat = { value: number; prefix?: string; suffix?: string; label: string };

/** Headline figures as published on the current rushcreekdevelopment.com homepage. */
export const trackRecord: Stat[] = [
  { value: 21, suffix: '%', label: 'Average IRR' },
  { value: 485, suffix: '', label: "Units Built" },
  { value: 2, suffix: '', label: '2026 Projects' },
  { value: 120, prefix: '$', suffix: 'm', label: 'Capital Raised' },
];

export const disclosures = {
  securities:
    'The information provided on this website does not constitute an offer to sell or a solicitation of an offer to buy any securities mentioned herein. Any offering will be made solely through the delivery of all requisite offering documents. Potential investors should read these documents (including all exhibits) in their entirety to fully understand the implications and risks associated with any securities offering. Investments should only be made after a thorough review of these offering documents. The information on this website is subject to the representations provided in the offering documents.',
  regA:
    'Our Offering Circular and other offering documents are available at www.sec.gov. Investors are advised that they may invest no more than 10% of the greater of their annual income (including the income of their spouse) or their net worth, excluding the value of their primary residence and any loans secured by it (up to the value of the residence). Different investment rules apply to Accredited Investors and non-natural persons. Before making any investment representation, we encourage you to review Rule 251(d)(2)(i)(c) of Regulation A. For general information on investing, visit www.investor.gov.',
  forwardLooking:
    'This website and associated offering materials may contain forward-looking statements and information regarding, among other things, Rush Creek Developments, its business plans, strategies, and the real estate industry. These forward-looking statements are based on the beliefs, assumptions, and information available to Rush Creek Developments’ management at the time they are made. Terms such as "estimate," "project," "believe," "anticipate," "intend," "expect," and similar expressions are used to identify these forward-looking statements.',
  forwardLooking2:
    'These statements reflect management’s current views on future events and are subject to risks and uncertainties that could cause actual results to differ materially from those expressed in the forward-looking statements. Investors are cautioned not to place undue reliance on forward-looking statements, which are only valid as of the date they are made. Rush Creek Developments assumes no obligation to revise or update any forward-looking statements to reflect future events, circumstances, or the occurrence of unanticipated events.',
};

export const accreditedInvestorDefinition =
  'Accredited Investor: Individual annual income must have exceeded $200,000 in each of the last two years, or your joint income with your spouse must have exceeded $300,000 during the same period, with a reasonable expectation of maintaining this income level in the future; or individual net worth, or joint net worth with your spouse, must be at least $1 million, excluding the value of your primary residence.';
