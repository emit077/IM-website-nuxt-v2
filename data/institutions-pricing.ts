import {
  INSTITUTIONS_PHONE_TEL,
  INSTITUTIONS_WHATSAPP,
  institutionPartnerMailto,
  institutionProposalMailto,
  institutionRequirementMailto,
} from './institutions'

export const INSTITUTIONS_PRICING_PATH = '/institutions/pricing'

export const institutionsPricingSection = {
  badge: 'Commercial Structure',
  title: 'Two recruitment models. <span class="text-gradient-brand">Clear commercials.</span>',
  description:
    'Institutions hire through Faculty Prime — pay per successful hire — or Faculty Elite, a fixed annual partnership for unlimited academic staffing.',
  classes: '!px-0 !py-0',
  note: 'Indicative commercial framework. Applicable taxes extra. Exact terms are confirmed in the Institutional Recruitment Agreement.',
  cta: { label: 'Compare Faculty Prime and Faculty Elite', href: INSTITUTIONS_PRICING_PATH },
} as const

export const institutionsPricingPackages = [
  {
    id: 'faculty-prime',
    name: 'Faculty Prime',
    model: 'Contract Academic Staffing',
    badge: 'Pay Per Successful Hire',
    featured: false,
    accent: 'blue' as const,
    iconMdi: 'mdi:account-check-outline',
    price: '8–15%',
    priceNote: 'of Annual Teacher CTC',
    subtitle: 'Requirement-Based Recruitment · Pay Per Successful Hire',
    tagline:
      'Designed for institutions that require teacher recruitment on an individual, periodic, or project-based basis.',
    description:
      'Indian Mentors manages the recruitment journey from requirement understanding and talent sourcing to screening, shortlisting, interview coordination, selection, and joining support.',
    includesLabel: 'Recruitment journey',
    includes: [
      'Requirement understanding',
      'Talent sourcing and screening',
      'Shortlisting and interview coordination',
      'Selection and joining support',
      '60-day replacement support',
    ],
    suitableForLabel: 'Best suited for',
    suitableFor: [
      'Occasional teacher recruitment',
      'Seasonal academic hiring',
      'Specific subject or faculty requirements',
      'Specialised and senior teaching positions',
      'New or replacement vacancies',
      'Institutions without continuous recruitment requirements',
      'Institutions preferring variable recruitment expenditure',
    ],
    advantage:
      'No annual recruitment subscription. Pay based on successful hiring volume.',
    cta: { label: 'Request Recruitment Support', href: institutionRequirementMailto() },
  },
  {
    id: 'faculty-elite',
    name: 'Faculty Elite',
    model: 'Annual Hiring Partnership',
    badge: 'Unlimited Hiring',
    featured: true,
    accent: 'emerald' as const,
    iconMdi: 'mdi:calendar-star-outline',
    price: 'Fixed Annual',
    priceNote: 'subscription · unlimited hiring',
    subtitle: 'Fixed Annual Subscription · Unlimited Hiring',
    tagline:
      'Designed for institutions with continuous, recurring, or high-volume academic staffing requirements.',
    description:
      "Instead of paying a separate recruitment service margin against every teacher's Annual CTC, the institution enters into an annual recruitment partnership with Indian Mentors through a fixed subscription value.",
    includesLabel: 'What the institution receives',
    includes: [
      'Unlimited teacher recruitment requirements',
      'Continuous vacancy support during the active partnership',
      'Centralised recruitment coordination',
      'Candidate sourcing and screening',
      'Academic and professional profile evaluation',
      'Shortlisting support',
      'Interview coordination',
      'Joining coordination',
      'Replacement hiring support within the partnership',
      'Institutional recruitment relationship management',
    ],
    suitableForLabel: 'Best suited for',
    suitableFor: [
      'Schools with recurring vacancies',
      'School groups and education chains',
      'Coaching institutes',
      'Colleges and universities',
      'New school / branch expansion',
      'Institutions with large faculty requirements',
      'Organisations with continuous academic staffing needs',
      'Institutions seeking predictable annual recruitment expenditure',
    ],
    advantage: 'One annual partnership. Unlimited hiring. Predictable recruitment expenditure.',
    cta: { label: 'Explore Annual Partnership', href: institutionPartnerMailto() },
  },
] as const

export const institutionsPricingHero = {
  badge: 'Institutional Recruitment Pricing',
  title: 'Faculty Prime & Faculty Elite',
  subtitle: 'Two commercial models for academic staffing',
  description:
    'Choose requirement-based recruitment with pay per successful hire, or a fixed annual partnership with unlimited hiring — structured commercials designed around how your institution actually recruits.',
  caption: 'Recruit. Place. Staff. Support. Renew.',
  headingId: 'institutions-pricing-hero-heading',
  tickerAriaLabel: 'Institutional pricing highlights',
  ticker: [
    'Faculty Prime — 8–15% of CTC',
    'Faculty Elite — unlimited hiring',
    'Pay per successful hire',
    'Fixed annual subscription',
    '60-day replacement support',
  ],
  primaryCta: {
    label: 'Share a Hiring Requirement',
    href: institutionRequirementMailto(),
    variant: 'theme-secondary' as const,
  },
  secondaryCta: {
    label: 'Talk to a Consultant',
    href: `tel:${INSTITUTIONS_PHONE_TEL}`,
    variant: 'secondary' as const,
  },
} as const

export const institutionsPricingPackagesSection = {
  badge: 'Hiring Models',
  title: 'Choose the model that matches <span class="text-gradient-brand">how you hire.</span>',
  description:
    'Faculty Prime is contract academic staffing billed against successful hires. Faculty Elite is an annual hiring partnership with unlimited recruitment during the active tenure.',
  classes: '!px-0 !py-0',
  note: 'Service margins, subscription values, and applicable taxes are confirmed in the Institutional Recruitment Agreement before recruitment begins.',
} as const

export const institutionsPricingCompare = {
  badge: 'Side-by-side',
  title: 'Compare your institutional <span class="text-gradient-brand">recruitment model</span>',
  description:
    'A structured view of how Faculty Prime and Faculty Elite differ on pricing, capacity, commitment, and replacement support.',
  classes: '!px-0 !py-0',
  featureLabel: 'Commercial Feature',
  primeLabel: 'Faculty Prime',
  eliteLabel: 'Faculty Elite',
  footnote:
    'Indicative commercial framework. Applicable taxes extra. Final terms are governed by the mutually executed Institutional Recruitment Agreement.',
  rows: [
    { feature: 'Model', prime: 'Contract Academic Staffing', elite: 'Annual Hiring Partnership' },
    { feature: 'Pricing Basis', prime: '% of Annual Teacher CTC', elite: 'Fixed Annual Subscription' },
    { feature: 'Standard Pricing', prime: '8–15%', elite: 'Contract-specific' },
    { feature: 'Hiring Capacity', prime: 'Requirement-based', elite: 'Unlimited' },
    { feature: 'Payment Basis', prime: 'Per recruitment engagement', elite: 'Annual partnership' },
    { feature: 'Hiring Frequency', prime: 'As required', elite: 'Continuous throughout tenure' },
    { feature: 'Annual Commitment', prime: 'Not required', elite: 'Required' },
    { feature: 'Budget Structure', prime: 'Variable', elite: 'Predictable' },
    { feature: 'Volume Benefit', prime: 'Lower margin at higher volume', elite: 'Unlimited hiring' },
    { feature: 'Multiple Vacancies', prime: 'Individual recruitment basis', elite: 'Covered within partnership' },
    { feature: 'Replacement Support', prime: '60-day replacement support', elite: 'Within active annual partnership' },
    { feature: 'Best For', prime: 'Selective / project hiring', elite: 'Recurring / high-volume hiring' },
    { feature: 'Payment Flexibility', prime: '30/40/30 milestone model', elite: '1–4 payment options' },
    { feature: 'Maximum Discount', prime: '—', elite: '15% on 1-time upfront payment' },
  ],
} as const

export const institutionsGuaranteeSection = {
  badge: 'Replacement Guarantee',
  title: 'A clearly defined <span class="text-gradient-brand">replacement policy</span>',
  description:
    'Recruitment support that continues beyond the joining date. Indian Mentors recognises that successful recruitment is not simply about filling a vacancy—it is about helping institutions maintain continuity in their academic workforce.',
  classes: '!px-0 !py-0',
  intro:
    'Accordingly, eligible recruitment engagements include a defined replacement support framework, subject to the terms and conditions of the institutional recruitment agreement.',
  periods: [
    {
      id: 'covered',
      window: '0–60 Days',
      support: '100% Replacement Support',
      iconMdi: 'mdi:shield-check-outline',
      body: "Where an eligible teacher leaves or is removed for reasons covered under the agreed recruitment contract during the first 60 days, Indian Mentors will provide replacement recruitment support without charging a fresh recruitment service margin for the replacement hire.",
    },
    {
      id: 'fresh',
      window: 'After 60 Days',
      support: 'Fresh Recruitment Requirement',
      iconMdi: 'mdi:account-search-outline',
      body: "Once the applicable 60-day replacement period has expired, a new vacancy arising from the teacher's departure will generally be treated as a fresh recruitment requirement and will be subject to the applicable commercial terms.",
    },
  ],
  processLabel: 'Replacement Process',
  process: [
    'Teacher Exit',
    'Eligibility Review',
    'Replacement Requirement',
    'Candidate Sourcing',
    'Shortlisting',
    'Selection',
    'Joining',
  ],
  byPlanTitle: 'Replacement Support by Plan',
  byPlan: [
    {
      id: 'faculty-prime',
      name: 'Faculty Prime',
      title: '60-Day Replacement Support',
      body: 'For eligible Faculty Prime placements, Indian Mentors provides replacement recruitment support during the first 60 days in accordance with the agreed recruitment contract.',
      flow: ['Original Placement', 'Eligible Exit', 'Replacement Search', 'Replacement Placement'],
    },
    {
      id: 'faculty-elite',
      name: 'Faculty Elite',
      title: 'Replacement Hiring Within Annual Partnership',
      body: 'For eligible cases occurring during the active Faculty Elite partnership, replacement hiring can be handled within the scope of the annual recruitment partnership, subject to the agreed service terms.',
      flow: ['Annual Partnership', 'Teacher Exit', 'Replacement Requirement', 'Replacement Hiring'],
    },
  ],
} as const

export const institutionsPricingTerms = {
  badge: 'Commercial Clarity',
  title: 'Transparent terms. <span class="text-gradient-brand">No hidden recruitment model.</span>',
  description:
    'Indian Mentors follows a structured commercial framework designed to provide clarity before recruitment begins.',
  classes: '!px-0 !py-0',
  items: [
    {
      no: '01',
      title: 'Agreed Commercials',
      description:
        'The applicable service margin or annual subscription value is confirmed before commencement.',
    },
    {
      no: '02',
      title: 'Defined Scope',
      description:
        'Recruitment categories, academic levels, locations, hiring volume, and service scope are documented.',
    },
    {
      no: '03',
      title: 'Milestone-Based Payments',
      description: 'Faculty Prime follows a defined 30% / 40% / 30% payment structure.',
    },
    {
      no: '04',
      title: 'Flexible Subscription Payments',
      description: 'Faculty Elite provides 1–4 payment options with applicable discounts.',
    },
    {
      no: '05',
      title: 'Defined Replacement Window',
      description: 'Eligible Faculty Prime placements receive 60-day replacement support.',
    },
    {
      no: '06',
      title: 'Institutional Agreement',
      description: 'Final commercial terms are governed by the mutually executed recruitment agreement.',
    },
  ],
} as const

export const institutionsPricingChoose = {
  badge: 'Which Model?',
  title: 'Which model is right for <span class="text-gradient-brand">your institution?</span>',
  classes: '!px-0 !py-0',
  plans: [
    {
      id: 'faculty-prime',
      eyebrow: 'Choose Faculty Prime',
      title: 'If you need',
      featured: false,
      needs: [
        { title: 'Occasional Hiring', description: 'Recruit teachers when vacancies arise.' },
        { title: 'Flexible Spending', description: 'Pay based on actual recruitment requirements.' },
        { title: 'Project-Based Recruitment', description: 'Ideal for specific recruitment drives.' },
        { title: 'Variable Hiring Volume', description: 'Suitable when annual hiring requirements are uncertain.' },
      ],
      name: 'Faculty Prime',
      price: '8–15% of Annual Teacher CTC',
      cta: { label: 'Request Recruitment Support', href: institutionRequirementMailto() },
    },
    {
      id: 'faculty-elite',
      eyebrow: 'Choose Faculty Elite',
      title: 'If you need',
      featured: true,
      needs: [
        { title: 'Continuous Hiring', description: 'Maintain an ongoing recruitment pipeline.' },
        { title: 'High-Volume Recruitment', description: 'Recruit multiple teachers throughout the year.' },
        { title: 'Predictable Budgeting', description: 'Use a fixed annual recruitment subscription.' },
        { title: 'Unlimited Hiring', description: 'Raise recruitment requirements throughout the partnership.' },
      ],
      name: 'Faculty Elite',
      price: 'Fixed Annual Subscription · Unlimited Hiring',
      cta: { label: 'Explore Annual Partnership', href: institutionPartnerMailto() },
    },
  ],
} as const

export const institutionsPricingWhy = {
  badge: 'Why Indian Mentors',
  title: 'More than recruitment. <span class="text-gradient-brand">A structured academic staffing partner.</span>',
  description:
    'Indian Mentors combines recruitment operations with an education-focused understanding of institutional staffing requirements.',
  classes: '!px-0 !py-0',
  items: [
    {
      iconMdi: 'mdi:account-group-outline',
      title: 'Verified Talent Network',
      description:
        'Access to teaching professionals across academic levels, subjects, boards, and locations.',
    },
    {
      iconMdi: 'mdi:school-outline',
      title: 'Academic-Focused Screening',
      description:
        "Candidate evaluation aligned with the institution's academic and role requirements.",
    },
    {
      iconMdi: 'mdi:sitemap-outline',
      title: 'Structured Recruitment Process',
      description:
        'From vacancy intake to candidate joining, recruitment activities follow a defined workflow.',
    },
    {
      iconMdi: 'mdi:chart-timeline-variant',
      title: 'Scalable Hiring',
      description:
        'Recruit for individual vacancies, large recruitment drives, or continuous staffing requirements.',
    },
    {
      iconMdi: 'mdi:shield-sync-outline',
      title: 'Replacement Support',
      description: 'Defined replacement terms provide greater confidence after placement.',
    },
    {
      iconMdi: 'mdi:handshake-outline',
      title: 'Institutional Partnership',
      description:
        'Designed to support schools, colleges, coaching institutes, and education organisations beyond one-time hiring.',
    },
  ],
} as const

export const institutionsPricingFinalCta = {
  badge: 'Ready to Hire',
  title: 'Build the right faculty team with the right commercial model.',
  description:
    'Whether your institution needs a single specialised teacher, a complete faculty recruitment drive, or an ongoing annual hiring partner, Indian Mentors provides a structured recruitment model designed around your requirements.',
  closing: 'Faculty Prime for contract staffing. Faculty Elite for unlimited annual hiring.',
  plans: [
    {
      name: 'Faculty Prime',
      model: 'Contract Academic Staffing',
      price: '8–15% of Annual Teacher CTC',
    },
    {
      name: 'Faculty Elite',
      model: 'Annual Hiring Partnership',
      price: 'Fixed Annual Subscription · Unlimited Hiring',
    },
  ],
  primaryCta: {
    label: 'Hire Teachers',
    href: institutionRequirementMailto(),
  },
  secondaryCta: {
    label: 'Talk to a Recruitment Consultant',
    href: `tel:${INSTITUTIONS_PHONE_TEL}`,
  },
  tertiaryCta: {
    label: 'Request Commercial Proposal',
    href: institutionProposalMailto(),
  },
  whatsappCta: {
    label: 'WhatsApp Requirement',
    href: INSTITUTIONS_WHATSAPP,
  },
} as const
