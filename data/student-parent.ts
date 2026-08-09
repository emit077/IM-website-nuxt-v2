export const studentParentHero = {
  brand: 'Students & Parents',
  titleLine1: 'Personalised learning with measurable progress',
  description:
    'One-to-one teaching, structured academic planning, and transparent tracking — a complete, dependable learning experience for every family.',
  primaryCta: {
    label: 'Book Free Demo',
    href: '#book-demo',
  },
  secondaryCta: {
    label: 'View Plans',
    href: '#enrollment-plans',
  },
  ticker: [
    'Free Demo Class',
    'Verified Mentors',
    'Parent Dashboard',
    'Progress Reports',
    'Gold · Diamond · Platinum',
    'ERP Tracking',
    '1:1 Tutoring',
    'Priority Support',
  ],
}

export type EnrollmentPlan = {
  id: 'free' | 'premium'
  iconMdi: string
  name: string
  price: string
  priceNote?: string
  tagline: string
  description: string
  featuresLabel: string
  features: string[]
  bestFor: string[]
  cta: { label: string; href: string }
  variant: 'surface' | 'featured'
}

export type ComparisonRow = {
  feature: string
  free: string
  premium: string
}

export type DashboardModule = {
  id: string
  iconMdi: string
  title: string
  description: string
  features: string[]
  benefit: string
}

export type SubscriptionPlan = {
  id: 'gold' | 'diamond' | 'platinum'
  iconMdi: string
  name: string
  duration: string
  subtitle: string
  popular?: boolean
  bestFor: string
  focus: string
  idealFor: string[]
  learningOutcome: string
  reports: string
  parentEngagement: string
  priceRange: string
  discount: string
  features: string[]
  forParents: string
  cta: { label: string; href: string }
  accent: 'amber' | 'blue' | 'violet'
}

export type SubscriptionComparisonRow = {
  feature: string
  gold: string
  diamond: string
  platinum: string
}

export const subscriptionPlansSection = {
  badge: 'Subscription Plans',
  title: 'A plan for every <span class="text-gradient-brand">academic goal</span>',
  description:
    "From daily homework help to intensive exam preparation — pick the intensity that matches your child's journey.",
  classes: '!px-0 !py-0',
}

export const erpDashboardSection = {
  badge: 'Learning Dashboard',
  title: 'Watch progress unfold — <br class="hidden sm:inline"/> live, clear, and honest',
  description: `Sessions, attendance, reports, and payments — one ERP-powered hub for the whole learning journey.
<br><br>
<b>Parents in the loop. Students organised.</b><br>
No chasing tutors for updates. See what’s done, what’s next, and where to improve.`,
  classes: 'mb-0 mt-0 !px-0 !py-0',
  ctaPrimary: { label: 'Book Free Demo', href: '#book-demo' },
  ctaSecondary: { label: 'Explore Plans', href: '#plan-comparison' },
  previewLabel: 'Live parent view',
  previewStudent: 'Aarav · Class 9 · CBSE',
  frameworkSteps: [
    { label: 'Plan', hint: 'Goals & schedule' },
    { label: 'Track', hint: 'Sessions & scores' },
    { label: 'Improve', hint: 'Clear next steps' },
  ],
}

export const enrollmentPlansSection = {
  badge: 'Enrollment Plans',
  title: "Start free, upgrade <span class=\"text-gradient-brand\">when you're ready</span>",
  description:
    'Try the platform with a Free Student Profile, or unlock priority matching, detailed reports, and dedicated support with Premium.',
  classes: '!px-0 !py-0',
}

export const planComparisonSection = {
  badge: 'Compare Plans',
  title: 'Gold, Diamond, or Platinum — <span class="text-gradient-brand">side by side</span>',
  description: '',
  classes: '!px-0 !py-0',
}

export type EnrollmentStep = {
  id: string
  no: string
  title: string
  summary: string
  iconMdi: string
  accent: 'violet' | 'blue' | 'emerald' | 'orange' | 'fuchsia'
  highlight?: boolean
  engagement?: {
    label: string
    href: string
    iconMdi: string
  }
}

export const enrollmentProcessSection = {
  badge: 'How it works',
  title: `Your Learning Journey in <span class="text-gradient-brand">5 Simple Steps</span>`,
  description:
    'From registration to your first session — simple, transparent, and completely risk-free.',
  classes: '!px-0 !py-0',
  formTitle: 'Get Started in Minutes',
  formCta: "Let's Get Started",
  formNote: 'By continuing, you agree to receive a call from our counsellor about your free demo class.',
  annotationTop: 'Find the right tutor. Learn better. Achieve more.',
  annotationBottom: "You're just a few clicks away from your goals!",
  socialProof: '50,000+ students already learning with us.',
}

export const enrollmentSteps: EnrollmentStep[] = [
  {
    id: 'register',
    no: '01',
    title: 'Register Online',
    summary: 'Fill out the quick enrollment form and share your details.',
    iconMdi: 'mdi:account-outline',
    accent: 'violet',
  },
  {
    id: 'match',
    no: '02',
    title: 'Get Tutor Matched',
    summary: 'Our experts match you with the right tutor based on your needs.',
    iconMdi: 'mdi:account-multiple-outline',
    accent: 'blue',
    engagement: {
      label: 'Browse tutors',
      href: '#browse-tutors',
      iconMdi: 'mdi:account-search-outline',
    },
  },
  {
    id: 'demo',
    no: '03',
    title: 'Attend Free Demo',
    summary: "Experience the tutor's teaching style in a free demo session.",
    iconMdi: 'mdi:calendar-check-outline',
    accent: 'emerald',
    highlight: true,
    engagement: {
      label: 'Book free demo',
      href: '#book-demo',
      iconMdi: 'mdi:calendar-plus',
    },
  },
  {
    id: 'plan',
    no: '04',
    title: 'Choose Your Plan',
    summary: 'Select from Gold, Diamond, or Platinum — flexible & affordable.',
    iconMdi: 'mdi:file-document-outline',
    accent: 'orange',
    engagement: {
      label: 'Compare plans',
      href: '#plan-comparison',
      iconMdi: 'mdi:scale-balance',
    },
  },
  {
    id: 'learn',
    no: '05',
    title: 'Start Learning',
    summary: 'Begin your learning journey with structured sessions & support.',
    iconMdi: 'mdi:book-open-page-variant-outline',
    accent: 'fuchsia',
  },
]

export const enrollmentTrustPoints = [
  {
    id: 'secure',
    iconMdi: 'mdi:shield-check-outline',
    title: '100% Safe & Secure',
    description: 'Your data stays protected end to end.',
  },
  {
    id: 'support',
    iconMdi: 'mdi:headset',
    title: 'Expert Support',
    description: 'Counsellors ready whenever you need help.',
  },
  {
    id: 'commitment',
    iconMdi: 'mdi:thumb-up-outline',
    title: 'No Commitment',
    description: 'Attend the demo first, decide later.',
  },
  {
    id: 'match',
    iconMdi: 'mdi:check-decagram-outline',
    title: 'Best Match Guarantee',
    description: 'We match you with the right tutor fit.',
  },
] as const

export const resourceLinks = [
  {
    id: 'student-brochure',
    iconMdi: 'mdi:file-document-outline',
    title: 'Student Brochure',
    description: 'Download our guide to personalised tutoring services.',
    href: '#student-brochure',
  },
  {
    id: 'enrollment-process',
    iconMdi: 'mdi:clipboard-list-outline',
    title: 'Enrollment Process',
    description: 'See how to register, match, demo, and start learning.',
    href: '#enrollment-process',
  },
  {
    id: 'browse-tutors',
    iconMdi: 'mdi:account-search-outline',
    title: 'Browse Tutors',
    description: 'Explore verified mentors by subject and grade.',
    href: '#browse-tutors',
  },
  {
    id: 'enrollment-plans',
    iconMdi: 'mdi:layers-outline',
    title: 'Enrollment Plans',
    description: 'Free and Premium student profiles explained.',
    href: '#enrollment-plans',
  },
  {
    id: 'subscription-plans',
    iconMdi: 'mdi:credit-card-outline',
    title: 'Subscription Plans',
    description: 'Gold, Diamond, and Platinum learning packages.',
    href: '#subscription-plans',
  },
]

export const enrollmentPlans: EnrollmentPlan[] = [
  {
    id: 'free',
    iconMdi: 'mdi:rocket-launch-outline',
    name: 'Free Student Profile',
    price: '₹0',
    priceNote: 'Explore Personalised Tutoring',
    tagline: 'Try the platform before you commit',
    description:
      'The Free Student Profile allows parents and students to create an account, explore available tutors, and experience the tutoring process through a demo class before enrolling in regular sessions. Ideal for families who want to understand how personalised tutoring works.',
    featuresLabel: 'Key Features',
    features: [
      'Create a student profile (name, grade, subjects, location)',
      'Browse tutor profiles (limited to ~3–5 profiles)',
      'Book 1 Free Online Demo Session',
      'View tutoring fee structures and subscription options',
      'Notifications for tutor assignments and demo updates',
      'Support chat during limited service hours',
      'Basic demo session feedback & attendance records',
      'Basic reports including demo attendance and feedback',
    ],
    bestFor: [
      'Students exploring tutoring for the first time',
      'Parents evaluating tutor compatibility',
      'Families considering personalised tutoring options',
    ],
    cta: { label: 'Create Free Student Profile', href: '#book-demo' },
    variant: 'surface',
  },
  {
    id: 'premium',
    iconMdi: 'mdi:star-four-points-outline',
    name: 'Premium Student Profile',
    price: '₹1200',
    priceNote: 'per year',
    tagline: 'Complete personalised tutoring experience',
    description:
      'The Premium Student Profile unlocks advanced academic tracking, priority tutor access, AI-powered tutor recommendations, and dedicated support to ensure consistent academic progress.',
    featuresLabel: 'Premium Benefits — includes all Free Plan features, plus:',
    features: [
      'Unlimited tutor browsing and direct connection with mentors',
      'Priority demo scheduling (skip waiting queues)',
      'Book up to 3 Free Offline Demo Sessions',
      'Tutor replacement guarantee within 48 hours',
      'Enroll in multiple subjects under one account',
      'Flexible payment options (half-yearly & annual plans)',
      'Dedicated Key Account Manager for personalised support',
      'Detailed academic progress reports (attendance, performance, insights)',
      'Parent & Student Dashboard (sessions, tutor details, analytics, payments)',
      'AI-powered tutor recommendations based on subject, grade, and learning style',
      '24/7 priority support through WhatsApp and phone helpline',
      'Exclusive discounts on long-term course packages',
      'Achievement certificates after course completion',
      'Additional discounts on add-on subject enrollments',
    ],
    bestFor: [
      'Students preparing for exams',
      'Parents seeking consistent academic monitoring',
      'Students studying multiple subjects',
      'Families looking for a structured tutoring experience',
    ],
    cta: { label: 'Upgrade to Premium Student Profile', href: '#book-demo' },
    variant: 'featured',
  },
]

export const planComparisonRows: ComparisonRow[] = [
  { feature: 'Student profile creation', free: 'Included', premium: 'Included' },
  { feature: 'Tutor browsing', free: 'Limited (3–5 profiles)', premium: 'Unlimited + direct connect' },
  { feature: 'Demo sessions', free: '1 free online demo', premium: 'Up to 3 offline + priority scheduling' },
  { feature: 'Tutor replacement', free: '—', premium: 'Within 48 hours' },
  { feature: 'Multi-subject enrollment', free: '—', premium: 'Available' },
  { feature: 'Flexible payment options', free: '—', premium: 'Half-yearly / Annual' },
  { feature: 'Key Account Manager', free: '—', premium: 'Dedicated support' },
  { feature: 'Reports', free: 'Basic demo feedback', premium: 'Detailed performance & progress reports' },
  { feature: 'Parent/Student Dashboard', free: '—', premium: 'Full dashboard' },
  { feature: 'AI tutor recommendations', free: '—', premium: 'Smart matching' },
  { feature: '24/7 priority support', free: '—', premium: 'WhatsApp & phone' },
  { feature: 'Discounts & offers', free: '—', premium: 'Exclusive deals' },
  { feature: 'Achievement certificates', free: '—', premium: 'After course completion' },
]

export const premiumWhyChoose = [
  'Unlimited access to qualified tutors',
  'Detailed academic progress tracking',
  'Dedicated academic support',
  'Faster tutor matching and demo scheduling',
  'Continuous performance insights for parents',
  'Better learning outcomes through structured mentoring',
]

export const dashboardModules: DashboardModule[] = [
  {
    id: 'dashboard',
    iconMdi: 'mdi:view-dashboard-outline',
    title: 'Dashboard',
    description: 'Central control panel with a quick overview of all learning activities and account updates.',
    features: ['Upcoming sessions overview', 'Recent academic updates', 'Notifications and reminders', 'Quick access to important modules'],
    benefit: 'Instant visibility of the student\'s academic activities and tutoring schedule.',
  },
  {
    id: 'profile',
    iconMdi: 'mdi:account-outline',
    title: 'Student Profile',
    description: 'Stores and manages essential student information for personalised tutor matching and academic planning.',
    features: ['Personal details and academic grade', 'Board and subject preferences', 'Learning goals and requirements', 'Profile update options'],
    benefit: 'Ensures accurate tutor matching and personalised learning plans.',
  },
  {
    id: 'tutors',
    iconMdi: 'mdi:account-search-outline',
    title: 'Browse Tutors',
    description: 'Explore verified tutors available on the Indian Mentors platform.',
    features: ['Tutor profiles and qualifications', 'Subject specialisation', 'Teaching experience details', 'Tutor availability information'],
    benefit: 'Helps families choose the most suitable tutor based on academic needs.',
  },
  {
    id: 'subscriptions',
    iconMdi: 'mdi:layers-outline',
    title: 'Subscription Plans',
    description: 'View available tutoring plans and select the most suitable subscription package.',
    features: ['Plan details and pricing', 'Session frequency options', 'Subject-specific packages', 'Plan upgrade or renewal options'],
    benefit: 'Flexible tutoring plans tailored to different academic needs.',
  },
  {
    id: 'history',
    iconMdi: 'mdi:history',
    title: 'Subscription History',
    description: 'Track previously purchased tutoring plans.',
    features: ['Active plan details', 'Past subscription records', 'Plan duration and session usage', 'Renewal reminders'],
    benefit: 'Complete transparency in tutoring subscriptions and plan usage.',
  },
  {
    id: 'demo',
    iconMdi: 'mdi:school-outline',
    title: 'Demo Session',
    description: 'Request and manage trial tutoring sessions before enrolling in a full plan.',
    features: ['Book demo sessions', 'Demo tutor details', 'Demo schedule tracking', 'Feedback submission after demo'],
    benefit: 'Experience the teaching approach before committing to a tutor.',
  },
  {
    id: 'batch',
    iconMdi: 'mdi:account-group-outline',
    title: 'Batch',
    description: 'Information about group classes or learning batches assigned to the student.',
    features: ['Batch name and subject details', 'Tutor assigned to the batch', 'Batch schedule and session timing', 'Student list for group learning'],
    benefit: 'Stay organised in group learning environments.',
  },
  {
    id: 'sessions',
    iconMdi: 'mdi:calendar-clock-outline',
    title: 'Sessions',
    description: 'Complete record of all tutoring classes conducted or scheduled.',
    features: ['Upcoming sessions', 'Completed class records', 'Rescheduled sessions', 'Tutor session notes'],
    benefit: 'Clear tracking of all academic sessions and tutoring activity.',
  },
  {
    id: 'payments',
    iconMdi: 'mdi:credit-card-outline',
    title: 'Payments',
    description: 'Full visibility into financial transactions related to tutoring services.',
    features: ['Payment history', 'Invoice downloads', 'Upcoming payment reminders', 'Subscription payment tracking'],
    benefit: 'Complete financial transparency for parents and students.',
  },
  {
    id: 'messages',
    iconMdi: 'mdi:message-text-outline',
    title: 'Messages',
    description: 'Communicate directly with tutors or the academic support team.',
    features: ['Tutor communication', 'Academic queries', 'Admin support messages', 'Learning updates'],
    benefit: 'Clear and organised communication within the tutoring ecosystem.',
  },
  {
    id: 'feedback',
    iconMdi: 'mdi:star-outline',
    title: 'Feedback',
    description: 'Provide feedback about tutors and learning experiences.',
    features: ['Tutor performance ratings', 'Session feedback', 'Learning improvement suggestions', 'Service quality reviews'],
    benefit: 'Maintains high teaching standards and service quality.',
  },
  {
    id: 'notifications',
    iconMdi: 'mdi:bell-outline',
    title: 'Notifications',
    description: 'Real-time alerts and updates related to tutoring sessions and academic activities.',
    features: ['Class reminders', 'Homework alerts', 'Tutor updates', 'Payment confirmations', 'Report uploads'],
    benefit: 'Keeps parents and students informed without constant follow-ups.',
  },
  {
    id: 'support',
    iconMdi: 'mdi:lifebuoy',
    title: 'Support',
    description: 'Contact the Indian Mentors academic and technical support team for assistance.',
    features: ['Raise support tickets', 'Academic assistance requests', 'Technical help for the platform', 'Tutor replacement requests'],
    benefit: 'Quick problem resolution and continuous learning support.',
  },
  {
    id: 'settings',
    iconMdi: 'mdi:cog-outline',
    title: 'Settings',
    description: 'Manage account preferences and dashboard configuration.',
    features: ['Profile settings', 'Password and security management', 'Notification preferences', 'Account customisation'],
    benefit: 'Secure and personalised dashboard management.',
  },
]

export const secureEcosystemPoints = [
  'Secure login authentication',
  'Encrypted communication channels',
  'Protected academic records',
  'Organized student data management',
  'Real-time system monitoring',
]

export const parentVisibilityPoints = [
  'What their child is learning',
  'When tutoring sessions occur',
  'How academic progress is improving',
  'Where their tutoring investment is being utilised',
]

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'gold',
    iconMdi: 'mdi:trophy-outline',
    name: 'Gold Plan',
    duration: '1 Hour/Day',
    subtitle: 'Affordable Starter',
    bestFor: 'Primary & Middle School Students',
    focus: 'Quick subject coverage & homework support',
    idealFor: [
      'Nursery to Class 8th',
      '1–4 subjects',
      'Concept clarity without long study hours',
      'Balanced learning without pressure',
    ],
    learningOutcome: 'Balanced learning with consistent progress',
    reports: 'Monthly attendance & basic feedback',
    parentEngagement: 'Monthly parent updates',
    priceRange: 'Basic',
    discount: 'Up to 15%',
    features: [
      'Browse 3–5 tutor profiles',
      'Up to 3 Free Demo Sessions',
      'Basic Parent Dashboard',
      'Ticket-based support (working hours)',
    ],
    forParents: 'Cost-effective, stress-free for primary & middle school learners. Covers homework + 1–4 subjects with monthly attendance updates.',
    cta: { label: 'Book Demo', href: '#book-demo' },
    accent: 'amber',
  },
  {
    id: 'diamond',
    iconMdi: 'mdi:diamond-stone',
    name: 'Diamond Plan',
    duration: '1.5 Hours/Day',
    subtitle: 'Most Popular',
    popular: true,
    bestFor: 'Middle & High School Students',
    focus: 'In-depth learning + practice + revision',
    idealFor: [
      'Class 6th to 12th',
      '2–5 subjects',
      'Board exam preparation phase',
      'Problem-solving improvement',
    ],
    learningOutcome: 'Exam preparation & strong analytical skills',
    reports: 'Bi-weekly subject-specific feedback',
    parentEngagement: 'Fortnightly parent call',
    priceRange: 'Standard',
    discount: 'Up to 15%',
    features: [
      'Unlimited tutor browsing',
      'Priority demo scheduling',
      'Tutor replacement guarantee (48 hrs)',
      'Parent Dashboard with analytics',
      'Priority support (extended hours)',
    ],
    forParents: 'Balanced extended learning for middle/high school with practice, revision, and subject-specific performance reports.',
    cta: { label: 'Book Demo', href: '#book-demo' },
    accent: 'blue',
  },
  {
    id: 'platinum',
    iconMdi: 'mdi:crown-outline',
    name: 'Platinum Plan',
    duration: '2 Hours/Day',
    subtitle: 'Premium Excellence',
    bestFor: 'High School, Board & Competitive Exams',
    focus: 'Full syllabus mastery + exam prep + skill enhancement',
    idealFor: [
      'Class 9th–12th',
      'JEE / NEET / Competitive Exams',
      'All subjects coverage',
      'Intensive preparation cycles',
    ],
    learningOutcome: 'Complete syllabus coverage, mastery & exam confidence',
    reports: 'Weekly detailed academic reports',
    parentEngagement: 'Weekly review call + Dedicated Manager',
    priceRange: 'Premium',
    discount: 'Up to 15%',
    features: [
      'Unlimited browsing + AI tutor recommendation',
      'Dedicated Key Account Manager',
      'Weekly parent review calls',
      'Achievement certificates',
      'Add-on subject discounts',
      '24/7 premium support (WhatsApp, Phone, Email)',
    ],
    forParents: 'Comprehensive all-subject learning for Boards, JEE, NEET & competitive exams with weekly reports and performance analytics.',
    cta: { label: 'Book Demo', href: '#book-demo' },
    accent: 'violet',
  },
]

export const commonPlanBenefits = [
  'Online & Offline Options Available',
  'Structured Academic Monitoring',
  'Attendance Tracking via ERP',
  'Tutor Replacement Support',
  'Secure Payment Gateway',
]

export const paymentOptions = {
  frequencies: ['Monthly (Platinum Only)', 'Quarterly', 'Half-Yearly', 'Annual'],
  methods: ['UPI', 'Net Banking', 'Credit/Debit Cards'],
}

export const subscriptionComparisonRows: SubscriptionComparisonRow[] = [
  { feature: 'Daily Duration', gold: '1 Hour', diamond: '1.5 Hours', platinum: '2 Hours' },
  { feature: 'Subjects Covered', gold: '1–4 Subjects', diamond: '2–5 Subjects', platinum: 'All Subjects' },
  { feature: 'Learning Focus', gold: 'Homework & Quick Coverage', diamond: 'Practice + Revision', platinum: 'Full Coverage + Exam Preparation' },
  { feature: 'Tutor Interaction', gold: 'Limited but consistent', diamond: 'Moderate depth', platinum: 'High engagement & mentoring' },
  { feature: 'Progress Reports', gold: 'Monthly', diamond: 'Bi-weekly', platinum: 'Weekly detailed reports' },
  { feature: 'Performance Tracking', gold: 'Attendance + Homework', diamond: 'Attendance + Tutor Notes', platinum: 'Advanced Analytics + Strengths/Weaknesses' },
  { feature: 'Parent Engagement', gold: 'Monthly updates', diamond: 'Fortnightly call', platinum: 'Weekly review + Academic Manager' },
  { feature: 'Tutor Browsing', gold: '3–5 Profiles', diamond: 'Unlimited', platinum: 'Unlimited + AI-Based Matching' },
  { feature: 'Tutor Replacement', gold: 'Up to 3 replacements', diamond: 'Unlimited', platinum: 'Unlimited' },
  { feature: 'Demo Sessions', gold: '1–3 Free Demos', diamond: 'Priority Access', platinum: 'Priority + 48hr Fast Allocation' },
  { feature: 'Support System', gold: 'Ticket-based support', diamond: 'Priority support', platinum: '24/7 Premium support' },
  { feature: 'Discount Benefits', gold: 'Up to 15%', diamond: 'Up to 15%', platinum: 'Up to 15%' },
  { feature: 'Price Range', gold: 'Basic', diamond: 'Standard', platinum: 'Premium' },
]

export const planPositioning = [
  { iconMdi: 'mdi:trophy-outline', name: 'Gold – Smart Start', description: 'Best for basic academic support and homework assistance' },
  { iconMdi: 'mdi:diamond-stone', name: 'Diamond – Most Popular', description: 'Ideal for regular practice, revision, and consistent improvement' },
  { iconMdi: 'mdi:crown-outline', name: 'Platinum – Premium Excellence', description: 'Perfect for complete academic coverage and exam-focused preparation' },
]
