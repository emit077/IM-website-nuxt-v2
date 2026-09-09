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

export const institutionsFeeModelsSection = {
  badge: 'How Each Plan Works',
  title: 'Commission when they join, or <span class="text-gradient-brand">one annual fee</span>',
  description:
    'Plan A charges only after a successful joining. Plan B covers hiring for the year so you are not billed role by role.',
  classes: '!px-0 !py-0',
} as const

export const institutionsFeeModels = [
  {
    id: 'how-plan-a',
    kicker: 'Plan A',
    title: 'Commission on successful joining',
    subtitle: 'Pay only for teachers who join',
    iconMdi: 'mdi:percent-outline',
    accent: 'blue' as const,
    fee: 'Commission per successful joining',
    description:
      'When a teacher joins, Indian Mentors raises an invoice for the agreed commission. For regular roles this typically starts from ₹10,000 per successful placement. For experienced or senior faculty, commission is often 8%–15% of annual CTC.',
    example: {
      label: 'Example — senior faculty',
      rows: [
        { label: 'Teacher annual CTC', value: '₹6,00,000' },
        { label: 'Commission at 10%', value: '₹60,000 + applicable taxes' },
        { label: 'When billed', value: 'On successful joining' },
      ],
    },
    roles: [
      'PRT / TGT / PGT',
      'Senior Faculty & HOD',
      'Academic Coordinators',
      'Competitive Exam Faculty',
      'Assistant Professors',
      'Occasional or single vacancies',
    ],
  },
  {
    id: 'how-plan-b',
    kicker: 'Plan B',
    title: 'Fixed annual fee',
    subtitle: 'Hire whatever you need through the year',
    iconMdi: 'mdi:calendar-month-outline',
    accent: 'emerald' as const,
    fee: 'One annual partnership fee',
    description:
      'Your institution pays a fixed fee billed annually. During that year you can raise faculty requirements as they come — we recruit, screen, and coordinate joining without a separate commission on each hire.',
    example: {
      label: 'How it runs',
      rows: [
        { label: 'Billing', value: 'Once a year' },
        { label: 'Hiring volume', value: 'As needed through the year' },
        { label: 'Per-joining commission', value: 'Not charged' },
      ],
    },
    roles: [
      'Ongoing faculty hiring',
      'New campus or branch launch',
      'Session-wise bulk recruitment',
      'Replacement through the year',
      'Multi-department hiring',
      'Annual academic staffing',
    ],
  },
] as const

export const institutionsPaymentSection = {
  badge: 'Billing',
  title: 'Plan A on joining. <span class="text-gradient-brand">Plan B once a year.</span>',
  description:
    'Billing stays aligned with the plan you choose. Plan A is paid when a teacher joins. Plan B is a fixed annual invoice.',
  classes: '!px-0 !py-0',
  preference:
    'Plan A keeps Indian Mentors paid only for successful joining. Plan B is for institutions that want one commercial relationship covering whatever hiring comes up in the year.',
} as const

export const institutionsPaymentOptions = [
  {
    id: 'plan-a-billing',
    option: 'Plan A',
    title: 'Billed on joining',
    fit: 'Commission per successful hire',
    preferred: false,
    iconMdi: 'mdi:account-check-outline',
    steps: ['Teacher joins', 'Commission invoice raised', 'Payment due'],
    description: 'No annual retainer. You pay only for each successful joining under the agreed commission.',
  },
  {
    id: 'plan-b-billing',
    option: 'Plan B',
    title: 'Billed annually',
    fit: 'Fixed yearly partnership',
    preferred: true,
    iconMdi: 'mdi:calendar-check-outline',
    steps: ['Annual fee agreed', 'Invoice billed yearly', 'Hire as needed through the year'],
    description: 'One fixed annual fee. Raise requirements whenever you need faculty — without a per-joining commission.',
  },
] as const

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

export const institutionsPricingFaqSection = {
  badge: 'Commercial FAQs',
  title: 'Questions institutions ask about <span class="text-gradient-brand">Plan A and Plan B</span>',
  classes: '!px-0 !py-0',
} as const

export const institutionsPricingFaqs = [
  {
    id: 'two-plans',
    question: 'How many hiring plans do you offer?',
    answer:
      'Two. Plan A is commission on each successful joining. Plan B is a fixed annual fee so your institution can hire whatever faculty it needs through the year.',
  },
  {
    id: 'when-pay',
    question: 'When is payment due on Plan A?',
    answer:
      'On successful joining. The teacher joins, the commission invoice is raised, and payment is due. You are not billed for candidates who do not join.',
  },
  {
    id: 'plan-b-volume',
    question: 'Does Plan B limit how many teachers we can hire?',
    answer:
      'Plan B is designed so you can raise hiring requirements as they come during the year. The annual fee is agreed up front based on your institution’s likely volume and support need. Exact coverage is defined in the Institutional Recruitment Agreement.',
  },
  {
    id: 'ctc',
    question: 'How is Plan A commission calculated?',
    answer:
      'Regular placements typically start from ₹10,000 per successful joining. For experienced or senior faculty — including PGT, HOD, academic coordinators, competitive-exam faculty, and leadership roles — commission is often 8%–15% of annual CTC.',
  },
  {
    id: 'replacement',
    question: 'What does the replacement guarantee cover?',
    answer:
      'Within 0–60 days, covered departures receive 100% replacement support. After 60 days, a fresh recruitment requirement applies. Replacement does not automatically cover institution-led changes such as salary disputes, location changes, reduced headcount, or closure.',
  },
  {
    id: 'taxes',
    question: 'Are the figures inclusive of taxes?',
    answer: 'No. Published figures are indicative and exclusive of applicable taxes unless the agreement states otherwise.',
  },
] as const

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
