import { externalLinks } from './external-links'

export const blogsHero = {
  badge: 'Insights',
  title: 'Expert articles for students and parents',
  subtitle: 'Study techniques, exam strategy, and personalised learning — written by the Indian Mentors academic team.',
  description:
    'Browse practical guidance you can use in the next study session, from board-exam routines to how families support learning at home.',
  caption: 'Updated regularly by our academic team.',
  primaryCta: { label: 'Browse Articles', href: '#blog-list' },
  secondaryCta: { label: 'Book Free Demo', href: externalLinks.studentSignup },
  ticker: [
    'Study Techniques',
    'Board Exams',
    'Personalised Tutoring',
    'Parent Guidance',
    'Mathematics',
    'Learning Routines',
  ],
} as const

export const blogsListSection = {
  kicker: 'Insights',
  title: 'Expert articles for students and parents',
  classes: '!px-0 !py-0',
  description:
    'Study techniques, exam strategy, and personalised learning — written by the Indian Mentors academic team.',
  searchPlaceholder: 'Search articles…',
  emptyTitle: 'No matching articles',
  emptyDescription: 'Try another keyword, or clear filters to see the full library.',
} as const

export const blogsFinalCta = {
  badge: 'Next step',
  title: 'Turn insight into a learning plan',
  description: 'Book a free demo and we’ll match a mentor to your child’s goals.',
  supporting: 'Structured tutoring. Measurable progress.',
  primaryCta: { label: 'Book Free Demo', href: externalLinks.studentSignup, iconMdi: 'mdi:calendar-check-outline', primary: true },
  secondaryCta: { label: 'View Case Studies', href: '/case-studies', iconMdi: 'mdi:chart-box-outline' },
} as const
