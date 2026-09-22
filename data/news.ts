import { externalLinks } from './external-links'

export const newsCategories = [
  'Press Release',
  'Education News',
  'Announcement',
  'Partnership',
  'Achievement',
  'Event',
] as const

export const newsListSection = {
  kicker: 'News & Media',
  title: 'Announcements, coverage, and <span class="text-gradient-brand">milestones</span>',
  classes: '!px-0 !py-0',
  description:
    'Stay updated with press coverage, partnerships, and academic announcements from Indian Mentors.',
  searchPlaceholder: 'Search news…',
  emptyTitle: 'No matching news',
  emptyDescription: 'Try another keyword or category, or clear filters to see every update.',
} as const

export const newsFinalCta = {
  badge: 'Next step',
  title: 'Want the story behind the headlines?',
  description: 'Book a free demo and see how personalised mentoring works for your child.',
  supporting: 'Trusted by families across India.',
  primaryCta: {
    label: 'Book Free Demo',
    href: externalLinks.studentSignup,
    iconMdi: 'mdi:calendar-check-outline',
    primary: true,
  },
  secondaryCta: { label: 'View Events', href: '/events', iconMdi: 'mdi:microphone-outline' },
} as const
