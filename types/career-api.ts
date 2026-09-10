export type CareerEmploymentType = 'Intern' | 'Full-Time' | 'Part-Time' | 'Contract'

export type CareerWorkModel = 'Onsite' | 'Hybrid' | 'Remote' | 'Field Based'

export type CareerApplicationType = 'Apply Now' | 'Submit Resume'

export type CareerCity = {
  id: number
  name: string
  state: string
  is_active: boolean
}

export type CareerJobListItem = {
  id: number
  slug: string
  headline: string
  intro: string
  position: string
  department: string
  city: CareerCity | null
  industry: string
  experience: string
  primary_employment_type: CareerEmploymentType | string
  work_model: CareerWorkModel | string
  is_active: boolean
  display_order: number
  posted_on: string | null
  closing_on: string | null
  is_open: boolean
}

export type CareerJobResponsibility = {
  id: number
  sequence_number: number
  title: string
  description: string
}

export type CareerJobRequirement = {
  id: number
  display_order: number
  category: string
  description: string
}

export type CareerJobBenefit = {
  id: number
  display_order: number
  title: string
}

export type CareerJobDetail = CareerJobListItem & {
  role_overview: string
  apply_intro: string
  responsibilities: CareerJobResponsibility[]
  requirements: CareerJobRequirement[]
  benefits: CareerJobBenefit[]
}

export type CareerApplicationResult = {
  application_id: string
  application_type: CareerApplicationType | string
  full_name: string
  email: string
  mobile: string
  current_location: string
  resume: string
  cover_note: string
  preferred_employment_type: CareerEmploymentType | string
  preferred_work_model: CareerWorkModel | string
  years_of_experience: string
  status: string
}

export type CareerApplyPayload = {
  application_type: CareerApplicationType
  full_name: string
  email: string
  mobile: string
  current_location?: string
  resume: File
  cover_note?: string
  preferred_employment_type?: CareerEmploymentType | ''
  preferred_work_model?: CareerWorkModel | ''
  years_of_experience?: string
}

export type CareerMutationSuccess<T> = {
  success: true
  message: string
  data: T
}

export type CareerMutationFailure = {
  success: false
  message: string
  errors?: Record<string, unknown>
  status?: number
}

export type CareerMutationResult<T> = CareerMutationSuccess<T> | CareerMutationFailure
