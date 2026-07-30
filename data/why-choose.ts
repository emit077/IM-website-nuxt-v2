/**
 * Why Choose Indian Mentors — page content
 */

export const whyChooseNav = [
  { label: 'Why Indian Mentors', href: '#why-indian-mentors' },
  { label: 'Differentiators', href: '#differentiators' },
  { label: 'Verified Tutors', href: '#verified-tutors' },
  { label: 'Personalised Learning', href: '#personalised-learning' },
  { label: 'Curriculum', href: '#curriculum-aligned' },
  { label: 'Progress Monitoring', href: '#progress-monitoring' },
  { label: 'Flexible Learning', href: '#flexible-scheduling' },
  { label: 'Learning Formats', href: '#learning-formats' },
  { label: 'Technology', href: '#technology-erp' },
  { label: 'Academic Support', href: '#academic-support' },
  { label: 'Commitments', href: '#commitments' },
  { label: 'Book a Demo', href: '#book-demo' },
] as const

export const whyChooseHero = {
  badge: 'Why Choose Indian Mentors',
  title:
    'A Structured Academic <span class="text-gradient-brand">Partnership</span>',
  description:
    'Verified educators. Personalised learning. Transparent progress — built for every student.',
  headingId: 'why-choose-hero-heading',
  primaryCta: { label: 'Find a Tutor', href: '#book-demo' },
  secondaryCta: { label: 'Talk to a Counsellor', href: 'tel:+917389563564' },
}

export const whyChooseTrustStrip = {
  kicker: 'Built on Trust',
  title: 'Why Families Choose <span class="text-gradient-brand">Indian Mentors</span>',
  classes: '!px-0 !py-0',
  description:
    'Our tutoring ecosystem is built around the essential elements that make personalised education effective, reliable, and transparent.',
  items: [
    {
      iconMdi: 'mdi:shield-check-outline',
      title: 'Verified Educators',
      description:
        'Carefully screened tutors selected for academic credibility and teaching capability.',
    },
    {
      iconMdi: 'mdi:target',
      title: 'Personalised Learning',
      description:
        "Individual learning strategies designed around each student's unique needs.",
    },
    {
      iconMdi: 'mdi:chart-timeline-variant',
      title: 'Transparent Monitoring',
      description:
        'Structured tracking of attendance, academic performance, and learning progress.',
    },
    {
      iconMdi: 'mdi:handshake-outline',
      title: 'Dedicated Support',
      description:
        'Continuous coordination between students, parents, tutors, and academic support teams.',
    },
  ],
}

export const whyChooseDifferentiators = {
  kicker: 'What Sets Us Apart',
  title:
    'What Sets <span class="text-gradient-brand">Indian Mentors</span> Apart?',
  classes: '!px-0 !py-0',
  description:
    'Indian Mentors combines professional tutoring, personalised academic planning, technology-enabled systems, and continuous support to create a structured learning ecosystem that extends beyond conventional tuition classes.',
  features: [
    {
      iconMdi: 'mdi:account-check-outline',
      title: 'Verified & Qualified Tutors',
      description:
        'Learn with confidence through carefully screened tutors who meet our standards of academic qualification, credibility, and teaching capability.',
      points: [
        'Identity and background verification',
        'Academic qualification validation',
        'Interview and teaching assessment',
      ],
    },
    {
      iconMdi: 'mdi:target',
      title: 'Personalised Learning Plans',
      description:
        'Every student receives a structured learning approach designed around individual needs, academic performance, and educational goals.',
      points: [
        'Student-specific academic strategies',
        'Learning pace-based teaching approach',
        'Goal-oriented exam preparation',
      ],
    },
    {
      iconMdi: 'mdi:book-education-outline',
      title: 'Curriculum-Aligned Teaching',
      description:
        'Our tutors follow recognised academic curricula to provide structured lessons that support syllabus completion and examination readiness.',
      points: [
        'Board and syllabus-aligned lessons',
        'Structured subject-wise learning plans',
        'Focused preparation for academic success',
      ],
    },
    {
      iconMdi: 'mdi:chart-box-outline',
      title: 'Transparent Academic Monitoring',
      description:
        "Parents stay informed about their child's learning journey through regular updates, performance insights, and academic feedback.",
      points: [
        'Regular student progress updates',
        'Performance and learning analysis',
        'Parent feedback and review sessions',
      ],
    },
    {
      iconMdi: 'mdi:clock-outline',
      title: 'Flexible Scheduling Options',
      description:
        "Choose convenient learning schedules and formats that fit comfortably into the student's academic routine and family requirements.",
      points: [
        'Weekday and weekend class options',
        'Morning and evening session choices',
        'Home and online learning formats',
      ],
    },
    {
      iconMdi: 'mdi:laptop',
      title: 'Technology-Enabled Learning',
      description:
        'Our technology-driven ecosystem connects learning, attendance, performance, and academic resources through a transparent digital platform.',
      points: [
        'ERP-powered attendance tracking',
        'Digital performance monitoring',
        'Accessible learning resources and updates',
      ],
    },
  ],
}

export type WhyChooseDetail = {
  id: string
  iconMdi: string
  kicker: string
  title: string
  description: string[]
  listLabel: string
  points: string[]
  benefit: string
  cta?: { label: string; href: string }
}

export const whyChooseDetails: WhyChooseDetail[] = [
  {
    id: 'verified-tutors',
    iconMdi: 'mdi:shield-check-outline',
    kicker: 'Tutor Quality',
    title: 'Verified & Qualified Tutors',
    description: [
      'Every tutor associated with Indian Mentors undergoes a structured screening and verification process designed to promote quality, credibility, and reliability.',
      "We understand that selecting the right educator is one of the most important decisions for a student's academic journey. Our verification framework helps parents make informed decisions while ensuring that tutors meet defined academic and professional standards.",
    ],
    listLabel: 'Our Screening Process Includes',
    points: [
      'Identity and KYC verification',
      'Academic qualification screening',
      'Teaching experience validation',
      'Personal interview assessment',
      'Subject expertise evaluation',
      'Profile and document review',
    ],
    benefit:
      'Students learn from carefully screened educators, while parents gain greater confidence in the quality and credibility of their selected tutor.',
    cta: { label: 'Explore Verified Tutors', href: '/tutors' },
  },
  {
    id: 'intelligent-matching',
    iconMdi: 'mdi:account-switch-outline',
    kicker: 'Smart Matching',
    title: 'Intelligent Tutor–Student Matching',
    description: [
      'Finding a tutor is not only about subject knowledge. Effective tutoring also depends on compatibility, communication, availability, teaching style, and the student\'s individual learning requirements.',
      'Indian Mentors uses a structured matching approach to identify tutors who are best suited to the student\'s academic and practical needs.',
    ],
    listLabel: 'Matching Considerations',
    points: [
      'Subject expertise',
      'Class and grade requirements',
      'Board specialisation',
      'Academic objectives',
      'Learning style compatibility',
      'Location preference',
      'Home or online tutoring requirement',
      'Schedule availability',
    ],
    benefit:
      'Better tutor compatibility can create stronger student engagement, improved communication, and a more comfortable learning environment.',
  },
  {
    id: 'personalised-learning',
    iconMdi: 'mdi:target',
    kicker: 'Student-Centric',
    title: 'Personalised Learning Plans',
    description: [
      'Every student learns differently. Our tutoring approach focuses on understanding the learner before designing the learning strategy.',
      'Tutors work with students to identify academic strengths, learning gaps, subject challenges, and examination requirements before developing a structured approach to learning.',
    ],
    listLabel: 'Learning Plans Consider',
    points: [
      'Student strengths and weaknesses',
      'Current academic performance',
      'Board and syllabus requirements',
      'Examination goals',
      'Learning pace',
      'Subject-specific challenges',
      'Areas requiring additional practice',
    ],
    benefit:
      'Students receive structured academic support that is aligned with their individual learning needs and goals.',
  },
  {
    id: 'curriculum-aligned',
    iconMdi: 'mdi:book-education-outline',
    kicker: 'Academic Excellence',
    title: 'Curriculum-Aligned Teaching',
    description: [
      "Our tutoring programs are structured around recognised academic curricula and the student's applicable board or educational framework.",
      'Tutors focus on syllabus coverage, conceptual understanding, revision, practice, and examination preparation to ensure that learning remains relevant to the student\'s academic requirements.',
    ],
    listLabel: 'Boards & Curricula Supported',
    points: [
      'CBSE',
      'ICSE',
      'IGCSE',
      'IB',
      'NIOS',
      'State Boards',
      'Other recognised academic frameworks',
    ],
    benefit:
      'Students receive focused instruction that supports classroom learning, syllabus completion, concept clarity, and examination readiness.',
  },
  {
    id: 'progress-monitoring',
    iconMdi: 'mdi:chart-box-outline',
    kicker: 'Transparency',
    title: 'Transparent Academic Monitoring',
    description: [
      "Parents should never feel disconnected from their child's academic journey.",
      'Indian Mentors promotes transparent communication and structured monitoring so parents can remain informed about attendance, learning progress, tutor feedback, and areas requiring attention.',
    ],
    listLabel: 'Monitoring May Include',
    points: [
      'Session attendance tracking',
      'Academic progress updates',
      'Performance observations',
      'Periodic assessments',
      'Tutor feedback',
      'Improvement analysis',
      'Parent communication',
    ],
    benefit:
      "Parents receive greater visibility into the learning journey and can participate more effectively in their child's academic development.",
  },
  {
    id: 'flexible-scheduling',
    iconMdi: 'mdi:clock-outline',
    kicker: 'Flexibility',
    title: 'Flexible Scheduling Options',
    description: [
      'We understand that every student and family follows a different daily routine. Our tutoring services are designed to provide flexibility wherever operationally feasible.',
    ],
    listLabel: 'Scheduling Options',
    points: [
      'Weekday classes',
      'Weekend classes',
      'Morning sessions',
      'Evening sessions',
      'Flexible session planning',
      'Online or home tutoring formats',
    ],
    benefit:
      "Learning can be organised around the student's routine, school schedule, extracurricular activities, and family requirements.",
  },
  {
    id: 'learning-formats',
    iconMdi: 'mdi:home-outline',
    kicker: 'Learning Formats',
    title: 'Multiple Learning Formats',
    description: [
      'Different students require different learning environments. Indian Mentors provides multiple tutoring formats to help families select a learning arrangement that best suits their academic and personal requirements.',
    ],
    listLabel: 'Tutoring Formats',
    points: [
      'Home Tutors',
      'Online Tutors',
      'Shadow Tutors',
      'Live-In Tutors',
      'Travel Tutors',
      'Special Educators',
      'Home Schooling Support',
    ],
    benefit:
      'Families can select a learning format based on academic needs, lifestyle, location, schedule, and level of personalised support required.',
    cta: { label: 'Explore Our Tutoring Services', href: '/services' },
  },
  {
    id: 'tutor-replacement',
    iconMdi: 'mdi:swap-horizontal',
    kicker: 'Continuity',
    title: 'Structured Tutor Replacement Support',
    description: [
      'We understand that a tutor-student relationship may sometimes require adjustment. If a tutor replacement becomes necessary, Indian Mentors provides structured coordination to support a smoother transition.',
    ],
    listLabel: 'Replacement Support May Include',
    points: [
      'Review of the existing tutoring requirement',
      'Understanding parent and student concerns',
      'Identification of suitable alternatives',
      'Tutor profile recommendations',
      'Coordination for transition',
      'Continuity-focused academic support',
    ],
    benefit:
      'Our goal is to minimise learning disruption and help students continue their academic journey with suitable tutoring support.',
  },
  {
    id: 'technology-erp',
    iconMdi: 'mdi:laptop',
    kicker: 'Technology',
    title: 'Technology-Enabled Academic Management',
    description: [
      'Indian Mentors integrates technology into its tutoring ecosystem to improve operational transparency, coordination, and academic management.',
      'Our ERP-enabled systems are designed to support structured workflows across students, parents, tutors, counsellors, coordinators, and administrative teams.',
    ],
    listLabel: 'ERP Features May Include',
    points: [
      'Session scheduling',
      'Attendance monitoring',
      'Student records',
      'Tutor records',
      'Academic updates',
      'Payment management',
      'Tutor reporting',
      'Communication workflows',
    ],
    benefit:
      'Technology helps create a more organised, transparent, and accountable tutoring experience for all stakeholders.',
  },
  {
    id: 'academic-support',
    iconMdi: 'mdi:account-group-outline',
    kicker: 'Support Ecosystem',
    title: 'Dedicated Academic & Support Team',
    description: [
      'Successful tutoring requires more than a tutor alone. Our support ecosystem includes dedicated teams that assist with student onboarding, tutor coordination, academic requirements, and ongoing service support.',
    ],
    listLabel: 'Support Functions Include',
    points: [
      'Admission coordination',
      'Academic counselling',
      'Academic coordination',
      'Parent relationship support',
      'Tutor recruitment',
      'Customer support',
      'Technical assistance',
    ],
    benefit:
      'Students and parents receive continuous guidance throughout the tutoring journey, from initial enquiry to ongoing academic support.',
  },
  {
    id: 'safe-environment',
    iconMdi: 'mdi:heart-outline',
    kicker: 'Wellbeing',
    title: 'Safe, Supportive & Result-Oriented Learning',
    description: [
      'A positive learning environment plays an important role in academic development. Indian Mentors encourages respectful, professional, and student-focused interactions that help learners feel comfortable asking questions, practising concepts, and developing confidence.',
    ],
    listLabel: 'Our Academic Values',
    points: [
      'Student safety and privacy',
      'Respectful tutor-student interaction',
      'Professional academic conduct',
      'Positive learning environment',
      'Academic discipline',
      'Confidence building',
      'Continuous improvement',
    ],
    benefit:
      'Students are encouraged to develop not only academic competence but also confidence, consistency, curiosity, and effective learning habits.',
  },
]

export const whyChooseEcosystem = {
  kicker: 'The Academic Ecosystem',
  title:
    'One Platform. Multiple Stakeholders. <span class="text-gradient-brand">One Shared Goal.</span>',
  classes: '!px-0 !py-0',
  description:
    'Indian Mentors brings students, parents, tutors, academic counsellors, coordinators, and support teams together within a structured academic ecosystem.',
  image: 'assets/img/why-choose/academic-ecosystem.webp',
  imageAlt:
    'Indian Mentors academic ecosystem — ten connected steps from student identification through continuous improvement',
  steps: [
    { title: 'Student', subtitle: 'At the centre of learning.' },
    {
      title: 'Academic Requirement Identification',
      subtitle: 'Understanding individual learning needs.',
    },
    {
      title: 'Academic Counselling',
      subtitle: 'Expert guidance for the right academic path.',
    },
    {
      title: 'Tutor Selection & Matching',
      subtitle: 'Finding the best-fit tutor for every learner.',
    },
    {
      title: 'Tutor Onboarding',
      subtitle: 'Verifying & onboarding quality educators.',
    },
    {
      title: 'Personalised Learning Plan',
      subtitle: 'Customised plan for better outcomes.',
    },
    {
      title: 'Regular Tutoring Sessions',
      subtitle: 'Consistent support for concept clarity.',
    },
    {
      title: 'Attendance & Progress Monitoring',
      subtitle: 'Tracking progress every step of the way.',
    },
    {
      title: 'Parent Feedback & Academic Review',
      subtitle: 'Collaborative feedback for continuous growth.',
    },
    {
      title: 'Continuous Improvement',
      subtitle: 'Refining approach for long-term success.',
    },
  ],
  keyMessage:
    "Our ecosystem is designed to ensure that every stakeholder contributes to a student's academic journey with clarity, coordination, and shared responsibility.",
}

export const whyChooseCommitments = {
  kicker: 'Our Commitments',
  title: 'Built Around Families & <span class="text-gradient-brand">Learners</span>',
  classes: '!px-0 !py-0',
  description:
    'Transparency for parents. The right mentor for every student.',
  parents: {
    label: 'For Families',
    iconMdi: 'mdi:account-check-outline',
    titleHtml:
      'Parents deserve <span class="text-amber-300">transparency.</span>',
    description:
      "Stay connected to the learning process and feel confident in every step of your child's academic journey.",
    items: [
      'Better tutor selection',
      'Structured academic support',
      'Transparent communication',
      'Ongoing guidance',
    ],
  },
  students: {
    label: 'For Students',
    iconMdi: 'mdi:star-four-points-outline',
    titleHtml:
      'Every learner deserves <span class="text-gradient-brand">the right mentor.</span>',
    description:
      'A supportive environment to understand concepts, build better habits, and grow into a confident, capable learner.',
    items: [
      'Strengthen conceptual understanding',
      'Encourage consistent practice',
      'Monitor meaningful progress',
      'Build confidence and independence',
    ],
  },
}

export const whyChooseAdvantage = {
  kicker: 'The Indian Mentors Advantage',
  title: 'Why <span class="text-gradient-brand">Indian Mentors</span>?',
  classes: '!px-0 !py-0',
  description:
    'Indian Mentors brings together verified educators, personalised tutoring, curriculum-aligned teaching, flexible learning formats, structured academic monitoring, technology-enabled management, and dedicated support to create a comprehensive tutoring ecosystem.',
  image: 'assets/img/why-choose/why-1.webp',
  imageAlt: 'A student considering personalised learning options with Indian Mentors',
  imageBadge: 'Structured Academic Partnership',
  advantages: [
    {
      title: 'Verified Tutors',
      meaning: 'Carefully screened educators',
      iconMdi: 'mdi:shield-check-outline',
    },
    {
      title: 'Personalised Learning',
      meaning: 'Student-specific academic strategies',
      iconMdi: 'mdi:target',
    },
    {
      title: 'Structured Teaching',
      meaning: 'Curriculum and goal-aligned instruction',
      iconMdi: 'mdi:book-education-outline',
    },
    {
      title: 'Transparent Monitoring',
      meaning: 'Visibility into academic progress',
      iconMdi: 'mdi:chart-box-outline',
    },
    {
      title: 'Flexible Formats',
      meaning: 'Home, online, and specialised tutoring',
      iconMdi: 'mdi:home-outline',
    },
    {
      title: 'Dedicated Support',
      meaning: 'Ongoing academic and service coordination',
      iconMdi: 'mdi:handshake-outline',
    },
  ],
}

export const whyChooseReadyCta = {
  badge: 'Ready to Begin?',
  title: 'Give Your Child the Right Academic Support.',
  description:
    "Every student deserves an academic environment where learning is personalised, guidance is structured, and progress is supported. Whether your child needs help with school subjects, examination preparation, conceptual clarity, academic confidence, or specialised learning support — we're here to help.",
  supporting:
    "Connect with our team to understand your child's academic requirements and discover a suitable personalised tutoring option.",
  ctas: [
    {
      label: 'Book a Free Academic Counselling Session',
      href: '#book-demo',
      iconMdi: 'mdi:calendar-check-outline',
      primary: true,
    },
    {
      label: 'Talk to an Academic Counsellor',
      href: 'tel:+917389563564',
      iconMdi: 'mdi:phone-outline',
    },
    {
      label: 'Get Support on WhatsApp',
      href: 'https://wa.me/917389563564',
      iconMdi: 'mdi:whatsapp',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ],
}

export const whyChooseConversionStrip = {
  title: 'Give your child the right academic support, today.',
  description:
    "Book a demo and experience a personalised tutoring approach built around your child's needs, goals and preferred learning environment.",
  ctas: [
    { label: 'Book Free Demo', href: '/contact', primary: true },
    { label: 'Talk to Counsellor', href: 'tel:+917389563564' },
  ],
}

export const whyChooseBrandMessage = {
  brand: 'INDIAN MENTORS',
  tagline: 'Personalised Education. Trusted Tutors. Structured Academic Support.',
  description:
    'From finding the right tutor to supporting continuous academic progress, Indian Mentors brings people, processes, and technology together to create a more transparent and personalised tutoring experience.',
  closing:
    'Because every student learns differently—and every learner deserves the right mentor.',
}
