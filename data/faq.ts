export type FaqItem = {
  id: string
  question: string
  answer: string
  subcategory?: string
}

export type FaqCategory = {
  id: string
  title: string
  description: string
  iconMdi: string
  items: FaqItem[]
}

export const faqHero = {
  badge: 'FAQs',
  title: 'Frequently Asked Questions',
  subtitle:
    'Find clear answers about  tutoring, teaching opportunities, academic staffing, partnerships, and support.',
  description:
    'Whether you are a parent looking for a tutor, a student seeking personalised learning, an educator joining as a Teaching Partner, or an institution looking for qualified educators, find the information you need in one place.',
  searchPlaceholder: 'Search your question...',
  searchSuggestions: [
    { label: 'How do I register as a tutor?', href: '/faq/tutors' },
    { label: 'How can my institution recruit teachers?', href: '/faq/institutions' },
  ],
  quickLinksLabel: '',
  quickLinks: [
    // { label: 'Parents & Students', href: '/faq/student-parent' },
    // { label: 'Tutors', href: '/faq/tutors' },
    // { label: 'Institutions', href: '/faq/institutions' },
    // { label: 'Careers', href: '/faq/careers' },
    // { label: 'Help & Support', href: '/faq/support' },
  ],
} as const

export const faqLiveChat = {
  title: 'Live Chat Support',
  intro:
    'For quick assistance, users can connect with our Live Chat Support System available directly on the website.',
  featuresTitle: 'Live Chat Features',
  features: [
    'Instant responses for common queries',
    'Quick guidance for new users',
    'Real-time troubleshooting support',
    'Direct connection with support executives (when required)',
  ],
  closing:
    'Live chat is ideal for general inquiries, navigation support, and quick problem resolution.',
} as const
