import type { TrustIndicatorItem } from '~/components/ui/TrustIndicatorsLayout.vue'

export type ProcessStep = {
  no: string
  iconMdi: string
  title: string
  description: string
  points?: string[]
}

export type PartnershipTier = {
  id: string
  iconMdi: string
  title: string
  description: string
  responsibilities: string[]
  popular?: boolean
  cta: { label: string; href: string }
}

export type PartnerTestimonial = {
  id: string
  quote: string
  name: string
  role: string
  location: string
}

export type PartnerFaqItem = {
  id: string
  question: string
  answer: string
}

export const heroContent = {
  badge: 'Channel Partner Program',
  title: 'Become a <span class="text-gradient-brand">Channel Partner</span>',
  subtitle:
    '<span class="text-gradient-brand">Indian Mentors</span> - Authorised Reseller Program for Education Consultants',
  description:
    'Build a rewarding education business by collaborating with Indian Mentors, a growing platform dedicated to delivering high-quality personalised tutoring services to students across India. ',
  backgroundImage: 'assets/img/hero/hero-1.png',
  contentClass: '!px-0 !py-0 max-w-2xl lg:max-w-[46rem]',
  primaryCta: { label: 'Apply for Channel Partnership', href: '#partner-register' },
  secondaryCta: { label: 'Explore Available Territories', href: '#available-territories' },
}

export const heroTrustStats: TrustIndicatorItem[] = [
  {
    value: '100+',
    label: 'Service Territories',
    icon: 'solar:map-point-bold-duotone',
  },
  {
    value: '1,00,000+',
    label: 'Verified Tutors',
    icon: 'solar:square-academic-cap-bold-duotone',
  },
  {
    value: '50,000+',
    label: 'Students Supported',
    icon: 'solar:users-group-rounded-bold-duotone',
  },
  {
    value: '100%',
    label: 'Transparent Earnings',
    icon: 'solar:wallet-money-bold-duotone',
  },
]

export const aboutSection = {
  kicker: 'About the Partnership Program',
  title: 'About the <span class="text-gradient-brand">Partnership Program</span>',
  classes: '!px-0 !py-0',
  description:
    'Indian Mentors is expanding its nationwide network of channel partners to connect students with verified and qualified tutors for personalised academic support.',
  points: [
    'Partners operate within defined territories and help students access one-to-one tutoring solutions tailored to their learning needs.',
    'Our structured partnership model ensures that partners receive operational guidance, lead support, and business opportunities while contributing to the growth of quality education services.',
  ],
}

export const partnerRoleSection = {
  kicker: 'Your Role',
  title: 'What Does a <span class="text-gradient-brand">Channel Partner</span> Do?',
  classes: '!px-0 !py-0',
  description:
    'As an Authorised Reseller, you operate as the local representative of Indian Mentors, managing academic service coordination within your territory.',
  responsibilitiesTitle: 'Key Responsibilities',
  responsibilities: [
    'Manage local tutoring operations within your assigned territory',
    'Coordinate student and parent registrations',
    'Onboard and verify qualified tutors in your region',
    'Support demo session scheduling between tutors and students',
    'Assist with student enrollment and service coordination',
    'Maintain quality standards for tutoring services',
    'Build strong local academic networks',
  ],
  highlights: [
    {
      iconMdi: 'mdi:map-marker-radius-outline',
      title: 'Territory-Based',
      description: 'Operate exclusively in your assigned region with full autonomy.',
    },
    {
      iconMdi: 'mdi:account-group-outline',
      title: 'Community Focus',
      description: 'Build lasting relationships with students, parents, and tutors.',
    },
    {
      iconMdi: 'mdi:tablet-dashboard',
      title: 'Platform Support',
      description: 'Stay connected to our centralized digital management system.',
    },
    {
      iconMdi: 'mdi:account-plus-outline',
      title: 'Network Growth',
      description: 'Expand the tutor and student network in your local area.',
    },
  ],
}

export const revenueSplitSection = {
  kicker: 'Revenue Model',
  title: 'The 90/10 Split — Visualised',
  description:
    'For every subscription rupee collected in your territory, <strong class="text-white">90% flows to you</strong>. The platform retains only 10% to maintain and improve the national ecosystem.',
  partnerShare: {
    label: 'Channel Partner',
    percent: 90,
    detail: 'Subscription Revenue',
  },
  platformShare: {
    label: 'Indian Mentors Platform',
    shortLabel: 'Indian Mentors',
    percent: 10,
    detail: 'Platform Fee',
  },
  highlights: [
    {
      iconMdi: 'mdi:wallet-outline',
      title: 'Highest Partner Earnings',
      description: 'Keep the majority of every subscription from your territory.',
    },
    {
      iconMdi: 'mdi:shield-check-outline',
      title: 'Transparent Sharing',
      description: 'Clear 90/10 split with no hidden deductions or fees.',
    },
    {
      iconMdi: 'mdi:rocket-launch-outline',
      title: 'Platform Handles the Rest',
      description: 'Tech, support, and national brand stay with Indian Mentors.',
    },
  ],
}

export const whyPartnerSection = {
  kicker: 'Why Partner with Indian Mentors',
  title: 'Why partner with <span class="text-gradient-brand">Indian Mentors</span>',
  classes: '!px-0 !py-0',
  description:
    'Join a platform built for long-term partner success — with demand, structure, and scale already in place.',
}

export const whyPartnerReasons = [
  {
    iconMdi: 'mdi:trending-up',
    title: 'Growing Demand for Personalised Tutoring',
    description:
      'Students and parents are increasingly seeking individual academic attention, making personalised tutoring one of the fastest-growing segments in education.',
    accent: 'emerald',
    graphic: 'demand',
    stat: 'Fastest-growing segment',
  },
  {
    iconMdi: 'mdi:sitemap-outline',
    title: 'Established Service Model',
    description:
      'Indian Mentors provides a structured tutoring service model with clear processes for student admissions, tutor allocation, and academic coordination.',
    accent: 'blue',
    graphic: 'model',
    stat: 'Clear operational processes',
  },
  {
    iconMdi: 'mdi:account-school-outline',
    title: 'Nationwide Tutor Network',
    description:
      'Access a network of qualified and verified tutors across various subjects, grades, and academic boards.',
    accent: 'violet',
    graphic: 'network',
    stat: 'Verified tutors nationwide',
  },
  {
    iconMdi: 'mdi:rocket-launch-outline',
    title: 'Scalable Business Opportunity',
    description:
      'Partners can expand their operations from local area coverage to city and regional levels based on performance and market demand.',
    accent: 'amber',
    graphic: 'scale',
    stat: 'Local to regional growth',
  },
]

export const partnershipOpportunitiesSection = {
  kicker: 'Partnership Opportunities',
  title: 'Partnership <span class="text-gradient-brand">Opportunities</span>',
  classes: '!px-0 !py-0',
  description:
    'Indian Mentors offers different levels of partnership depending on the partner\'s experience, market reach, and operational capacity.',
}

export const partnershipTiers: PartnershipTier[] = [
  {
    id: 'local-area',
    iconMdi: 'mdi:map-marker-outline',
    title: 'Local Area Partner',
    description: 'Operate within a specific area or pincode cluster.',
    responsibilities: [
      'Handling student enquiries',
      'Parent counselling',
      'Demo class coordination',
    ],
    cta: { label: 'Apply Now', href: '#partner-register' },
  },
  {
    id: 'city-channel',
    iconMdi: 'mdi:city-variant-outline',
    title: 'City Channel Partner',
    description: 'Manage student admissions and tutor coordination across an entire city or town.',
    responsibilities: [
      'City-level lead management',
      'Tutor onboarding support',
      'Parent relationship management',
    ],
    popular: true,
    cta: { label: 'Apply Now', href: '#partner-register' },
  },
  {
    id: 'regional',
    iconMdi: 'mdi:earth',
    title: 'Regional Partner',
    description:
      'Operate across multiple cities or districts, supporting the expansion of tutoring services in the region.',
    responsibilities: [
      'Territory expansion',
      'Regional partner support',
      'Business development activities',
    ],
    cta: { label: 'Apply Now', href: '#partner-register' },
  },
]

export type TerritoryLevel = {
  label: string
  iconMdi: string
  description: string
  accent: 'blue' | 'indigo' | 'violet' | 'cyan' | 'emerald' | 'teal' | 'sky' | 'amber'
}

export const territorySection = {
  kicker: 'Geographical Territory Structure',
  title: 'Geographical <span class="text-gradient-brand">Territory Structure</span>',
  classes: '!px-0 !py-0',
  description:
    'Indian Mentors follows a structured Geographical Division Model to manage service territories and partner operations. This hierarchy allows efficient lead distribution, tutor allocation, and operational management.',
  structureLabel: 'Service Structure',
  levels: [
    { label: 'Country', iconMdi: 'mdi:earth', description: 'National coverage and policy framework', accent: 'blue' },
    { label: 'Zone', iconMdi: 'mdi:map-legend', description: 'Regional zones for coordinated operations', accent: 'indigo' },
    { label: 'State', iconMdi: 'mdi:map-outline', description: 'State-level service management', accent: 'violet' },
    { label: 'Division', iconMdi: 'mdi:view-grid-outline', description: 'Administrative divisions within states', accent: 'cyan' },
    { label: 'District', iconMdi: 'mdi:map-marker-radius-outline', description: 'District-wise partner allocation', accent: 'emerald' },
    { label: 'City', iconMdi: 'mdi:city-variant-outline', description: 'City or town-level operations', accent: 'teal' },
    { label: 'Pincode', iconMdi: 'mdi:mailbox-outline', description: 'Precise service delivery at pincode level', accent: 'amber' },
  ] satisfies TerritoryLevel[],
  benefits: [
    { iconMdi: 'mdi:transit-connection-variant', label: 'Efficient lead distribution' },
    { iconMdi: 'mdi:account-switch-outline', label: 'Smart tutor allocation' },
    { iconMdi: 'mdi:chart-timeline-variant', label: 'Scalable partner operations' },
  ],
  creativeImage: 'assets/img/channel-partner/territory-structure-map.png',
  featuredCities: [
    { image: 'mumbai', label: 'Mumbai' },
    { image: 'delhi', label: 'Delhi' },
    { image: 'bangluru', label: 'Bengaluru' },
    { image: 'chennai', label: 'Chennai' },
    { image: 'kolkata', label: 'Kolkata' },
    { image: 'pune', label: 'Pune' },
  ],
  note: 'Each partner operates within a clearly defined territory level depending on the partnership model.',
}

export const processSection = {
  kicker: 'How the Channel Partner Program Works',
  title: 'How the program <span class="text-gradient-brand">works</span>',
  classes: '!px-0 !py-0',
  description:
    'Our partnership journey is designed to be simple, transparent, and professionally guided.',
  journeyLabel: 'Your 5-step journey',
  ctaTitle: 'Ready to start Step 01?',
  ctaDescription:
    'Submit your application today and our partnership team will guide you from discussion to launch.',
  primaryCta: { label: 'Start Your Partnership Application', href: '#partner-register' },
  secondaryCta: { label: 'Talk to a Partnership Expert', href: 'tel:+917389563564' },
}

export const processSteps: ProcessStep[] = [
  {
    no: '01',
    iconMdi: 'mdi:file-document-edit-outline',
    title: 'Submit Partnership Application',
    description:
      'Complete the online partnership form to express your interest in becoming a Channel Partner.',
  },
  {
    no: '02',
    iconMdi: 'mdi:phone-in-talk-outline',
    title: 'Initial Discussion',
    description:
      'Our team will conduct a discussion to understand your background, territory preference, and business goals.',
  },
  {
    no: '03',
    iconMdi: 'mdi:check-decagram-outline',
    title: 'Partnership Approval',
    description:
      'Eligible applicants will receive confirmation along with details regarding territory allocation and partnership terms.',
  },
  {
    no: '04',
    iconMdi: 'mdi:school-outline',
    title: 'Training and Onboarding',
    description: 'Partners receive training on:',
    points: [
      'Tutoring service model',
      'Parent counselling process',
      'Student enrollment workflow',
      'CRM and lead management system',
    ],
  },
  {
    no: '05',
    iconMdi: 'mdi:rocket-launch-outline',
    title: 'Start Operations',
    description: 'Once onboarded, partners can begin:',
    points: [
      'Handling student enquiries',
      'Coordinating demo sessions',
      'Facilitating student enrollments',
    ],
  },
]

export const whoCanApplySection = {
  kicker: 'Who Can Become a Channel Partner',
  title: 'We welcome education-focused entrepreneurs',
  description:
    'We welcome applications from individuals and organisations interested in contributing to the education sector.',
  suitableLabel: 'Suitable partners include:',
  note: 'No large infrastructure investment is required to begin.',
}

export const eligibleApplicants = [
  { iconMdi: 'mdi:account-tie-outline', label: 'Education consultants' },
  { iconMdi: 'mdi:human-male-board', label: 'Coaching centre owners' },
  { iconMdi: 'mdi:school-outline', label: 'School teachers' },
  { iconMdi: 'mdi:account-voice', label: 'Academic counsellors' },
  { iconMdi: 'mdi:lightbulb-on-outline', label: 'Education entrepreneurs' },
  { iconMdi: 'mdi:compass-outline', label: 'Career guidance professionals' },
]

export const eligibilityRequirements = {
  title: 'Eligibility Requirements',
  subtitle: 'Basic requirements to become a channel partner',
  items: [
    'Passion for education sector',
    'Good communication skills',
    'Local market knowledge',
    'Basic smartphone/computer literacy',
    'Commitment to quality service',
  ],
}

export const territoriesSection = {
  kicker: 'Available Territories',
  title: 'Available <span class="text-gradient-brand">Territories</span>',
  classes: '!px-0 !py-0',
  description:
    'Indian Mentors is actively expanding across multiple cities and regions in India. Explore available cities, territory status, and expansion opportunities.',
  features: [
    { iconMdi: 'mdi:city-variant-outline', label: 'Available cities' },
    { iconMdi: 'mdi:map-check-outline', label: 'Territory availability status' },
    { iconMdi: 'mdi:map-marker-path', label: 'Expansion opportunities' },
  ],
  cta: { label: 'View Territory Map', href: '#partner-register' },
}

export const testimonialsSection = {
  kicker: 'Success Stories',
  title: 'Stories from our <span class="text-gradient-brand">Partner Network</span>',
  classes: '!px-0 !py-0',
  description:
    'Hear from channel partners who are building successful education businesses with Indian Mentors.',
}

export const partnerTestimonials: PartnerTestimonial[] = [
  {
    id: 'partner-1',
    quote:
      'Partnering with Indian Mentors gave me a structured way to serve my local community. The onboarding was smooth and support has been consistent throughout.',
    name: 'Rajesh Kumar',
    role: 'City Channel Partner',
    location: 'Pune, Maharashtra',
  },
  {
    id: 'partner-2',
    quote:
      'The territory model and lead management system helped me focus on building relationships rather than worrying about operations. A truly scalable opportunity.',
    name: 'Priya Sharma',
    role: 'Local Area Partner',
    location: 'Jaipur, Rajasthan',
  },
  {
    id: 'partner-3',
    quote:
      'As a regional partner, I appreciate the clear hierarchy and business development support. Indian Mentors makes expansion across districts achievable.',
    name: 'Anil Mehta',
    role: 'Regional Partner',
    location: 'Gujarat',
  },
]

export const faqSection = {
  kicker: 'Frequently Asked Questions',
  title: 'Frequently asked <span class="text-gradient-brand">questions</span>',
  classes: '!px-0 !py-0',
  description: 'Common questions about the partnership program',
}

export const partnerFaqs: PartnerFaqItem[] = [
  {
    id: 'experience',
    question: 'Do I need experience in education?',
    answer:
      'Prior experience is helpful but not mandatory. Training and operational support will be provided.',
  },
  {
    id: 'full-time',
    question: 'Is this a full-time opportunity?',
    answer:
      'Partners may operate full-time or part-time, depending on their availability and business goals.',
  },
  {
    id: 'start-time',
    question: 'How soon can I start working?',
    answer:
      'Most partners can begin operations within a few weeks after onboarding.',
  },
]

export const finalCta = {
  title: 'Become a Channel Partner Today',
  description:
    'Join the Indian Mentors Channel Partner Network and contribute to delivering high-quality personalised tutoring services to students across India.',
  primaryCta: { label: 'Apply Now', href: '#partner-register' },
  secondaryCta: { label: 'Talk to a Partnership Expert', href: 'tel:+917389563564' },
  closingTitle: 'Start Your Partnership Journey with Indian Mentors',
  closingStatement:
    'Together, we can create a strong academic support ecosystem that benefits students, parents, tutors, and education partners.',
}
