export type ClassLevel = {
  id: string
  label: string
  tagline?: string
  focus?: string[]
  outcome?: string
}

export type CurriculumStage = {
  id: string
  emoji: string
  title: string
  subtitle: string
  gradesLabel: string
  focus: string
  overview: string
  approach: string[]
  goal: string
  cta: string
  classes: ClassLevel[]
  streams?: string[]
  examGroups?: { label: string; items: string[] }[]
  gradient: string
  accent: string
  ring: string
  stepColor: string
}

export const curriculumStages: CurriculumStage[] = [
  {
    id: 'pre-primary',
    emoji: '🧸',
    title: 'Pre-Primary',
    subtitle: 'Early development & school readiness',
    gradesLabel: 'Nursery · LKG · UKG',
    focus: 'Early Development & School Readiness',
    overview:
      'Play-based learning that nurtures curiosity, communication, and basic cognitive skills in a fun, engaging environment.',
    approach: [
      'Play-based & activity-driven learning',
      'Alphabet recognition & phonics readiness',
      'Numbers, shapes & basic counting',
      'Storytelling, rhymes & language development',
      'Motor skills & social confidence',
    ],
    goal: 'Build school readiness, curiosity, and a love for learning.',
    cta: 'Start Early Learning with Expert Tutors',
    classes: [
      {
        id: 'nursery',
        label: 'Nursery',
        tagline: 'First step into learning',
        focus: ['Letters, numbers & shapes', 'Cognitive & motor skills', 'Stories, rhymes & creativity'],
        outcome: 'Curiosity, confidence & early learning habits.',
      },
      {
        id: 'lkg',
        label: 'LKG',
        tagline: 'Strengthening early skills',
        focus: ['Alphabet writing & phonics', 'Counting & number concepts', 'Vocabulary & simple sentences'],
        outcome: 'Basic literacy, numeracy & improved engagement.',
      },
      {
        id: 'ukg',
        label: 'UKG',
        tagline: 'School readiness',
        focus: ['Reading & writing practice', 'Basic arithmetic', 'Logical thinking activities'],
        outcome: 'Confident, school-ready learners.',
      },
    ],
    gradient: 'from-amber-400 via-yellow-400 to-orange-400',
    accent: 'bg-amber-500',
    ring: 'ring-amber-400/50',
    stepColor: 'bg-amber-500 border-amber-300',
  },
  {
    id: 'primary',
    emoji: '🎒',
    title: 'Primary',
    subtitle: 'Class 1st – 5th',
    gradesLabel: 'Primary school years',
    focus: 'Concept Building & Learning Habits',
    overview:
      'Interactive, activity-based teaching that builds curiosity, strong habits, and fundamental skills across core subjects.',
    approach: [
      'Phonics & early language development',
      'Basic mathematics & number sense',
      'Activity-based engaging methods',
      'Reading fluency & comprehension',
      'Creative thinking & curiosity',
    ],
    goal: 'Strong academic foundations and positive learning behaviour from an early age.',
    cta: 'Find a Tutor for Primary Classes',
    classes: [
      {
        id: 'c1',
        label: 'Class 1',
        tagline: 'Beginning structured learning',
        focus: ['Basic reading & writing', 'Numbers & simple arithmetic', 'Activity-based learning'],
        outcome: 'Comfort with structured learning.',
      },
      {
        id: 'c2',
        label: 'Class 2',
        tagline: 'Strengthening core skills',
        focus: ['Reading fluency & writing', 'Addition, subtraction & operations', 'Comprehension practice'],
        outcome: 'Clarity and confidence in core subjects.',
      },
      {
        id: 'c3',
        label: 'Class 3',
        tagline: 'Concept clarity',
        focus: ['Maths, English & EVS clarity', 'Comprehension & expression', 'Application-based learning'],
        outcome: 'Concept-driven learning habits.',
      },
      {
        id: 'c4',
        label: 'Class 4',
        tagline: 'Skill development',
        focus: ['Maths problem-solving', 'Grammar & language fluency', 'Subject-wise strengthening'],
        outcome: 'Improved accuracy and logical thinking.',
      },
      {
        id: 'c5',
        label: 'Class 5',
        tagline: 'Middle school bridge',
        focus: ['Strong foundations all subjects', 'Logical reasoning', 'Independent study habits'],
        outcome: 'Smooth transition to middle school.',
      },
    ],
    gradient: 'from-emerald-500 via-green-500 to-teal-500',
    accent: 'bg-emerald-500',
    ring: 'ring-emerald-400/50',
    stepColor: 'bg-emerald-500 border-emerald-300',
  },
  {
    id: 'middle',
    emoji: '🧠',
    title: 'Middle School',
    subtitle: 'Class 6th – 8th',
    gradesLabel: 'Concept strengthening phase',
    focus: 'Concept Strengthening & Subject Depth',
    overview:
      'Personalised tutoring that deepens subject understanding while building analytical thinking and structured study habits.',
    approach: [
      'Clarity in Maths, Science & Social Studies',
      'Logical & analytical thinking',
      'Structured study planning',
      'Regular tests & performance tracking',
    ],
    goal: 'Prepare students for advanced challenges and board-level studies.',
    cta: 'Explore Middle School Tutoring',
    classes: [
      { id: 'c6', label: 'Class 6', tagline: 'Advanced learning begins' },
      { id: 'c7', label: 'Class 7', tagline: 'Application-based learning' },
      { id: 'c8', label: 'Class 8', tagline: 'Secondary preparation' },
    ],
    gradient: 'from-blue-500 via-sky-500 to-cyan-500',
    accent: 'bg-blue-600',
    ring: 'ring-blue-400/50',
    stepColor: 'bg-blue-600 border-blue-300',
  },
  {
    id: 'secondary',
    emoji: '📝',
    title: 'Secondary',
    subtitle: 'Class 9th – 10th',
    gradesLabel: 'Board examination years',
    focus: 'Board Examination Preparation',
    overview:
      'Strategic mentoring for India\'s first major board exams — conceptual clarity, exam strategy, and consistent practice.',
    approach: [
      'Board syllabus with strategic planning',
      'Sample papers & previous year questions',
      'Numerical mastery & concept depth',
      'Time management & exam strategies',
    ],
    goal: 'Strong board performance and lasting academic confidence.',
    cta: 'Start Board Exam Preparation',
    classes: [
      { id: 'c9', label: 'Class 9', tagline: 'Board foundation year' },
      { id: 'c10', label: 'Class 10', tagline: 'Board exam focus' },
    ],
    gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
    accent: 'bg-violet-600',
    ring: 'ring-violet-400/50',
    stepColor: 'bg-violet-600 border-violet-300',
  },
  {
    id: 'senior',
    emoji: '🎓',
    title: 'Senior Secondary',
    subtitle: 'Class 11th – 12th',
    gradesLabel: 'Stream specialisation',
    focus: 'Stream Specialisation & Career Preparation',
    overview:
      'Advanced subject support aligned with Science, Commerce, or Humanities — plus integrated entrance exam preparation.',
    approach: [
      'Advanced subject mastery',
      'Competitive exam integration',
      'Practical work & project support',
      'Continuous performance monitoring',
    ],
    goal: 'Board excellence, university admissions & entrance readiness.',
    cta: 'Get Expert Senior Secondary Mentorship',
    streams: ['Science (PCM / PCB)', 'Commerce', 'Humanities'],
    classes: [
      { id: 'c11', label: 'Class 11', tagline: 'Stream foundations' },
      { id: 'c12', label: 'Class 12', tagline: 'Board + entrance excellence' },
    ],
    gradient: 'from-rose-600 via-red-600 to-pink-600',
    accent: 'bg-rose-600',
    ring: 'ring-rose-400/50',
    stepColor: 'bg-rose-600 border-rose-300',
  },
  {
    id: 'competitive',
    emoji: '🏆',
    title: 'Competitive Exams',
    subtitle: 'Entrance & olympiad prep',
    gradesLabel: 'Targeted exam mentoring',
    focus: 'Strategic Mentoring & Performance',
    overview:
      'Structured preparation for school, national, and professional entrance exams with expert strategies and analytics.',
    approach: [
      'Targeted syllabus & problem practice',
      'Mock tests & rank-focused strategy',
      'Doubt-solving & performance analytics',
      'Time-bound revision plans',
    ],
    goal: 'Improve ranking potential through focused preparation.',
    cta: 'Prepare for Competitive Exams',
    classes: [],
    examGroups: [
      {
        label: 'School entrance',
        items: ['Navodaya Vidyalaya', 'Sainik School', 'RMS', 'RIMC', 'Army Schools'],
      },
      {
        label: 'Engineering & medical',
        items: ['IIT-JEE', 'NEET', 'PET / PAT / PPHT'],
      },
    ],
    gradient: 'from-amber-500 via-orange-500 to-yellow-500',
    accent: 'bg-amber-500',
    ring: 'ring-amber-400/50',
    stepColor: 'bg-amber-500 border-amber-400',
  },
  {
    id: 'university',
    emoji: '🎓',
    title: 'University',
    subtitle: 'Undergraduate – Postgraduate',
    gradesLabel: 'Higher education support',
    focus: 'Advanced Subject & Project Support',
    overview:
      'Guidance for complex subjects, research projects, academic writing, and structured revision for university exams.',
    approach: [
      'Advanced subject clarification',
      'Assignment & dissertation guidance',
      'Academic writing & research support',
      'Structured exam revision planning',
    ],
    goal: 'Enhanced performance and subject mastery at university level.',
    cta: 'Get University Academic Support',
    classes: [
      { id: 'ug', label: 'Undergraduate', tagline: 'Degree-level mentoring' },
      { id: 'pg', label: 'Postgraduate', tagline: 'Research & advanced topics' },
    ],
    gradient: 'from-slate-700 via-slate-600 to-slate-500',
    accent: 'bg-slate-700',
    ring: 'ring-slate-400/50',
    stepColor: 'bg-slate-700 border-slate-400',
  },
]
