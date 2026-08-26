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
  badge: 'Tutors',
  title: 'Build Your Teaching Career with Indian Mentors',
  subtitle: '',
  description:
    'At Indian Mentors, tutors are more than instructors — they are mentors who help students learn with confidence, build strong academic foundations, and achieve their educational goals. We connect subject experts, school teachers, home tutors, online educators, working professionals, coaching faculty, college educators, and experienced students with personalised tutoring opportunities across different academic levels and learning formats.',
  caption: 'Join a Growing Network of Professional Mentors',
  audiences: [
    'Subject Experts',
    'School Teachers',
    'Home Tutors',
    'Online Educators',
    'Working Professionals',
    'Coaching Faculty',
  ],
  contentClass: '!px-0 !py-0 mx-auto max-w-3xl text-center',
  primaryCta: {
    label: 'Register as a Tutor',
    href: externalLinks.tutorRegistration,
    icon: 'mdi:account-plus-outline',
  },
  secondaryCta: {
    label: 'Join as a Teaching Partner',
    href: externalLinks.tutorRegistration,
    icon: 'mdi:handshake-outline',
  },
}

export const heroHighlights = [
  { iconMdi: 'mdi:clock-outline', label: 'Flexible Teaching' },
  { iconMdi: 'mdi:account-search-outline', label: 'Student Opportunities' },
  { iconMdi: 'mdi:shield-check-outline', label: 'Transparent Systems' },
  { iconMdi: 'mdi:headset', label: 'Professional Support' },
]

export const tutorBenefits = {
  badge: 'Why Teach With Indian Mentors?',
  title: 'A Professional Ecosystem Built Around <span class="text-gradient-brand">Educators</span>',
  description:
    'Indian Mentors provides a structured environment where tutors can discover suitable opportunities, manage their teaching engagements, track academic sessions, and build their professional tutoring journey.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    {
      title: 'Relevant Opportunities',
      description:
        'Discover student requirements aligned with your subjects, classes, expertise, location, and availability.',
      iconMdi: 'mdi:target',
    },
    {
      title: 'Flexible Teaching',
      description:
        'Choose suitable teaching formats and schedules based on available opportunities and engagement requirements.',
      iconMdi: 'mdi:clock-outline',
    },
    {
      title: 'Multiple Teaching Formats',
      description:
        'Teach through Home, Online, Hybrid, Shadow, Travel, Live-In, or Custom tutoring arrangements.',
      iconMdi: 'mdi:home-outline',
    },
    {
      title: 'Transparent Earnings',
      description:
        'Track applicable sessions, earnings, wallet balances, and payout information through structured systems.',
      iconMdi: 'mdi:cash-multiple',
    },
    {
      title: 'Technology-Enabled',
      description:
        'Manage relevant student, session, attendance, demo, and earnings information through digital tools.',
      iconMdi: 'mdi:laptop',
    },
    {
      title: 'Professional Support',
      description:
        'Receive operational and academic coordination throughout applicable tutoring engagements.',
      iconMdi: 'mdi:handshake-outline',
    },
    {
      title: 'Career Growth',
      description:
        'Build your tutoring profile, experience, student relationships, and teaching opportunities.',
      iconMdi: 'mdi:rocket-launch-outline',
    },
    {
      title: 'Professional Community',
      description: 'Become part of a growing network of educators and professional mentors.',
      iconMdi: 'mdi:sprout-outline',
    },
  ],
}

export const tutorWhoCanJoin = {
  badge: 'Who Can Join?',
  title: 'Opportunities for Different <span class="text-gradient-brand">Teaching Professionals</span>',
  description:
    'Indian Mentors welcomes individuals with relevant academic knowledge, teaching capability, and a commitment to responsible mentoring.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  cta: { label: 'Check Tutor Eligibility', href: '#tutor-verification' },
  items: [
    {
      title: 'Subject Matter Experts',
      description: 'Professionals with strong expertise in specific academic subjects or specialised domains.',
      iconMdi: 'mdi:human-male-board',
    },
    {
      title: 'Local Tuition Teachers',
      description: 'Educators experienced in providing personalised academic support within their local communities.',
      iconMdi: 'mdi:home-account',
    },
    {
      title: 'Private Home & Online Tutors',
      description:
        'Experienced tutors looking to expand their teaching opportunities through home, online, or hybrid formats.',
      iconMdi: 'mdi:laptop',
    },
    {
      title: 'School Teachers',
      description: 'Teachers from Nursery through Class XII seeking additional tutoring engagements where permitted.',
      iconMdi: 'mdi:school-outline',
    },
    {
      title: 'Working Professionals',
      description:
        'Professionals with relevant subject knowledge and teaching experience who wish to mentor students.',
      iconMdi: 'mdi:briefcase-outline',
    },
    {
      title: 'Coaching Faculty',
      description:
        'Experienced faculty members seeking individual tutoring opportunities alongside their professional engagements.',
      iconMdi: 'mdi:book-open-page-variant-outline',
    },
    {
      title: 'College & University Educators',
      description: 'Undergraduate and postgraduate educators supporting higher-level academic subjects.',
      iconMdi: 'mdi:school',
    },
    {
      title: 'College Students',
      description:
        'Undergraduate and postgraduate students with strong subject expertise who meet applicable eligibility requirements.',
      iconMdi: 'mdi:account-school-outline',
    },
  ],
}

export const tutorOpportunities = {
  badge: 'Teaching Opportunities',
  title: 'Find Students Who Match <span class="text-gradient-brand">Your Expertise</span>',
  description:
    'Explore tutoring opportunities based on relevant factors such as subject expertise, academic level, curriculum, location, teaching mode, availability, and experience.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  cta: { label: 'Browse Student Opportunities', href: '#browse-students' },
  items: [
    {
      title: 'Home Tuition',
      description: "Face-to-face personalised tutoring at the student's location.",
      iconMdi: 'mdi:home-outline',
      href: '/services#home-tutors',
    },
    {
      title: 'Online Tuition',
      description: 'Live interactive academic support from anywhere.',
      iconMdi: 'mdi:laptop',
      href: '/services#online-tutors',
    },
    {
      title: 'Hybrid Tuition',
      description: 'A coordinated combination of home and online sessions.',
      iconMdi: 'mdi:sync',
      href: '/services#hybrid-tutors',
    },
    {
      title: 'Shadow Tutoring',
      description: 'Individualised academic and classroom support within the school environment.',
      iconMdi: 'mdi:account-group-outline',
      href: '/services#shadow-tutors',
    },
    {
      title: 'Travel Tutoring',
      description: 'Academic continuity for students travelling or relocating.',
      iconMdi: 'mdi:airplane',
      href: '/services#travel-tutors',
    },
    {
      title: 'Live-In Tutoring',
      description: 'Structured residential academic mentoring under mutually agreed arrangements.',
      iconMdi: 'mdi:home-heart-outline',
      href: '/services#live-in-tutors',
    },
    {
      title: 'Specialised Education',
      description: 'Educational support for diverse learning requirements based on relevant qualifications.',
      iconMdi: 'mdi:puzzle-outline',
      href: '/services#special-educators',
    },
    {
      title: 'Home Schooling Support',
      description: 'Subject and curriculum support for students following home-based education.',
      iconMdi: 'mdi:book-education-outline',
      href: '/academic-coverage',
    },
    {
      title: 'Institute Teaching',
      description: 'Teaching opportunities with educational institutions or coaching organisations where applicable.',
      iconMdi: 'mdi:domain',
      href: '/institutions',
    },
    {
      title: 'Custom Tutoring',
      description: 'Requirement-based tutoring arrangements designed around specific student needs.',
      iconMdi: 'mdi:target',
      href: '/services',
    },
  ],
}

export const tutorSubjects = {
  badge: 'Teaching Subjects & Academic Coverage',
  title: 'Teach What You <span class="text-gradient-brand">Know Best</span>',
  description:
    'Indian Mentors supports tutoring requirements across school education, higher education, international curricula, competitive examinations, and selected specialised learning areas.',
  classes: '!px-0 !py-0 mx-auto',
  cta: { label: 'Explore Teaching Requirements', href: '/academic-coverage' },
  items: [
    {
      title: 'Science & Mathematics',
      subjects: 'Physics • Chemistry • Biology • Mathematics • Environmental Science',
      iconMdi: 'mdi:atom',
    },
    {
      title: 'Languages',
      subjects: 'English • Hindi • Regional Languages • Foreign Languages',
      iconMdi: 'mdi:translate',
    },
    {
      title: 'Social Sciences & Humanities',
      subjects: 'History • Geography • Political Science • Sociology • Psychology',
      iconMdi: 'mdi:earth',
    },
    {
      title: 'Commerce & Business',
      subjects: 'Accountancy • Economics • Business Studies • Finance • Entrepreneurship',
      iconMdi: 'mdi:chart-line',
    },
    {
      title: 'Technology & Computer Studies',
      subjects: 'Computer Science • Programming • Information Technology • Digital Skills',
      iconMdi: 'mdi:code-tags',
    },
    {
      title: 'Competitive & Entrance Preparation',
      subjects: 'JEE • NEET • CUET • CA Foundation • Selected Entrance Examinations',
      iconMdi: 'mdi:trophy-outline',
    },
    {
      title: 'International Curricula',
      subjects: 'IB • IGCSE • Cambridge • Other Recognised International Curricula',
      iconMdi: 'mdi:web',
    },
  ],
}

export const tutorModes = {
  badge: 'Teaching Modes',
  title: 'Choose How You Want to <span class="text-gradient-brand">Teach</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    {
      title: 'Home',
      subtitle: 'Face-to-Face Tutoring',
      description: "Provide personalised instruction directly at the student's location where applicable.",
      iconMdi: 'mdi:home-outline',
      href: '/services#home-tutors',
    },
    {
      title: 'Online',
      subtitle: 'Digital Tutoring',
      description: 'Conduct live interactive sessions using online teaching and learning tools.',
      iconMdi: 'mdi:laptop',
      href: '/services#online-tutors',
    },
    {
      title: 'Hybrid',
      subtitle: 'Home + Online',
      description: 'Combine face-to-face and online sessions within one coordinated learning plan.',
      iconMdi: 'mdi:sync',
      href: '/services#hybrid-tutors',
    },
    {
      title: 'Shadow',
      subtitle: 'School-Based Support',
      description: 'Provide dedicated academic and classroom assistance during the school day.',
      iconMdi: 'mdi:account-group-outline',
      href: '/services#shadow-tutors',
    },
    {
      title: 'Travel',
      subtitle: 'Learning on the Move',
      description: 'Support students academically while travelling or relocating.',
      iconMdi: 'mdi:airplane',
      href: '/services#travel-tutors',
    },
    {
      title: 'Live-In',
      subtitle: 'Residential Mentoring',
      description:
        "Provide structured daily academic guidance while residing with the student's family under agreed arrangements.",
      iconMdi: 'mdi:home-heart-outline',
      href: '/services#live-in-tutors',
    },
    {
      title: 'Custom',
      subtitle: 'Requirement-Based Teaching',
      description: 'Explore specialised tutoring engagements based on individual student requirements.',
      iconMdi: 'mdi:target',
      href: '/services',
    },
  ],
}

export const tutorHowItWorks = {
  badge: 'How It Works',
  title: 'From Registration to Your <span class="text-gradient-brand">First Student</span>',
  description: 'A structured onboarding journey designed to keep academic standards high and matching clear.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  journey: 'Register → Verify → Match → Demo → Confirm → Teach → Track → Grow',
  steps: [
    {
      no: '01',
      title: 'Register',
      description: 'Create your tutor profile with your academic, professional, teaching, and availability details.',
    },
    {
      no: '02',
      title: 'Verify',
      description: 'Complete applicable identity, qualification, address, experience, and documentation checks.',
    },
    {
      no: '03',
      title: 'Activate',
      description: 'Once eligible and approved, your profile becomes available for relevant opportunities.',
    },
    {
      no: '04',
      title: 'Match',
      description: 'Explore or receive suitable student opportunities based on your profile and requirements.',
    },
    {
      no: '05',
      title: 'Demo',
      description: 'Participate in the applicable demo or evaluation process to establish tutor-student compatibility.',
    },
    {
      no: '06',
      title: 'Confirm',
      description: 'Begin regular tutoring after the engagement is mutually confirmed.',
    },
    {
      no: '07',
      title: 'Teach',
      description: 'Deliver personalised sessions according to the agreed learning plan and schedule.',
    },
    {
      no: '08',
      title: 'Track & Earn',
      description: 'Record sessions and attendance, monitor applicable earnings, and manage your tutoring engagement.',
    },
  ],
}

export const tutorPlans: TutorPlan[] = [
  {
    id: 'free',
    iconMdi: 'mdi:account-outline',
    name: 'Free Tutor Profile',
    price: '₹0',
    tagline: 'Create your profile and complete verification',
    description: 'Create your tutor profile and complete the applicable verification process.',
    featuresLabel: 'Includes',
    features: [
      'Profile Creation',
      'Qualification Details',
      'Subject & Class Selection',
      'Availability Information',
      'Verification Process',
      'Applicable Opportunity Access',
    ],
    cta: { label: 'Create Free Profile', href: externalLinks.tutorRegistration },
    variant: 'surface',
  },
  {
    id: 'premium',
    iconMdi: 'mdi:star-four-points-outline',
    name: 'Premium Tutor Profile',
    price: '₹1,000',
    priceNote: '/ Year',
    tagline: 'Additional visibility and platform features for eligible tutors',
    description:
      'A premium profile option designed for eligible tutors seeking additional visibility and platform features, subject to applicable terms.',
    featuresLabel: 'Potential Benefits',
    features: [
      'Enhanced Profile Visibility',
      'Priority Opportunity Access',
      'Advanced Platform Features',
      'Performance Insights',
      'Dedicated Tutor Support',
      'Financial Tracking Tools',
    ],
    cta: { label: 'Explore Premium Plan', href: externalLinks.tutorRegistration },
    variant: 'featured',
  },
]

export const tutorPlansSection = {
  badge: 'Tutor Registration Plans',
  title: 'Start With the Plan That <span class="text-gradient-brand">Fits You</span>',
  description: 'A Free Tutor Profile at ₹0, or Premium at ₹1,000 per year for additional visibility and platform features.',
  classes: '!px-0 !py-0',
  footnote:
    'Registration plans, features, eligibility, and applicable charges are subject to the current platform terms.',
}

export const hiringSteps: HiringStep[] = [
  {
    no: '01',
    iconMdi: 'mdi:account-edit-outline',
    title: 'Register Online',
    description: 'Complete your tutor profile with academic and personal details.',
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

export const hiringProcessSection = {
  badge: 'Tutor Hiring Process',
  title: 'A Structured Path to Your <span class="text-gradient-brand">First Student</span>',
  description:
    'The tutor hiring process at Indian Mentors is designed to maintain high academic standards and ensure a safe learning environment — so students and parents receive reliable, qualified mentors.',
  classes: '!px-0 !py-0',
  image: '/assets/img/services/home-tutors.webp',
  imageAlt: 'Professional mentor teaching a student — Indian Mentors hiring journey',
  socialProof: 'Trusted by educators teaching across India',
  cta: { label: 'Learn About the Hiring Process', href: '#how-it-works' },
  references: [
    { iconMdi: 'mdi:shield-check-outline', label: 'ID & credential verified' },
    { iconMdi: 'mdi:account-school-outline', label: 'Guided onboarding' },
    { iconMdi: 'mdi:handshake-outline', label: 'Demo before commitment' },
    { iconMdi: 'mdi:cash-check', label: 'Transparent payouts' },
  ],
}

export const complianceSection = {
  badge: 'Tutor Verification & Screening',
  title: 'Building Trust Through Responsible Tutor Selection',
  description:
    'Our tutor onboarding process is designed to support academic credibility, student safety, professional accountability, and a trusted learning environment.',
  note: 'Responsible onboarding helps build a stronger tutoring ecosystem for students, families, and educators.',
  classes: '!px-0 !py-0',
  cta: { label: 'View Verification Standards', href: '#tutor-standards' },
}

export const complianceChecks = [
  {
    iconMdi: 'mdi:card-account-details-outline',
    title: '01 — Identity',
    description: 'Identity and personal information verification.',
  },
  {
    iconMdi: 'mdi:certificate-outline',
    title: '02 — Qualification',
    description: 'Review of relevant academic qualifications.',
  },
  {
    iconMdi: 'mdi:map-marker-check-outline',
    title: '03 — Address',
    description: 'Applicable address verification.',
  },
  {
    iconMdi: 'mdi:briefcase-check-outline',
    title: '04 — Experience',
    description: 'Review of relevant teaching experience.',
  },
  {
    iconMdi: 'mdi:lightbulb-on-outline',
    title: '05 — Expertise',
    description: 'Assessment of subject and academic expertise.',
  },
  {
    iconMdi: 'mdi:file-document-outline',
    title: '06 — Documentation',
    description: 'Review of applicable supporting documents.',
  },
  {
    iconMdi: 'mdi:account-check-outline',
    title: '07 — Profile Review',
    description: 'Overall evaluation before applicable profile activation.',
  },
]

export const erpFeatures = [
  {
    iconMdi: 'mdi:account-outline',
    title: 'Profile',
    description: 'Manage qualifications, expertise, experience, subjects, availability, and professional information.',
  },
  {
    iconMdi: 'mdi:account-search-outline',
    title: 'Browse Students',
    description: 'Discover relevant student opportunities and tutoring requirements.',
  },
  {
    iconMdi: 'mdi:presentation-play',
    title: 'Demo Management',
    description: 'View applicable demo assignments, schedules, and session details.',
  },
  {
    iconMdi: 'mdi:google-classroom',
    title: 'Batches',
    description: 'Manage assigned student batches and academic arrangements.',
  },
  {
    iconMdi: 'mdi:calendar-clock-outline',
    title: 'Sessions',
    description: 'View upcoming sessions, session schedules, attendance, and relevant session records.',
  },
  {
    iconMdi: 'mdi:wallet-outline',
    title: 'Earnings',
    description: 'Monitor session earnings, wallet balance, payout records, and financial information.',
  },
  {
    iconMdi: 'mdi:message-text-outline',
    title: 'Messages',
    description: 'Manage approved communication and coordination related to tutoring engagements.',
  },
  {
    iconMdi: 'mdi:star-outline',
    title: 'Feedback',
    description: 'Review applicable student, parent, or academic feedback.',
  },
]

export const erpSection = {
  badge: 'Your Tutor Dashboard',
  title: 'Everything You Need in <span class="text-gradient-brand">One Place</span>',
  description:
    'The Indian Mentors tutor dashboard is designed to bring key teaching and engagement activities into one organised workspace.',
  classes: '!px-0 !py-0',
  cta: { label: 'Explore Tutor Dashboard', href: externalLinks.login },
  image: '/assets/img/tutors/tutor-dashboard.webp',
  imageAlt: 'Indian Mentors tutor dashboard showing batches, sessions, earnings, and payout records',
  previewUrl: 'tutor.indianmentors.com',
  showcaseTitle: 'One workspace for your entire teaching day',
  highlights: [
    'Track batches, schedules, and upcoming sessions at a glance',
    'Attendance and session records maintained in one place',
    'Wallet balance, earnings history, and payout records',
    'Student opportunities and approved communication together',
  ],
  stats: [
    { value: '8', label: 'Core modules' },
    { value: '24×7', label: 'Dashboard access' },
    { value: '100%', label: 'Session records' },
  ],
  featuresTitle: 'What you can manage',
  featuresSubtitle: 'Eight modules that cover every part of your tutoring engagement.',
}

export const policyPoints = [
  { iconMdi: 'mdi:account-tie-outline', title: 'Maintain professional conduct' },
  { iconMdi: 'mdi:shield-lock-outline', title: 'Respect student and family privacy' },
  { iconMdi: 'mdi:calendar-check-outline', title: 'Follow agreed schedules' },
  { iconMdi: 'mdi:message-outline', title: 'Communicate professionally' },
  { iconMdi: 'mdi:school-outline', title: 'Conduct sessions responsibly' },
  { iconMdi: 'mdi:clipboard-check-outline', title: 'Maintain accurate attendance' },
  { iconMdi: 'mdi:emoticon-happy-outline', title: 'Support a positive learning environment' },
  { iconMdi: 'mdi:file-document-outline', title: 'Follow applicable policies and agreements' },
]

export const tutorPolicySection = {
  badge: 'Professional Standards',
  title: 'Be the Mentor Students Can <span class="text-gradient-brand">Trust</span>',
  description:
    'Every tutor associated with Indian Mentors is expected to maintain professional, ethical, respectful, and student-focused standards.',
  classes: '!px-0 !py-0',
  principle: 'Professional Teaching • Responsible Mentoring • Student-First Approach',
}

export const earningsSection = {
  badge: 'Tutor Earnings & Payouts',
  title: 'Teach. Track. <span class="text-gradient-brand">Earn.</span>',
  description:
    'Indian Mentors aims to provide a structured system for recording tutoring sessions, calculating applicable earnings, and processing tutor payouts.',
  classes: '!px-0 !py-0',
  flowTitle: 'Earnings Flow',
  payoutTitle: 'Tutor Dashboard Provides',
  cta: { label: 'View Earnings & Payout Policy', href: '#tutor-standards' },
  flow: [
    {
      no: '01',
      label: 'Session Completed',
      description: 'Scheduled tutoring session marked as delivered.',
      iconMdi: 'mdi:clipboard-check-outline',
      accent: 'blue' as const,
    },
    {
      no: '02',
      label: 'Attendance Approved',
      description: 'Confirmed attendance for applicable session earnings.',
      iconMdi: 'mdi:check-circle-outline',
      accent: 'sky' as const,
    },
    {
      no: '03',
      label: 'Credit in Tutor Wallet',
      description: 'Approved earnings credited to the tutor wallet.',
      iconMdi: 'mdi:wallet-plus-outline',
      accent: 'emerald' as const,
    },
    {
      no: '04',
      label: 'Request for Withdraw',
      description: 'Withdrawal requested as per applicable payout policy.',
      iconMdi: 'mdi:invoice-outline',
      accent: 'indigo' as const,
    },
    {
      no: '05',
      label: 'Credited in Tutor Account',
      description: 'Approved payout credited to the tutor account.',
      iconMdi: 'mdi:cash-multiple',
      accent: 'violet' as const,
    },
  ],
  dashboardItems: [
    'Session-Based Earnings Tracking',
    'Wallet Balance',
    'Earnings History',
    'Payout Records',
    'Session Records',
    'Applicable Withdrawal Information',
  ],
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

export const browseStudentsSection = {
  badge: 'Browse Student Opportunities',
  title: 'Find students that <span class="text-gradient-brand">match your expertise</span>',
  description:
    'Registered tutors can explore available tutoring opportunities and connect with suitable students to expand their teaching engagements.',
  classes: '!px-0 !py-0',
}

export const tutorSupport = {
  badge: 'Academic & Operational Support',
  title: 'Teach More. <span class="text-gradient-brand">Coordinate Better.</span>',
  description:
    'Indian Mentors provides structured operational support around tutoring engagements to help tutors spend more time teaching and mentoring students.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    {
      title: 'Scheduling',
      description: 'Coordination of applicable sessions, demos, and schedules.',
      iconMdi: 'mdi:calendar-clock-outline',
    },
    {
      title: 'Attendance',
      description: 'Structured session attendance and approval processes.',
      iconMdi: 'mdi:clipboard-check-outline',
    },
    {
      title: 'Student Information',
      description: 'Access relevant student and assignment information.',
      iconMdi: 'mdi:account-school-outline',
    },
    {
      title: 'Coordination',
      description: 'Support for applicable student, parent, tutor, and internal coordination.',
      iconMdi: 'mdi:phone-outline',
    },
    {
      title: 'Tutor Replacement',
      description: 'Structured assistance when a replacement is required under applicable policies.',
      iconMdi: 'mdi:swap-horizontal',
    },
    {
      title: 'Academic Feedback',
      description: 'Relevant communication regarding student engagement and learning progress.',
      iconMdi: 'mdi:message-text-outline',
    },
  ],
}

export const tutorTraining = {
  badge: 'Tutor Training & Development',
  title: 'Continue Learning. <span class="text-gradient-brand">Continue Growing.</span>',
  description:
    'Where applicable, Indian Mentors may provide orientation, training resources, operational guidance, and professional development support.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    {
      title: 'Platform Orientation',
      description: 'Understand systems, workflows, and tutor responsibilities.',
      iconMdi: 'mdi:monitor-dashboard',
    },
    {
      title: 'Communication Skills',
      description: 'Strengthen professional communication with students and families.',
      iconMdi: 'mdi:phone-in-talk-outline',
    },
    {
      title: 'Demo Skills',
      description: 'Learn how to structure effective introductory sessions.',
      iconMdi: 'mdi:presentation-play',
    },
    {
      title: 'Session Management',
      description: 'Understand attendance, notes, feedback, and academic documentation.',
      iconMdi: 'mdi:notebook-outline',
    },
    {
      title: 'Digital Teaching',
      description: 'Improve online teaching practices and technology usage.',
      iconMdi: 'mdi:laptop',
    },
    {
      title: 'Professional Development',
      description: 'Build stronger tutoring practices and student engagement.',
      iconMdi: 'mdi:sprout-outline',
    },
  ],
}

export const tutorReferral = {
  badge: 'Tutor Referral Programme',
  title: 'Help Great Educators Join the Network',
  description:
    'Know a qualified educator who could become a valuable mentor? Refer them to Indian Mentors and participate in the applicable tutor referral programme.',
  reward: '₹1,000',
  rewardLabel: 'Per Eligible Tutor Referral',
  note: 'The reward becomes applicable when the referred tutor satisfies the defined programme conditions, including the required teaching period.',
  cta: { label: 'Refer a Tutor', href: externalLinks.tutorRegistration },
}

export const tutorSuccessJourney = {
  badge: 'Tutor Success Journey',
  title: 'Build Your Professional <span class="text-gradient-brand">Teaching Journey</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  tagline: 'Expertise → Opportunity → Teaching → Impact → Growth',
  steps: [
    {
      title: 'Create',
      description: 'Build a strong tutor profile highlighting your expertise and experience.',
    },
    {
      title: 'Connect',
      description: 'Discover suitable students and tutoring opportunities.',
    },
    {
      title: 'Teach',
      description: 'Deliver personalised lessons focused on understanding and academic progress.',
    },
    {
      title: 'Engage',
      description: 'Build positive professional relationships with students and families.',
    },
    {
      title: 'Grow',
      description: 'Strengthen your teaching experience, reputation, and tutoring opportunities.',
    },
    {
      title: 'Impact',
      description: 'Help students develop confidence, knowledge, skills, and academic progress.',
    },
  ],
}

export const tutorWhyChoose = {
  badge: 'Why Tutors Choose Indian Mentors',
  title: 'A Professional Ecosystem for <span class="text-gradient-brand">Modern Educators</span>',
  description: '',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    {
      title: 'Opportunities',
      description: 'Access relevant tutoring requirements.',
      iconMdi: 'mdi:target',
    },
    {
      title: 'Flexibility',
      description: 'Explore teaching formats and schedules suited to your availability.',
      iconMdi: 'mdi:clock-outline',
    },
    {
      title: 'Transparency',
      description: 'Track applicable sessions, earnings, and platform activities.',
      iconMdi: 'mdi:cash-check',
    },
    {
      title: 'Technology',
      description: 'Manage tutoring engagements through digital tools.',
      iconMdi: 'mdi:laptop',
    },
    {
      title: 'Support',
      description: 'Receive structured operational and academic coordination.',
      iconMdi: 'mdi:handshake-outline',
    },
    {
      title: 'Growth',
      description: 'Build your professional tutoring profile.',
      iconMdi: 'mdi:rocket-launch-outline',
    },
    {
      title: 'Recognition',
      description: 'Strengthen your reputation through quality teaching.',
      iconMdi: 'mdi:star-outline',
    },
    {
      title: 'Network',
      description: 'Become part of a growing community of educators.',
      iconMdi: 'mdi:web',
    },
  ],
}

export const tutorResources = {
  badge: 'Tutor Resources',
  title: 'Resources to Help You <span class="text-gradient-brand">Teach Better</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  brochure: {
    badge: 'Tutor Brochure',
    title: 'Everything You Need to Know Before Joining',
    description:
      'Explore the official Indian Mentors Tutor Brochure for a detailed overview of our tutor ecosystem, teaching opportunities, registration process, verification requirements, earnings, professional standards, and support systems.',
    coversLabel: 'The Brochure Covers',
    covers: [
      'Tutor Ecosystem',
      'Academic Coverage',
      'Teaching Formats',
      'Registration Process',
      'Verification',
      'Student Opportunities',
      'Tutor Benefits',
      'Earnings & Payouts',
      'Professional Standards',
      'Policies & Agreements',
    ],
    cta: { label: 'Download Tutor Brochure', href: '/contact' },
  },
  items: [
    {
      title: 'Tutor Guidelines',
      description: 'Understand platform processes and professional expectations.',
      iconMdi: 'mdi:book-open-page-variant-outline',
      href: '#tutor-standards',
    },
    {
      title: 'Demo Class Guidance',
      description: 'Prepare for effective introductory tutoring sessions.',
      iconMdi: 'mdi:notebook-outline',
      href: '#how-it-works',
    },
    {
      title: 'Verification Checklist',
      description: 'Know the information and documents required during onboarding.',
      iconMdi: 'mdi:clipboard-check-outline',
      href: '#tutor-verification',
    },
    {
      title: 'Communication Guidance',
      description: 'Follow professional communication practices.',
      iconMdi: 'mdi:message-text-outline',
      href: '#tutor-standards',
    },
    {
      title: 'Teaching Resources',
      description: 'Explore relevant tutoring and academic resources.',
      iconMdi: 'mdi:school-outline',
      href: '/academic-coverage',
    },
    {
      title: 'Policies & Agreements',
      description: 'Review applicable tutor terms and professional standards.',
      iconMdi: 'mdi:file-document-outline',
      href: '#tutor-standards',
    },
  ],
  cta: { label: 'Explore Tutor Resources', href: '#tutor-resources' },
}

export const tutorFaqs = [
  {
    id: 'who-can-register',
    question: 'Who can register as a tutor?',
    answer:
      'Subject experts, teachers, tutors, relevant working professionals, coaching faculty, college educators, and eligible college students may apply, subject to applicable requirements and verification.',
  },
  {
    id: 'teach-online',
    question: 'Can I teach online?',
    answer:
      'Yes. Online tutoring opportunities may be available based on your subject expertise, academic level, availability, and student requirements.',
  },
  {
    id: 'hybrid',
    question: 'Can I teach both online and at home?',
    answer:
      'Yes. Eligible tutors may explore Home, Online, or Hybrid tutoring opportunities depending on location, availability, and student requirements.',
  },
  {
    id: 'matching',
    question: 'How are students matched with tutors?',
    answer:
      'Relevant opportunities may be identified based on subject expertise, class level, curriculum, location, teaching mode, availability, experience, and other requirements.',
  },
  {
    id: 'payouts',
    question: 'How do tutor payouts work?',
    answer:
      'Applicable earnings are recorded against completed and approved sessions and processed according to the current tutor agreement and payout policy.',
  },
  {
    id: 'registration-free',
    question: 'Is tutor registration free?',
    answer:
      'A Free Tutor Profile at ₹0 is available, while a Premium Tutor Profile at ₹1,000 per year may provide additional features subject to applicable terms.',
  },
  {
    id: 'refer',
    question: 'Can I refer another tutor?',
    answer:
      'Yes. Eligible tutor referrals may qualify for rewards under the applicable Tutor Referral Programme.',
  },
]

export const tutorFaqSection = {
  badge: 'Frequently Asked Questions',
  title: 'Questions Tutors Often <span class="text-gradient-brand">Ask</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
}

export const finalCta = {
  title: 'Turn Your Teaching Expertise Into Meaningful Student Impact',
  description:
    'Whether you are an experienced teacher, subject specialist, home tutor, online educator, working professional, coaching faculty member, college educator, or eligible college student, Indian Mentors offers a structured environment to explore personalised tutoring opportunities.',
  supporting: 'Bring your knowledge. Share your expertise. Mentor students. Build your teaching journey.',
  primaryCta: { label: 'Register as a Tutor', href: externalLinks.tutorRegistration },
  secondaryCta: { label: 'Join as a Teaching Partner', href: externalLinks.tutorRegistration },
}

export const tutorsBannerCta = {
  title: 'Your Expertise Can Make a Difference.',
  description: "Become a Mentor. Shape a Learner's Future. Connect your teaching expertise with students looking for personalised academic support through Indian Mentors.",
  supporting: 'Personalised Education • Trusted Tutors • Meaningful Mentorship',
  ctas: [
    { label: 'Join as a Tutor', href: externalLinks.tutorRegistration, iconMdi: 'mdi:account-plus-outline', primary: true },
    { label: 'Download Tutor Brochure', href: '/contact', iconMdi: 'mdi:book-open-page-variant-outline' },
  ],
}
