export const CAREERS_EMAIL = 'info@indianmentors.in'
export const CAREERS_PHONE_TEL = '+917389563564'

export type CareerAccent = 'blue' | 'emerald' | 'amber' | 'violet' | 'indigo' | 'teal'

export function careerApplyMailto(role?: string) {
  const subject = role
    ? `Career Application — ${role} — Indian Mentors`
    : 'Career Application — Indian Mentors'
  return `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}`
}

export function careerResumeMailto(role?: string) {
  const subject = role
    ? `Resume Submission — ${role} — Indian Mentors`
    : 'Resume Submission — Indian Mentors'
  return `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Please find my resume attached.')}`
}

export const careersHero = {
  badge: 'Careers at Indian Mentors',
  title: 'Build Your Career in a Structured Academic Ecosystem',
  subtitle: 'Purpose, discipline, continuous learning, and measurable contribution.',
  description:
    'As a personalised tutoring services organisation, we are building a professionally managed ecosystem that connects students, parents, tutors, educators, institutions, and academic professionals through structured processes and technology-enabled operations.',
  caption:
    'Whether you are an academic counsellor, tutor recruiter, administrator, HR professional, finance executive, customer support professional, marketer, or technology specialist, your work contributes to a larger purpose — helping create better learning experiences and stronger academic outcomes.',
  promise: 'Build with purpose. Grow with structure. Contribute to education.',
  primaryCta: { label: 'View Open Positions', href: '#open-positions' },
  secondaryCta: { label: 'Submit Your Resume', href: careerResumeMailto() },
} as const

export const careersHeroHighlights = [
  { iconMdi: 'mdi:target', label: 'Purpose' },
  { iconMdi: 'mdi:sitemap-outline', label: 'Structure' },
  { iconMdi: 'mdi:school-outline', label: 'Learning' },
  { iconMdi: 'mdi:trending-up', label: 'Growth' },
  { iconMdi: 'mdi:clipboard-check-outline', label: 'Accountability' },
  { iconMdi: 'mdi:heart-outline', label: 'Impact' },
] as const

export const whyCareersSection = {
  kicker: 'Why Indian Mentors',
  title: 'Why build your career <span class="text-gradient-brand">with Indian Mentors?</span>',
  classes: '!px-0 !py-0',
  description:
    'A growing education organisation needs more than talented people. It needs professionals who understand ownership, accountability, systems, communication, and continuous improvement.',
} as const

export const whyCareerValues = [
  {
    id: 'purpose',
    iconMdi: 'mdi:compass-outline',
    title: 'Purpose',
    description: 'Contribute to better learning experiences and stronger academic outcomes for students and families.',
    accent: 'blue' as const,
  },
  {
    id: 'structure',
    iconMdi: 'mdi:sitemap-outline',
    title: 'Structure',
    description: 'Work within clearly defined roles, responsibilities, and standardised operational processes.',
    accent: 'indigo' as const,
  },
  {
    id: 'learning',
    iconMdi: 'mdi:book-open-page-variant-outline',
    title: 'Learning',
    description: 'Develop specialised professional skills through practical, role-based training and hands-on exposure.',
    accent: 'emerald' as const,
  },
  {
    id: 'growth',
    iconMdi: 'mdi:chart-line',
    title: 'Growth',
    description: 'Grow with an expanding education ecosystem and take on greater responsibility as the organisation scales.',
    accent: 'amber' as const,
  },
  {
    id: 'accountability',
    iconMdi: 'mdi:clipboard-check-outline',
    title: 'Accountability',
    description: 'Own your responsibilities, targets, and outcomes — with clear KPIs and transparent performance reviews.',
    accent: 'violet' as const,
  },
  {
    id: 'impact',
    iconMdi: 'mdi:account-heart-outline',
    title: 'Impact',
    description: 'Every admission, tutor placement, support interaction, and process improvement strengthens academic outcomes.',
    accent: 'teal' as const,
  },
] as const

export const meaningSection = {
  kicker: 'A Career With Meaning',
  title: 'Your work supports a connected learning ecosystem',
  chain: ['Students', 'Parents', 'Tutors', 'Institutions', 'Academic Outcomes'],
  description:
    'Every successful admission, tutor placement, academic intervention, support interaction, and operational improvement contributes to the larger learning ecosystem.',
} as const

export const departmentsSection = {
  kicker: 'Career Opportunities',
  title: 'Explore career opportunities <span class="text-gradient-brand">by department</span>',
  classes: '!px-0 !py-0',
  description:
    'Our teams work across Admissions, Academics, Tutor Recruitment, Operations & Administration, Human Resources, Finance & Accounts, Digital Marketing & Communications, Business Development, Channel Partnerships, and Technology & ERP to deliver structured, personalised, and technology-enabled tutoring services.',
  footer:
    'Every department contributes to one shared objective — delivering personalised, reliable, and professionally managed tutoring services.',
} as const

export const howWeWorkSection = {
  kicker: 'How We Work',
  title: 'A culture where <span class="text-gradient-brand">meaningful contribution</span> matters',
  classes: '!px-0 !py-0',
  description:
    'This approach helps create a culture where activity is not the only measure — meaningful contribution matters.',
} as const

export const howWeWorkSteps = [
  {
    no: '01',
    title: 'Understand',
    description: 'Understand the requirement, responsibility, and expected outcome.',
  },
  {
    no: '02',
    title: 'Plan',
    description: 'Create a structured approach based on organisational processes and priorities.',
  },
  {
    no: '03',
    title: 'Execute',
    description: 'Complete responsibilities with discipline, accuracy, and professional ownership.',
  },
  {
    no: '04',
    title: 'Monitor',
    description: 'Track performance, timelines, quality, and key performance indicators.',
  },
  {
    no: '05',
    title: 'Improve',
    description: 'Identify gaps, learn from outcomes, and continuously improve the process.',
  },
] as const

export const cultureSection = {
  kicker: 'Our Work Culture',
  title: 'Structure with flexibility',
  classes: '!px-0 !py-0',
  description: 'We believe professionals perform better when expectations are clear.',
  expectTitle: 'What you can expect',
  benefitsTitle: 'Workplace benefits',
  expect: [
    {
      iconMdi: 'mdi:account-tie-outline',
      title: 'Clear Roles',
      description: 'Defined responsibilities and reporting structures.',
    },
    {
      iconMdi: 'mdi:file-document-outline',
      title: 'Process Discipline',
      description: 'Standardised workflows and documented procedures.',
    },
    {
      iconMdi: 'mdi:shield-check-outline',
      title: 'Accountability',
      description: 'Ownership of responsibilities, targets, and outcomes.',
    },
    {
      iconMdi: 'mdi:message-text-outline',
      title: 'Communication',
      description: 'Professional and transparent internal communication.',
    },
    {
      iconMdi: 'mdi:refresh',
      title: 'Continuous Improvement',
      description: 'Regular review of processes, performance, and professional development.',
    },
  ],
  benefits: [
    'Competitive salary structure',
    'Performance-based incentives where applicable',
    'Structured training and onboarding support',
    'Professional and organised work environment',
    'Opportunities for career advancement',
    'Recognition for high-performing team members',
  ],
} as const

export const growthSection = {
  kicker: 'Professional Growth',
  title: 'Learn. Perform. Grow.',
  classes: '!px-0 !py-0',
  description:
    'We aim to provide professionals with opportunities to develop through structured training, practical learning, and performance-based progression.',
  image: '/assets/img/careers/professional-growth.webp',
  imageAlt: 'A mentor guiding a colleague through structured training at Indian Mentors',
  overlayKicker: 'Career development',
  overlayTitle: 'Structured training from day one — growth through performance',
  path: [
    {
      no: '01',
      iconMdi: 'mdi:account-plus-outline',
      title: 'Join',
      description: 'Begin with a defined role, clear expectations, and structured onboarding.',
      accent: 'blue',
    },
    {
      no: '02',
      iconMdi: 'mdi:school-outline',
      title: 'Learn',
      description: 'Build capability through role-based training and hands-on exposure.',
      accent: 'indigo',
    },
    {
      no: '03',
      iconMdi: 'mdi:target',
      title: 'Perform',
      description: 'Deliver against responsibilities, KPIs, quality, and discipline.',
      accent: 'violet',
    },
    {
      no: '04',
      iconMdi: 'mdi:trending-up',
      title: 'Develop',
      description: 'Strengthen communication, technology, leadership, and functional skills.',
      accent: 'emerald',
    },
    {
      no: '05',
      iconMdi: 'mdi:account-tie-outline',
      title: 'Lead',
      description: 'Take on greater responsibility as the organisation grows.',
      accent: 'amber',
    },
  ],
  items: [
    {
      iconMdi: 'mdi:school-outline',
      title: 'Role-Based Training',
      description: 'Structured orientation and training based on the responsibilities of each position.',
    },
    {
      iconMdi: 'mdi:lightbulb-on-outline',
      title: 'Practical Learning',
      description: 'Hands-on exposure to real academic, operational, customer, and business situations.',
    },
    {
      iconMdi: 'mdi:chart-box-outline',
      title: 'Performance Reviews',
      description: 'Periodic evaluation based on role responsibilities, KPIs, quality, discipline, and contribution.',
    },
    {
      iconMdi: 'mdi:account-star-outline',
      title: 'Skill Development',
      description: 'Opportunities to strengthen communication, technology, leadership, academic operations, sales, recruitment, and management skills.',
    },
    {
      iconMdi: 'mdi:stairs-up',
      title: 'Career Progression',
      description: 'Professionals demonstrating consistent performance, ownership, and leadership capability may take on greater responsibilities as the organisation grows.',
    },
  ],
} as const

export const standardsSection = {
  kicker: 'Our Professional Standards',
  title: 'What we value in every role',
  classes: '!px-0 !py-0',
  items: [
    { iconMdi: 'mdi:scale-balance', title: 'Integrity', description: 'Do the right thing, even when nobody is watching.' },
    { iconMdi: 'mdi:checkbox-marked-circle-outline', title: 'Accountability', description: 'Take ownership of responsibilities and outcomes.' },
    { iconMdi: 'mdi:account-tie-outline', title: 'Professionalism', description: 'Communicate respectfully and work with discipline.' },
    { iconMdi: 'mdi:clock-check-outline', title: 'Reliability', description: 'Be dependable in commitments, timelines, and execution.' },
    { iconMdi: 'mdi:head-lightbulb-outline', title: 'Learning Mindset', description: 'Stay open to feedback, training, and continuous improvement.' },
    { iconMdi: 'mdi:school-outline', title: 'Student-First Thinking', description: 'Understand that every operational decision ultimately supports a better educational experience.' },
    { iconMdi: 'mdi:account-group-outline', title: 'Teamwork', description: 'Collaborate across departments to achieve common goals.' },
  ],
} as const

export const hiringProcessSection = {
  kicker: 'Our Hiring Process',
  title: 'How our hiring process works',
  classes: '!px-0 !py-0',
  description:
    'A clear, structured path from application to onboarding — designed to assess fit, communication, and professional readiness.',
  image: '/assets/img/contact/im-building.png',
  imageAlt: 'Indian Mentors office in Bhilai — a structured workplace for academic professionals',
  overlayKicker: 'Careers at Indian Mentors',
  overlayTitle: 'From application to onboarding — guided at every step',
  cta: { label: 'View Open Positions', href: '#open-positions' },
} as const

export const hiringSteps = [
  {
    no: '01',
    iconMdi: 'mdi:file-upload-outline',
    title: 'Application Submission',
    description: 'Candidates submit their application through the website or recruitment portal.',
    accent: 'blue',
  },
  {
    no: '02',
    iconMdi: 'mdi:account-search-outline',
    title: 'Initial Screening',
    description: 'Our recruitment team reviews applications and shortlists suitable candidates.',
    accent: 'indigo',
  },
  {
    no: '03',
    iconMdi: 'mdi:account-voice',
    title: 'Interview Process',
    description:
      'Shortlisted candidates are invited for interviews to assess communication skills, professional attitude, and role suitability.',
    accent: 'violet',
  },
  {
    no: '04',
    iconMdi: 'mdi:file-check-outline',
    title: 'Final Selection',
    description: 'Selected candidates receive an official offer with role details and compensation structure.',
    accent: 'emerald',
  },
  {
    no: '05',
    iconMdi: 'mdi:handshake-outline',
    title: 'Onboarding',
    description:
      'New team members receive structured onboarding and orientation about company policies and operational processes.',
    accent: 'amber',
  },
] as const

export const whoCanApplySection = {
  kicker: 'Who Can Apply?',
  title: 'Professionals at different stages of their careers',
  classes: '!px-0 !py-0',
  description: 'We welcome applications from people who want to contribute to a growing academic ecosystem.',
  items: [
    {
      iconMdi: 'mdi:school-outline',
      title: 'Fresh Graduates',
      description: 'Start your professional journey in education, admissions, operations, recruitment, customer support, marketing, HR, finance, or technology.',
    },
    {
      iconMdi: 'mdi:briefcase-outline',
      title: 'Experienced Professionals',
      description: 'Bring your industry experience and contribute to a growing education organisation.',
    },
    {
      iconMdi: 'mdi:human-male-board',
      title: 'Education Professionals',
      description: 'Use your academic, counselling, teaching, recruitment, or education-management experience to strengthen our ecosystem.',
    },
    {
      iconMdi: 'mdi:account-cog-outline',
      title: 'Functional Specialists',
      description: 'Professionals in HR, finance, technology, marketing, operations, compliance, and business development can contribute their specialised expertise.',
    },
  ],
  educatorsNote: {
    title: 'Careers for educators & academic professionals',
    description:
      'Indian Mentors is not limited to conventional corporate roles. We also create opportunities through academic counselling, tutor recruitment, tutor training, academic coordination, student mentoring, learning support, curriculum-aligned academic operations, and education partnerships.',
  },
} as const

export const jobsSection = {
  kicker: 'Open Roles',
  title: 'Open Roles',
  classes: '!px-0 !py-0',
  locationLine: 'Join our team in Bhilai, Chhattisgarh.',
  applyLine: 'To apply, send your resume to',
  searchPlaceholder: 'Search jobs by role, department, or keyword…',
  emptyTitle: 'No matching positions right now',
  emptyDescription: 'Try another filter, or send us your resume so our recruitment team can consider you for future openings.',
} as const

export const jobFilterOptions = {
  departments: [
    { value: 'all', label: 'All Departments' },
    { value: 'admissions', label: 'Admissions' },
    { value: 'academics', label: 'Academics' },
    { value: 'tutor-recruitment', label: 'Tutor Recruitment' },
    { value: 'operations', label: 'Operations & Administration' },
    { value: 'human-resources', label: 'Human Resources' },
    { value: 'finance', label: 'Finance & Accounts' },
    { value: 'digital-marketing', label: 'Digital Marketing & Communications' },
    { value: 'business-development', label: 'Business Development' },
    { value: 'channel-partnerships', label: 'Channel Partnerships' },
    { value: 'technology', label: 'Technology & ERP' },
  ],
  experience: [
    { value: 'all', label: 'All Experience Levels' },
    { value: 'fresher', label: 'Fresher' },
    { value: '0-2', label: '0–2 Years' },
    { value: '2-5', label: '2–5 Years' },
    { value: '5+', label: '5+ Years' },
  ],
  employment: [
    { value: 'all', label: 'All Employment Types' },
    { value: 'full-time', label: 'Full-Time' },
    { value: 'part-time', label: 'Part-Time' },
    { value: 'internship', label: 'Internship' },
    { value: 'contract', label: 'Contract' },
    { value: 'flexible', label: 'Flexible / Field' },
  ],
  workMode: [
    { value: 'all', label: 'All Work Modes' },
    { value: 'on-site', label: 'On-Site' },
    { value: 'hybrid', label: 'Hybrid' },
    { value: 'remote', label: 'Remote' },
    { value: 'field', label: 'Field-Based' },
  ],
} as const

export const talentNetworkSection = {
  kicker: "Don't See Your Role?",
  title: "Don't See Your Role?",
  description:
    "We're always looking for talented people. If you don't see a perfect match, send us your resume and we'll keep you in mind for future opportunities.",
  ctaLabel: 'Send Us Your Resume',
  emailPrompt: 'Or email us at',
} as const

export const equalOpportunitySection = {
  title: 'Equal opportunity & professional respect',
  description:
    'We believe professional opportunities should be based on capability, role suitability, performance, integrity, and organisational requirements. Indian Mentors is committed to maintaining a professional environment where employees are expected to treat colleagues, customers, tutors, students, parents, and partners with respect.',
} as const

export const careersFaqSection = {
  kicker: 'FAQs',
  title: 'Frequently asked questions',
  classes: '!px-0 !py-0',
} as const

export const careersFaqs = [
  {
    id: 'types',
    question: 'What types of careers are available at Indian Mentors?',
    answer:
      'Opportunities may be available across admissions, academic counselling, tutor recruitment, HR, customer support, operations, finance, administration, digital marketing, technology, and business development.',
  },
  {
    id: 'freshers',
    question: 'Can freshers apply?',
    answer:
      'Yes. Suitable entry-level roles may be available for graduates and candidates beginning their professional careers, depending on current vacancies.',
  },
  {
    id: 'experienced',
    question: 'Can experienced professionals apply?',
    answer:
      'Yes. Experienced professionals are welcome to apply for relevant positions based on their qualifications, skills, and experience.',
  },
  {
    id: 'wfh',
    question: 'Are work-from-home opportunities available?',
    answer:
      'Work mode depends on the specific role, operational requirement, and location. Please refer to the individual job description for applicable work arrangements.',
  },
  {
    id: 'how-to-apply',
    question: 'How can I apply?',
    answer:
      'Candidates can apply through the relevant job listing or submit their resume through the careers section for consideration against suitable opportunities.',
  },
  {
    id: 'fee',
    question: 'Is there a recruitment fee?',
    answer:
      'Indian Mentors does not require candidates to pay a fee merely to participate in a genuine employment recruitment process. Candidates should rely only on official recruitment communication and verified organisational channels.',
  },
] as const

export const careersFinalCta = {
  badge: 'Join Indian Mentors',
  title: 'Build your career. Contribute to education.',
  description:
    'Indian Mentors is building more than a tutoring service — we are building a structured, technology-enabled, personalised academic ecosystem. If you are ready to learn, contribute, take responsibility, and grow with purpose, explore opportunities with us.',
  primaryCta: {
    label: 'View Open Positions',
    href: '#open-positions',
    iconMdi: 'mdi:briefcase-search-outline',
    primary: true,
  },
  secondaryCta: {
    label: 'Submit Your Resume',
    href: careerResumeMailto(),
    iconMdi: 'mdi:file-upload-outline',
  },
  tertiaryCta: {
    label: 'Contact Recruitment Team',
    href: `tel:${CAREERS_PHONE_TEL}`,
    iconMdi: 'mdi:phone-outline',
  },
  closing: 'Indian Mentors — Personalised Education. Trusted Tutors. Professional Opportunities.',
} as const

export const jobPageCtas = {
  applyLabel: 'Apply Now',
  resumeLabel: 'Submit Your Resume',
  contactLabel: 'Contact Recruitment Team',
  contactHref: `tel:${CAREERS_PHONE_TEL}`,
} as const
