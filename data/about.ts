/**
 * Static seed data shaped for future CMS / API replacement.
 * Database: ABOUT_TIMELINE
 */
export type TimelineEntry = {
  timeline_id: number
  year: string
  milestone_title: string
  milestone_description: string
  display_order: number
  status: 'Active' | 'Inactive'
}

const timelineSeed: TimelineEntry[] = [
  {
    timeline_id: 1,
    year: 'Year 1',
    milestone_title: 'Concept & Foundation',
    milestone_description:
      'Establishment of the vision to build a structured personalised tutoring platform.',
    display_order: 1,
    status: 'Active',
  },
  {
    timeline_id: 2,
    year: 'Year 1',
    milestone_title: 'Mentor Network Development',
    milestone_description:
      'Recruitment and verification of qualified subject mentors.',
    display_order: 2,
    status: 'Active',
  },
  {
    timeline_id: 3,
    year: 'Year 2',
    milestone_title: 'Student Mentorship Programs',
    milestone_description:
      'Launch of personalised tutoring services for students across multiple boards.',
    display_order: 3,
    status: 'Active',
  },
  {
    timeline_id: 4,
    year: 'Year 2',
    milestone_title: 'Academic Monitoring Framework',
    milestone_description:
      'Introduction of structured progress tracking and learning reports.',
    display_order: 4,
    status: 'Active',
  },
  {
    timeline_id: 5,
    year: 'Year 3',
    milestone_title: 'Technology Integration',
    milestone_description:
      'Implementation of digital platforms for tutor management and academic tracking.',
    display_order: 5,
    status: 'Active',
  },
  {
    timeline_id: 6,
    year: 'Year 3',
    milestone_title: 'Expansion of Services',
    milestone_description:
      'Expansion of services including online tutoring, academic counselling, and institutional support.',
    display_order: 6,
    status: 'Active',
  },
  {
    timeline_id: 7,
    year: 'Year 4',
    milestone_title: 'National Mentor Network',
    milestone_description:
      'Building a pan-India network of verified mentors and academic professionals.',
    display_order: 7,
    status: 'Active',
  },
]

export const aboutTimeline = [...timelineSeed].sort(
  (a, b) => a.display_order - b.display_order,
)

export type AboutPillar = {
  icon: string
  title: string
  short: string
}

export const aboutMission = {
  badge: 'Our Mission',
  title: 'Empowering Every Learner Through Structured Mentorship',
  summary:
    'Structured, transparent mentorship with clear goals, verified tutors, and progress you can measure — not left to chance.',
  pillars: [
    {
      icon: 'mdi:shield-account',
      title: 'Verified tutors',
      short: 'Screened for expertise, teaching quality, and integrity',
    },
    {
      icon: 'mdi:eye-outline',
      title: 'Parent visibility',
      short: 'Attendance, syllabus, homework, and performance in one place',
    },
    {
      icon: 'mdi:chart-box',
      title: 'Measurable reporting',
      short: 'Assessments and analytics that show real growth',
    },
    {
      icon: 'mdi:school-outline',
      title: 'Tutor support',
      short: 'Systems that let mentors focus on teaching',
    },
    {
      icon: 'mdi:laptop-account',
      title: 'Tech-enabled ops',
      short: 'Workflows and monitoring for accountability at scale',
    },
  ] satisfies AboutPillar[],
}

export const aboutVision = {
  badge: 'Our Vision',
  title: "Building India's Most Trusted Personalised Tutoring Ecosystem",
  summary:
    "India's trusted personalised tutoring ecosystem — mentorship, structure, and technology working together.",
  pillars: [
    {
      icon: 'mdi:account-child',
      title: 'Every student',
      short: 'Custom guidance aligned to their goals',
    },
    {
      icon: 'mdi:account-heart',
      title: 'Every parent',
      short: 'Transparency, reliability, and clear communication',
    },
    {
      icon: 'mdi:human-male-board',
      title: 'Every tutor',
      short: 'A professional, technology-enabled workplace',
    },
    {
      icon: 'mdi:handshake',
      title: 'Every partner',
      short: 'Accountability and long-term value',
    },
  ] satisfies AboutPillar[],
}

/**
 * Database: TEAM_MEMBERS
 */
export type TeamMember = {
  team_id: number
  name: string
  image: string | null
  designation: string
  department: string
  bio: string
  linkedin_url: string | null
  display_order: number
  status: 'Active' | 'Inactive'
}

const teamSeed: TeamMember[] = [
  {
    team_id: 1,
    name: 'Ananya Desai',
    image: null,
    designation: 'Academic Director',
    department: 'Academic Operations',
    bio: 'An experienced education professional with expertise in curriculum development, mentor training, and academic performance management. Responsible for overseeing academic quality standards and mentorship programs across the organisation.',
    linkedin_url: null,
    display_order: 1,
    status: 'Active',
  },
]

export const teamMembers = [...teamSeed].sort(
  (a, b) => a.display_order - b.display_order,
)

export type LeadershipProfile = {
  id: string
  name: string
  role: string
  bio: string
  inTheirWords: string[]
  initials: string
  ringColor: string
}

export const aboutLeadership: LeadershipProfile[] = [
  {
    id: 'founder',
    name: 'Afroj Aalam',
    role: 'Founder & CEO',
    bio: 'Leads strategy, governance, and long-term growth — keeping mentorship credible, measurable, and scalable across every city Indian Mentors serves.',
    inTheirWords: [
      'Every student deserves structure, not just another tuition class.',
      'Transparency between parents, mentors, and students is non-negotiable.',
      'Technology should empower mentors — not replace the human connection.',
    ],
    initials: 'FC',
    ringColor: 'ring-blue-500',
  },
  {
    id: 'academic-director',
    name: 'Ananya Desai',
    role: 'Academic Director',
    bio: 'An experienced education professional overseeing curriculum development, mentor training, and academic performance management across the organisation.',
    inTheirWords: [
      'Quality mentorship starts with verified expertise and continuous training.',
      'Progress must be measurable — parents deserve clarity, not assumptions.',
      'Every learning plan should align with the student\'s board, goals, and pace.',
    ],
    initials: 'AD',
    ringColor: 'ring-emerald-500',
  },
]

export const aboutMissionQuote =
  'We believe that students don\'t need guesswork, unverified tutors, or opaque progress reports to achieve academic excellence.'

export type PhilosophyValue = {
  icon: string
  title: string
  description: string
}

export const aboutPhilosophy = {
  title: 'Our Philosophy',
  subtitle: 'Three simple values. Powered by technology, delivered by humans.',
  values: [
    {
      icon: 'mdi:lightning-bolt',
      title: 'Structure, support, and speed',
      description:
        'Personalised learning plans, verified mentors, and ERP-backed tracking — so families see progress from day one.',
    },
    {
      icon: 'mdi:heart-outline',
      title: 'Trust at every touchpoint',
      description:
        'Background-verified tutors, transparent reporting, and open communication between students, parents, and mentors.',
    },
    {
      icon: 'mdi:send-outline',
      title: 'Outcomes that scale',
      description:
        'From home tutoring to institutional partnerships — structured systems that grow with every learner.',
    },
  ] satisfies PhilosophyValue[],
}

export type ComparisonRow = {
  feature: string
  indianMentors: boolean
  coachingCenters: boolean
  selfStudy: boolean
}

export const aboutComparison = {
  title: 'What Makes Us Different',
  subtitle: 'How Indian Mentors compares to traditional coaching and self-study.',
  columns: ['Indian Mentors', 'Coaching Centers', 'Self-Study'] as const,
  rows: [
    { feature: 'Verified & background-checked tutors', indianMentors: true, coachingCenters: false, selfStudy: false },
    { feature: 'Personalised one-to-one mentorship', indianMentors: true, coachingCenters: false, selfStudy: false },
    { feature: 'Parent visibility & progress reports', indianMentors: true, coachingCenters: false, selfStudy: false },
    { feature: 'Flexible home, online & hybrid modes', indianMentors: true, coachingCenters: true, selfStudy: true },
    { feature: 'ERP-backed session tracking', indianMentors: true, coachingCenters: false, selfStudy: false },
    { feature: 'Board-aligned curriculum support', indianMentors: true, coachingCenters: true, selfStudy: true },
    { feature: 'Measurable academic outcomes', indianMentors: true, coachingCenters: false, selfStudy: false },
    { feature: 'Pan-India mentor network', indianMentors: true, coachingCenters: false, selfStudy: false },
  ] satisfies ComparisonRow[],
}

export type AudienceCard = {
  icon: string
  text: string
}

export const aboutAudience = {
  title: 'Designed for Students Who…',
  subtitle: 'Our team becomes your academic support system — structured, transparent, and scalable.',
  cards: [
    { icon: 'mdi:rocket-launch-outline', text: 'Want personalised guidance beyond crowded classroom coaching.' },
    { icon: 'mdi:clock-fast', text: 'Need flexible scheduling that fits school, exams, and family life.' },
    { icon: 'mdi:account-group-outline', text: 'Value transparency — parents, students, and mentors aligned on goals.' },
    { icon: 'mdi:school-outline', text: 'Aim for board excellence, competitive exams, or long-term academic growth.' },
  ] satisfies AudienceCard[],
}

export const aboutLeadershipQuote =
  'Together, we are building India\'s most trusted personalised tutoring ecosystem — where every learner gets structure, every parent gets clarity, and every mentor gets the support to teach with impact.'
