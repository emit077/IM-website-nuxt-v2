import { externalLinks } from './external-links'

export const eventModes = [
  { id: 'online', label: 'Online' },
  { id: 'offline', label: 'Offline' },
] as const

export const eventsListSection = {
  kicker: 'Events & Webinars',
  title: 'Live sessions, workshops, and <span class="text-gradient-brand">expert guidance</span>',
  classes: '!px-0 !py-0',
  description:
    'Join board-exam masterclasses, parent webinars, and academic workshops led by Indian Mentors.',
  searchPlaceholder: 'Search events…',
  emptyTitle: 'No matching events',
  emptyDescription: 'Try another keyword or mode, or clear filters to see every session.',
} as const

export const eventsFinalCta = {
  badge: 'Join a session',
  title: 'Ready to learn with us live?',
  description: 'Register for a webinar, or book a free demo if you want a personalised plan.',
  supporting: 'Live guidance. Practical takeaways.',
  primaryCta: {
    label: 'Book Free Demo',
    href: externalLinks.studentSignup,
    iconMdi: 'mdi:calendar-check-outline',
    primary: true,
  },
  secondaryCta: { label: 'Read News', href: '/news', iconMdi: 'mdi:newspaper-variant-outline' },
} as const
