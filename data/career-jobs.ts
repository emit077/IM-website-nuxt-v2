import {
  careerApplyMailto,
  careerResumeMailto,
  hiringSteps as sharedHiringSteps,
} from '~/data/careers'

export type CareerDepartmentId =
  | 'admissions'
  | 'academics'
  | 'tutor-recruitment'
  | 'operations'
  | 'human-resources'
  | 'finance'
  | 'digital-marketing'
  | 'business-development'
  | 'channel-partnerships'
  | 'technology'

export type CareerExperience = 'fresher' | '0-2' | '2-5' | '5+'
export type CareerEmployment = 'full-time' | 'part-time' | 'internship' | 'contract' | 'flexible'
export type CareerWorkMode = 'on-site' | 'hybrid' | 'remote' | 'field'

export type CareerDepartmentRole = {
  title: string
  summary: string
  slug?: string
}

export type CareerDepartment = {
  id: CareerDepartmentId
  no: string
  iconMdi: string
  emoji: string
  title: string
  tagline: string
  accent: 'blue' | 'emerald' | 'amber' | 'violet' | 'indigo' | 'teal'
  roles: CareerDepartmentRole[]
}

export type JobResponsibilityGroup = {
  heading: string
  items: string[]
}

export type JobSkillGroup = {
  heading: string
  body: string
}

export type CareerJob = {
  slug: string
  title: string
  departmentId: CareerDepartmentId
  departmentLabel: string
  location: string
  locationShort: string
  industry: string
  employmentType: string
  employmentFilter: CareerEmployment
  workMode: string
  workModeFilter: CareerWorkMode
  experienceLabel: string
  experienceFilters: CareerExperience[]
  tags: string[]
  organisation: string
  hero: {
    headline: string
    subheadline: string
    paragraphs: string[]
  }
  about: {
    paragraphs: string[]
    bullets?: string[]
  }
  overview: string[]
  responsibilities: JobResponsibilityGroup[]
  kpis?: { intro?: string; items: string[] }
  compensation?: {
    intro: string
    blocks: { heading: string; body: string }[]
    slabs?: { range: string; reward: string }[]
    note?: string
  }
  payoutTable?: {
    intro: string
    columns: string[]
    rows: string[][]
    notes: string[]
  }
  eligibility: JobSkillGroup[]
  skills?: string[]
  benefits: { intro?: string; items: string[] }
  growth: { intro: string; paths: string[] }
  ethics?: { intro: string; items: string[] }
  whyJoin?: { intro: string; items: string[] }
  applyIntro: string
}

export const careerDepartments: CareerDepartment[] = [
  {
    id: 'admissions',
    no: '01',
    iconMdi: 'mdi:account-school-outline',
    emoji: '🎓',
    title: 'Admissions',
    tagline: 'Connecting families with the right tutoring solutions.',
    accent: 'blue',
    roles: [
      {
        title: 'Admission Counsellor',
        slug: 'admission-counsellor',
        summary:
          'Manage student enquiries, counsel parents, recommend suitable tutoring plans, and support admission conversion.',
      },
      {
        title: 'Admission Coordinator',
        slug: 'admission-coordinator',
        summary:
          'Coordinate parent–tutor meetings, demo sessions, documentation, feedback, and admission activation.',
      },
    ],
  },
  {
    id: 'academics',
    no: '02',
    iconMdi: 'mdi:book-open-page-variant-outline',
    emoji: '📚',
    title: 'Academics',
    tagline: 'Supporting personalised learning and academic outcomes.',
    accent: 'indigo',
    roles: [
      {
        title: 'Academic Counsellor',
        slug: 'academic-counsellor',
        summary:
          'Manage onboarded students, coordinate tutors, support academic planning, and maintain parent communication.',
      },
      {
        title: 'Academic Support Executive',
        summary:
          'Coordinate students, parents, and tutors to support sessions, feedback, issue resolution, and service requirements.',
      },
      {
        title: 'Customer Support Executive',
        slug: 'customer-support-executive',
        summary:
          'Assist parents, students, and tutors with service enquiries, session coordination, and issue resolution.',
      },
    ],
  },
  {
    id: 'tutor-recruitment',
    no: '03',
    iconMdi: 'mdi:account-search-outline',
    emoji: '👥',
    title: 'Tutor Recruitment',
    tagline: 'Building a trusted network of qualified tutors.',
    accent: 'emerald',
    roles: [
      {
        title: 'Tutor Recruiter',
        summary:
          'Source, screen, interview, verify, and onboard tutors based on student requirements and recruitment standards.',
      },
      {
        title: 'Tutor Training & Quality Executive',
        summary:
          'Support tutor orientation, training, feedback, quality monitoring, and adherence to teaching standards.',
      },
    ],
  },
  {
    id: 'operations',
    no: '04',
    iconMdi: 'mdi:office-building-outline',
    emoji: '🏢',
    title: 'Operations & Administration',
    tagline: 'Ensuring structured, efficient, and accountable operations.',
    accent: 'amber',
    roles: [
      {
        title: 'Operations Executive',
        summary:
          'Coordinate daily workflows, service delivery, internal communication, operational activities, and performance reporting.',
      },
      {
        title: 'Administrative Executive',
        summary:
          'Manage documentation, records, administrative activities, internal coordination, and routine organisational requirements.',
      },
      {
        title: 'Administrative & Compliance Executive',
        slug: 'administrative-compliance-executive',
        summary:
          'Manage documentation, oversee administrative processes, and maintain compliance with organisational standards.',
      },
    ],
  },
  {
    id: 'human-resources',
    no: '05',
    iconMdi: 'mdi:account-group-outline',
    emoji: '👔',
    title: 'Human Resources',
    tagline: 'Building and developing a capable professional workforce.',
    accent: 'violet',
    roles: [
      {
        title: 'HR Executive / HR Manager',
        slug: 'hr-executive',
        summary:
          'Manage recruitment, onboarding, attendance, employee records, HR administration, and employee engagement.',
      },
      {
        title: 'Talent Acquisition Executive',
        summary:
          'Source, screen, coordinate interviews, and onboard professionals across departments.',
      },
      {
        title: 'Learning & Development Executive',
        summary:
          'Support employee induction, role-based training, skill development, assessments, and professional growth.',
      },
    ],
  },
  {
    id: 'finance',
    no: '06',
    iconMdi: 'mdi:currency-inr',
    emoji: '💰',
    title: 'Finance & Accounts',
    tagline: 'Maintaining financial accuracy, transparency, and control.',
    accent: 'teal',
    roles: [
      {
        title: 'Finance & Accounts Executive',
        slug: 'finance-accounts-executive',
        summary:
          'Manage financial records, fee collections, billing, reconciliation, tutor payouts, and financial documentation.',
      },
      {
        title: 'Accounts Executive',
        summary:
          'Support accounting activities, invoices, payment records, reconciliations, documentation, and financial reporting.',
      },
      {
        title: 'MIS Executive',
        summary:
          'Prepare operational, financial, admissions, tutor, and performance reports for management review.',
      },
    ],
  },
  {
    id: 'digital-marketing',
    no: '07',
    iconMdi: 'mdi:bullhorn-outline',
    emoji: '📢',
    title: 'Digital Marketing & Communications',
    tagline: 'Building brand awareness and strengthening digital presence.',
    accent: 'blue',
    roles: [
      {
        title: 'Digital Marketing Executive',
        slug: 'digital-marketing-executive',
        summary:
          'Plan and execute digital campaigns, lead-generation activities, performance analysis, and online growth initiatives.',
      },
      {
        title: 'Content & Communication Executive',
        summary:
          'Create website, educational, marketing, email, and customer-facing content aligned with the Indian Mentors brand.',
      },
      {
        title: 'Social Media Executive',
        summary:
          'Manage social media content, publishing, engagement, campaigns, and digital audience growth.',
      },
    ],
  },
  {
    id: 'business-development',
    no: '08',
    iconMdi: 'mdi:handshake-outline',
    emoji: '🤝',
    title: 'Business Development',
    tagline: 'Growing institutional and strategic education opportunities.',
    accent: 'amber',
    roles: [
      {
        title: 'Business Development Manager',
        summary:
          'Develop business opportunities, build institutional relationships, and support Academic Staffing Solutions growth.',
      },
    ],
  },
  {
    id: 'channel-partnerships',
    no: '09',
    iconMdi: 'mdi:storefront-outline',
    emoji: '🤝',
    title: 'Channel Partnerships',
    tagline: 'Expanding local reach through authorised resellers and strategic partners.',
    accent: 'emerald',
    roles: [
      {
        title: 'Channel Partnership Executive',
        summary:
          'Identify, onboard, and manage Authorised Resellers across assigned territories, supporting local market development.',
      },
    ],
  },
  {
    id: 'technology',
    no: '10',
    iconMdi: 'mdi:desktop-classic',
    emoji: '💻',
    title: 'Technology & ERP',
    tagline: 'Powering a connected and technology-enabled tutoring ecosystem.',
    accent: 'indigo',
    roles: [
      {
        title: 'ERP & Tech Operations Executive',
        slug: 'erp-tech-operations-executive',
        summary:
          'Manage and support ERP, CRM, operational software, system workflows, configurations, data, and technology-enabled operations.',
      },
      {
        title: 'Product Design & Process Executive',
        summary:
          'Improve ERP workflows, dashboards, internal tools, user experiences, and operational processes.',
      },
    ],
  },
]

const defaultOrganisation = 'Indian Mentors – Personalised Tutoring Services'

export const careerJobs: CareerJob[] = [
  {
    slug: 'admission-counsellor',
    title: 'Admission Counsellor / Business Development Executive',
    departmentId: 'admissions',
    departmentLabel: 'Admissions',
    location: 'Bhilai, Chhattisgarh',
    locationShort: 'Bhilai',
    industry: 'EdTech',
    employmentType: 'Full-Time',
    employmentFilter: 'full-time',
    workMode: 'On-Site',
    workModeFilter: 'on-site',
    experienceLabel: '0–2 Years preferred',
    experienceFilters: ['fresher', '0-2'],
    tags: ['Counselling', 'CRM', 'Lead Conversion', 'Hindi & English', 'EdTech Sales'],
    organisation: defaultOrganisation,
    hero: {
      headline: 'Build Your Career in Education & EdTech',
      subheadline:
        'Join Indian Mentors as an Admission Counsellor and help students achieve academic success through personalised tutoring services.',
      paragraphs: [
        'Indian Mentors is a fast-growing personalised tutoring services organisation working to improve academic outcomes for students across India. We are looking for motivated and professional individuals who can guide parents and students, convert academic enquiries into admissions, and contribute to the organisation’s growth through structured counselling and disciplined follow-up.',
        'If you are passionate about education, communication, and relationship-building, this role offers an excellent opportunity to grow within the expanding EdTech sector.',
      ],
    },
    about: {
      paragraphs: [
        'Indian Mentors is a rapidly growing EdTech organisation dedicated to delivering personalised one-to-one tutoring services across India. Our academic model focuses on structured learning support, customised tutoring plans, and strong coordination between tutors, parents, and students.',
        'By combining experienced mentors with organised operational systems, we aim to create measurable academic improvement and a reliable learning environment for students across multiple academic boards and grade levels.',
      ],
    },
    overview: [
      'The Admission Counsellor / Business Development Executive (BDE) plays a crucial role in managing student enquiries, counselling parents, converting leads into confirmed admissions, and ensuring a smooth onboarding experience.',
      'This role combines educational counselling, client relationship management, and business development responsibilities. The position requires strong communication skills, disciplined follow-up processes, and the ability to guide parents towards the most suitable personalised tutoring plans for their children.',
    ],
    responsibilities: [
      {
        heading: 'Lead Management',
        items: [
          'Handle inbound and outbound enquiries from parents and students interested in personalised tutoring services.',
        ],
      },
      {
        heading: 'Academic Counselling',
        items: [
          'Understand the student’s academic needs, board, grade level, and subject requirements to recommend appropriate tutoring plans.',
        ],
      },
      {
        heading: 'Admission Conversion',
        items: [
          'Convert qualified leads into confirmed admissions or service contracts through professional counselling and structured follow-up.',
        ],
      },
      {
        heading: 'Demo Session Coordination',
        items: ['Schedule and coordinate demo classes between tutors and parents or students.'],
      },
      {
        heading: 'Lead Lifecycle Management',
        items: ['Ensure timely follow-ups and closures as per the defined enquiry management process.'],
      },
      {
        heading: 'CRM Management',
        items: [
          'Maintain accurate and up-to-date CRM records, including call logs, follow-ups, demo sessions, and admission status.',
        ],
      },
      {
        heading: 'Client Onboarding',
        items: [
          'Ensure smooth onboarding and timely commencement of tutoring services after admission confirmation.',
        ],
      },
      {
        heading: 'Relationship Management',
        items: [
          'Build long-term relationships with parents, students, and tutors to ensure a positive service experience.',
        ],
      },
      {
        heading: 'Target Achievement',
        items: ['Work towards achieving monthly admission and revenue targets assigned by the reporting manager.'],
      },
      {
        heading: 'Reporting',
        items: [
          'Submit daily, weekly, and monthly reports on lead status, conversions, demos, and performance metrics.',
        ],
      },
    ],
    kpis: {
      intro: 'Performance in this role will be evaluated based on measurable operational outcomes:',
      items: [
        'Number of calls and enquiries handled daily',
        'Timely follow-ups based on defined lead stages',
        'Lead-to-admission conversion rate',
        'Number of demo sessions conducted successfully',
        'Monthly fee collection and revenue generated',
        'Smooth onboarding of students without operational issues',
        'Accuracy and completeness of CRM updates',
        'Parent and student feedback and issue resolution',
        'Achievement of assigned monthly admission and revenue targets',
      ],
    },
    compensation: {
      intro:
        'Indian Mentors offers a competitive salary structure combined with performance-based incentives designed to reward productivity and results.',
      blocks: [
        {
          heading: 'Fixed Salary',
          body: 'A competitive fixed salary will be offered based on the candidate’s experience, communication skills, and interview performance.',
        },
        {
          heading: 'Performance-Based Incentives',
          body: 'Incentives are calculated based on revenue generated through confirmed tutoring contracts.',
        },
      ],
      slabs: [
        { range: 'Below 100% target achievement', reward: 'Fixed salary only' },
        { range: '100% – 150% target achievement', reward: '2% incentive on achieved revenue' },
        { range: 'Above 150% target achievement', reward: '3% incentive on achieved revenue along with performance recognition' },
      ],
      note: 'Detailed incentive calculations and payout policies are shared during the final offer discussion.',
    },
    eligibility: [
      { heading: 'Educational Qualification', body: 'Graduate or equivalent qualification preferred.' },
      { heading: 'Communication Skills', body: 'Strong verbal and written communication skills in Hindi, English, and regional languages.' },
      { heading: 'Relevant Experience', body: 'Previous experience in EdTech, counselling, telesales, inside sales, or B2C sales is preferred.' },
      { heading: 'Counselling & Sales Skills', body: 'Ability to handle objections, guide parents professionally, and close admissions effectively.' },
      { heading: 'Professional Attitude', body: 'Target-driven, disciplined, and organised mindset with strong ownership of responsibilities.' },
      { heading: 'Technical Comfort', body: 'Comfortable using calling systems, WhatsApp communication, and CRM platforms.' },
    ],
    benefits: {
      intro: 'Working at Indian Mentors provides a supportive and growth-oriented professional environment.',
      items: [
        'Competitive fixed salary',
        'Performance-based monthly incentives',
        'Structured training and onboarding support',
        'Professional and organised work environment',
        'Opportunities for career advancement',
        'Recognition for high-performing team members',
      ],
    },
    growth: {
      intro: 'Indian Mentors encourages internal growth and leadership development for high-performing team members.',
      paths: [
        'Promotion to Senior Admission Counsellor',
        'Advancement to Team Lead / Manager / Director – Admissions',
        'Exposure to operations and management responsibilities',
        'Participation in training and mentoring new team members',
      ],
    },
    ethics: {
      intro: 'At Indian Mentors, we maintain strong standards of professionalism and transparency. Team members are expected to:',
      items: [
        'Maintain ethical and responsible counselling practices',
        'Communicate clearly and respectfully with parents and students',
        'Follow organisational SOPs and operational policies',
        'Maintain confidentiality of client information',
        'Take full ownership of assigned leads, targets, and conversions',
      ],
    },
    applyIntro:
      'If you are passionate about education, counselling, and helping students succeed academically, we invite you to become part of the Indian Mentors team.',
  },
  {
    slug: 'admission-coordinator',
    title: 'Admission Coordinator',
    departmentId: 'admissions',
    departmentLabel: 'Admissions',
    location: 'Bhilai, Chhattisgarh (Field-Based Role Across India)',
    locationShort: 'Field / Across India',
    industry: 'EdTech',
    employmentType: 'Flexible',
    employmentFilter: 'flexible',
    workMode: 'Field-Based',
    workModeFilter: 'field',
    experienceLabel: '0–2 Years preferred',
    experienceFilters: ['fresher', '0-2'],
    tags: ['Field Coordination', 'Demo Sessions', 'Reporting', 'Parent Meetings', 'Hindi & English'],
    organisation: defaultOrganisation,
    hero: {
      headline: 'Be the Bridge Between Tutors, Parents, and Student Success',
      subheadline:
        'Join Indian Mentors as an Admission Coordinator and help ensure smooth coordination of demo sessions, admissions, and tutoring services through structured in-person interactions.',
      paragraphs: [
        'Indian Mentors is a growing personalised tutoring services organisation dedicated to delivering high-quality academic support through structured one-to-one learning. To strengthen our service delivery and ensure smooth coordination between tutors, parents, and students, we are looking for responsible and organised Admission Coordinators.',
        'This role involves conducting in-person meetings, coordinating demo sessions, supporting admissions, and ensuring a smooth tutoring experience after onboarding. Admission Coordinators play an important role in maintaining service quality and strengthening trust between families and our tutor network.',
      ],
    },
    about: {
      paragraphs: [
        'Indian Mentors is a fast-growing EdTech organisation that provides personalised one-to-one tutoring services for students across India. Our approach focuses on customised academic support, structured mentoring, and close coordination between tutors and families.',
        'To maintain service quality and ensure a smooth experience for students and parents, our Admission Coordinators act as on-ground representatives who facilitate meetings, demo sessions, and service coordination.',
      ],
    },
    overview: [
      'The Admission Coordinator serves as a field-level representative responsible for organising and conducting in-person meetings between tutors and parents or students.',
      'This role ensures that tutoring services begin smoothly by facilitating demo sessions, explaining service details, collecting feedback, and assisting with admission confirmation. Admission Coordinators also help monitor service quality by conducting review visits and supporting operational coordination when required.',
      'The role requires professional communication, organisational discipline, and the ability to build trust with families and tutors.',
    ],
    responsibilities: [
      {
        heading: 'Physical Interaction & Meetings',
        items: [
          'Coordinate and conduct in-person meetings between tutors and parents/students for demo sessions, admission discussions, and service coordination.',
          'Ensure that tutors and parents clearly understand the scope of tutoring services, academic expectations and goals, class schedules, and communication protocols.',
          'Provide necessary guidance to ensure a smooth admission and onboarding process.',
        ],
      },
      {
        heading: 'Service Coordination',
        items: [
          'Monitor tutor performance and student satisfaction after onboarding.',
          'Arrange review meetings when academic progress needs to be evaluated.',
          'Coordinate tutor replacement visits if required.',
          'Assist in fee collection follow-ups as per organisational procedures.',
          'Ensure that service issues are resolved promptly and professionally.',
        ],
      },
      {
        heading: 'Reporting & Communication',
        items: [
          'Submit detailed meeting reports and feedback summaries to the central coordination team within 24 hours of each visit.',
          'Maintain transparent communication with parents and students, tutors, and internal coordination and operations teams.',
          'Ensure accurate documentation of meeting outcomes, feedback, and service updates.',
        ],
      },
    ],
    payoutTable: {
      intro: 'Indian Mentors provides a structured payout model for field visits and service coordination activities.',
      columns: ['Meeting Type', 'Non-Metro Cities (₹)', 'Metro Cities (₹)', 'Travel Allowance', 'Payout Cycle'],
      rows: [
        ['Admission Incentive', '100', '200', '—', 'On deal confirmation'],
        ['Demo Session', '300', '400', '₹6 per km', 'Weekly'],
        ['Review Meeting', '300', '400', '₹6 per km', 'Weekly'],
        ['Replacement Visit', '300', '400', '₹6 per km', 'Weekly'],
        ['Fee Collection Visit', '200', '300', '₹6 per km', 'Weekly'],
        ['Other Visits', '200', '300', '₹6 per km', 'Weekly'],
      ],
      notes: [
        'All payouts are processed weekly, subject to timely submission of visit reports.',
        'Payouts are verified by the central coordination team before release.',
      ],
    },
    eligibility: [
      { heading: 'Educational Qualification', body: 'Graduate or equivalent qualification preferred.' },
      { heading: 'Communication Skills', body: 'Strong verbal communication skills in Hindi and English.' },
      { heading: 'Interpersonal Skills', body: 'Ability to interact professionally with parents, students, and tutors during in-person meetings.' },
      { heading: 'Field Coordination Ability', body: 'Comfortable travelling locally for meetings, demo coordination, and service visits.' },
      { heading: 'Organisational Discipline', body: 'Ability to maintain accurate reports, meeting summaries, and communication updates.' },
      { heading: 'Professional Attitude', body: 'Responsible, trustworthy, and committed to maintaining high service standards.' },
    ],
    benefits: {
      intro: 'Indian Mentors offers a structured and flexible professional environment for coordinators involved in field operations.',
      items: [
        'Flexible field-based coordination work',
        'Weekly payout cycle for visits and activities',
        'Travel allowance for field visits',
        'Opportunity to build experience in the EdTech sector',
        'Professional exposure to academic service coordination',
        'Opportunity to grow within operations and coordination roles',
      ],
    },
    growth: {
      intro: 'Admission Coordinators who demonstrate strong performance and professionalism may receive opportunities for growth within the organisation.',
      paths: [
        'Senior Admission Coordinator',
        'Operations Coordinator',
        'Academic Operations Executive',
        'City Operations Manager',
        'High-performing coordinators may also receive opportunities to support regional expansion of tutoring services.',
      ],
    },
    ethics: {
      intro: 'Admission Coordinators represent Indian Mentors during field interactions and are expected to maintain high professional standards. Team members must:',
      items: [
        'Maintain respectful and transparent communication',
        'Follow organisational policies and operational procedures',
        'Submit accurate visit reports within the defined timeframe',
        'Ensure confidentiality of student and family information',
        'Uphold the reputation and service standards of Indian Mentors',
      ],
    },
    applyIntro:
      'If you enjoy interacting with families, coordinating educational services, and supporting student learning journeys, we invite you to join Indian Mentors as an Admission Coordinator.',
  },
  {
    slug: 'academic-counsellor',
    title: 'Academic Counsellor',
    departmentId: 'academics',
    departmentLabel: 'Academics',
    location: 'Bhilai, Chhattisgarh',
    locationShort: 'Bhilai',
    industry: 'EdTech',
    employmentType: 'Full-Time',
    employmentFilter: 'full-time',
    workMode: 'On-Site',
    workModeFilter: 'on-site',
    experienceLabel: '0–2 Years preferred',
    experienceFilters: ['fresher', '0-2'],
    tags: ['Academic Planning', 'Tutor Coordination', 'Parent Communication', 'CRM', 'Student Onboarding'],
    organisation: defaultOrganisation,
    hero: {
      headline: 'Guide Students Beyond Admission Toward Academic Success',
      subheadline:
        'Join Indian Mentors as an Academic Counsellor and help ensure a smooth onboarding experience while supporting students, parents, and tutors throughout the learning journey.',
      paragraphs: [
        'Indian Mentors is a fast-growing EdTech organisation providing personalised one-to-one tutoring services across India. We focus on structured academic planning, tutor coordination, and strong parent communication to deliver measurable learning outcomes.',
        'We are looking for dedicated and organised Academic Counsellors who can support newly enrolled students through onboarding, academic planning, tutor coordination, and ongoing service monitoring.',
        'This role is essential in ensuring that every student receives the personalised guidance and support needed for a successful learning journey.',
      ],
    },
    about: {
      paragraphs: [
        'Indian Mentors is a growing personalised tutoring services organisation dedicated to improving student learning outcomes through structured academic mentoring and high-quality teaching support.',
      ],
      bullets: [
        'Personalised one-to-one tutoring',
        'Structured academic planning',
        'Strong parent–tutor communication',
        'Continuous learning progress monitoring',
      ],
    },
    overview: [
      'The Academic Counsellor is responsible for ensuring a smooth transition of newly enrolled students into the tutoring program.',
      'This role focuses on student onboarding, tutor coordination, academic planning, parent communication, and service quality monitoring.',
      'The Academic Counsellor acts as a bridge between parents, students, tutors, and internal operations teams, ensuring that the tutoring services deliver the promised academic outcomes and maintain a high level of parent satisfaction.',
    ],
    responsibilities: [
      {
        heading: 'Student Onboarding & Orientation',
        items: [
          'Conduct post-admission onboarding calls with parents and students to ensure a smooth start of tutoring services.',
          'Explain service structure, session format, academic planning approach, tutoring policies, and expectations.',
          'Collect and verify academic information such as school curriculum, syllabus, upcoming exam schedules, weak subjects, and learning goals.',
        ],
      },
      {
        heading: 'Tutor Allocation & Coordination',
        items: [
          'Coordinate with the Tutor Management Team to assign suitable tutors based on subject expertise, student grade level, location proximity, and learning requirements.',
          'Schedule and coordinate regular tutoring sessions (post demo session) between the tutor and the student.',
        ],
      },
      {
        heading: 'Academic Planning & Study Strategy',
        items: [
          'Assist in preparing a basic academic study roadmap aligned with the student’s learning needs.',
          'Ensure tutoring sessions focus on school syllabus alignment, preparation for upcoming tests and exams, concept clarity, and academic improvement.',
          'Guide tutors to follow structured teaching strategies for better learning outcomes.',
        ],
      },
      {
        heading: 'Parent Communication & Relationship Management',
        items: [
          'Maintain regular communication with parents regarding session updates, student learning progress, and tutor feedback.',
          'Address parent concerns professionally and ensure timely resolution of service issues.',
          'Build strong long-term relationships with families to maintain trust and satisfaction.',
        ],
      },
      {
        heading: 'Session Monitoring & Quality Control',
        items: [
          'Track the regularity and quality of tutoring sessions.',
          'Monitor tutor punctuality, session consistency, and student engagement.',
          'Ensure tutors follow the teaching guidelines and service standards established by Indian Mentors.',
        ],
      },
      {
        heading: 'Academic Progress Tracking',
        items: [
          'Review periodic updates from tutors regarding topics covered, student improvement, and weak areas requiring additional focus.',
          'Share progress insights with parents when necessary.',
        ],
      },
      {
        heading: 'Issue Resolution & Escalation',
        items: [
          'Handle service-related issues including tutor replacement requests, session rescheduling, and academic concerns raised by parents.',
          'Escalate complex cases to the operations or management team when required.',
        ],
      },
      {
        heading: 'Service Continuity & Student Retention',
        items: [
          'Ensure tutoring sessions continue smoothly throughout the duration of the learning plan.',
          'Encourage consistent academic engagement from students.',
          'Support service renewals or tutoring plan extensions when appropriate.',
        ],
      },
    ],
    skills: [
      'Strong communication and counselling skills',
      'Ability to handle parent expectations professionally',
      'Basic academic understanding of school curriculum and subjects',
      'Problem-solving and coordination abilities',
      'Organised follow-up and CRM management skills',
      'Ability to work collaboratively with tutors and internal teams',
    ],
    kpis: {
      intro: 'Performance in this role will be evaluated based on measurable outcomes:',
      items: [
        'Successful completion of student onboarding process',
        'Tutor allocation turnaround time',
        'Parent satisfaction and feedback ratings',
        'Session continuity and attendance consistency',
        'Efficiency in resolving service issues',
        'Student retention and tutoring plan continuation rates',
      ],
    },
    eligibility: [
      { heading: 'Educational Qualification', body: 'Graduate or equivalent qualification preferred.' },
      { heading: 'Communication Skills', body: 'Strong verbal and written communication skills in Hindi and English.' },
      { heading: 'Relevant Experience', body: 'Experience in academic counselling, education services, or student support is preferred.' },
    ],
    benefits: {
      intro: 'Indian Mentors provides a supportive and professional environment for team members working in academic counsellor roles.',
      items: [
        'Competitive salary structure',
        'Structured onboarding and training',
        'Professional and organised work environment',
        'Opportunity to work in the growing EdTech sector',
        'Career development opportunities within academic operations',
        'Recognition for high-performing team members',
      ],
    },
    growth: {
      intro: 'High-performing Academic Counsellors can grow into leadership and academic management roles within the organisation.',
      paths: [
        'Senior Academic Counsellor',
        'Team Leader – Academics',
        'Academic Operations Manager',
        'Student Success Manager',
        'Team members demonstrating leadership ability may also receive opportunities to participate in training, academic planning initiatives, and operational leadership roles.',
      ],
    },
    whyJoin: {
      intro: 'Working with Indian Mentors offers an opportunity to contribute to meaningful academic impact while growing professionally in the EdTech sector. Team members gain experience in:',
      items: [
        'Academic counselling and student support',
        'Education service operations',
        'Parent relationship management',
        'Structured tutoring program management',
      ],
    },
    applyIntro:
      'If you are passionate about education, academic planning, and supporting students in achieving their learning goals, we invite you to join Indian Mentors as an Academic Counsellor.',
  },
  {
    slug: 'customer-support-executive',
    title: 'Customer Support Executive',
    departmentId: 'academics',
    departmentLabel: 'Academics',
    location: 'Bhilai, Chhattisgarh',
    locationShort: 'Bhilai',
    industry: 'EdTech',
    employmentType: 'Full-Time',
    employmentFilter: 'full-time',
    workMode: 'On-Site',
    workModeFilter: 'on-site',
    experienceLabel: '0–2 Years preferred',
    experienceFilters: ['fresher', '0-2'],
    tags: ['Client Support', 'Session Coordination', 'CRM', 'Issue Resolution', 'Hindi & English'],
    organisation: defaultOrganisation,
    hero: {
      headline: 'Support Students and Families on Their Learning Journey',
      subheadline:
        'Join Indian Mentors as a Customer Support Executive and help ensure smooth communication and service coordination for students, parents, and tutors.',
      paragraphs: [
        'Indian Mentors is a fast-growing EdTech organisation delivering personalised one-to-one tutoring services for students across India. Our mission is to provide structured academic support while maintaining strong communication and service reliability.',
        'We are looking for dedicated and professional Customer Support Executives who can assist parents, students, and tutors with service-related enquiries, session coordination, and issue resolution. This role plays a key part in maintaining a positive service experience and ensuring smooth tutoring operations.',
      ],
    },
    about: {
      paragraphs: [
        'Indian Mentors is a growing personalised tutoring services organisation that connects students with qualified tutors to deliver structured academic support across different subjects, grade levels, and educational boards.',
      ],
      bullets: [
        'Personalised one-to-one tutoring',
        'Academic progress monitoring',
        'Tutor–parent coordination',
        'Structured academic support systems',
      ],
    },
    overview: [
      'The Customer Support Executive is responsible for managing service-related enquiries from parents, students, and tutors.',
      'This role involves providing timely support, coordinating session schedules, resolving service issues, and maintaining accurate records of customer interactions.',
      'The Customer Support Executive acts as a communication bridge between families, tutors, and internal operational teams, ensuring that tutoring services operate smoothly and efficiently.',
    ],
    responsibilities: [
      {
        heading: 'Client Communication & Support',
        items: [
          'Respond to enquiries from parents, students, and tutors through phone calls, WhatsApp messages, and emails.',
          'Provide clear and professional responses related to tutoring schedules, tutor availability, session coordination, and service policies.',
        ],
      },
      {
        heading: 'Session Coordination',
        items: [
          'Assist in coordinating tutoring sessions between tutors and students.',
          'Support scheduling adjustments, rescheduling requests, and session confirmations.',
          'Ensure that session details are communicated clearly to both tutors and parents.',
        ],
      },
      {
        heading: 'Issue Resolution',
        items: [
          'Handle service-related concerns such as session delays or cancellations, tutor availability issues, and parent feedback.',
          'Work with the operations and academic teams to resolve issues efficiently.',
        ],
      },
      {
        heading: 'Service Monitoring',
        items: [
          'Track session regularity and ensure tutoring services are delivered as scheduled.',
          'Follow up with parents or tutors when sessions are missed or require clarification.',
        ],
      },
      {
        heading: 'CRM & Documentation',
        items: [
          'Maintain accurate records of customer interactions, support requests, and issue resolutions in the CRM system.',
          'Update communication logs, session updates, and feedback records regularly.',
        ],
      },
      {
        heading: 'Feedback Collection',
        items: [
          'Collect feedback from parents and students regarding tutoring services and overall satisfaction.',
          'Share feedback insights with the academic and operations teams to improve service quality.',
        ],
      },
      {
        heading: 'Coordination with Internal Teams',
        items: [
          'Work closely with Admission Counsellors, Academic Counsellors, and Tutor Recruitment and Operations Teams.',
          'Ensure smooth coordination across departments to maintain consistent service delivery.',
        ],
      },
    ],
    skills: [
      'Strong verbal and written communication skills in Hindi and English',
      'Customer service orientation with patience and professionalism',
      'Ability to handle parent concerns and service queries calmly',
      'Basic understanding of tutoring services or academic support systems',
      'Organised follow-up and documentation skills',
      'Ability to manage multiple enquiries simultaneously',
      'Comfortable using communication tools, spreadsheets, and CRM systems',
    ],
    kpis: {
      intro: 'Performance in this role will be measured based on:',
      items: [
        'Response time for customer enquiries',
        'Issue resolution efficiency',
        'Parent and student satisfaction levels',
        'Accuracy of CRM documentation',
        'Session coordination success rate',
        'Quality of communication with clients and tutors',
      ],
    },
    eligibility: [
      { heading: 'Educational Qualification', body: 'Graduate or equivalent qualification preferred.' },
      { heading: 'Communication Skills', body: 'Strong verbal and written communication skills in Hindi and English.' },
      { heading: 'Relevant Experience', body: 'Previous customer support, BPO, or education-services experience is preferred.' },
    ],
    benefits: {
      intro: 'Indian Mentors offers a professional and supportive work environment that encourages growth and performance.',
      items: [
        'Competitive fixed salary',
        'Structured training and onboarding support',
        'Professional and collaborative work environment',
        'Opportunities for career advancement',
        'Exposure to the growing EdTech sector',
        'Recognition for high-performing team members',
      ],
    },
    growth: {
      intro: 'Customer Support Executives demonstrating strong performance and leadership abilities may grow into roles such as:',
      paths: [
        'Senior Customer Support Executive',
        'Student Support Manager',
        'Academic Operations Coordinator',
        'Client Relationship Manager',
        'High-performing team members may also participate in service quality improvement initiatives and operational leadership roles.',
      ],
    },
    whyJoin: {
      intro: 'Working with Indian Mentors offers an opportunity to contribute to meaningful academic impact while building a career in the rapidly growing EdTech sector. Team members gain experience in:',
      items: [
        'Education service operations',
        'Client communication and relationship management',
        'Tutoring program coordination',
        'Customer experience management',
      ],
    },
    applyIntro:
      'If you enjoy helping families, solving service issues, and supporting smooth academic services, we invite you to join Indian Mentors as a Customer Support Executive.',
  },
  {
    slug: 'hr-executive',
    title: 'Human Resources Executive / HR Manager',
    departmentId: 'human-resources',
    departmentLabel: 'Human Resources',
    location: 'Bhilai, Chhattisgarh',
    locationShort: 'Bhilai',
    industry: 'EdTech',
    employmentType: 'Full-Time',
    employmentFilter: 'full-time',
    workMode: 'On-Site',
    workModeFilter: 'on-site',
    experienceLabel: '2–5 Years preferred',
    experienceFilters: ['2-5', '5+'],
    tags: ['Recruitment', 'Onboarding', 'Employee Engagement', 'HR Admin', 'Performance Management'],
    organisation: defaultOrganisation,
    hero: {
      headline: 'Build Strong Teams that Power Student Success',
      subheadline:
        'Join Indian Mentors as a Human Resources professional and help build, support, and develop the talented team behind our personalised tutoring services.',
      paragraphs: [
        'Indian Mentors is a fast-growing EdTech organisation providing personalised one-to-one tutoring services to students across India. Our mission is to deliver structured academic support through a reliable network of tutors and a professional operational team.',
        'We are looking for dedicated Human Resources professionals who can support recruitment, employee engagement, performance management, and organisational development while ensuring a productive and professional work environment.',
      ],
    },
    about: {
      paragraphs: [
        'Indian Mentors is a growing personalised tutoring services organisation focused on improving student learning outcomes through structured tutoring programs and strong academic support systems.',
        'Our success depends on building a high-quality team of educators, counsellors, recruiters, coordinators, and operational professionals who work together to deliver reliable and impactful tutoring services.',
        'The Human Resources team plays a crucial role in recruiting talent, maintaining organisational culture, supporting employee development, and ensuring smooth internal operations.',
      ],
    },
    overview: [
      'The Human Resources Executive / HR Manager is responsible for managing recruitment, employee onboarding, HR administration, and internal coordination across the organisation.',
      'This role focuses on building a strong workforce by supporting hiring processes, performance management, employee engagement, and HR policy implementation.',
      'The HR professional works closely with leadership and department teams to ensure that Indian Mentors continues to grow with a skilled, motivated, and well-supported workforce.',
    ],
    responsibilities: [
      {
        heading: 'Recruitment & Talent Acquisition',
        items: [
          'Manage recruitment for operational and academic roles including Admission Counsellors, Academic Counsellors, Tutor Recruiters, Customer Support Executives, coordinators, and operations staff.',
          'Coordinate job postings, candidate screening, interview scheduling, and final selection processes.',
        ],
      },
      {
        heading: 'Employee Onboarding & Orientation',
        items: [
          'Ensure smooth onboarding of newly hired employees.',
          'Provide orientation regarding company policies, role responsibilities, and organisational processes.',
          'Maintain proper documentation for employee records.',
        ],
      },
      {
        heading: 'HR Administration & Compliance',
        items: [
          'Maintain employee records, contracts, and documentation.',
          'Ensure compliance with organisational policies and employment guidelines.',
          'Support payroll coordination, attendance tracking, and HR documentation management.',
        ],
      },
      {
        heading: 'Performance Management',
        items: [
          'Support performance evaluation processes across departments.',
          'Track performance metrics and coordinate with reporting managers regarding employee development.',
          'Assist in identifying training needs and improvement areas.',
        ],
      },
      {
        heading: 'Employee Engagement & Workplace Culture',
        items: [
          'Promote a positive and professional work environment.',
          'Support initiatives related to team engagement, internal communication, and employee recognition.',
          'Encourage collaboration and professional growth within the organisation.',
        ],
      },
      {
        heading: 'HR Policy Implementation',
        items: [
          'Assist in implementing organisational policies, SOPs, and HR guidelines.',
          'Ensure employees understand and follow professional conduct standards.',
          'Maintain transparency and fairness in HR processes.',
        ],
      },
      {
        heading: 'Internal Coordination',
        items: [
          'Work closely with Admissions, Academic Operations, Tutor Recruitment, and Customer Support teams.',
          'Ensure smooth coordination between HR and operational departments.',
        ],
      },
    ],
    skills: [
      'Strong communication and interpersonal skills',
      'Experience in recruitment and talent acquisition',
      'Ability to manage employee relations and HR documentation',
      'Organised record-keeping and administrative abilities',
      'Basic knowledge of HR policies and compliance practices',
      'Ability to manage multiple tasks and coordinate across departments',
      'Professional and ethical approach to HR responsibilities',
    ],
    kpis: {
      intro: 'Performance in this role will be evaluated based on:',
      items: [
        'Recruitment turnaround time for open positions',
        'Quality and retention of hired employees',
        'Employee onboarding efficiency',
        'HR documentation accuracy and compliance',
        'Employee satisfaction and workplace engagement',
        'Effective coordination with operational departments',
      ],
    },
    eligibility: [
      { heading: 'Educational Qualification', body: 'Graduate in HR, Business Administration, or equivalent qualification preferred.' },
      { heading: 'Relevant Experience', body: 'Experience in recruitment, HR administration, or people operations is preferred.' },
      { heading: 'Communication Skills', body: 'Strong verbal and written communication skills in Hindi and English.' },
    ],
    benefits: {
      intro: 'Indian Mentors offers a professional and growth-oriented environment for HR professionals.',
      items: [
        'Competitive salary structure',
        'Structured onboarding and training',
        'Professional work environment',
        'Opportunities for leadership and HR management growth',
        'Exposure to EdTech industry operations',
        'Recognition for performance and contribution',
      ],
    },
    growth: {
      intro: 'Human Resources professionals at Indian Mentors may grow into leadership and strategic roles within the organisation.',
      paths: [
        'Senior HR Executive',
        'HR Manager',
        'Human Resources & Operations Manager',
        'Head of Human Resources',
        'High-performing HR professionals may also contribute to organisational development initiatives and expansion planning.',
      ],
    },
    whyJoin: {
      intro: 'Working with Indian Mentors provides an opportunity to contribute to the growth of a professional EdTech organisation while building expertise in human resource management. Team members gain experience in:',
      items: [
        'Talent acquisition and recruitment',
        'HR administration and organisational processes',
        'Team development and workplace culture',
        'Operational coordination within an education services organisation',
      ],
    },
    applyIntro:
      'If you are passionate about building strong teams, supporting professional development, and contributing to a growing education organisation, we invite you to apply for the Human Resources Executive / HR Manager role.',
  },
  {
    slug: 'finance-accounts-executive',
    title: 'Finance & Accounts Executive',
    departmentId: 'finance',
    departmentLabel: 'Finance & Accounts',
    location: 'Bhilai, Chhattisgarh',
    locationShort: 'Bhilai',
    industry: 'EdTech',
    employmentType: 'Full-Time',
    employmentFilter: 'full-time',
    workMode: 'On-Site',
    workModeFilter: 'on-site',
    experienceLabel: '0–2 Years preferred',
    experienceFilters: ['fresher', '0-2', '2-5'],
    tags: ['Accounting', 'Fee Collection', 'Reporting', 'Spreadsheets', 'Tutor Payouts'],
    organisation: defaultOrganisation,
    hero: {
      headline: 'Manage Financial Operations that Support Quality Education',
      subheadline:
        'Join Indian Mentors as a Finance & Accounts Executive and help ensure financial accuracy, transparency, and operational efficiency across our personalised tutoring services.',
      paragraphs: [
        'Indian Mentors is a growing EdTech organisation delivering personalised one-to-one tutoring services to students across India. As the organisation expands, strong financial management becomes essential for maintaining transparency, operational stability, and sustainable growth.',
        'We are looking for a detail-oriented Finance & Accounts Executive who can manage financial records, track revenue, coordinate fee collections, and support accounting processes for the organisation.',
        'This role plays an important part in ensuring that all financial transactions related to tutoring services, tutor payments, and operational expenses are accurately managed and recorded.',
      ],
    },
    about: {
      paragraphs: [
        'Indian Mentors is a fast-growing personalised tutoring services organisation focused on improving student academic performance through structured one-to-one learning programs.',
        'The Finance & Accounts team ensures that all financial processes supporting admissions, tutor management, academic coordination, and customer support are handled accurately and efficiently.',
      ],
    },
    overview: [
      'The Finance & Accounts Executive is responsible for managing the organisation’s financial records, monitoring fee collections, coordinating tutor payouts, and maintaining accurate accounting documentation.',
      'This role requires strong attention to detail, financial discipline, and coordination with multiple operational teams including admissions, academic operations, and administration.',
      'The Finance & Accounts Executive ensures financial transparency while supporting the organisation’s operational growth.',
    ],
    responsibilities: [
      {
        heading: 'Financial Record Management',
        items: [
          'Maintain accurate financial records related to student fee payments, tutor payouts and incentives, operational expenses, and vendor payments.',
          'Ensure all financial transactions are properly documented and recorded.',
        ],
      },
      {
        heading: 'Fee Collection Tracking',
        items: [
          'Monitor and track student fee payments based on tutoring service plans.',
          'Coordinate with the admissions, academic, and support teams regarding pending payments or payment confirmations.',
          'Maintain updated records of fee collection status.',
        ],
      },
      {
        heading: 'Tutor Payments & Incentives',
        items: [
          'Assist in processing tutor payments, commissions, or incentives based on service agreements.',
          'Verify payment records and ensure payouts are processed accurately and on schedule.',
        ],
      },
      {
        heading: 'Invoicing & Billing',
        items: [
          'Generate invoices for tutoring services when required.',
          'Maintain billing records and ensure proper documentation of financial transactions.',
        ],
      },
      {
        heading: 'Expense Monitoring',
        items: [
          'Track operational expenses including administrative costs, travel allowances, and operational expenditures.',
          'Maintain proper documentation for all expense records.',
        ],
      },
      {
        heading: 'Financial Reporting',
        items: [
          'Prepare periodic financial reports including revenue summaries, fee collection reports, and expense tracking reports.',
          'Submit financial updates to management for review and planning.',
        ],
      },
      {
        heading: 'Coordination with Internal Teams',
        items: [
          'Work closely with Admissions for fee confirmation, Academic Operations for service records, HR for payroll coordination, and Management for financial planning.',
          'Ensure accurate coordination between financial records and operational activities.',
        ],
      },
    ],
    skills: [
      'Basic accounting and financial management knowledge',
      'Strong attention to detail and accuracy in record keeping',
      'Familiarity with spreadsheets, accounting software, or financial tracking systems',
      'Ability to manage invoices, payments, and expense records',
      'Organised documentation and reporting skills',
      'Professional communication and coordination abilities',
      'Integrity and confidentiality in handling financial information',
    ],
    kpis: {
      intro: 'Performance in this role will be evaluated based on:',
      items: [
        'Accuracy of financial records and documentation',
        'Timely tracking of fee collections',
        'Efficient coordination of tutor payments and incentives',
        'Timely preparation of financial reports',
        'Compliance with organisational financial procedures',
        'Effective coordination with internal operational teams',
      ],
    },
    eligibility: [
      { heading: 'Educational Qualification', body: 'Graduate in Commerce, Accounting, Finance, or equivalent qualification preferred.' },
      { heading: 'Relevant Experience', body: 'Experience in accounts, bookkeeping, or operational finance is preferred.' },
      { heading: 'Technical Comfort', body: 'Comfortable with spreadsheets and accounting or financial tracking tools.' },
    ],
    benefits: {
      intro: 'Indian Mentors provides a professional environment where finance professionals can build experience in operational financial management.',
      items: [
        'Competitive salary structure',
        'Structured onboarding and training',
        'Professional and organised work environment',
        'Opportunities to develop accounting and financial management experience',
        'Exposure to EdTech operational finance',
        'Recognition for performance and reliability',
      ],
    },
    growth: {
      intro: 'Finance & Accounts professionals at Indian Mentors may grow into advanced financial and operational roles.',
      paths: [
        'Senior Accounts Executive',
        'Finance Manager',
        'Finance & Operations Manager',
        'Head of Finance and Administration',
        'High-performing professionals may also contribute to financial planning and organisational expansion strategies.',
      ],
    },
    whyJoin: {
      intro: 'Working with Indian Mentors offers an opportunity to support the financial foundation of a growing EdTech organisation while developing professional accounting experience. Team members gain exposure to:',
      items: [
        'Financial operations within an education services organisation',
        'Revenue management and service-based billing systems',
        'Operational coordination across departments',
        'Financial reporting and organisational planning',
      ],
    },
    applyIntro:
      'If you are detail-oriented, organised, and interested in managing financial operations within the education sector, we invite you to apply for the Finance & Accounts Executive role.',
  },
  {
    slug: 'administrative-compliance-executive',
    title: 'Administrative & Compliance Executive',
    departmentId: 'operations',
    departmentLabel: 'Operations',
    location: 'Bhilai, Chhattisgarh',
    locationShort: 'Bhilai',
    industry: 'EdTech',
    employmentType: 'Full-Time',
    employmentFilter: 'full-time',
    workMode: 'On-Site',
    workModeFilter: 'on-site',
    experienceLabel: '0–2 Years preferred',
    experienceFilters: ['fresher', '0-2', '2-5'],
    tags: ['Documentation', 'Compliance', 'Record Management', 'Coordination', 'Process Discipline'],
    organisation: defaultOrganisation,
    hero: {
      headline: 'Ensure Organised Operations and Regulatory Compliance in Education Services',
      subheadline:
        'Join Indian Mentors as an Administrative & Compliance Executive and help maintain operational discipline, documentation standards, and organisational compliance across our personalised tutoring services.',
      paragraphs: [
        'Indian Mentors is a growing EdTech organisation dedicated to delivering structured and personalised tutoring services to students across India. As our academic and operational network expands, strong administrative processes and regulatory compliance become essential to maintain transparency, accountability, and operational efficiency.',
        'We are looking for a responsible and detail-oriented Administrative & Compliance Executive who can manage documentation, oversee administrative processes, ensure adherence to organisational policies, and maintain compliance with operational standards.',
      ],
    },
    about: {
      paragraphs: [
        'Indian Mentors is a fast-growing personalised tutoring services organisation focused on delivering structured academic support through one-to-one learning programs.',
        'The Administrative & Compliance team plays a vital role in ensuring that admissions, tutor management, academic coordination, customer support, and financial operations remain organised, properly documented, and compliant with organisational policies and professional standards.',
      ],
    },
    overview: [
      'The Administrative & Compliance Executive is responsible for managing administrative documentation, supporting internal operations, maintaining compliance records, and ensuring adherence to organisational policies.',
      'This role requires strong organisational skills, attention to detail, and the ability to coordinate across departments to maintain efficient administrative processes.',
      'The position helps ensure that operational activities are conducted in a structured, transparent, and compliant manner, supporting the organisation’s long-term growth.',
    ],
    responsibilities: [
      {
        heading: 'Administrative Coordination',
        items: [
          'Support daily administrative operations across admissions, tutor documentation, internal communication, and operational documentation management.',
          'Ensure that organisational processes remain structured and well-documented.',
        ],
      },
      {
        heading: 'Documentation & Record Management',
        items: [
          'Maintain organised records for student enrolment documentation, tutor agreements, operational reports, and administrative policies.',
          'Ensure all records are stored securely and are easily accessible when required.',
        ],
      },
      {
        heading: 'Compliance Monitoring',
        items: [
          'Ensure adherence to organisational policies, documentation standards, and operational procedures.',
          'Assist in maintaining compliance related to service documentation, tutor onboarding requirements, operational reporting standards, and administrative approvals.',
        ],
      },
      {
        heading: 'Policy Implementation',
        items: [
          'Support the implementation of internal policies and operational guidelines across departments.',
          'Ensure that team members follow established administrative and compliance procedures.',
        ],
      },
      {
        heading: 'Coordination with Departments',
        items: [
          'Work closely with admissions, tutor recruitment, academic operations, and finance teams.',
          'Ensure that administrative documentation and operational records remain accurate and up to date.',
        ],
      },
      {
        heading: 'Reporting & Administrative Support',
        items: [
          'Prepare administrative reports when required.',
          'Provide documentation support to management and operations teams for planning, monitoring, and compliance purposes.',
        ],
      },
    ],
    skills: [
      'Strong organisational and administrative skills',
      'Attention to detail in documentation and record management',
      'Understanding of compliance and organisational policy implementation',
      'Good coordination and communication abilities',
      'Ability to maintain structured administrative processes',
      'Proficiency in spreadsheets, documentation tools, and basic office software',
      'Integrity and confidentiality in handling organisational information',
    ],
    kpis: {
      intro: 'Performance in this role will be evaluated based on:',
      items: [
        'Accuracy and organisation of administrative records',
        'Timely completion of documentation processes',
        'Compliance with organisational procedures',
        'Efficiency in coordinating administrative tasks across departments',
        'Quality and reliability of administrative reporting',
        'Contribution to operational discipline and process improvement',
      ],
    },
    eligibility: [
      { heading: 'Educational Qualification', body: 'Graduate or equivalent qualification preferred.' },
      { heading: 'Relevant Experience', body: 'Experience in administration, documentation, or compliance support is preferred.' },
      { heading: 'Professional Attitude', body: 'Organised, detail-oriented, and committed to process discipline.' },
    ],
    benefits: {
      intro: 'Indian Mentors provides a professional environment where administrative professionals can build strong operational and compliance management skills.',
      items: [
        'Competitive salary structure',
        'Professional and organised work environment',
        'Exposure to operational management within an EdTech organisation',
        'Opportunities to develop administrative and compliance expertise',
        'Skill development in organisational documentation and coordination',
        'Recognition for reliability and operational excellence',
      ],
    },
    growth: {
      intro: 'Administrative professionals at Indian Mentors may progress into advanced operational and management roles.',
      paths: [
        'Senior Administrative Executive',
        'Operations Coordinator',
        'Compliance Manager',
        'Operations & Administration Manager',
        'High-performing professionals may also contribute to process improvement initiatives and organisational governance systems.',
      ],
    },
    whyJoin: {
      intro: 'Working with Indian Mentors offers an opportunity to contribute to the operational foundation of a growing education services organisation. Team members gain experience in:',
      items: [
        'Organisational administration and operations',
        'Compliance and documentation management',
        'Cross-department coordination',
        'Process structuring and operational governance',
      ],
    },
    applyIntro:
      'If you are organised, detail-oriented, and interested in supporting the administrative and compliance operations of an education services organisation, we invite you to apply for the Administrative & Compliance Executive role.',
  },
  {
    slug: 'digital-marketing-executive',
    title: 'Digital Marketing Executive',
    departmentId: 'digital-marketing',
    departmentLabel: 'Marketing',
    location: 'Bhilai, Chhattisgarh',
    locationShort: 'Bhilai',
    industry: 'EdTech',
    employmentType: 'Full-Time',
    employmentFilter: 'full-time',
    workMode: 'On-Site',
    workModeFilter: 'on-site',
    experienceLabel: '0–2 Years preferred',
    experienceFilters: ['fresher', '0-2', '2-5'],
    tags: ['Campaigns', 'SEO', 'Social Media', 'Lead Generation', 'Content'],
    organisation: defaultOrganisation,
    hero: {
      headline: 'Drive Digital Growth for Personalised Education',
      subheadline:
        'Join Indian Mentors as a Digital Marketing Executive and help expand our reach by connecting students and families with personalised tutoring services across India.',
      paragraphs: [
        'Indian Mentors is a fast-growing EdTech organisation providing personalised one-to-one tutoring services designed to support students in achieving strong academic outcomes. As the organisation expands its reach across multiple cities, digital marketing plays a vital role in connecting parents and students with our academic services.',
        'We are looking for a creative and data-driven Digital Marketing Executive who can manage online campaigns, generate qualified leads, strengthen our digital presence, and support the growth of our personalised tutoring programs.',
      ],
    },
    about: {
      paragraphs: [
        'Indian Mentors is a growing personalised tutoring services organisation focused on delivering structured one-to-one learning support for students across India.',
        'Digital marketing plays an important role in promoting these services, generating student enquiries, and building awareness about our personalised academic support model.',
      ],
      bullets: [
        'Personalised home tutoring and online tutoring',
        'Academic mentoring and progress monitoring',
        'Tutor recruitment and academic coordination',
        'Parent–tutor communication support',
      ],
    },
    overview: [
      'The Digital Marketing Executive is responsible for planning and executing digital marketing strategies to promote the services of Indian Mentors.',
      'This role involves managing digital campaigns, generating leads for tutoring services, creating marketing content, and analysing campaign performance.',
      'The position requires a combination of creativity, analytical thinking, and digital platform expertise to help the organisation grow its student network and strengthen its online brand presence.',
    ],
    responsibilities: [
      {
        heading: 'Digital Campaign Management',
        items: [
          'Plan and manage digital marketing campaigns across search engines, social media platforms, education directories, and online advertising networks.',
          'Optimise campaigns to generate quality student and parent enquiries.',
        ],
      },
      {
        heading: 'Lead Generation & Conversion Support',
        items: [
          'Generate qualified leads for personalised tutoring services through digital channels.',
          'Coordinate with the admissions and counselling team to ensure effective follow-up and lead conversion.',
          'Monitor lead sources and campaign performance to improve results.',
        ],
      },
      {
        heading: 'Social Media Management',
        items: [
          'Manage the organisation’s presence across social media platforms.',
          'Create and publish engaging content related to education tips, student success stories, tutor highlights, and academic guidance.',
          'Build a consistent and professional online presence.',
        ],
      },
      {
        heading: 'Content Development',
        items: [
          'Create digital marketing content including social media posts, website content updates, promotional campaigns, and educational blogs.',
          'Ensure content aligns with the brand identity of Indian Mentors.',
        ],
      },
      {
        heading: 'Website & SEO Support',
        items: [
          'Assist in improving the organisation’s website visibility through search engine optimisation (SEO).',
          'Support keyword optimisation, blog publishing, content structuring, and website performance monitoring.',
        ],
      },
      {
        heading: 'Data Analysis & Reporting',
        items: [
          'Track and analyse lead generation numbers, campaign engagement rates, website traffic, and conversions.',
          'Prepare periodic reports and insights for management.',
        ],
      },
      {
        heading: 'Brand Promotion & Awareness',
        items: [
          'Support initiatives to strengthen the digital brand presence of Indian Mentors.',
          'Promote tutoring services, academic expertise, and educational impact through effective digital storytelling and campaigns.',
        ],
      },
    ],
    skills: [
      'Strong understanding of digital marketing platforms and strategies',
      'Experience with social media marketing and content creation',
      'Basic knowledge of search engine optimisation (SEO)',
      'Ability to analyse digital campaign performance and optimise results',
      'Creative thinking and marketing communication skills',
      'Familiarity with online advertising platforms and marketing tools',
      'Organised project management and reporting abilities',
    ],
    kpis: {
      intro: 'Performance in this role will be evaluated based on:',
      items: [
        'Number of qualified leads generated through digital channels',
        'Campaign engagement and conversion rates',
        'Growth in website traffic and online visibility',
        'Social media engagement and audience growth',
        'Effectiveness of digital marketing campaigns',
        'Contribution to overall student enquiry generation',
      ],
    },
    eligibility: [
      { heading: 'Educational Qualification', body: 'Graduate or equivalent qualification preferred. A marketing, communications, or digital media background is an advantage.' },
      { heading: 'Relevant Experience', body: 'Experience in digital marketing, social media, or performance marketing is preferred.' },
      { heading: 'Technical Comfort', body: 'Comfortable with campaign tools, analytics dashboards, and content publishing platforms.' },
    ],
    benefits: {
      intro: 'Indian Mentors offers a professional and creative environment for marketing professionals to grow and develop their skills.',
      items: [
        'Competitive salary structure',
        'Exposure to EdTech marketing strategies',
        'Creative and collaborative work environment',
        'Opportunities to manage digital campaigns and brand growth',
        'Professional learning and skill development',
        'Recognition for performance and innovative ideas',
      ],
    },
    growth: {
      intro: 'Digital Marketing professionals at Indian Mentors may grow into leadership roles within marketing and brand management.',
      paths: [
        'Senior Digital Marketing Executive',
        'Digital Marketing Manager',
        'Growth Marketing Manager',
        'Head of Marketing',
        'High-performing professionals may also lead brand strategy, campaign planning, and expansion marketing initiatives.',
      ],
    },
    whyJoin: {
      intro: 'Working with Indian Mentors offers an opportunity to contribute to the growth of a professional EdTech organisation while developing expertise in digital marketing. Team members gain experience in:',
      items: [
        'Education sector marketing',
        'Lead generation and conversion strategies',
        'Brand development and digital presence',
        'Data-driven marketing decision making',
      ],
    },
    applyIntro:
      'If you are passionate about digital marketing and interested in promoting educational services that support student success, we invite you to apply for the Digital Marketing Executive role.',
  },
  {
    slug: 'erp-tech-operations-executive',
    title: 'ERP & Tech Operations Executive',
    departmentId: 'technology',
    departmentLabel: 'Technology',
    location: 'Bhilai, Chhattisgarh',
    locationShort: 'Bhilai',
    industry: 'EdTech',
    employmentType: 'Full-Time',
    employmentFilter: 'full-time',
    workMode: 'On-Site',
    workModeFilter: 'on-site',
    experienceLabel: '0–2 Years preferred',
    experienceFilters: ['fresher', '0-2', '2-5'],
    tags: ['ERP / CRM', 'Data Management', 'Troubleshooting', 'Process Automation', 'System Support'],
    organisation: defaultOrganisation,
    hero: {
      headline: 'Build and Manage the Technology Backbone of Personalised Education',
      subheadline:
        'Join Indian Mentors as an ERP & Tech Operations Executive and help streamline technology systems that power our personalised tutoring services.',
      paragraphs: [
        'Indian Mentors is a growing EdTech organisation delivering structured and personalised tutoring services to students across India. As our operations expand, technology systems play a critical role in managing student records, tutor coordination, service tracking, and operational workflows.',
        'We are looking for a technically skilled ERP & Tech Operations Executive who can support the implementation, maintenance, and optimisation of our digital systems, CRM platforms, and operational tools.',
      ],
    },
    about: {
      paragraphs: [
        'Indian Mentors is a fast-growing personalised tutoring services organisation focused on delivering high-quality academic support to students through structured one-to-one learning programs.',
        'To manage admissions, tutor recruitment, academic coordination, and parent communication efficiently, Indian Mentors relies on technology systems, digital platforms, and operational software tools. The ERP & Tech Operations team ensures that these systems operate smoothly and support the organisation’s growing academic ecosystem.',
      ],
    },
    overview: [
      'The ERP & Tech Operations Executive is responsible for managing and supporting the organisation’s technology infrastructure, ERP systems, CRM tools, and operational software used across departments.',
      'This role focuses on ensuring that internal systems used for student management, tutor coordination, and service operations function effectively and support daily operational workflows.',
      'The position requires strong technical troubleshooting skills, system management abilities, and cross-team coordination to maintain smooth digital operations.',
    ],
    responsibilities: [
      {
        heading: 'ERP & CRM System Management',
        items: [
          'Support the implementation and maintenance of ERP or CRM systems used for student records, tutor databases, admissions and service records, and academic session tracking.',
          'Ensure data accuracy and smooth functionality of internal platforms.',
        ],
      },
      {
        heading: 'Technical Support for Operations',
        items: [
          'Provide technical assistance to admissions, tutor management, academic operations, and customer support teams.',
          'Resolve system-related issues quickly to avoid operational disruptions.',
        ],
      },
      {
        heading: 'Data Management & System Updates',
        items: [
          'Maintain and update operational data within ERP or CRM systems.',
          'Ensure that student details, tutor assignments, and session data are accurately recorded and maintained.',
        ],
      },
      {
        heading: 'Platform Integration & Process Automation',
        items: [
          'Assist in improving operational workflows through process automation, digital data management, and workflow tracking systems.',
          'Support the integration of digital tools that improve operational efficiency.',
        ],
      },
      {
        heading: 'Website & Technical Coordination',
        items: [
          'Coordinate with website developers and technical vendors when required.',
          'Support basic website updates, technical troubleshooting, and digital platform improvements.',
        ],
      },
      {
        heading: 'Technology Monitoring & System Maintenance',
        items: [
          'Monitor system performance and ensure smooth functioning of internal digital platforms.',
          'Identify and report potential technical issues that may impact operations.',
        ],
      },
      {
        heading: 'Data Security & Access Control',
        items: [
          'Ensure proper access management for internal systems.',
          'Maintain confidentiality and security of organisational data including student and tutor information.',
        ],
      },
    ],
    skills: [
      'Basic understanding of ERP systems or CRM platforms',
      'Strong technical troubleshooting and problem-solving skills',
      'Experience with spreadsheets, databases, and digital workflow tools',
      'Understanding of operational technology systems',
      'Ability to coordinate with technical vendors and developers',
      'Good documentation and system management abilities',
      'Attention to detail in data management and system operations',
    ],
    kpis: {
      intro: 'Performance in this role will be evaluated based on:',
      items: [
        'Smooth functioning of ERP and operational systems',
        'Accuracy of data records within digital platforms',
        'Speed and efficiency in resolving technical issues',
        'Successful support for internal operational teams',
        'System uptime and minimal operational disruption',
        'Contribution to process automation and technology improvements',
      ],
    },
    eligibility: [
      { heading: 'Educational Qualification', body: 'Graduate in Computer Science, IT, or equivalent qualification preferred.' },
      { heading: 'Relevant Experience', body: 'Experience with ERP, CRM, or operational software support is preferred.' },
      { heading: 'Technical Comfort', body: 'Comfortable troubleshooting systems and coordinating with technical vendors.' },
    ],
    benefits: {
      intro: 'Indian Mentors offers a technology-driven work environment where professionals can develop experience in EdTech operations and digital systems management.',
      items: [
        'Competitive salary structure',
        'Exposure to EdTech technology operations',
        'Opportunity to work with operational ERP and CRM systems',
        'Professional work environment with structured processes',
        'Skill development in system management and digital operations',
        'Recognition for innovation and technical problem solving',
      ],
    },
    growth: {
      intro: 'Technology professionals at Indian Mentors can grow into senior roles within operations and technology management.',
      paths: [
        'Senior ERP & Tech Operations Executive',
        'Technology Operations Manager',
        'Systems & Digital Infrastructure Manager',
        'Head of Technology Operations',
        'High-performing professionals may also contribute to technology planning and digital transformation initiatives within the organisation.',
      ],
    },
    whyJoin: {
      intro: 'Working with Indian Mentors provides an opportunity to support the technology infrastructure of a growing EdTech organisation while developing expertise in digital operations. Team members gain experience in:',
      items: [
        'Education technology systems',
        'ERP and CRM operations',
        'Data management and workflow automation',
        'Digital infrastructure supporting academic services',
      ],
    },
    applyIntro:
      'If you are passionate about technology systems and interested in supporting digital operations within the education sector, we invite you to apply for the ERP & Tech Operations Executive role.',
  },
]

export const careerJobSlugs = careerJobs.map((job) => job.slug)

export function getCareerJobBySlug(slug: string) {
  return careerJobs.find((job) => job.slug === slug)
}

export function getRelatedJobs(job: CareerJob, limit = 3) {
  const sameDepartment = careerJobs.filter((item) => item.slug !== job.slug && item.departmentId === job.departmentId)
  const others = careerJobs.filter((item) => item.slug !== job.slug && item.departmentId !== job.departmentId)
  return [...sameDepartment, ...others].slice(0, limit)
}

export function jobApplyHref(job: CareerJob) {
  return careerApplyMailto(job.title)
}

export function jobResumeHref(job: CareerJob) {
  return careerResumeMailto(job.title)
}

export function jobPath(slug: string) {
  return `/careers/${slug}`
}

export { sharedHiringSteps }
