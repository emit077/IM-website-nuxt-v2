import { externalLinks } from './external-links'

type ServiceItem = {
  id: string
  img: string
  visual: string
  title: string
  tagline: string
  overview: string
  features: string[]
  bestSuitedFor: string[]
  keyBenefit?: string
  coverage?: string[]
  supportAreas?: string[]
  mayInclude?: string[]
  cta: { label: string; href: string }
}

type SpecialSupportCategory = {
  id: string
  iconMdi: string
  title: string
  description: string
  supportMayInclude: string[]
}

export const servicesHero = {
  title: 'Personalised Learning Solutions for <span class="text-gradient-brand">Every Student</span>',
  description:
    'At Indian Mentors, we understand that every student has a unique learning journey. Different learners require different levels of academic guidance, teaching formats, schedules, and support systems. That\'s why we provide a comprehensive range of personalised tutoring services designed around the individual needs of students and families.',
}

export const tutoringServicesSection = {
  kicker: 'Our Tutoring Services',
  title: 'Personalised Tutoring Designed Around <span class="text-gradient-brand">Your Needs</span>',
  classes: '!px-0 !py-0',
  description:
    'Our tutoring services are designed to provide students with the right combination of academic expertise, personal attention, flexibility, and ongoing support.',
  consultationCta: {
    label: 'Book Free Consultation',
    href: externalLinks.studentSignup,
  },
}

export const tutoringServices: ServiceItem[] = [
  {
    id: 'home-tutors',
    img: 'assets/img/services/home-tutor.svg',
    visual: 'assets/img/services/home-tutors.webp',
    title: 'Home Tutors',
    tagline: 'Personalised Learning at Your Home',
    overview:
      'Dedicated one-to-one academic support at home — customised learning plans, concept clarity, and steady progress in a familiar environment.',
    features: [
      'One-to-one teaching',
      'Custom learning plans',
      'Flexible scheduling',
      'Homework support',
    ],
    bestSuitedFor: ['Nursery–Class XII', 'College learners', 'Exam preparation'],
    coverage: ['CBSE', 'ICSE', 'IGCSE', 'IB', 'State Boards', 'Other curricula'],
    keyBenefit:
      'Focused face-to-face attention in a personalised learning environment designed around each student’s academic needs.',
    cta: { label: 'Find a Home Tutor', href: externalLinks.studentSignup },
  },
  {
    id: 'online-tutors',
    img: 'assets/img/services/online-tutor.svg',
    visual: 'assets/img/services/online-tutor.webp',
    title: 'Online Tutors',
    tagline: 'Learn Anytime, Anywhere',
    overview:
      'Live interactive classes with qualified educators — learn from anywhere with digital tools, flexible timings, and structured academic support.',
    features: [
      'Live interactive classes',
      'Whiteboard & screen share',
      'Doubt-solving sessions',
      'Progress monitoring',
    ],
    bestSuitedFor: ['India & overseas', 'Flexible schedules', 'Int’l curricula'],
    coverage: ['School subjects', 'Board exams', 'Competitive exams', 'Int’l curricula', 'Skills'],
    keyBenefit:
      'Access personalised tutoring without geographical limits through structured, interactive digital learning.',
    cta: { label: 'Find an Online Tutor', href: externalLinks.studentSignup },
  },
  {
    id: 'hybrid-tutors',
    img: 'assets/img/services/hybrid-tutor.svg',
    visual: 'assets/img/services/hybrid-tutor.webp',
    title: 'Hybrid Tutors',
    tagline: 'Home and Online, Combined',
    overview:
      'Blend in-person sessions at home with live online classes — one personalised plan that mixes both formats around your week.',
    features: [
      'Home + online mix',
      'Flexible weekly split',
      'Same tutor continuity',
      'Schedule that adapts',
    ],
    bestSuitedFor: ['Busy family schedules', 'Mixed subjects', 'Travel + home weeks'],
    coverage: ['School subjects', 'Board exams', 'Home sessions', 'Live online classes'],
    keyBenefit:
      'Keep one learning plan while mixing face-to-face and online sessions around your family’s week.',
    cta: { label: 'Find a Hybrid Tutor', href: externalLinks.studentSignup },
  },
  {
    id: 'shadow-tutors',
    img: 'assets/img/services/shadow-tutor.svg',
    visual: 'assets/img/services/shadow-tutors.webp',
    title: 'Shadow Tutors',
    tagline: 'In-School Academic Support',
    overview:
      'One-to-one classroom assistance for students who need extra academic, organisational, or behavioural support during school hours.',
    features: [
      'Classroom support',
      'Attention & focus help',
      'Behaviour guidance',
      'Concept reinforcement',
    ],
    bestSuitedFor: ['School-based support', 'Attention & organisation', 'Classroom assistance'],
    keyBenefit:
      'Personalised support that helps students participate more confidently and effectively in school.',
    cta: { label: 'Explore Shadow Tutor Support', href: externalLinks.studentSignup },
  },
  {
    id: 'travel-tutors',
    img: 'assets/img/services/travel-tutor.svg',
    visual: 'assets/img/services/travel-tutor.webp',
    title: 'Travel Tutors',
    tagline: 'Learning Without Boundaries',
    overview:
      'Keep learning on track while travelling or relocating — flexible, curriculum-aligned tutoring that travels with your family.',
    features: [
      'Travel continuity',
      'Flexible locations',
      'Personalised plans',
      'Exam preparation',
    ],
    bestSuitedFor: ['Travelling families', 'Relocating students', 'Extended travel'],
    keyBenefit:
      'Students continue their academic journey even when location or daily routines change.',
    cta: { label: 'Find a Travel Tutor', href: externalLinks.studentSignup },
  },
  {
    id: 'live-in-tutors',
    img: 'assets/img/services/live-in-tutor.svg',
    visual: 'assets/img/services/live-In-tutors.webp',
    title: 'Live-In Tutors',
    tagline: 'Full-Time Residential Mentorship',
    overview:
      'Full-time residential academic mentorship with daily study planning, homework supervision, and consistent guidance at home.',
    features: [
      'Daily study planning',
      'Structured routines',
      'Homework supervision',
      'Continuous mentoring',
    ],
    bestSuitedFor: ['Intensive support', 'Board exam prep', 'Daily study routines'],
    keyBenefit:
      'Consistent academic guidance and structured study support throughout the daily learning routine.',
    cta: { label: 'Explore Live-In Tutor Services', href: externalLinks.studentSignup },
  },
  {
    id: 'special-educators',
    img: 'assets/img/services/special-tutor.svg',
    visual: 'assets/img/services/special-educators.webp',
    title: 'Special Educators',
    tagline: 'Support for Diverse Learning Needs',
    overview:
      'Individualised educational support for children with diverse learning and developmental needs — paced around each learner’s strengths.',
    features: [
      'Individualised strategies',
      'One-to-one support',
      'Skill development',
      'Behaviour support',
    ],
    bestSuitedFor: ['Diverse learning needs', 'Individualised plans', 'Specialised support'],
    supportAreas: [
      'ADHD',
      'Autism',
      'Dyslexia',
      'Dysgraphia',
      'Dyscalculia',
      'SLD',
      'Speech delays',
      'Behavioural',
    ],
    keyBenefit:
      'Learning support designed around each student’s strengths, challenges, pace, and educational needs.',
    cta: { label: 'Find a Special Educator', href: externalLinks.studentSignup },
  },
  {
    id: 'home-schooling',
    img: 'assets/img/services/home-schooling.svg',
    visual: 'assets/img/services/home-schooling-support.webp',
    title: 'Home Schooling Support',
    tagline: 'Structured Home-Based Education',
    overview:
      'Structured home-based education with curriculum planning, subject experts, assessments, and clear academic direction for your child.',
    features: [
      'Curriculum planning',
      'Subject specialists',
      'Weekly lesson plans',
      'Continuous assessments',
    ],
    bestSuitedFor: ['Home-based education', 'Flexible learning', 'National & int’l curricula'],
    coverage: ['CBSE', 'ICSE', 'State Boards', 'Cambridge', 'IB', 'Int’l Curricula'],
    keyBenefit:
      'Create a structured, personalised learning environment while keeping academic direction and continuity.',
    cta: { label: 'Explore Home Schooling Support', href: externalLinks.studentSignup },
  },

  {
    id: 'custom-tutor',
    img: 'assets/img/services/custome.svg',
    visual: 'assets/img/hero/hero-1.png',
    title: 'Custom Tutor Services',
    tagline: 'Designed Around Your Learning Goals',
    overview:
      'Tailor-made tutoring when a standard format isn’t enough — flexible plans built around subjects, schedule, location, and learning goals.',
    features: [
      'Flexible learning plans',
      'Multiple subject specialists',
      'Home / Online / Hybrid options',
      'Competitive exam coaching',
      'Academic coordinator support',
      'Personalised tutor matching',
    ],
    bestSuitedFor: [
      'Families with unique or combined requirements',
      'Students needing multi-format learning',
      'Competitive and Olympiad preparation',
    ],
    mayInclude: [
      'Combination of home and online tutoring',
      'Weekend learning plans',
      'Olympiad & entrance exam support',
      'Language learning',
      'Skill development',
      'International curriculum support',
    ],
    cta: { label: 'Discuss Your Requirement', href: externalLinks.studentSignup },
  },
]

export const specialisedSupportSection = {
  kicker: 'Specialised Learning Support',
  title: 'Individualised Educational <span class="text-gradient-brand">Assistance</span>',
  classes: '!px-0 !py-0',
  description:
    'Our specialised education services are designed to address different learning needs through structured, student-centred support. The exact approach may vary depending on the student\'s individual profile and the qualifications of the assigned educator.',
  note: 'Educational tutoring and special education support are not substitutes for medical, psychological, speech-language, occupational, or other clinical treatment. Where appropriate, families should work with qualified healthcare or therapeutic professionals alongside educational support.',
}

export const specialisedSupportCategories: SpecialSupportCategory[] = [
  {
    id: 'adhd',
    iconMdi: 'mdi:brain',
    title: 'Attention Deficit Hyperactivity Disorder (ADHD) Support',
    description: 'Helping students develop attention, organisation, and learning routines.',
    supportMayInclude: [
      'Attention and focus strategies',
      'Behaviour support',
      'Classroom readiness',
      'Executive function development',
      'Homework assistance',
      'Study planning',
    ],
  },
  {
    id: 'autism',
    iconMdi: 'mdi:rainbow',
    title: 'Autism Spectrum Support',
    description: 'Creating structured learning experiences adapted to individual communication and learning needs.',
    supportMayInclude: [
      'Individual learning strategies',
      'Communication support',
      'Social skill development',
      'Academic adaptation',
      'Behavioural strategies',
      'Visual learning approaches',
    ],
  },
  {
    id: 'dyslexia',
    iconMdi: 'mdi:book-open-page-variant-outline',
    title: 'Dyslexia Support',
    description: 'Supporting reading, writing, spelling, and language-related academic development.',
    supportMayInclude: [
      'Reading intervention',
      'Phonics-based learning',
      'Writing development',
      'Spelling strategies',
      'Reading fluency',
      'Comprehension support',
    ],
  },
  {
    id: 'dysgraphia',
    iconMdi: 'mdi:pencil-outline',
    title: 'Dysgraphia Support',
    description: 'Helping students develop stronger handwriting, written expression, and writing organisation.',
    supportMayInclude: [
      'Handwriting development',
      'Fine motor support',
      'Writing organisation',
      'Written expression',
    ],
  },
  {
    id: 'dyscalculia',
    iconMdi: 'mdi:calculator-variant-outline',
    title: 'Dyscalculia Support',
    description: 'Building mathematical understanding through structured and practical learning approaches.',
    supportMayInclude: [
      'Number sense development',
      'Mathematical concept support',
      'Logical thinking',
      'Practical learning activities',
    ],
  },
  {
    id: 'sld',
    iconMdi: 'mdi:puzzle-outline',
    title: 'Specific Learning Disability Support',
    description: 'Providing structured academic assistance based on individual learning requirements.',
    supportMayInclude: [
      'Individualised education strategies',
      'Academic skill development',
      'Classroom adaptation',
      'Cognitive learning strategies',
      'Study skills development',
    ],
  },
  {
    id: 'speech',
    iconMdi: 'mdi:microphone-outline',
    title: 'Speech & Language Learning Support',
    description: 'Supporting communication and academic language development through educational activities.',
    supportMayInclude: [
      'Language development activities',
      'Communication practice',
      'Vocabulary building',
      'Academic language support',
    ],
  },
  {
    id: 'behavioural',
    iconMdi: 'mdi:emoticon-happy-outline',
    title: 'Behavioural & Emotional Learning Support',
    description: 'Helping students build positive learning habits, emotional awareness, and self-management skills.',
    supportMayInclude: [
      'Positive behaviour strategies',
      'Emotional regulation support',
      'Confidence building',
      'Self-management skills',
      'Parent guidance',
    ],
  },
]

export const whoWeServeSection = {
  kicker: 'Who We Serve',
  title: 'Personalised Learning for <span class="text-gradient-brand">Diverse Academic Needs</span>',
  classes: '!px-0 !py-0',
  description: 'Support tailored for every stage of the learning journey.',
  audiences: [
    {
      iconMdi: 'mdi:baby-face-outline',
      title: 'Early Learners',
      description: 'Foundational learning and early academic development.',
    },
    {
      iconMdi: 'mdi:school-outline',
      title: 'School Students',
      description: 'Academic support from Nursery through Class XII.',
    },
    {
      iconMdi: 'mdi:school',
      title: 'College Students',
      description: 'Subject-specific academic assistance for undergraduate and postgraduate learners.',
    },
    {
      iconMdi: 'mdi:file-document-edit-outline',
      title: 'Exam Aspirants',
      description: 'Structured support for board and selected competitive examinations.',
    },
    {
      iconMdi: 'mdi:earth',
      title: 'International Curriculum Students',
      description: 'Support for IB, IGCSE, Cambridge, and other recognised international curricula.',
    },
    {
      iconMdi: 'mdi:puzzle-outline',
      title: 'Children with Special Needs',
      description: 'Individualised educational assistance based on specific learning requirements.',
    },
  ],
}

export const servicesConversionStrip = {
  title: "Your Child's Learning Journey Starts with the Right Mentor.",
  description:
    'Connect with Indian Mentors to explore personalised tutoring services designed around your child\'s academic needs, learning goals, and preferred learning environment.',
  ctas: [
    { label: 'Book Free Demo', href: externalLinks.studentSignup, iconMdi: 'mdi:calendar-check-outline', primary: true },
    { label: 'Find a Tutor', href: externalLinks.studentSignup, iconMdi: 'mdi:account-search-outline' },
    { label: 'Talk to Counsellor', href: 'tel:+917389563564', iconMdi: 'mdi:phone-outline' },
  ],
}

export const quickServiceCategories = {
  kicker: 'Service Categories',
  title: 'Choose the format. <span class="text-gradient-brand">Match your schedule.</span>',
  description:
    'Structured tutoring formats — select the option that best matches your child\'s academic needs and schedule.',
  itemCtaLabel: 'View details',
  cta: {
    label: 'Explore All Services',
    href: '/services',
    supporting: 'Compare formats, subject coverage, and support levels in one place.',
  },
  items: [
    {
      id: 'home-tutors',
      title: 'Home Tutors',
      description: 'Personalised one-to-one learning at home.',
      iconMdi: 'solar:home-2-linear',
      img: 'assets/img/services/home-tutor.svg',
      href: '/services#home-tutors',
    },
    {
      id: 'online-tutors',
      title: 'Online Tutors',
      description: 'Live interactive classes from anywhere.',
      iconMdi: 'solar:laptop-minimalistic-linear',
      img: 'assets/img/services/online-tutor.svg',
      href: '/services#online-tutors',
    },
    {
      id: 'shadow-tutors',
      title: 'Shadow Tutors',
      description: 'In-school support for focus and learning.',
      iconMdi: 'solar:users-group-rounded-linear',
      img: 'assets/img/services/shadow-tutor.svg',
      href: '/services#shadow-tutors',
    },
    {
      id: 'travel-tutors',
      title: 'Travel Tutors',
      description: 'Learning continuity while travelling.',
      iconMdi: 'lucide:plane',
      img: 'assets/img/services/travel-tutor.svg',
      href: '/services#travel-tutors',
    },
    {
      id: 'special-educators',
      title: 'Special Educators',
      description: 'Individualised support for unique needs.',
      iconMdi: 'solar:widget-2-linear',
      img: 'assets/img/services/special-tutor.svg',
      href: '/services#special-educators',
    },
  ],
}
