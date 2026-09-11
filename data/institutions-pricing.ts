import {
  INSTITUTIONS_PHONE_TEL,
  INSTITUTIONS_WHATSAPP,
  institutionConsultMailto,
  institutionPartnerMailto,
  institutionRequirementMailto,
} from './institutions'

export const INSTITUTIONS_PRICING_PATH = '/institutions/pricing'

export const institutionsPricingSection = {
  badge: 'Commercial Structure',
  title: 'Two ways to hire. <span class="text-gradient-brand">Keep it simple.</span>',
  description:
    'Institutions work with Indian Mentors on one of two plans — commission on each successful joining, or a fixed annual fee to hire whatever faculty you need through the year.',
  classes: '!px-0 !py-0',
  note: 'Indicative commercial framework. Applicable taxes extra. Exact terms are confirmed in the Institutional Recruitment Agreement.',
  cta: { label: 'Compare Plan A and Plan B', href: INSTITUTIONS_PRICING_PATH },
} as const

export const institutionsPricingPackages = [
  {
    id: 'plan-a',
    name: 'Plan A',
    badge: 'Pay per joining',
    featured: false,
    accent: 'blue' as const,
    iconMdi: 'mdi:account-check-outline',
    price: 'Pay-on-Joining',
    priceNote: 'on each successful joining',
    tagline: 'You pay only when a teacher joins your institution — no annual retainer.',
    audience: 'Schools, coaching centres, and institutions hiring role by role',
    suitableFor: ['Single vacancies', 'Occasional hiring', 'Role-by-role recruitment', 'No annual commitment'],
    includes: [
      'Candidate sourcing & screening',
      'Shortlisting and interview coordination',
      'Joining coordination',
      'Commission billed only after successful joining',
      '60-day replacement support',
    ],
    billing: 'Invoice raised when the teacher joins. Payment due on successful joining.',
    cta: { label: 'Start with Plan A', href: institutionRequirementMailto() },
  },
  {
    id: 'plan-b',
    name: 'Plan B',
    badge: 'Hire as needed',
    featured: true,
    accent: 'emerald' as const,
    iconMdi: 'mdi:calendar-check-outline',
    price: 'Annual Faculty Partner',
    priceNote: 'billed yearly',
    tagline: 'Pay one annual fee and hire whatever faculty you need through the year.',
    audience: 'Growing campuses, bulk hiring, and institutions with ongoing faculty needs',
    suitableFor: ['Ongoing hiring', 'Bulk / campus recruitment', 'New branches & sessions', 'Annual faculty planning'],
    includes: [
      'Fixed annual partnership fee',
      'Hire as many roles as needed during the year',
      'Sourcing, screening, interviews, and joining support',
      'Replacement and continuity support',
      'One annual invoice — no per-joining commission',
    ],
    billing: 'Billed annually. Raise requirements through the year; we recruit as needed.',
    cta: { label: 'Discuss Plan B', href: institutionPartnerMailto() },
  },
] as const

export const institutionsPricingHero = {
  badge: 'Institutional Recruitment',
  title: 'Two Hiring Plans',
  subtitle: 'Commission on joining, or a fixed annual partnership',
  description:
    'Schools, coaching institutes, colleges, universities, EdTech companies, and training organisations can hire through Indian Mentors on Plan A or Plan B — nothing more complicated than that.',
  caption: 'Recruit. Place. Staff. Support. Renew.',
  headingId: 'institutions-pricing-hero-heading',
  tickerAriaLabel: 'Institutional pricing highlights',
  ticker: [
    'Plan A — commission on joining',
    'Plan B — fixed annual fee',
    'Hire as needed',
    '60-day replacement',
    'Successful joining',
  ],
  primaryCta: { label: 'Share a Hiring Requirement', href: institutionRequirementMailto(), variant: 'theme-secondary' as const },
  secondaryCta: { label: 'Talk to a Specialist', href: `tel:${INSTITUTIONS_PHONE_TEL}`, variant: 'secondary' as const },
} as const

export const institutionsPricingPackagesSection = {
  badge: 'Hiring Plans',
  title: 'Choose Plan A or Plan B. <span class="text-gradient-brand">That’s the full commercial choice.</span>',
  description:
    'Plan A is commission on each successful joining. Plan B is a fixed annual fee so your institution can hire whatever faculty it needs through the year.',
  classes: '!px-0 !py-0',
  note: 'Starting figures and annual fees are indicative. Applicable taxes extra. Exact commercials are confirmed in the Institutional Recruitment Agreement.',
} as const

export const institutionsGuaranteeSection = {
  badge: 'Replacement Guarantee',
  title: 'A clearly defined <span class="text-gradient-brand">replacement policy</span>',
  description:
    'Replacement generally applies where the teacher leaves or is removed for reasons covered under the agreed recruitment contract. Plan A includes 60-day replacement support on the commission hire. Plan B covers replacement hiring within the annual partnership.',
  classes: '!px-0 !py-0',
  periods: [
    { id: 'covered', window: '0–60 days', support: '100% replacement support', iconMdi: 'mdi:shield-check-outline' },
    { id: 'fresh', window: 'After 60 days', support: 'Fresh recruitment requirement', iconMdi: 'mdi:account-search-outline' },
  ],
  appliesNote:
    'Replacement should generally apply where the teacher leaves or is removed for reasons covered under the agreed recruitment contract.',
  exclusionsTitle: 'It should not automatically apply to',
  exclusions: [
    'Change in institutional requirement',
    'Salary disputes caused by the institution',
    'Institutional closure',
    'Change in location',
    'Reduction in faculty requirement',
    'Termination unrelated to candidate suitability',
  ],
  closing: 'The exact terms should be defined in the Institutional Recruitment Agreement.',
} as const

export const institutionsPartnershipSection = {
  badge: 'Strategic Partnership',
  title: 'Hire once, or hire through the year',
  description:
    'Plan A is for institutions that want to pay only when a teacher joins. Plan B is for institutions that want a year-round academic staffing partner.',
  classes: '!px-0 !py-0',
  flow: ['Recruit', 'Place', 'Staff', 'Support', 'Renew'],
  body:
    'A school that starts on Plan A with 5 teachers can later move to Plan B — covering 20 teachers, replacements, annual faculty hiring, and ongoing support under one yearly fee.',
  outcome:
    'That keeps Institutional Hiring complementary to Indian Mentors’ tutoring ecosystem, without turning every vacancy into a separate commercial negotiation.',
  cta: { label: 'Start an institutional conversation', href: institutionConsultMailto() },
} as const

export const institutionsPricingFinalCta = {
  badge: 'Ready to Choose a Plan?',
  title: 'Plan A if you hire role by role. Plan B if you hire through the year.',
  description:
    'Share your faculty requirement or annual hiring calendar. Indian Mentors will recommend commission-on-joining or a fixed annual partnership.',
  closing: 'Indian Mentors — Institutional Hiring Division. Two plans. Successful joining. Year-round staffing.',
  primaryCta: {
    label: 'Hire Teachers',
    href: institutionRequirementMailto(),
  },
  secondaryCta: {
    label: 'Talk to a Recruitment Specialist',
    href: `tel:${INSTITUTIONS_PHONE_TEL}`,
  },
  tertiaryCta: {
    label: 'Submit Faculty Requirement',
    href: INSTITUTIONS_WHATSAPP,
  },
} as const
