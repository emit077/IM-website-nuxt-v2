/** Response envelope from Django `ResponseHelper`. */
export type ApiEnvelope<T> = {
  success: boolean
  message: string
  result: T
  timestamp: string
}

export type WebsiteBanner = {
  id: number
  web_banner: string | null
  mobile_banner: string | null
  banner_link: string | null
}

export type WebsiteTestimonial = {
  id: number
  testimonial_video: string | null
  thumbnail: string | null
  testimonial: string
  rating: string | number
  name: string
  details: string | null
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
  msg: string | null
  linkedin_link: string | null
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

export type WebsiteFaq = {
  id: number
  que: string
  ans: string
  category: string
}
