import type { TrustIndicatorItem } from '~/components/ui/TrustIndicators.vue'

export type { TrustIndicatorItem }

export interface TrustItem {
  id?: string
  title: string
  description?: string
  icon: string
}

/** Platform-wide trust stats for hero and landing sections. */
export const trustStats: TrustIndicatorItem[] = [
  {
    value: '1,00,000+',
    label: 'Verified Tutors',
    icon: 'solar:square-academic-cap-linear',
  },
  {
    value: '50,000+',
    label: 'Students Supported',
    icon: 'solar:users-group-two-rounded-linear',
  },
  {
    value: '50,00,000+',
    label: 'Sessions Delivered',
    icon: 'solar:bookmark-linear',
  },
]

export const trustItems: TrustItem[] = [
  {
    id: 'bg',
    title: 'Verified & Trusted',
    description: 'Every tutor is background checked and identity verified.',
    icon: 'solar:shield-check-bold-duotone',
  },
  {
    id: 'subj',
    title: 'Subject Verified',
    description: 'Experts across 250+ subjects and every board.',
    icon: 'solar:book-bookmark-bold-duotone',
  },
  {
    id: 'demo',
    title: 'Demo Evaluated',
    description: 'Each tutor clears a live demo before going live.',
    icon: 'solar:check-circle-bold-duotone',
  },
  {
    id: 'match',
    title: 'Quick Matching',
    description: 'Get the right mentor matched within 24 hours.',
    icon: 'solar:users-group-rounded-bold-duotone',
  },
  {
    id: 'progress',
    title: 'Progress Tracking',
    description: 'Monthly reports on attendance and test scores.',
    icon: 'solar:chart-2-bold-duotone',
  },
  {
    id: 'flexible',
    title: 'Flexible Learning',
    description: 'Online, at-home, and small-group options.',
    icon: 'solar:laptop-bold-duotone',
  },
  {
    id: 'support',
    title: 'Dedicated Support',
    description: 'A real team available 7 days a week.',
    icon: 'solar:headphones-round-bold-duotone',
  },
]
