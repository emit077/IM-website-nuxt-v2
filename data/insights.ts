import { externalLinks } from './external-links'
import { phoneSupport } from './contact'

export type InsightAccent = 'blue' | 'emerald' | 'amber' | 'violet' | 'indigo' | 'teal'
export type InsightContentType = 'article' | 'case-study' | 'event' | 'news'

export type InsightHubCard = {
  id: string
  type?: InsightContentType
  title: string
  description: string
  highlights: readonly string[]
  cta: { label: string; href: string }
  iconMdi: string
  accent: InsightAccent
}

export type InsightCatalogItem = {
  id: string
  type: InsightContentType
  title: string
  summary: string
  href: string
  grade: string
  subject: string
  topic: string
  iconMdi: string
  featured?: boolean
}

export const insightsHero = {
  badge: 'Insights Hub',
  title: 'Explore Learning Insights<br class="hidden sm:inline" /> That Drive Success',
  subtitle: 'Knowledge. Guidance. Real Results.',
  description:
    'Welcome to the Insights Hub by Indian Mentors—your one-stop destination for expert guidance, academic strategies, success stories, and the latest updates in personalised education. Whether you’re a student aiming to improve performance or a parent seeking the right academic support, our insights are designed to inform, guide, and inspire.',
  caption: 'Discover expert articles, real student success stories, events, and academic resources—all in one place.',
  primaryCta: {
    label: 'Explore Blog Articles',
    href: '/insights?type=article#explore',
    icon: 'mdi:book-open-page-variant-outline',
  },
  secondaryCta: {
    label: 'Start Free Consultation',
    href: externalLinks.studentSignup,
    icon: 'mdi:calendar-check-outline',
  },
} as const

export const insightsHeroHighlights = [
  'Expert Articles',
  'Success Stories',
  'Events & Webinars',
  'Academic Resources',
  'Parent Guidance',
  'Exam Strategies',
] as const

export const insightsNavSection = {
  kicker: 'Explore the Hub',
  title: 'Find the insight that <span class="text-gradient-brand">fits your goal</span>',
  classes: '!px-0 !py-0',
  description:
    'Browse expert articles, real results, events, and updates — organised so students and parents can move from curiosity to clear next steps.',
} as const

export const insightsHubCards: readonly InsightHubCard[] = [
  {
    id: 'articles',
    type: 'article',
    title: 'Blog Articles',
    description:
      'Explore expert-written articles on study techniques, exam preparation, and academic strategies.',
    highlights: ['Study tips & productivity', 'Subject improvement guides', 'Parenting insights'],
    cta: { label: 'Read Articles', href: '/insights?type=article#explore' },
    iconMdi: 'mdi:notebook-edit-outline',
    accent: 'blue',
  },
  {
    id: 'case-studies',
    type: 'case-study',
    title: 'Case Studies',
    description:
      'Discover real student success stories and how personalised tutoring has transformed academic performance.',
    highlights: ['Before & after results', 'Learning challenges & solutions', 'Measurable outcomes'],
    cta: { label: 'View Case Studies', href: '/success-stories' },
    iconMdi: 'mdi:chart-box-outline',
    accent: 'emerald',
  },
  {
    id: 'testimonials',
    title: 'Testimonials',
    description:
      'Hear directly from students and parents about their experience with Indian Mentors.',
    highlights: ['Real feedback', 'Success journeys', 'Parent satisfaction'],
    cta: { label: 'Read Testimonials', href: '/success-stories' },
    iconMdi: 'mdi:star-outline',
    accent: 'amber',
  },
  {
    id: 'news',
    type: 'news',
    title: 'Media & News',
    description: 'Stay updated with announcements, press coverage, and milestones.',
    highlights: ['Latest updates', 'Media mentions', 'Institutional collaborations'],
    cta: { label: 'Explore News', href: '/insights?type=news#explore' },
    iconMdi: 'mdi:newspaper-variant-outline',
    accent: 'violet',
  },
  {
    id: 'events',
    type: 'event',
    title: 'Events & Webinars',
    description:
      'Join interactive sessions, workshops, and webinars led by academic experts.',
    highlights: ['Live learning sessions', 'Exam preparation workshops', 'Career guidance events'],
    cta: { label: 'View Events', href: '/insights?type=event#explore' },
    iconMdi: 'mdi:microphone-outline',
    accent: 'indigo',
  },
  {
    id: 'newsletter',
    title: 'Newsletter',
    description:
      'Subscribe to receive study tips, academic updates, and expert guidance directly in your inbox.',
    highlights: ['Weekly insights', 'Exam strategies', 'Learning resources'],
    cta: { label: 'Subscribe Now', href: '#newsletter' },
    iconMdi: 'mdi:email-newsletter',
    accent: 'teal',
  },
]

export const insightsFeaturedSection = {
  kicker: 'Trending & Popular Insights',
  title: 'Featured content worth <span class="text-gradient-brand">starting with</span>',
  classes: '!px-0 !py-0',
  description:
    'A snapshot of the strategies, results, and live sessions families are exploring right now.',
} as const

export const insightsFeaturedItems = [
  {
    id: 'featured-article',
    typeLabel: 'Featured Article',
    type: 'article' as const,
    title: '10 Effective Study Techniques Every Student Should Know',
    description: 'Improve focus, retention, and exam performance with proven strategies.',
    href: '/insights?type=article&q=study%20techniques#explore',
    iconMdi: 'mdi:notebook-edit-outline',
    accent: 'blue' as const,
  },
  {
    id: 'featured-case-study',
    typeLabel: 'Featured Case Study',
    type: 'case-study' as const,
    title: 'From 52% to 91% in Mathematics',
    description: 'See how personalised tutoring improved concept clarity and results.',
    href: '/success-stories',
    iconMdi: 'mdi:chart-line',
    accent: 'emerald' as const,
  },
  {
    id: 'featured-event',
    typeLabel: 'Featured Event',
    type: 'event' as const,
    title: 'Board Exam Preparation Masterclass',
    description: 'Learn expert strategies for scoring high in board exams.',
    href: '/insights?type=event#explore',
    iconMdi: 'mdi:presentation',
    accent: 'indigo' as const,
  },
] as const

export const insightsWhy = {
  badge: 'Why Explore Our Insights?',
  title: 'Guidance you can <span class="text-gradient-brand">use immediately</span>',
  description:
    'Every article, story, and session is curated to help students learn smarter and help parents support with confidence.',
  classes: '!px-0 !py-0 mx-auto',
  items: [
    {
      title: 'Expert-curated content',
      description: 'Expert-curated academic content for real classrooms, boards, and learning levels.',
      iconMdi: 'mdi:school-outline',
    },
    {
      title: 'Practical strategies',
      description: 'Practical, easy-to-apply techniques students can try in the next study session.',
      iconMdi: 'mdi:lightbulb-on-outline',
    },
    {
      title: 'Real success stories',
      description: 'Real success stories and results that show what personalised support can change.',
      iconMdi: 'mdi:trophy-outline',
    },
    {
      title: 'Continuous updates',
      description: 'Continuous updates on education trends, events, and new academic resources.',
      iconMdi: 'mdi:update',
    },
    {
      title: 'Students and parents',
      description: 'Designed for both students and parents — guidance that supports the whole family.',
      iconMdi: 'mdi:account-group-outline',
    },
  ],
}

export const insightsApproach = {
  kicker: 'Personalised Learning Approach',
  title: 'Insights + Guidance = <span class="text-white">Real Results</span>',
  classes: '!px-0 !py-0',
  description:
    'While our insights help you learn better, personalised tutoring ensures consistent academic improvement. At Indian Mentors, we combine expert knowledge with customised teaching strategies to support every student’s unique learning journey.',
  image: 'assets/img/why-choose/academic-ecosystem.webp',
  imageAlt: 'Students and mentors collaborating through personalised learning',
  points: [
    { title: 'Insights', description: 'Learn proven strategies, exam habits, and academic frameworks.', iconMdi: 'mdi:book-open-variant-outline' },
    { title: 'Guidance', description: 'Work one-to-one with a matched mentor and structured plan.', iconMdi: 'mdi:account-school-outline' },
    { title: 'Results', description: 'Build clarity, confidence, and measurable performance gains.', iconMdi: 'mdi:chart-timeline-variant' },
  ],
  cta: { label: 'Start Personalised Tutoring', href: externalLinks.studentSignup },
} as const

export const insightsImpactSection = {
  kicker: 'Impact Snapshot',
  title: 'Outcomes that make the hub <span class="text-gradient-brand">worth exploring</span>',
  classes: '!px-0 !py-0',
  description: 'Insights are useful. Results are the reason families stay.',
} as const

export const insightsImpactStats = [
  { value: 'Thousands', label: 'Students supported', icon: 'mdi:target' },
  { value: 'Significant', label: 'Academic improvement', icon: 'mdi:trending-up' },
  { value: 'Multi-board', label: 'Coverage nationwide', icon: 'mdi:earth' },
  { value: 'High', label: 'Parent & student satisfaction', icon: 'mdi:star-outline' },
] as const

export const insightsSearchSection = {
  kicker: 'Search & Explore',
  title: 'Find articles, stories, and <span class="text-gradient-brand">topics that matter</span>',
  classes: '!px-0 !py-0',
  description: 'Filter by content type, grade, subject, or topic to get to the right insight faster.',
  placeholder: 'Search articles, case studies, or topics…',
} as const

export const insightContentTypes = [
  { id: 'all', label: 'All types' },
  { id: 'article', label: 'Articles' },
  { id: 'case-study', label: 'Case Studies' },
  { id: 'event', label: 'Events' },
  { id: 'news', label: 'News' },
] as const

export const insightGrades = [
  { id: 'all', label: 'All grades' },
  { id: 'primary', label: 'Primary' },
  { id: 'middle', label: 'Middle' },
  { id: 'secondary', label: 'Secondary' },
  { id: 'senior', label: 'Senior Secondary' },
  { id: 'all-levels', label: 'All levels' },
] as const

export const insightSubjects = [
  { id: 'all', label: 'All subjects' },
  { id: 'mathematics', label: 'Mathematics' },
  { id: 'science', label: 'Science' },
  { id: 'english', label: 'English' },
  { id: 'exam-prep', label: 'Exam Preparation' },
  { id: 'parenting', label: 'Parenting' },
] as const

export const insightTopics = [
  { id: 'all', label: 'All topics' },
  { id: 'study-techniques', label: 'Study Techniques' },
  { id: 'exam-preparation', label: 'Exam Preparation' },
  { id: 'motivation', label: 'Motivation' },
  { id: 'board-exams', label: 'Board Exams' },
  { id: 'progress', label: 'Progress & Results' },
] as const

export const insightTypeMeta: Record<
  InsightContentType,
  { label: string; iconMdi: string; accent: InsightAccent }
> = {
  article: { label: 'Article', iconMdi: 'mdi:notebook-edit-outline', accent: 'blue' },
  'case-study': { label: 'Case Study', iconMdi: 'mdi:chart-box-outline', accent: 'emerald' },
  event: { label: 'Event', iconMdi: 'mdi:microphone-outline', accent: 'indigo' },
  news: { label: 'News', iconMdi: 'mdi:newspaper-variant-outline', accent: 'violet' },
}

export const insightsCatalog: readonly InsightCatalogItem[] = [
  {
    id: 'study-techniques',
    type: 'article',
    title: '10 Effective Study Techniques Every Student Should Know',
    summary: 'Improve focus, retention, and exam performance with proven strategies.',
    href: '/student-parent',
    grade: 'all-levels',
    subject: 'exam-prep',
    topic: 'study-techniques',
    iconMdi: 'mdi:notebook-edit-outline',
    featured: true,
  },
  {
    id: 'parent-exam-support',
    type: 'article',
    title: 'How Parents Can Support Exam Preparation at Home',
    summary: 'Simple routines that reduce stress and help students stay consistent before exams.',
    href: '/student-parent',
    grade: 'secondary',
    subject: 'parenting',
    topic: 'exam-preparation',
    iconMdi: 'mdi:home-heart',
  },
  {
    id: 'board-time-management',
    type: 'article',
    title: 'Time Management Strategies for Board Exam Students',
    summary: 'A practical weekly plan for revision, rest, and last-mile exam readiness.',
    href: '/academic-coverage',
    grade: 'secondary',
    subject: 'exam-prep',
    topic: 'board-exams',
    iconMdi: 'mdi:clock-outline',
  },
  {
    id: 'maths-concept-clarity',
    type: 'article',
    title: 'Building Concept Clarity in Mathematics',
    summary: 'Move beyond memorising formulas with step-by-step concept building.',
    href: '/academic-coverage',
    grade: 'middle',
    subject: 'mathematics',
    topic: 'study-techniques',
    iconMdi: 'mdi:function-variant',
  },
  {
    id: 'reading-habits',
    type: 'article',
    title: 'Reading Habits That Improve Comprehension',
    summary: 'Daily reading practices that strengthen language fluency and exam answers.',
    href: '/academic-coverage',
    grade: 'primary',
    subject: 'english',
    topic: 'study-techniques',
    iconMdi: 'mdi:book-open-page-variant-outline',
  },
  {
    id: 'maths-jump',
    type: 'case-study',
    title: 'From 52% to 91% in Mathematics',
    summary: 'See how personalised tutoring improved concept clarity and results.',
    href: '/success-stories',
    grade: 'secondary',
    subject: 'mathematics',
    topic: 'progress',
    iconMdi: 'mdi:chart-line',
    featured: true,
  },
  {
    id: 'exam-anxiety',
    type: 'case-study',
    title: 'Overcoming Exam Anxiety Before Class 10 Boards',
    summary: 'A structured mentor plan that rebuilt confidence and exam temperament.',
    href: '/success-stories',
    grade: 'secondary',
    subject: 'exam-prep',
    topic: 'motivation',
    iconMdi: 'mdi:heart-pulse',
  },
  {
    id: 'science-consistency',
    type: 'case-study',
    title: 'Consistency That Lifted Science Scores',
    summary: 'Weekly practice, doubt-clearing, and progress reviews that changed outcomes.',
    href: '/success-stories',
    grade: 'middle',
    subject: 'science',
    topic: 'progress',
    iconMdi: 'mdi:flask-outline',
  },
  {
    id: 'board-masterclass',
    type: 'event',
    title: 'Board Exam Preparation Masterclass',
    summary: 'Learn expert strategies for scoring high in board exams.',
    href: externalLinks.studentSignup,
    grade: 'secondary',
    subject: 'exam-prep',
    topic: 'board-exams',
    iconMdi: 'mdi:presentation',
    featured: true,
  },
  {
    id: 'academic-planning-webinar',
    type: 'event',
    title: 'Parent-Student Academic Planning Webinar',
    summary: 'A live session on goal-setting, tutor matching, and study routines for the year.',
    href: '/contact',
    grade: 'all-levels',
    subject: 'parenting',
    topic: 'study-techniques',
    iconMdi: 'mdi:account-group-outline',
  },
  {
    id: 'career-guidance',
    type: 'event',
    title: 'Career Guidance Workshop for Class 11–12',
    summary: 'Subject choices, competitive exam paths, and academic planning for senior students.',
    href: '/contact',
    grade: 'senior',
    subject: 'exam-prep',
    topic: 'exam-preparation',
    iconMdi: 'mdi:briefcase-outline',
  },
  {
    id: 'coverage-update',
    type: 'news',
    title: 'Expanded Academic Coverage Across Boards',
    summary: 'Updates on multi-board support, subject depth, and nationwide mentoring access.',
    href: '/academic-coverage',
    grade: 'all-levels',
    subject: 'exam-prep',
    topic: 'progress',
    iconMdi: 'mdi:bullhorn-outline',
  },
  {
    id: 'hub-resources',
    type: 'news',
    title: 'New Learning Resources Added to the Insights Hub',
    summary: 'Fresh guides, stories, and event recordings for students and parents.',
    href: '/insights#explore',
    grade: 'all-levels',
    subject: 'parenting',
    topic: 'study-techniques',
    iconMdi: 'mdi:newspaper-variant-outline',
  },
  {
    id: 'institutional-collab',
    type: 'news',
    title: 'Institutional Collaborations and Mentoring Milestones',
    summary: 'How schools and families are using structured mentoring at scale.',
    href: '/institutions',
    grade: 'all-levels',
    subject: 'parenting',
    topic: 'progress',
    iconMdi: 'mdi:handshake-outline',
  },
]

export const insightsNewsletter = {
  badge: 'Stay Updated',
  title: "Stay Updated with <span class='text-gradient-brand'>Expert Insights</span>",
  description: 'Get curated academic tips, strategies, and updates delivered to your inbox.',
} as const

export const insightsFinalCta = {
  badge: 'Personalised Guidance',
  title: 'Ready to Improve Academic Performance?',
  description:
    'Explore insights—but achieve results with personalised guidance. Join Indian Mentors for structured one-to-one tutoring designed for your success.',
  supporting: 'Insights inform. Mentorship transforms.',
  primaryCta: {
    label: 'Start Free Trial',
    href: externalLinks.studentSignup,
    iconMdi: 'mdi:rocket-launch-outline',
    primary: true,
  },
  secondaryCta: {
    label: 'Talk to an Academic Advisor',
    href: `tel:${phoneSupport.number.tel}`,
    iconMdi: 'mdi:phone-outline',
  },
} as const

export const insightsFaqSection = {
  kicker: 'FAQs',
  title: 'Questions about the Insights Hub',
  classes: '!px-0 !py-0',
} as const

export const insightsFaqs = [
  {
    id: 'content-types',
    question: 'What kind of content is available in the Insights Hub?',
    answer:
      'You can explore articles, case studies, testimonials, events, news updates, and newsletters.',
  },
  {
    id: 'audience',
    question: 'Is the content useful for both students and parents?',
    answer: 'Yes, our insights are designed to support both students and parents.',
  },
  {
    id: 'frequency',
    question: 'How often is new content added?',
    answer: 'We regularly update our hub with fresh articles, events, and success stories.',
  },
] as const

export const insightsClosing = {
  title: 'Learn Smarter. Perform Better. Achieve More.',
  text: 'Explore the Insights Hub and take the next step towards academic success with Indian Mentors.',
  cta: { label: 'Start Free Consultation', href: externalLinks.studentSignup },
} as const
