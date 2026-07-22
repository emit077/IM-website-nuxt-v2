import type { TrustIndicatorItem } from '~/components/ui/TrustIndicatorsLayout.vue'

export const investmentHero = {
  badge: 'Channel Partner · Authorised Reseller',
  title:
    'Grow with India’s <span class="text-gradient-brand">Tutoring</span> Partner Network',
  subtitle: '<span class="text-gradient-brand">Indian Mentors</span> - Investment & Revenue-Sharing Model',
  description:
    'Become an Authorised Channel Partner and operate a defined territory — earning from student enrollments and subscriptions, with access to our platform, brand, and national academic network.',
  supporting:
    'Through our structured investment and revenue-sharing model, partners gain access to the Indian Mentors digital platform, brand ecosystem, operational support, and national academic network.',
  caption: 'Build a Local Education Business with the Strength of a National Academic Platform.',
  backgroundImage: 'assets/img/hero/hero-1.png',
  contentClass: '',
  primaryCta: { label: 'Apply to Become a Channel Partner', href: '#partner-investment-register' },
  secondaryCta: { label: 'Download Partnership Details', href: '#territory-investment' },
}

export const investmentHeroStats: TrustIndicatorItem[] = [
  {
    value: '90%',
    label: 'Partner  Share',
    icon: 'solar:wallet-money-bold-duotone',
  },
  {
    value: '10% ',
    label: 'Platform Share',
    icon: 'solar:pie-chart-2-bold-duotone',
  },
  {
    value: '100%',
    label: 'Deposit Refundable  ',
    icon: 'solar:shield-check-bold-duotone',
  },
  {
    value: '1 Crore+',
    label: 'Annual Revenue Potential',
    icon: 'solar:chart-bold-duotone',
  },
]

export const investmentStructureSection = {
  kicker: 'Investment Framework',
  title: 'Channel Partner <span class="text-gradient-brand">Investment Structure</span>',
  classes: '!px-0 !py-0',
  description:
    'To ensure professional operations and long-term commitment, Indian Mentors operates with a structured investment framework for Authorised Resellers.',
  intro:
    'This structure enables partners to operate within a designated academic territory while accessing the Indian Mentors platform and operational ecosystem.',
  components: [
    {
      iconMdi: 'solar:shield-check-bold-duotone',
      title: 'Security Deposit',
      description: 'A one-time refundable amount that secures your authorised operational territory.',
      tag: 'One-time · Refundable',
      accent: 'emerald',
    },
    {
      iconMdi: 'solar:widget-5-bold-duotone',
      title: 'Digital Platform Licensing Fee (ERP)',
      description: 'Subscription access to the Indian Mentors digital platform and operational tools.',
      tag: 'Subscription · ERP Access',
      accent: 'blue',
    },
  ],
}

export const securityDepositSection = {
  kicker: 'Security Deposit',
  title: 'Security Deposit <span class="text-gradient-brand">(Refundable)</span>',
  classes: '!px-0 !py-0',
  description:
    'The Security Deposit is a one-time refundable amount submitted by the Channel Partner to secure the authorised operational territory.',
  body: 'This deposit ensures professional conduct, commitment to service quality, and adherence to the Indian Mentors operational guidelines.',
  note: 'The deposit value depends on market potential, student population, and service demand.',
  featuresTitle: 'Key Features',
  features: [
    'Fully refundable upon termination of the partnership agreement',
    'Secures exclusive or semi-exclusive operational territory',
    'Protects brand integrity and service standards',
    'Ensures responsible platform usage',
  ],
  tableTitle: 'Security Deposit Based on Territory Level',
  tableDescription: 'Security deposits vary depending on the geographical scope of the operational territory.',
  territoryLevels: [
    { level: 'Pincode Territory', coverage: 'Single locality' },
    { level: 'City Territory', coverage: 'Entire city' },
    { level: 'District Territory', coverage: 'Multi-city district' },
    { level: 'Division Territory', coverage: 'Regional coverage' },
    { level: 'State Territory', coverage: 'State-wide operations' },
    { level: 'Zone Territory', coverage: 'Multi-state regional operations' },
  ],
}

export const platformLicenseSection = {
  kicker: 'Platform License',
  title: 'Digital Platform <span class="text-gradient-brand">Licensing Fee</span>',
  classes: '!px-0 !py-0',
  description:
    'Channel Partners operate using the Indian Mentors Digital Platform, which enables seamless student management, tutor coordination, and academic service delivery.',
  body: 'Partners subscribe to the Digital Platform License to access this ecosystem.',
  note: 'License pricing varies based on territory scale and operational coverage.',
  plansTitle: 'License Duration Options',
  plans: [
    {
      name: 'Starter Plan',
      duration: '1 Year',
      iconMdi: 'mdi:rocket-launch-outline',
      description: 'Ideal for partners testing a territory with a flexible, low-commitment entry.',
    },
    {
      name: 'Growth Plan',
      duration: '2 Years',
      iconMdi: 'mdi:trending-up',
      popular: true,
      description: 'Best balance of value and runway to build enrollment and recurring revenue.',
    },
    {
      name: 'Strategic Plan',
      duration: '5 Years',
      iconMdi: 'mdi:crown-outline',
      description: 'Long-term license for partners scaling across city, district, or regional coverage.',
    },
  ],
  accessTitle: 'Platform Access Includes',
  accessIncludes: [
    { label: 'Student Enrollment Management', iconMdi: 'solar:user-plus-bold' },
    { label: 'Tutor Allocation & Tracking', iconMdi: 'solar:users-group-two-rounded-bold' },
    { label: 'Subscription Plan Management', iconMdi: 'solar:card-2-bold' },
    { label: 'Payment Reports & Revenue Tracking', iconMdi: 'solar:chart-2-bold' },
    { label: 'CRM & Communication Tools', iconMdi: 'solar:chat-round-line-bold' },
    { label: 'Academic Dashboard', iconMdi: 'solar:notebook-bold' },
    { label: 'Marketing and Branding Support', iconMdi: 'solar:presentation-graph-bold' },
    { label: 'Recruitment & Training Support', iconMdi: 'solar:users-group-two-rounded-bold' },
  ],
}

export const territoryInvestmentSection = {
  kicker: 'Partner Investment Overview',
  title: 'Sample Partnership  <span class="text-gradient-brand">Investment Structure </span>',
  classes: '!px-0 !py-0',
  description:
    'Below is an illustrative example of the investment structure for different operational territories.',
  note: 'Actual pricing may vary based on city category and population size.',
  closing:
    'This tiered investment model ensures scalability, allowing partners to start locally and expand their territory over time.',
  columns: [
    { key: 'territory', label: 'Territory' },
    { key: 'coverage', label: 'Coverage' },
    { key: 'deposit', label: 'Security Deposit', sub: 'Refundable' },
    { key: 'license1', label: 'License (1Y)' },
    { key: 'license2', label: 'License (2Y)' },
    { key: 'license5', label: 'License (5Y)', sub: 'Best Value', accent: true },
  ],
  rows: [
    {
      level: 'Pincode',
      initial: 'P',
      iconMdi: 'mdi:mailbox-outline',
      coverage: 'Single locality',
      deposit: '₹25,000',
      license1: '₹15,000',
      license2: '₹25,000',
      license5: '₹50,000',
    },
    {
      level: 'City',
      initial: 'C',
      iconMdi: 'mdi:city-variant-outline',
      coverage: 'Full city operations',
      deposit: '₹1,00,000',
      license1: '₹50,000',
      license2: '₹85,000',
      license5: '₹2,00,000',
    },
    {
      level: 'District',
      initial: 'D',
      iconMdi: 'mdi:map-marker-radius-outline',
      coverage: 'Multiple cities',
      deposit: '₹2,50,000',
      license1: '₹1,00,000',
      license2: '₹1,75,000',
      license5: '₹4,00,000',
    },
    {
      level: 'Division',
      initial: 'D',
      iconMdi: 'mdi:view-grid-outline',
      coverage: 'Regional cluster',
      deposit: '₹5,00,000',
      license1: '₹2,00,000',
      license2: '₹3,50,000',
      license5: '₹8,00,000',
    },
    {
      level: 'State',
      initial: 'S',
      iconMdi: 'mdi:map-outline',
      coverage: 'Statewide operations',
      deposit: '₹10,00,000',
      license1: '₹4,00,000',
      license2: '₹7,00,000',
      license5: '₹15,00,000',
      highlight: true,
    },
    {
      level: 'Zone',
      initial: 'Z',
      iconMdi: 'mdi:map-legend',
      coverage: 'Multi-state region',
      deposit: '₹25,00,000',
      license1: '₹8,00,000',
      license2: '₹14,00,000',
      license5: '₹30,00,000',
    },
  ],
}

export const revenueSharingOverview = {
  kicker: 'Revenue Sharing',
  title: 'Revenue Sharing <span class="text-gradient-brand">Model</span>',
  classes: '!px-0 !py-0',
  description:
    'Indian Mentors offers a balanced and sustainable revenue-sharing framework between the platform and the local Channel Partner.',
  sourcesTitle: 'Partners earn revenue from:',
  sources: [
    {
      no: '01',
      iconMdi: 'mdi:account-school-outline',
      title: 'Student Enrollment Fees',
      description: 'Commission on every student enrollment generated within your territory.',
    },
    {
      no: '02',
      iconMdi: 'mdi:calendar-sync-outline',
      title: 'Subscription-Based Tutoring Services',
      description: 'Recurring earnings from home, online, and hybrid tutoring subscriptions.',
    },
  ],
}

export const enrollmentFeeShareSection = {
  kicker: 'Enrollment Fee',
  title: 'Revenue Sharing on <span class="text-gradient-brand">Enrollment Fee</span>',
  classes: '!px-0 !py-0',
  description:
    'When a student enrolls through the platform within the partner’s territory, the Enrollment Fee is shared between the Channel Partner and Indian Mentors.',
  partnerShare: {
    label: 'Channel Partner',
    percent: 10,
    detail: 'Commission per enrollment in your territory',
    iconMdi: 'mdi:handshake-outline',
  },
  platformShare: {
    label: 'Indian Mentors',
    percent: 90,
    detail: 'Supports onboarding and platform operations',
    iconMdi: 'mdi:office-building-outline',
  },
  purposeTitle: 'Purpose of Enrollment Fee',
  purposeIntro: 'The enrollment fee supports:',
  purposes: [
    { label: 'Student onboarding', iconMdi: 'mdi:account-school-outline' },
    { label: 'Academic assessment', iconMdi: 'mdi:clipboard-text-outline' },
    { label: 'Tutor matching', iconMdi: 'mdi:account-search-outline' },
    { label: 'Administrative services', iconMdi: 'mdi:briefcase-outline' },
    { label: 'Platform operations', iconMdi: 'mdi:cog-outline' },
  ],
  note: 'Partners receive 10% commission for each enrollment generated within their territory.',
}

export const subscriptionShareSection = {
  kicker: 'Revenue Distribution',
  title: 'A Transparent Revenue-Sharing Structure',
  classes: '!px-0 !py-0',
  description:
    'Build recurring revenue through subscription-based personalised tutoring services. Enjoy a transparent 90:10 revenue split designed to maximise partner earnings.',
  services: ['Home Tutoring', 'Online Tutoring', 'Hybrid Learning Programs'],
  partnerShare: { label: 'Channel Partner', percent: 90, detail: 'Subscription Revenue' },
  platformShare: { label: 'Indian Mentors', percent: 10, detail: 'Platform Fee' },
  closing:
    'Create Long-Term Business Value -  Develop a sustainable education business by combining local partnerships with the reach and resources of Indian Mentors.',
  highlights: [
    {
      iconMdi: 'mdi:wallet-outline',
      title: 'Earn More from Every Subscription',
      description: 'Build recurring income by growing personalised tutoring subscriptions within your territory.',
    },
    {
      iconMdi: 'mdi:shield-check-outline',
      title: 'A Fair & Transparent Distribution',
      description: 'Receive 90% of eligible subscription revenue, with a clearly defined 10% platform share.',
    },
    {
      iconMdi: 'mdi:rocket-launch-outline',
      title: 'Focus on Growth, We Support the Platform',
      description: 'Indian Mentors manages technology, academic systems, customer support, and operational infrastructure.',
    },
  ],
}

export const earningsIllustrationSection = {
  kicker: 'Earnings Example',
  title: 'Partner Earnings <span class="text-gradient-brand">Illustration</span>',
  classes: '!px-0 !py-0',
  description:
    'A simple look at earning potential from a typical city-level tutoring scenario.',
  scenarioBadge: 'City Level · 50 · ₹8,000/mo',
  annual: {
    title: 'Annual partner earnings',
    value: '₹43,20,000',
    subtitle: '90% of ₹48,00,000 total annual revenue',
  },
  monthlyBreakdown: {
    title: 'Monthly Breakdown',
    totalLabel: 'Total Subscription Revenue',
    formula: '50 × ₹8,000',
    total: '₹4,00,000',
    rows: [
      { label: 'Channel Partner (90%)', value: '₹3,60,000', highlight: true },
      { label: 'Indian Mentors (10%)', value: '₹40,000' },
    ],
  },
  annualProjection: {
    title: 'Annual Projection',
    totalLabel: 'Total Annual Revenue',
    total: '₹48,00,000',
    rows: [
      { label: 'Your Annual Earnings', value: '₹43,20,000', highlight: true },
      { label: 'Indian Mentors Annual', value: '₹4,80,000' },
    ],
  },
  scaleTitle: 'Earnings grow with your student base',
  scaleTabs: [
    { id: 'monthly' as const, label: 'Monthly' },
    { id: 'quarterly' as const, label: 'Quarterly' },
    { id: 'halfYearly' as const, label: 'Half Yearly' },
    { id: 'annual' as const, label: 'Annually' },
  ],
  scaleSubtitles: {
    monthly: 'Partner monthly earnings · 90% share',
    quarterly: 'Partner quarterly earnings · 90% share',
    halfYearly: 'Partner half-yearly earnings · 90% share',
    annual: 'Partner annual earnings · 90% share',
  },
  scale: [
    {
      students: 50,
      monthly: '₹3,60,000',
      monthlyShort: '₹3.6L',
      quarterly: '₹10,80,000',
      quarterlyShort: '₹10.8L',
      halfYearly: '₹21,60,000',
      halfYearlyShort: '₹21.6L',
      annual: '₹43,20,000',
      annualShort: '₹43.2L',
      percent: 22,
      highlight: true,
    },
    {
      students: 100,
      monthly: '₹7,20,000',
      monthlyShort: '₹7.2L',
      quarterly: '₹21,60,000',
      quarterlyShort: '₹21.6L',
      halfYearly: '₹43,20,000',
      halfYearlyShort: '₹43.2L',
      annual: '₹86,40,000',
      annualShort: '₹86.4L',
      percent: 32,
    },
    {
      students: 500,
      monthly: '₹36,00,000',
      monthlyShort: '₹36L',
      quarterly: '₹1.08Cr',
      quarterlyShort: '₹1.08Cr',
      halfYearly: '₹2.16Cr',
      halfYearlyShort: '₹2.16Cr',
      annual: '₹4.32Cr',
      annualShort: '₹4.32Cr',
      percent: 71,
    },
    {
      students: 1000,
      monthly: '₹72,00,000',
      monthlyShort: '₹72L',
      quarterly: '₹2.16Cr',
      quarterlyShort: '₹2.16Cr',
      halfYearly: '₹4.32Cr',
      halfYearlyShort: '₹4.32Cr',
      annual: '₹8.64Cr',
      annualShort: '₹8.64Cr',
      percent: 100,
    },
  ],
  growthTip: {
    title: 'Growing Base = Growing Income',
    description:
      'As your student base grows, your earnings scale proportionally. A territory that starts with 50 students can grow to 500+ within 2–3 years.',
  },
  closing:
    'Subscription revenue is recurring — as your student base grows, partner earnings scale with it.',
}

export const revenueCalculatorSection = {
  kicker: 'Earnings Potential',
  title: 'Revenue <span class="text-gradient-brand">Calculator</span>',
  classes: '!px-0 !py-0',
  description:
    'Explore your potential earnings as a Channel Partner. Adjust the parameters to see projected subscription revenue.',
  configureTitle: 'Configure Parameters',
  students: {
    label: 'Number of Students',
    iconMdi: 'mdi:account-school',
    min: 10,
    max: 5000,
    /** Step must divide (max - min) so the slider can reach max (HTML range quirk). */
    step: 10,
    default: 50,
  },
  subscriptionFee: {
    label: 'Avg. Monthly Subscription Fee',
    iconMdi: 'mdi:currency-inr',
    min: 2000,
    max: 100000,
    step: 500,
    default: 8000,
  },
  periodTabs: [
    { id: 'monthly' as const, label: 'Monthly' },
    { id: 'quarterly' as const, label: 'Quarterly' },
    { id: 'halfYearly' as const, label: 'Half Yearly' },
    { id: 'annual' as const, label: 'Annually' },
  ],
  /** Partner share of subscription revenue */
  subscriptionPartnerShare: 90,
  note: 'Estimates assume the standard partner share: 90% of subscription revenue. Actual earnings may vary by territory and plan mix.',
}

export const revenueStreamsSection = {
  kicker: 'Revenue Streams',
  title: 'Channel Partner <span class="text-gradient-brand">Revenue Streams</span>',
  classes: '!px-0 !py-0',
  description:
    'Partners can generate revenue through multiple sources. This multi-layered revenue structure ensures long-term business growth within the education sector.',
  streams: [
    { iconMdi: 'mdi:calendar-month-outline', title: 'Monthly Subscription Plans' },
    { iconMdi: 'mdi:domain', title: 'Institutional Partnerships' },
  ],
  chartTitle: 'Partner Earnings Advantage',
  chartDescription: 'Subscription revenue stays with the local partner — the platform only takes a small fee.',
  chartAriaLabel: 'Partner subscription revenue share versus platform fee',
  dataset: {
    theme: 'light' as const,
    data: [
      {
        label: 'Channel Partner',
        data: 90,
        bgColor: 'bg-blue-500',
        detail: 'Subscription revenue',
      },
      {
        label: 'Indian Mentors',
        data: 10,
        bgColor: 'bg-slate-400',
        detail: 'Platform fee',
      },
    ],
  },
}

export const whyModelWorksSection = {
  kicker: 'Why This Model Works',
  title: 'A Win-Win <span class="text-gradient-brand">Ecosystem</span>',
  classes: '!px-0 !py-0',
  description:
    'The Indian Mentors partnership framework is designed to create a win-win ecosystem for partners and the platform.',
  advantagesTitle: 'Key Advantages',
  /** Two sides of the ecosystem shown in the central balance graphic */
  balance: {
    partner: {
      label: 'Channel Partner',
      caption: 'Runs the local business',
      iconMdi: 'mdi:handshake-outline',
      points: ['Owns the territory', 'Keeps 90% subscription revenue', 'Local relationships'],
    },
    platform: {
      label: 'Indian Mentors',
      caption: 'Powers the operation',
      iconMdi: 'mdi:office-building-outline',
      points: ['Technology & ERP', 'National brand', 'Academic network'],
    },
    centerLabel: 'Win-Win',
  },
  advantages: [
    {
      iconMdi: 'mdi:home-outline',
      title: 'Low infrastructure investment',
      description: 'Start lean — no expensive setup, run operations from the digital platform.',
      accent: 'blue',
    },
    {
      iconMdi: 'mdi:chart-timeline-variant',
      title: 'High recurring revenue potential',
      description: 'Subscription-based tutoring builds predictable, compounding monthly income.',
      accent: 'emerald',
    },
    {
      iconMdi: 'mdi:map-marker-radius-outline',
      title: 'Territory-based exclusivity',
      description: 'Operate a protected area with room to grow from pincode to zone.',
      accent: 'violet',
    },
    {
      iconMdi: 'mdi:cloud-outline',
      title: 'Centralised digital platform',
      description: 'Manage students, tutors, payments and reports from one ERP dashboard.',
      accent: 'sky',
    },
    {
      iconMdi: 'mdi:shield-star-outline',
      title: 'National brand <br/> credibility',
      description: 'Win parents’ trust with the strength of a recognised national academic brand.',
      accent: 'amber',
    },
    {
      iconMdi: 'mdi:graphql',
      title: 'Scalable tutoring network',
      description: 'Add tutors and students continuously as demand in your territory grows.',
      accent: 'rose',
    },
  ],
}

export const investmentFinalCta = {
  badge: 'Become an Authorised Channel Partner',
  title: 'Join the Growing Network of Authorised Resellers',
  description:
    'Join the growing network of Indian Mentors Authorised Resellers and help expand quality personalised tutoring services across India.',
  opportunities: [
    'Build a local education business',
    'Earn recurring subscription revenue',
    'Expand tutor and student networks',
    'Contribute to academic success nationwide',
  ],
  primaryCta: { label: 'Apply for Channel Partnership', href: '#partner-investment-register' },
  secondaryCta: { label: 'Schedule a Partnership Consultation', href: 'tel:+917389563564' },
  tertiaryCta: { label: 'Download Channel Partner Brochure', href: '#territory-investment' },
}
