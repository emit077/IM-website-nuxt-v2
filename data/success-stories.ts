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
  titleHighlight: string
  description: string
  accent: 'blue' | 'emerald' | 'amber' | 'violet' | 'indigo' | 'rose'
}

export const successStoriesHero = {
  badge: 'Testimonials',
  title: 'Real Stories.',
  titleHighlight: 'Real Growth. Real Trust.',
  description:
    'Explore real experiences and success stories from students, parents, tutors, institutions, and channel partners who trust Indian Mentors across India.',
  tagline: 'Structured Mentorship. Measurable Results. Trusted Nationwide.',
  intro:
    'Our credibility is built on real outcomes and authentic relationships — from every corner of our academic ecosystem.',
  primaryCta: { label: 'Book Free Demo', href: '#book-demo' },
  secondaryCta: { label: 'Talk to Counsellor', href: 'tel:+917389563564' },
} as const

export const successStoriesHeroStats = [
  { value: '25+', label: 'Stories', iconMdi: 'mdi:book-open-page-variant-outline' },
  { value: '6', label: 'Groups', iconMdi: 'mdi:account-group-outline' },
  { value: '120+', label: 'Marks gained', iconMdi: 'mdi:trending-up' },
  { value: 'Pan-India', label: 'Coverage', iconMdi: 'mdi:map-marker-radius-outline' },
] as const

export const storyTabs: StoryTab[] = [
  {
    id: 'students',
    label: 'Students',
    iconMdi: 'mdi:school-outline',
    kicker: 'Student Success',
    title: 'Measurable outcomes from',
    titleHighlight: 'real learners',
    description: 'Structured planning, regular assessments, and personalised mentorship with results you can track.',
    accent: 'blue',
  },
  {
    id: 'parents',
    label: 'Parents',
    iconMdi: 'mdi:account-child-outline',
    kicker: 'Parent Reviews',
    title: 'Transparency parents',
    titleHighlight: 'can trust',
    description: 'Families who value structured academic planning and visible progress.',
    accent: 'emerald',
  },
  {
    id: 'tutors',
    label: 'Tutors',
    iconMdi: 'mdi:human-male-board',
    kicker: 'Tutor Reviews',
    title: 'Educators who grow',
    titleHighlight: 'with structure',
    description: 'Verified leads, transparent payments, and organised support across our network.',
    accent: 'amber',
  },
  {
    id: 'institutions',
    label: 'Institutions',
    iconMdi: 'mdi:domain',
    kicker: 'Institutional Feedback',
    title: 'Trusted by schools',
    titleHighlight: 'and colleges',
    description: 'Recruitment and faculty support that saves time and maintains quality.',
    accent: 'indigo',
  },
  {
    id: 'placements',
    label: 'Placements',
    iconMdi: 'mdi:briefcase-check-outline',
    kicker: 'Teacher Placements',
    title: 'Verified opportunities for',
    titleHighlight: 'educators',
    description: 'Real placement journeys connecting teachers with reputed institutions nationwide.',
    accent: 'violet',
  },
  {
    id: 'partners',
    label: 'Partners',
    iconMdi: 'mdi:handshake-outline',
    kicker: 'Channel Partners',
    title: 'Partners who scale',
    titleHighlight: 'with clarity',
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

export const videoTestimonialsSection = {
  kicker: 'Video Testimonials',
  title: 'Hear it',
  titleHighlight: 'in their own words',
  description: 'Authentic video reviews from every stakeholder — real experiences that reflect trust and measurable impact.',
} as const

export type VideoTestimonial = {
  id: string
  category: string
  title: string
  quote: string
  person: string
  role: string
  duration: string
  result: string
  thumb: string
  accent: 'blue' | 'emerald' | 'amber' | 'violet' | 'indigo' | 'rose'
}

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: 'aarushi-board',
    category: 'Student Success',
    title: 'From average scores to class topper',
    quote: "The mentor's revision strategy and weekly mock tests helped me improve quickly. I now approach exams with confidence.",
    person: 'Aarushi Verma',
    role: 'Class 10 · CBSE',
    duration: '2:08',
    result: 'Top 5 rank in class',
    thumb: 'https://i.pravatar.cc/800?img=47',
    accent: 'blue',
  },
  {
    id: 'rohit-parent',
    category: 'Parent Review',
    title: 'Clear progress updates every week',
    quote: 'We finally had structure at home. The tutor shared practical goals and feedback after each session.',
    person: 'Rohit Sharma',
    role: 'Parent · Grade 8',
    duration: '1:54',
    result: '18% score improvement',
    thumb: 'https://i.pravatar.cc/800?img=15',
    accent: 'emerald',
  },
  {
    id: 'nisha-tutor',
    category: 'Tutor Review',
    title: 'Quality students and smoother workflow',
    quote: 'The platform makes planning and communication easier. Student consistency improved within a few weeks.',
    person: 'Nisha Kapoor',
    role: 'English Tutor',
    duration: '2:25',
    result: 'Higher completion rate',
    thumb: 'https://i.pravatar.cc/800?img=23',
    accent: 'amber',
  },
  {
    id: 'school-coordinator',
    category: 'School Feedback',
    title: 'Stronger classroom participation',
    quote: 'Students from this program ask better questions and show stronger fundamentals in regular school sessions.',
    person: 'Academic Coordinator',
    role: 'Partner School',
    duration: '1:46',
    result: 'Better concept retention',
    thumb: 'https://i.pravatar.cc/800?img=12',
    accent: 'indigo',
  },
  {
    id: 'partner-review',
    category: 'Channel Partner',
    title: 'Scaling with transparent reporting',
    quote: 'The earnings dashboard and brand support helped us grow regionally without operational confusion.',
    person: 'Rajesh Verma',
    role: 'North Region Partner',
    duration: '2:12',
    result: '2× regional growth',
    thumb: 'https://i.pravatar.cc/800?img=68',
    accent: 'violet',
  },
  {
    id: 'placement-faculty',
    category: 'Placement Success',
    title: 'Placed within two weeks',
    quote: 'Demo sessions were coordinated professionally. I secured a full-time faculty position at a reputed institute.',
    person: 'Physics Faculty',
    role: 'NEET Coaching · M.Sc. Physics',
    duration: '2:31',
    result: 'Full-time placement',
    thumb: 'https://i.pravatar.cc/800?img=33',
    accent: 'rose',
  },
]

export const successStoriesFinalCta = {
  badge: 'Your turn',
  title: 'Ready to Become Our Next Success Story?',
  description: "Let's begin your personalised learning journey today.",
  primaryCta: { label: 'Book Free Demo', href: '#book-demo' },
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
