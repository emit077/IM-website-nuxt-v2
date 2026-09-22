import { externalLinks } from './external-links'

export type GradeClassLevel = {
  id: string
  label: string
  tagline: string
  focus: string[]
  outcome: string
}

export type GradeStream = {
  name: string
  iconMdi: string
  subjects: string
  focus: string
}

export type GradeExamGroup = {
  label: string
  items: string[]
}

export type GradeStageAccent = 'amber' | 'emerald' | 'sky' | 'violet' | 'rose' | 'orange' | 'slate'

export type GradeStage = {
  id: string
  title: string
  shortTitle: string
  years: string
  focus: string
  tagline: string
  overview: string
  approach: string[]
  goal: string
  classes: GradeClassLevel[]
  streams?: GradeStream[]
  examGroups?: GradeExamGroup[]
  features: string[]
  ctaLabel: string
  visual: string
  iconMdi: string
  accent: GradeStageAccent
}

export const gradesHero = {
  badge: 'Learning library',
  title: 'Resources built for<br class="hidden sm:inline" /> every grade',
  subtitle: 'Curriculum-aligned notes, worksheets, and practice packs from Nursery to Class 12.',
  description:
    'Browse grade-wise study material — NCERT solutions, subject notes, and practice sets aligned to the student’s class, board, and exam goals.',
  caption: 'Notes, worksheets, and practice packs — organised by class and subject.',
  headingId: 'learning-library-hero-heading',
  tickerAriaLabel: 'Learning library resources by grade',
  ticker: [
    'Nursery to UKG',
    'Class 1–5',
    'Class 6–8',
    'Class 9–10',
    'Class 11–12',
    'NCERT solutions',
    'Practice packs',
    'Worksheets',
  ],
  actionBtns: [
    { label: 'Browse the library', href: '#grades-covered', variant: 'theme-secondary' as const },
    { label: 'Book Free Demo', href: externalLinks.studentSignup, variant: 'secondary' as const },
  ],
}

export const gradesPathway = {
  badge: 'The learning pathway',
  title: 'Find the stage. <span class="text-gradient-brand">See how we teach it.</span>',
  description:
    'Each stage has a different academic job — readiness, foundations, depth, boards, streams, ranks, or university work. Jump to a stage to read the full programme.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
}

export const gradesExplorer = {
  badge: 'Learning library',
  title: 'Resources for <span class="text-gradient-brand">each stage</span>',
  description:
    'From nursery to postgraduate, every stage has grade-aligned notes, worksheets, and practice — plus a clear approach and the outcome we work toward with families.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  approachLabel: 'How we teach',
  goalLabel: 'What we work toward',
  classesLabel: 'Class-by-class focus',
  streamsLabel: 'Streams offered',
  examsLabel: 'Exam groups',
  featuresLabel: 'What this programme includes',
  nextStageLabel: 'Next stage',
  counsellorLabel: 'Talk to a counsellor',
  counsellorHref: '/contact',
}

export const gradesStages: GradeStage[] = [
  {
    id: 'pre-primary',
    title: 'Pre-Primary',
    shortTitle: 'Early years',
    years: 'Nursery · LKG · UKG',
    focus: 'Early development & school readiness',
    tagline: 'First letters, first numbers, first confidence.',
    overview:
      'Young children learn through play, rhythm, and conversation. Tutors nurture curiosity, language, and early number sense in a calm, engaging setting — so school feels familiar, not frightening.',
    approach: [
      'Play-based activities',
      'Phonics and alphabet',
      'Numbers and counting',
      'Stories and rhymes',
    ],
    goal: 'School-ready children who are curious, communicative, and comfortable with early learning.',
    classes: [
      {
        id: 'nursery',
        label: 'Nursery',
        tagline: 'The first step into learning',
        focus: [
          'Letters, numbers, and shape recognition',
          'Cognitive and motor skill play',
          'Stories, rhymes, and creative activities',
          'Social interaction and communication',
        ],
        outcome: 'Curiosity, confidence, and early learning habits.',
      },
      {
        id: 'lkg',
        label: 'LKG',
        tagline: 'Strengthening early skills',
        focus: [
          'Alphabet writing and phonics',
          'Counting and basic number ideas',
          'Vocabulary and simple sentences',
          'Activity-based understanding',
        ],
        outcome: 'Early literacy and numeracy with better attention.',
      },
      {
        id: 'ukg',
        label: 'UKG',
        tagline: 'Ready for Class 1',
        focus: [
          'Reading readiness and writing practice',
          'Addition and subtraction basics',
          'Sentences and comprehension',
          'Logical thinking through play',
        ],
        outcome: 'Confident, school-ready learners with firm foundations.',
      },
    ],
    features: [
      'One-to-one attention',
      'Activity-based teaching',
      'Cognitive and emotional development',
      'Regular parent feedback',
      'Safe, engaging sessions',
    ],
    ctaLabel: 'Start early learning',
    visual: 'assets/img/academic-coverage/grade-1.webp',
    iconMdi: 'mdi:teddy-bear',
    accent: 'amber',
  },
  {
    id: 'primary',
    title: 'Primary',
    shortTitle: 'Foundations',
    years: 'Class 1st – 5th',
    focus: 'Concept building & learning habits',
    tagline: 'Clarity first. Habits that last.',
    overview:
      'Primary years set whether a child guesses or understands. Tutors build reading, number sense, and independent habits through interactive practice — so later classes feel like a step up, not a shock.',
    approach: [
      'Language fluency',
      'Number sense and maths',
      'Activity-led teaching',
      'Reading comprehension',
    ],
    goal: 'Strong foundations and positive learning behaviour before middle school.',
    classes: [
      {
        id: 'c1',
        label: 'Class 1st',
        tagline: 'Beginning structured learning',
        focus: [
          'Basic reading and writing',
          'Numbers and simple arithmetic',
          'Vocabulary and sentences',
          'Activity-based lessons',
        ],
        outcome: 'Comfort with structured learning and core skills.',
      },
      {
        id: 'c2',
        label: 'Class 2nd',
        tagline: 'Strengthening core skills',
        focus: [
          'Reading fluency and writing',
          'Addition, subtraction, and number work',
          'Comprehension and classroom practice',
          'Regular revision',
        ],
        outcome: 'Clearer, more accurate work in core subjects.',
      },
      {
        id: 'c3',
        label: 'Class 3rd',
        tagline: 'Understanding over memory',
        focus: [
          'Maths, English, and EVS clarity',
          'Comprehension and written expression',
          'Application-based questions',
          'Less reliance on memorising',
        ],
        outcome: 'Concept-driven learners who retain more.',
      },
      {
        id: 'c4',
        label: 'Class 4th',
        tagline: 'Skill and subject depth',
        focus: [
          'Maths problem-solving',
          'Grammar and language fluency',
          'Subject-wise strengthening',
          'Worksheets and checks',
        ],
        outcome: 'Better accuracy, logic, and classroom performance.',
      },
      {
        id: 'c5',
        label: 'Class 5th',
        tagline: 'Ready for middle school',
        focus: [
          'Cross-subject foundations',
          'Reasoning and analysis',
          'Independent study habits',
          'Planned revision',
        ],
        outcome: 'A confident move into Class 6 with academic readiness.',
      },
    ],
    features: [
      'Personalised one-to-one tutoring',
      'Concepts before memorisation',
      'Regular assessments',
      'Interactive teaching methods',
      'A base for higher classes',
    ],
    ctaLabel: 'Find a primary tutor',
    visual: 'assets/img/academic-coverage/grade-2.webp',
    iconMdi: 'mdi:school-outline',
    accent: 'emerald',
  },
  {
    id: 'middle',
    title: 'Middle School',
    shortTitle: 'Depth',
    years: 'Class 6th – 8th',
    focus: 'Subject depth & structured study',
    tagline: 'From “I know this” to “I can use this”.',
    overview:
      'Subjects get heavier, and guessing stops working. Mentors deepen Maths, Science, and Social Studies, and help students plan their week — the habits boards later depend on.',
    approach: [
      'Core concept clarity',
      'Logical thinking',
      'Study planning',
      'Tests and tracking',
    ],
    goal: 'Students ready for secondary-level work and board-style questions.',
    classes: [
      {
        id: 'c6',
        label: 'Class 6th',
        tagline: 'The jump to advanced topics',
        focus: [
          'New topics across subjects',
          'Maths, Science, and English fundamentals',
          'Reasoning and logic',
          'Study routines and discipline',
        ],
        outcome: 'Confidence with new subjects and a firmer academic base.',
      },
      {
        id: 'c7',
        label: 'Class 7th',
        tagline: 'Application, not just notes',
        focus: [
          'Deeper work in core subjects',
          'Problem-solving practice',
          'Comprehension and analysis',
          'Regular performance checks',
        ],
        outcome: 'Stronger problem-solving and steadier marks.',
      },
      {
        id: 'c8',
        label: 'Class 8th',
        tagline: 'The bridge to boards',
        focus: [
          'Clarity across subjects',
          'Analytical thinking',
          'Exam-oriented practice',
          'Time management and revision',
        ],
        outcome: 'Prepared, confident students ready for Class 9.',
      },
    ],
    features: [
      'One-to-one mentoring',
      'Application-focused teaching',
      'Assessments and tracking',
      'Structured study plans',
      'Board-curriculum readiness',
    ],
    ctaLabel: 'Explore middle school',
    visual: 'assets/img/academic-coverage/grade-3.webp',
    iconMdi: 'mdi:brain',
    accent: 'sky',
  },
  {
    id: 'secondary',
    title: 'Secondary',
    shortTitle: 'Boards',
    years: 'Class 9th – 10th',
    focus: 'Board examination preparation',
    tagline: 'First boards. Clear strategy. Steady practice.',
    overview:
      'Class 9 and 10 are the first high-stakes board years. Mentors finish the syllabus with a plan, then lock in sample papers, numericals, and time management — so exam day is practised, not improvised.',
    approach: [
      'Paced board syllabus',
      'Sample and past papers',
      'Numericals and concepts',
      'Exam time strategy',
    ],
    goal: 'Strong board performance and academic confidence.',
    classes: [
      {
        id: 'c9',
        label: 'Class 9th',
        tagline: 'The board foundation year',
        focus: [
          'Maths, Science, English, Social Science',
          'Application-based concept work',
          'Regular assessments',
          'Study plans and revision methods',
        ],
        outcome: 'A solid base and readiness for Class 10 boards.',
      },
      {
        id: 'c10',
        label: 'Class 10th',
        tagline: 'Focused board preparation',
        focus: [
          'Full syllabus with concept mastery',
          'Chapter-wise revision',
          'Mocks and sample papers',
          'Timing and answer writing',
        ],
        outcome: 'Higher confidence, accuracy, and board performance.',
      },
    ],
    features: [
      'Board-specific coverage (CBSE, ICSE, State)',
      'Mocks, tests, and tracking',
      'Strategic revision plans',
      'Answer presentation practice',
      'One-to-one tutoring',
    ],
    ctaLabel: 'Start board prep',
    visual: 'assets/img/academic-coverage/grade-4.webp',
    iconMdi: 'mdi:clipboard-text-outline',
    accent: 'violet',
  },
  {
    id: 'senior',
    title: 'Senior Secondary',
    shortTitle: 'Streams',
    years: 'Class 11th – 12th',
    focus: 'Stream specialisation & career prep',
    tagline: 'Choose a stream. Build the next five years.',
    overview:
      'These two years decide university options. Mentors teach to the chosen stream — Science, Commerce, or Humanities — and keep board work aligned with entrance goals where needed.',
    approach: [
      'Advanced subject depth',
      'Board-entrance balance',
      'Practicals and projects',
      'Performance tracking',
    ],
    goal: 'Board results, university readiness, and a clear next step.',
    streams: [
      {
        name: 'Science (PCM / PCB)',
        iconMdi: 'mdi:flask-outline',
        subjects: 'Physics, Chemistry, Mathematics / Biology',
        focus: 'Conceptual clarity and problem-solving',
      },
      {
        name: 'Commerce',
        iconMdi: 'mdi:chart-box-outline',
        subjects: 'Accountancy, Business Studies, Economics',
        focus: 'Financial understanding and analysis',
      },
      {
        name: 'Humanities',
        iconMdi: 'mdi:book-open-page-variant-outline',
        subjects: 'History, Political Science, Geography, Psychology, Sociology',
        focus: 'Critical thinking and conceptual analysis',
      },
    ],
    classes: [
      {
        id: 'c11',
        label: 'Class 11th',
        tagline: 'Foundations in the chosen stream',
        focus: [
          'Advanced stream concepts',
          'Base for Class 12 and entrances',
          'Structured plans and assessments',
          'Introduction to JEE, NEET, CUET, and similar exams',
        ],
        outcome: 'Stream clarity and readiness for a heavier Class 12.',
      },
      {
        id: 'c12',
        label: 'Class 12th',
        tagline: 'Boards and entrance together',
        focus: [
          'Complete syllabus with depth',
          'Intensive revision and doubt-solving',
          'Mocks, samples, and analysis',
          'JEE, NEET, CUET, and exam strategy',
        ],
        outcome: 'Stronger boards, calmer exams, and a path to higher education.',
      },
    ],
    features: [
      'Stream-specialist tutors',
      'Board + entrance integration',
      'Mocks and performance tracking',
      'Career-oriented guidance',
      'One-to-one mentoring',
    ],
    ctaLabel: 'Get senior mentoring',
    visual: 'assets/img/academic-coverage/grade-5.webp',
    iconMdi: 'mdi:school',
    accent: 'rose',
  },
  {
    id: 'competitive',
    title: 'Competitive Exams',
    shortTitle: 'Ranks',
    years: 'Entrances & olympiads',
    focus: 'Strategic mentoring & rank focus',
    tagline: 'Targeted practice. Timed mocks. A plan for rank.',
    overview:
      'Entrance prep is a different sport from school. Mentors work to a targeted syllabus, run mocks, and use performance data to decide what to revise next — for school entrances and professional exams.',
    approach: [
      'Targeted practice',
      'Mocks and rank plans',
      'Doubt-solving support',
      'Timed revision plans',
    ],
    goal: 'Better ranking potential through focused practice and performance analytics.',
    classes: [],
    examGroups: [
      {
        label: 'School entrance exams',
        items: ['Navodaya Vidyalaya', 'Sainik School', 'RMS', 'RIMC', 'Army Schools'],
      },
      {
        label: 'Engineering & medical',
        items: ['IIT-JEE', 'NEET', 'PPHT and other competitive exams'],
      },
    ],
    features: [
      'Exam-specific mentors',
      'Mock tests and analytics',
      'Rank-focused strategy',
      'Timed revision plans',
      'Doubt-solving support',
    ],
    ctaLabel: 'Prepare for exams',
    visual: 'assets/img/academic-coverage/grade-6.webp',
    iconMdi: 'mdi:trophy-outline',
    accent: 'orange',
  },
  {
    id: 'university',
    title: 'University',
    shortTitle: 'Higher study',
    years: 'Undergraduate – Postgraduate',
    focus: 'Advanced subjects & academic projects',
    tagline: 'Hard papers, research, and writing — with a mentor.',
    overview:
      'Degree and master’s work is specialised and often lonely. Mentors help with advanced concepts, assignments, dissertations, and exam revision — so university work stays on track.',
    approach: [
      'Subject clarification',
      'Assignment guidance',
      'Academic writing help',
      'Exam revision plans',
    ],
    goal: 'Stronger subject mastery and academic performance at university level.',
    classes: [
      {
        id: 'ug',
        label: 'Undergraduate',
        tagline: 'Degree-level mentoring',
        focus: [
          'Concept help for advanced papers',
          'Assignment and project guidance',
          'Structured exam revision',
        ],
        outcome: 'Clearer subjects and stronger academic performance.',
      },
      {
        id: 'pg',
        label: 'Postgraduate',
        tagline: 'Research and advanced topics',
        focus: [
          'Dissertation and research support',
          'Academic writing and literature review',
          'Advanced subject clarification',
        ],
        outcome: 'Better research quality and academic confidence.',
      },
    ],
    features: [
      'Subject-specialist mentors',
      'Project and dissertation support',
      'Academic writing guidance',
      'Exam revision planning',
      'Flexible session formats',
    ],
    ctaLabel: 'Get university support',
    visual: 'assets/img/academic-coverage/grade-7.webp',
    iconMdi: 'mdi:university-outline',
    accent: 'slate',
  },
]

export const gradesPromise = {
  badge: 'At every stage',
  title: 'The support that <span class="text-gradient-brand">does not change</span>',
  description:
    'The syllabus changes. The way we work with families does not — a matched mentor, a plan, and visible progress.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    {
      title: 'Matched, verified tutors',
      description: 'Background-checked specialists aligned to the student’s grade, board, and subject — not a generic classroom.',
      iconMdi: 'mdi:account-check-outline',
    },
    {
      title: 'A plan for this stage',
      description: 'Session plans follow the current class or exam — early play, board mocks, stream depth, or university writing.',
      iconMdi: 'mdi:clipboard-text-outline',
    },
    {
      title: 'Progress families can see',
      description: 'Regular checks, feedback, and counsellor follow-up so parents know what improved and what is next.',
      iconMdi: 'mdi:chart-timeline-variant',
    },
    {
      title: 'Home or online',
      description: 'The same academic standard across home, online, and hybrid formats — scheduled around the family.',
      iconMdi: 'mdi:laptop',
    },
    {
      title: 'Board-aware teaching',
      description: 'CBSE, ICSE, IB, Cambridge, NIOS, and state boards — tutors teach to the syllabus the student actually sits.',
      iconMdi: 'mdi:domain',
    },
    {
      title: 'A free demo first',
      description: 'Meet the tutor, test the fit, then enrol. No commitment until the family is sure.',
      iconMdi: 'mdi:calendar-check-outline',
    },
  ],
}

export const gradesAdapt = {
  badge: 'How mentoring changes',
  title: 'Same ecosystem. <span class="text-gradient-brand">A different academic job.</span>',
  description:
    'We do not run one lesson style from Nursery to a master’s dissertation. The mentor’s job shifts with the student’s stage.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  phases: [
    {
      id: 'early',
      label: 'Early years',
      stages: 'Pre-Primary · Primary',
      title: 'Ready the learner',
      description: 'Play, language, number sense, and habits. The goal is comfort with learning — not exam scores.',
      iconMdi: 'mdi:puzzle-outline',
      href: '#pre-primary',
    },
    {
      id: 'school',
      label: 'School years',
      stages: 'Middle · Secondary',
      title: 'Build depth, then boards',
      description: 'Subjects get harder. Mentors move from concept practice to sample papers and first board strategy.',
      iconMdi: 'mdi:book-education-outline',
      href: '#middle',
    },
    {
      id: 'career',
      label: 'Pathway years',
      stages: 'Senior · Competitive',
      title: 'Specialise and compete',
      description: 'Stream mastery plus entrance strategy — boards and ranks planned together, not as two separate lives.',
      iconMdi: 'mdi:target',
      href: '#senior',
    },
    {
      id: 'higher',
      label: 'Higher study',
      stages: 'Undergraduate · Postgraduate',
      title: 'Guide complex work',
      description: 'Advanced papers, projects, and research writing — specialist help when university support is thin.',
      iconMdi: 'mdi:university-outline',
      href: '#university',
    },
  ],
}

export const gradesFinalCta = {
  badge: 'Start with a demo',
  title: 'Find the right mentor for this academic stage',
  description:
    'Tell us the class, board, and goal. We match a verified tutor and begin with a free demo — whether the need is early learning, boards, entrances, or university support.',
  supporting: 'No commitment required · Background-verified tutors · Free demo session',
  ctas: [
    {
      label: 'Book Free Demo',
      href: externalLinks.studentSignup,
      iconMdi: 'mdi:calendar-check-outline',
      primary: true,
    },
    {
      label: 'Talk to a counsellor',
      href: '/contact',
      iconMdi: 'mdi:account-voice',
    },
  ],
}
