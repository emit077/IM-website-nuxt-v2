/** Response envelope from Django `ResponseHelper`. */
export type ApiEnvelope<T> = {
  success: boolean
  message: string
  result: T
  timestamp: string
}

export type ApiErrorEnvelope = {
  success: false
  message: string
  errors?: Record<string, unknown>
}

export type WebsiteBanner = {
  id: number
  web_banner: string | null
  mobile_banner: string | null
  banner_link: string | null
}

export type WebsiteHeroStat = {
  value: string
  label: string
  icon: string
}

export type WebsiteHeroScreen = {
  id: number
  page_name: string
  badge: string
  title: string
  subtitle: string
  description: string
  caption: string
  bg_image: string | null
  mobile_bg: string | null
  primary_cta_label: string
  primary_route: string
  secondary_cta_label: string
  secondary_route: string
  stats: WebsiteHeroStat[]
}

export type WebsiteTestimonial = {
  id: number
  category: string
  title: string
  quote: string
  person: string
  role: string
  duration: string | null
  result: string | null
  thumb: string | null
  rating: string | number
  testimonial_video: string | null
  display_order: number
}

export type WebsiteNewsletterSubscription = {
  id: number
  email: string
  subscribed_on: string
  is_subscribed: boolean
}

export type WebsiteTeamMember = {
  id: number
  name: string
  designation: string
  department?: string | null
  msg: string | null
  linkedin_link: string | null
  image?: string | null
  photo?: string | null
  profile_image?: string | null
  display_order?: number | null
}

export type WebsiteCity = {
  id: number
  city_name: string
  city_image: string | null
  address: string
  direction_link: string | null
  is_popular: boolean
  badge: string
}

export type WebsitePrimaryContact = {
  id: number
  mobile: string
  email: string
  whatsapp: string | null
  working_hours: string | null
}

export type WebsiteAuthorisedContact = {
  id: number
  mobile: string
}

export type BrochureType = 'student' | 'tutor' | 'Institutions' | 'Channel Partner'

export type WebsiteBrochure = {
  id: number
  brochure: string | null
  brochure_type: BrochureType | string
}

export type WebsiteFaqCategory = {
  id: number
  title: string
  subtitle: string | null
  description: string | null
  display_order: number
  icon?: string | null
}

export type WebsiteFaq = {
  id: number
  que: string
  ans: string
  category: string | WebsiteFaqCategory | null
  subcategory?: string | null
  display_order?: number
  is_popular?: boolean
}

export type WebsiteContentAuthor = {
  name: string
  image: string | null
  designation: string | null
}

export type WebsiteBlogSectionItem = {
  title: string
  body: string
}

export type WebsiteBlogSection = {
  heading: string
  items: WebsiteBlogSectionItem[]
}

export type WebsiteBlog = {
  id: number
  title: string
  slug: string
  image: string | null
  category: string
  read_time: number
  author: WebsiteContentAuthor | null
  introduction: string
  sections: WebsiteBlogSection[]
  conclusion: string
  display_order: number
}

export type WebsiteStudentProfile = {
  grade: string
  board: string
  subject: string
  initial_score: string
}

export type WebsiteCaseStudy = {
  id: number
  title: string
  image: string | null
  category: string
  read_time: number
  author: WebsiteContentAuthor | null
  student_profile: WebsiteStudentProfile | null
  challenge: string
  approach: string[]
  outcome: string[]
  testimonial: string
  display_order: number
}

export type WebsiteNews = {
  id: number
  title: string
  slug: string
  image: string | null
  category: string
  published_on: string
  location: string | null
  body: string[]
  quote: string | null
  quote_attribution: string | null
  author: WebsiteContentAuthor | null
  display_order: number
}

export type WebsiteEvent = {
  id: number
  title: string
  slug: string
  image: string | null
  event_date: string
  start_time: string | null
  end_time: string | null
  mode: string
  mode_display: string | null
  venue: string | null
  audience: string | null
  overview: string
  learning_points: string[]
  register_link: string | null
  display_order: number
}
