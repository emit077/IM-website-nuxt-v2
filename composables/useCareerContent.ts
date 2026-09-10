import type {
  CareerApplicationResult,
  CareerApplyPayload,
  CareerCity,
  CareerJobDetail,
  CareerJobListItem,
  CareerMutationResult,
} from '~/types/career-api'

export type CareerJobFilters = {
  department?: string
  city?: string
  employment_type?: string
  work_model?: string
}

export function formatCareerLocation(city: CareerCity | null | undefined) {
  if (!city?.name) return ''
  return city.state ? `${city.name}, ${city.state}` : city.name
}

export function splitCareerParagraphs(value?: string | null) {
  return String(value || '')
    .split(/\n+/)
    .map((part) => part.trim())
    .filter(Boolean)
}

export function sortCareerJobs<T extends { display_order: number }>(items: T[]) {
  return [...items].sort((a, b) => a.display_order - b.display_order)
}

export function flattenSerializerErrors(errors?: Record<string, unknown> | null) {
  if (!errors || typeof errors !== 'object') return {} as Record<string, string>

  const out: Record<string, string> = {}
  for (const [key, value] of Object.entries(errors)) {
    if (Array.isArray(value)) {
      out[key] = value.map(String).filter(Boolean).join(' ')
    } else if (typeof value === 'string') {
      out[key] = value
    }
  }
  return out
}

export function useCareerCities() {
  const { fetchWebsiteList } = useWebsiteApi()

  return useAsyncData(
    'career-cities',
    async () => {
      try {
        const rows = await fetchWebsiteList<CareerCity>('/api/career/cities/', undefined, {
          throwOnError: true,
        })
        return rows.filter((city) => city.is_active)
      } catch {
        return [] as CareerCity[]
      }
    },
    { default: () => [] as CareerCity[] },
  )
}

export function useCareerJobs(filters: MaybeRefOrGetter<CareerJobFilters>) {
  const { fetchWebsiteList } = useWebsiteApi()
  const resolved = computed(() => toValue(filters))

  return useAsyncData(
    'career-job-list',
    async () => {
      try {
        const rows = await fetchWebsiteList<CareerJobListItem>('/api/career/jobs/', resolved.value, {
          throwOnError: true,
        })
        return { items: sortCareerJobs(rows), failed: false }
      } catch {
        return { items: [] as CareerJobListItem[], failed: true }
      }
    },
    {
      watch: [resolved],
      default: () => ({ items: [] as CareerJobListItem[], failed: false }),
    },
  )
}

export function useCareerJob(slug: MaybeRefOrGetter<string>) {
  const { fetchWebsiteItem } = useWebsiteApi()
  const resolved = computed(() => String(toValue(slug) || ''))

  return useAsyncData(
    `career-job-detail-${resolved.value}`,
    async () => {
      if (!resolved.value) return { item: null as CareerJobDetail | null, failed: false }
      try {
        return {
          item: await fetchWebsiteItem<CareerJobDetail>(`/api/career/jobs/${resolved.value}/`),
          failed: false,
        }
      } catch {
        return { item: null as CareerJobDetail | null, failed: true }
      }
    },
    {
      watch: [resolved],
      default: () => ({ item: null as CareerJobDetail | null, failed: false }),
    },
  )
}

export function useCareerApply() {
  const { postWebsiteForm } = useWebsiteApi()

  function submitApplication(
    slug: string,
    payload: CareerApplyPayload,
  ): Promise<CareerMutationResult<CareerApplicationResult>> {
    const body = new FormData()
    body.append('application_type', payload.application_type)
    body.append('full_name', payload.full_name)
    body.append('email', payload.email)
    body.append('mobile', payload.mobile)
    body.append('resume', payload.resume)

    if (payload.current_location) body.append('current_location', payload.current_location)
    if (payload.cover_note) body.append('cover_note', payload.cover_note)
    if (payload.preferred_employment_type) {
      body.append('preferred_employment_type', payload.preferred_employment_type)
    }
    if (payload.preferred_work_model) {
      body.append('preferred_work_model', payload.preferred_work_model)
    }
    if (payload.years_of_experience) {
      body.append('years_of_experience', payload.years_of_experience)
    }

    return postWebsiteForm<CareerApplicationResult>(`/api/career/jobs/${slug}/apply/`, body)
  }

  return { submitApplication }
}
