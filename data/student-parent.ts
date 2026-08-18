import { externalLinks } from './external-links'

export const studentParentHero = {
  brand: 'Students & Parents',
  titleLine1: 'A better way to learn for every child',
  description:
    'Personalised tutoring matched to your child’s pace, goals, and schedule — with progress you can see.',
  caption: 'One student. One trusted academic partner.',
  primaryCta: {
    label: 'Book a Free Demo',
    href: externalLinks.studentSignup,
    icon: 'mdi:calendar-check-outline',
  },
  secondaryCta: {
    label: 'Find a Tutor',
    href: externalLinks.studentSignup,
    icon: 'mdi:account-search-outline',
  },
  tertiaryCta: {
    label: 'Talk to a Counsellor',
    href: '/contact',
    icon: 'mdi:account-voice',
  },
  ticker: [
    'Personalised Learning',
    'Measurable Progress',
    'Trusted Support',
    'Free Demo Class',
    'Verified Tutors',
    'Parent Dashboard',
    'One-to-One Tutoring',
    'Academic Counselling',
  ],
}

export type EnrollmentPlan = {
  id: 'free' | 'premium'
  iconMdi: string
  name: string
  price: string
  priceNote?: string
  equivalent?: string
  tagline: string
  description: string
  featuresLabel: string
  features: string[]
  bestFor: string[]
  cta: { label: string; href: string }
  variant: 'surface' | 'featured'
  badge?: string
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
  ctaPrimary: { label: 'Book Free Demo', href: externalLinks.studentSignup },
  ctaSecondary: { label: 'Explore Plans', href: '/student-parent/subscription' },
  previewLabel: 'Live parent view',
  previewStudent: 'Aarav · Class 9 · CBSE',
  frameworkSteps: [
    { label: 'Plan', hint: 'Goals & schedule' },
    { label: 'Track', hint: 'Sessions & scores' },
    { label: 'Improve', hint: 'Clear next steps' },
  ],
}

export const enrollmentPlansSection = {
  badge: 'Free vs Premium',
  title: 'Compare Your Student <span class="text-gradient-brand">Enrollment Options</span>',
  description: '',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  footnote:
    '*Subject to applicable policy, tutor availability, and service conditions.',
}

export const planComparisonSection = {
  badge: 'Compare Learning Plans',
  title: 'Which Learning Plan Fits <span class="text-gradient-brand">Your Child?</span>',
  description: 'Side-by-side details for daily duration, subjects, monitoring, and support.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
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
      href: '#tutors',
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
      href: externalLinks.studentSignup,
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
      href: '/student-parent/subscription#plan-comparison',
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
    href: '/student-parent/enrollment',
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
    href: '/student-parent/enrollment',
  },
  {
    id: 'subscription-plans',
    iconMdi: 'mdi:credit-card-outline',
    title: 'Subscription Plans',
    description: 'Gold, Diamond, and Platinum learning packages.',
    href: '/student-parent/subscription',
  },
]

export const enrollmentPlans: EnrollmentPlan[] = [
  {
    id: 'free',
    iconMdi: 'mdi:gift-outline',
    name: 'Free Student Profile',
    price: '₹0',
    tagline: 'Explore Personalised Tutoring',
    description:
      'Create your student profile, discover tutors, explore tutoring options, and book a free online demo before committing to regular tutoring.',
    featuresLabel: 'Best For',
    features: [],
    bestFor: [
      'Students exploring tutoring',
      'Parents comparing tutor options',
      'First-time users',
      'Families evaluating tutor compatibility',
    ],
    cta: { label: 'Create Free Profile', href: externalLinks.studentSignup },
    variant: 'surface',
  },
  {
    id: 'premium',
    iconMdi: 'mdi:star-four-points-outline',
    name: 'Premium Student Profile',
    price: '₹1,200',
    priceNote: '/ Year',
    equivalent: '≈ ₹100 / Month',
    tagline: 'Advanced Academic Support',
    description:
      'Unlock enhanced tutor access, priority demo scheduling, advanced academic tracking, personalised recommendations, and dedicated support.',
    featuresLabel: 'Best For',
    features: [],
    bestFor: [
      'Students preparing for examinations',
      'Multiple-subject learners',
      'Families seeking academic monitoring',
      'Students requiring structured tutoring support',
    ],
    cta: { label: 'Upgrade to Premium', href: externalLinks.studentSignup },
    variant: 'featured',
    badge: 'Recommended',
  },
]

export const planComparisonRows: ComparisonRow[] = [
  { feature: 'Student Profile', free: '✓', premium: '✓' },
  { feature: 'Tutor Browsing', free: 'Limited: 3–5 Profiles', premium: 'Unlimited + Direct Connection' },
  { feature: 'Demo Sessions', free: '1 Free Online Demo', premium: 'Up to 3 Free Offline Demos' },
  { feature: 'Demo Scheduling', free: 'Standard', premium: 'Priority' },
  { feature: 'Tutor Replacement', free: '—', premium: '✓ 48-Hour Target*' },
  { feature: 'Multi-Subject Enrollment', free: '—', premium: '✓' },
  { feature: 'Payment Options', free: '—', premium: 'Half-Yearly / Annual' },
  { feature: 'Key Account Manager', free: '—', premium: '✓ Dedicated' },
  { feature: 'Academic Reports', free: 'Basic Demo Feedback', premium: 'Detailed Progress Reports' },
  { feature: 'Attendance Tracking', free: 'Basic Demo Attendance', premium: 'Detailed Attendance Tracking' },
  { feature: 'Parent/Student Dashboard', free: '—', premium: '✓' },
  { feature: 'AI Tutor Recommendation', free: '—', premium: '✓' },
  { feature: 'Priority Support', free: '—', premium: '✓' },
  { feature: 'Discounts & Offers', free: '—', premium: '✓ Eligible Benefits' },
  { feature: 'Achievement Certificates', free: '—', premium: '✓ Applicable Courses' },
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
    name: 'Gold',
    duration: '1 Hour / Day',
    subtitle: 'Smart Start',
    bestFor: 'Primary & Middle School',
    focus: 'Homework + Concepts',
    idealFor: [
      'Nursery to Class 8',
      '1–4 subjects',
      'Homework assistance',
      'Concept development',
    ],
    learningOutcome: 'Understand → Practise → Improve → Stay Consistent',
    reports: 'Monthly',
    parentEngagement: 'Monthly',
    priceRange: 'Standard support',
    discount: 'As per tenure',
    features: [
      'Personalised one-to-one tutoring',
      'Focused tutor selection',
      'Homework support',
      'Monthly attendance & basic feedback',
    ],
    forParents: 'Focused academic support for students who need regular assistance with homework, concepts and classroom learning.',
    cta: { label: 'Choose Gold', href: '/student-parent/subscription?plan=gold#plan-builder' },
    accent: 'amber',
  },
  {
    id: 'diamond',
    iconMdi: 'mdi:diamond-stone',
    name: 'Diamond',
    duration: '1.5 Hours / Day',
    subtitle: 'Performance Plan',
    popular: true,
    bestFor: 'Middle & High School',
    focus: 'Practice + Revision',
    idealFor: [
      'Class 6–12',
      '2–5 subjects',
      'Board preparation',
      'Problem-solving',
    ],
    learningOutcome: 'Understand → Practise → Revise → Perform',
    reports: 'Bi-Weekly',
    parentEngagement: 'Fortnightly',
    priceRange: 'Priority support',
    discount: 'As per tenure',
    features: [
      'Personalised tutoring',
      'Expanded / priority tutor discovery',
      'Priority demo scheduling',
      'Bi-weekly subject feedback',
    ],
    forParents: 'A balanced plan for students who need deeper understanding, regular practice, revision and problem-solving.',
    cta: { label: 'Choose Diamond', href: '/student-parent/subscription?plan=diamond#plan-builder' },
    accent: 'blue',
  },
  {
    id: 'platinum',
    iconMdi: 'mdi:crown-outline',
    name: 'Platinum',
    duration: '2 Hours / Day',
    subtitle: 'Premium Excellence',
    bestFor: 'High School & Exam Preparation',
    focus: 'Full Coverage + Exam Preparation',
    idealFor: [
      'Class 9–12',
      'Board examinations',
      'JEE / NEET',
      'Intensive multi-subject requirements',
    ],
    learningOutcome: 'Learn → Practise → Master → Prepare',
    reports: 'Weekly Detailed',
    parentEngagement: 'Weekly',
    priceRange: 'Premium support',
    discount: 'As per tenure',
    features: [
      'Personalised tutoring',
      'Expanded access + smart recommendation',
      'Weekly detailed reporting',
      'Premium support',
    ],
    forParents: 'Comprehensive tutoring support for students requiring extended learning time, syllabus coverage and examination-focused preparation.',
    cta: { label: 'Choose Platinum', href: '/student-parent/subscription?plan=platinum#plan-builder' },
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
  { feature: 'Best For', gold: 'Primary & Middle School', diamond: 'Middle & High School', platinum: 'High School & Exam Preparation' },
  { feature: 'Subjects', gold: '1–4', diamond: '2–5', platinum: 'Multiple / All' },
  { feature: 'Learning Focus', gold: 'Homework + Concepts', diamond: 'Practice + Revision', platinum: 'Full Coverage + Exam Preparation' },
  { feature: 'Progress Updates', gold: 'Monthly', diamond: 'Bi-Weekly', platinum: 'Weekly Detailed' },
  { feature: 'Parent Engagement', gold: 'Monthly', diamond: 'Fortnightly', platinum: 'Weekly' },
  { feature: 'Tutor Discovery', gold: 'Focused Selection', diamond: 'Expanded / Priority', platinum: 'Expanded + Smart Recommendation' },
  { feature: 'Demo Access', gold: 'As Applicable', diamond: 'Priority', platinum: 'Priority' },
  { feature: 'Support', gold: 'Standard', diamond: 'Priority', platinum: 'Premium' },
  { feature: 'Tutor Support', gold: 'As per Policy', diamond: 'As per Policy', platinum: 'As per Policy' },
]

export const planPositioning = [
  { iconMdi: 'mdi:trophy-outline', name: 'Gold – Smart Start', description: 'Best for basic academic support and homework assistance' },
  { iconMdi: 'mdi:diamond-stone', name: 'Diamond – Most Popular', description: 'Ideal for regular practice, revision, and consistent improvement' },
  { iconMdi: 'mdi:crown-outline', name: 'Platinum – Premium Excellence', description: 'Perfect for complete academic coverage and exam-focused preparation' },
]

/* ------------------------------------------------------------------ */
/* Students & Parents page — redesigned sections                      */
/* ------------------------------------------------------------------ */

export const spAudiences = {
  badge: 'Two Audiences. One Learning Journey.',
  title: 'Built for Students. Designed With <span class="text-gradient-brand">Parents in Mind.</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  students: {
    id: 'for-students',
    label: 'For Students',
    iconMdi: 'mdi:school-outline',
    title: 'Learn at Your Pace. Build Confidence. Achieve Your Goals.',
    description:
      'Students receive personalised academic support designed around their current learning level, strengths, challenges, and goals.',
    benefitsLabel: 'Explore Student Benefits',
    benefits: [
      'One-to-one personalised tutoring',
      'Concept-based learning',
      'Doubt resolution',
      'Homework assistance',
      'Revision and practice',
      'Exam preparation',
      'Study planning',
      'Time-management guidance',
      'Academic mentoring',
      'Performance tracking',
    ],
    cta: { label: 'Explore Student Support', href: '#student-expect' },
  },
  parents: {
    id: 'for-parents',
    label: 'For Parents',
    iconMdi: 'mdi:account-group-outline',
    title: 'Stay Informed. Stay Involved. Stay Confident.',
    description:
      "Parents receive greater visibility into their child's tutoring journey through structured communication, academic monitoring, attendance tracking, and coordinated support.",
    benefitsLabel: 'Explore Parent Benefits',
    benefits: [
      'Verified tutor profiles',
      'Structured tutor selection',
      'Transparent fee information',
      'Attendance monitoring',
      'Academic progress updates',
      'Parent communication',
      'Tutor coordination',
      'Support for tutor replacement',
      'Dashboard-based information',
      'Dedicated academic assistance',
    ],
    cta: { label: 'Explore Parent Support', href: '#parent-expect' },
  },
}

export const spNeeds = {
  badge: "Understand Your Child's Learning Needs",
  title: 'Every Student Starts From a <span class="text-gradient-brand">Different Place</span>',
  description: "Before recommending a tutoring arrangement, we focus on understanding the student's requirements.",
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    { title: 'Academic Level', question: 'Where is the student academically today?', iconMdi: 'mdi:stairs' },
    { title: 'Learning Gaps', question: 'Which concepts or subjects need additional attention?', iconMdi: 'mdi:puzzle-outline' },
    { title: 'Learning Goals', question: 'Is the objective improvement, examination preparation, concept building, or advanced learning?', iconMdi: 'mdi:target' },
    { title: 'Learning Pace', question: 'Does the student require additional time to understand and practise concepts?', iconMdi: 'mdi:timer-sand' },
    { title: 'Subject Requirements', question: 'Which subjects require one-to-one support?', iconMdi: 'mdi:book-education-outline' },
    { title: 'Schedule', question: 'What days and timings work best for the student and family?', iconMdi: 'mdi:calendar-clock-outline' },
    { title: 'Learning Mode', question: 'Is home tutoring, online tutoring, or hybrid learning more suitable?', iconMdi: 'mdi:laptop' },
  ],
  outcome: "A more informed tutoring recommendation based on the student's actual requirements.",
}

export const spRoadmap = {
  badge: 'Personalised Student Learning Roadmap',
  title: 'From Academic Requirements to a <span class="text-gradient-brand">Structured Learning Plan</span>',
  description: "A personalised tutoring journey can be structured around the student's:",
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  chain: ['Current Level', 'Learning Gaps', 'Academic Goals', 'Study Plan', 'Tutoring Sessions', 'Practice', 'Review', 'Progress'],
  steps: [
    { no: '01', title: 'Understand', description: 'Identify academic requirements and learning challenges.' },
    { no: '02', title: 'Plan', description: 'Establish subject priorities and learning objectives.' },
    { no: '03', title: 'Teach', description: 'Deliver personalised one-to-one tutoring.' },
    { no: '04', title: 'Practise', description: 'Reinforce concepts through questions, homework, and revision.' },
    { no: '05', title: 'Assess', description: 'Review learning response and academic performance.' },
    { no: '06', title: 'Improve', description: 'Identify areas requiring additional attention.' },
    { no: '07', title: 'Progress', description: 'Continue with an evolving academic support plan.' },
  ],
}

export const spExpect = {
  id: 'what-to-expect',
  badge: 'What Students & Parents Can Expect',
  title: 'Clarity for Learners. <span class="text-gradient-brand">Visibility for Families.</span>',
  description:
    'Students receive a personalised learning experience. Parents stay informed throughout the tutoring journey.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  students: {
    id: 'student-expect',
    label: 'For Students',
    iconMdi: 'mdi:school-outline',
    title: 'A Learning Experience Built Around You',
    items: [
      { title: 'Personalised Teaching', description: "Learning sessions are structured around the student's academic requirements rather than a one-size-fits-all approach.", iconMdi: 'mdi:account-star-outline' },
      { title: 'Concept Clarity', description: 'Tutors focus on understanding concepts rather than simply completing chapters.', iconMdi: 'mdi:lightbulb-on-outline' },
      { title: 'Doubt Resolution', description: 'Students receive opportunities to ask questions and clarify difficult topics.', iconMdi: 'mdi:help-circle-outline' },
      { title: 'Practice & Revision', description: 'Regular practice and revision help reinforce classroom learning.', iconMdi: 'mdi:book-open-variant-outline' },
      { title: 'Homework Support', description: 'Tutors can assist students with understanding and completing academic work.', iconMdi: 'mdi:notebook-edit-outline' },
      { title: 'Study Skills', description: 'Students can receive guidance related to study planning, time management, and revision routines.', iconMdi: 'mdi:brain' },
      { title: 'Exam Preparation', description: 'Support can be structured around school examinations, board examinations, and applicable competitive examinations.', iconMdi: 'mdi:school-outline' },
      { title: 'Confidence Building', description: 'A supportive one-to-one environment can help students participate more comfortably and develop greater confidence in their learning.', iconMdi: 'mdi:sprout-outline' },
    ],
  },
  parents: {
    id: 'parent-expect',
    label: 'For Parents',
    iconMdi: 'mdi:account-group-outline',
    title: 'Academic Support With Greater Transparency',
    description: "Parents should not have to wonder what is happening during their child's tutoring journey.",
    items: [
      { title: 'Tutor Visibility', description: 'Access relevant tutor information and understand the basis of tutor selection.', iconMdi: 'mdi:human-male-board' },
      { title: 'Session Visibility', description: 'Track scheduled and completed tutoring sessions through applicable systems.', iconMdi: 'mdi:calendar-month-outline' },
      { title: 'Academic Monitoring', description: 'Receive available attendance, feedback, and progress information.', iconMdi: 'mdi:chart-bar' },
      { title: 'Structured Communication', description: 'Maintain communication with tutors and the Indian Mentors support team.', iconMdi: 'mdi:message-text-outline' },
      { title: 'Transparent Payments', description: 'Understand applicable tutoring fees, subscription plans, and payment schedules.', iconMdi: 'mdi:credit-card-outline' },
      { title: 'Coordination Support', description: 'Receive assistance with tutoring coordination and applicable tutor replacement requirements.', iconMdi: 'mdi:swap-horizontal' },
      { title: 'Digital Access', description: 'Access applicable student and parent dashboard features through the Indian Mentors platform.', iconMdi: 'mdi:monitor-dashboard' },
    ],
  },
}

export const spMatching = {
  badge: 'How Indian Mentors Matches Students With Tutors',
  title: 'Finding a Tutor Is Easy. Finding the <span class="text-gradient-brand">Right Tutor</span> Matters More.',
  description: 'Tutor selection can consider multiple student requirements.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  considerations: [
    { title: 'Subject Expertise', description: 'Relevant academic subject knowledge.', iconMdi: 'mdi:book-education-outline' },
    { title: 'Class / Grade', description: "Compatibility with the student's academic level.", iconMdi: 'mdi:account-school-outline' },
    { title: 'Board / Curriculum', description: "Alignment with the student's curriculum wherever applicable.", iconMdi: 'mdi:certificate-outline' },
    { title: 'Learning Requirements', description: 'Concept building, homework support, revision, examination preparation, or other needs.', iconMdi: 'mdi:clipboard-text-outline' },
    { title: 'Teaching Preference', description: 'Suitable teaching approach and learning environment.', iconMdi: 'mdi:human-male-board' },
    { title: 'Location', description: 'Home tutoring availability or online tutoring access.', iconMdi: 'mdi:map-marker-outline' },
    { title: 'Schedule', description: 'Preferred days and tutoring timings.', iconMdi: 'mdi:clock-outline' },
    { title: 'Student-Tutor Compatibility', description: "The student's comfort and response during the tutoring experience.", iconMdi: 'mdi:handshake-outline' },
  ],
  formula: {
    label: 'Smart Matching Concept',
    parts: ['Student Profile', 'Academic Requirements', 'Preferences'],
    result: 'Suitable Tutor Recommendations',
  },
}

export const spDemo = {
  badge: 'Experience Before You Commit',
  title: 'Start With a <span class="text-gradient-brand">Free Demo</span>',
  description: "Choosing a tutor is an important decision. The demo session allows students and parents to experience the tutor's:",
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  checks: ['Communication', 'Teaching style', 'Subject explanation', 'Interaction', 'Learning approach', 'Student comfort'],
  after: [
    { title: 'Like the Tutor?', description: 'Continue with the selected tutoring arrangement.', iconMdi: 'mdi:thumb-up-outline' },
    { title: 'Need a Change?', description: 'Discuss alternative tutor options, subject to availability and applicable policy.', iconMdi: 'mdi:swap-horizontal' },
    { title: 'Need Guidance?', description: 'Speak with an Indian Mentors academic counsellor.', iconMdi: 'mdi:account-voice' },
  ],
  cta: { label: 'Book Your Free Demo', href: externalLinks.studentSignup },
}

export const spModes = {
  badge: 'Flexible Learning Modes',
  title: 'Learn Where You <span class="text-gradient-brand">Learn Best</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    {
      title: 'Home Tutoring',
      description: "Personalised one-to-one tutoring at the student's home.",
      idealFor: 'Families seeking face-to-face academic support.',
      iconMdi: 'mdi:home-outline',
      href: '/services#home-tutors',
    },
    {
      title: 'Online Tutoring',
      description: 'Live one-to-one sessions through an online learning environment.',
      idealFor: 'Students seeking flexible access to tutors across locations.',
      iconMdi: 'mdi:laptop',
      href: '/services#online-tutors',
    },
    {
      title: 'Hybrid Learning',
      description: 'A combination of online and offline tutoring where applicable.',
      idealFor: 'Families seeking flexibility across different academic requirements.',
      iconMdi: 'mdi:sync',
      href: '/services#hybrid-tutors',
    },
  ],
}

export const spCoverage = {
  badge: 'Academic Coverage',
  title: 'Support Across <span class="text-gradient-brand">Academic Stages</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  school: {
    label: 'Early & School Education',
    stages: [
      {
        title: 'Pre-Primary / Nursery',
        description: 'Foundation learning and early academic development.',
        image: 'assets/img/academic-coverage/grade-1.webp',
      },
      {
        title: 'Primary School',
        description: 'Concept building, homework support, and foundational skills.',
        image: 'assets/img/academic-coverage/grade-2.webp',
      },
      {
        title: 'Middle School',
        description: 'Subject strengthening, practice, and academic consistency.',
        image: 'assets/img/academic-coverage/grade-3.webp',
      },
      {
        title: 'Secondary School',
        description: 'Concept mastery, examination preparation, and structured revision.',
        image: 'assets/img/academic-coverage/grade-4.webp',
      },
      {
        title: 'Senior Secondary',
        description: 'Board preparation, advanced subjects, and examination-focused learning.',
        image: 'assets/img/academic-coverage/grade-5.webp',
      },
    ],
  },
  beyond: {
    label: 'Beyond School',
    title: 'Competitive Examination Support',
    description:
      'Applicable preparation for examinations such as JEE, NEET, CUET, and other academic entrance requirements.',
    image: 'assets/img/academic-coverage/grade-6.webp',
    ctaLabel: 'Explore Academic Coverage',
  },
  boards: ['CBSE', 'ICSE', 'State Boards', 'IB', 'IGCSE', 'NIOS'],
  subjects: [
    'Mathematics',
    'Science',
    'English',
    'Hindi',
    'Regional Languages',
    'Social Sciences',
    'Commerce',
    'Business Studies',
    'Computer Science',
    'Coding',
  ],
  exploreHref: '/academic-coverage',
}

export const spServices = {
  badge: 'Tutoring Services',
  title: 'Choose the Support That Fits Your <span class="text-gradient-brand">Requirement</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    { title: 'Home Tutors', description: 'One-to-one tutoring at home.', iconMdi: 'mdi:home-outline', href: '/services#home-tutors' },
    { title: 'Online Tutors', description: 'Live personalised online sessions.', iconMdi: 'mdi:laptop', href: '/services#online-tutors' },
    { title: 'Hybrid Tutors', description: 'A mix of home and online sessions around your week.', iconMdi: 'mdi:sync', href: '/services#hybrid-tutors' },
    { title: 'Shadow Tutors', description: 'Additional academic assistance for students requiring personalised support.', iconMdi: 'mdi:account-supervisor-outline', href: '/services#shadow-tutors' },
    { title: 'Travel Tutors', description: 'Tutoring support for students travelling domestically or internationally.', iconMdi: 'mdi:airplane', href: '/services#travel-tutors' },
    { title: 'Live-In Family Tutors', description: 'Dedicated tutoring arrangements for families requiring live-in academic support.', iconMdi: 'mdi:home-account', href: '/services#live-in-tutors' },
    { title: 'Special Educators', description: 'Individualised educational support for diverse learning and developmental needs.', iconMdi: 'mdi:puzzle-outline', href: '/services#special-educators' },
    { title: 'Home Schooling Support', description: 'Structured academic tutoring for home-based education.', iconMdi: 'mdi:book-open-page-variant-outline', href: '/services#home-schooling' },
  ],
  cta: { label: 'Explore All Tutoring Services', href: '/services' },
}

export const spJourney = {
  badge: 'From First Enquiry to Regular Learning',
  title: 'A Simple, Structured <span class="text-gradient-brand">Enrollment Journey</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  steps: [
    { no: '01', title: 'Register', description: "Share the student's basic information and academic requirements." },
    { no: '02', title: 'Counselling', description: 'Discuss class, subjects, goals, location, schedule, and tutoring requirements.' },
    { no: '03', title: 'Tutor Matching', description: "Explore suitable tutor profiles based on the student's requirements." },
    { no: '04', title: 'Free Demo', description: 'Attend a demo session and experience the tutor.' },
    { no: '05', title: 'Feedback', description: 'Share your experience and discuss any required changes.' },
    { no: '06', title: 'Select Plan', description: 'Choose the appropriate tutoring subscription and payment option.' },
    { no: '07', title: 'Start Sessions', description: 'Begin regular personalised tutoring.' },
    { no: '08', title: 'Monitor', description: 'Track attendance, sessions, feedback, and applicable academic progress.' },
  ],
  flow: ['Register', 'Counsel', 'Match', 'Demo', 'Select', 'Learn', 'Monitor', 'Improve'],
}

export const spFamilyPlans = {
  badge: 'Find Your Learning Intensity',
  title: 'Three Learning Plans. Three Levels of <span class="text-gradient-brand">Academic Support.</span>',
  description:
    "Choose the level of tutoring intensity according to your child's academic requirements.",
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    {
      id: 'gold',
      name: 'Gold',
      subtitle: 'Smart Start',
      duration: '1 Hour / Day',
      grades: 'Nursery – Class 8',
      subjects: '1–4 Subjects',
      focus: 'Homework • Concept Clarity • Practice',
      journey: 'Understand → Practise → Improve → Stay Consistent',
      progress: 'Monthly',
      support: 'Standard',
      description: 'Focused academic support for students who need regular assistance with homework, concepts and classroom learning.',
      features: [
        'Personalised one-to-one tutoring',
        'Homework support & concept clarity',
        'Attendance tracking',
        'Monthly parent updates',
        'Standard support',
      ],
      code: 'IM · GOLD',
      cta: { label: 'Explore Gold', href: '/student-parent/subscription?plan=gold#plan-builder' },
      popular: false,
      accent: 'gold' as const,
    },
    {
      id: 'diamond',
      name: 'Diamond',
      subtitle: 'Performance Plan',
      duration: '1.5 Hours / Day',
      grades: 'Class 6 – 12',
      subjects: '2–5 Subjects',
      focus: 'Concepts • Practice • Revision • Problem Solving',
      journey: 'Understand → Practise → Revise → Perform',
      progress: 'Bi-Weekly',
      support: 'Priority',
      description: 'A balanced plan for students who need deeper understanding, regular practice, revision and problem-solving.',
      features: [
        'Personalised tutoring',
        'Expanded / priority tutor discovery',
        'Structured practice and revision',
        'Bi-weekly subject feedback',
        'Priority support',
      ],
      code: 'IM · DIAMOND',
      cta: { label: 'Explore Diamond', href: '/student-parent/subscription?plan=diamond#plan-builder' },
      popular: true,
      accent: 'diamond' as const,
    },
    {
      id: 'platinum',
      name: 'Platinum',
      subtitle: 'Premium Excellence',
      duration: '2 Hours / Day',
      grades: 'Class 9 – 12',
      subjects: 'Multiple / All Subjects',
      focus: 'Full Coverage • Advanced Practice • Exam Preparation',
      journey: 'Learn → Practise → Master → Prepare',
      progress: 'Weekly Detailed',
      support: 'Premium',
      description: 'Comprehensive tutoring support for students requiring extended learning time, syllabus coverage and examination-focused preparation.',
      features: [
        'Personalised tutoring',
        'Smart tutor recommendations',
        'Weekly progress reporting',
        'Parent review & academic coordination',
        'Premium support',
      ],
      code: 'IM · PLATINUM',
      cta: { label: 'Explore Platinum', href: '/student-parent/subscription?plan=platinum#plan-builder' },
      popular: false,
      accent: 'platinum' as const,
    },
  ],
  cta: { label: 'Compare Learning Plans', href: '#plan-comparison' },
}

export const subscriptionHero = {
  badge: 'Flexible · Personalised · Transparent',
  title: 'Choose the Right Learning Plan for Your Child',
  description:
    "Whether your child needs homework support, concept development, regular academic improvement, board preparation, or intensive exam support, Indian Mentors provides structured personalised tutoring designed around individual learning requirements.",
  caption: 'Personalised Tutor. Structured Learning. Continuous Academic Support.',
  primaryCta: {
    label: 'Explore Learning Plans',
    href: '#learning-plans',
    icon: 'mdi:school-outline',
  },
  secondaryCta: {
    label: 'Start 1-Month Trial',
    href: '#trial',
    icon: 'mdi:calendar-today',
  },
  tertiaryCta: {
    label: 'Talk to an Academic Counsellor',
    href: '/contact',
    icon: 'mdi:account-voice',
  },
  ticker: [
    'Flexible Learning',
    'Transparent Tenures',
    'Personalised Support',
    'Gold · Diamond · Platinum',
    '1-Month Paid Trial',
    'Annual Savings up to 15%',
  ],
}

export const enrollmentHero = {
  badge: 'Student Enrollment • Flexible • Personalised',
  title: 'Choose the Right Student Plan<br class="hidden sm:inline" /> For Your Learning Journey',
  subtitle: 'Start Free. Explore More. Learn Better.',
  description:
    'At Indian Mentors, students and parents can start with a Free Student Profile to explore personalised tutoring, discover suitable tutors, and experience a demo session before moving to a more structured learning experience.<br><br>For students who want greater access, academic monitoring, priority support, and personalised tutor recommendations, the Premium Student Profile provides an enhanced platform experience.',
  caption: "Explore First. Upgrade When You're Ready.",
  primaryCta: {
    label: 'Create Free Student Profile',
    href: externalLinks.studentSignup,
    icon: 'mdi:account-plus-outline',
  },
  secondaryCta: {
    label: 'Explore Premium Plan',
    href: '#premium-profile',
    icon: 'mdi:star-four-points-outline',
  },
  ticker: [
    'Free Student Profile',
    'Premium Student Profile',
    'Tutor Discovery',
    'Free Demo',
    'Academic Monitoring',
    'Priority Support',
    'Parent Dashboard',
    'Flexible Enrollment',
  ],
}

export const spPlansPreview = {
  badge: 'Subscription Plans',
  title: 'Gold, Diamond, or Platinum — <span class="text-gradient-brand">Pick the Intensity</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  description:
    'Structured tutoring packages with different daily hours, reporting, and parent engagement. Explore the full comparison on the subscription page.',
  cta: { label: 'Compare Subscription Plans', href: '/student-parent/subscription' },
}

export const spEnrollmentPreview = {
  badge: 'Enrollment',
  title: 'A Simple Path From Enquiry to <span class="text-gradient-brand">Regular Learning</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  description:
    'Register, match a tutor, attend a free demo, then start with a Free or Premium student profile. See the full journey and plan details on the enrollment page.',
  cta: { label: 'See Enrollment Process', href: '/student-parent/enrollment' },
}

export const spProfiles = {
  badge: 'Enrollment Options',
  title: 'Start Free or Go Premium',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    {
      id: 'free',
      name: 'Free Student Profile',
      price: '₹0',
      description: 'Create a basic student profile, explore tutors and services, and get started with your learning journey.',
      features: [
        'Basic student profile',
        'Browse available tutors',
        'Explore services',
        'Book a free demo',
      ],
      cta: { label: 'Create Free Profile', href: externalLinks.studentSignup },
      featured: false,
    },
    {
      id: 'premium',
      name: 'Premium Student Profile',
      price: '₹1,200',
      priceNote: '/ Year',
      description: 'Enhanced profile with priority tutor matching, detailed academic assessment, and dedicated counsellor support.',
      features: [
        'Priority tutor matching',
        'Detailed academic assessment',
        'Dedicated counsellor support',
        'Advanced dashboard access',
      ],
      cta: { label: 'Explore Premium Profile', href: externalLinks.studentSignup },
      featured: true,
    },
  ],
}

export const spMonitoring = {
  badge: 'Academic Monitoring',
  title: 'Keep Learning <span class="text-gradient-brand">Visible</span>',
  description:
    'Indian Mentors combines tutoring with structured monitoring to help parents and students maintain greater visibility throughout the learning journey.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    { title: 'Attendance', description: 'Monitor scheduled and completed sessions.', iconMdi: 'mdi:calendar-check-outline' },
    { title: 'Session Records', description: 'Maintain relevant tutoring and session information.', iconMdi: 'mdi:notebook-outline' },
    { title: 'Progress', description: 'Review available academic progress indicators.', iconMdi: 'mdi:chart-line' },
    { title: 'Tutor Feedback', description: 'Understand learning participation and areas requiring attention.', iconMdi: 'mdi:comment-quote-outline' },
    { title: 'Payment History', description: 'View applicable payment and subscription information.', iconMdi: 'mdi:credit-card-outline' },
    { title: 'Academic Insights', description: 'Use available information to identify strengths, weaknesses, and learning priorities.', iconMdi: 'mdi:chart-box-outline' },
  ],
  promise: 'No Guesswork. Greater Visibility. Better Communication.',
}

export const spParentDashboard = {
  badge: 'Parent Dashboard',
  title: 'Everything Parents Need in <span class="text-gradient-brand">One Place</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  modules: [
    { title: 'Student Profile', description: 'View student information and academic requirements.', iconMdi: 'mdi:account-outline' },
    { title: 'Tutor Details', description: 'Access relevant tutor information.', iconMdi: 'mdi:human-male-board' },
    { title: 'Session Calendar', description: 'View scheduled tutoring sessions.', iconMdi: 'mdi:calendar-month-outline' },
    { title: 'Attendance', description: 'Monitor session attendance.', iconMdi: 'mdi:clipboard-check-outline' },
    { title: 'Academic Progress', description: 'Review available progress information.', iconMdi: 'mdi:chart-bar' },
    { title: 'Homework & Notes', description: 'Access applicable academic notes and homework records.', iconMdi: 'mdi:notebook-edit-outline' },
    { title: 'Payments', description: 'Review applicable subscription and payment history.', iconMdi: 'mdi:credit-card-outline' },
    { title: 'Support', description: 'Raise and track service-related requests.', iconMdi: 'mdi:lifebuoy' },
  ],
  flow: ['Dashboard', 'Sessions', 'Attendance', 'Progress', 'Payments', 'Support'],
}

export const spStudentDashboard = {
  badge: 'Student Dashboard',
  title: 'Give Students More Control Over <span class="text-gradient-brand">Their Learning</span>',
  description: 'Students can use their applicable dashboard features to stay organised and engaged.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  tools: [
    { title: 'Upcoming Sessions', iconMdi: 'mdi:calendar-clock-outline' },
    { title: 'Subjects & Tutors', iconMdi: 'mdi:book-education-outline' },
    { title: 'Homework & Notes', iconMdi: 'mdi:notebook-edit-outline' },
    { title: 'Learning Progress', iconMdi: 'mdi:chart-line' },
    { title: 'Messages', iconMdi: 'mdi:message-text-outline' },
    { title: 'Feedback', iconMdi: 'mdi:star-outline' },
    { title: 'Subscription Information', iconMdi: 'mdi:credit-card-outline' },
    { title: 'Support', iconMdi: 'mdi:lifebuoy' },
  ],
  goal: 'Know What to Learn → Attend → Practise → Review → Improve',
}

export const spCollaboration = {
  badge: 'Parent + Student Collaboration',
  title: 'Better Results Begin With Better <span class="text-gradient-brand">Communication</span>',
  description: 'Academic progress is strongest when student, parent, tutor, and academic support team work together.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  roles: [
    { title: 'Student', description: 'Learn + Practise + Participate', iconMdi: 'mdi:school-outline' },
    { title: 'Tutor', description: 'Teach + Guide + Evaluate', iconMdi: 'mdi:human-male-board' },
    { title: 'Parent', description: 'Support + Monitor + Communicate', iconMdi: 'mdi:account-group-outline' },
    { title: 'Indian Mentors', description: 'Coordinate + Monitor + Support', iconMdi: 'mdi:handshake-outline' },
  ],
  objective: 'Consistent Academic Growth',
}

export const spWhyFamilies = {
  badge: 'Why Families Choose Indian Mentors',
  title: 'What Sets Our Tutoring Experience <span class="text-gradient-brand">Apart</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    { title: 'Verified Tutors', description: 'Tutor profiles are supported by applicable screening and verification processes.', iconMdi: 'mdi:shield-check-outline' },
    { title: 'Personalised Learning', description: "Tutoring is structured around the individual student's requirements.", iconMdi: 'mdi:account-star-outline' },
    { title: 'Transparent Systems', description: 'Clear processes for enrollment, tutoring, payments, and academic coordination.', iconMdi: 'mdi:eye-check-outline' },
    { title: 'Flexible Learning', description: 'Multiple tutoring formats and subscription options.', iconMdi: 'mdi:tune-variant' },
    { title: 'Academic Monitoring', description: 'Structured attendance, session, and progress tracking.', iconMdi: 'mdi:chart-box-outline' },
    { title: 'Technology-Enabled Platform', description: 'Digital dashboards and ERP-based systems support the tutoring journey.', iconMdi: 'mdi:monitor-dashboard' },
    { title: 'Tutor Replacement Support', description: 'Assistance with tutor replacement according to applicable policies.', iconMdi: 'mdi:swap-horizontal' },
    { title: 'Dedicated Coordination', description: 'Academic and service support for parents and students.', iconMdi: 'mdi:headset' },
  ],
}

export const spGoals = {
  badge: 'Learning Goals',
  title: "What Is Your Child <span class=\"text-gradient-brand\">Working Toward?</span>",
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    { title: 'Foundation', description: 'Build stronger academic fundamentals.', goal: 'Concept Clarity', iconMdi: 'mdi:sprout-outline' },
    { title: 'School Performance', description: 'Improve classroom learning and regular academic performance.', goal: 'Consistency', iconMdi: 'mdi:book-open-page-variant-outline' },
    { title: 'Board Preparation', description: 'Prepare systematically for board examinations.', goal: 'Exam Readiness', iconMdi: 'mdi:target' },
    { title: 'Competitive Preparation', description: 'Build subject knowledge and problem-solving ability for applicable competitive examinations.', goal: 'Competitive Readiness', iconMdi: 'mdi:rocket-launch-outline' },
    { title: 'Skill Development', description: 'Develop stronger study habits, time management, and academic confidence.', goal: 'Long-Term Learning Skills', iconMdi: 'mdi:brain' },
  ],
}

export const spFamilyNeeds = {
  badge: 'Flexible for Different Family Requirements',
  title: 'One Platform. Different <span class="text-gradient-brand">Learning Needs.</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    { title: 'For Busy Parents', description: 'Flexible tutoring schedules and structured monitoring.', iconMdi: 'mdi:briefcase-clock-outline' },
    { title: 'For Students Needing Extra Support', description: 'One-to-one attention and targeted academic assistance.', iconMdi: 'mdi:hand-heart-outline' },
    { title: 'For Multi-Subject Learners', description: 'Multiple-subject tutoring options under applicable plans.', iconMdi: 'mdi:bookshelf' },
    { title: 'For Exam-Focused Students', description: 'Structured preparation and regular practice.', iconMdi: 'mdi:file-document-edit-outline' },
    { title: 'For Students Away From Home', description: 'Online tutoring access across locations.', iconMdi: 'mdi:map-marker-distance' },
    { title: 'For Families Seeking Home Support', description: 'Personalised home tutoring options.', iconMdi: 'mdi:home-heart' },
  ],
}

export const spTrust = {
  badge: 'Trust & Transparency',
  title: "Your Child's Education Deserves Clarity",
  description: 'Indian Mentors aims to maintain transparency throughout the tutoring journey.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    {
      badge: 'C1 · Fees',
      title: 'Clear Information',
      description: 'Understand applicable tutoring fees, plans, and service conditions.',
      iconMdi: 'mdi:information-outline',
    },
    {
      badge: 'C2 · Contact',
      title: 'Clear Communication',
      description: 'Know how to communicate with tutors and support teams.',
      iconMdi: 'mdi:message-outline',
    },
    {
      badge: 'C3 · Progress',
      title: 'Clear Monitoring',
      description: 'Access applicable attendance and academic information.',
      iconMdi: 'mdi:eye-outline',
    },
    {
      badge: 'C4 · Policies',
      title: 'Clear Policies',
      description: 'Understand cancellation, rescheduling, refund, tutor replacement, and subscription provisions.',
      iconMdi: 'mdi:file-document-outline',
    },
    {
      badge: 'C5 · Support',
      title: 'Clear Support',
      description: 'Get assistance when questions or service issues arise.',
      iconMdi: 'mdi:lifebuoy',
    },
  ],
}

export const spCycle = {
  badge: 'Parent & Student Success Cycle',
  title: 'A Continuous <span class="text-gradient-brand">Learning Journey</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  steps: [
    { title: 'Assess', description: "Understand the student's current requirements." },
    { title: 'Plan', description: 'Create a suitable academic direction.' },
    { title: 'Teach', description: 'Deliver personalised tutoring.' },
    { title: 'Practise', description: 'Reinforce concepts through exercises and revision.' },
    { title: 'Monitor', description: 'Track attendance, participation, and available progress.' },
    { title: 'Review', description: 'Identify strengths and areas for improvement.' },
    { title: 'Adjust', description: 'Modify the learning approach where required.' },
    { title: 'Grow', description: 'Continue building academic capability and confidence.' },
  ],
  tagline: 'Learning Is Not a One-Time Event. It Is a Continuous Journey.',
}

export const spFaqs = {
  badge: 'Frequently Asked Questions',
  title: 'Parents & Students <span class="text-gradient-brand">FAQs</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    {
      id: 'find-tutor',
      question: 'How do I find a suitable tutor?',
      answer:
        'Create a student profile, share your academic requirements, explore suitable tutor profiles, and book an applicable demo session.',
    },
    {
      id: 'demo-before',
      question: 'Can I attend a demo before choosing a tutor?',
      answer:
        'Yes. Applicable free demo sessions are available according to the selected enrollment option and service terms.',
    },
    {
      id: 'change-tutor',
      question: 'Can I change the tutor if the student is not comfortable?',
      answer:
        'Tutor replacement support is available according to the applicable plan and tutor replacement policy.',
    },
    {
      id: 'home-online',
      question: 'Do you provide home and online tutoring?',
      answer:
        'Yes. Indian Mentors provides applicable home tutoring and online tutoring services, along with other specialised tutoring services.',
    },
    {
      id: 'monitor-progress',
      question: 'Can parents monitor attendance and progress?',
      answer:
        'Yes. Applicable parent/student dashboard features provide visibility into sessions, attendance, academic information, and other available records.',
    },
    {
      id: 'competitive',
      question: 'Do you provide competitive exam preparation?',
      answer:
        'Yes. Applicable tutoring services can support competitive examination preparation such as JEE, NEET, CUET, and other academic requirements, subject to tutor availability and specific requirements.',
    },
    {
      id: 'no-annual',
      question: 'Can I start without taking an annual subscription?',
      answer:
        'Yes. Families can explore applicable free profile, demo, trial, or subscription options before making a long-term commitment, subject to the relevant plan terms.',
    },
    {
      id: 'counsellor',
      question: 'How can I speak with an academic counsellor?',
      answer:
        'Parents and students can contact Indian Mentors through the available counselling and support channels.',
    },
  ],
}

export const spFinalCta = {
  title: 'Ready to Build a Better Learning Journey?',
  description:
    "Whether your child needs help with homework, stronger concepts, examination preparation, or long-term academic mentoring, Indian Mentors can help you explore a tutoring arrangement designed around their needs.",
  supporting: 'Start With the Right Step',
  ctas: [
    { label: 'Book a Free Demo', href: externalLinks.studentSignup, iconMdi: 'mdi:calendar-check-outline', primary: true },
    { label: 'Find a Tutor', href: externalLinks.studentSignup, iconMdi: 'mdi:account-search-outline' },
    { label: 'Talk to an Academic Counsellor', href: '/contact', iconMdi: 'mdi:account-voice' },
  ],
}

export const subscriptionFinalCta = {
  title: "Give Your Child the Right Time, Support & Learning Structure",
  description:
    "Whether you want to experience personalised tutoring for one month, prepare for an important examination, or build a complete academic-year learning journey, Indian Mentors provides structured options designed around your child's needs.",
  supporting: 'Choose the Plan. Select the Tenure. Start Learning.',
  ctas: [
    { label: 'Choose Your Subscription', href: '#plan-builder', iconMdi: 'mdi:clipboard-check-outline', primary: true },
    { label: 'Start 1-Month Trial', href: '#trial', iconMdi: 'mdi:calendar-today' },
    { label: 'Book a Demo', href: externalLinks.studentSignup, iconMdi: 'mdi:calendar-check-outline' },
    { label: 'Talk to an Academic Counsellor', href: '/contact', iconMdi: 'mdi:account-voice' },
  ],
}

export const enrollmentStart = {
  badge: 'Two Ways to Get Started',
  title: 'Choose the Level of Support <span class="text-gradient-brand">You Need</span>',
  description:
    'Whether you are exploring tutoring for the first time or looking for a more structured academic experience, Indian Mentors gives you the flexibility to choose.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
}

export const enrollmentFreeDetail = {
  badge: 'Free Profile',
  price: '₹0 — Start Exploring',
  title: 'The Free Student Profile',
  description:
    'The Free Student Profile provides an easy starting point for parents and students who want to understand how personalised tutoring works before choosing a regular tutoring plan.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  includedLabel: "What's Included",
  included: [
    { title: 'Student Profile', description: 'Create a profile with student name, grade, subjects, and location.', iconMdi: 'mdi:account-outline' },
    { title: 'Tutor Discovery', description: 'Browse approximately 3–5 available tutor profiles.', iconMdi: 'mdi:magnify' },
    { title: 'Free Online Demo', description: 'Book 1 free online demo session.', iconMdi: 'mdi:video-outline' },
    { title: 'Plan Visibility', description: 'View applicable tutoring fee structures and subscription options.', iconMdi: 'mdi:currency-inr' },
    { title: 'Notifications', description: 'Receive updates related to tutor assignments and demo sessions.', iconMdi: 'mdi:bell-outline' },
    { title: 'Basic Support', description: 'Access support chat during applicable service hours.', iconMdi: 'mdi:chat-outline' },
    { title: 'Demo Feedback', description: 'Receive basic feedback after the demo session.', iconMdi: 'mdi:comment-quote-outline' },
    { title: 'Demo Attendance', description: 'View basic attendance information for demo sessions.', iconMdi: 'mdi:clipboard-check-outline' },
  ],
  idealLabel: 'Free Profile Is Ideal For',
  idealFor: ['Explore', 'Compare', 'Experience', 'Decide'],
  cta: { label: 'Create Free Student Profile', href: externalLinks.studentSignup },
}

export const enrollmentPremiumDetail = {
  badge: 'Premium Profile',
  price: '₹1,200 / Year',
  priceNote: 'Approximately ₹100 / Month',
  title: 'Go Beyond Tutor Discovery',
  description:
    'The Premium Student Profile is designed for students and families who want a more structured and connected tutoring experience through enhanced tutor access, academic tracking, personalised recommendations, and dedicated assistance.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  plusLabel: 'Includes Everything in Free, Plus:',
  features: [
    {
      title: 'Unlimited Tutor Discovery',
      description: 'Explore a broader range of available tutors and connect with suitable mentors according to your academic requirements.',
      iconMdi: 'mdi:rocket-launch-outline',
    },
    {
      title: 'Priority Demo Scheduling',
      description: 'Get priority access to available demo sessions and reduce waiting time for tutor discovery.',
      iconMdi: 'mdi:lightning-bolt-outline',
    },
    {
      title: 'Up to 3 Free Offline Demo Sessions',
      description: 'Experience tutors in a more personalised offline learning environment, subject to applicable service availability.',
      iconMdi: 'mdi:video-outline',
    },
    {
      title: 'Tutor Replacement Support',
      description: 'Access tutor replacement support with a 48-hour target, subject to applicable policy and tutor availability.',
      iconMdi: 'mdi:swap-horizontal',
    },
    {
      title: 'Multiple Subject Enrollment',
      description: 'Manage multiple subjects under one student account for a more integrated tutoring experience.',
      iconMdi: 'mdi:bookshelf',
    },
    {
      title: 'Flexible Payment Options',
      description: 'Access applicable half-yearly and annual plans.',
      iconMdi: 'mdi:credit-card-outline',
      points: ['Half-Yearly Plans', 'Annual Plans'],
    },
    {
      title: 'Dedicated Key Account Manager',
      description: 'Receive personalised assistance for coordination, tutoring requirements, and service-related support.',
      iconMdi: 'mdi:account-tie-outline',
    },
    {
      title: 'Detailed Academic Reports',
      description: 'Monitor attendance, performance, learning progress, and academic insights.',
      iconMdi: 'mdi:chart-box-outline',
      points: ['Attendance', 'Performance', 'Learning Progress', 'Academic Insights'],
    },
    {
      title: 'Parent & Student Dashboard',
      description: 'Access structured information including session tracking, tutor details, academic performance, and payment history.',
      iconMdi: 'mdi:monitor-dashboard',
      points: ['Session Tracking', 'Tutor Details', 'Academic Performance', 'Payment History'],
    },
    {
      title: 'AI-Powered Tutor Recommendations',
      description: 'Receive tutor suggestions based on relevant profile information.',
      iconMdi: 'mdi:robot-outline',
      points: ['Subject', 'Grade', 'Learning Requirements', 'Preferred Learning Style'],
    },
    {
      title: 'Priority Support',
      description: 'Access priority assistance through applicable WhatsApp and phone support channels.',
      iconMdi: 'mdi:phone-outline',
    },
    {
      title: 'Exclusive Benefits',
      description: 'Eligible Premium members may receive additional platform benefits.',
      iconMdi: 'mdi:gift-outline',
      points: [
        'Discounts on selected long-term packages',
        'Achievement certificates after applicable course completion',
        'Additional discounts on add-on subject enrollment',
      ],
    },
  ],
  cta: { label: 'Upgrade to Premium Student Profile', href: externalLinks.studentSignup },
}

export const enrollmentWhyPremium = {
  badge: 'Why Upgrade to Premium?',
  title: 'More Access. More Visibility. <span class="text-gradient-brand">More Academic Support.</span>',
  description: 'The Premium Student Profile is designed for families who want more than basic tutor discovery.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    { label: 'Find', title: 'Find', description: 'Access a wider range of tutor profiles and personalised recommendations.', iconMdi: 'mdi:magnify' },
    { label: 'Connect', title: 'Connect', description: 'Get priority access to demo scheduling and tutor coordination.', iconMdi: 'mdi:lightning-bolt-outline' },
    { label: 'Track', title: 'Track', description: 'Monitor attendance, sessions, performance, and learning progress.', iconMdi: 'mdi:chart-box-outline' },
    { label: 'Engage', title: 'Engage', description: "Give parents greater visibility into the student's tutoring journey.", iconMdi: 'mdi:account-group-outline' },
    { label: 'Support', title: 'Support', description: 'Receive dedicated assistance and priority service support.', iconMdi: 'mdi:handshake-outline' },
    { label: 'Grow', title: 'Grow', description: 'Build a more structured tutoring experience across multiple subjects.', iconMdi: 'mdi:book-open-page-variant-outline' },
  ],
}

export const enrollmentHow = {
  badge: 'How Student Enrollment Works',
  title: 'From Profile Creation to <span class="text-gradient-brand">Personalised Learning</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  steps: [
    {
      no: '01',
      title: 'Create Your Student Profile',
      description: 'Enter basic information about the student.',
      detail: 'Grade • Subjects • Location • Academic Requirements',
    },
    {
      no: '02',
      title: 'Explore Tutors',
      description: 'Browse available tutor profiles according to your requirements.',
    },
    {
      no: '03',
      title: 'Book a Demo',
      description: "Experience the tutor's teaching style and interaction.",
    },
    {
      no: '04',
      title: 'Evaluate the Experience',
      description: 'Consider tutor compatibility, teaching approach, communication, and schedule.',
    },
    {
      no: '05',
      title: 'Select Your Tutoring Plan',
      description: 'Choose the appropriate tutoring service and subscription plan.',
    },
    {
      no: '06',
      title: 'Start Personalised Learning',
      description: 'Begin structured one-to-one tutoring with your selected mentor.',
    },
  ],
  premiumLabel: 'Premium Journey',
  premiumFlow: [
    'Create Profile',
    'Upgrade',
    'Get Recommendations',
    'Priority Demo',
    'Select Tutor',
    'Start Learning',
    'Track Progress',
  ],
}

export const enrollmentDashboard = {
  badge: 'Premium Academic Dashboard',
  title: 'Everything Important in <span class="text-gradient-brand">One Place</span>',
  description: 'Premium students and parents can access a more structured view of their tutoring journey.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  modules: [
    { title: 'Sessions', description: 'View upcoming and completed tutoring sessions.', iconMdi: 'mdi:calendar-month-outline' },
    { title: 'Tutor Details', description: 'Access information about the assigned tutor.', iconMdi: 'mdi:human-male-board' },
    { title: 'Performance', description: 'Review available academic performance indicators.', iconMdi: 'mdi:chart-bar' },
    { title: 'Attendance', description: 'Track tutoring attendance and session records.', iconMdi: 'mdi:clipboard-check-outline' },
    { title: 'Payments', description: 'View applicable payment and subscription history.', iconMdi: 'mdi:credit-card-outline' },
    { title: 'Progress', description: 'Monitor available learning progress insights.', iconMdi: 'mdi:chart-line' },
  ],
  previewLabel: 'Dashboard Overview',
  preview: ['Upcoming Session', 'Attendance', 'Tutor', 'Progress', 'Payment'],
}

export const enrollmentMatching = {
  badge: 'Smart Tutor Matching',
  title: 'Finding the Right Tutor <span class="text-gradient-brand">Becomes Easier</span>',
  description: 'Premium members can receive AI-powered tutor recommendations based on relevant student requirements.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  factorsLabel: 'Matching Factors',
  factors: [
    { title: 'Subject Requirements', description: 'Match tutors with relevant subject expertise.', iconMdi: 'mdi:book-education-outline' },
    { title: 'Grade / Academic Level', description: "Identify tutors appropriate for the student's academic level.", iconMdi: 'mdi:account-school-outline' },
    { title: 'Learning Requirements', description: "Consider the student's stated learning needs.", iconMdi: 'mdi:clipboard-text-outline' },
    { title: 'Preferred Learning Style', description: 'Support more personalised tutor recommendations where sufficient profile information is available.', iconMdi: 'mdi:account-star-outline' },
  ],
  flowLabel: 'Smart Matching Flow',
  flow: [
    'Student Profile',
    'Requirements',
    'Recommendation Engine',
    'Suitable Tutor Suggestions',
    'Parent/Student Selection',
  ],
  cta: { label: 'Find My Recommended Tutors', href: externalLinks.studentSignup },
}

export const enrollmentNeeds = {
  badge: 'Designed for Different Student Needs',
  title: 'Which Student Profile Is <span class="text-gradient-brand">Right for You?</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    {
      id: 'explorer',
      name: 'Explorer',
      plan: 'Choose Free',
      description: 'You are still discovering tutoring options and want to experience the platform first.',
      goal: 'Explore & Evaluate',
      iconMdi: 'mdi:sprout-outline',
      featured: false,
    },
    {
      id: 'learner',
      name: 'Learner',
      plan: 'Choose Premium',
      description: 'You want greater tutor access, regular tutoring, and improved visibility into your learning journey.',
      goal: 'Learn & Improve',
      iconMdi: 'mdi:chart-line',
      featured: true,
    },
    {
      id: 'exam',
      name: 'Exam Preparer',
      plan: 'Choose Premium',
      description: 'You need structured academic support, multiple subjects, progress tracking, and personalised tutor recommendations.',
      goal: 'Prepare & Perform',
      iconMdi: 'mdi:target',
      featured: true,
    },
  ],
}

export const enrollmentValue = {
  badge: 'Premium Value',
  title: 'One Small Annual Investment. A More <span class="text-gradient-brand">Connected Learning Experience.</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  price: '₹1,200 / Year',
  priceNote: '≈ ₹100 / Month',
  description:
    'Premium provides additional platform-level benefits designed to make tutor discovery, academic monitoring, and ongoing support more convenient.',
  highlightsLabel: 'Premium Value Highlights',
  highlights: [
    'Unlimited Tutor Discovery',
    'Personalised Tutor Recommendations',
    'Priority Demo Scheduling',
    'Detailed Progress Tracking',
    'Dedicated Support',
    'Multi-Subject Management',
  ],
  card: 'For approximately ₹100 per month, unlock a more structured way to discover, manage, and monitor personalised tutoring.',
  cta: { label: 'Unlock Premium Benefits', href: externalLinks.studentSignup },
}

export const enrollmentChoose = {
  badge: 'Free or Premium?',
  title: 'Start Where You Are <span class="text-gradient-brand">Comfortable</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  free: {
    title: 'Choose FREE if:',
    items: [
      'You are exploring tutoring for the first time',
      'You want to browse a limited number of tutors',
      'You want to experience one online demo',
      'You are still evaluating your options',
    ],
    cta: { label: 'Start Free', href: externalLinks.studentSignup },
  },
  premium: {
    title: 'Choose PREMIUM if:',
    items: [
      'You want broader tutor access',
      'You need multiple subjects',
      'You want personalised tutor recommendations',
      'You want detailed academic tracking',
      'You want priority support',
      'You want a more structured tutoring experience',
    ],
    cta: { label: 'Go Premium', href: externalLinks.studentSignup },
  },
}

export const enrollmentTerms = {
  badge: 'Important Information',
  title: 'Transparent Enrollment Terms',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    'The Student Enrollment Profile is separate from the tutoring subscription fee unless specifically stated otherwise in the applicable plan.',
    'Premium membership provides the platform and service benefits described for the applicable membership period. It does not itself guarantee tutor availability, academic results, examination scores, or specific learning outcomes.',
    'Tutor matching, replacement, demo availability, support response, discounts, and other benefits are subject to applicable Indian Mentors policies, tutor availability, service area, and plan conditions.',
    'Applicable fees, refunds, cancellation provisions, and membership terms should be reviewed before payment.',
  ],
}

export const enrollmentFaqs = {
  badge: 'Frequently Asked Questions',
  title: 'Student Enrollment <span class="text-gradient-brand">FAQs</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    {
      id: 'free-profile',
      question: 'What is a Free Student Profile?',
      answer:
        'It is a ₹0 profile that allows students and parents to create their student account, explore a limited number of tutors, and book an applicable free online demo.',
    },
    {
      id: 'premium-profile',
      question: 'What is the Premium Student Profile?',
      answer:
        'It is an annual student membership priced at ₹1,200 per year, designed to provide enhanced tutor access, recommendations, academic tracking, and support.',
    },
    {
      id: 'premium-tutoring-fee',
      question: 'Is Premium tutoring included in the ₹1,200 fee?',
      answer:
        'The Premium Student Profile fee is a membership/profile fee. Applicable tutoring sessions and subscription plans may be charged separately according to the selected tutoring service and plan.',
    },
    {
      id: 'multi-subject',
      question: 'Can I use multiple subjects under Premium?',
      answer:
        'Yes. Premium supports multiple-subject enrollment under one student account, subject to applicable tutoring plans and requirements.',
    },
    {
      id: 'demo-count',
      question: 'How many demo sessions are available?',
      answer:
        'The Free Profile includes 1 free online demo, while Premium provides up to 3 free offline demo sessions, subject to availability and applicable conditions.',
    },
    {
      id: 'replace-tutor',
      question: 'Can I replace my tutor?',
      answer:
        'Premium members receive tutor replacement support with a stated 48-hour target, subject to applicable policy and tutor availability.',
    },
    {
      id: 'parent-monitor',
      question: 'Can parents monitor academic progress?',
      answer:
        'Yes. Premium includes access to a Parent & Student Dashboard with applicable session, attendance, tutor, payment, and academic information.',
    },
    {
      id: 'premium-compulsory',
      question: 'Is Premium compulsory?',
      answer:
        'No. Students can begin with a Free Student Profile and upgrade when they require additional features.',
    },
    {
      id: 'upgrade-later',
      question: 'Can I upgrade later?',
      answer:
        'Yes. Students can start with the Free Profile and upgrade to Premium when they are ready.',
    },
  ],
}

export const enrollmentFinalCta = {
  title: 'Your Personalised Learning Journey Starts Here',
  description:
    'Whether you are exploring tutoring for the first time or ready for a more structured academic experience, Indian Mentors gives you a flexible way to get started.',
  supporting: "Start Free. Experience Personalised Tutoring. Upgrade When You're Ready.",
  ctas: [
    { label: 'Create Free Student Profile', href: externalLinks.studentSignup, iconMdi: 'mdi:account-plus-outline', primary: true },
    { label: 'Upgrade to Premium', href: externalLinks.studentSignup, iconMdi: 'mdi:star-four-points-outline' },
    { label: 'Talk to an Academic Counsellor', href: '/contact', iconMdi: 'mdi:account-voice' },
  ],
}

export const enrollmentClosing = {
  badge: 'Indian Mentors',
  title: 'Personalised Education. Trusted Tutors.',
  services: [
    'Home Tutors',
    'Online Tutors',
    'Shadow Tutors',
    'Travel Tutors',
    'Live-In Tutors',
    'Special Educators',
    'Home Schooling Support',
  ],
  links: [
    { label: 'Explore Tutors', href: externalLinks.studentSignup },
    { label: 'Book Demo', href: externalLinks.studentSignup },
    { label: 'Choose Subscription', href: '/student-parent/subscription' },
    { label: 'Track Learning', href: externalLinks.studentSignup },
  ],
  tagline: 'Explore. Connect. Learn. Grow.',
}

export const spSupport = {
  badge: 'Support Center',
  title: "We're Here When You Need Us",
  description: 'Need help selecting a tutor, understanding a subscription, or resolving a service-related question?',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  options: [
    { title: 'Live Chat', description: 'For general assistance and platform queries.', iconMdi: 'mdi:chat-outline', href: '/contact' },
    { title: 'WhatsApp Assistance', description: 'For applicable service coordination.', iconMdi: 'mdi:cellphone', href: 'https://wa.me/917389563564' },
    { title: 'Helpdesk Ticketing', description: 'Submit and track support requests.', iconMdi: 'mdi:ticket-confirmation-outline', href: '/contact' },
    { title: 'Email Support', description: 'For detailed enquiries and documentation.', iconMdi: 'mdi:email-outline', href: 'mailto:info@indianmentors.in' },
    { title: 'Phone Support', description: 'For applicable counselling and service assistance.', iconMdi: 'mdi:phone-outline', href: 'tel:+917389563564' },
  ],
  ctaCard: {
    title: 'Need help now?',
    description: 'Reach out to our support team for any assistance.',
    label: 'Contact Support',
    href: '/contact',
  },
  cta: { label: 'Contact Support', href: '/contact' },
}

export const spClosing = {
  badge: 'Indian Mentors',
  title: 'Your Child. Their Potential. Our Support.',
  paragraphs: [
    'At Indian Mentors, we believe personalised education becomes more effective when students receive the right attention and parents receive the right visibility.',
    'We bring together personalised tutors, structured learning, academic monitoring, flexible plans, and dedicated support to create a more dependable tutoring experience.',
  ],
  brand: 'Indian Mentors',
  tagline: 'Personalised Education. Trusted Tutors.',
  strip: ['Learn Better', 'Stay Supported', 'Grow With Confidence'],
  cta: { label: "Start Your Child's Learning Journey Today", href: externalLinks.studentSignup },
}
