import { externalLinks } from './external-links'

export type RegistrationPlanCard = {
  id: 'free' | 'premium'
  iconMdi: string
  name: string
  price: string
  priceNote?: string
  badge?: string
  description: string
  bestForLabel: string
  bestFor: string
  cta: { label: string; href: string }
  variant: 'surface' | 'featured'
}

export type ComparisonRow = {
  feature: string
  free: string
  premium: string
}

export const registrationHero = {
  badge: 'Tutor Registration Plans',
  title: 'Choose the Right Path to Start',
  subtitle: '',
  description:
    'At Indian Mentors, tutors can choose a registration option based on their teaching goals, experience, and level of platform engagement. Whether you are exploring tutoring opportunities for the first time or looking to build a stronger professional presence, our plans are designed to provide a structured pathway into personalised tutoring.',
  caption:
    '',
  promise: 'Create Your Profile → Get Verified → Find Opportunities → Teach → Earn → Grow',
  primaryCta: {
    label: 'Create Free Tutor Profile',
    href: externalLinks.tutorRegistration,
    icon: 'mdi:account-plus-outline',
  },
  secondaryCta: {
    label: 'Explore Premium Plan',
    href: '#premium-plan',
    icon: 'mdi:star-four-points-outline',
  },
  ticker: [
    'Free Profile ₹0',
    'Premium ₹1,000 / Year',
    'Verified Onboarding',
    'Priority Opportunities',
    'Transparent Earnings',
    'Dedicated Support',
  ],
}

export const planDiscoverySection = {
  badge: 'Plan Discovery',
  title: 'Start Free. Upgrade When <span class="text-gradient-brand">You\'re Ready</span>',
  description: 'Choose the registration option that fits your current teaching journey.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
}

export const registrationPlanCards: RegistrationPlanCard[] = [
  {
    id: 'free',
    iconMdi: 'mdi:account-outline',
    name: 'Free Tutor Profile',
    price: '₹0',
    description:
      'A simple way to create your professional tutor profile, complete applicable verification, and explore student opportunities with standard platform access.',
    bestForLabel: 'Best for',
    bestFor: 'New tutors, part-time educators, and tutors exploring the platform.',
    cta: { label: 'Create Free Profile', href: externalLinks.tutorRegistration },
    variant: 'surface',
  },
  {
    id: 'premium',
    iconMdi: 'mdi:star-four-points-outline',
    name: 'Premium Tutor Profile',
    price: '₹1,000',
    priceNote: '/ Year',
    badge: 'Recommended',
    description:
      'An enhanced tutor profile designed for educators seeking greater visibility, priority opportunities, advanced insights, and additional platform support.',
    bestForLabel: 'Best for',
    bestFor: 'Active tutors, professional educators, and tutors seeking consistent opportunities.',
    cta: { label: 'Choose Premium', href: externalLinks.tutorRegistration },
    variant: 'featured',
  },
]

export const freePlanSection = {
  badge: 'Free Tutor Profile',
  title: 'Start Your Tutoring Journey at <span class="text-gradient-brand">No Upfront Cost</span>',
  subtitle: 'Build Your Professional Tutor Presence',
  description:
    'The Free Tutor Profile allows educators to introduce their qualifications, subjects, teaching experience, availability, and preferred teaching formats while accessing applicable opportunities under the current platform terms.',
  classes: '!px-0 !py-0',
  featuresLabel: 'Included Features',
  features: [
    { label: 'Tutor Profile Creation', access: '✓' },
    { label: 'Qualification & Subject Details', access: '✓' },
    { label: 'Teaching Experience', access: '✓' },
    { label: 'Availability & Location', access: '✓' },
    { label: 'Document Submission', access: '✓' },
    { label: 'Standard Verification', access: '✓' },
    { label: 'Student Opportunity Notifications', access: 'Limited' },
    { label: 'Demo Opportunities', access: 'Limited' },
    { label: 'Earnings Dashboard', access: '✓' },
    { label: 'Tutor Resources', access: '✓' },
    { label: 'Standard Support', access: '✓' },
  ],
  bestSuitedLabel: 'Best Suited For',
  bestSuitedFor: [
    'New tutors entering the platform',
    'Part-time educators',
    'Tutors exploring student opportunities',
  ],
  cta: { label: 'Create Free Tutor Profile', href: externalLinks.tutorRegistration },
}

export const premiumPlanSection = {
  badge: 'Premium Tutor Profile',
  title: 'Build a Stronger Presence. Access <span class="text-amber-300">More Opportunities</span>',
  description:
    'The Premium Tutor Profile is designed for tutors who want enhanced platform visibility and additional tools to support their tutoring journey.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  price: '₹1,000',
  priceNote: '/ Year',
  featuresLabel: 'Includes Free Plan Features, Plus',
  features: [
    {
      title: 'Enhanced Profile Visibility',
      description: 'Improve your professional presence across applicable tutor discovery areas.',
      iconMdi: 'mdi:star-outline',
    },
    {
      title: 'Priority Opportunities',
      description: 'Receive priority access to suitable student requirements where applicable.',
      iconMdi: 'mdi:target',
    },
    {
      title: 'Faster Verification',
      description: 'Eligible profiles may receive expedited review and onboarding support.',
      iconMdi: 'mdi:lightning-bolt-outline',
    },
    {
      title: 'Expanded Demo Opportunities',
      description:
        'Access additional demo and teaching opportunities subject to student demand and applicable terms.',
      iconMdi: 'mdi:book-open-page-variant-outline',
    },
    {
      title: 'Advanced Insights',
      description: 'View relevant information about earnings, demos, engagements, and profile performance.',
      iconMdi: 'mdi:chart-box-outline',
    },
    {
      title: 'Enhanced Earnings Tools',
      description: 'Access expanded wallet and financial tracking features where applicable.',
      iconMdi: 'mdi:wallet-outline',
    },
    {
      title: 'Advanced Training Resources',
      description: 'Access additional tutor-development and platform training resources.',
      iconMdi: 'mdi:school-outline',
    },
    {
      title: 'Ratings & Reviews',
      description: 'Build your professional reputation through applicable student and parent feedback.',
      iconMdi: 'mdi:star-half-full',
    },
    {
      title: 'Dedicated Support',
      description: 'Receive enhanced coordination support for applicable tutoring engagements.',
      iconMdi: 'mdi:handshake-outline',
    },
  ],
  bestSuitedLabel: 'Best Suited For',
  bestSuitedFor: [
    'Professional and full-time tutors',
    'Experienced subject specialists',
    'Tutors seeking regular opportunities',
    'Educators building a long-term tutoring profile',
  ],
  cta: { label: 'Upgrade to Premium Tutor', href: externalLinks.tutorRegistration },
}

export const comparisonSection = {
  badge: 'Free vs Premium',
  title: 'Compare Your <span class="text-gradient-brand">Tutor Plan</span>',
  description:
    'Two views of the same plans — a quick overview of platform access, and a detailed breakdown of what changes when you go Premium.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  tabs: [
    { id: 'overview', label: 'Plan Overview' },
    { id: 'detailed', label: 'Detailed Breakdown' },
  ],
  footnote:
    'Student leads, demos, visibility, payouts, and other platform features remain subject to tutor eligibility, student requirements, availability, verification, and current platform policies.',
  freeCta: { label: 'Create Free Profile', href: externalLinks.tutorRegistration },
  premiumCta: { label: 'Choose Premium', href: externalLinks.tutorRegistration },
}

export const planOverviewRows: ComparisonRow[] = [
  { feature: 'Profile Creation', free: '✓', premium: '✓' },
  { feature: 'Qualification Details', free: '✓', premium: '✓' },
  { feature: 'Document Submission', free: '✓', premium: '✓' },
  { feature: 'Standard Verification', free: '✓', premium: '✓' },
  { feature: 'Enhanced Verification Support', free: '—', premium: '✓' },
  { feature: 'Tutor Search Visibility', free: 'Standard', premium: 'Enhanced' },
  { feature: 'Student Opportunities', free: 'Limited / Applicable', premium: 'Priority / Enhanced' },
  { feature: 'Demo Opportunities', free: 'Limited / Applicable', premium: 'Expanded / Applicable' },
  { feature: 'Earnings Dashboard', free: '✓', premium: '✓' },
  { feature: 'Advanced Analytics', free: '—', premium: '✓' },
  { feature: 'Ratings & Reviews', free: 'Applicable', premium: '✓' },
  { feature: 'Training Resources', free: 'Standard', premium: 'Advanced' },
  { feature: 'Support', free: 'Standard', premium: 'Enhanced' },
  { feature: 'Annual Fee', free: '₹0', premium: '₹1,000' },
]

export const planDetailedRows: ComparisonRow[] = [
  { feature: 'Profile creation & document upload', free: '✓', premium: '✓ Faster approval' },
  { feature: 'Verification process', free: 'Standard queue', premium: 'Fast-track verification' },
  { feature: 'Visibility in tutor searches', free: 'Limited', premium: 'Featured & highlighted' },
  { feature: 'Demo class opportunities', free: '1–2 per month', premium: 'Unlimited' },
  { feature: 'Access to student leads', free: 'Limited', premium: 'Priority leads' },
  { feature: 'Direct requests from parents/students', free: '—', premium: '✓ Unlimited' },
  { feature: 'Tutor earnings wallet', free: 'View-only', premium: 'Priority payouts + auto-withdraw' },
  { feature: 'Analytics dashboard', free: '—', premium: 'Earnings, demo success, retention' },
  { feature: 'Replacement student leads', free: '—', premium: '✓ Available' },
  { feature: 'Training & certification', free: 'Basic resources', premium: 'Advanced + free certifications' },
  { feature: 'Public ratings & reviews', free: '—', premium: '✓ Displayed' },
  { feature: 'Engagement tools', free: '—', premium: 'Auto greetings & communication tools' },
  { feature: 'Support', free: 'Standard (24–48 hrs)', premium: 'Dedicated recruiter/tutor support' },
]

export const whyPremiumSection = {
  badge: 'Why Choose Premium?',
  title: 'More Tools for Tutors Who <span class="text-gradient-brand">Want to Grow</span>',
  description:
    'Premium is designed for educators who want to take a more active approach to building their tutoring profile and exploring opportunities through Indian Mentors.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  keyMessage:
    'Premium is not just a registration upgrade — it is a professional growth option for active tutors.',
  advantages: [
    {
      title: 'Greater Visibility',
      description: 'Build a stronger professional profile and improve discoverability where applicable.',
      iconMdi: 'mdi:target',
    },
    {
      title: 'More Opportunities',
      description: 'Access priority or expanded opportunities based on relevant student requirements.',
      iconMdi: 'mdi:trending-up',
    },
    {
      title: 'Better Insights',
      description: 'Use additional platform information to understand your tutoring activity and performance.',
      iconMdi: 'mdi:chart-box-outline',
    },
    {
      title: 'Enhanced Support',
      description: 'Receive additional coordination and tutor-support assistance under the applicable plan.',
      iconMdi: 'mdi:handshake-outline',
    },
  ],
}

export const premiumValueSection = {
  badge: 'Premium Value',
  title: 'A Small Annual Investment in <span class="text-gradient-brand">Your Teaching Journey</span>',
  description:
    'For eligible tutors, the Premium plan can provide access to enhanced visibility, priority opportunities, additional tools, and expanded support.',
  classes: '!px-0 !py-0',
  price: '₹1,000',
  pricePeriod: '/ Year',
  priceNote: "That's approximately ₹83 per month or less than ₹3 per day.",
  breakdown: [
    { value: '₹1,000', label: 'Per year' },
    { value: '₹83', label: 'Per month' },
    { value: '< ₹3', label: 'Per day' },
  ],
  valueChain: [
    'One annual plan',
    'More professional visibility',
    'More platform capabilities',
    'Better opportunity access',
  ],
  cta: { label: 'Start Premium Registration', href: externalLinks.tutorRegistration },
}

export const whoChoosesSection = {
  badge: 'Who Should Choose Which Plan?',
  title: 'Find the Plan That Fits <span class="text-gradient-brand">Your Teaching Goals</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  free: {
    title: 'Choose Free If You Are',
    iconMdi: 'mdi:account-outline',
    items: [
      'New to Indian Mentors',
      'Exploring tutoring opportunities',
      'Teaching part-time',
      'Testing the platform before upgrading',
    ],
    cta: { label: 'Start Free', href: externalLinks.tutorRegistration },
  },
  premium: {
    title: 'Choose Premium If You Are',
    iconMdi: 'mdi:star-four-points-outline',
    items: [
      'Actively seeking students',
      'Teaching professionally',
      'Looking for regular tutoring engagements',
      'Building a long-term tutor profile',
    ],
    cta: { label: 'Go Premium', href: externalLinks.tutorRegistration },
  },
  recommendation: [
    { question: 'Just exploring?', answer: 'Start Free.' },
    { question: 'Ready to grow?', answer: 'Choose Premium.' },
  ],
}

export const journeySection = {
  badge: 'Your Tutor Journey',
  title: 'From Registration to <span class="text-gradient-brand">Regular Teaching</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  summary: 'Register → Verify → Activate → Discover → Demo → Teach → Earn → Grow',
  steps: [
    {
      no: '01',
      title: 'Register',
      description: 'Create your tutor profile with academic, professional, and teaching information.',
      iconMdi: 'mdi:account-edit-outline',
    },
    {
      no: '02',
      title: 'Verify',
      description: 'Submit applicable identity, qualification, address, and professional documents.',
      iconMdi: 'mdi:shield-account-outline',
    },
    {
      no: '03',
      title: 'Activate',
      description: 'Complete the applicable onboarding process and activate your tutor profile.',
      iconMdi: 'mdi:check-decagram-outline',
    },
    {
      no: '04',
      title: 'Discover',
      description: 'Explore relevant student opportunities based on your expertise and availability.',
      iconMdi: 'mdi:account-search-outline',
    },
    {
      no: '05',
      title: 'Demo',
      description: 'Participate in the applicable demo or introductory session.',
      iconMdi: 'mdi:presentation-play',
    },
    {
      no: '06',
      title: 'Confirm',
      description: 'Proceed with regular tutoring after the student or parent confirms the engagement.',
      iconMdi: 'mdi:handshake-outline',
    },
    {
      no: '07',
      title: 'Teach',
      description: 'Deliver structured and personalised learning sessions.',
      iconMdi: 'mdi:human-male-board',
    },
    {
      no: '08',
      title: 'Earn',
      description: 'Track eligible session earnings and applicable payouts through the platform.',
      iconMdi: 'mdi:cash-multiple',
    },
  ],
}

export const matchingSection = {
  badge: 'How Student Matching Works',
  title: 'Opportunities Aligned With <span class="text-gradient-brand">Your Tutor Profile</span>',
  description:
    "Indian Mentors can identify suitable tutoring opportunities by considering relevant information from your tutor profile and the student's requirements.",
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  keyMessage:
    'The better your profile represents your expertise, the easier it is to identify relevant opportunities.',
  factors: [
    {
      title: 'Subject Expertise',
      description: 'Match opportunities with your teaching subjects and expertise.',
      iconMdi: 'mdi:book-open-page-variant-outline',
    },
    {
      title: 'Academic Level',
      description: "Consider the student's class, grade, or academic level.",
      iconMdi: 'mdi:school-outline',
    },
    {
      title: 'Location',
      description: 'For offline opportunities, consider applicable service locations.',
      iconMdi: 'mdi:map-marker-outline',
    },
    {
      title: 'Teaching Mode',
      description: 'Home, online, hybrid, travel, shadow, live-in, or custom requirements.',
      iconMdi: 'mdi:laptop',
    },
    {
      title: 'Availability',
      description: 'Consider your preferred days, timings, and teaching schedule.',
      iconMdi: 'mdi:clock-outline',
    },
    {
      title: 'Experience',
      description: 'Relevant academic and teaching experience may be considered.',
      iconMdi: 'mdi:briefcase-outline',
    },
  ],
}

export const requirementsSection = {
  badge: 'What You Need to Register',
  title: 'Prepare Your <span class="text-gradient-brand">Tutor Profile</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  proTip:
    'Keep your profile information accurate, complete, and up to date to improve the quality of opportunity matching.',
  groups: [
    {
      title: 'Basic Information',
      iconMdi: 'mdi:card-account-details-outline',
      items: [
        'Name and contact details',
        'Current location',
        'Academic qualifications',
        'Teaching experience',
        'Subjects you teach',
        'Classes or grades supported',
        'Preferred teaching mode',
        'Availability',
      ],
    },
    {
      title: 'Verification Information',
      iconMdi: 'mdi:file-document-outline',
      items: [
        'Identity documents',
        'Qualification documents',
        'Address information',
        'Relevant professional information',
        'Other documents required under applicable verification procedures',
      ],
    },
  ],
}

export const verificationSection = {
  badge: 'Verification & Quality Screening',
  title: 'Building a <span class="text-gradient-brand">Trusted Tutor Network</span>',
  description:
    'Indian Mentors follows applicable tutor verification and screening procedures to support a professional and trustworthy learning environment.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  keyMessage: 'Every strong tutor profile begins with accurate information and responsible verification.',
  checksLabel: 'Verification May Include',
  checks: [
    'Identity Verification',
    'Qualification Review',
    'Address Verification',
    'Experience Review',
    'Subject Expertise',
    'Profile Assessment',
    'Required Documentation',
  ],
  cta: { label: 'View Tutor Verification Standards', href: '/tutors#tutor-verification' },
}

export const resourcesSection = {
  badge: 'Tutor Support & Resources',
  title: 'Everything You Need to <span class="text-gradient-brand">Get Started</span>',
  description:
    'Tutors can access applicable resources designed to help them understand the platform, prepare for tutoring engagements, and maintain professional teaching standards.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  cta: { label: 'Explore Tutor Resources', href: '/tutors#tutor-resources' },
  items: [
    {
      title: 'Tutor Guidelines',
      description: 'Understand platform processes and responsibilities.',
      iconMdi: 'mdi:book-open-page-variant-outline',
    },
    {
      title: 'Demo Guidance',
      description: 'Prepare for effective introductory sessions.',
      iconMdi: 'mdi:presentation-play',
    },
    {
      title: 'Verification Checklist',
      description: 'Understand the information required during onboarding.',
      iconMdi: 'mdi:clipboard-check-outline',
    },
    {
      title: 'Communication Guidance',
      description: 'Follow professional student and parent communication practices.',
      iconMdi: 'mdi:message-text-outline',
    },
    {
      title: 'Digital Teaching Resources',
      description: 'Improve your online teaching workflow.',
      iconMdi: 'mdi:laptop',
    },
    {
      title: 'Policies & Agreements',
      description: 'Review applicable tutor terms and platform policies.',
      iconMdi: 'mdi:file-document-outline',
    },
  ],
}

export const dashboardSection = {
  badge: 'Tutor Dashboard',
  title: 'Manage Your Teaching Journey in <span class="text-gradient-brand">One Place</span>',
  description:
    'Once activated, tutors can use the applicable dashboard features to manage their tutoring activities.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    {
      title: 'Profile',
      description: 'Qualifications, subjects, experience, and availability.',
      iconMdi: 'mdi:account-outline',
    },
    {
      title: 'Browse Students',
      description: 'Explore relevant student requirements.',
      iconMdi: 'mdi:account-search-outline',
    },
    {
      title: 'Demo',
      description: 'View applicable demo assignments and information.',
      iconMdi: 'mdi:presentation-play',
    },
    {
      title: 'Sessions',
      description: 'Track scheduled and completed tutoring sessions.',
      iconMdi: 'mdi:calendar-clock-outline',
    },
    {
      title: 'Batches',
      description: 'Manage applicable batch or student assignments.',
      iconMdi: 'mdi:google-classroom',
    },
    {
      title: 'Earnings',
      description: 'View eligible earnings and wallet information.',
      iconMdi: 'mdi:wallet-outline',
    },
    {
      title: 'Messages',
      description: 'Manage approved communication and coordination.',
      iconMdi: 'mdi:message-text-outline',
    },
    {
      title: 'Feedback',
      description: 'Review applicable student or parent feedback.',
      iconMdi: 'mdi:star-outline',
    },
  ],
}

export const earningsSection = {
  badge: 'Earnings & Payouts',
  title: 'Track Your Teaching Earnings <span class="text-gradient-brand">Transparently</span>',
  description:
    'Indian Mentors provides structured processes for recording eligible tutoring sessions and managing applicable tutor earnings.',
  classes: '!px-0 !py-0',
  flowLabel: 'Payout Flow',
  flow: [
    { label: 'Session Completed', iconMdi: 'mdi:clipboard-check-outline' },
    { label: 'Attendance Approved', iconMdi: 'mdi:check-circle-outline' },
    { label: 'Earnings Credited', iconMdi: 'mdi:cash-plus' },
    { label: 'Wallet Balance Updated', iconMdi: 'mdi:wallet-outline' },
    { label: 'Eligible Withdrawal', iconMdi: 'mdi:bank-transfer-out' },
  ],
  benefitsLabel: 'Tutor Benefits',
  benefits: [
    'Session-Based Tracking',
    'Earnings Dashboard',
    'Tutor Wallet',
    'Applicable Withdrawal Options',
    'Financial Records',
  ],
  note: 'Commissions, deductions, eligibility, payout timing, and withdrawal conditions are governed by the applicable tutor agreement and current platform policies.',
  cta: { label: 'View Earnings Policy', href: '/tutors#tutor-standards' },
}

export const profileStrengthSection = {
  badge: 'Build Your Tutor Profile',
  title: 'Your Profile Is Your <span class="text-gradient-brand">Professional Identity</span>',
  description:
    'A complete and professional tutor profile helps present your expertise clearly and supports more relevant opportunity matching.',
  classes: '!px-0 !py-0',
  checklistLabel: 'Profile Strength Checklist',
  checklist: [
    'Complete Qualifications',
    'Add Relevant Experience',
    'Select Accurate Subjects',
    'Define Classes You Teach',
    'Add Teaching Preferences',
    'Update Availability',
    'Complete Verification',
    'Maintain Professional Feedback',
  ],
  keyMessage:
    'Complete Profile + Verified Credentials + Quality Teaching = Stronger Professional Presence',
}

export const upgradePathSection = {
  badge: 'Upgrade When You\'re Ready',
  title: 'Start Free. Grow With <span class="text-gradient-brand">Premium</span>',
  description:
    'You do not need to commit to a premium plan immediately. Begin with the Free Tutor Profile and consider upgrading when you are ready for enhanced platform access.',
  classes: '!px-0 !py-0',
  pathLabel: 'Upgrade Path',
  steps: [
    'Free Profile',
    'Build & Verify Your Profile',
    'Explore Opportunities',
    'Gain Teaching Experience',
    'Upgrade to Premium',
    'Access Additional Features',
  ],
  cta: { label: 'Upgrade to Premium', href: externalLinks.tutorRegistration },
}

export const registrationFaqSection = {
  badge: 'Frequently Asked Questions',
  title: 'Questions About <span class="text-gradient-brand">Tutor Plans</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
}

export const registrationFaqs = [
  {
    id: 'free-really-free',
    question: 'Is the Free Tutor Profile really free?',
    answer:
      'Yes. Tutors can create a Free Tutor Profile without an upfront registration fee, subject to the applicable platform terms.',
  },
  {
    id: 'premium-fee',
    question: 'What is the Premium Tutor Profile fee?',
    answer:
      'The proposed Premium Tutor Profile is ₹1,000 per year, subject to the applicable plan terms.',
  },
  {
    id: 'start-free-upgrade',
    question: 'Can I start with Free and upgrade later?',
    answer:
      'Yes. Tutors can begin with the Free Profile and choose to upgrade when they want additional platform features.',
  },
  {
    id: 'premium-guarantee',
    question: 'Does Premium guarantee students?',
    answer:
      'No. A Premium profile does not guarantee student assignments, demos, income, or a specific number of leads. Opportunities depend on student requirements, tutor eligibility, availability, location, subject demand, and other applicable factors.',
  },
  {
    id: 'online-offline',
    question: 'Can I teach online and offline?',
    answer:
      'Yes, where suitable opportunities are available. Tutors can indicate their preferred teaching formats, including home, online, and hybrid tutoring.',
  },
  {
    id: 'how-matched',
    question: 'How are tutor opportunities matched?',
    answer:
      'Relevant factors may include subject expertise, class level, location, availability, teaching mode, experience, and student requirements.',
  },
  {
    id: 'earnings-calculated',
    question: 'How are tutor earnings calculated?',
    answer:
      'Tutor earnings are determined according to the applicable tutor commission structure, engagement terms, completed sessions, deductions, and platform policies.',
  },
  {
    id: 'upgrade-process',
    question: 'Can I upgrade from Free to Premium?',
    answer: 'Yes, subject to the applicable upgrade process and plan availability.',
  },
]

export const planTermsSection = {
  badge: 'Important Plan Terms',
  title: 'Transparent Plans. <span class="text-gradient-brand">Clear Expectations.</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  noteLabel: 'Please Note',
  points: [
    'Registration plans provide access to specified platform features and do not guarantee student assignments.',
    'Student leads and demo opportunities depend on actual student demand and tutor suitability.',
    'Premium features are subject to eligibility and applicable platform policies.',
    'Verification does not automatically constitute acceptance for every tutoring assignment.',
    'Tutor commissions, deductions, payouts, and withdrawal conditions are governed by the applicable tutor agreement.',
    'Plan benefits, pricing, and platform features may be updated by Indian Mentors from time to time.',
    'Tutors are required to follow applicable professional, safety, communication, and platform policies.',
  ],
  cta: { label: 'Read Tutor Terms & Conditions', href: '/tutors#tutor-standards' },
}

export const registrationFinalCta = {
  badge: 'Ready to Start?',
  title: 'Your Teaching Journey Begins With One Profile',
  description:
    'Whether you are an experienced teacher, subject specialist, home tutor, online educator, or academic professional, Indian Mentors gives you a structured way to present your expertise and explore personalised tutoring opportunities.',
  supporting:
    'Create your profile. Complete your verification. Discover suitable opportunities. Start mentoring.',
  ctas: [
    {
      label: 'Create Free Tutor Profile',
      href: externalLinks.tutorRegistration,
      iconMdi: 'mdi:account-plus-outline',
      primary: true,
    },
    {
      label: 'Choose Premium Tutor',
      href: externalLinks.tutorRegistration,
      iconMdi: 'mdi:star-four-points-outline',
    },
    { label: 'Talk to Tutor Support', href: '/contact', iconMdi: 'mdi:phone-outline' },
  ],
}

export const registrationBannerCta = {
  title: "Your Knowledge Can Shape a Student's Future.",
  description: 'Build Your Tutor Profile With Indian Mentors',
  supporting: 'Personalised Education • Trusted Tutors • Professional Opportunities',
  ctas: [
    {
      label: 'Register → Verify → Teach → Earn → Grow',
      href: externalLinks.tutorRegistration,
      iconMdi: 'mdi:rocket-launch-outline',
      primary: true,
    },
  ],
}

export const stickyCta = {
  freeLabel: 'Register Free',
  freeHref: externalLinks.tutorRegistration,
  premiumLabel: 'Go Premium',
  premiumHref: externalLinks.tutorRegistration,
  note: 'Free ₹0 · Premium ₹1,000 / year',
}
