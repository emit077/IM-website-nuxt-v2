import type { TrustIndicatorItem } from '~/components/ui/TrustIndicatorsLayout.vue'

export type ProcessStep = {
  no: string
  iconMdi: string
  /** Short label for top tabs / accordion headers */
  tabTitle: string
  /** Full title shown in the detail panel */
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
  secondaryCta: { label: 'Explore Available Territories', href: '#territory-structure' },
}

export const heroTrustStats: TrustIndicatorItem[] = [
  {
    value: '1000+',
    label: 'Service Territories',
    icon: 'solar:map-point-bold-duotone',
  },
  {
    value: '100+',
    label: 'Channel Partners',
    icon: 'solar:users-group-rounded-bold-duotone',
  },
  {
    value: '25+',
    label: 'States & UTs',
    icon: 'solar:map-bold-duotone',
  },

  {
    value: '100%',
    label: 'Transparent Earnings',
    icon: 'solar:wallet-money-bold-duotone',
  },
]

export const aboutSection = {
  kicker: 'Channel Partner Program',
  title: 'Unlock Growth With Our <span class="text-blue-600">Channel Partner Program</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  description:
    'Indian Mentors is expanding its nationwide network of channel partners to connect students with verified and qualified tutors for personalised academic support.',
  image: 'assets/img/about/images2.jpg',
  secondaryImage: 'assets/img/about/images4.jpg',
  stats: [
    {
      value: '200+',
      label: 'Service territories',
      iconMdi: 'mdi:map-marker',
    },
    {
      value: '100+',
      label: 'Active partners',
      iconMdi: 'mdi:account-group-outline',
    },
  ],
  features: [
    {
      no: '01',
      iconMdi: 'mdi:map-marker-radius-outline',
      title: 'Defined territories',
      description:
        'Partners operate within defined territories and help students access one-to-one tutoring solutions tailored to their learning needs.',
    },
    {
      no: '02',
      iconMdi: 'mdi:clipboard-check-outline',
      title: 'Structured partnership model',
      description:
        'Our structured partnership model ensures that partners receive operational guidance, lead support, and business opportunities while contributing to the growth of quality education services.',
    },
    {
      no: '03',
      iconMdi: 'mdi:hand-heart-outline',
      title: 'Guidance at every step',
      description:
        'From onboarding to local growth, every partner gets operational guidance, lead support, and clear business opportunities.',
    },
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
  kicker: 'How Partners Earn with Indian Mentors',
  title: 'Revenue Split: <span class="text-emerald-300">90% Partner</span> & 10% Indian Mentors',
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
  primaryCta: {
    label: 'Apply Now',
    href: '#partner-register',
  },
  secondaryCta: {
    label: 'Explore Investment & Revenue-Sharing Model',
    href: '/channel-partner/investment',
  },
}

export const whyPartnerSection = {
  kicker: 'Why Partner with Indian Mentors?',
  title: ' Join the Indian Mentors <span class="text-gradient-brand">Channel Partner Network</span>',
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
  kicker: 'Channel Partner Opportunities',
  title: 'Grow Through  <span class="text-gradient-brand">Strategic Partnerships</span>',
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
  title: 'Channel Partner  <span class="text-gradient-brand">Territory  Framework</span>',
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
  title: ' The Process of Becoming a <span class="text-gradient-brand">Channel Partner</span>',
  classes: '!px-0 !py-0',
  description:
    'Our partnership journey is designed to be simple, transparent, and professionally guided.',
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
    tabTitle: 'Submit Application',
    title: 'Submit Partnership Application',
    description:
      'Complete the online Channel Partner application form to express your interest in joining the Indian Mentors partner network.',
    points: [
      'Submit your basic professional details',
      'Select your preferred territory',
      'Share your business background',
      'Provide your partnership interests',
    ],
  },
  {
    no: '02',
    iconMdi: 'mdi:phone-in-talk-outline',
    tabTitle: 'Initial Discussion',
    title: 'Initial Discussion',
    description:
      'Our partnership team will connect with you to understand your profile, goals, and suitability for the partnership opportunity.',
    points: [
      'Discuss your professional background',
      'Understand your preferred territory',
      'Review your local market knowledge',
      'Explore your business goals and expectations',
    ],
  },
  {
    no: '03',
    iconMdi: 'mdi:check-decagram-outline',
    tabTitle: 'Partnership Approval',
    title: 'Partnership Approval',
    description:
      'After evaluating your application and discussion, eligible applicants will receive official partnership confirmation and documentation.',
    points: [
      'Confirm your allocated territory',
      'Review the partnership agreement',
      'Understand operational guidelines',
      'Complete the required formalities',
    ],
  },
  {
    no: '04',
    iconMdi: 'mdi:school-outline',
    tabTitle: 'Onboarding',
    title: 'Onboarding and Training ',
    description:
      'Approved Channel Partners receive structured onboarding and training to confidently manage their regional partnership operations.',
    points: [
      'Understand the personalised tutoring model',
      'Learn parent counselling and student assessment',
      'Understand student enrollment workflows',
      'Get familiar with CRM and lead management',
    ],
  },
  {
    no: '05',
    iconMdi: 'mdi:rocket-launch-outline',
    tabTitle: 'Start Operations',
    title: 'Start Operations',
    description:
      'Once onboarding is complete, you can begin building your territory and growing your education services with Indian Mentors.',
    points: [
      'Manage student enquiries',
      'Coordinate demo tutoring sessions',
      'Facilitate student enrollments',
      'Expand the tutor network in your region',
    ],
  },
]

export const whoCanApplySection = {
  kicker: 'Who Can Become a Channel Partner?',
  title: 'Eligibility to Join Our  Channel Partner <br> Network',
  description:
    'We welcome applications from individuals and organisations interested in contributing to the education sector.',
  suitableLabel: 'Suitable partners include:',
  note: 'No large infrastructure investment is required to begin.',
}

export const eligibleApplicants = [
  { iconMdi: 'mdi:lightbulb-on-outline', label: 'EdTech entrepreneurs' },
  { iconMdi: 'mdi:briefcase-account-outline', label: 'Education consultancies' },
  { iconMdi: 'mdi:school-outline', label: 'School Coordinators' },
  { iconMdi: 'mdi:university', label: 'College Coordinators' },
  { iconMdi: 'mdi:presentation', label: 'Coaching centre owners' },
  { iconMdi: 'mdi:home-account', label: 'Local Tuition bureaus' },
  { iconMdi: 'mdi:compass-outline', label: 'Career guidance professionals' },
  { iconMdi: 'mdi:account-heart-outline', label: 'Educational counsellors' },
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
    location: 'Vijayawada, Andhra Pradesh',
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
  kicker: 'Explore Our Partnership FAQs',
  title: 'Frequently Asked <span class="text-gradient-brand">Questions</span>',
  classes: '!px-0 !py-0',
  // description: 'Common questions about the partnership program',
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
