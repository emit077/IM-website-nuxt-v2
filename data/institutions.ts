export type HiringSector = {
  id: string
  iconMdi: string
  title: string
  description: string
  rolesLabel: string
  roles: string[]
  extraLabel?: string
  extras?: string[]
  note: string
  accent: 'blue' | 'emerald' | 'amber' | 'violet' | 'rose'
}

export type ReliabilityPillar = {
  id: string
  iconMdi: string
  title: string
  description: string
  points: string[]
  footnote?: string
}

export type HiringStep = {
  step: number
  iconMdi: string
  title: string
  description: string
}

export const institutionsHero = {
  badge: 'Institutional Hiring Division',
  title: 'Trusted Teacher Recruitment &',
  titleHighlight: 'Staffing',
  description:
    'Hire verified, pre-screened educators for schools, colleges, institutes, and EdTech programs across India.',
  intro:
    'Indian Mentors operates a dedicated Institutional Hiring Division that supports schools, coaching institutes, colleges, and educational organizations in recruiting qualified, verified, and performance-ready teachers across India. Beyond personalised tutoring services, our recruitment platform is designed to help institutions build strong academic teams with efficiency and confidence.',
  supporting:
    'Whether your institution requires a single subject expert or a complete faculty team, Indian Mentors simplifies the entire recruitment journey — from candidate sourcing and screening to interview coordination and onboarding support.',
  goal: 'To help institutions hire the right educators quickly while maintaining academic quality and reliability.',
  valueProps: [
    'Verified educator network across India',
    'Structured recruitment and screening process',
    'Flexible hiring models for institutions',
    'Fast and reliable teacher placement',
  ],
  primaryCta: { label: 'Hire Teachers', href: '#hire-teachers' },
  secondaryCta: { label: 'Talk to a Recruiter', href: '#talk-to-recruiter' },
}

export const institutionsHeroHighlights = [
  { iconMdi: 'mdi:earth', label: 'Pan-India Network' },
  { iconMdi: 'mdi:shield-check-outline', label: 'Pre-Screened Educators' },
  { iconMdi: 'mdi:account-check-outline', label: 'Background Verified' },
  { iconMdi: 'mdi:clock-fast', label: 'Fast Placement' },
]

export const institutionsFinalCta = {
  badge: 'Let\u2019s Build Your Academic Team',
  title: 'Hire Verified Teachers for Academic Excellence',
  description:
    'If your institution is looking to recruit qualified teachers or build a strong faculty team, Indian Mentors is ready to support your hiring needs.',
  primaryCta: { label: 'Hire Teachers', href: 'mailto:info@indianmentors.in?subject=Teacher%20Recruitment%20Enquiry' },
  secondaryCta: { label: 'Talk to a Recruiter', href: 'tel:+917389563564' },
  tertiaryCta: { label: 'WhatsApp Us', href: 'https://wa.me/917389563564' },
  closing: 'Indian Mentors \u2014 Empowering Institutions with Quality Educators',
}

export const whyInstitutionsSection = {
  badge: 'Why Indian Mentors',
  title: 'Why institutions <span class="text-gradient-brand">choose us</span>',
  description:
    'Educational organizations across India trust Indian Mentors for structured and reliable teacher recruitment solutions.',
  classes: '!px-0 !py-0',
}

export const reliabilitySection = {
  badge: 'Quality Assurance',
  title: 'What makes our recruitment <span class="text-gradient-brand">reliable?</span>',
  description:
    'Our teacher recruitment services are built around quality assurance, verification, and efficiency.',
  classes: '!px-0 !py-0',
}

export const sectorsSection = {
  badge: 'Hire Teachers For',
  title: 'Faculty recruitment for <span class="text-gradient-brand">every education sector</span>',
  description:
    'Indian Mentors supports structured faculty recruitment for multiple education sectors and learning organizations.',
  classes: '!px-0 !py-0',
}

export const institutionsProcessSection = {
  badge: 'Our Hiring Process',
  title: 'A structured framework, <span class="text-gradient-brand">step by step</span>',
  description:
    'Indian Mentors follows a structured recruitment framework designed to deliver qualified educators efficiently.',
  classes: '!px-0 !py-0',
}

export const institutionsQuickLinks = [
  {
    id: 'hire-for',
    iconMdi: 'mdi:office-building-outline',
    title: 'Hire Teachers For',
    href: '#hire-teachers-for',
  },
  {
    id: 'reliability',
    iconMdi: 'mdi:shield-check-outline',
    title: 'Why It\u2019s Reliable',
    href: '#recruitment-reliability',
  },
  {
    id: 'process',
    iconMdi: 'mdi:clipboard-flow-outline',
    title: 'Hiring Process',
    href: '#hiring-process',
  },
  {
    id: 'why-us',
    iconMdi: 'mdi:handshake-outline',
    title: 'Why Indian Mentors',
    href: '#why-institutions',
  },
  {
    id: 'collaboration',
    iconMdi: 'mdi:school-outline',
    title: 'Institutional Support',
    href: '#institutional-support',
  },
]

export const hiringSectors: HiringSector[] = [
  {
    id: 'coaching-institutes',
    iconMdi: 'mdi:trophy-outline',
    title: 'Coaching Institutes',
    description:
      'Recruit subject experts for competitive exam preparation and academic coaching programs.',
    rolesLabel: 'Faculty support includes',
    roles: [
      'Board exam preparation',
      'NEET coaching faculty',
      'IIT-JEE preparation experts',
      'CUET entrance mentors',
      'Olympiad trainers',
      'Foundation course instructors',
    ],
    note: 'These educators bring deep subject expertise and exam-oriented teaching experience.',
    accent: 'amber',
  },
  {
    id: 'schools',
    iconMdi: 'mdi:school-outline',
    title: 'Schools',
    description:
      'Indian Mentors helps schools recruit qualified teachers across primary, middle, and senior secondary levels.',
    rolesLabel: 'Teacher categories include',
    roles: [
      'PRT (Primary Teachers)',
      'TGT (Trained Graduate Teachers)',
      'PGT (Post Graduate Teachers)',
    ],
    extraLabel: 'We support recruitment for',
    extras: [
      'CBSE schools',
      'ICSE schools',
      'State board institutions',
      'International curriculum schools',
    ],
    note: 'Our process ensures schools receive teachers aligned with their curriculum and classroom expectations.',
    accent: 'blue',
  },
  {
    id: 'colleges',
    iconMdi: 'mdi:town-hall',
    title: 'Colleges & Higher Education',
    description:
      'For colleges and universities, Indian Mentors provides recruitment support for academic faculty and department-level teaching roles.',
    rolesLabel: 'Faculty recruitment includes',
    roles: [
      'Assistant Professors',
      'Subject Lecturers',
      'Visiting Faculty',
      'Academic Coordinators',
      'Departmental Faculty Members',
    ],
    note: 'This enables institutions to maintain strong academic departments and structured higher education programs.',
    accent: 'violet',
  },
  {
    id: 'edtech',
    iconMdi: 'mdi:laptop-account',
    title: 'EdTech Companies',
    description:
      'As online education expands, Indian Mentors helps EdTech platforms build reliable teaching teams for digital learning programs.',
    rolesLabel: 'Roles include',
    roles: [
      'Online instructors',
      'Subject tutors',
      'Doubt-solving mentors',
      'Curriculum content creators',
      'Digital classroom educators',
    ],
    note: 'These professionals support high-quality online learning and remote academic delivery.',
    accent: 'emerald',
  },
  {
    id: 'corporate',
    iconMdi: 'mdi:briefcase-outline',
    title: 'Corporate Academic Programs',
    description:
      'Indian Mentors also provides trainers for corporate training initiatives and professional development programs.',
    rolesLabel: 'Trainer categories include',
    roles: [
      'Skill development trainers',
      'Language instructors',
      'Professional certification mentors',
      'Soft skills trainers',
      'Academic program facilitators',
    ],
    note: 'This helps organizations deliver structured learning and professional education programs.',
    accent: 'rose',
  },
]

export const reliabilityPillars: ReliabilityPillar[] = [
  {
    id: 'verified-database',
    iconMdi: 'mdi:database-check-outline',
    title: 'Pre-Verified Teacher Database',
    description:
      'Indian Mentors maintains a large and continuously expanding database of screened teachers. Each candidate undergoes evaluation including:',
    points: [
      'Qualification verification',
      'Subject expertise assessment',
      'Teaching experience review',
      'Communication and teaching ability evaluation',
    ],
    footnote: 'This ensures institutions receive credible and capable educators.',
  },
  {
    id: 'bulk-recruitment',
    iconMdi: 'mdi:account-group-outline',
    title: 'Bulk Recruitment Support',
    description:
      'Institutions often require multiple teachers for new academic sessions or branch expansions. We manage large-scale faculty recruitment drives for:',
    points: [
      'School expansion',
      'New academic session hiring',
      'Coaching institute batch launches',
      'Multi-subject faculty requirements',
    ],
    footnote: 'Our system ensures efficient recruitment at scale.',
  },
  {
    id: 'interview-coordination',
    iconMdi: 'mdi:account-tie-voice-outline',
    title: 'Interview & Demo Class Coordination',
    description:
      'To simplify hiring, our team manages interview scheduling and demo session coordination. Institutions can evaluate candidates through:',
    points: [
      'Academic interviews',
      'Demo teaching sessions',
      'Subject expertise assessments',
      'Classroom communication evaluation',
    ],
  },
  {
    id: 'background-verification',
    iconMdi: 'mdi:shield-account-outline',
    title: 'Background Verification',
    description:
      'To maintain safety and credibility, Indian Mentors conducts structured background and credential verification, including:',
    points: [
      'Academic certificate validation',
      'Identity verification',
      'Teaching experience confirmation',
    ],
    footnote: 'This process ensures trusted academic professionals.',
  },
  {
    id: 'contract-staffing',
    iconMdi: 'mdi:file-sign',
    title: 'Contract Staffing Support',
    description:
      'Institutions often require flexible staffing solutions. Indian Mentors supports hiring models including:',
    points: [
      'Full-time faculty recruitment',
      'Visiting faculty placements',
      'Contract-based teachers',
      'Short-term academic staffing',
      'Substitute teacher support',
    ],
    footnote: 'This flexibility allows institutions to adapt staffing to academic needs.',
  },
]

export const hiringSteps: HiringStep[] = [
  {
    step: 1,
    iconMdi: 'mdi:clipboard-text-search-outline',
    title: 'Requirement Analysis',
    description:
      'Understanding institutional needs, subject requirements, and hiring timelines.',
  },
  {
    step: 2,
    iconMdi: 'mdi:account-search-outline',
    title: 'Teacher Sourcing',
    description:
      'Candidate identification through our database, educator networks, outreach campaigns, and referrals.',
  },
  {
    step: 3,
    iconMdi: 'mdi:filter-check-outline',
    title: 'Screening & Shortlisting',
    description:
      'Qualification verification, demo class review, HR evaluation, and background checks.',
  },
  {
    step: 4,
    iconMdi: 'mdi:account-check-outline',
    title: 'Interview & Selection',
    description:
      'Final interviews conducted by the institution with shortlisted candidates.',
  },
  {
    step: 5,
    iconMdi: 'mdi:rocket-launch-outline',
    title: 'Onboarding & Support',
    description:
      'Joining coordination, documentation assistance, and replacement support if required.',
  },
]

export const hiringProcessOutcome =
  'This process helps institutions reduce hiring time, improve candidate quality, and ensure academic alignment.'

export const whyChooseAdvantages = [
  { iconMdi: 'mdi:earth', label: 'Large nationwide educator network' },
  { iconMdi: 'mdi:magnify-scan', label: 'Subject-specific screening processes' },
  { iconMdi: 'mdi:clock-fast', label: 'Quick turnaround time' },
  { iconMdi: 'mdi:message-text-outline', label: 'Transparent communication' },
  { iconMdi: 'mdi:headset', label: 'Dedicated recruitment support team' },
  { iconMdi: 'mdi:cash-check', label: 'Cost-effective hiring solutions' },
]

export const institutionalSupport = {
  title: 'Schools & Institutions — Structured Academic Collaboration',
  description:
    'Beyond recruitment, Indian Mentors collaborates with educational institutions to strengthen academic systems and faculty development programs.',
  items: [
    { iconMdi: 'mdi:account-multiple-plus-outline', label: 'Bulk faculty hiring programs' },
    { iconMdi: 'mdi:star-circle-outline', label: 'Subject specialist onboarding' },
    { iconMdi: 'mdi:presentation', label: 'Academic training workshops' },
    { iconMdi: 'mdi:medal-outline', label: 'Competitive exam support programs' },
    { iconMdi: 'mdi:chart-box-outline', label: 'Academic quality audit & monitoring systems' },
  ],
  closing:
    'Through these services, we help institutions maintain academic excellence with dependable teaching professionals and structured support systems.',
}
