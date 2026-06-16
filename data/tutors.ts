export type TutorPlan = {
  id: 'free' | 'premium'
  iconMdi: string
  name: string
  price: string
  priceNote?: string
  tagline: string
  description: string
  featuresLabel: string
  features: string[]
  cta: { label: string; href: string }
  variant: 'surface' | 'featured'
}

export type HiringStep = {
  no: string
  iconMdi: string
  title: string
  description: string
  accent: 'violet' | 'blue' | 'emerald' | 'orange' | 'indigo'
}

export const heroContent = {
  badge: 'For Tutors',
  title: "Join India's Growing Network of Professional Mentors",
  description:
    'At Indian Mentors, tutors are not just instructors — they are mentors shaping the academic journeys of students across India. We connect qualified educators with verified student opportunities, structured operational support, and transparent systems — so you can focus on teaching while we handle coordination and administration.',
  audiences: ['School Teachers', 'Subject Experts', 'Home Tutors', 'Academic Professionals'],
  primaryCta: { label: 'Join as a Teaching Partner', href: '#tutor-register' },
  secondaryCta: { label: 'Register as a Tutor', href: '#tutor-register' },
}

export const heroHighlights = [
  { iconMdi: 'mdi:account-check-outline', label: 'Verified Student Leads' },
  { iconMdi: 'mdi:cash-check', label: 'Transparent Payouts' },
  { iconMdi: 'mdi:map-marker-radius-outline', label: 'Pan-India Network' },
  { iconMdi: 'mdi:headset', label: 'Dedicated Tutor Support' },
]

export const quickLinks = [
  {
    id: 'tutors-brochure',
    iconMdi: 'mdi:file-document-outline',
    title: 'Tutors Brochure',
    href: '#tutor-resources',
  },
  {
    id: 'registration-plans',
    iconMdi: 'mdi:credit-card-outline',
    title: 'Registration Plans',
    href: '#tutor-plans',
  },
  {
    id: 'hiring-process',
    iconMdi: 'mdi:clipboard-check-outline',
    title: 'Hiring Process',
    href: '#hiring-process',
  },
  {
    id: 'compliance',
    iconMdi: 'mdi:shield-check-outline',
    title: 'Compliance & Screening',
    href: '#compliance',
  },
  {
    id: 'browse-students',
    iconMdi: 'mdi:account-search-outline',
    title: 'Browse Students',
    href: '#browse-students',
  },
  {
    id: 'tutor-dashboard',
    iconMdi: 'mdi:view-dashboard-outline',
    title: 'Tutor Dashboard',
    href: '#tutor-erp',
  },
]

export const brochureCard = {
  iconMdi: 'mdi:book-open-page-variant-outline',
  badge: 'Tutors Brochure',
  title: 'Everything about partnering with us, in one guide',
  description:
    'Explore the official tutor information brochure from Indian Mentors — a comprehensive overview of our tutor partnership model.',
  points: [
    'Our tutoring ecosystem',
    'Academic coverage and subjects',
    'Teaching modes — home, online, hybrid',
    'Benefits for educators',
    'Tutor earnings and payout structure',
    'Professional standards and expectations',
  ],
  cta: { label: 'Download Tutors Brochure', href: '#tutor-register' },
}

export const landingCard = {
  iconMdi: 'mdi:web',
  badge: 'Tutor Opportunities',
  title: 'See how educators collaborate with Indian Mentors',
  description:
    'Detailed information about how educators across India work with us as teaching partners — and where your registration journey begins.',
  points: [
    'Opportunities for tutors across India',
    'The teaching partnership model',
    'Academic levels and subjects supported',
    'Flexible teaching formats',
    'Benefits of joining the tutor network',
  ],
  cta: { label: 'Explore Tutor Opportunities', href: '#browse-students' },
}

export const tutorPlans: TutorPlan[] = [
  {
    id: 'free',
    iconMdi: 'mdi:rocket-launch-outline',
    name: 'Free Tutor Profile',
    price: '₹0',
    priceNote: 'Start exploring opportunities',
    tagline: 'Begin your tutoring journey at no cost',
    description:
      'Create a tutor profile, complete verification, and explore student opportunities with limited lead access. Ideal for educators getting started on the platform.',
    featuresLabel: 'Included in the Free plan',
    features: [
      'Create and publish your tutor profile',
      'Complete identity and qualification verification',
      'Explore student opportunities near you',
      'Limited student lead access',
      'Standard support during working hours',
    ],
    cta: { label: 'Create Free Tutor Profile', href: '#tutor-register' },
    variant: 'surface',
  },
  {
    id: 'premium',
    iconMdi: 'mdi:star-four-points-outline',
    name: 'Premium Tutor Profile',
    price: 'Paid Plan',
    priceNote: 'for active, growth-focused tutors',
    tagline: 'Priority leads, visibility, and faster payouts',
    description:
      'Designed for active tutors seeking priority student leads, featured visibility, faster verification, and advanced analytics tools to grow their tutoring career.',
    featuresLabel: 'Premium benefits — everything in Free, plus:',
    features: [
      'Higher search visibility across the platform',
      'Unlimited demo opportunities',
      'Priority student lead allocation',
      'Featured profile placement',
      'Faster verification processing',
      'Advanced analytics and performance tools',
      'Dedicated tutor support',
      'Faster payouts and financial tracking',
    ],
    cta: { label: 'View Tutor Registration Plans', href: '#tutor-register' },
    variant: 'featured',
  },
]

export const hiringSteps: HiringStep[] = [
  {
    no: '01',
    iconMdi: 'mdi:account-edit-outline',
    title: 'Register Online',
    description: 'Complete your tutor profile with academic and personal details.',
    accent: 'violet',
  },
  {
    no: '02',
    iconMdi: 'mdi:shield-account-outline',
    title: 'Profile Verification & Onboarding',
    description: 'Identity, qualification, and address verification for trust and safety.',
    accent: 'blue',
  },
  {
    no: '03',
    iconMdi: 'mdi:account-multiple-plus-outline',
    title: 'Get Student Leads',
    description: 'Students are matched based on subject, class, location, and availability.',
    accent: 'emerald',
  },
  {
    no: '04',
    iconMdi: 'mdi:presentation-play',
    title: 'Conduct Demo Session',
    description: 'Attend a demo class to assess mutual compatibility.',
    accent: 'orange',
  },
  {
    no: '05',
    iconMdi: 'mdi:school-outline',
    title: 'Start Regular Sessions',
    description: 'Begin structured sessions after confirmation.',
    accent: 'indigo',
  },
]

export const complianceChecks = [
  {
    iconMdi: 'mdi:card-account-details-outline',
    title: 'Identity Verification',
    description: 'Government-issued ID checks confirm every tutor is who they say they are.',
  },
  {
    iconMdi: 'mdi:certificate-outline',
    title: 'Qualification Validation',
    description: 'Academic degrees and teaching credentials are validated before onboarding.',
  },
  {
    iconMdi: 'mdi:map-marker-check-outline',
    title: 'Address Confirmation',
    description: 'Residential address verification adds an extra layer of accountability.',
  },
  {
    iconMdi: 'mdi:account-search-outline',
    title: 'Professional Background Review',
    description: 'A structured review of professional history and references.',
  },
  {
    iconMdi: 'mdi:briefcase-check-outline',
    title: 'Teaching Experience Evaluation',
    description: 'Subject expertise and classroom experience are assessed for quality.',
  },
]

export const browseFilters = [
  {
    iconMdi: 'mdi:book-open-page-variant-outline',
    title: 'Subject Requirements',
    description: 'Find students who need exactly what you teach best.',
  },
  {
    iconMdi: 'mdi:school-outline',
    title: 'Student Grade Level',
    description: 'Filter opportunities from primary classes to senior secondary.',
  },
  {
    iconMdi: 'mdi:map-marker-outline',
    title: 'Location or City',
    description: 'Teach near home or expand to new areas across India.',
  },
  {
    iconMdi: 'mdi:laptop',
    title: 'Teaching Mode',
    description: 'Choose online, offline home tuition, or hybrid engagements.',
  },
  {
    iconMdi: 'mdi:clock-outline',
    title: 'Schedule Availability',
    description: 'Pick sessions that fit around your existing commitments.',
  },
]

export const erpFeatures = [
  {
    iconMdi: 'mdi:account-school-outline',
    title: 'Student Assignment Details',
    description: 'Clear visibility of every student assigned to you — subject, grade, and requirements.',
  },
  {
    iconMdi: 'mdi:calendar-clock-outline',
    title: 'Session Scheduling Tools',
    description: 'Plan, reschedule, and manage your tutoring calendar in one place.',
  },
  {
    iconMdi: 'mdi:calendar-check-outline',
    title: 'Attendance Tracking',
    description: 'Digital attendance records for every session — no manual registers.',
  },
  {
    iconMdi: 'mdi:wallet-outline',
    title: 'Earnings Dashboard',
    description: 'Track earnings, payout cycles, and financial history with full transparency.',
  },
  {
    iconMdi: 'mdi:chart-line',
    title: 'Demo Performance Tracking',
    description: 'Monitor demo conversion and feedback to improve your profile strength.',
  },
  {
    iconMdi: 'mdi:message-text-outline',
    title: 'Communication Coordination',
    description: 'Organised communication with students, parents, and the support team.',
  },
]

export const policyPoints = [
  { iconMdi: 'mdi:badge-account-horizontal-outline', title: 'Eligibility Requirements' },
  { iconMdi: 'mdi:handshake-outline', title: 'Code of Professional Conduct' },
  { iconMdi: 'mdi:cash-check', title: 'Payment & Payout Guidelines' },
  { iconMdi: 'mdi:account-heart-outline', title: 'Student Interaction Policies' },
  { iconMdi: 'mdi:swap-horizontal', title: 'Cancellation & Replacement Procedures' },
  { iconMdi: 'mdi:gavel', title: 'Platform Usage Rules' },
]

export const finalCta = {
  title: 'Start Your Journey as a Tutor',
  description:
    'If you are passionate about teaching and mentoring students, become part of the professional tutor community at Indian Mentors. Join thousands of educators helping students succeed through structured, personalised tutoring.',
  primaryCta: { label: 'Register as a Tutor', href: '#tutor-register' },
  secondaryCta: { label: 'Join as a Teaching Partner', href: '#tutor-register' },
}
