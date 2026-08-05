import type { TrustIndicatorItem } from '~/components/ui/TrustIndicatorsLayout.vue'

export const academicHero = {
  brand: 'Academic Coverage & Courses',
  badge: 'Academic Edge',
  titleLine1: 'Learning support from nursery to university',
  description:
    'Personalised tutoring for every grade, board, and subject — verified mentors matched to your goals across India.',
  backgroundImage: 'assets/img/hero/hero-2.png',
  mobileBackgroundImage: 'assets/img/hero/hero-mobile-2.png',
  primaryCta: {
    label: 'Get Started',
    href: '#book-demo',
  },
  secondaryCta: {
    label: 'Explore Coverage',
    href: '#grades-covered',
  },
  ticker: [
    'CBSE',
    'ICSE',
    'IB',
    'Cambridge',
    'NIOS',
    'State Boards',
    'JEE / NEET',
    'Nursery to PG',
    '250+ Subjects',
    'Verified Mentors',
  ],
}

export const academicHeroStats: TrustIndicatorItem[] = [
  {
    value: '50K+',
    label: 'Active students learning every month',
    icon: 'solar:users-group-rounded-bold-duotone',
  },
  {
    value: '5+ lakh',
    label: 'Verified tutors across every subject',
    icon: 'solar:square-academic-cap-bold-duotone',
  },
  {
    value: '50+ lakh',
    label: 'Sessions delivered to date',
    icon: 'solar:videocamera-record-bold-duotone',
  },
  {
    value: '98%',
    label: 'Satisfaction rate from verified reviews',
    icon: 'solar:star-bold-duotone',
  },
]

export const gradesSection = {
  kicker: 'Grades covered',
  title: 'Support across <span class="text-gradient-brand">every academic stage</span>',
  description:
    'Structured tutoring from early childhood to postgraduate — adapted to each student’s level, pace, and goals.',
  classes: '!px-0 !py-0',
  viewAllLabel: 'View all grades & programmes',
  viewAllHref: '/grades',
  learnMoreLabel: 'Learn more',
  consultationCta: {
    label: 'Book Free Consultation',
    href: '#book-demo',
  },
  stages: [
    {
      id: 'pre-primary',
      title: 'Pre-Primary',
      gradesLabel: 'Nursery · LKG · UKG',
      tagline: 'Early development & school readiness',
      overview:
        'Play-based mentoring that builds curiosity, communication, and early literacy & numeracy for school readiness.',
      highlights: [
        'Play-based activity learning',
        'Phonics & number readiness',
        'Motor & social skills',
        'Confidence building',
      ],
      chips: ['Nursery', 'LKG', 'UKG'],
      visual: 'assets/img/academic-coverage/grade-1.webp',
      iconMdi: 'mdi:teddy-bear',
      ctaLabel: 'Start early learning',
      ctaHref: '#book-demo',
    },
    {
      id: 'primary',
      title: 'Primary',
      gradesLabel: 'Class 1st – 5th',
      tagline: 'Concept building & learning habits',
      overview:
        'Interactive tutoring that strengthens reading, number sense, and positive learning habits from Class 1 to 5.',
      highlights: [
        'Phonics & language fluency',
        'Number sense & maths basics',
        'Reading comprehension',
        'Curiosity-led learning',
      ],
      chips: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'],
      visual: 'assets/img/academic-coverage/grade-2.webp',
      iconMdi: 'mdi:school-outline',
      ctaLabel: 'Find a primary tutor',
      ctaHref: '#book-demo',
    },
    {
      id: 'middle',
      title: 'Middle School',
      gradesLabel: 'Class 6th – 8th',
      tagline: 'Subject depth & stronger concepts',
      overview:
        'Deeper subject mentoring that prepares students for board-level study with clearer concepts and study habits.',
      highlights: [
        'Subject-wise concept clarity',
        'Analytical thinking skills',
        'Homework & revision support',
        'Board-prep foundation',
      ],
      chips: ['Class 6', 'Class 7', 'Class 8'],
      visual: 'assets/img/academic-coverage/grade-3.webp',
      iconMdi: 'mdi:brain',
      ctaLabel: 'Explore middle school',
      ctaHref: '#book-demo',
    },
    {
      id: 'secondary',
      title: 'Secondary',
      gradesLabel: 'Class 9th – 10th',
      tagline: 'Board examination preparation',
      overview:
        'Focused board prep with structured revision, doubt-solving, and exam strategy for Class 9 and 10.',
      highlights: [
        'Board-aligned lesson plans',
        'Mock tests & feedback',
        'Doubt-clearing sessions',
        'Time-bound revision',
      ],
      chips: ['Class 9', 'Class 10'],
      visual: 'assets/img/academic-coverage/grade-4.webp',
      iconMdi: 'mdi:clipboard-text-outline',
      ctaLabel: 'Start board prep',
      ctaHref: '#book-demo',
    },
    {
      id: 'senior',
      title: 'Senior Secondary',
      gradesLabel: 'Class 11th – 12th',
      tagline: 'Stream specialisation & career prep',
      overview:
        'Stream-focused mentoring for Science, Commerce, and Humanities — aligned to boards and entrance goals.',
      highlights: [
        'Stream-specialist mentors',
        'Board + entrance balance',
        'Career-oriented guidance',
        'Performance tracking',
      ],
      chips: ['Science', 'Commerce', 'Humanities', 'Class 11–12'],
      visual: 'assets/img/academic-coverage/grade-5.webp',
      iconMdi: 'mdi:school',
      ctaLabel: 'Get senior mentoring',
      ctaHref: '#book-demo',
    },
    {
      id: 'competitive',
      title: 'Competitive Exams',
      gradesLabel: 'Entrance & olympiad prep',
      tagline: 'Strategic mentoring for ranks',
      overview:
        'Targeted exam mentoring with mock tests, analytics, and rank-focused strategy for school and college entrances.',
      highlights: [
        'Syllabus-targeted practice',
        'Mock tests & analytics',
        'Rank-focused strategy',
        'Timed revision plans',
      ],
      chips: ['JEE', 'NEET', 'Navodaya', 'Olympiad'],
      visual: 'assets/img/academic-coverage/grade-6.webp',
      iconMdi: 'mdi:trophy-outline',
      ctaLabel: 'Prepare for exams',
      ctaHref: '#book-demo',
    },
    {
      id: 'university',
      title: 'University',
      gradesLabel: 'Undergraduate – Postgraduate',
      tagline: 'Advanced subjects & academic projects',
      overview:
        'University-level support for complex subjects, assignments, research writing, and exam revision.',
      highlights: [
        'Advanced concept clarity',
        'Assignment guidance',
        'Research & writing support',
        'Exam revision planning',
      ],
      chips: ['Undergraduate', 'Postgraduate'],
      visual: 'assets/img/academic-coverage/grade-7.webp',
      iconMdi: 'mdi:university-outline',
      ctaLabel: 'Get university support',
      ctaHref: '#book-demo',
    },
  ],
}

export type SubjectStream = {
  id: string
  title: string
  tagline: string
  subjects: string[]
  iconMdi: string
  accent: 'blue' | 'teal' | 'amber' | 'sky' | 'indigo' | 'rose' | 'slate'
}

export const subjectsSection = {
  kicker: 'Subjects offered',
  title: 'Browse by category. <span class="text-gradient-brand">Pick your stream.</span>',
  description:
    'Explore Sciences, Languages, Commerce, and more — select a category to see subjects, then match with a verified tutor for your board and goals.',
  classes: '!px-0 !py-0 max-w-3xl mx-auto',
  searchPlaceholder: 'Search a category or subject — Sciences, NEET, French…',
  emptyTitle: 'No categories match that search',
  emptyDescription: 'Try another keyword, or clear search to browse all streams.',
  resetLabel: 'Clear search',
  selectHint: 'Select a category to continue',
  subjectsLabel: 'Subjects in this category',
  detailCta: 'Match me with a tutor',
  selectedCtaPrefix: 'Find a tutor for',
  footerNote: 'Mentors matched to your board, grade, and learning goals.',
  metricLabel: 'Categories',
  metricValue: '7',
  streams: [
    {
      id: 'sciences',
      title: 'Sciences',
      tagline: 'STEM foundations with concept clarity',
      subjects: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'Biology',
        'EVS',
        'Computer Science',
        'Applied Maths',
        'Statistics',
      ],
      iconMdi: 'mdi:flask-outline',
      accent: 'teal',
    },
    {
      id: 'languages',
      title: 'Languages',
      tagline: 'Fluency, writing, and communication',
      subjects: ['English', 'Hindi', 'Sanskrit', 'French', 'German', 'Spanish', 'Marathi', 'Tamil'],
      iconMdi: 'mdi:translate',
      accent: 'blue',
    },
    {
      id: 'social',
      title: 'Social Sciences',
      tagline: 'Context, analysis, and civic literacy',
      subjects: [
        'History',
        'Geography',
        'Civics',
        'Political Science',
        'Economics',
        'Sociology',
        'Psychology',
      ],
      iconMdi: 'mdi:earth',
      accent: 'amber',
    },
    {
      id: 'commerce',
      title: 'Commerce',
      tagline: 'Accounts, business, and finance tracks',
      subjects: [
        'Accountancy',
        'Business Studies',
        'Economics',
        'Entrepreneurship',
        'Financial Markets',
        'Cost Accounting',
      ],
      iconMdi: 'mdi:chart-bar',
      accent: 'sky',
    },
    {
      id: 'school-entrance',
      title: 'School Entrance',
      tagline: 'Prep for selective school admissions',
      subjects: ['Navodaya', 'Sainik', 'RIMC', 'RMS', 'Army Public Schools', 'Other school entrance'],
      iconMdi: 'mdi:school-outline',
      accent: 'indigo',
    },
    {
      id: 'college-entrance',
      title: 'College Entrance',
      tagline: 'Competitive mentoring for higher studies',
      subjects: ['JEE Main', 'JEE Advanced', 'NEET', 'CUET', 'CA Foundation', 'CS Executive', 'CMA'],
      iconMdi: 'mdi:medal-outline',
      accent: 'rose',
    },
    {
      id: 'additional',
      title: 'Enrichment',
      tagline: 'Skills beyond the core syllabus',
      subjects: ['Coding', 'Olympiad', 'NTSE', 'KVPY', 'Public speaking', 'Vedic Maths', 'Robotics'],
      iconMdi: 'mdi:rocket-launch-outline',
      accent: 'slate',
    },
  ] satisfies SubjectStream[],
}

export const courseMatchingSection = {
  kicker: 'Intelligent course matching',
  title: 'The right mentor — <span class="text-gradient-brand">matched with intent</span>',
  description:
    'Not a random assignment. We build a clear academic profile, shortlist verified mentors, and start with a free demo so every student begins with the right fit.',
  classes: '!px-0 !py-0',
  factorsTitle: 'What we match on',
  factorsDescription: 'Five signals that shape every mentor recommendation.',
  ctaLabel: 'Find your perfect tutor',
  ctaHref: '#book-demo',
  secondaryCtaLabel: 'Book Free Consultation',
  secondaryCtaHref: '#book-demo',
  supporting: 'Free demo · Verified mentors · Matched to board & goals',
  criteria: [
    {
      label: 'Subject expertise',
      description: 'Deep mastery in the exact subjects your child needs.',
      iconMdi: 'mdi:book-open-page-variant-outline',
    },
    {
      label: 'Grade level',
      description: 'Mentors experienced at the student’s current stage.',
      iconMdi: 'mdi:numeric',
    },
    {
      label: 'Academic board',
      description: 'Aligned to CBSE, ICSE, IB, Cambridge, state boards & more.',
      iconMdi: 'mdi:certificate-outline',
    },
    {
      label: 'Learning objectives',
      description: 'Foundation, boards, entrances, or enrichment goals.',
      iconMdi: 'mdi:target',
    },
    {
      label: 'Learning format',
      description: 'Home, online, shadow, travel, or live-in tutoring.',
      iconMdi: 'mdi:laptop',
    },
  ],
  flow: [
    {
      step: '01',
      title: 'Share the profile',
      description: 'Tell us grade, board, subjects, and the outcomes you care about most.',
      detail: 'A short intake replaces guesswork — we capture what success looks like for your child.',
      iconMdi: 'mdi:account-school-outline',
    },
    {
      step: '02',
      title: 'Smart shortlist',
      description: 'We filter verified mentors by expertise, board fit, and teaching style.',
      detail: 'Only background-checked tutors with the right academic match make the shortlist.',
      iconMdi: 'mdi:vector-link',
    },
    {
      step: '03',
      title: 'Demo & begin',
      description: 'Start with a free demo, lock the learning plan, and begin with confidence.',
      detail: 'If the first fit isn’t right, we rematch quickly — no commitment until you’re sure.',
      iconMdi: 'mdi:check-decagram-outline',
    },
  ],
}

export const academicFinalCta = {
  title: 'Start your personalised learning journey today',
  description:
    'Whether your child needs foundation learning, board exam preparation, or competitive mentoring, we connect you with verified tutors across India.',
  supporting: 'No commitment required · Background-verified tutors · Free demo session',
  primaryCta: {
    label: 'Book Free Demo',
    href: '#book-demo',
  },
  secondaryCta: {
    label: 'Find a Personalised Tutor',
    href: '#book-demo',
  },
}
