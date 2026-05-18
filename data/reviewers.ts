export const DEFAULT_REVIEWER_AVATARS = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
] as const

export type ReviewerAudience = 'parent' | 'student' | 'tutor'

export const REVIEWER_AUDIENCE_LABELS: Record<ReviewerAudience, string> = {
  parent: 'parents',
  student: 'students',
  tutor: 'tutors',
}
