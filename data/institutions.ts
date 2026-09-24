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

export function institutionProposalMailto() {
  return `mailto:${INSTITUTIONS_EMAIL}?subject=${encodeURIComponent('Institutional Commercial Proposal — Indian Mentors')}`
}

export type InstitutionAccent = 'blue' | 'emerald' | 'amber' | 'violet' | 'indigo' | 'rose' | 'teal'

export const institutionsHero = {
  badge: 'Our Teacher Recruitment Services',
  title: 'Build Strong Teams.<br><span class="text-gradient-brand">Hire With Confidence.</span>',
  subtitle:
    '<span class="text-gradient-brand">Indian Mentors</span> — Institutional Teacher Recruitment & Academic Staffing',
  description:
    'We help schools, coaching institutes, colleges, and EdTech hire qualified, verified teachers Across the Globe.',
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
  title: 'A trusted academic staffing  <span class="text-gradient-brand">partner Across the Globe</span>',
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

export const sectorsSection = {
  badge: 'Who We Help',
  title: 'Recruitment solutions for  <span class="text-gradient-brand">every learning environment</span>',
  description:
    'Whether you are running a school, coaching centre, college, EdTech platform, or teacher training program, Indian Mentors can help you build the right teaching team.',
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
    id: 'teacher-training',
    iconMdi: 'mdi:human-male-board',
    title: 'Teacher Training Programs',
    subtitle: 'Faculty development & capacity building',
    description: 'Master trainers and facilitators for in-service teacher development and institutional capacity building.',
    extraLabel: 'Programmes',
    extras: ['Pedagogy', 'Classroom Practice', 'Curriculum', 'Mentoring'],
    image: '/assets/img/institutions/institutions-teacher-training-workshop.png',
    cta: { label: 'Hire Training Faculty', href: '#hire-teachers' },
    accent: 'rose' as const,
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
  badge: 'Partner With Indian Mentors',
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
    description:
      'Access a growing network of verified teachers and academic professionals across subjects, boards, and regions in India.',
    accent: 'blue' as const,
  },
  {
    id: 'matching',
    iconMdi: 'mdi:target-account',
    title: 'Requirement-Based Matching',
    description:
      'Candidates are shortlisted by subject, qualification, experience, curriculum, location, teaching format, and institutional needs.',
    accent: 'indigo' as const,
  },
  {
    id: 'screening',
    iconMdi: 'mdi:clipboard-check-outline',
    title: 'Structured Screening',
    description:
      'Candidates are evaluated through qualification checks, experience review, communication, and teaching demonstrations.',
    accent: 'emerald' as const,
  },
  {
    id: 'faster',
    iconMdi: 'mdi:clock-fast',
    title: 'Faster Recruitment',
    description:
      'Our recruitment team helps institutions reduce the time needed to identify, evaluate, and shortlist suitable academic candidates.',
    accent: 'amber' as const,
  },
  {
    id: 'scalable',
    iconMdi: 'mdi:chart-timeline-variant',
    title: 'Scalable Hiring',
    description:
      'From a single vacancy to multiple departments, our recruitment framework scales with growing institutional hiring needs.',
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

export const institutionsProcessSection = {
  badge: 'Recruitment Framework',
  title: 'Our Process From <span class="text-gradient-brand">Requirement to Placement</span>',
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

export const staffingSupportSection = {
  badge: 'Academic Staffing Support',
  title: 'New institutions,  <span class="text-gradient-brand">expansion, replacement</span>',
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
  image: '/assets/img/insights/personalised-learning.png',
  imageAlt: 'Educator reviewing academic material with a learner during a verification-aligned teaching session',
  imageCaption: 'Screened for the classroom',
  imageNote: 'Identity, credentials, subject fit & teaching ability — checked before shortlist.',
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

export const techSection = {
  badge: 'Technology-Enabled Recruitment',
  title: 'Recruitment supported by <span class="text-gradient-brand">structured systems</span>',
  description:
    'Indian Mentors combines its educator network with structured digital processes to support recruitment coordination.',
  classes: '!px-0 !py-0',
  workflow: ['Requirement', 'Candidate', 'Shortlist', 'Interview', 'Selection', 'Onboarding'],
} as const

export const techFeatures = [
  { iconMdi: 'mdi:clipboard-list-outline', title: 'Requirement Tracking', description: 'Track open faculty requirements and current recruitment status.' },
  { iconMdi: 'mdi:database-outline', title: 'Candidate Database', description: 'Maintain organised educator profiles and recruitment information.' },
  { iconMdi: 'mdi:account-filter-outline', title: 'Shortlisting', description: 'Identify and shortlist candidates against defined role requirements.' },
  { iconMdi: 'mdi:calendar-account-outline', title: 'Interview Coordination', description: 'Manage communication, interview schedules, and candidate availability.' },
  { iconMdi: 'mdi:progress-check', title: 'Status Tracking', description: 'Monitor candidates from sourcing and shortlist through to selection.' },
  { iconMdi: 'mdi:file-document-outline', title: 'Documentation Support', description: 'Coordinate documents and required information during onboarding.' },
] as const

export const ecosystemSection = {
  badge: 'A Connected Academic Recruitment Ecosystem',
  title: ' institutions.  <span class="text-gradient-brand">recruiters.  </span>educators.',
  description:
    'The recruitment team sits at the centre of a two-way relationship — receiving faculty needs from institutions and profiles from educators, then matching them back in both directions.',
  classes: '!px-0 !py-0',
  closing:
    'Requirements flow in. Opportunities flow out. The recruitment team coordinates both directions.',
  institutions: {
    iconMdi: 'mdi:school-outline',
    title: 'Institutions',
    need: 'Qualified, curriculum-aligned educators for academic roles',
    provide: 'Structured recruitment and ongoing staffing support',
  },
  hub: {
    iconMdi: 'mdi:handshake-outline',
    title: 'Recruitment Team',
    role: 'Coordinating hub',
    need: 'Connect the right educator with the right requirement',
    provide: 'Efficient and structured recruitment coordination',
  },
  educators: {
    iconMdi: 'mdi:account-tie-outline',
    title: 'Educators',
    need: 'Relevant teaching opportunities matched to their expertise',
    provide: 'Access to suitable institutional teaching opportunities',
  },
  leftFlow: {
    forward: {
      label: 'Faculty requirements',
      detail: 'Institutions share role needs with the recruitment team',
    },
    backward: {
      label: 'Shortlisted educators',
      detail: 'Verified candidates are matched back to institutions',
    },
  },
  rightFlow: {
    forward: {
      label: 'Matched opportunities',
      detail: 'Suitable teaching roles are shared with educators',
    },
    backward: {
      label: 'Educator profiles',
      detail: 'Credentials and availability flow into the recruitment team',
    },
  },
} as const

export const commitmentSection = {
  badge: 'Our Commitment',
  title: 'Quality first. Recruitment with responsibility.',
  description:
    'Indian Mentors believes that teacher recruitment should not be treated as a simple vacancy-filling exercise. The educator selected for a role can directly influence student learning, classroom culture, academic outcomes, and institutional reputation.',
  focus: ['Relevance', 'Verification', 'Communication', 'Institutional fit'],
} as const

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
