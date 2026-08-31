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
  badge: 'Teacher Recruitment Services',
  title: 'Academic Staffing & Faculty Recruitment Solutions',
  subtitle: 'For Schools, Colleges, Coaching Institutes, and Learning Platforms',
  description:
    'Indian Mentors connects qualified, verified educators with schools, colleges, coaching centres, and training organisations. Our recruitment framework combines expert screening, background verification, and technology-assisted matching so institutions can hire with confidence.',
  caption:
    'Focus on education delivery and student success — we handle sourcing, evaluation, and faculty recommendations.',
  primaryCta: { label: 'Submit Your Teacher Requirement', href: '#hire-teachers' },
  secondaryCta: { label: 'Consult with Our Recruitment Team', href: '#talk-to-recruiter' },
} as const

export const institutionsHeroHighlights = [
  { iconMdi: 'mdi:shield-check-outline', label: 'Verified Educators' },
  { iconMdi: 'mdi:account-search-outline', label: 'Structured Screening' },
  { iconMdi: 'mdi:clock-fast', label: 'Faster Hiring' },
  { iconMdi: 'mdi:earth', label: 'Nationwide Network' },
  { iconMdi: 'mdi:monitor-dashboard', label: 'ERP Transparency' },
  { iconMdi: 'mdi:handshake-outline', label: 'Dedicated Support' },
] as const

export const institutionsQuickLinks = [
  { id: 'services', iconMdi: 'mdi:briefcase-search-outline', title: 'Recruitment Services', href: '#recruitment-services' },
  { id: 'process', iconMdi: 'mdi:clipboard-flow-outline', title: 'Hiring Process', href: '#hiring-process' },
  { id: 'why-us', iconMdi: 'mdi:handshake-outline', title: 'Why Indian Mentors', href: '#why-institutions' },
  { id: 'sectors', iconMdi: 'mdi:office-building-outline', title: 'Institutions We Serve', href: '#hire-teachers-for' },
  { id: 'erp', iconMdi: 'mdi:monitor-dashboard', title: 'Institution ERP', href: '#institution-erp' },
] as const

export const missionSection = {
  badge: 'Our Mission',
  title: 'A trusted academic staffing partner <span class="text-gradient-brand">across India</span>',
  description:
    'Indian Mentors aims to become a trusted academic staffing partner for educational institutions by providing reliable recruitment support and promoting high standards of teaching.',
  classes: '!px-0 !py-0',
  closing:
    'We strive to create a sustainable bridge between educators and institutions, supporting both academic growth and professional opportunities.',
} as const

export const missionGoals = [
  {
    iconMdi: 'mdi:account-tie-outline',
    title: 'Qualified hiring',
    description: 'Support institutions in hiring teaching professionals for a wide range of academic roles.',
  },
  {
    iconMdi: 'mdi:shield-check-outline',
    title: 'Screened quality',
    description: 'Improve education quality by ensuring teachers undergo proper screening and evaluation.',
  },
  {
    iconMdi: 'mdi:clock-fast',
    title: 'Faster timelines',
    description: 'Reduce hiring timelines through an organised teacher database and efficient processes.',
  },
  {
    iconMdi: 'mdi:handshake-outline',
    title: 'Long-term partnership',
    description: 'Build lasting institutional relationships with ongoing recruitment and staffing support.',
  },
  {
    iconMdi: 'mdi:earth',
    title: 'National network',
    description: 'Contribute to a nationwide network of verified educators across subjects and formats.',
  },
] as const

export const servicesSection = {
  badge: 'Our Teacher Recruitment Services',
  title: 'Flexible staffing models for <span class="text-gradient-brand">every academic need</span>',
  description:
    'Whether the need is permanent faculty placement, short-term teaching support, or specialised training, our services provide reliable and scalable academic workforce solutions.',
  classes: '!px-0 !py-0',
} as const

export const recruitmentServices = [
  {
    id: 'direct-placement',
    no: '01',
    iconMdi: 'mdi:account-plus-outline',
    title: 'Direct Teacher Placement',
    subtitle: 'Permanent & Visiting Faculty Recruitment',
    description:
      'Recruit qualified teachers and academic professionals for long-term roles across subjects, grade levels, and educational boards.',
    features: [
      'Full-time, part-time, and visiting faculty recruitment',
      'Verified teacher profiles with background checks',
      'Subject-specific screening and qualification review',
      'Demo classes and teaching assessments before selection',
      'Candidate shortlisting based on institutional requirements',
    ],
    note: 'Hire the right teacher with confidence while reducing recruitment time and administrative workload.',
    accent: 'blue' as const,
    featured: false,
  },
  {
    id: 'contract-staffing',
    no: '02',
    iconMdi: 'mdi:file-sign',
    title: 'Contract Staffing',
    subtitle: 'Flexible Teacher Deployment Model',
    description:
      'For fixed durations or project-based academic needs, teachers remain on the payroll of Indian Mentors while being deployed to partner institutions.',
    features: [
      'Teachers hired and managed by Indian Mentors',
      'Deployment at schools, coaching centres, and academic institutions',
      'Flexible contract durations — short-term or academic-year basis',
      'Reduced HR and payroll management burden',
      'Reliable staffing for new programs or expansion plans',
    ],
    note: 'Scale your academic workforce quickly while maintaining operational flexibility.',
    accent: 'indigo' as const,
    featured: false,
  },
  {
    id: 'substitute-hiring',
    no: '03',
    iconMdi: 'mdi:account-switch-outline',
    title: 'Substitute & Short-Term Hiring',
    subtitle: 'Rapid Response Teacher Support',
    description:
      'Unexpected absences or temporary vacancies can disrupt learning. We provide quick substitute teacher placement so academic activities continue smoothly.',
    features: [
      'Emergency teacher replacement support',
      'Short-term faculty for maternity leave, exams, or project assignments',
      'Ready database of qualified teachers',
      'Fast response and quick deployment',
    ],
    note: 'Maintain uninterrupted classroom learning and academic schedules.',
    accent: 'amber' as const,
    featured: false,
  },
  {
    id: 'teacher-training',
    no: '04',
    iconMdi: 'mdi:school-outline',
    title: 'Teacher Training & Upskilling',
    subtitle: 'Professional Development for Educators',
    description:
      'Support institutions with teacher development programs aimed at improving teaching quality and classroom effectiveness.',
    features: [
      'Modern pedagogy and student-centric teaching strategies',
      'Classroom management and behavioural engagement',
      'Digital learning tools and technology integration',
      'Communication and presentation skills',
      'Assessment and performance evaluation methods',
    ],
    note: 'Enhance faculty capabilities and maintain high academic standards.',
    accent: 'emerald' as const,
    featured: false,
  },
  {
    id: 'ai-matching',
    no: '05',
    iconMdi: 'mdi:creation',
    title: 'AI-Based Teacher Matching',
    subtitle: 'Smart Recruitment Technology — Premium Feature',
    description:
      'An AI-assisted matching system that connects institutions with the most suitable candidates based on multiple academic and operational parameters.',
    features: [
      'Subject expertise',
      'Academic qualifications',
      'Teaching experience',
      'Board and curriculum familiarity',
      'Location preferences',
      'Institution requirements',
    ],
    note: 'Faster, more precise candidate shortlisting — reducing hiring timelines and improving recruitment outcomes.',
    accent: 'violet' as const,
    featured: true,
  },
] as const

export const valueAddedSupport = {
  badge: 'Institutional Support',
  title: 'Value-added support that streamlines hiring',
  items: [
    'Access to a database of verified teacher profiles',
    'Academic credentials and background verification',
    'Structured screening and demo-class evaluation',
    'Faster hiring timelines through organised candidate sourcing',
    'Dedicated coordination support for recruitment processes',
    'Optional subscription-based access to a premium teacher database',
  ],
} as const

export const institutionsProcessSection = {
  badge: 'Teacher Recruitment Process',
  title: 'A structured framework, <span class="text-gradient-brand">step by step</span>',
  description:
    'Every teacher profile goes through multiple stages of assessment, screening, and validation before being recommended. This helps institutions identify the most suitable candidates based on academic needs, culture, and subject requirements.',
  classes: '!px-0 !py-0',
} as const

export const hiringSteps = [
  {
    step: 1,
    no: '01',
    iconMdi: 'mdi:clipboard-text-search-outline',
    title: 'Requirement Analysis',
    subtitle: 'Institution Need Assessment',
    description:
      'A detailed consultation to understand academic needs, subject requirements, experience expectations, and hiring preferences.',
    items: [
      'Subject and grade requirements',
      'Academic board or curriculum (CBSE, ICSE, State Board, International Boards)',
      'Experience level and qualifications expected',
      'Full-time, part-time, or contract staffing requirement',
      'Location, work schedule, and institutional preferences',
    ],
    accent: 'blue' as const,
  },
  {
    step: 2,
    no: '02',
    iconMdi: 'mdi:account-search-outline',
    title: 'Teacher Sourcing',
    subtitle: 'Identifying Qualified Professionals',
    description:
      'Candidate identification through multiple channels to access a wide pool of qualified teachers across subjects and grade levels.',
    items: [
      'Internal teacher database of verified candidates',
      'Professional educator networks',
      'Targeted outreach and recruitment campaigns',
      'Teacher referrals and academic partnerships',
      'Education community networks and talent pools',
    ],
    accent: 'indigo' as const,
  },
  {
    step: 3,
    no: '03',
    iconMdi: 'mdi:filter-check-outline',
    title: 'Screening & Shortlisting',
    subtitle: 'Evaluation and Profile Verification',
    description:
      'A multi-stage screening process to ensure quality and credibility. Only candidates who meet our criteria are recommended.',
    items: [
      'Qualification and academic credential verification',
      'Teaching experience assessment',
      'Subject competency evaluation',
      'Demo class or teaching presentation review',
      'Background verification and identity checks',
      'HR-level evaluation and communication assessment',
    ],
    accent: 'violet' as const,
  },
  {
    step: 4,
    no: '04',
    iconMdi: 'mdi:account-voice',
    title: 'Interview & Selection',
    subtitle: 'Institution-Led Final Evaluation',
    description:
      'Shortlisted profiles are shared with the institution for interviews, teaching demonstrations, or panel discussions.',
    items: [
      'Academic interviews with subject heads',
      'Teaching demonstrations or trial sessions',
      'Panel discussions with school management',
      'Classroom interaction assessments',
    ],
    accent: 'emerald' as const,
  },
  {
    step: 5,
    no: '05',
    iconMdi: 'mdi:handshake-outline',
    title: 'Onboarding & Support',
    subtitle: 'Smooth Joining and Post-Placement Assistance',
    description:
      'Coordination of joining formalities and post-placement assistance so institutions receive reliable support even after recruitment is complete.',
    items: [
      'Offer communication and joining coordination',
      'Documentation and compliance support',
      'Orientation guidance where required',
      'Replacement support if necessary within agreed terms',
    ],
    accent: 'amber' as const,
  },
] as const

export const hiringProcessOutcome =
  'This systematic approach helps institutions identify suitable educators efficiently while maintaining high recruitment standards.'

export const whyInstitutionsSection = {
  badge: 'Why Choose Indian Mentors',
  title: 'A trusted partner for teacher recruitment <span class="text-gradient-brand">& academic staffing</span>',
  description:
    'Unlike generic job portals, our approach is designed for the education sector — combining structured screening, academic evaluation, and technology-enabled matching.',
  classes: '!px-0 !py-0',
} as const

export const whyChooseReasons = [
  {
    id: 'specialised',
    iconMdi: 'mdi:school-outline',
    title: 'Specialised Focus on Education',
    description:
      'Our team understands subject-specific expertise, curriculum and board familiarity, classroom management, and student engagement.',
    points: [
      'Subject-specific teaching expertise',
      'Curriculum familiarity — CBSE, ICSE, State Boards, International Boards',
      'Classroom management capabilities',
      'Student engagement and learning outcomes',
    ],
    accent: 'blue' as const,
  },
  {
    id: 'verified',
    iconMdi: 'mdi:account-check-outline',
    title: 'Pre-Verified Teacher Pool',
    description:
      'A database of pre-screened teachers who undergo multiple stages of evaluation before being recommended.',
    points: [
      'Qualification and academic credential verification',
      'Experience validation and subject expertise assessment',
      'Demo class or teaching presentation evaluation',
      'Communication and teaching methodology assessment',
      'Background verification where required',
    ],
    accent: 'emerald' as const,
  },
  {
    id: 'hybrid',
    iconMdi: 'mdi:lightning-bolt-outline',
    title: 'Fast Turnaround, Hybrid Model',
    description:
      'Technology-driven processes combined with human expertise to reduce hiring timelines without compromising quality.',
    points: [
      'Quick identification of relevant teacher profiles',
      'Smart filtering and candidate matching tools',
      'Structured HR-level screening',
      'Curated shortlists for institutional review',
    ],
    accent: 'amber' as const,
  },
  {
    id: 'end-to-end',
    iconMdi: 'mdi:sync',
    title: 'End-to-End Recruitment & Training',
    description:
      'Complete academic staffing support at every stage of hiring, onboarding, and faculty development.',
    points: [
      'Requirement analysis and candidate sourcing',
      'Screening, shortlisting, and interview coordination',
      'Joining and onboarding assistance',
      'Replacement support if required',
      'Teacher training and professional development',
    ],
    accent: 'violet' as const,
  },
  {
    id: 'nationwide',
    iconMdi: 'mdi:earth',
    title: 'Scalable Nationwide Network',
    description:
      'A growing network of educators across India, supporting institutions of different sizes, cities, and academic structures.',
    points: [
      'Schools and institutions in multiple cities',
      'Online and hybrid teaching requirements',
      'Short-term and long-term staffing needs',
      'Subject specialists across grade levels and curricula',
    ],
    accent: 'indigo' as const,
  },
] as const

export const whyCommitment = {
  title: 'Our commitment',
  items: [
    'Verified and qualified educators',
    'Transparent and structured recruitment processes',
    'Efficient and reliable hiring support',
    'Technology-enabled teacher matching',
    'Continuous faculty development and training',
  ],
} as const

export const sectorsSection = {
  badge: 'Industries & Institutions We Serve',
  title: 'Faculty recruitment across the <span class="text-gradient-brand">education ecosystem</span>',
  description:
    'We work with schools, colleges, coaching institutes, and digital learning platforms to provide educators who meet the academic and operational requirements of each institution.',
  classes: '!px-0 !py-0',
} as const

export const hiringSectors = [
  {
    id: 'schools',
    iconMdi: 'mdi:school-outline',
    title: 'K–12 Schools',
    subtitle: 'Academic Staffing for School Education',
    description:
      'Primary, middle, and senior secondary schools across national and international boards.',
    rolesLabel: 'We help schools recruit',
    roles: [
      'Primary and elementary education',
      'Middle school subject specialists',
      'Senior secondary faculty for science, commerce, and humanities',
      'Co-curricular and skill-based educators',
    ],
    extraLabel: 'Boards and curricula',
    extras: ['CBSE', 'ICSE', 'State Education Boards', 'IB', 'IGCSE'],
    note: 'Schools receive teachers who are academically competent, experienced, and familiar with their curriculum standards.',
    accent: 'blue' as const,
  },
  {
    id: 'colleges',
    iconMdi: 'mdi:town-hall',
    title: 'Colleges & Universities',
    subtitle: 'Faculty Recruitment for Higher Education',
    description:
      'Higher education institutions offering undergraduate, postgraduate, technical, and vocational programs.',
    rolesLabel: 'We assist institutions in hiring',
    roles: [
      'Undergraduate (UG) faculty members',
      'Postgraduate (PG) academic staff',
      'Technical and engineering faculty',
      'Management and commerce educators',
      'Vocational and professional trainers',
    ],
    note: 'We focus on academically qualified faculty with relevant teaching and research experience.',
    accent: 'violet' as const,
  },
  {
    id: 'coaching',
    iconMdi: 'mdi:trophy-outline',
    title: 'Coaching & Training Centres',
    subtitle: 'Subject Experts for Competitive Exam Preparation',
    description:
      'Institutes preparing students for competitive examinations and professional courses, plus skill-based learning programs.',
    rolesLabel: 'Faculty for',
    roles: [
      'IIT-JEE preparation',
      'NEET and medical entrance coaching',
      'UPSC and civil services preparation',
      'Banking and government job examinations',
      'Language training programs',
      'Skill development and professional certification',
    ],
    note: 'Experienced trainers and subject specialists for both classroom and online learning programs.',
    accent: 'amber' as const,
  },
  {
    id: 'edtech',
    iconMdi: 'mdi:laptop-account',
    title: 'EdTech Platforms',
    subtitle: 'Online Faculty & Digital Learning Tutors',
    description:
      'Digital education organisations that need qualified educators for online teaching and remote academic support.',
    rolesLabel: 'We help EdTech organisations recruit',
    roles: [
      'Online subject tutors',
      'Part-time academic mentors',
      'Digital classroom instructors',
      'Curriculum content educators',
      'Assessment and evaluation specialists',
    ],
    note: 'Build reliable teaching teams capable of delivering high-quality online learning experiences.',
    accent: 'emerald' as const,
  },
] as const

export const subjectsSection = {
  badge: 'Subjects & Teacher Categories',
  title: 'Faculty recruitment across <span class="text-gradient-brand">disciplines</span>',
  description:
    'A structured database of educators from diverse academic backgrounds helps institutions recruit the right teachers for specific subjects, grade levels, and curriculum requirements.',
  classes: '!px-0 !py-0',
  engagementLabel: 'Flexible teacher categories',
  engagement: [
    'Full-time faculty',
    'Part-time educators',
    'Visiting faculty',
    'Contract-based instructors',
    'Online tutors and digital classroom instructors',
  ],
  cta: { label: 'Request Subject-Specific Teachers', href: '#hire-teachers' },
} as const

export const subjectCategories = [
  {
    id: 'core',
    iconMdi: 'mdi:book-open-page-variant-outline',
    title: 'Core Academic Subjects',
    subtitle: 'K–12 Education',
    image: '/assets/img/tutor-subjects/science-maths.webp',
    subjects: [
      'Mathematics',
      'Physics',
      'Chemistry',
      'Biology',
      'General Science',
      'English Language & Literature',
      'Hindi Language & Literature',
      'Sanskrit',
      'Social Studies',
      'Political Science',
      'Economics',
      'Psychology',
      'Environmental Studies',
    ],
  },
  {
    id: 'commerce',
    iconMdi: 'mdi:chart-line',
    title: 'Commerce & Business Studies',
    subtitle: 'Schools, Colleges & Commerce Institutes',
    image: '/assets/img/tutor-subjects/commerce-business.webp',
    subjects: [
      'Accountancy',
      'Business Studies',
      'Economics',
      'Financial Management',
      'Entrepreneurship',
      'Banking & Finance',
    ],
  },
  {
    id: 'technology',
    iconMdi: 'mdi:code-tags',
    title: 'Computer Science & Technology',
    subtitle: 'Digital Skills & STEM',
    image: '/assets/img/tutor-subjects/technology.webp',
    subjects: [
      'Computer Science',
      'Information Technology',
      'Programming Fundamentals',
      'Coding & Software Development',
      'Data Science Basics',
      'AI & Machine Learning (Introductory)',
      'Robotics & STEM Education',
    ],
  },
  {
    id: 'science-technical',
    iconMdi: 'mdi:flask-outline',
    title: 'Science & Technical Education',
    subtitle: 'Advanced Science Programs',
    image: '/assets/img/tutor-subjects/science-maths.webp',
    subjects: [
      'Physics Faculty',
      'Chemistry Faculty',
      'Biology Faculty',
      'Engineering and Technical Instructors',
      'Laboratory Demonstrators',
    ],
  },
  {
    id: 'competitive',
    iconMdi: 'mdi:trophy-outline',
    title: 'Competitive Exam Faculty',
    subtitle: 'Coaching & Entrance Preparation',
    image: '/assets/img/tutor-subjects/competitive-exams.webp',
    subjects: [
      'IIT-JEE (Engineering Entrance)',
      'NEET (Medical Entrance)',
      'UPSC & Civil Services',
      'Banking & Government Examinations',
      'SSC and other competitive exams',
    ],
  },
  {
    id: 'languages',
    iconMdi: 'mdi:translate',
    title: 'Language & Communication',
    subtitle: 'Academic & Professional Language Training',
    image: '/assets/img/tutor-subjects/languages.webp',
    subjects: [
      'English Language Training',
      'Hindi Language Instruction',
      'Regional Languages',
      'Spoken English & Communication Skills',
      'Foreign Languages (subject to availability)',
    ],
  },
  {
    id: 'cocurricular',
    iconMdi: 'mdi:palette-outline',
    title: 'Co-Curricular & Skill-Based',
    subtitle: 'Holistic Student Development',
    image: '/assets/img/tutor-subjects/social-humanities.webp',
    subjects: [
      'Art & Craft',
      'Music & Performing Arts',
      'Physical Education & Sports',
      'Personality Development',
      'Public Speaking & Soft Skills',
      'Life Skills Programs',
    ],
  },
] as const

export const citiesSection = {
  badge: 'Cities & Regions We Serve',
  title: 'A nationwide teacher recruitment <span class="text-gradient-brand">network</span>',
  description:
    'With regional outreach, digital recruitment systems, and a growing database of verified teachers, we connect institutions with suitable educators based on location, subject expertise, and institutional requirements.',
  classes: '!px-0 !py-0',
  mapImage: '/assets/img/channel-partner/map.webp',
  mapAlt: 'Indian Mentors nationwide teacher recruitment coverage across India',
  online: {
    title: 'Nationwide Online Teaching Support',
    description:
      'In addition to physical placements, we support online and hybrid teaching roles across India — so institutions can access qualified educators beyond geographical limitations.',
    items: [
      'Online tutors and digital instructors',
      'Remote faculty for virtual classrooms',
      'Part-time educators for online learning programs',
      'Academic mentors for digital education platforms',
    ],
  },
  closing:
    'Our goal is a reliable, accessible teacher recruitment ecosystem across metropolitan cities, growing education hubs, developing towns, and online environments.',
} as const

export const cityGroups = [
  {
    id: 'metro',
    iconMdi: 'mdi:city-variant-outline',
    title: 'Major Metropolitan Cities',
    description: 'High-demand education hubs where institutions recruit experienced teachers and subject specialists.',
    cities: [
      { label: 'Delhi', icon: 'delhi' },
      { label: 'Mumbai', icon: 'mumbai' },
      { label: 'Pune', icon: 'pune' },
      { label: 'Bengaluru', icon: 'bengaluru' },
      { label: 'Hyderabad', icon: 'hydrabad' },
      { label: 'Gurugram', icon: null },
      { label: 'Chennai', icon: 'chennai' },
      { label: 'Kolkata', icon: 'kolkata' },
      { label: 'Ahmedabad', icon: 'ahmdabad' },
    ],
  },
  {
    id: 'tier-2',
    iconMdi: 'mdi:domain',
    title: 'Tier-2 Educational Cities',
    description: 'Growing education centres with expanding schools, colleges, coaching institutes, and training organisations.',
    cities: [
      { label: 'Jaipur', icon: 'jaipur' },
      { label: 'Lucknow', icon: 'lucknow' },
      { label: 'Chandigarh', icon: 'chandigarh' },
      { label: 'Bhopal', icon: null },
      { label: 'Indore', icon: 'indore' },
      { label: 'Nagpur', icon: 'nagpur' },
      { label: 'Patna', icon: 'patna' },
      { label: 'Kochi', icon: 'kochi' },
      { label: 'Bhubaneswar', icon: 'bhubneshwar' },
      { label: 'Coimbatore', icon: null },
    ],
  },
  {
    id: 'tier-3',
    iconMdi: 'mdi:home-city-outline',
    title: 'Tier-3 Cities & Emerging Regions',
    description: 'Developing cities and regional education hubs where access to qualified teachers can be limited.',
    cities: [],
    benefits: [
      'Access to a wider teacher talent pool',
      'Support in sourcing subject specialists',
      'Assistance in short-term and long-term faculty hiring',
      'Hybrid recruitment including online and relocation-based hiring',
    ],
  },
] as const

export const erpSection = {
  badge: 'ERP System & Transparency',
  title: 'Manage recruitment, track hiring, <span class="text-gradient-brand">stay informed</span>',
  tagline: 'Smart Teacher Recruitment Powered by Technology',
  description:
    'The Institutions Management Dashboard gives schools, colleges, and educational organisations complete visibility — post teacher requirements, review verified candidate profiles, schedule interviews, track progress, and manage hiring documentation.',
  classes: '!px-0 !py-0',
  workflowLabel: 'Recruitment workflow',
  workflow: ['Post Requirement', 'Review Candidates', 'Interview', 'Select', 'Appoint'],
  showcaseTitle: 'One platform for complete recruitment management',
  showcaseDescription:
    'Institutions receive secure login access to a personalised dashboard where administrators can manage teacher recruitment needs and monitor hiring efficiently.',
  securityTitle: 'A secure recruitment ecosystem',
  securityItems: [
    'Secure institutional login authentication',
    'Encrypted communication channels',
    'Verified teacher profile database',
    'Protected recruitment documentation',
    'Real-time hiring workflow tracking',
  ],
  visibilityLabel: 'Institutions always know',
  visibility: [
    'Which teachers are available',
    'How the recruitment process is progressing',
    'Which candidates have been shortlisted',
    'When hiring decisions are completed',
  ],
  closing:
    'The Institution ERP Dashboard bridges the gap between schools, recruitment coordinators, and verified teachers — a transparent, efficient, and professional hiring experience.',
} as const

export const erpFeatures = [
  {
    iconMdi: 'mdi:view-dashboard-outline',
    title: 'Institution Dashboard',
    description: 'A centralised overview of recruitment activities, teacher requirements, and hiring updates.',
    features: [
      'Overview of active teacher requirements',
      'Recruitment progress tracking',
      'New candidate notifications',
      'Quick access to recruitment modules',
    ],
    benefit: 'Instant visibility of recruitment activities and hiring status.',
  },
  {
    iconMdi: 'mdi:office-building-outline',
    title: 'Institution Profile',
    description: 'Manage institutional information used for recruitment and candidate matching.',
    features: [
      'Institution details and contact information',
      'Location and academic board information',
      'Subjects and grade levels offered',
      'Profile update and verification options',
    ],
    benefit: 'Accurate candidate matching based on institutional requirements.',
  },
  {
    iconMdi: 'mdi:bullhorn-outline',
    title: 'Post Teacher Requirement',
    description: 'Submit teacher hiring requirements directly through the dashboard.',
    features: [
      'Subject and grade requirement submission',
      'Full-time, part-time, or contract hiring options',
      'Experience and qualification preferences',
      'Job description and role expectations',
    ],
    benefit: 'Streamlines the teacher recruitment request process.',
  },
  {
    iconMdi: 'mdi:account-search-outline',
    title: 'Browse Verified Teachers',
    description: 'Explore a database of pre-screened and verified teacher profiles.',
    features: [
      'Teacher qualifications and certifications',
      'Teaching experience and subject expertise',
      'Profile verification status',
      'Resume and profile details',
    ],
    benefit: 'Select qualified candidates efficiently.',
  },
  {
    iconMdi: 'mdi:presentation',
    title: 'Interview & Demo Management',
    description: 'Schedule and manage interviews or demo teaching sessions with shortlisted candidates.',
    features: [
      'Interview scheduling tools',
      'Demo class coordination',
      'Candidate evaluation notes',
      'Interview status tracking',
    ],
    benefit: 'Structured candidate evaluation and selection.',
  },
  {
    iconMdi: 'mdi:clipboard-text-clock-outline',
    title: 'Recruitment Tracking',
    description: 'Monitor the progress of teacher recruitment requests in real time.',
    features: [
      'Shortlisted candidate tracking',
      'Interview progress updates',
      'Candidate selection records',
      'Recruitment completion status',
    ],
    benefit: 'Clear hiring process visibility and transparency.',
  },
  {
    iconMdi: 'mdi:message-text-outline',
    title: 'Communication & Coordination',
    description: 'Communicate with recruitment coordinators and shortlisted candidates.',
    features: [
      'Recruitment coordination messages',
      'Candidate communication',
      'Hiring updates',
      'Recruitment support assistance',
    ],
    benefit: 'Clear and organised recruitment communication.',
  },
  {
    iconMdi: 'mdi:chart-box-outline',
    title: 'Hiring Reports & Analytics',
    description: 'Access reports related to recruitment activity and hiring performance.',
    features: [
      'Recruitment activity summaries',
      'Candidate pipeline reports',
      'Hiring timeline analysis',
      'Teacher placement records',
    ],
    benefit: 'Data-driven hiring decisions.',
  },
  {
    iconMdi: 'mdi:credit-card-outline',
    title: 'Billing & Payments',
    description: 'Financial transparency related to recruitment services.',
    features: [
      'Recruitment service invoices',
      'Payment history records',
      'Service plan tracking',
      'Billing reminders',
    ],
    benefit: 'Clear financial transparency for recruitment services.',
  },
  {
    iconMdi: 'mdi:bell-outline',
    title: 'Notifications & Updates',
    description: 'Real-time notifications related to recruitment progress and candidate updates.',
    features: [
      'New teacher applications',
      'Interview reminders',
      'Candidate shortlisting alerts',
      'Recruitment status updates',
    ],
    benefit: 'Stay updated throughout the hiring process.',
  },
  {
    iconMdi: 'mdi:headset',
    title: 'Institutional Support',
    description: 'Access support from the Indian Mentors recruitment team.',
    features: [
      'Recruitment consultation support',
      'Requirement modification requests',
      'Technical platform assistance',
      'Candidate replacement requests',
    ],
    benefit: 'Smooth recruitment management and quick issue resolution.',
  },
  {
    iconMdi: 'mdi:cog-outline',
    title: 'Account Settings',
    description: 'Manage account preferences and security settings for the institution dashboard.',
    features: [
      'Admin profile management',
      'Password and security settings',
      'Notification preferences',
      'Access control management',
    ],
    benefit: 'Secure and customised dashboard management.',
  },
] as const

export const institutionsFinalCta = {
  badge: 'Find the Right Teachers for Your Institution',
  title: 'Connect with qualified, verified educators',
  description:
    'A structured recruitment system supported by technology and transparency — built for schools, colleges, coaching institutes, and learning platforms.',
  closing: 'Indian Mentors — Where Teacher Recruitment Meets Smart Technology.',
  primaryCta: {
    label: 'Post Teacher Requirement',
    href: institutionRequirementMailto(),
  },
  secondaryCta: {
    label: 'Schedule a Consultation',
    href: `tel:${INSTITUTIONS_PHONE_TEL}`,
  },
  tertiaryCta: {
    label: 'Talk to a Recruitment Advisor',
    href: INSTITUTIONS_WHATSAPP,
  },
} as const
