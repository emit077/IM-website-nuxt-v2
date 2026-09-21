import { externalLinks } from './external-links'

export const caseStudiesHero = {
  badge: 'Results',
  title: 'Real student journeys, measured outcomes',
  subtitle: 'See how personalised mentoring changed scores, confidence, and study habits.',
  description:
    'Each case study shares the starting point, the academic approach, and the result — across boards, grades, and subjects.',
  caption: 'Stories from the Indian Mentors academic network.',
  primaryCta: { label: 'Browse Case Studies', href: '#case-study-list' },
  secondaryCta: { label: 'Book Free Demo', href: externalLinks.studentSignup },
  ticker: [
    'CBSE',
    'ICSE',
    'Mathematics',
    'Science',
    'Commerce',
    'Board Results',
  ],
} as const

export const caseStudiesListSection = {
  kicker: 'Results',
  title: 'Real student journeys, measured outcomes',
  classes: '!px-0 !py-0',
  description: 'See how personalised mentoring changed scores, confidence, and study habits.',
  searchPlaceholder: 'Search case studies…',
  emptyTitle: 'No matching case studies',
  emptyDescription: 'Try another filter combination, or clear filters to see every story.',
} as const

export const caseStudiesFinalCta = {
  badge: 'Your turn',
  title: 'Ready for a similar result?',
  description: 'Start with a free demo and a structured academic plan.',
  supporting: 'One student. One trusted academic partner.',
  primaryCta: { label: 'Book Free Demo', href: externalLinks.studentSignup, iconMdi: 'mdi:calendar-check-outline', primary: true },
  secondaryCta: { label: 'Read Articles', href: '/blogs', iconMdi: 'mdi:notebook-edit-outline' },
} as const
