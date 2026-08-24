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
    'Family Dashboard',
    'One-to-One Tutoring',
    'Academic Counselling',
  ],
}

export type EnrollmentPlan = {
  id: 'free' | 'premium'
  name: string
  price: string
  priceNote?: string
  tagline: string
  description: string
  featuresLabel: string
  bestFor: string[]
  cta: { label: string; href: string }
  variant: 'surface' | 'featured'
  badge?: string
}

export type SpProfileFeature = {
  title: string
  description?: string
  iconMdi?: string
  points?: string[]
  href?: string
}

export type SpProfile = {
  id: 'free' | 'premium'
  name: string
  price: string
  priceNote?: string
  equivalent?: string
  tagline: string
  description: string
  includedLabel: string
  included: SpProfileFeature[]
  idealLabel?: string
  idealFor?: string[]
  exclusiveLabel?: string
  exclusiveIntro?: string
  exclusiveItems?: string[]
  cta: { label: string; href: string }
  featured: boolean
}

export type ComparisonRow = {
  feature: string
  free: string
  premium: string
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
  footnote:
    '*Subject to applicable policy, tutor availability, and service conditions.',
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

export const enrollmentPlans: EnrollmentPlan[] = [
  {
    id: 'free',
    name: 'Free Student Profile',
    price: '₹0',
    tagline: 'Explore Personalised Tutoring',
    description:
      'Create your student profile, discover tutors, explore tutoring options, and book a free online demo before committing to regular tutoring.',
    featuresLabel: 'Best For',
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
    name: 'Premium Student Profile',
    price: '₹1200',
    priceNote: '/ Year',
    tagline: 'Advanced Academic Support',
    description:
      'Unlock enhanced tutor access, priority demo scheduling, advanced academic tracking, personalised recommendations, and dedicated support.',
    featuresLabel: 'Best For',
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
  { feature: 'Family Dashboard', free: '—', premium: '✓' },
  { feature: 'AI Tutor Recommendation', free: '—', premium: '✓' },
  { feature: 'Priority Support', free: '—', premium: '✓' },
  { feature: 'Discounts & Offers', free: '—', premium: '✓ Eligible Benefits' },
  { feature: 'Achievement Certificates', free: '—', premium: '✓ Applicable Courses' },
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
    cta: { label: 'Choose Gold', href: '/student-parent/subscription?plan=gold#learning-plans' },
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
    cta: { label: 'Choose Diamond', href: '/student-parent/subscription?plan=diamond#learning-plans' },
    accent: 'blue',
  },
  {
    id: 'platinum',
    iconMdi: 'mdi:crown',
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
    cta: { label: 'Choose Platinum', href: '/student-parent/subscription?plan=platinum#learning-plans' },
    accent: 'violet',
  },
]

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

export const spAudiences = {
  badge: 'Two Audiences. One Learning Journey.',
  title: 'Built for Students. Designed With <span class="text-gradient-brand">Parents in Mind.</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  students: {
    id: 'for-students',
    label: 'For Students',
    iconMdi: 'mdi:school-outline',
    title: 'Learn at Your Pace. Build Confidence.',
    description:
      'Personalised academic support designed around each student’s level, strengths, and goals.',
    benefitsLabel: 'Explore Student Benefits',
    benefits: [
      'One-to-one personalised tutoring',
      'Concept-based learning',
      'Doubt resolution',
      'Homework assistance',
      'Exam preparation',
      'Performance tracking',
    ],
    cta: { label: 'Explore Student Support', href: '#what-to-expect' },
  },
  parents: {
    id: 'for-parents',
    label: 'For Parents',
    iconMdi: 'mdi:account-group-outline',
    title: 'Stay Informed. Stay Involved.',
    description:
      'Greater visibility into your child’s tutoring journey — with structured updates, monitoring, and coordinated support.',
    benefitsLabel: 'Explore Parent Benefits',
    benefits: [
      'Verified tutor profiles',
      'Transparent fee information',
      'Academic progress updates',
      'Attendance monitoring',
      'Parent communication',
      'Dedicated academic assistance',
    ],
    cta: { label: 'Explore Parent Support', href: '#what-to-expect' },
  },
}

export const spNeeds = {
  badge: "Understand Your Child's 8 Learning Needs",
  title: 'Every Student Starts From a <span class="text-gradient-brand">Different Place</span>',
  description: "Before recommending a tutoring arrangement, we focus on understanding the student's requirements.",
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    { title: 'Learning <span class="text-gradient-brand">Gaps</span>', question: 'Which concepts or subjects need extra attention?', iconMdi: 'mdi:puzzle-outline' },
    { title: 'Learning <span class="text-gradient-brand">Level</span>', question: 'Where is the student academically today?', iconMdi: 'mdi:stairs' },
    { title: 'Learning <span class="text-gradient-brand">Goals</span>', question: 'Improvement, exam prep, concept building, or advanced learning?', iconMdi: 'mdi:target' },
    { title: 'Learning <span class="text-gradient-brand">Requirements</span>', question: 'Which subjects require one-to-one support?', iconMdi: 'mdi:book-education-outline' },
    { title: 'Learning <span class="text-gradient-brand">Pace</span>', question: 'Does the student need extra time to understand and practise?', iconMdi: 'mdi:timer-sand' },
    { title: 'Learning <span class="text-gradient-brand">Schedule</span>', question: 'What days and timings work best for the family?', iconMdi: 'mdi:calendar-clock-outline' },
    { title: 'Learning <span class="text-gradient-brand">Mode</span>', question: 'Is home, online, or hybrid tutoring more suitable?', iconMdi: 'mdi:laptop' },
    { title: 'Learning <span class="text-gradient-brand">Environment</span>', question: 'Which setting helps the student stay focused and consistent?', iconMdi: 'mdi:laptop' },
  ],
  outcome: "A more informed tutoring recommendation based on the student's actual requirements.",
}

export const spLearningGoals = {
  badge: 'Learning Goals',
  title: 'What Is Your Child <span class="text-gradient-brand">Working Toward?</span>',
  description:
    'Tutoring is structured around a clear academic goal — from stronger fundamentals to exam and competitive readiness.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    {
      id: 'foundation',
      title: 'Foundation',
      description: 'Build stronger academic fundamentals so core concepts stay clear.',
      goal: 'Concept Clarity',
      iconMdi: 'mdi:sprout',
    },
    {
      id: 'school-performance',
      title: 'School Performance',
      description: 'Improve classroom learning, homework, and regular academic performance.',
      goal: 'Consistency',
      iconMdi: 'mdi:book-open-page-variant-outline',
    },
    {
      id: 'board-preparation',
      title: 'Board Preparation',
      description: 'Prepare systematically for board examinations with structured revision.',
      goal: 'Exam Readiness',
      iconMdi: 'mdi:target',
    },
    {
      id: 'competitive-preparation',
      title: 'Competitive Preparation',
      description: 'Build subject knowledge and problem-solving for competitive examinations.',
      goal: 'Competitive Readiness',
      iconMdi: 'mdi:rocket-launch-outline',
    },
    {
      id: 'skill-development',
      title: 'Skill Development',
      description: 'Develop stronger study habits, time management, and academic confidence.',
      goal: 'Long-Term Learning Skills',
      iconMdi: 'mdi:brain',
    },
  ],
}

export const spRoadmap = {
  badge: 'Personalised Student Learning Roadmap',
  title: 'From Academic Requirements to a <span class="text-gradient-brand">Structured Learning Plan</span>',
  description: "A personalised tutoring journey can be structured around the student's:",
  classes: '!px-0 !py-0 mx-auto max-w-4xl',
  chain: ['Current Level', 'Learning Gaps', 'Academic Goals', 'Study Plan', 'Tutoring Sessions', 'Practice', 'Review', 'Progress'],
  steps: [
    { no: '01', title: 'Understand', description: 'Identify academic requirements and learning challenges.' },
    { no: '02', title: 'Plan', description: 'Establish subject priorities and learning objectives.' },
    { no: '03', title: 'Teach', description: 'Deliver personalised one-to-one tutoring.' },
    { no: '04', title: 'Practise', description: 'Reinforce concepts through questions, homework, and revision.' },
    { no: '05', title: 'Measure', description: 'Review learning response and academic performance.' },
    { no: '06', title: 'Improve', description: 'Identify areas requiring additional attention.' },
    { no: '07', title: 'Progress', description: 'Continue with an evolving academic support plan.' },
    { no: '08', title: 'Achieve', description: 'Build stronger concepts, confidence, and academic goals.' },
  ],
}

export const spMatching = {
  badge: 'How Indian Mentors Matches Students With Tutors',
  title: 'Finding a Tutor Is Easy. Finding the <span class="text-gradient-brand">Right Tutor</span> Matters More.',
  description: 'Tutor selection can consider multiple student requirements.',
  classes: '!px-0 !py-0 mx-auto max-w-5xl',
  considerations: [
    { title: 'Subject Expertise', description: 'Relevant academic subject knowledge.', iconMdi: 'mdi:book-education-outline' },
    { title: 'Class / Grade', description: "Fit with the student's academic level.", iconMdi: 'mdi:account-school-outline' },
    { title: 'Board / Curriculum', description: "Aligned with the student's curriculum, where applicable.", iconMdi: 'mdi:certificate-outline' },
    { title: 'Learning Requirements', description: 'Concept building, homework, revision, or exam prep.', iconMdi: 'mdi:clipboard-text-outline' },
    { title: 'Teaching Preference', description: 'A teaching style and setting that suit the student.', iconMdi: 'mdi:human-male-board' },
    { title: 'Location', description: 'Home tutoring availability or online access.', iconMdi: 'mdi:map-marker-outline' },
    { title: 'Schedule', description: 'Preferred days and tutoring timings.', iconMdi: 'mdi:clock-outline' },
    { title: 'Student-Tutor Compatibility', description: "The student's comfort and response in sessions.", iconMdi: 'mdi:handshake-outline' },
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
  description:
    'Experience the tutor’s teaching style firsthand before you commit.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  image: 'assets/img/services/home-tutors.webp',
  imageAlt: 'Student attending a one-to-one demo tutoring session',
  imageCaption: 'Try the tutor. Then decide.',
  imageNote: 'No commitment required',
  checksLabel: 'What you experience in the demo:',
  checks: [
    { title: 'Communication', iconMdi: 'mdi:message-text-outline' },
    { title: 'Teaching style', iconMdi: 'mdi:easel-outline' },
    { title: 'Subject explanation', iconMdi: 'mdi:book-open-page-variant-outline' },
    { title: 'Interaction', iconMdi: 'mdi:heart-pulse' },
    { title: 'Learning approach', iconMdi: 'mdi:lightbulb-on-outline' },
    { title: 'Student comfort', iconMdi: 'mdi:emoticon-happy-outline' },
  ],
  afterLabel: 'After the Demo',
  after: [
    { title: 'Like the Tutor?', description: 'Continue with the selected tutoring arrangement.', iconMdi: 'mdi:thumb-up-outline' },
    { title: 'Need a Change?', description: 'Discuss alternative tutor options, subject to availability.', iconMdi: 'mdi:refresh' },
    { title: 'Need Guidance?', description: 'Speak with an Indian Mentors academic counsellor.', iconMdi: 'mdi:headphones' },
  ],
  banner: {
    title: 'Book Your Free Demo',
    description: 'Experience personalised tutoring before you commit. No cost, no obligation.',
  },
  cta: { label: 'Enroll Now', href: externalLinks.studentSignup },
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
        title: 'Pre-Primary',
        description: 'Foundation learning and early academic development.',
        image: 'assets/img/academic-coverage/grade-1.webp',
      },
      {
        title: 'Primary School',
        description: 'Concept building, homework support, and core skills.',
        image: 'assets/img/academic-coverage/grade-2.webp',
      },
      {
        title: 'Middle School',
        description: 'Subject strengthening, practice, and consistency.',
        image: 'assets/img/academic-coverage/grade-3.webp',
      },
      {
        title: 'Secondary School',
        description: 'Concept mastery, exam prep, and structured revision.',
        image: 'assets/img/academic-coverage/grade-4.webp',
      },
      {
        title: 'Senior Secondary',
        description: 'Board exam prep, advanced subjects learning.',
        image: 'assets/img/academic-coverage/grade-5.webp',
      },
    ],
  },
  beyond: {
    label: 'Beyond School',
    title: 'Competitive Examination Support',
    description:
      'Applicable preparation for examinations such as JEE, NEET, CUET, and other academic entrance requirements.',
    image: 'assets/img/shared/academic.png',
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

export type SubscriptionPricingPlan = {
  id: 'gold' | 'diamond' | 'platinum'
  name: string
  iconMdi: string
  tagline: string
  metric: string
  metricUnit: string
  audience: string
  core: string[]
  additional: string[]
  ctaLabel: string
  featured: boolean
  badge?: string
}

export const spSubscriptionPricing = {
  badge: 'Find Your Learning Intensity',
  title: 'Three Learning Plans. Three Levels of <span class="text-gradient-brand">Academic Support.</span>',
  description:
    "Choose the level of tutoring intensity according to your child's academic requirements.",
  classes: '!px-0 !py-0 mx-auto max-w-5xl',
  footnote:
    'Start with a 1-month paid trial. No long-term commitment until you are ready.',
  cta: { label: 'Explore Subscription Plans', href: '/student-parent/subscription' },
  items: [
    {
      id: 'gold',
      name: 'Gold',
      iconMdi: 'mdi:trophy-outline',
      tagline: 'Affordable academic support for consistent learning.',
      metric: '1 hour',
      metricUnit: 'per day',
      audience: 'Primary & Middle School',
      core: ['Homework support', 'Concept clarity', 'Regular academic support'],
      additional: ['1–4 subjects', 'Monthly progress updates', 'Standard support'],
      ctaLabel: 'Choose Gold',
      featured: false,
    },
    {
      id: 'diamond',
      name: 'Diamond',
      iconMdi: 'mdi:diamond-stone',
      tagline: 'Our most popular plan for consistent academic improvement.',
      metric: '1.5 hours',
      metricUnit: 'per day',
      audience: 'Middle & High School',
      core: ['Deeper learning', 'Practice & revision', 'Problem solving focus'],
      additional: [
        // 'Everything in Gold +',
        '2–5 subjects',
        'Bi-weekly reports',
        'Parent dashboard',
        'Priority support',
      ],
      ctaLabel: 'Choose Diamond',
      featured: true,
      badge: 'Best Value',
    },
    {
      id: 'platinum',
      name: 'Platinum',
      iconMdi: 'mdi:crown',
      tagline: 'Comprehensive support for high-performance learners.',
      metric: '2 hours',
      metricUnit: 'per day',
      audience: 'High School & Exam Preparation',
      core: ['Intensive support', 'Board exam preparation', 'Competitive exam coaching'],
      additional: [
        // 'Everything in Diamond +',
        'Weekly detailed reporting',
        'Smart tutor recommendation',
        'Exam-focused preparation',
      ],
      ctaLabel: 'Choose Platinum',
      featured: false,
    },
  ] satisfies SubscriptionPricingPlan[],
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
    'At Indian Mentors, students and parents can start with a Free Student Profile to explore personalised tutoring, discover suitable tutors, and experience a demo session before moving to a more structured learning experience.',
  caption: "",
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
    'Family Dashboard',
    'Flexible Enrollment',
  ],
}

export const spEnrollmentPreview = {
  badge: 'Enrollment Options',
  title: 'Start Free or Go <span class="text-gradient-brand">Premium</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  description:
    'Create a student profile, explore tutors, and book a free demo — then upgrade when you want more access and support.',
  image: 'assets/img/student-parent/enrollment.webp',
  imageAlt: 'Student giving a thumbs-up while starting a personalised learning plan',
  imageCaption: 'Start free. Upgrade when you’re ready.',
  imageNote: 'Explore first. Commit when it fits.',
  cta: { label: 'Explore Enrollment Plans', href: '/student-parent/enrollment' },
}

export const spProfiles: {
  badge: string
  title: string
  classes: string
  items: SpProfile[]
} = {
  badge: 'Enrollment Options',
  title: 'Start Free or Go Premium',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    {
      id: 'free',
      name: 'Free Student Profile',
      price: '₹0',
      tagline: 'Free Profile',
      description:
        'Create a basic student profile, explore tutors and services, and get started with your learning journey.',
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
      cta: { label: 'Create  Profile', href: externalLinks.studentSignup },
      featured: false,
    },
    {
      id: 'premium',
      name: 'Premium Student Profile',
      price: '₹1,200',
      priceNote: '/ Year',
      equivalent: 'Approximately ₹100 / Month',
      tagline: 'Go Beyond Tutor Discovery',
      description:
        'Enhanced profile with priority tutor matching, detailed academic assessment, and dedicated counsellor support.',
      includedLabel: 'Includes Everything in Free, Plus:',
      included: [
        { title: 'Everything in the Free plan' },
        { title: 'Unlimited Tutor Discovery' },
        { title: 'Priority Demo Scheduling' },
        { title: 'Up to 3 Free Offline Demo Sessions' },
        { title: 'Family Dashboard' },
        { title: 'AI-Powered Tutor Recommendations' },
        { title: 'Dedicated Key Account Manager' },
        { title: 'And many more — explore for more details', href: '/student-parent/enrollment' },
      ],
      cta: { label: 'know More', href: "/student-parent/enrollment" },
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

export const spFamilyDashboard = {
  badge: 'Academic  Dashboard',
  title: 'Everything You Need in <span class="text-gradient-brand">One Place</span>',
  description:
    'Parents and students share one dashboard to stay organised, track learning, and stay connected throughout the tutoring journey.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  modules: [
    { title: 'Student Profile', description: 'View student details and academic requirements.', iconMdi: 'mdi:account-outline' },
    { title: 'Tutors & Subjects', description: 'See tutor details and the subjects they teach.', iconMdi: 'mdi:book-education-outline' },
    { title: 'Session Calendar', description: 'View scheduled and upcoming tutoring sessions.', iconMdi: 'mdi:calendar-month-outline' },
    { title: 'Attendance', description: 'Monitor session attendance and participation.', iconMdi: 'mdi:clipboard-check-outline' },
    { title: 'Academic Progress', description: 'Review progress indicators and learning insights.', iconMdi: 'mdi:chart-bar' },
    { title: 'Homework & Notes', description: 'Access academic notes and homework records.', iconMdi: 'mdi:notebook-edit-outline' },
    { title: 'Payments', description: 'Review subscription and payment history.', iconMdi: 'mdi:credit-card-outline' },
    { title: 'Feedback', description: 'Share and review session feedback and notes.', iconMdi: 'mdi:star-outline' },
    { title: 'Notifications', description: 'Get notifications for demo,homework, class, etc.', iconMdi: 'mdi:bell-outline' },
    { title: 'Support', description: 'Raise and track service-related requests.', iconMdi: 'mdi:lifebuoy' },
  ],
  flow: ['Dashboard', 'Sessions', 'Attendance', 'Progress', 'Payments', 'Support'],
}

export const spWhyFamilies = {
  badge: 'Our 5C Framework',
  title: "Your Child's Education Deserves <span class=\"text-gradient-brand\">Clarity</span>",
  description:
    'Indian Mentors aims to maintain transparency throughout the tutoring journey.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    {
      badge: 'C1 · Fees',
      title: '<span class="text-gradient-brand">Clear</span> Information',
      description: 'See tutoring fees, plans, and service conditions.',
      iconMdi: 'mdi:information-outline',
    },
    {
      badge: 'C2 · Contact',
      title: '<span class="text-gradient-brand">Clear</span> Communication',
      description: 'Know how to reach tutors and support teams.',
      iconMdi: 'mdi:message-outline',
    },
    {
      badge: 'C3 · Progress',
      title: '<span class="text-gradient-brand">Clear</span> Monitoring',
      description: 'Access attendance and academic information.',
      iconMdi: 'mdi:eye-outline',
    },
    {
      badge: 'C4 · Policies',
      title: '<span class="text-gradient-brand">Clear</span> Policies',
      description: 'Cancellations, refunds, replacements etc.',
      iconMdi: 'mdi:file-document-outline',
    },
    {
      badge: 'C5 · Support',
      title: '<span class="text-gradient-brand">Clear</span> Support',
      description: 'Get help when questions or service issues arise.',
      iconMdi: 'mdi:lifebuoy',
    },
  ],
}

export const spFamilyRequirements = {
  badge: 'Flexible for Different Family Requirements',
  title: 'One Platform. <span class="text-gradient-brand">Different Learning Needs.</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    {
      title: 'For Busy Parents',
      description: 'Flexible tutoring schedules with structured monitoring for busy families.',
      iconMdi: 'mdi:calendar-clock-outline',
    },
    {
      title: 'For Students Needing Extra Support',
      description: 'One-to-one attention with targeted academic support for students.',
      iconMdi: 'mdi:account-heart-outline',
    },
    {
      title: 'For Multi-Subject Learners',
      description: 'Multiple-subject tutoring options available under applicable learning plans.',
      iconMdi: 'mdi:book-multiple-outline',
    },
    {
      title: 'For Exam-Focused Students',
      description: 'Structured examination preparation with regular practice and focused revision.',
      iconMdi: 'mdi:clipboard-text-outline',
    },
    {
      title: 'For Students Away From Home',
      description: 'Online tutoring access that stays available across locations, wherever students are.',
      iconMdi: 'mdi:laptop',
    },
    {
      title: 'For Families Seeking Home Support',
      description: 'Personalised home tutoring options for families seeking in-person support.',
      iconMdi: 'mdi:home-account',
    },
  ],
}

export const spCycle = {
  badge: 'Parent & Student Success Cycle',
  title: 'A Continuous <span class="text-gradient-brand">Learning Journey</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  steps: [
    { title: 'Identify', description: 'Understand academic requirements, student strengths, and learning gaps.' },
    { title: 'Strategise', description: 'Create a structured learning strategy aligned with student goals.' },
    { title: 'Learn', description: 'Build strong understanding through personalised one-to-one instruction.' },
    { title: 'Reinforce', description: 'Strengthen concepts through practice, revision, and practical application.' },
    { title: 'Monitor', description: 'Track sessions, participation, performance, and learning progress.' },
    { title: 'Evaluate', description: 'Review academic development, performance, and learning outcomes.' },
    { title: 'Optimise', description: 'Refine teaching methods and learning plans based on progress.' },
    { title: 'Succeed', description: 'Build confidence, academic capability, and stronger learning outcomes.' },
  ],
  tagline: 'Learning Is Not a One-Time Event. It Is a Continuous Journey.',
}

export const spFinalCta = {
  title: 'Ready to Build a Better Learning Journey?',
  description:
    "Whether your child needs help with homework, stronger concepts, examination preparation, or long-term academic mentoring, Indian Mentors can help you explore a tutoring arrangement designed around their needs.",
  ctas: [
    { label: 'Book a Free Demo', href: externalLinks.studentSignup, primary: true },
    { label: 'Talk to an Academic Counsellor', href: '/contact' },
  ],
}

export const subscriptionFinalCta = {
  title: "Give Your Child the Right Time, Support & Learning Structure",
  description:
    "Whether you want to experience personalised tutoring for one month, prepare for an important examination, or build a complete academic-year learning journey, Indian Mentors provides structured options designed around your child's needs.",
  supporting: 'Choose the Plan. Select the Tenure. Start Learning.',
  ctas: [
    { label: 'Start 1-Month Trial', primary: true, href: externalLinks.studentSignup, iconMdi: 'mdi:calendar-today' },
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
  classes: '!px-0 !py-0 max-w-5xl',
  planLabel: 'Annual membership',
  price: '₹1,200',
  pricePeriod: '/ Year',
  priceNote: '≈ ₹100 / Month',
  hookPrice: '₹100',
  hookPeriod: 'per month',
  billingNote: 'Billed annually at ₹1,200',
  description:
    'Premium provides additional platform-level benefits designed to make tutor discovery, academic monitoring, and ongoing support more convenient.',
  highlightsLabel: 'What you unlock',
  highlights: [
    {
      title: 'Unlimited Tutor Discovery',
      description: 'Browse a wider pool of tutors matched to your needs.',
      iconMdi: 'mdi:rocket-launch-outline',
    },
    {
      title: 'Tutor Suggestions',
      description: 'AI-guided matches based on subject, grade, and style.',
      iconMdi: 'mdi:robot-outline',
    },
    {
      title: 'Priority Demo Scheduling',
      description: 'Faster demo slots with priority coordination support.',
      iconMdi: 'mdi:lightning-bolt-outline',
    },
    {
      title: 'Detailed Progress Tracking',
      description: 'Track attendance, sessions, and insights in one place.',
      iconMdi: 'mdi:chart-box-outline',
    },
    {
      title: 'Dedicated Support',
      description: 'Priority help through WhatsApp and phone support.',
      iconMdi: 'mdi:headset',
    },
    {
      title: 'Multi-Subject Management',
      description: 'Manage multiple subjects under one student account.',
      iconMdi: 'mdi:bookshelf',
    },
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

export const enrollmentFinalCta = {
  title: 'Your Personalised Learning Journey Starts Here',
  description:
    'Whether you are exploring tutoring for the first time or ready for a more structured academic experience, Indian Mentors gives you a flexible way to get started.',
  supporting: "Start Free. Experience Personalised Tutoring. Upgrade When You're Ready.",
  ctas: [
    { label: 'Create Profile', href: externalLinks.studentSignup, iconMdi: 'mdi:account-plus-outline', primary: true },
    { label: 'Talk to an Academic Counsellor', href: '/contact', iconMdi: 'mdi:account-voice' },
  ],
}

export const spSupport = {
  badge: 'Support Center',
  title: "We're Here When You Need Us",
  description: 'Need help selecting a tutor, understanding a subscription, or resolving a service-related question?',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  options: [
    { title: 'Phone Support', description: 'For applicable counselling and service assistance.', iconMdi: 'mdi:phone-outline', href: 'tel:+917389563564' },
    { title: 'WhatsApp Assistance', description: 'For applicable service coordination.', iconMdi: 'mdi:cellphone', href: 'https://wa.me/917389563564' },
    { title: 'Email Support', description: 'For detailed enquiries and documentation.', iconMdi: 'mdi:email-outline', href: 'mailto:info@indianmentors.in' },
    { title: 'Live Chat', description: 'For general assistance and platform queries.', iconMdi: 'mdi:chat-outline', href: '/contact' },
    { title: 'Helpdesk Ticketing', description: 'Submit and track support requests.', iconMdi: 'mdi:ticket-confirmation-outline', href: '/contact' },

  ],
  ctaCard: {
    title: 'Need help now?',
    description: 'Reach out to our support team for any assistance.',
    label: 'Contact Support',
    href: '/contact',
  },
  cta: { label: 'Contact Support', href: '/contact' },
}

