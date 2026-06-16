export type ProcessStep = {
  no: string
  iconMdi: string
  title: string
  description: string
  points?: string[]
  accent: 'violet' | 'blue' | 'emerald' | 'orange' | 'indigo'
}

export type BenefitCard = {
  id: string
  iconMdi: string
  title: string
  description: string
  points: string[]
  footnote?: string
  accent: 'blue' | 'emerald' | 'orange' | 'violet'
}

export const heroContent = {
  badge: 'Channel Partner Program',
  titleLead: 'Build your own education business with',
  titleHighlight: 'Indian Mentors',
  description:
    'Indian Mentors invites passionate entrepreneurs, education consultants, and community leaders to become Authorised Channel Partners and manage personalised tutoring services within their assigned region, city, or territory.',
  subDescription:
    'As a Channel Partner, you represent Indian Mentors locally — coordinating student registrations, tutor onboarding, and tutoring operations while leveraging our brand, digital platform, and national academic network.',
  tagline: 'Empowering Local Leaders to Deliver Quality Education.',
  primaryCta: { label: 'Register as a Channel Partner', href: '#partner-register' },
  secondaryCta: { label: 'Schedule a Partnership Discussion', href: '#partner-register' },
}

export const heroHighlights = [
  { iconMdi: 'mdi:map-marker-radius-outline', label: 'Exclusive Territory' },
  { iconMdi: 'mdi:chart-line', label: 'Transparent Earnings' },
  { iconMdi: 'mdi:monitor-dashboard', label: 'Dedicated Dashboard' },
  { iconMdi: 'mdi:school-outline', label: 'National Academic Network' },
]

export const roleSection = {
  kicker: 'What Does a Channel Partner Do?',
  title: 'Your role in the Indian Mentors ecosystem',
  description:
    'As an Authorised Reseller, you operate as the local representative of Indian Mentors, managing academic service coordination within your territory.',
  note: 'While you operate independently in your region, you remain connected to our centralised digital platform and support system.',
}

export const responsibilities = [
  {
    iconMdi: 'mdi:office-building-cog-outline',
    title: 'Manage Local Operations',
    description: 'Run day-to-day tutoring operations within your assigned territory.',
  },
  {
    iconMdi: 'mdi:account-multiple-plus-outline',
    title: 'Coordinate Registrations',
    description: 'Handle student and parent registrations in your region.',
  },
  {
    iconMdi: 'mdi:account-check-outline',
    title: 'Onboard & Verify Tutors',
    description: 'Recruit and verify qualified tutors in your local market.',
  },
  {
    iconMdi: 'mdi:calendar-clock-outline',
    title: 'Schedule Demo Sessions',
    description: 'Support demo session scheduling between tutors and students.',
  },
  {
    iconMdi: 'mdi:clipboard-check-outline',
    title: 'Enrollment Support',
    description: 'Assist with student enrollment and ongoing service coordination.',
  },
  {
    iconMdi: 'mdi:shield-star-outline',
    title: 'Maintain Quality Standards',
    description: 'Ensure tutoring services consistently meet platform standards.',
  },
  {
    iconMdi: 'mdi:account-group-outline',
    title: 'Build Local Networks',
    description: 'Develop strong academic relationships within your community.',
  },
]

export const processSection = {
  kicker: 'Partnership Process',
  title: 'Simple and structured onboarding',
  description:
    'Our partnership journey is designed to be simple, transparent, and professionally guided.',
  journey: ['Register', 'Collaborate', 'Earn'],
}

export const processSteps: ProcessStep[] = [
  {
    no: '01',
    iconMdi: 'mdi:file-document-edit-outline',
    title: 'Submit Partnership Application',
    description:
      'Complete the online Channel Partner application form to express your interest in joining the Indian Mentors network.',
    accent: 'violet',
  },
  {
    no: '02',
    iconMdi: 'mdi:phone-in-talk-outline',
    title: 'Initial Discussion',
    description: 'Our partnership team will connect with you to understand:',
    points: [
      'Your professional background',
      'Preferred operational territory',
      'Local market understanding',
      'Business goals and expectations',
    ],
    accent: 'blue',
  },
  {
    no: '03',
    iconMdi: 'mdi:check-decagram-outline',
    title: 'Partnership Approval',
    description: 'Eligible applicants will receive official confirmation, including:',
    points: ['Territory allocation', 'Partnership agreement', 'Operational guidelines'],
    accent: 'emerald',
  },
  {
    no: '04',
    iconMdi: 'mdi:school-outline',
    title: 'Training and Onboarding',
    description: 'Approved partners receive structured training on:',
    points: [
      'Personalised tutoring service model',
      'Parent counselling and student assessment process',
      'Student enrollment workflow',
      'CRM and lead management platform',
    ],
    accent: 'orange',
  },
  {
    no: '05',
    iconMdi: 'mdi:rocket-launch-outline',
    title: 'Start Operations',
    description: 'Once onboarding is complete, you can begin operations by:',
    points: [
      'Managing student enquiries',
      'Coordinating demo tutoring sessions',
      'Facilitating student enrollments',
      'Expanding the tutor network in your region',
    ],
    accent: 'indigo',
  },
]

export const benefitsSection = {
  kicker: 'Key Benefits of the Channel Partner Panel',
  title: 'A transparent and scalable education business model',
  description:
    'Indian Mentors provides Channel Partners with the tools, technology, and support needed to run a successful local tutoring business.',
}

export const benefitCards: BenefitCard[] = [
  {
    id: 'decentralised-growth',
    iconMdi: 'mdi:chart-timeline-variant-shimmer',
    title: 'Decentralised Growth',
    description: 'Each partner manages operations regionally, allowing:',
    points: [
      'Faster response to student needs',
      'Better local service delivery',
      'Scalable expansion across multiple regions',
    ],
    footnote: 'This decentralised approach strengthens our nationwide academic network.',
    accent: 'blue',
  },
  {
    id: 'transparent-dashboard',
    iconMdi: 'mdi:monitor-dashboard',
    title: 'Transparent Dashboard',
    description: 'Partners receive access to a dedicated operational dashboard, which provides:',
    points: [
      'Student and tutor tracking',
      'Enrollment and registration analytics',
      'Revenue and earnings reports',
      'Payment tracking and management',
    ],
    footnote: 'There are no hidden calculations, ensuring complete transparency.',
    accent: 'emerald',
  },
  {
    id: 'community-engagement',
    iconMdi: 'mdi:handshake-outline',
    title: 'Direct Community Engagement',
    description: 'Channel Partners interact directly with:',
    points: [
      'Students and parents',
      'Local tutors and educators',
      'Schools and academic institutes',
      'Corporate learning clients',
    ],
    footnote: 'This enables you to build strong educational relationships within your community.',
    accent: 'orange',
  },
  {
    id: 'scalable-growth',
    iconMdi: 'mdi:trending-up',
    title: 'Scalable Growth',
    description: 'The partnership model allows you to expand operations gradually — grow from:',
    points: [
      'Local area partnerships',
      'City-level operations',
      'District-level coverage',
      'State-level educational networks',
    ],
    footnote: 'All while maintaining operational control.',
    accent: 'violet',
  },
]

export const whoCanApplySection = {
  kicker: 'Who Can Apply?',
  title: 'Ideal partner profiles',
  description:
    'The Indian Mentors Channel Partner Program is suitable for individuals and organisations already connected to the education ecosystem.',
  note: 'If you understand your local education market and academic needs, this partnership provides a strong business opportunity.',
}

export const eligibleApplicants = [
  { iconMdi: 'mdi:account-tie-outline', label: 'Education Consultants' },
  { iconMdi: 'mdi:home-city-outline', label: 'Tuition Bureau Owners' },
  { iconMdi: 'mdi:human-male-board', label: 'Coaching Centre Operators' },
  { iconMdi: 'mdi:school-outline', label: 'School Coordinators' },
  { iconMdi: 'mdi:briefcase-account-outline', label: 'Freelance Academic Managers' },
  { iconMdi: 'mdi:laptop-account', label: 'EdTech Entrepreneurs' },
  { iconMdi: 'mdi:storefront-outline', label: 'Local Business Owners in Education' },
]

export const whyPartnerSection = {
  kicker: 'Why Partner with Indian Mentors?',
  title: 'A strong foundation for your education business',
  description:
    'Indian Mentors combines national brand strength with regional leadership opportunities.',
  note: 'This hybrid model ensures that partners benefit from both technology and community relationships.',
}

export const partnershipAdvantages = [
  { iconMdi: 'mdi:certificate-outline', label: 'Established academic brand credibility' },
  { iconMdi: 'mdi:bullhorn-outline', label: 'Centralised marketing and digital promotion' },
  { iconMdi: 'mdi:sitemap-outline', label: 'Structured operational framework' },
  { iconMdi: 'mdi:laptop', label: 'Technology-driven management platform' },
  { iconMdi: 'mdi:cash-check', label: 'Transparent performance-based earnings' },
  { iconMdi: 'mdi:headset', label: 'Continuous training and operational support' },
]

export const partnershipBenefitsSection = {
  kicker: 'Partnership Benefits',
  title: 'Growth through educational collaboration',
  description:
    'Indian Mentors offers a scalable partnership ecosystem designed for long-term success.',
  note: 'Together, we aim to expand access to quality personalised tutoring services across India.',
}

export const partnershipBenefits = [
  {
    iconMdi: 'mdi:sitemap-outline',
    title: 'Structured Operational Framework',
    description: 'Clear processes and guidelines for every part of your operations.',
  },
  {
    iconMdi: 'mdi:bullhorn-variant-outline',
    title: 'Brand & Marketing Support',
    description: 'Brand association backed by centralised marketing campaigns.',
  },
  {
    iconMdi: 'mdi:account-arrow-right-outline',
    title: 'Lead Generation System',
    description: 'A managed pipeline of student enquiries for your territory.',
  },
  {
    iconMdi: 'mdi:cash-multiple',
    title: 'Transparent Revenue Sharing',
    description: 'Clear, performance-based earnings with no hidden calculations.',
  },
  {
    iconMdi: 'mdi:lifebuoy',
    title: 'Dedicated Backend Support',
    description: 'Operational assistance from our central support team.',
  },
  {
    iconMdi: 'mdi:book-open-page-variant-outline',
    title: 'Continuous Learning Resources',
    description: 'Ongoing training and development resources for partners.',
  },
]

export const finalCta = {
  title: 'Ready to Start Your Education Venture?',
  description:
    'If you are passionate about education and entrepreneurship, the Indian Mentors Channel Partner Program offers an opportunity to build a meaningful and scalable business. Join a growing network of partners helping students achieve academic success across multiple cities and regions.',
  primaryCta: { label: 'Register Now', href: '#partner-register' },
  secondaryCta: { label: 'Talk to a Partnership Expert', href: 'tel:+917389563564' },
  tertiaryCta: { label: 'Download Partnership Brochure', href: '#partner-register' },
  closingTitle: 'Indian Mentors — Where Learning Meets Leadership.',
  closingStatement:
    'Together, we are building a nationwide ecosystem that connects students, tutors, and communities through personalised education.',
}
