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
    year: '2019',
    milestone_title: 'Concept & Foundation',
    milestone_description:
      'Establishment of the vision to build a structured personalised tutoring platform.',
    display_order: 1,
    status: 'Active',
  },
  {
    timeline_id: 2,
    year: '2020',
    milestone_title: 'Mentor Network Development',
    milestone_description:
      'Recruitment and verification of qualified subject mentors.',
    display_order: 2,
    status: 'Active',
  },
  {
    timeline_id: 3,
    year: '2021',
    milestone_title: 'Student Mentorship Programs',
    milestone_description:
      'Launch of personalised tutoring services for students across multiple boards.',
    display_order: 3,
    status: 'Active',
  },
  {
    timeline_id: 4,
    year: '2022',
    milestone_title: 'Academic Monitoring Framework',
    milestone_description:
      'Introduction of structured progress tracking and learning reports.',
    display_order: 4,
    status: 'Active',
  },
  {
    timeline_id: 5,
    year: '2023',
    milestone_title: 'Technology Integration',
    milestone_description:
      'Implementation of digital platforms for tutor management and academic tracking.',
    display_order: 5,
    status: 'Active',
  },
  {
    timeline_id: 6,
    year: '2024',
    milestone_title: 'Expansion of Services',
    milestone_description:
      'Expansion of services including online tutoring, academic counselling, and institutional support.',
    display_order: 6,
    status: 'Active',
  },
  {
    timeline_id: 7,
    year: '2025',
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

export type MissionCommitment = {
  icon: string
  title: string
  description: string
}

export type VisionPoint = {
  icon: string
  text: string
}

export const aboutMission = {
  badge: 'Our Mission',
  title:
    'Empowering Every Learner Through <span class="text-gradient-brand pt-2">Structured Mentorship</span>',
  classes: '!px-0 !py-0',
  summary:
    'Structured, transparent mentorship with clear goals, verified tutors, and progress you can measure — not left to chance.',
  intro: [
    'At Indian Mentors, our mission is to deliver structured, transparent, and personalised academic mentorship that empowers students to achieve consistent and measurable growth.',
    'We are committed to building an educational ecosystem where learning is not left to chance but guided by planning, monitoring, and accountability. Every student journey is designed with clarity — from goal setting and tutor matching to progress tracking and performance reporting.',
  ],
  commitmentsLabel: 'Driven by five core commitments',
  commitments: [
    {
      icon: 'mdi:shield-check-outline',
      title: 'Deliver Verified & High-Quality Tutors',
      description:
        'Every mentor undergoes a structured screening and verification process to ensure subject expertise, teaching capability, and professional integrity.',
    },
    {
      icon: 'mdi:eye-outline',
      title: 'Ensure Transparent Tracking for Parents',
      description:
        'Clear visibility into attendance, syllabus coverage, homework, and performance updates — creating trust through structured reporting.',
    },
    {
      icon: 'mdi:chart-box-outline',
      title: 'Provide Measurable Academic Reporting',
      description:
        'Regular assessments, feedback systems, and progress analytics help students and parents see real academic growth over time.',
    },
    {
      icon: 'mdi:account-tie-outline',
      title: 'Support Tutors with Professional Systems',
      description:
        'Timely processes, structured communication, and performance monitoring help mentors focus on teaching excellence.',
    },
    {
      icon: 'mdi:cog-sync-outline',
      title: 'Maintain Operational Excellence Through Technology',
      description:
        'Structured workflows, tracking systems, and digital monitoring create a seamless and accountable learning environment.',
    },
  ] satisfies MissionCommitment[],
  closing:
    "We don't just connect tutors and students — we design organised academic journeys that promote clarity, discipline, and measurable outcomes.",
}

export const aboutVision = {
  badge: 'Our Vision',
  title:
    'Building India\'s Most Trusted <span class="text-gradient-brand pt-2">Personalised Tutoring Ecosystem</span>',
  classes: '!px-0 !py-0',
  summary:
    "India's trusted personalised tutoring ecosystem — mentorship, structure, and technology working together.",
  intro:
    "Our vision is to become India's most trusted personalised tutoring ecosystem by combining mentorship, structure, and technology to redefine academic support at scale.",
  futureLabel: 'We envision a future where',
  points: [
    {
      icon: 'mdi:school-outline',
      text: 'Every student receives customised academic guidance aligned with their goals.',
    },
    {
      icon: 'mdi:account-group-outline',
      text: 'Parents experience transparency, reliability, and consistent communication.',
    },
    {
      icon: 'mdi:monitor-dashboard',
      text: 'Tutors operate within a professional, technology-enabled system.',
    },
    {
      icon: 'mdi:clipboard-check-outline',
      text: 'Educational partnerships are built on accountability and long-term value.',
    },
  ] satisfies VisionPoint[],
  closing:
    'By bringing together structured mentorship and technology-driven operations, Indian Mentors aims to set new standards in personalised academic services across India.',
}

export type LeadershipProfile = {
  id: string
  name: string
  role: string
  bio: string
  image?: string
  message?: string
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
    image: 'assets/img/hero/hero-1.png',
    message:
      'Focused on building consistent academic systems so every learner receives structured guidance, timely reviews, and clear improvement plans.',
  },
  {
    id: 'operations-head',
    name: 'Rohan Mehta',
    role: 'Head of Operations',
    bio: 'Coordinates city-level tutor onboarding, parent communication, scheduling, and service delivery to keep mentorship reliable at scale.',
    inTheirWords: [
      'A great tutoring experience depends on dependable systems behind every session.',
      'Families should always know what is happening, who is responsible, and what comes next.',
      'Operations must make quality easier for mentors, students, and parents.',
    ],
    initials: 'RM',
    ringColor: 'ring-amber-500',
    image: 'assets/img/hero/hero-2.png',
    message:
      'Keeps day-to-day delivery disciplined across cities, ensuring families, tutors, and internal teams stay aligned from onboarding to outcomes.',
  },
  {
    id: 'mentor-success-lead',
    name: 'Priya Sharma',
    role: 'Mentor Success Lead',
    bio: 'Supports tutor quality, training, engagement, and performance feedback so mentors can teach with confidence and accountability.',
    inTheirWords: [
      'Mentors do their best work when expectations, feedback, and support are clear.',
      'Strong tutor relationships create stronger academic outcomes for students.',
      'Quality is built through regular review, not one-time verification.',
    ],
    initials: 'PS',
    ringColor: 'ring-rose-500',
    image: 'assets/img/hero/hero-4.png',
    message:
      'Works closely with mentors to strengthen teaching quality, feedback loops, and the student experience across home and online tutoring.',
  },
  {
    id: 'technology-lead',
    name: 'Kavya Patel',
    role: 'Technology Lead',
    bio: 'Guides the platform systems, reporting workflows, and digital tools that support transparent academic monitoring.',
    inTheirWords: [
      'Technology should make learning progress easier to understand and act on.',
      'Reliable data helps families and mentors make better academic decisions.',
      'The best systems stay simple for the people using them every day.',
    ],
    initials: 'KP',
    ringColor: 'ring-indigo-500',
    image: 'assets/img/hero/hero-3.png',
    message:
      'Builds the digital workflows behind tutor coordination, parent visibility, progress reporting, and operational accountability.',
  },
]


export type PhilosophyValue = {
  icon: string
  title: string
  description: string
}

export const aboutPhilosophy = {
  badge: 'What we stand for',
  title: 'Our <span class="text-gradient-brand">Philosophy</span>',
  description: 'Three simple values. Powered by technology, delivered by humans.',
  classes: '!px-0 !py-0',
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
  badge: 'Our Competitive Advantage',
  title:
    'The Difference Behind Every <span class="text-gradient-brand">Student\'s Success</span>',
  description: 'How Indian Mentors compares to traditional coaching and self-study.',
  classes: '!px-0 !py-0',
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
  badge: 'Who we serve',
  title: 'Designed for <span class="text-gradient-brand">Students Who…</span>',
  description:
    'Our team becomes your academic support system — structured, transparent, and scalable.',
  classes: '!px-0 !py-0',
  cards: [
    { icon: 'mdi:rocket-launch-outline', text: 'Want personalised guidance beyond crowded classroom coaching.' },
    { icon: 'mdi:clock-fast', text: 'Need flexible scheduling that fits school, exams, and family life.' },
    { icon: 'mdi:account-group-outline', text: 'Value transparency — parents, students, and mentors aligned on goals.' },
    { icon: 'mdi:school-outline', text: 'Aim for board excellence, competitive exams, or long-term academic growth.' },
  ] satisfies AudienceCard[],
}

export const aboutLeadershipSection = {
  badge: 'Our Leadership',
  title: 'A structured Team Powering <span class="text-gradient-brand">Academic Excellence</span>',
  description:
    'The people guiding academic quality, operations, and mentor excellence across India.',
  classes: '!px-0 !py-0',
}

export const aboutJourneySection = {
  badge: 'Our Journey',
  title: 'Milestones that shaped us',
  classes: '!px-0 !py-0',
}

export const aboutLeadershipQuote =
  'Together, we are building India\'s most trusted personalised tutoring ecosystem — where every learner gets structure, every parent gets clarity, and every mentor gets the support to teach with impact.'

export type CommitmentItem = {
  icon: string
  title: string
  description: string
}

export const aboutCommitment = {
  badge: 'Our Commitment',
  title: 'Our Standards of <span class="text-gradient-brand">Educational Excellence</span>',
  description: 'Five core commitments that drive everything we do',
  classes: '!px-0 !py-0',
  items: [
    {
      icon: 'mdi:account-cog-outline',
      title: 'Personalised Learning',
      description: 'Learning paths tailored to individual goals and pace',
    },
    {
      icon: 'mdi:chart-box-outline',
      title: 'Transparent Systems',
      description: 'Clear operational and monitoring frameworks',
    },
    {
      icon: 'mdi:earth',
      title: 'Global Alignment',
      description: 'Academic and competitive exam standard alignment',
    },
    {
      icon: 'mdi:monitor-dashboard',
      title: 'Tech-Enabled',
      description: 'Technology-driven learning and reporting support',
    },
    {
      icon: 'mdi:shield-check-outline',
      title: 'Verified Mentors',
      description: 'Professionally screened and verified tutors',
    },
  ] satisfies CommitmentItem[],
}

export type WorkStep = {
  icon: string
  title: string
  description: string
}

export const aboutHowWeWork = {
  badge: 'Operational Model',
  title: 'Our End-to-End <span class="text-gradient-brand">Learning Process</span>',
  description:
    'Our operational framework is designed for scalability, quality control, and transparency.',
  classes: '!px-0 !py-0',
  steps: [
    {
      icon: 'mdi:book-open-variant',
      title: 'Academic Requirement Assessment',
      description: 'Understanding student goals, syllabus requirements, and learning gaps.',
    },
    {
      icon: 'mdi:account-multiple-outline',
      title: 'Tutor Matching & Allocation',
      description: 'Curated allocation based on subject expertise and compatibility.',
    },
    {
      icon: 'mdi:clipboard-check-outline',
      title: 'Demo & Feedback',
      description: 'Trial session to ensure alignment before final onboarding.',
    },
    {
      icon: 'mdi:calendar-check-outline',
      title: 'Structured Session Scheduling',
      description: 'Pre-planned calendar with defined academic objectives.',
    },
    {
      icon: 'mdi:chart-line',
      title: 'ERP-Based Monitoring',
      description: 'Attendance, homework, performance, and reporting tracked systematically.',
    },
    {
      icon: 'mdi:backup-restore',
      title: 'Continuous Review & Support',
      description: 'Counsellor intervention and feedback-driven improvements.',
    },
  ] satisfies WorkStep[],
}

export type RoadmapPhase = {
  id: string
  tag: string
  title: string
  icon: string
  accent: 'blue' | 'indigo' | 'violet'
  items: { icon: string; title: string; description: string }[]
}

export const aboutRoadmap = {
  badge: ' Our Growth Roadmap',
  title: 'Our Path to <span class="text-gradient-brand"> Academic Excellence</span>',
  description: 'Building the Future of Personalised Learning at Indian Mentors.',
  classes: '!px-0 !py-0',
  note: 'Indian Mentors is building more than a tutoring network — we are developing a scalable, technology-enabled, and accountable academic model designed for long-term sustainability.',
  phases: [
    {
      id: 'short-term',
      tag: 'Short-Term',
      title: 'Building Strong Academic Foundations',
      icon: 'mdi:rocket-launch-outline',
      accent: 'blue',
      items: [
        {
          icon: 'mdi:database-cog-outline',
          title: 'Strengthen ERP Integration',
          description:
            'Enhanced attendance tracking, lesson planning, scheduling, analytics, and parent reporting for seamless academic management.',
        },
        {
          icon: 'mdi:account-check-outline',
          title: 'Increase Verified Tutor Base',
          description:
            'Expand our network of rigorously screened and verified tutors across subjects, boards, competitive exams, and skill-based learning.',
        },
        {
          icon: 'mdi:certificate-outline',
          title: 'Enhance Tutor Training & Quality Assurance',
          description:
            'Implement continuous tutor training, performance evaluations, teaching audits, and certification programs to maintain academic excellence.',
        },
        {
          icon: 'mdi:face-agent',
          title: 'Strengthen Student & Parent Support',
          description:
            'Improve onboarding, academic counselling, query resolution, and dedicated support systems for a better learning experience.',
        },
      ],
    },
    {
      id: 'mid-term',
      tag: 'Mid-Term',
      title: 'Structuring Academic Excellence',
      icon: 'mdi:trending-up',
      accent: 'indigo',
      items: [
        {
          icon: 'mdi:book-education-outline',
          title: 'Launch Structured Academic Programs',
          description:
            'Introduce curriculum-aligned learning pathways with milestones, assessments, progress tracking, and personalised improvement plans.',
        },
        {
          icon: 'mdi:city-variant-outline',
          title: 'Build City-Level Academic Coordination Teams',
          description:
            'Establish dedicated academic coordinators and mentor supervisors across major cities to ensure consistent service quality.',
        },
        {
          icon: 'mdi:chart-box-outline',
          title: 'Enhance Parent Analytics Dashboard',
          description:
            'Provide comprehensive insights into attendance, learning outcomes, tutor feedback, academic progress, and performance trends.',
        },
        {
          icon: 'mdi:layers-plus',
          title: 'Expand Learning Services Portfolio',
          description:
            'Introduce specialised programs including Olympiad preparation, NEET/JEE Foundation, language learning, coding, homeschooling support, and skill development.',
        },
      ],
    },
    {
      id: 'long-term',
      tag: 'Long-Term',
      title: 'Nationwide Academic Leadership',
      icon: 'mdi:earth',
      accent: 'violet',
      items: [
        {
          icon: 'mdi:map-marker-radius-outline',
          title: 'Nationwide Presence',
          description:
            'Expand operations across India with standardized onboarding, compliance, and quality assurance frameworks.',
        },
        {
          icon: 'mdi:hub-outline',
          title: 'Integrated Academic Ecosystem',
          description:
            'Create a unified platform connecting students, parents, tutors, schools, and academic partners through one intelligent learning ecosystem.',
        },
        {
          icon: 'mdi:ruler-square-compass',
          title: 'Standardised Tutoring Framework',
          description:
            'Develop nationally recognised tutoring standards with defined teaching methodologies, quality benchmarks, and measurable learning outcomes.',
        },
        {
          icon: 'mdi:handshake-outline',
          title: 'Strong Institutional Partnerships',
          description:
            'Collaborate with schools, colleges, educational institutions, and academic organizations to expand learning opportunities and educational impact.',
        },
      ],
    },
  ] satisfies RoadmapPhase[],
}

export type StoryMilestone = {
  id: string
  step: string
  year: string
  title: string
  description: string
  icon: string
  accent: 'blue' | 'indigo' | 'violet' | 'emerald' | 'amber' | 'rose'
  metric?: { value: string; label: string }
}

export const aboutStory = {
  badge: 'Our Story',
  title: 'A Journey of <span class="text-gradient-brand">Milestones & Achievements</span>',
  description:
    'From a single idea to a pan-India mentor network — slide through the moments that shaped Indian Mentors.',
  classes: '!px-0 !py-0',
  milestones: [
    {
      id: 'story-1',
      step: '01',
      year: '2019',
      title: 'Concept & Foundation',
      description:
        'Establishment of the vision to build a structured, personalised tutoring platform built on trust.',
      icon: 'mdi:lightbulb-on-outline',
      accent: 'blue',
      metric: { value: '1', label: 'Bold vision' },
    },
    {
      id: '2020',
      step: '02',
      year: '2020',
      title: 'Mentor Network Development',
      description:
        'Recruitment and rigorous verification of qualified subject mentors across disciplines.',
      icon: 'mdi:account-group-outline',
      accent: 'indigo',
      metric: { value: '100%', label: 'Verified mentors' },
    },
    {
      id: 'story-3',
      step: '03',
      year: '2021',
      title: 'Student Mentorship Programs',
      description:
        'Launch of personalised tutoring services for students across multiple education boards.',
      icon: 'mdi:book-education-outline',
      accent: 'violet',
      metric: { value: 'Multi', label: 'Board coverage' },
    },
    {
      id: 'story-4',
      step: '04',
      year: '2022',
      title: 'Academic Monitoring Framework',
      description:
        'Introduction of structured progress tracking and transparent learning reports for parents.',
      icon: 'mdi:chart-box-outline',
      accent: 'emerald',
      metric: { value: '360°', label: 'Progress tracking' },
    },
    {
      id: 'story-5',
      step: '05',
      year: '2023',
      title: 'Technology Integration',
      description:
        'Implementation of ERP-backed digital platforms for tutor management and academic tracking.',
      icon: 'mdi:laptop',
      accent: 'amber',
      metric: { value: 'ERP', label: 'Powered ops' },
    },
    {
      id: 'story-6',
      step: '06',
      year: '2024',
      title: 'Expansion of Services',
      description:
        'Online tutoring, academic counselling, and institutional support added to the ecosystem.',
      icon: 'mdi:rocket-launch-outline',
      accent: 'rose',
      metric: { value: '3+', label: 'New services' },
    },
    {
      id: 'story-7',
      step: '07',
      year: '2025',
      title: 'National Mentor Network',
      description:
        'Building a pan-India network of verified mentors and academic professionals.',
      icon: 'mdi:map-marker-radius-outline',
      accent: 'blue',
      metric: { value: 'Pan-India', label: 'Reach' },
    },
  ] satisfies StoryMilestone[],
}

export const aboutPartnersCta = {
  badge: 'Get Involved',
  title: 'Build With <span class="text-gradient-brand">Indian Mentors</span>',
  description:
    'Whether you mentor students, grow as a regional partner, or hire educators for your institution — explore the path that fits your goals.',
  primaryCta: {
    label: 'Explore Partnership',
    href: '/channel-partner',
  },
  secondaryCta: {
    label: 'Join as a Tutor',
    href: '/tutors',
  },
  tertiaryCta: {
    label: 'Hire Educators',
    href: '/institutions',
  },
} as const

export type TeamStructureUnit = {
  icon: string
  title: string
  description: string
  roles: string[]
}

export const aboutTeamStructure = {
  badge: 'Our Team Structure',
  title: 'A <span class="text-gradient-brand">System-Driven</span> Organisation',
  description:
    'Each team member operates within a defined framework of accountability and collaboration.',
  classes: '!px-0 !py-0',
  units: [
    {
      icon: 'mdi:account-school-outline',
      title: 'Admission & Academic',
      description: 'Guide onboarding, monitor progress, and schedule demos for seamless coordination.',
      roles: ['Admission Counsellors', 'Academic Counsellors', 'Admission Coordinators'],
    },
    {
      icon: 'mdi:certificate-outline',
      title: 'Tutor & Quality Management ',
      description: 'Screen mentors, monitor sessions, review feedback, and maintain academic standards.',
      roles: ['Tutor Recruiters', 'Quality Review'],
    },
    {
      icon: 'mdi:headset',
      title: 'Customer Support',
      description: 'Primary communication bridge for parents and students with timely, structured resolution.',
      roles: ['Support Executives', 'Resolution Specialists'],
    },
    {
      icon: 'mdi:account-heart-outline',
      title: 'Human Resources',
      description: 'Onboarding, compliance documentation, performance processes, and professional development.',
      roles: ['HR Managers', 'Compliance Officers'],
    },
    {
      icon: 'mdi:calculator-variant-outline',
      title: 'Finance & Accounts',
      description: 'Transparent billing, payment processing, and financial compliance systems.',
      roles: ['Accountent', 'Billing Specialists'],
    },
    {
      icon: 'mdi:monitor-dashboard',
      title: 'Technology & ERP',
      description: 'Monitoring systems, dashboards, reporting tools, and workflow integrations.',
      roles: ['ERP Engineers', 'Tech Operations'],
    },
    {
      icon: 'mdi:file-document-check-outline',
      title: 'Administration & Compliance',
      description: 'Documentation accuracy, policy adherence, and operational discipline.',
      roles: ['Administrative Officers', 'Policy Managers'],
    },
    {
      icon: 'mdi:handshake-outline',
      title: 'Channel Partners',
      description: 'Regional expansion and local coordination while maintaining centralised standards.',
      roles: ['Regional Partners', 'Outreach Coordinators'],
    },
  ] satisfies TeamStructureUnit[],
}
