import { externalLinks } from './external-links'
export type StoryAccent = 'blue' | 'emerald' | 'amber' | 'violet' | 'rose'

export type StudentStory = {
  id: string
  name: string
  initials: string
  subtitle: string
  challenge: string
  solution: string
  result: string
  feedback: string
  beforeLabel: string
  afterLabel: string
  accent: StoryAccent
  spotlight?: boolean
}

export type QuoteReview = {
  id: string
  name: string
  location?: string
  role?: string
  quote: string
}

export type PlacementStory = {
  id: string
  title: string
  profile: string
  placement: string
  quote: string
}

export type StoryTab = {
  id: string
  label: string
  iconMdi: string
  kicker: string
  title: string
  classes: string
  description: string
  accent: 'blue' | 'emerald' | 'amber' | 'violet' | 'indigo' | 'rose'
}

export const successStoriesHero = {
  badge: 'Testimonials',
  title: 'Real Stories. Real Growth. Real Trust.',
  subtitle:
    'Our credibility is built on real outcomes and authentic relationships — from every corner of our academic ecosystem.',
  description:
    'Explore real experiences and success stories from students, parents, tutors, institutions, and channel partners who trust Indian Mentors across India.',
  caption: 'Structured Mentorship. Measurable Results. Trusted Nationwide.',
  primaryCta: { label: 'Book Free Demo', href: externalLinks.studentSignup },
  secondaryCta: { label: 'Talk to Counsellor', href: 'tel:+917389563564', icon: 'mdi:phone-outline' },
  ticker: [
    '25+ Stories',
    '6 Stakeholder Groups',
    '120+ Marks Gained',
    'Pan-India Coverage',
    'Student Journeys',
    'Parent Reviews',
    'Tutor Feedback',
    'Institutional Trust',
    'Partner Growth',
  ],
} as const

export const storyTabs: StoryTab[] = [
  {
    id: 'students',
    label: 'Students',
    iconMdi: 'mdi:school-outline',
    kicker: 'Student Success',
    title: 'Measurable outcomes from <span class="text-gradient-brand">real learners</span>',
    classes: '!px-0 !py-0',
    description: 'Structured planning, regular assessments, and personalised mentorship with results you can track.',
    accent: 'blue',
  },
  {
    id: 'parents',
    label: 'Parents',
    iconMdi: 'mdi:account-child-outline',
    kicker: 'Parent Reviews',
    title: 'Transparency parents <span class="text-gradient-brand">can trust</span>',
    classes: '!px-0 !py-0',
    description: 'Families who value structured academic planning and visible progress.',
    accent: 'emerald',
  },
  {
    id: 'tutors',
    label: 'Tutors',
    iconMdi: 'mdi:human-male-board',
    kicker: 'Tutor Reviews',
    title: 'Educators who grow <span class="text-gradient-brand">with structure</span>',
    classes: '!px-0 !py-0',
    description: 'Verified leads, transparent payments, and organised support across our network.',
    accent: 'amber',
  },
  {
    id: 'institutions',
    label: 'Institutions',
    iconMdi: 'mdi:domain',
    kicker: 'Institutional Feedback',
    title: 'Trusted by schools <span class="text-gradient-brand">and colleges</span>',
    classes: '!px-0 !py-0',
    description: 'Recruitment and faculty support that saves time and maintains quality.',
    accent: 'indigo',
  },
  {
    id: 'placements',
    label: 'Placements',
    iconMdi: 'mdi:briefcase-check-outline',
    kicker: 'Teacher Placements',
    title: 'Verified opportunities for <span class="text-gradient-brand">educators</span>',
    classes: '!px-0 !py-0',
    description: 'Real placement journeys connecting teachers with reputed institutions nationwide.',
    accent: 'violet',
  },
  {
    id: 'partners',
    label: 'Partners',
    iconMdi: 'mdi:handshake-outline',
    kicker: 'Channel Partners',
    title: 'Partners who scale <span class="text-gradient-brand">with clarity</span>',
    classes: '!px-0 !py-0',
    description: 'Transparent earnings, structured reporting, and strong brand support.',
    accent: 'rose',
  },
]

export const studentStories: StudentStory[] = [
  {
    id: 'aarav-sharma',
    name: 'Aarav Sharma',
    initials: 'AS',
    subtitle: 'Grade 10 · CBSE',
    challenge: 'Struggling with Mathematics (scoring 58%)',
    solution: 'Personalised concept clarity sessions + weekly assessments',
    result: 'Improved to 89% in Board Exams',
    feedback:
      'My tutor explained concepts in simple steps. The regular tests helped me gain confidence before boards.',
    beforeLabel: '58%',
    afterLabel: '89%',
    accent: 'blue',
    spotlight: true,
  },
  {
    id: 'meera-iyer',
    name: 'Meera Iyer',
    initials: 'MI',
    subtitle: 'Grade 8 · ICSE',
    challenge: 'Weak foundation in Science',
    solution: 'Structured topic-wise planning + revision worksheets',
    result: 'Grade improvement from C to A',
    feedback: 'I stopped being scared of Science. Classes were interactive and easy to understand.',
    beforeLabel: 'Grade C',
    afterLabel: 'Grade A',
    accent: 'emerald',
  },
  {
    id: 'rohan-gupta',
    name: 'Rohan Gupta',
    initials: 'RG',
    subtitle: 'NEET Aspirant',
    challenge: 'Poor Physics problem-solving speed',
    solution: '1.5-hour Diamond Plan with focused practice sessions',
    result: 'Improved mock scores by 120+ marks',
    feedback: 'The targeted practice strategy changed my preparation approach completely.',
    beforeLabel: 'Slow pace',
    afterLabel: '+120 marks',
    accent: 'violet',
  },
  {
    id: 'sana-khan',
    name: 'Sana Khan',
    initials: 'SK',
    subtitle: 'Grade 5 · IGCSE',
    challenge: 'Lack of focus & homework discipline',
    solution: 'Engaging home tutor + structured ERP monitoring',
    result: 'Improved consistency & better school remarks',
    feedback: 'Classes became fun, and I complete homework on time now.',
    beforeLabel: 'Distracted',
    afterLabel: 'Consistent',
    accent: 'rose',
  },
  {
    id: 'arjun-patel',
    name: 'Arjun Patel',
    initials: 'AP',
    subtitle: 'Grade 12 · Commerce',
    challenge: 'Accountancy clarity for Board Exams',
    solution: 'Platinum Plan (2 hours daily revision + test practice)',
    result: 'Scored 94% in Accountancy',
    feedback: 'The revision strategy and test analysis reports made all the difference.',
    beforeLabel: 'Unclear',
    afterLabel: '94%',
    accent: 'amber',
  },
]

export const parentReviews: QuoteReview[] = [
  { id: 'sharma-delhi', name: 'Mrs. Sharma', location: 'Delhi', quote: 'Transparent system. I can track attendance and progress anytime. Very professional setup.' },
  { id: 'iyer-bengaluru', name: 'Mr. Iyer', location: 'Bengaluru', quote: 'Tutor replacement was handled smoothly. Academic coordinator stayed involved throughout.' },
  { id: 'gupta-mumbai', name: 'Mr. Gupta', location: 'Mumbai', quote: 'Flexible scheduling helped us manage coaching and school together.' },
  { id: 'khan-hyderabad', name: 'Mrs. Khan', location: 'Hyderabad', quote: "My daughter's grades improved within three months. The dashboard updates are very helpful." },
  { id: 'patel-pune', name: 'Mrs. Patel', location: 'Pune', quote: 'Structured academic planning and regular reports make Indian Mentors different from local tuition services.' },
]

export const tutorReviews: QuoteReview[] = [
  { id: 'anjali-verma', name: 'Anjali Verma', role: 'Mathematics Tutor', quote: 'Verified leads and structured demo process increased my student conversion rate.' },
  { id: 'rohit-mehta', name: 'Rohit Mehta', role: 'Science Faculty', quote: 'Payment transparency and ERP attendance tracking make operations smooth.' },
  { id: 'priya-nair', name: 'Priya Nair', role: 'English Tutor', quote: 'Flexible hours allowed me to balance personal commitments while growing professionally.' },
  { id: 'amit-singh', name: 'Amit Singh', role: 'Competitive Exam Mentor', quote: 'Serious students and organised support team make teaching productive.' },
  { id: 'kavita-rao', name: 'Kavita Rao', role: 'Primary Tutor', quote: 'Dedicated recruiter support and structured communication make this platform reliable.' },
]

export const institutionalFeedback: QuoteReview[] = [
  { id: 'sunrise-public', name: 'Sunrise Public School', quote: 'Quick faculty placement support during mid-session replacement requirement.' },
  { id: 'bright-future', name: 'Bright Future Coaching', quote: 'Bulk recruitment was managed efficiently before the new academic session.' },
  { id: 'global-academy', name: 'Global Academy', quote: 'Pre-verified teacher database saved us significant hiring time.' },
  { id: 'skilledge', name: 'SkillEdge EdTech', quote: 'Professional screening process ensures quality online instructors.' },
  { id: 'city-commerce', name: 'City Commerce College', quote: 'Structured recruitment coordination simplified our hiring workflow.' },
]

export const placementStories: PlacementStory[] = [
  {
    id: 'physics-neet',
    title: 'Physics Faculty – NEET Coaching Institute',
    profile: '5 Years Experience · M.Sc. Physics',
    placement: 'Leading NEET Coaching Institute (Full-Time Faculty)',
    quote: 'Indian Mentors coordinated my demo sessions professionally and guided me through the interview process. Within two weeks, I secured a full-time faculty position.',
  },
  {
    id: 'math-cbse',
    title: 'Mathematics Teacher – CBSE School',
    profile: 'B.Ed + 4 Years School Experience',
    placement: 'CBSE Affiliated Senior Secondary School (TGT Mathematics)',
    quote: 'The recruitment team handled everything — from profile shortlisting to interview scheduling. The process was transparent at every stage.',
  },
  {
    id: 'commerce-college',
    title: 'Commerce Lecturer – Degree College',
    profile: 'M.Com, NET Qualified',
    placement: 'Private Commerce & Management College (Assistant Professor)',
    quote: "Thanks to Indian Mentors' Institutional Hiring Division, I was shortlisted quickly. The coordination made the hiring process smooth.",
  },
  {
    id: 'english-edtech',
    title: 'English Trainer – EdTech Company',
    profile: 'MA English · Online Teaching Specialist',
    placement: 'National EdTech Platform (Online Instructor)',
    quote: 'Indian Mentors helped me connect with a reputed EdTech company that matched my teaching style and availability.',
  },
  {
    id: 'chemistry-jee',
    title: 'Chemistry Faculty – IIT-JEE Coaching',
    profile: '7 Years Competitive Exam Experience',
    placement: 'IIT-JEE Coaching Centre (Senior Faculty)',
    quote: 'Bulk recruitment drive was managed seamlessly. Demo scheduling, feedback, and final selection were handled in an organised way.',
  },
]

export const partnerReviews: QuoteReview[] = [
  { id: 'rajesh-verma', name: 'Rajesh Verma', role: 'North Region Partner', quote: 'Transparent earnings dashboard and strong brand support helped scale operations quickly.' },
  { id: 'sneha-kapoor', name: 'Sneha Kapoor', role: 'West Region Partner', quote: 'Easy tracking of tutor and student registrations.' },
  { id: 'imran-shaikh', name: 'Imran Shaikh', role: 'South Region Partner', quote: 'Decentralized model allows regional growth without operational confusion.' },
  { id: 'manish-tiwari', name: 'Manish Tiwari', role: 'East Zone Partner', quote: 'Centralised marketing support increased local lead generation.' },
  { id: 'priyanka-desai', name: 'Priyanka Desai', role: 'City Partner', quote: 'Scalable model with structured reporting ensures business clarity.' },
]

export const studentRailSection = {
  badge: 'Student journeys',
  title: 'Scroll the <span class="text-gradient-brand">transformation reel</span>',
  classes: '!px-0 !py-0 max-w-lg',
  description: 'Real before-and-after academic outcomes from students across India.',
} as const

export const videoTestimonialsSection = {
  kicker: 'Video Testimonials',
  title: 'Hear it <span class="text-gradient-brand">in their own words</span>',
  classes: '!px-0 !py-0 max-w-xl',
  description: 'Authentic video reviews from every stakeholder — real experiences that reflect trust and measurable impact.',
} as const

export const successStoriesFinalCta = {
  badge: 'Your turn',
  title: 'Ready to Become Our Next Success Story?',
  description: "Let's begin your personalised learning journey today.",
  primaryCta: { label: 'Book Free Demo', href: externalLinks.studentSignup },
  secondaryCta: { label: 'Talk to Counsellor', href: 'tel:+917389563564' },
  closing: 'Indian Mentors – Where Academic Success Stories Are Built Every Day.',
} as const

export const accentThemes = {
  blue: { gradient: 'from-blue-500 to-indigo-600', soft: 'bg-blue-50', text: 'text-blue-600', ring: 'ring-blue-100', border: 'border-blue-200' },
  emerald: { gradient: 'from-emerald-500 to-teal-600', soft: 'bg-emerald-50', text: 'text-emerald-600', ring: 'ring-emerald-100', border: 'border-emerald-200' },
  amber: { gradient: 'from-amber-500 to-orange-600', soft: 'bg-amber-50', text: 'text-amber-600', ring: 'ring-amber-100', border: 'border-amber-200' },
  violet: { gradient: 'from-violet-500 to-purple-600', soft: 'bg-violet-50', text: 'text-violet-600', ring: 'ring-violet-100', border: 'border-violet-200' },
  rose: { gradient: 'from-rose-500 to-pink-600', soft: 'bg-rose-50', text: 'text-rose-600', ring: 'ring-rose-100', border: 'border-rose-200' },
  indigo: { gradient: 'from-indigo-500 to-blue-600', soft: 'bg-indigo-50', text: 'text-indigo-600', ring: 'ring-indigo-100', border: 'border-indigo-200' },
} as const
