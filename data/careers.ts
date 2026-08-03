export type RoleCategory = {
  id: string
  iconMdi: string
  title: string
  roles: string[]
  accent: 'blue' | 'emerald' | 'amber' | 'violet'
}

export type CareerBenefit = {
  id: string
  iconMdi: string
  title: string
  description: string
  accent: 'blue' | 'emerald' | 'amber' | 'violet'
}

export const careersHero = {
  badge: 'Careers at Indian Mentors',
  title: 'Build Your Career in',
  titleHighlight: 'Structured Mentorship',
  description:
    'We build strong institutions with professionals who value structure, accountability, and long-term impact. Join a team passionate about education and responsible mentorship.',
  supporting:
    'Whether you teach, lead, strategise, or build technology — your work here drives measurable academic outcomes.',
  primaryCta: { label: 'Apply Now', href: '#apply' },
  secondaryCta: { label: 'View Open Roles', href: '#opportunities' },
} as const

export const careersHeroHighlights = [
  { iconMdi: 'mdi:clipboard-check-outline', label: 'Defined KPIs' },
  { iconMdi: 'mdi:chart-timeline-variant', label: 'Structured Reporting' },
  { iconMdi: 'mdi:shield-check-outline', label: 'Compliance-Based' },
  { iconMdi: 'mdi:trending-up', label: 'Performance Growth' },
] as const

export const opportunitiesSection = {
  kicker: 'Opportunities at Indian Mentors',
  title: 'Roles we regularly <span class="text-gradient-brand">invite applications for</span>',
  classes: '!px-0 !py-0',
  description:
    'Each role is aligned with defined responsibilities, measurable KPIs, and structured reporting systems to ensure clarity and performance accountability.',
} as const

export const roleCategories: RoleCategory[] = [
  {
    id: 'admission-academic',
    iconMdi: 'mdi:school-outline',
    title: 'Admission & Academic Roles',
    roles: ['Admission Counsellors', 'Academic Counsellors', 'Admission Coordinators'],
    accent: 'blue',
  },
  {
    id: 'recruitment',
    iconMdi: 'mdi:account-search-outline',
    title: 'Recruitment Roles',
    roles: ['Tutor Recruiters', 'Human Resources'],
    accent: 'emerald',
  },
  {
    id: 'operations',
    iconMdi: 'mdi:office-building-outline',
    title: 'Operations & Administration',
    roles: ['Customer Support', 'Finance & Accounts', 'Administrative & Compliance'],
    accent: 'amber',
  },
  {
    id: 'growth-tech',
    iconMdi: 'mdi:rocket-launch-outline',
    title: 'Growth & Technology',
    roles: ['Digital Marketing Professionals', 'ERP & Tech Operations Team'],
    accent: 'violet',
  },
]

export const benefitsSection = {
  kicker: 'What We Offer',
  title: 'A workplace built on <span class="text-gradient-brand">structure and integrity</span>',
  classes: '!px-0 !py-0',
  description:
    'At Indian Mentors, we provide an environment where professional discipline meets meaningful academic impact.',
} as const

export const careerBenefits: CareerBenefit[] = [
  {
    id: 'structured-environment',
    iconMdi: 'mdi:sitemap-outline',
    title: 'Structured Working Environment',
    description:
      'Clearly defined workflows, operational discipline, and organised communication systems.',
    accent: 'blue',
  },
  {
    id: 'transparent-policies',
    iconMdi: 'mdi:file-document-check-outline',
    title: 'Transparent Policies',
    description:
      'Documented procedures, fair processes, and compliance-based governance.',
    accent: 'emerald',
  },
  {
    id: 'performance-growth',
    iconMdi: 'mdi:chart-line',
    title: 'Performance-Based Growth',
    description:
      'Career advancement opportunities linked to measurable contribution and results.',
    accent: 'amber',
  },
  {
    id: 'professional-development',
    iconMdi: 'mdi:book-open-page-variant-outline',
    title: 'Professional Development Opportunities',
    description:
      'Continuous learning, role-based training, and system-driven improvement frameworks.',
    accent: 'violet',
  },
]

export const purposeSection = {
  kicker: 'Grow With Purpose',
  title: 'Join us in building a scalable academic ecosystem',
  paragraphs: [
    'If you believe in structured education, operational discipline, and responsible academic mentorship, we invite you to grow with Indian Mentors.',
    'Join us in building a scalable and sustainable academic ecosystem that empowers students and professionals alike.',
  ],
  tagline: 'Indian Mentors — Where Professionals Build Futures with Structure and Integrity.',
} as const

export const careersFinalCta = {
  badge: 'Ready to Apply?',
  title: 'Take the next step in your career',
  description:
    'We review applications on a rolling basis. Share your profile and our recruitment team will connect with you regarding suitable opportunities.',
  primaryCta: {
    label: 'Apply Now',
    href: 'mailto:info@indianmentors.in?subject=Career%20Application%20%E2%80%94%20Indian%20Mentors',
  },
  secondaryCta: {
    label: 'Submit Your Resume',
    href: 'mailto:info@indianmentors.in?subject=Resume%20Submission%20%E2%80%94%20Indian%20Mentors&body=Please%20find%20my%20resume%20attached.',
  },
  tertiaryCta: {
    label: 'Contact Recruitment Team',
    href: 'tel:+917389563564',
  },
  closing: 'Indian Mentors — Where Professionals Build Futures with Structure and Integrity.',
} as const
