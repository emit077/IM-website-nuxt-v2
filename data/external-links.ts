/**
 * External Indian Mentors app URLs.
 * Use these for CTAs that leave the marketing site.
 */
export const externalLinks = {
  /** Student / parent / tutor login */
  login: 'https://app.indianmentors.in/login',
  /** Student signup — book demo, free consultation, find a tutor, enroll, etc. */
  studentSignup: 'https://app.indianmentors.in/student/registration',
  /** Tutor signup — become a tutor, join as teaching partner, register as tutor */
  tutorRegistration: 'https://app.indianmentors.in/tutor/registration',
  /** Team / admin login */
  adminLogin: 'https://app.indianmentors.in/admin/login',
} as const

export type ExternalLinkKey = keyof typeof externalLinks
