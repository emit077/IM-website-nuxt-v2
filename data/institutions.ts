export const INSTITUTIONS_EMAIL = 'info@indianmentors.in'
export const INSTITUTIONS_PHONE_TEL = '+917389563564'
export const INSTITUTIONS_WHATSAPP = 'https://wa.me/917389563564'

export function institutionRequirementMailto() {
  return `mailto:${INSTITUTIONS_EMAIL}?subject=${encodeURIComponent('Teacher Recruitment Requirement — Indian Mentors')}`
}

export function institutionConsultMailto() {
  return `mailto:${INSTITUTIONS_EMAIL}?subject=${encodeURIComponent('Institutional Recruitment Consultation — Indian Mentors')}`
}

export function institutionPartnerMailto() {
  return `mailto:${INSTITUTIONS_EMAIL}?subject=${encodeURIComponent('Institutional Partnership — Indian Mentors')}`
}

export type InstitutionAccent = 'blue' | 'emerald' | 'amber' | 'violet' | 'indigo' | 'rose' | 'teal'

export const institutionsHero = {
  badge: 'Our Teacher Recruitment Services',
  title: 'Build Strong Academic Teams. <span class="text-gradient-brand">Hire With Confidence.</span>',
  subtitle:
    '<span class="text-gradient-brand">Indian Mentors</span> — Institutional Teacher Recruitment & Academic Staffing',
  description:
    'The Institutional Hiring Division helps schools, coaching institutes, colleges, universities, EdTech companies, and other learning organisations recruit qualified, verified, and curriculum-aligned teaching professionals across India. From one critical faculty requirement to large-scale academic staffing, we support the complete hiring journey.',
  caption: 'Qualified Educators. Structured Recruitment. Reliable Academic Staffing.',
  backgroundImage: 'assets/img/hero/hero-2.png',
  contentClass: '!px-0 !py-0 max-w-2xl lg:max-w-[46rem]',
  primaryCta: { label: 'Hire Teachers', href: '#hire-teachers' },
  secondaryCta: { label: 'Talk to a Recruitment Specialist', href: '#talk-to-recruiter' },
} as const

export const institutionsHeroStats = [
  { value: 'Pan-India', label: 'Educator Network', icon: 'solar:global-bold-duotone' },
  { value: 'Structured', label: 'Screening', icon: 'solar:user-speak-bold-duotone' },
  { value: 'Bulk', label: 'Faculty Hiring', icon: 'solar:users-group-two-rounded-bold-duotone' },
  { value: 'Flexible', label: 'Staffing Models', icon: 'solar:widget-5-bold-duotone' },
]

export const institutionsMissionSection = {
  badge: 'Our Mission',
  title: 'A trusted academic staffing partner <span class="text-gradient-brand">across India</span>',
  description:
    'Indian Mentors aims to become a trusted academic staffing partner for educational institutions by providing reliable recruitment support and promoting high standards of teaching.',
  classes: '!px-0 !py-0',
  closing:
    'We strive to create a sustainable bridge between educators and institutions, supporting both academic growth and professional opportunities.',
} as const

export const institutionsMissionGoals = [
  {
    id: 'qualified-hiring',
    iconMdi: 'mdi:account-outline',
    title: 'Qualified hiring',
    description: 'Support hiring of teaching staff across all academic roles.',
  },
  {
    id: 'screened-quality',
    iconMdi: 'mdi:shield-check-outline',
    title: 'Screened quality',
    description: 'Screen and evaluate teachers before they join your institution.',
  },
  {
    id: 'faster-timelines',
    iconMdi: 'mdi:timer-outline',
    title: 'Faster timelines',
    description: 'Speed up hiring with an organised teacher database and process.',
  },
  {
    id: 'long-term-partnership',
    iconMdi: 'mdi:handshake-outline',
    title: 'Long-term partnership',
    description: 'Stay supported with ongoing recruitment, replacement, and staffing help.',
  },
  {
    id: 'national-network',
    iconMdi: 'mdi:earth',
    title: 'National network',
    description: 'Access verified educators from a pan-India teaching network.',
  },
] as const

export const glanceSection = {
  badge: 'A Smarter Way to Build Your Faculty',
  title: 'Your academic team starts with the <span class="text-gradient-brand">right people</span>',
  description:
    'Finding the right teacher is more than filling a vacancy. Institutions need educators who combine subject expertise, teaching ability, experience, communication, and reliability. Indian Mentors brings these requirements together through a structured recruitment and academic staffing framework.',
  classes: '!px-0 !py-0',
  closing: 'Subject Expertise + Teaching Ability + Experience + Communication + Reliability',
} as const

export const glanceItems = [
  { no: '01', iconMdi: 'mdi:earth', title: 'Nationwide Educator Network' },
  { no: '02', iconMdi: 'mdi:filter-check-outline', title: 'Structured Candidate Screening' },
  { no: '03', iconMdi: 'mdi:book-open-variant-outline', title: 'Subject & Curriculum Matching' },
  { no: '04', iconMdi: 'mdi:presentation', title: 'Interview & Demo Coordination' },
  { no: '05', iconMdi: 'mdi:tune-variant', title: 'Flexible Staffing Models' },
  { no: '06', iconMdi: 'mdi:account-sync-outline', title: 'Joining & Replacement Support' },
] as const

export const sectorsSection = {
  badge: 'Who We Help',
  title: 'Recruitment solutions for every <span class="text-gradient-brand">learning environment</span>',
  description:
    'Whether you are running a school, coaching centre, college, EdTech platform, or specialised learning program, Indian Mentors can help you build the right teaching team.',
  classes: '!px-0 !py-0',
} as const

export const hiringSectors = [
  {
    id: 'schools',
    iconMdi: 'mdi:school-outline',
    title: 'Schools',
    subtitle: 'Primary, middle & senior secondary',
    description: 'PRT, TGT, PGT and subject specialists for primary to senior secondary classrooms.',
    extraLabel: 'Boards supported',
    extras: ['CBSE', 'ICSE', 'State Boards', 'IB / IGCSE'],
    image: '/assets/img/institutions/institutions-schools.png',
    cta: { label: 'Recruit School Teachers', href: '#hire-teachers' },
    accent: 'blue' as const,
  },
  {
    id: 'coaching',
    iconMdi: 'mdi:trophy-outline',
    title: 'Coaching Institutes',
    subtitle: 'Academic & competitive programmes',
    description: 'Experienced faculty for academic coaching and competitive exam programmes.',
    extraLabel: 'Faculty categories',
    extras: ['JEE', 'NEET', 'CUET', 'Foundation', 'Olympiad'],
    image: '/assets/img/institutions/institutions-coaching.png',
    cta: { label: 'Hire Coaching Faculty', href: '#hire-teachers' },
    accent: 'amber' as const,
  },
  {
    id: 'colleges',
    iconMdi: 'mdi:town-hall',
    title: 'Colleges & Universities',
    subtitle: 'Higher education staffing',
    description: 'Faculty staffing for colleges, universities, and specialised academic departments.',
    extraLabel: 'Roles',
    extras: ['Professors', 'Lecturers', 'Visiting Faculty', 'Coordinators'],
    image: '/assets/img/institutions/institutions-colleges-campus.png',
    cta: { label: 'Recruit Higher-Education Faculty', href: '#hire-teachers' },
    accent: 'violet' as const,
  },
  {
    id: 'edtech',
    iconMdi: 'mdi:laptop-account',
    title: 'EdTech & Online Learning',
    subtitle: 'Digital teaching teams',
    description: 'Build reliable digital teaching teams for online and hybrid programmes.',
    extraLabel: 'Roles',
    extras: ['Online Teachers', 'Subject Experts', 'Doubt Solvers'],
    image: '/assets/img/institutions/institutions-edtech.png',
    cta: { label: 'Build an EdTech Teaching Team', href: '#hire-teachers' },
    accent: 'emerald' as const,
  },
  {
    id: 'corporate',
    iconMdi: 'mdi:office-building-outline',
    title: 'Corporate Learning Programs',
    subtitle: 'Trainers & professional development',
    description: 'Trainers for structured learning and professional development programmes.',
    extraLabel: 'Roles',
    extras: ['Skill Trainers', 'Language Trainers', 'Soft Skills'],
    image: '/assets/img/institutions/institutions-corporate.png',
    cta: { label: 'Hire Trainers', href: '#hire-teachers' },
    accent: 'indigo' as const,
  },
  {
    id: 'other-needs',
    iconMdi: 'mdi:puzzle-outline',
    title: 'Other Academic Needs',
    subtitle: 'Specialised & enrichment roles',
    description: 'Specialised educators for enrichment, languages, and student support roles.',
    extraLabel: 'Roles',
    extras: ['Special Educators', 'Languages', 'Activity Teachers', 'Vocational'],
    image: '/assets/img/institutions/institutions-other-needs.png',
    cta: { label: 'Share Other Requirements', href: '#hire-teachers' },
    accent: 'rose' as const,
  },
] as const

export const hireCategoriesSection = {
  badge: 'What Can We Help You Hire?',
  title: 'From one teacher to an <span class="text-gradient-brand">entire faculty team</span>',
  description: 'Our recruitment network can support institutions across multiple academic categories.',
  classes: '!px-0 !py-0',
  cta: { label: 'Submit Faculty Requirement', href: '#hire-teachers' },
} as const

export const hireCategories = [
  {
    id: 'school-faculty',
    iconMdi: 'mdi:school-outline',
    title: 'School Faculty',
    roles: [
      'Primary Teachers',
      'Trained Graduate Teachers',
      'Post Graduate Teachers',
      'Subject Specialists',
      'Academic Coordinators',
      'Special Educators',
      'Activity & Enrichment Teachers',
    ],
  },
  {
    id: 'competitive',
    iconMdi: 'mdi:trophy-outline',
    title: 'Competitive Examination Faculty',
    roles: ['JEE Faculty', 'NEET Faculty', 'CUET Faculty', 'Foundation Faculty', 'Olympiad Trainers', 'Board Examination Experts'],
  },
  {
    id: 'higher-ed',
    iconMdi: 'mdi:town-hall',
    title: 'Higher Education',
    roles: [
      'Assistant Professors',
      'Lecturers',
      'Visiting Faculty',
      'Department Faculty',
      'Academic Coordinators',
      'Subject Experts',
    ],
  },
  {
    id: 'digital',
    iconMdi: 'mdi:monitor-account',
    title: 'Digital Education',
    roles: [
      'Online Instructors',
      'Doubt-Solving Mentors',
      'Subject Experts',
      'Digital Classroom Teachers',
      'Curriculum Contributors',
      'Content Educators',
    ],
  },
] as const

export const staffingModelsSection = {
  badge: 'Flexible Academic Staffing Solutions',
  title: 'One recruitment partner. <span class="text-gradient-brand">Multiple staffing needs.</span>',
  description:
    'Different institutions have different workforce requirements. Indian Mentors provides recruitment support for every hiring model.',
  classes: '!px-0 !py-0',
  panelKicker: 'One partner. Every hiring model.',
  panelTitle: 'Hire the way your campus actually works.',
  panelNote: 'From a single specialist to a full faculty team — tell us the model, we handle the matching.',
  spectrum: ['Permanent', 'Flexible', 'Scale'],
  cta: { label: 'Share your staffing need', href: '#hire-teachers' },
} as const

export const staffingModelGroups = [
  {
    id: 'core',
    kicker: 'Core faculty',
    title: 'Permanent teams',
  },
  {
    id: 'specialist',
    kicker: 'Specialist support',
    title: 'Flexible hours',
  },
  {
    id: 'coverage',
    kicker: 'Coverage & scale',
    title: 'Fill gaps. Expand.',
  },
] as const

export const staffingModels = [
  {
    id: 'full-time',
    group: 'core',
    iconMdi: 'mdi:account-tie-outline',
    title: 'Full-Time Faculty',
    fit: 'Year-round roles',
    description: 'For institutions building a permanent academic team for the year.',
    accent: 'blue' as const,
  },
  {
    id: 'part-time',
    group: 'specialist',
    iconMdi: 'mdi:clock-outline',
    title: 'Part-Time Faculty',
    fit: 'Limited hours',
    description: 'For specialised or limited-hour teaching support without a full-time hire.',
    accent: 'blue' as const,
  },
  {
    id: 'visiting',
    group: 'specialist',
    iconMdi: 'mdi:account-arrow-right-outline',
    title: 'Visiting Faculty',
    fit: 'Guest programmes',
    description: 'For guest lecturers and subject specialists on academic programmes.',
    accent: 'blue' as const,
  },
  {
    id: 'contract',
    group: 'core',
    iconMdi: 'mdi:file-sign',
    title: 'Contract Faculty',
    fit: 'Fixed tenure',
    description: 'For time-bound academic roles with a fixed contract period.',
    accent: 'blue' as const,
  },
  {
    id: 'temporary',
    group: 'coverage',
    iconMdi: 'mdi:account-switch-outline',
    title: 'Temporary / Substitute Teachers',
    fit: 'Immediate cover',
    description: 'For short-term vacancies and faculty cover until a permanent teacher joins.',
    accent: 'blue' as const,
  },
  {
    id: 'bulk',
    group: 'coverage',
    iconMdi: 'mdi:account-multiple-plus-outline',
    title: 'Bulk Faculty Recruitment',
    fit: 'Campus-scale hiring',
    description: 'For new branches, sessions, and campus-wide hiring campaigns.',
    accent: 'blue' as const,
  },
] as const

export const whyInstitutionsSection = {
  badge: 'Why Institutions Partner With Indian Mentors',
  title: 'Recruitment built around <span class="text-gradient-brand">academic quality</span>',
  description:
    'Hiring speed matters — but the right fit matters more. Our recruitment approach focuses on both candidate quality and institutional requirements.',
  classes: '!px-0 !py-0',
} as const

export const whyChooseReasons = [
  {
    id: 'verified',
    iconMdi: 'mdi:shield-check-outline',
    title: 'Verified Educator Network',
    description: 'Access a growing network of teachers and academic professionals across India.',
    accent: 'blue' as const,
  },
  {
    id: 'matching',
    iconMdi: 'mdi:target-account',
    title: 'Requirement-Based Matching',
    description:
      'Candidates are shortlisted according to subject, qualification, experience, curriculum, location, teaching format, and institutional requirements.',
    accent: 'indigo' as const,
  },
  {
    id: 'screening',
    iconMdi: 'mdi:clipboard-check-outline',
    title: 'Structured Screening',
    description:
      'Candidates can be evaluated through qualification checks, experience review, communication assessment, and teaching demonstrations.',
    accent: 'emerald' as const,
  },
  {
    id: 'faster',
    iconMdi: 'mdi:clock-fast',
    title: 'Faster Recruitment',
    description: 'Our recruitment team helps institutions reduce the time required to identify and shortlist suitable candidates.',
    accent: 'amber' as const,
  },
  {
    id: 'scalable',
    iconMdi: 'mdi:chart-timeline-variant',
    title: 'Scalable Hiring',
    description: 'From one vacancy to multiple departments, our recruitment framework can scale with institutional requirements.',
    accent: 'violet' as const,
  },
  {
    id: 'support',
    iconMdi: 'mdi:handshake-outline',
    title: 'Continued Support',
    description:
      'Our relationship does not necessarily end at candidate selection. We can assist with joining coordination and replacement requirements.',
    accent: 'teal' as const,
  },
] as const

export const differenceSection = {
  badge: 'The Indian Mentors Difference',
  title: 'More than <span class="text-gradient-brand">candidate sourcing</span>',
  description: 'Traditional recruitment often focuses on simply filling vacancies. Indian Mentors takes a more academic-first approach.',
  objective: 'Better alignment between the institution, the educator, and the academic requirement.',
  flow: [
    'Institution Requirement',
    'Academic Role Definition',
    'Candidate Sourcing',
    'Qualification Screening',
    'Subject & Experience Matching',
    'Demo / Interview',
    'Institutional Selection',
    'Joining',
    'Academic Staffing Support',
  ],
} as const

export const institutionsProcessSection = {
  badge: 'Our Recruitment Framework',
  title: 'From requirement to <span class="text-gradient-brand">classroom</span>',
  description: 'A structured six-stage recruitment process that keeps institutions in control of the final decision.',
  classes: '!px-0 !py-0',
  image: '/assets/img/careers/hiring-process.png',
  imageAlt: 'Recruitment specialists coordinating institutional faculty hiring',
  imageCaption: 'Guided hiring support',
  imageNote: 'From requirement to classroom — with your institution in control.',
} as const

export const hiringSteps = [
  {
    step: 1,
    no: '01',
    iconMdi: 'mdi:clipboard-text-search-outline',
    title: 'Understand',
    subtitle: 'Requirement Analysis',
    description: 'We map your institution, subjects, curriculum, and hiring timeline.',
    items: ['Institution profile', 'Subjects & curriculum', 'Faculty profile', 'Location & format', 'Hiring timeline'],
    accent: 'blue' as const,
  },
  {
    step: 2,
    no: '02',
    iconMdi: 'mdi:account-search-outline',
    title: 'Source',
    subtitle: 'Candidate Identification',
    description: 'We identify educators through our network, database, and outreach.',
    items: ['Educator network', 'Database search', 'Outreach', 'Referrals', 'Targeted sourcing'],
    accent: 'indigo' as const,
  },
  {
    step: 3,
    no: '03',
    iconMdi: 'mdi:filter-check-outline',
    title: 'Screen',
    subtitle: 'Qualification & Profile Screening',
    description: 'We assess qualification, subject expertise, and teaching ability.',
    items: ['Qualification', 'Experience', 'Subject expertise', 'Communication', 'Teaching ability', 'Professional profile'],
    accent: 'violet' as const,
  },
  {
    step: 4,
    no: '04',
    iconMdi: 'mdi:presentation',
    title: 'Evaluate',
    subtitle: 'Interview & Demo Coordination',
    description: 'Shortlisted candidates are presented for interviews and demo classes.',
    items: ['HR interview', 'Academic interview', 'Demo class', 'Subject assessment', 'Communication assessment'],
    accent: 'emerald' as const,
  },
  {
    step: 5,
    no: '05',
    iconMdi: 'mdi:account-check-outline',
    title: 'Select',
    subtitle: 'Institution-Led Final Selection',
    description: 'Your institution reviews candidates and makes the final hiring decision.',
    items: ['Institution decision', 'Coordinated communication', 'Selection support'],
    accent: 'amber' as const,
  },
  {
    step: 6,
    no: '06',
    iconMdi: 'mdi:handshake-outline',
    title: 'Join',
    subtitle: 'Onboarding & Post-Placement Support',
    description: 'We coordinate joining, documentation, and replacement support.',
    items: ['Joining coordination', 'Documentation', 'Communication', 'Replacement support'],
    accent: 'teal' as const,
  },
] as const

export const hiringProcessOutcome =
  'The institution retains the final hiring decision. We coordinate every step from requirement to classroom.'

export const bulkHiringSection = {
  badge: 'Bulk Faculty Recruitment',
  title: 'Building a new campus or expanding your <span class="text-gradient-brand">academic team?</span>',
  description:
    'Large-scale recruitment requires a different approach. Indian Mentors can support institutions with coordinated faculty hiring campaigns.',
  classes: '!px-0 !py-0',
  cases: [
    'New school launches',
    'New coaching branches',
    'New academic sessions',
    'Campus expansions',
    'New subject departments',
    'Competitive-exam batches',
    'Multi-location staffing',
    'Faculty replacement drives',
  ],
  workflowLabel: 'Bulk hiring workflow',
  workflow: [
    'Requirement Collection',
    'Hiring Plan',
    'Candidate Sourcing',
    'Screening',
    'Shortlisting',
    'Interview Coordination',
    'Selection',
    'Joining',
  ],
  cta: { label: 'Discuss Bulk Hiring', href: '#hire-teachers' },
} as const

export const staffingSupportSection = {
  badge: 'Academic Staffing Support',
  title: 'New institutions, expansion, and <span class="text-gradient-brand">replacement</span>',
  description: 'A new institution needs more than infrastructure. Vacancies should not disrupt learning. We support both launch and continuity.',
  classes: '!px-0 !py-0',
} as const

export const staffingSupportCards = [
  {
    id: 'new-institutions',
    iconMdi: 'mdi:office-building-plus-outline',
    title: 'Starting a New Educational Venture?',
    description:
      'Indian Mentors can support new and expanding institutions with recruitment across academic leadership, subject faculty, coordinators, trainers, and support educators.',
    itemsLabel: 'New institution staffing support',
    items: [
      'Faculty planning',
      'Subject-wise recruitment',
      'Department-level hiring',
      'Bulk candidate sourcing',
      'Interview coordination',
      'Joining support',
      'Replacement support',
    ],
    note: 'Build your academic team before your classrooms open.',
    cta: { label: 'Plan Faculty Hiring', href: '#hire-teachers' },
    accent: 'blue' as const,
  },
  {
    id: 'replacement',
    iconMdi: 'mdi:account-sync-outline',
    title: 'Vacancies Shouldn’t Disrupt Learning',
    description:
      'Unexpected teacher departures can affect students, schedules, and academic continuity. We help institutions address faculty vacancies through replacement and short-term staffing support, subject to candidate availability and institutional requirements.',
    itemsLabel: 'Suitable for',
    items: [
      'Sudden faculty resignation',
      'Leave replacement',
      'New batch requirements',
      'Subject vacancy',
      'Temporary staffing gaps',
      'Academic session transitions',
    ],
    note: 'Need a replacement teacher? Request faculty support.',
    cta: { label: 'Request Faculty Support', href: '#hire-teachers' },
    accent: 'amber' as const,
  },
] as const

export const qualitySection = {
  badge: 'Quality Assurance',
  title: 'A structured approach to <span class="text-gradient-brand">educator verification</span>',
  description: 'Academic recruitment requires trust. Our screening framework may include the following checks, depending on the role and hiring model.',
  classes: '!px-0 !py-0',
  disclaimer:
    'Verification and screening requirements may vary according to the role, institution, subject, and hiring model.',
} as const

export const qualityChecks = [
  { iconMdi: 'mdi:card-account-details-outline', title: 'Identity Verification', description: 'Basic identity and profile verification.' },
  { iconMdi: 'mdi:certificate-outline', title: 'Qualification Review', description: 'Review of relevant educational qualifications and submitted credentials.' },
  { iconMdi: 'mdi:briefcase-check-outline', title: 'Experience Assessment', description: 'Evaluation of teaching experience and relevant academic background.' },
  { iconMdi: 'mdi:book-check-outline', title: 'Subject Expertise', description: 'Assessment based on the requirements of the role.' },
  { iconMdi: 'mdi:forum-outline', title: 'Communication Evaluation', description: 'Review of communication and interaction capabilities.' },
  { iconMdi: 'mdi:presentation', title: 'Teaching Demonstration', description: 'Where applicable, candidates may be evaluated through demo teaching.' },
] as const

export const matchingSection = {
  badge: 'How Matching Works',
  title: 'Institution → Requirement → <span class="text-gradient-brand">Right Educator</span>',
  description:
    'Rather than presenting institutions with an undifferentiated list of teachers, our recruitment approach focuses on requirement-based matching.',
  steps: [
    { title: 'Your Requirement', detail: 'Class + Subject + Curriculum + Experience + Location + Mode' },
    { title: 'Candidate Matching', detail: 'Qualification + Subject Expertise + Experience + Teaching Ability' },
    { title: 'Shortlist', detail: 'Relevant educators aligned to the role' },
    { title: 'Institutional Evaluation', detail: 'Interview + Demo + Assessment' },
    { title: 'Selection', detail: 'The institution’s final decision' },
  ],
} as const

export const requirementsSection = {
  badge: 'Recruitment by Academic Requirement',
  title: 'Tell us what you need. <span class="text-gradient-brand">We help build the team.</span>',
  description: 'Institutions may require teachers based on different criteria.',
  classes: '!px-0 !py-0',
  groups: [
    {
      title: 'By Subject',
      items: [
        'Mathematics',
        'Science',
        'Physics',
        'Chemistry',
        'Biology',
        'English',
        'Social Science',
        'Commerce',
        'Computer Science',
        'Languages',
        'Humanities',
      ],
    },
    { title: 'By Curriculum', items: ['CBSE', 'ICSE', 'State Boards', 'IB', 'IGCSE', 'International Curricula'] },
    { title: 'By Level', items: ['Primary', 'Middle School', 'Secondary', 'Senior Secondary', 'Undergraduate', 'Postgraduate'] },
    { title: 'By Teaching Mode', items: ['Classroom', 'Online', 'Hybrid', 'Residential', 'Visiting'] },
    { title: 'By Experience', items: ['Fresh Graduates', 'Experienced Teachers', 'Senior Faculty', 'Subject Specialists'] },
    { title: 'By Hiring Scale', items: ['Single Position', 'Department Hiring', 'Batch Hiring', 'Campus Hiring', 'Bulk Recruitment'] },
  ],
} as const

export const techSection = {
  badge: 'Technology-Enabled Recruitment',
  title: 'Recruitment supported by <span class="text-gradient-brand">structured systems</span>',
  description:
    'Indian Mentors combines its educator network with structured digital processes to support recruitment coordination.',
  classes: '!px-0 !py-0',
  workflow: ['Requirement', 'Candidate', 'Shortlist', 'Interview', 'Selection', 'Onboarding'],
} as const

export const techFeatures = [
  { iconMdi: 'mdi:clipboard-list-outline', title: 'Requirement Tracking', description: 'Track open faculty requirements and recruitment status.' },
  { iconMdi: 'mdi:database-outline', title: 'Candidate Database', description: 'Maintain organised educator profiles and recruitment information.' },
  { iconMdi: 'mdi:account-filter-outline', title: 'Shortlisting', description: 'Identify candidates according to defined requirements.' },
  { iconMdi: 'mdi:calendar-account-outline', title: 'Interview Coordination', description: 'Manage communication and interview schedules.' },
  { iconMdi: 'mdi:progress-check', title: 'Status Tracking', description: 'Monitor candidates from sourcing to selection.' },
  { iconMdi: 'mdi:file-document-outline', title: 'Documentation Support', description: 'Coordinate required information during onboarding.' },
] as const

export const ecosystemSection = {
  badge: 'A Connected Academic Recruitment Ecosystem',
  title: 'For institutions. For recruiters. <span class="text-gradient-brand">For educators.</span>',
  description: 'Indian Mentors brings together three important participants in the recruitment process.',
  parties: [
    {
      iconMdi: 'mdi:school-outline',
      title: 'Institutions',
      need: 'Qualified educators',
      provide: 'Recruitment & staffing support',
    },
    {
      iconMdi: 'mdi:account-tie-outline',
      title: 'Educators',
      need: 'Relevant teaching opportunities',
      provide: 'Access to suitable institutional opportunities',
    },
    {
      iconMdi: 'mdi:handshake-outline',
      title: 'Recruitment Team',
      need: 'Connect the right educator with the right requirement',
      provide: 'Efficient and structured recruitment coordination',
    },
  ],
} as const

export const commitmentSection = {
  badge: 'Our Commitment',
  title: 'Quality first. Recruitment with <span class="text-gradient-brand">responsibility.</span>',
  description:
    'Indian Mentors believes that teacher recruitment should not be treated as a simple vacancy-filling exercise. The educator selected for a role can directly influence student learning, classroom culture, academic outcomes, and institutional reputation.',
  focus: ['Relevance', 'Verification', 'Communication', 'Institutional fit'],
} as const

export const institutionsFaqSection = {
  badge: 'Frequently Asked Questions',
  title: 'Institutional teacher recruitment <span class="text-gradient-brand">FAQs</span>',
  classes: '!px-0 !py-0',
} as const

export const institutionsFaqs = [
  {
    id: 'who',
    question: 'What types of institutions can hire through Indian Mentors?',
    answer:
      'We support recruitment requirements for schools, coaching institutes, colleges, universities, EdTech companies, training organisations, and other educational institutions.',
  },
  {
    id: 'bulk',
    question: 'Can you recruit multiple teachers at once?',
    answer:
      'Yes. We can support bulk faculty recruitment based on institutional requirements, subject needs, location, and hiring timelines.',
  },
  {
    id: 'boards',
    question: 'Do you provide teachers for CBSE and ICSE schools?',
    answer:
      'Yes. Recruitment requirements can be structured according to CBSE, ICSE, State Board, and international curriculum requirements.',
  },
  {
    id: 'online',
    question: 'Can institutions hire online teachers?',
    answer:
      'Yes. We can support requirements for online educators, subject experts, doubt-solving mentors, and digital teaching professionals.',
  },
  {
    id: 'temporary',
    question: 'Do you provide temporary teachers?',
    answer:
      'Subject to availability, we can support temporary, contract, visiting, substitute, and short-term academic staffing requirements.',
  },
  {
    id: 'decision',
    question: 'Who makes the final hiring decision?',
    answer: 'The institution retains the final decision regarding candidate selection and appointment.',
  },
  {
    id: 'replacement',
    question: 'Can you help with teacher replacement?',
    answer:
      'Yes. Replacement support can be provided according to the applicable recruitment arrangement and candidate availability.',
  },
  {
    id: 'start',
    question: 'How do institutions start?',
    answer: 'Simply submit your faculty requirement or speak with our recruitment team.',
  },
] as const

export const institutionsFinalCta = {
  badge: 'Ready to Build Your Academic Team?',
  title: "Let's find the educators your institution needs",
  description:
    'Whether you are hiring one teacher, building a new department, launching a coaching batch, opening a new campus, or expanding across multiple locations, Indian Mentors can support your institutional recruitment requirements.',
  closing: 'Indian Mentors — Institutional Hiring Division. Qualified Educators. Structured Recruitment. Stronger Academic Teams.',
  primaryCta: {
    label: 'Hire Teachers',
    href: institutionRequirementMailto(),
  },
  secondaryCta: {
    label: 'Talk to a Recruitment Specialist',
    href: `tel:${INSTITUTIONS_PHONE_TEL}`,
  },
  tertiaryCta: {
    label: 'Submit Faculty Requirement',
    href: INSTITUTIONS_WHATSAPP,
  },
} as const
