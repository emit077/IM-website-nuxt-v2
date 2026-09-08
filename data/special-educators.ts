import { externalLinks } from './external-links'

export const seHero = {
  badge: 'Special Educators',
  title: 'Every Child Can Learn with the Right Support',
  subtitle:
    'Compassionate, Qualified & Experienced Special Educators Delivering Individualised Educational Interventions for Children with Diverse Learning Profiles.',
  caption: 'INDIAN MENTORS – Personalised Education That Celebrates Every Child’s Potential.',
  description:
    'Every child learns differently, and every learning journey deserves understanding, patience, and the right educational support.',
  headingId: 'special-educators-hero-heading',
  tickerAriaLabel: 'Special education highlights',
  ticker: [
    'Individual Learning Plans',
    'ADHD Support',
    'Autism Support',
    'Dyslexia',
    'Dysgraphia',
    'Dyscalculia',
    'School Readiness',
    'Parent Partnership',
  ],
  actionBtns: [
    { label: 'Book Educational Consultation', href: externalLinks.studentSignup, variant: 'theme-secondary' as const },
    { label: 'Explore Our Approach', href: '#our-approach', variant: 'secondary' as const },
  ],
}

export const seIntro = {
  badge: 'Special Education Services',
  title: 'Personalised Educational Support for Children with <span class="text-gradient-brand">Diverse Learning Needs</span>',
  classes: '!px-0 !py-0 mx-auto ',
  paragraphs: [
    'At Indian Mentors, our Special Education Services are designed to help children with diverse learning needs develop academic skills, communication, confidence, independence, and lifelong learning abilities through personalised educational interventions.',
    'Our qualified Special Educators collaborate with parents, schools, psychologists, therapists, and other healthcare professionals to create structured, evidence-informed learning plans that respect each child’s strengths, challenges, and pace of development. Through compassionate teaching, adaptive instructional methods, and continuous progress monitoring, we aim to make learning meaningful, engaging, and accessible for every child.',
  ],
  note: 'Our services focus on educational support and skill development. They complement, but do not replace, medical diagnosis, therapy, or clinical treatment.',
}

export const seApproach = {
  badge: 'Our Approach',
  title: 'Education Adapted to the <span class="text-gradient-brand">Learner</span>',
  classes: '!px-0 !py-0 mx-auto ',
  description:
    'At Indian Mentors, we believe that every child deserves an inclusive learning environment where education is adapted to the learner—not the other way around.',
  closing:
    'Every learning plan is personalised according to the child’s educational needs, developmental stage, and long-term learning goals.',
  items: [
    { title: 'Individual Learning Profiles', iconMdi: 'mdi:account-details-outline' },
    { title: 'Strength-Based Teaching', iconMdi: 'mdi:star-outline' },
    { title: 'Structured Educational Planning', iconMdi: 'mdi:clipboard-text-outline' },
    { title: 'Evidence-Informed Teaching Strategies', iconMdi: 'mdi:book-check-outline' },
    { title: 'Inclusive Learning Practices', iconMdi: 'mdi:account-group-outline' },
    { title: 'Skill Development', iconMdi: 'mdi:lightbulb-on-outline' },
    { title: 'Academic Readiness', iconMdi: 'mdi:school-outline' },
    { title: 'Social & Emotional Growth', iconMdi: 'mdi:heart-outline' },
    { title: 'Parent & School Collaboration', iconMdi: 'mdi:handshake-outline' },
  ],
}

export const seNeeds = {
  badge: 'Conditions & Learning Needs We Support',
  title: 'Individualised Support Across <span class="text-gradient-brand">Diverse Profiles</span>',
  classes: '!px-0 !py-0 mx-auto ',
  description:
    'Our Special Educators design structured, student-centred support around each child’s learning profile.',
  note: 'The exact approach may vary depending on educational needs and the assigned educator.',
  grid: {
    badge: 'At a glance',
    title: 'Eight Learning Profiles We <span class="text-gradient-brand">Support</span>',
    description:
      'A quick view of the conditions we work with. Open any card to read the full educational approach below.',
  },
  items: [
    {
      id: 'adhd',
      shortTitle: 'ADHD',
      image: 'assets/img/special-educators/adhd.png',
      iconMdi: 'mdi:brain',
      title: 'Attention Deficit Hyperactivity Disorder (ADHD)',
      description:
        'Students with ADHD often benefit from structured educational strategies that support attention, organisation, self-regulation, and classroom participation.',
      support: [
        'Improving Attention Span',
        'Behaviour Management Strategies',
        'Classroom Readiness Skills',
        'Executive Function Development',
        'Homework Support',
        'Study Planning',
        'Emotional Regulation Techniques',
        'Task Completion Strategies',
        'Organisational Skills',
        'Positive Reinforcement',
      ],
      goals: [
        'Improve classroom participation',
        'Increase focus and engagement',
        'Build independent study habits',
        'Strengthen academic confidence',
      ],
    },
    {
      id: 'autism',
      shortTitle: 'ASD',
      image: 'assets/img/special-educators/autism.png',
      iconMdi: 'mdi:rainbow',
      title: 'Autism Spectrum Disorder (ASD)',
      description:
        'Our educators create structured, predictable, and supportive learning environments that encourage communication, academic participation, and social interaction while respecting each child’s individual learning profile.',
      support: [
        'Individual Learning Plans (ILP)',
        'Communication Skill Development',
        'Social Skills Training',
        'Academic Adaptation',
        'Behavioural Learning Strategies',
        'Visual Learning Supports',
        'Sensory-Friendly Educational Methods',
        'Structured Classroom Preparation',
        'Daily Routine Development',
        'Functional Learning Activities',
      ],
      goals: [
        'Enhance communication',
        'Encourage meaningful participation',
        'Build academic independence',
        'Support social engagement',
      ],
    },
    {
      id: 'dyslexia',
      shortTitle: 'Dyslexia',
      image: 'assets/img/special-educators/dyslexia.png',
      iconMdi: 'mdi:book-open-page-variant-outline',
      title: 'Dyslexia',
      description:
        'Students with dyslexia receive systematic, structured, and multisensory educational support to strengthen literacy skills and reading confidence.',
      support: [
        'Reading Intervention',
        'Phonics-Based Instruction',
        'Writing Improvement',
        'Spelling Strategies',
        'Reading Fluency Development',
        'Reading Comprehension',
        'Vocabulary Building',
        'Multisensory Learning Activities',
        'Confidence Building',
      ],
      goals: [
        'Improve literacy skills',
        'Strengthen reading accuracy',
        'Develop independent learning confidence',
      ],
    },
    {
      id: 'dysgraphia',
      shortTitle: 'Dysgraphia',
      image: 'assets/img/special-educators/dysgraphia.png',
      iconMdi: 'mdi:pencil-outline',
      title: 'Dysgraphia',
      description:
        'Our educators support children in developing written communication through structured writing instruction and fine motor skill enhancement.',
      support: [
        'Handwriting Development',
        'Fine Motor Coordination Activities',
        'Writing Organisation',
        'Written Expression Skills',
        'Pencil Grip Guidance',
        'Letter Formation Practice',
        'Writing Planning Techniques',
      ],
      goals: [
        'Improve handwriting',
        'Strengthen written communication',
        'Increase confidence in written tasks',
      ],
    },
    {
      id: 'dyscalculia',
      shortTitle: 'Dyscalculia',
      image: 'assets/img/special-educators/dyscalculia.png',
      iconMdi: 'mdi:calculator-variant-outline',
      title: 'Dyscalculia',
      description:
        'We use practical, visual, and concept-based teaching methods to help children understand numbers, mathematical reasoning, and problem-solving.',
      support: [
        'Number Sense Development',
        'Mathematical Concept Building',
        'Logical Thinking Activities',
        'Practical Learning Exercises',
        'Visual Mathematics Strategies',
        'Problem-Solving Skills',
        'Mathematical Confidence Building',
      ],
      goals: [
        'Develop foundational numeracy',
        'Improve mathematical reasoning',
        'Reduce anxiety associated with mathematics',
      ],
    },
    {
      id: 'sld',
      shortTitle: 'SLD',
      image: 'assets/img/special-educators/sld.png',
      iconMdi: 'mdi:puzzle-outline',
      title: 'Specific Learning Disabilities (SLD)',
      description:
        'Every learner receives an individualised educational approach that focuses on strengths while addressing specific academic challenges.',
      support: [
        'Individualised Education Plans (IEP)',
        'Academic Skill Development',
        'Classroom Adaptation Strategies',
        'Cognitive Learning Techniques',
        'Study Skills Training',
        'Memory Strategies',
        'Learning Accommodations',
        'Examination Preparation Support',
      ],
      goals: [
        'Improve academic performance',
        'Increase classroom participation',
        'Encourage independent learning',
      ],
    },
    {
      id: 'speech',
      shortTitle: 'Speech & Language',
      image: 'assets/img/special-educators/speech.png',
      iconMdi: 'mdi:microphone-outline',
      title: 'Speech & Language Delays (Educational Support)',
      description:
        'Our educators support language development within academic settings by reinforcing communication and classroom learning.',
      support: [
        'Language Development Activities',
        'Communication Practice',
        'Vocabulary Building',
        'Academic Language Support',
        'Reading & Listening Activities',
        'Classroom Communication Skills',
      ],
      goals: [
        'Improve classroom communication',
        'Strengthen language comprehension',
        'Build confidence in verbal participation',
      ],
      note: 'Where required, we recommend coordination with qualified Speech-Language Pathologists for clinical assessment or therapy.',
    },
    {
      id: 'behavioural',
      shortTitle: 'Behavioural',
      image: 'assets/img/special-educators/behavioural.png',
      iconMdi: 'mdi:emoticon-happy-outline',
      title: 'Behavioural & Emotional Challenges',
      description:
        'Our educators use positive educational strategies to help students develop self-management skills, emotional awareness, and productive classroom behaviours.',
      support: [
        'Positive Behaviour Strategies',
        'Emotional Regulation Activities',
        'Confidence Building',
        'Self-Management Skills',
        'Social-Emotional Learning',
        'Parent Guidance & Educational Counselling',
      ],
      goals: [
        'Encourage positive learning behaviours',
        'Improve emotional resilience',
        'Build classroom confidence',
      ],
    },
  ],
}

export const seServices = {
  badge: 'Our Educational Services',
  title: 'Structured Support for Every Stage of the <span class="text-gradient-brand">Learning Journey</span>',
  classes: '!px-0 !py-0 mx-auto ',
  description:
    'From individualised plans and one-to-one sessions to school readiness, parent guidance, and school collaboration.',
  items: [
    {
      id: 'iep',
      iconMdi: 'mdi:file-document-edit-outline',
      title: 'Individualised Education Plans (IEP)',
      description: 'Each student receives a personalised educational roadmap that includes:',
      points: [
        'Learning objectives',
        'Academic priorities',
        'Teaching strategies',
        'Progress indicators',
        'Parent recommendations',
        'Review schedules',
      ],
    },
    {
      id: 'one-to-one',
      iconMdi: 'mdi:account-school-outline',
      title: 'One-to-One Special Education',
      description: 'Personalised sessions focusing on:',
      points: [
        'Literacy',
        'Numeracy',
        'Communication',
        'Cognitive Skills',
        'Daily Learning Skills',
        'Academic Readiness',
      ],
    },
    {
      id: 'school-readiness',
      iconMdi: 'mdi:human-male-child',
      title: 'School Readiness Programme',
      description: 'Helping children prepare for successful classroom participation through:',
      points: [
        'Routine Development',
        'Classroom Behaviour',
        'Listening Skills',
        'Instruction Following',
        'Social Interaction',
        'Early Academic Skills',
      ],
    },
    {
      id: 'academic-intervention',
      iconMdi: 'mdi:book-open-variant',
      title: 'Academic Intervention',
      description: 'Support for:',
      points: [
        'Reading',
        'Writing',
        'Mathematics',
        'Language Development',
        'Memory Strategies',
        'Study Skills',
      ],
    },
    {
      id: 'parent-guidance',
      iconMdi: 'mdi:account-heart-outline',
      title: 'Parent Guidance & Family Support',
      description: 'We believe parents play a vital role in a child’s educational progress. Support includes:',
      points: [
        'Home learning strategies',
        'Educational counselling',
        'Progress discussions',
        'Goal setting',
        'Learning recommendations',
        'School coordination guidance',
      ],
    },
    {
      id: 'school-collaboration',
      iconMdi: 'mdi:domain',
      title: 'School Collaboration',
      description: 'Where appropriate and with family consent, our educators collaborate with schools to:',
      points: [
        'Support inclusive education',
        'Share educational observations',
        'Align learning goals',
        'Recommend classroom accommodations',
        'Encourage consistent educational approaches',
      ],
    },
  ],
}

export const seMethodology = {
  badge: 'Our Teaching Methodology',
  title: 'Evidence-Informed, <span class="text-gradient-brand">Learner-Centred</span> Practices',
  classes: '!px-0 !py-0 mx-auto ',
  description: 'Every educational programme is tailored using evidence-informed, learner-centred practices.',
  items: [
    { title: 'Multisensory Teaching', iconMdi: 'mdi:hand-heart-outline' },
    { title: 'Activity-Based Learning', iconMdi: 'mdi:puzzle-star-outline' },
    { title: 'Visual Supports', iconMdi: 'mdi:image-outline' },
    { title: 'Positive Reinforcement', iconMdi: 'mdi:thumb-up-outline' },
    { title: 'Structured Learning Routines', iconMdi: 'mdi:calendar-clock-outline' },
    { title: 'Play-Based Learning (where age-appropriate)', iconMdi: 'mdi:teddy-bear' },
    { title: 'Task Analysis', iconMdi: 'mdi:format-list-checks' },
    { title: 'Incremental Skill Building', iconMdi: 'mdi:stairs' },
    { title: 'Adaptive Teaching Strategies', iconMdi: 'mdi:tune-variant' },
    { title: 'Continuous Assessment', iconMdi: 'mdi:chart-line' },
  ],
}

export const seFeatures = {
  badge: 'Why Families Choose Indian Mentors',
  title: 'Support That Respects Every Child’s <span class="text-gradient-brand">Potential</span>',
  description:
    'Qualified special educators, individualised plans, and collaborative support for families and schools.',
  classes: '!px-0 !py-0 mx-auto ',
  items: [
    {
      title: 'Individualised Learning Plans',
      description:
        'Every child receives a customised educational programme based on their learning strengths, challenges, and developmental goals.',
      iconMdi: 'mdi:clipboard-account-outline',
    },
    {
      title: 'Qualified Special Educators',
      description:
        'Experienced professionals trained in inclusive education and personalised learning strategies.',
      iconMdi: 'mdi:account-tie-outline',
    },
    {
      title: 'Evidence-Informed Educational Practices',
      description:
        'Teaching approaches are based on established educational principles and adapted to each learner’s needs.',
      iconMdi: 'mdi:flask-outline',
    },
    {
      title: 'Parent Partnership',
      description:
        'Regular communication and collaborative planning empower families to support learning beyond sessions.',
      iconMdi: 'mdi:account-supervisor-outline',
    },
    {
      title: 'Inclusive Learning Environment',
      description:
        'A supportive, respectful, and encouraging atmosphere where every child feels valued and capable of learning.',
      iconMdi: 'mdi:home-heart',
    },
    {
      title: 'Continuous Progress Monitoring',
      description:
        'Regular assessments help measure growth, refine learning plans, and celebrate milestones.',
      iconMdi: 'mdi:chart-box-outline',
    }


  ],
}

export const seProcess = {
  badge: 'Our Special Education Process',
  title: 'A Clear Path from Consultation to <span class="text-gradient-brand">Progress</span>',
  classes: '!px-0 !py-0 mx-auto ',
  description: 'Structured steps that help families understand concerns, plan support, and track educational growth.',
  steps: [
    {
      no: '01',
      title: 'Educational Consultation',
      accent: 'blue' as const,
      points: [
        'Learning concerns',
        'Academic history',
        'School information',
        'Existing assessments (if available)',
        'Parent goals',
        'Student strengths',
      ],
    },
    {
      no: '02',
      title: 'Learning Assessment',
      accent: 'indigo' as const,
      points: [
        'Learning profile',
        'Academic abilities',
        'Areas requiring support',
        'Learning preferences',
      ],
    },
    {
      no: '03',
      title: 'Individual Learning Plan',
      accent: 'violet' as const,
      points: ['A personalised programme is developed with measurable educational objectives.'],
    },
    {
      no: '04',
      title: 'Personalised Intervention',
      accent: 'emerald' as const,
      points: ['Regular one-to-one sessions using adaptive teaching methods and structured learning activities.'],
    },
    {
      no: '05',
      title: 'Review & Progress Monitoring',
      accent: 'amber' as const,
      points: ['Ongoing evaluations and parent consultations help ensure continuous educational improvement.'],
    },
  ],
}

export const seAudience = {
  badge: 'Who Can Benefit?',
  title: 'Special Education Services Suitable for <span class="text-gradient-brand">Many Learners</span>',
  classes: '!px-0 !py-0 mx-auto ',
  description: 'Our Special Education Services are suitable for:',
  items: [
    { title: 'Preschool Children', iconMdi: 'mdi:baby-face-outline' },
    { title: 'School Students (Nursery to Class XII)', iconMdi: 'mdi:school-outline' },
    { title: 'Inclusive Education Learners', iconMdi: 'mdi:account-group-outline' },
    { title: 'Children with Learning Differences', iconMdi: 'mdi:puzzle-outline' },
    { title: 'Children Requiring Academic Intervention', iconMdi: 'mdi:book-education-outline' },
    { title: 'Students Transitioning into Mainstream Education', iconMdi: 'mdi:transit-connection-variant' },
    { title: 'Homeschooled Students Requiring Additional Educational Support', iconMdi: 'mdi:home-outline' },
    { title: 'Families Seeking Structured Individualised Learning', iconMdi: 'mdi:human-male-female-child' },
  ],
}

export const seFinalCta = {
  badge: 'Get Started',
  title: 'Give Your Child the Right Educational Support',
  description:
    'Connect with Indian Mentors to explore personalised special education designed around your child’s learning profile, strengths, and long-term goals.',
  supporting: 'Educational support that complements—not replaces—clinical care.',
  ctas: [
    {
      label: 'Book Educational Consultation',
      href: externalLinks.studentSignup,
      iconMdi: 'mdi:calendar-check-outline',
      primary: true,
    },
    { label: 'Talk to a Counsellor', href: '/contact', iconMdi: 'mdi:account-voice' },
    { label: 'View All Services', href: '/services', iconMdi: 'mdi:view-grid-outline' },
  ],
}
