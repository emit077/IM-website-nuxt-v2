import { externalLinks } from './external-links'

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
  points?: string[]
  accent: 'violet' | 'blue' | 'emerald' | 'orange' | 'indigo'
  cta?: { label: string; href: string; iconMdi?: string }
}

export const heroContent = {
  badge: 'For Tutors',
  title: "Join India's growing network of <span class='text-gradient-brand'>professional mentors</span>",
  subtitle: '',
  description:
    'At Indian Mentors, tutors are not just instructors — they are mentors shaping the academic journeys of students across India. We connect qualified educators with verified student opportunities, structured operational support, and transparent systems — so you can focus on teaching while we handle coordination and administration.',
  audiences: ['School Teachers', 'Subject Experts', 'Home Tutors', 'Academic Professionals'],
  contentClass: '!px-0 !py-0 mx-auto max-w-3xl text-center',
  primaryCta: { label: 'Join as a Teaching Partner', href: externalLinks.tutorRegistration },
  secondaryCta: { label: 'View Registration Plans', href: '#tutor-plans' },
}

export const heroHighlights = [
  { iconMdi: 'mdi:account-check-outline', label: 'Verified Student Leads' },
  { iconMdi: 'mdi:cash-check', label: 'Transparent Payouts' },
  { iconMdi: 'mdi:map-marker-radius-outline', label: 'Pan-India Network' },
  { iconMdi: 'mdi:headset', label: 'Dedicated Tutor Support' },
]

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
    cta: { label: 'Create Free Tutor Profile', href: externalLinks.tutorRegistration },
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
    cta: { label: 'View Tutor Registration Plans', href: externalLinks.tutorRegistration },
    variant: 'featured',
  },
]

export const hiringSteps: HiringStep[] = [
  {
    no: '01',
    iconMdi: 'mdi:account-edit-outline',
    title: 'Register Online',
    description:
      'Create your tutor profile in a few minutes — share academic credentials, teaching preferences, and personal details so we can match you with the right students.',
    points: [
      'Personal and contact information',
      'Academic qualifications and certifications',
      'Subjects, boards, and grade levels you teach',
      'Preferred teaching modes and availability',
    ],
    accent: 'violet',
    cta: {
      label: 'Register Now',
      href: externalLinks.tutorRegistration,
      iconMdi: 'mdi:account-plus-outline',
    },
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

export const complianceSection = {
  badge: 'Compliance & Screening',
  title: 'Trust and safety, built into every profile',
  description:
    'To ensure trust and safety, Indian Mentors follows a strict compliance and screening framework before any tutor is matched with a student.',
  note:
    'Continuous monitoring helps maintain high-quality teaching standards and professional accountability — long after onboarding.',
  classes: '!px-0 !py-0',
  cta: { label: 'View Compliance Standards', href: externalLinks.tutorRegistration },
}

export const complianceChecks = [
  {
    iconMdi: 'mdi:card-account-details-outline',
    title: 'Identity Verification',
    description: "Government ID checks confirm every tutor's identity.",
  },
  {
    iconMdi: 'mdi:certificate-outline',
    title: 'Qualification Validation',
    description: 'Degrees and teaching credentials verified before onboarding.',
  },
  {
    iconMdi: 'mdi:map-marker-check-outline',
    title: 'Address Confirmation',
    description: 'Residential address verified for added accountability.',
  },
  {
    iconMdi: 'mdi:account-search-outline',
    title: 'Background Review',
    description: 'Structured review of professional history and references.',
  },
  {
    iconMdi: 'mdi:briefcase-check-outline',
    title: 'Experience Evaluation',
    description: 'Subject expertise and classroom experience assessed.',
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

export const erpSection = {
  badge: 'ERP System & Transparency',
  title: 'Your teaching, organised by a <span class="text-gradient-brand">smart dashboard</span>',
  description:
    'A structured ERP-based academic management system ensures transparency, accountability, and efficient academic management for every tutor.',
  classes: '!px-0 !py-0',
}

export const earningsSection = {
  badge: 'Earnings & Payout',
  title: 'Teach with purpose. <span class="text-gradient-brand">Earn with clarity.</span>',
  description:
    'Mentor compensation is determined by subject expertise, academic level, and teaching mode. Higher classes and specialised subjects offer enhanced earning potential.',
  classes: '!px-0 !py-0',
  payoutTitle: 'Payout Features',
  cta: { label: 'Start Earning as a Tutor', href: externalLinks.tutorRegistration },
  driversLabel: 'Earnings grow with',
  drivers: [
    { iconMdi: 'mdi:book-open-page-variant-outline', label: 'Subject expertise' },
    { iconMdi: 'mdi:school-outline', label: 'Academic level' },
    { iconMdi: 'mdi:laptop', label: 'Teaching mode' },
  ],
  toast: {
    title: 'Session payout credited',
    detail: 'Class 10 · Mathematics · ₹780',
  },
  activity: [
    { subject: 'Physics', grade: 'Class 12', amount: '₹900', time: '2h ago' },
    { subject: 'English', grade: 'Class 8', amount: '₹650', time: 'Yesterday' },
    { subject: 'Chemistry', grade: 'Class 11', amount: '₹850', time: '2d ago' },
  ],
  cycles: [
    {
      id: 'weekly' as const,
      label: 'Weekly',
      balanceLabel: 'This week',
      balance: '₹6,400',
      trend: '+12% vs last week',
      nextPayout: 'Friday',
      sessions: '8',
      bars: [36, 52, 44, 68, 58, 82, 70],
      chartNote: 'Weekly rhythm — faster cash flow for active tutors',
    },
    {
      id: 'biweekly' as const,
      label: 'Bi-Weekly',
      balanceLabel: 'This cycle',
      balance: '₹12,900',
      trend: '+15% vs last cycle',
      nextPayout: 'in 4 days',
      sessions: '17',
      bars: [42, 58, 48, 72, 64, 88, 76],
      chartNote: 'Bi-weekly balance — steady payouts with session clarity',
    },
    {
      id: 'monthly' as const,
      label: 'Monthly',
      balanceLabel: 'This month',
      balance: '₹24,800',
      trend: '+18% vs last month',
      nextPayout: '1st Apr',
      sessions: '32',
      bars: [48, 62, 55, 78, 70, 94, 86],
      chartNote: 'Monthly overview — clear, trackable growth week by week',
    },
  ],
  preview: {
    label: 'Live earnings preview',
    nextPayoutLabel: 'Next payout',
    sessionsLabel: 'Sessions logged',
    statusLabel: 'Payout status',
    status: 'On track',
  },
}

export const payoutFeatures = [
  {
    no: '01',
    iconMdi: 'mdi:calendar-sync-outline',
    title: 'Flexible payout cycles',
    highlight: 'Weekly · Bi-Weekly · Monthly',
    description: 'Pick a settlement rhythm that matches your cash-flow — get paid on your terms.',
    accent: 'blue' as const,
  },
  {
    no: '02',
    iconMdi: 'mdi:clipboard-text-outline',
    title: 'Session-based tracking',
    highlight: 'Every session counted',
    description: 'Confirmed sessions roll into your earnings automatically — no manual follow-ups.',
    accent: 'emerald' as const,
  },
  {
    no: '03',
    iconMdi: 'mdi:chart-timeline-variant',
    title: 'Clear earnings visibility',
    highlight: 'Live earnings view',
    description: 'See pending, processed, and completed payouts in one transparent dashboard.',
    accent: 'orange' as const,
  },
  {
    no: '04',
    iconMdi: 'mdi:shield-lock-outline',
    title: 'Secure payout system',
    highlight: 'Safe & transparent',
    description: 'Settlements run through a secure system with clear records you can always trust.',
    accent: 'indigo' as const,
  },
]

export const hiringProcessSection = {
  badge: 'Tutor Hiring Process',
  title: 'From registration to your <span class="text-gradient-brand">first session</span>',
  description:
    'A structured onboarding process designed to maintain high academic standards — so students and parents always receive reliable, qualified mentors.',
  classes: '!px-0 !py-0',
  image: '/assets/img/services/home-tutors.webp',
  imageAlt: 'Professional mentor teaching a student — Indian Mentors hiring journey',
  socialProof: 'Trusted by educators teaching across India',
  references: [
    { iconMdi: 'mdi:shield-check-outline', label: 'ID & credential verified' },
    { iconMdi: 'mdi:account-school-outline', label: '5-step guided onboarding' },
    { iconMdi: 'mdi:handshake-outline', label: 'Demo before commitment' },
    { iconMdi: 'mdi:cash-check', label: 'Transparent payouts' },
  ],
}

export const tutorPlansSection = {
  badge: 'Tutor Registration Plans',
  title: 'Flexible plans for <span class="text-gradient-brand">every stage</span> of your career',
  description:
    'Start with a free profile and verification, or go Premium for priority leads, featured visibility, and faster payouts.',
  classes: '!px-0 !py-0',
}

export const browseStudentsSection = {
  badge: 'Browse Student Opportunities',
  title: 'Find students that <span class="text-gradient-brand">match your expertise</span>',
  description:
    'Registered tutors can explore available tutoring opportunities and connect with suitable students to expand their teaching engagements.',
  classes: '!px-0 !py-0',
}

export const tutorPolicySection = {
  badge: 'Tutor Registration Policy',
  title: 'Fair, professional, and <span class="text-gradient-brand">respectful for everyone</span>',
  description:
    'All tutors associated with Indian Mentors follow established policies designed to maintain professional and ethical tutoring practices — ensuring a fair environment for tutors, students, and parents alike.',
  classes: '!px-0 !py-0',
}

export const finalCta = {
  title: 'Start Your Journey as a Tutor',
  description:
    'If you are passionate about teaching and mentoring students, become part of the professional tutor community at Indian Mentors. Join thousands of educators helping students succeed through structured, personalised tutoring.',
  primaryCta: { label: 'Register as a Tutor', href: externalLinks.tutorRegistration },
  secondaryCta: { label: 'Join as a Teaching Partner', href: externalLinks.tutorRegistration },
}
