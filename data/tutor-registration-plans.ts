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
  title: 'Choose the Right Path<br/>to Start',
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
  { feature: 'Enhanced Verification Support', free: '✗', premium: '✓' },
  { feature: 'Tutor Search Visibility', free: '✓', premium: '✓' },
  { feature: 'Student Opportunities', free: '✓', premium: '✓' },
  { feature: 'Demo Opportunities', free: '✓', premium: '✓' },
  { feature: 'Direct Parent / Student Requests', free: '✗', premium: '✓' },
  { feature: 'Earnings Dashboard', free: '✓', premium: '✓' },
  { feature: 'Advanced Analytics', free: '✗', premium: '✓' },
  { feature: 'Replacement Student Leads', free: '✗', premium: '✓' },
  { feature: 'Public Ratings & Reviews', free: '✗', premium: '✓' },
  { feature: 'Training Resources', free: '✓', premium: '✓' },
  { feature: 'Engagement Tools', free: '✗', premium: '✓' },
  { feature: 'Support', free: '✓', premium: '✓' },
]

export const planDetailedRows: ComparisonRow[] = [
  {
    feature: 'Profile creation & document upload',
    free: 'Create your profile and upload documents at the standard pace.',
    premium: 'Faster review and approval after documents are submitted.',
  },
  {
    feature: 'Verification process',
    free: 'Standard verification queue after profile submission.',
    premium: 'Fast-track verification with extra onboarding support.',
  },
  {
    feature: 'Visibility in tutor searches',
    free: 'Standard listing in applicable tutor search results.',
    premium: 'Featured and highlighted placement in tutor search.',
  },
  {
    feature: 'Demo class opportunities',
    free: 'Limited demos based on student demand and eligibility.',
    premium: 'Expanded demo access where student demand allows.',
  },
  {
    feature: 'Access to student leads',
    free: 'Limited applicable leads matched to your profile.',
    premium: 'Priority access to suitable student requirements.',
  },
  {
    feature: 'Direct requests from parents/students',
    free: 'Not included on the Free profile.',
    premium: 'Receive direct requests where the feature applies.',
  },
  {
    feature: 'Tutor earnings wallet',
    free: 'View eligible earnings in the dashboard.',
    premium: 'Priority payouts with auto-withdraw options where applicable.',
  },
  {
    feature: 'Analytics dashboard',
    free: 'Not included on the Free profile.',
    premium: 'Earnings, demo success, and retention insights.',
  },
  {
    feature: 'Replacement student leads',
    free: 'Not included on the Free profile.',
    premium: 'Replacement leads available when a new match is needed.',
  },
  {
    feature: 'Training & certification',
    free: 'Basic tutor resources and platform guidance.',
    premium: 'Advanced training plus applicable free certifications.',
  },
  {
    feature: 'Public ratings & reviews',
    free: 'Not displayed on the public tutor profile.',
    premium: 'Shown on your public profile to build reputation.',
  },
  {
    feature: 'Engagement tools',
    free: 'Not included on the Free profile.',
    premium: 'Auto greetings and communication tools for engagements.',
  },
  {
    feature: 'Support',
    free: 'Standard support with typical 24–48 hour response.',
    premium: 'Dedicated recruiter and tutor coordination support.',
  },
  {
    feature: 'Annual fee',
    free: '₹0 — no annual registration fee.',
    premium: '₹1,000 per year for Premium profile access.',
  },
]

export const whyPremiumSection = {
  badge: 'Why Choose Premium?',
  title: 'More Tools for Tutors  <span class="text-gradient-brand">Who Want to Grow</span>',
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
  title: 'A Small Annual Investment in Your Teaching Journey',
  description:
    'For eligible tutors, the Premium plan can provide access to enhanced visibility, priority opportunities, additional tools, and expanded support.',
  classes: '!px-0 !py-0',
  price: '₹1,000',
  pricePeriod: '/ Year',
  priceNote: "That's approximately ₹83 per month or less than ₹3 per day.",
  dailyHook: '< ₹3',
  dailyHookLabel: 'per day',
  dailyHookNote: 'One annual plan, billed at ₹1,000',
  breakdown: [
    { value: '₹83', label: 'Per month', iconMdi: 'mdi:calendar-month-outline', featured: false },
    { value: '< ₹3', label: 'Per day', iconMdi: 'mdi:white-balance-sunny', featured: true },
  ],
  valueChainLabel: 'Value proposition',
  valueChain: [
    { label: 'One Annual Plan', iconMdi: 'mdi:clipboard-check-outline' },
    { label: 'More Professional Visibility', iconMdi: 'mdi:account-eye-outline' },
    { label: 'More Platform Capabilities', iconMdi: 'mdi:view-dashboard-outline' },
    { label: 'Better Opportunity Access', iconMdi: 'mdi:briefcase-search-outline' },
  ],
  cta: { label: 'Start Premium Registration', href: externalLinks.tutorRegistration },
}

export const whoChoosesSection = {
  badge: 'Which Plan Is Right for You?',
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
    cta: { label: 'Create Free Profile', href: externalLinks.tutorRegistration },
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
    cta: { label: 'Get  Premium Access', href: externalLinks.tutorRegistration },
  },
  recommendation: [
    { question: 'Just exploring?', answer: 'Start Free.' },
    { question: 'Ready to grow?', answer: 'Choose Premium.' },
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
        'Current Location',
        'Teaching Experience',
        'Name and Contact Details',
        'Academic Qualifications',
        'Subjects and Grades You Teach',
        'Teaching Mode and Availability',
      ],
    },
    {
      title: 'Verification Information',
      iconMdi: 'mdi:file-document-outline',
      items: [
        'Address Documents',
        'Identity Documents',
        'Experience Documents',
        'Qualification Documents',
        'Professional Degree/Certificate',
        'Other Supporting Documents',
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

export const registrationBannerCta = {
  title: "Your Knowledge Can Shape a Student's Future.",
  description: 'Build Your Tutor Profile With Indian Mentors',
  supporting: 'Personalised Education • Trusted Tutors • Professional Opportunities',
  ctas: [
    {
      label: 'Join as a Tutor',
      href: externalLinks.tutorRegistration,
      iconMdi: 'mdi:rocket-launch-outline',
      primary: true,
    },
    {
      label: 'Talk to Tutor Support',
      href: '/contact',
      iconMdi: 'mdi:phone-outline',
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
