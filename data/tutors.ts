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
  classes: '!px-0 !py-0 mx-auto',
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
  cta: { label: 'Sign Up as a Tutor', href: externalLinks.tutorRegistration },
  highlights: [
    {
      iconMdi: 'mdi:book-education-outline',
      label: 'Subject knowledge',
      hint: 'Strong command of the subjects you teach.',
    },
    {
      iconMdi: 'mdi:human-male-board',
      label: 'Teaching capability',
      hint: 'Ability to explain and guide students clearly.',
    },
  ],
  note: {
    title: 'Eligibility is about capability',
    description:
      'Join if you have relevant academic knowledge, teaching ability, and a commitment to student-focused mentoring.',
  },
  groups: [
    {
      id: 'independent',
      label: 'Independent tutors',
      hint: 'Teach through local, home, online, or hybrid formats.',
      accent: 'blue' as const,
    },
    {
      id: 'faculty',
      label: 'School & college faculty',
      hint: 'Add individual tutoring alongside your teaching work.',
      accent: 'indigo' as const,
    },
    {
      id: 'professionals',
      label: 'Professionals & students',
      hint: 'Share subject expertise while you work or study.',
      accent: 'amber' as const,
    },
  ],
  items: [
    {
      title: 'Subject Matter Experts',
      description: 'Experts in academic subjects or specialised teaching domains.',
      iconMdi: 'mdi:human-male-board',
      group: 'independent',
    },
    {
      title: 'Local Tuition Teachers',
      description: 'Personalised academic support within local communities.',
      iconMdi: 'mdi:home-account',
      group: 'independent',
    },
    {
      title: 'Private Home & Online Tutors',
      description: 'Teach through home, online, or hybrid formats.',
      iconMdi: 'mdi:laptop',
      group: 'independent',
    },
    {
      title: 'School Teachers',
      description: 'Nursery to Class XII teachers seeking extra tutoring.',
      iconMdi: 'mdi:school-outline',
      group: 'faculty',
    },
    {
      title: 'Coaching Faculty',
      description: 'Individual tutoring alongside professional teaching work.',
      iconMdi: 'mdi:book-open-page-variant-outline',
      group: 'faculty',
    },
    {
      title: 'College & University Educators',
      description: 'Educators supporting higher-level academic subjects.',
      iconMdi: 'mdi:school',
      group: 'faculty',
    },
    {
      title: 'Working Professionals',
      description: 'Subject experts with teaching experience who mentor.',
      iconMdi: 'mdi:briefcase-outline',
      group: 'professionals',
    },
    {
      title: 'College Students',
      description: 'Strong subject expertise that meets eligibility to join.',
      iconMdi: 'mdi:account-school-outline',
      group: 'professionals',
    },
    {
      title: 'Retired Teachers',
      description: 'Experienced educators who continue mentoring after their teaching career.',
      iconMdi: 'mdi:account-tie-outline',
      group: 'professionals',
    },
  ],
}

export const tutorOpportunities = {
  badge: 'Teaching Opportunities',
  title: 'Find Students Who Match <span class="text-gradient-brand">Your Expertise</span>',
  description:
    'Explore tutoring opportunities based on relevant factors such as subject expertise, academic level, curriculum, location, teaching mode, availability, and experience.',
  classes: '!px-0 !py-0 mx-auto max-w-4xl',
  cta: { label: 'Discover Teaching Opportunities', href: '/services' },
  items: [
    {
      title: 'Home Tuition',
      description: "Personalised tutoring at the student's location.",
      iconMdi: 'mdi:home-outline',
      href: '/services#home-tutors',
    },
    {
      title: 'Online Tuition',
      description: 'Live academic support from anywhere.',
      iconMdi: 'mdi:laptop',
      href: '/services#online-tutors',
    },
    {
      title: 'Hybrid Tuition',
      description: 'Combined home and online tutoring sessions.',
      iconMdi: 'mdi:sync',
      href: '/services#hybrid-tutors',
    },
    {
      title: 'Shadow Tutoring',
      description: 'Academic support within the school environment.',
      iconMdi: 'mdi:account-group-outline',
      href: '/services#shadow-tutors',
    },
    {
      title: 'Travel Tutoring',
      description: 'Continuity for students travelling or relocating.',
      iconMdi: 'mdi:airplane',
      href: '/services#travel-tutors',
    },
    {
      title: 'Live-In Tutoring',
      description: 'Residential mentoring under agreed arrangements.',
      iconMdi: 'mdi:home-heart',
      href: '/services#live-in-tutors',
    },
    {
      title: 'Specialised Education',
      description: 'Support for diverse learning requirements.',
      iconMdi: 'mdi:puzzle-outline',
      href: '/services/special-educators',
    },
    {
      title: 'Home Schooling Support',
      description: 'Curriculum support for home-based education.',
      iconMdi: 'mdi:book-education-outline',
      href: '/academic-coverage',
    },
    {
      title: 'Institute Teaching',
      description: 'Teaching roles with institutions where applicable.',
      iconMdi: 'mdi:domain',
      href: '/institutions',
    },
    {
      title: 'Custom Tutoring',
      description: 'Arrangements designed around specific student needs.',
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
  classes: '!px-0 !py-0 mx-auto max-w-4xl',
  cta: { label: 'Explore Academic Coverage', href: '/academic-coverage' },
  coverageTile: {
    badge: 'Academic Coverage',
    title: 'See every board, curriculum & course you can teach',
    description:
      'National boards, international programmes, and selected entrance courses — match your expertise to where students need mentors.',
    image: '/assets/img/shared/academic.png',
    boardsLabel: 'Boards we cover',
    boardsHref: '/academic-coverage#boards-covered',
    gradesLabel: 'Grades we cover',
    gradesHref: '/academic-coverage#grades-covered',
    coursesLabel: 'Courses & programmes',
    coursesHref: '/academic-coverage#exam-preparation',
    boards: [
      { id: 'cbse', name: 'CBSE' },
      { id: 'icse', name: 'ICSE' },
      { id: 'ib', name: 'IB' },
      { id: 'cambridge', name: 'Cambridge' },
      { id: 'nios', name: 'NIOS' },
      { id: 'state', name: 'State Boards' },
      { id: 'jee-neet', name: 'JEE / NEET' },
    ],
    grades: [
      { label: 'Pre-Primary', href: '/academic-coverage#pre-primary' },
      { label: 'Primary', href: '/academic-coverage#primary' },
      { label: 'Middle School', href: '/academic-coverage#middle' },
      { label: 'Secondary', href: '/academic-coverage#secondary' },
      { label: 'Senior Secondary', href: '/academic-coverage#senior' },
    ],
    courses: [
      { label: 'JEE', href: '/academic-coverage#competitive' },
      { label: 'NEET', href: '/academic-coverage#competitive' },
      { label: 'CUET', href: '/academic-coverage#exam-preparation' },
      { label: 'CA Foundation', href: '/academic-coverage#exam-preparation' },
      { label: 'IB / IGCSE', href: '/academic-coverage#boards-covered' },
      { label: 'Cambridge', href: '/academic-coverage#boards-covered' },
      { label: 'Undergraduate', href: '/academic-coverage#undergraduate' },
      { label: 'Postgraduate', href: '/academic-coverage#postgraduate' },
    ],
  },
  items: [
    {
      title: 'Science & Mathematics',
      subjects: 'Physics • Chemistry • Biology • Mathematics • Environmental Science',
      iconMdi: 'mdi:atom',
      image: '/assets/img/tutor-subjects/science-maths.webp',
    },
    {
      title: 'Languages',
      subjects: 'English • Hindi • Regional Languages • Foreign Languages',
      iconMdi: 'mdi:translate',
      image: '/assets/img/tutor-subjects/languages.webp',
    },
    {
      title: 'Social Sciences & Humanities',
      subjects: 'History • Geography • Political Science • Sociology • Psychology',
      iconMdi: 'mdi:earth',
      image: '/assets/img/tutor-subjects/social-humanities.webp',
    },
    {
      title: 'Commerce & Business',
      subjects: 'Accountancy • Economics • Business Studies • Finance • Entrepreneurship',
      iconMdi: 'mdi:chart-line',
      image: '/assets/img/tutor-subjects/commerce-business.webp',
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
  cta: { label: 'Compare Free vs Premium', href: '/tutors/registration-plans' },
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
  secondaryCta: { label: 'Find Students Near You', href: '#browse-students' },
  image: '/assets/img/tutors/tutor-dashboard.webp',
  imageAlt: 'Sample Indian Mentors tutor dashboard on mobile, showing sessions, wallet, and teaching activity',
  previewUrl: 'tutor.indianmentors.com',
  showcaseTitle: 'One Workspace for Your Teaching Journey',
  mobilePreview: {
    greeting: 'Welcome back',
    tutorName: 'Amit Kumar',
    tutorRole: 'Tutor',
    dateLabel: 'Apr 2024',
    walletLabel: 'Wallet',
    walletValue: '₹42,800',
    walletNote: 'Available balance',
    stats: [
      { label: 'Batches', value: '12' },
      { label: 'Sessions', value: '86' },
      { label: 'Rating', value: '4.8' },
    ],
    sessionsTitle: 'Upcoming sessions',
    sessions: [
      { student: 'Rahul Sharma', initials: 'RS', subject: 'Mathematics', time: 'Today, 4:00 PM', status: 'Confirmed' },
      { student: 'Priya Mehta', initials: 'PM', subject: 'Science', time: 'Today, 6:30 PM', status: 'Confirmed' },
      { student: 'Arjun Patel', initials: 'AP', subject: 'English', time: 'Tomorrow, 5:00 PM', status: 'Pending' },
    ],
    modules: [
      { label: 'Batches', iconMdi: 'mdi:google-classroom' },
      { label: 'Demos', iconMdi: 'mdi:presentation-play' },
      { label: 'Students', iconMdi: 'mdi:account-search-outline' },
      { label: 'Messages', iconMdi: 'mdi:message-text-outline' },
    ],
    nav: [
      { label: 'Home', iconMdi: 'mdi:view-dashboard-outline', active: true },
      { label: 'Sessions', iconMdi: 'mdi:calendar-clock-outline', active: false },
      { label: 'Earnings', iconMdi: 'mdi:wallet-outline', active: false },
      { label: 'Profile', iconMdi: 'mdi:account-outline', active: false },
    ],
  },
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
  {
    iconMdi: 'mdi:account-tie-outline',
    title: 'Maintain professional conduct',
    description: 'Ethical, respectful behaviour in every tutoring engagement.',
  },
  {
    iconMdi: 'mdi:shield-lock-outline',
    title: 'Respect student and family privacy',
    description: 'Confidential handling of student and family data.',
  },
  {
    iconMdi: 'mdi:calendar-check-outline',
    title: 'Follow agreed schedules',
    description: 'Sessions conducted as per the agreed teaching schedule.',
  },
  {
    iconMdi: 'mdi:message-outline',
    title: 'Communicate professionally',
    description: 'Clear, courteous communication with families.',
  },
  {
    iconMdi: 'mdi:school-outline',
    title: 'Conduct sessions responsibly',
    description: 'Structured, student-focused teaching in every session.',
  },
  {
    iconMdi: 'mdi:clipboard-check-outline',
    title: 'Maintain accurate attendance',
    description: 'Reliable session and attendance records as required.',
  },
  {
    iconMdi: 'mdi:emoticon-happy-outline',
    title: 'Support a positive learning environment',
    description: 'Safe, encouraging, and constructive mentoring.',
  },
  {
    iconMdi: 'mdi:file-document-outline',
    title: 'Follow applicable policies and agreements',
    description: 'Compliance with current tutor terms and platform policies.',
  },
]

export const tutorPolicySection = {
  badge: 'Professional Standards',
  title: 'Be the Mentor Students Can <span class="text-gradient-brand">Trust</span>',
  description:
    'Every tutor associated with Indian Mentors is expected to maintain professional, ethical, respectful, and student-focused standards.',
  classes: '!px-0 !py-0 mx-auto ',
  principle: 'Professional Teaching • Responsible Mentoring • Student-First Approach',
  principles: [
    { iconMdi: 'mdi:human-male-board', label: 'Professional Teaching' },
    { iconMdi: 'mdi:handshake-outline', label: 'Responsible Mentoring' },
    { iconMdi: 'mdi:heart-outline', label: 'Student-First Approach' },
  ],
}

export const earningsSection = {
  badge: 'Tutor Earnings & Payouts',
  title: 'Teach. Track. <span class="text-gradient-brand">Earn.</span>',
  description:
    'Indian Mentors aims to provide a structured system for recording tutoring sessions, calculating applicable earnings, and processing tutor payouts.',
  classes: '!px-0 !py-0',
  flowTitle: 'Earnings Flow',
  payoutTitle: 'Tutor Dashboard Provides',
  tagline: 'Join now — teach, track, and get paid with clarity!',
  cta: { label: 'Register as a Tutor', href: externalLinks.tutorRegistration },
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
    'Demo Tracking',
    'Session Earnings',
    'Wallet Balance',
    'Earnings History',
    'Payout History',
    'Session History',
    'Withdrawal Details',
  ],
  snapshot: {
    badge: 'Live tracking',
    title: 'Session to payout, in one view',
    description: 'Approved attendance credits your wallet. Withdrawals follow the applicable payout policy.',
    stages: [
      { iconMdi: 'mdi:clipboard-check-outline', label: 'Session' },
      { iconMdi: 'mdi:wallet-plus-outline', label: 'Wallet' },
      { iconMdi: 'mdi:bank-transfer', label: 'Account' },
    ],
    points: [
      { iconMdi: 'mdi:calendar-sync-outline', label: 'Flexible payout cycles' },
      { iconMdi: 'mdi:shield-lock-outline', label: 'Secure payout records' },
    ],
  },
}

export const browseStudentsSection = {
  badge: 'Browse Student Opportunities',
  title: 'Find students that <span class="text-gradient-brand">match your expertise</span>',
  description:
    'Registered tutors can explore available tutoring opportunities and connect with suitable students to expand their teaching engagements.',
  classes: '!px-0 !py-0',
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

export const tutorsBannerCta = {
  title: 'Your Expertise Can Make a Difference.',
  description: "Become a Mentor. Shape a Learner's Future. Connect your teaching expertise with students looking for personalised academic support through Indian Mentors.",
  supporting: 'Personalised Education • Trusted Tutors • Meaningful Mentorship',
  ctas: [
    { label: 'Join as a Tutor', href: externalLinks.tutorRegistration, iconMdi: 'mdi:account-plus-outline', primary: true },
    { label: 'Download Tutor Brochure', href: '/contact', iconMdi: 'mdi:book-open-page-variant-outline' },
  ],
}
