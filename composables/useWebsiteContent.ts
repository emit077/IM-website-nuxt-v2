import { onMounted } from 'vue'
import type { BannerSlide } from '~/components/home/BannerCarousel.vue'
import type { FaqCategory, FaqItem } from '~/data/faq'
import type { LeadershipProfile } from '~/data/about'
import type { PhoneContact } from '~/data/contact'
import type {
  BrochureType,
  WebsiteAuthorisedContact,
  WebsiteBanner,
  WebsiteBlog,
  WebsiteBrochure,
  WebsiteCaseStudy,
  WebsiteCity,
  WebsiteContentAuthor,
  WebsiteEvent,
  WebsiteNews,
  WebsiteFaq,
  WebsitePrimaryContact,
  WebsiteTeamMember,
  WebsiteTestimonial,
} from '~/types/website-api'
import { formatPhone } from '~/utils/phone'

export type UiTestimonial = {
  id: string
  category: string
  title: string
  quote: string
  person: string
  role: string
  duration: string
  result: string
  thumb: string
  video?: string
  rating: number
}

export type UiCityCard = {
  id: string
  label: string
  image: string
  subtitle: string
  address: string
  hasOffice: boolean
  directionLink?: string
  isPopular: boolean
}

export type UiPrimaryContact = {
  phone: PhoneContact
  email: string
  whatsapp: PhoneContact | null
  workingHours: string | null
}

const FAQ_CATEGORY_META: Record<
  string,
  { id: string; title: string; description: string; iconMdi: string }
> = {
  'About us': {
    id: 'about-us',
    title: 'About Us',
    description: 'Our story, mission, and how Indian Mentors works.',
    iconMdi: 'mdi:information-outline',
  },
  Student: {
    id: 'student',
    title: 'Students & Parents',
    description: 'Tutor matching, learning modes, and support for families.',
    iconMdi: 'mdi:account-school-outline',
  },
  tutors: {
    id: 'tutors',
    title: 'Tutors',
    description: 'Registration, screening, payouts, and teaching opportunities.',
    iconMdi: 'mdi:human-male-board',
  },
  'why us': {
    id: 'why-us',
    title: 'Why Choose Us',
    description: 'What makes Indian Mentors different for families and educators.',
    iconMdi: 'mdi:shield-check-outline',
  },
  services: {
    id: 'services',
    title: 'Services',
    description: 'Home, online, and specialised tutoring programmes.',
    iconMdi: 'mdi:book-open-variant',
  },
  'channel partner': {
    id: 'channel-partner',
    title: 'Channel Partner',
    description: 'Partnership models, territories, and partner support.',
    iconMdi: 'mdi:handshake-outline',
  },
  contact: {
    id: 'contact',
    title: 'Contact',
    description: 'How to reach our support and counselling teams.',
    iconMdi: 'mdi:headset',
  },
  institute: {
    id: 'institute',
    title: 'Institutions',
    description: 'Teacher recruitment and institutional partnerships.',
    iconMdi: 'mdi:domain',
  },
  Career: {
    id: 'career',
    title: 'Careers',
    description: 'Roles, hiring process, and working at Indian Mentors.',
    iconMdi: 'mdi:briefcase-outline',
  },
  'Academic Coverage': {
    id: 'academic-coverage',
    title: 'Academic Coverage',
    description: 'Boards, grades, subjects, and exam preparation.',
    iconMdi: 'mdi:book-education-outline',
  },
}

function slugifyCategory(category: string) {
  return category
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function getFaqCategoryMeta(category: string) {
  const exact = FAQ_CATEGORY_META[category]
  if (exact) return exact
  const lower = category.trim().toLowerCase()
  const match = Object.entries(FAQ_CATEGORY_META).find(([key]) => key.toLowerCase() === lower)
  return match?.[1] ?? {
    id: slugifyCategory(category),
    title: category,
    description: `Answers related to ${category}.`,
    iconMdi: 'mdi:help-circle-outline',
  }
}

function initialsFromName(name: string) {
  const ignored = new Set(['mr', 'mrs', 'ms', 'miss', 'dr', 'prof', 'sir', 'smt', 'shri', 'shree'])
  const parts = name
    .trim()
    .split(/\s+/)
    .map((part) => part.replace(/[.,]/g, ''))
    .filter((part) => part && !ignored.has(part.toLowerCase()))
  if (!parts.length) return 'IM'
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase()
  return `${parts[0]![0] ?? ''}${parts[parts.length - 1]![0] ?? ''}`.toUpperCase()
}

function normalizeExternalUrl(url?: string | null) {
  const raw = url?.trim()
  if (!raw) return undefined
  if (/^https?:\/\//i.test(raw)) return raw
  if (raw.startsWith('//')) return `https:${raw}`
  return `https://${raw}`
}

const RING_COLORS = [
  'ring-blue-500',
  'ring-emerald-500',
  'ring-amber-500',
  'ring-rose-500',
  'ring-violet-500',
] as const

export function mapBanners(items: WebsiteBanner[], apiBase = ''): BannerSlide[] {
  return items
    .filter((item) => item.web_banner || item.mobile_banner)
    .map((item) => {
      const rawLink = item.banner_link?.trim() || ''
      const link = !rawLink || rawLink === '#' ? undefined : rawLink
      return {
        image: resolveMediaUrl(item.web_banner || item.mobile_banner, apiBase) || '',
        mobileImage: resolveMediaUrl(item.mobile_banner, apiBase),
        link,
        label: link ? 'View offer' : undefined,
      }
    })
}

export function mapTestimonials(items: WebsiteTestimonial[], apiBase = ''): UiTestimonial[] {
  return items.map((item) => {
    const quote = item.testimonial?.trim() || ''
    const rating = Number(item.rating) || 0
    return {
      id: String(item.id),
      category: 'Testimonial',
      title: quote.length > 64 ? `${quote.slice(0, 61)}…` : quote || item.name,
      quote,
      person: item.name,
      role: item.details?.trim() || 'Indian Mentors community',
      duration: '',
      result: rating ? `${rating.toFixed(1)} / 5` : '',
      thumb: resolveMediaUrl(item.thumbnail, apiBase) || '',
      video: resolveMediaUrl(item.testimonial_video, apiBase),
      rating,
    }
  })
}

function resolveMediaUrl(url?: string | null, apiBase = '') {
  return useApiMedia(url, apiBase) || undefined
}

/**
 * Static generate bakes API results into the page payload. Nuxt's default
 * `getCachedData` keeps serving that snapshot, so `refresh()` never hits Django.
 * Use payload only while hydrating, then always refetch in the browser.
 */
function liveDataOptions<T>(defaultValue: T) {
  return {
    default: () => defaultValue,
    getCachedData(key: string, nuxtApp: { isHydrating?: boolean; payload: { data: Record<string, T> } }) {
      if (nuxtApp.isHydrating) return nuxtApp.payload.data[key]
      return undefined
    },
  }
}

function refreshOnClient(key: string, refresh: () => Promise<unknown>) {
  onMounted(() => {
    // Always force a real browser refetch. Static pages bake API data into
    // the Nuxt payload; without clearing it, refresh() is a no-op and no
    // Network/console fetch logs appear.
    console.log('[website-api] client refresh', key, '(forcing live fetch)')
    clearNuxtData(key)
    void refresh().then(() => {
      console.log('[website-api] client refresh done', key)
    }).catch((error) => {
      console.warn('[website-api] client refresh failed', key, error)
    })
  })
}

export function mapTeam(items: WebsiteTeamMember[], apiBase = ''): LeadershipProfile[] {
  return [...items]
    .sort((a, b) => (a.display_order ?? a.id) - (b.display_order ?? b.id))
    .map((item, index) => {
      const msg = item.msg?.trim() || ''
      const lines = msg
        ? msg
          .split(/\n+/)
          .map((line) => line.trim())
          .filter(Boolean)
        : []
      const isLead = /founder|chief executive|\bceo\b/i.test(item.designation || '')
      const department = item.department?.trim()

      return {
        id: isLead ? 'founder' : String(item.id),
        name: item.name,
        role: item.designation,
        department: department && department !== item.designation ? department : undefined,
        bio: msg || item.designation,
        message: msg || undefined,
        image: resolveMediaUrl(item.image || item.photo || item.profile_image, apiBase),
        linkedin: normalizeExternalUrl(item.linkedin_link),
        inTheirWords: lines.length ? lines.slice(0, 3) : [item.designation],
        initials: initialsFromName(item.name),
        ringColor: RING_COLORS[index % RING_COLORS.length]!,
        displayOrder: item.display_order ?? index + 1,
      }
    })
}

export function mapCities(items: WebsiteCity[], apiBase = ''): UiCityCard[] {
  return items.map((item) => ({
    id: String(item.id),
    label: item.city_name,
    image: resolveMediaUrl(item.city_image, apiBase) || '',
    subtitle: item.badge || (item.is_popular ? 'Popular City' : 'Branch Office'),
    address: item.address?.trim() || `Tutoring support available in ${item.city_name}.`,
    hasOffice: Boolean(item.address?.trim()),
    directionLink: item.direction_link || undefined,
    isPopular: item.is_popular,
  }))
}

export function mapPrimaryContact(
  items: WebsitePrimaryContact[],
): UiPrimaryContact | null {
  const row = items[0]
  if (!row) return null

  const phone = formatPhone(row.mobile)
  if (!phone) return null

  return {
    phone,
    email: row.email,
    whatsapp: formatPhone(row.whatsapp || row.mobile),
    workingHours: row.working_hours?.trim() || null,
  }
}

export function mapAuthorisedContacts(items: WebsiteAuthorisedContact[]): PhoneContact[] {
  // Keep the API array order. Do not sort by id — the endpoint already
  // returns the display sequence (newest contact first).
  return items
    .map((item) => formatPhone(item.mobile))
    .filter((phone): phone is NonNullable<typeof phone> => Boolean(phone))
}

export function mapFaqs(items: WebsiteFaq[]): FaqCategory[] {
  const grouped = new Map<string, FaqItem[]>()

  for (const item of items) {
    const key = item.category || 'General'
    const list = grouped.get(key) ?? []
    list.push({
      id: String(item.id),
      question: item.que,
      answer: item.ans,
    })
    grouped.set(key, list)
  }

  return [...grouped.entries()].map(([category, faqItems]) => {
    const meta = getFaqCategoryMeta(category)
    return {
      id: meta.id,
      title: meta.title,
      description: meta.description,
      iconMdi: meta.iconMdi,
      items: faqItems,
    }
  })
}

export function useWebsiteBanners() {
  const { fetchWebsiteList, apiBase } = useWebsiteApi()

  const asyncData = useAsyncData(
    'website-banners',
    async () => {
      const rows = await fetchWebsiteList<WebsiteBanner>('/api/website/banners/')
      return mapBanners(rows, apiBase)
    },
    liveDataOptions([] as BannerSlide[]),
  )
  refreshOnClient('website-banners', asyncData.refresh)
  return asyncData
}

export function useWebsiteTestimonials(fallback: UiTestimonial[] = []) {
  const { fetchWebsiteList, apiBase } = useWebsiteApi()

  const asyncData = useAsyncData(
    'website-testimonials',
    async () => {
      const rows = await fetchWebsiteList<WebsiteTestimonial>('/api/website/testimonials/')
      const mapped = mapTestimonials(rows, apiBase)
      return mapped.length ? mapped : fallback
    },
    liveDataOptions(fallback),
  )
  refreshOnClient('website-testimonials', asyncData.refresh)
  return asyncData
}

export function useWebsiteTeam(fallback: LeadershipProfile[] = []) {
  const { fetchWebsiteList, apiBase } = useWebsiteApi()

  const asyncData = useAsyncData(
    'website-team',
    async () => {
      console.log(
        '[website-team] fetching',
        `${apiBase}/api/website/team/`,
        import.meta.server ? '(server)' : '(browser)',
      )
      const rows = await fetchWebsiteList<WebsiteTeamMember>('/api/website/team/')
      console.log(
        '[website-team] result',
        rows.length,
        'members',
        rows.map((row) => ({ name: row.name, image: row.image })),
      )
      const mapped = mapTeam(rows, apiBase)
      return mapped.length ? mapped : fallback
    },
    liveDataOptions(fallback),
  )
  refreshOnClient('website-team', asyncData.refresh)
  return asyncData
}

export function useWebsiteCities(options?: { isPopular?: boolean }) {
  const { fetchWebsiteList, apiBase } = useWebsiteApi()
  const key =
    options?.isPopular === undefined
      ? 'website-cities'
      : `website-cities-popular-${options.isPopular}`

  const asyncData = useAsyncData(
    key,
    async () => {
      const rows = await fetchWebsiteList<WebsiteCity>('/api/website/cities/', {
        is_popular:
          options?.isPopular === undefined ? undefined : options.isPopular ? 'true' : 'false',
      })
      return mapCities(rows, apiBase)
    },
    liveDataOptions([] as UiCityCard[]),
  )
  refreshOnClient(key, asyncData.refresh)
  return asyncData
}

export function useWebsitePrimaryContact() {
  const { fetchWebsiteList } = useWebsiteApi()

  const asyncData = useAsyncData(
    'website-primary-contacts',
    async () => {
      const rows = await fetchWebsiteList<WebsitePrimaryContact>(
        '/api/website/primary-contacts/',
      )
      return mapPrimaryContact(rows)
    },
    liveDataOptions(null as UiPrimaryContact | null),
  )
  refreshOnClient('website-primary-contacts', asyncData.refresh)
  return asyncData
}

export function useWebsiteAuthorisedContacts() {
  const { fetchWebsiteList } = useWebsiteApi()

  const asyncData = useAsyncData(
    'website-authorised-contacts',
    async () => {
      const rows = await fetchWebsiteList<WebsiteAuthorisedContact>(
        '/api/website/authorised-contacts/',
      )
      return mapAuthorisedContacts(rows)
    },
    liveDataOptions([] as PhoneContact[]),
  )
  refreshOnClient('website-authorised-contacts', asyncData.refresh)
  return asyncData
}

export function useWebsiteBrochures(brochureType?: BrochureType | string) {
  const { fetchWebsiteList } = useWebsiteApi()
  const key = brochureType ? `website-brochures-${brochureType}` : 'website-brochures'

  const asyncData = useAsyncData(
    key,
    async () => {
      const rows = await fetchWebsiteList<WebsiteBrochure>('/api/website/brochures/', {
        brochure_type: brochureType,
      })
      return rows.filter((row) => row.brochure)
    },
    liveDataOptions([] as WebsiteBrochure[]),
  )
  refreshOnClient(key, asyncData.refresh)
  return asyncData
}

export function useWebsiteFaqs(fallback: FaqCategory[] = [], category?: string) {
  const { fetchWebsiteList } = useWebsiteApi()
  const key = category ? `website-faqs-${slugifyCategory(category)}` : 'website-faqs'

  const asyncData = useAsyncData(
    key,
    async () => {
      const rows = await fetchWebsiteList<WebsiteFaq>('/api/website/faqs/', { category })
      const mapped = mapFaqs(rows)
      return mapped.length ? mapped : fallback
    },
    liveDataOptions(fallback),
  )
  refreshOnClient(key, asyncData.refresh)
  return asyncData
}

export type WebsiteBlogFilters = {
  category?: string
}

export type WebsiteCaseStudyFilters = {
  grade?: string
  board?: string
  subject?: string
  category?: string
}

export type WebsiteNewsFilters = {
  category?: string
}

export type WebsiteEventFilters = {
  mode?: string
}

function sortByDisplayOrder<T extends { display_order?: number; id: number }>(items: T[]) {
  return [...items].sort((a, b) => (a.display_order ?? a.id) - (b.display_order ?? b.id))
}

export function excerptText(value?: string | null, length = 160) {
  const text = String(value || '')
    .replace(/\s+/g, ' ')
    .trim()
  if (!text) return ''
  if (text.length <= length) return text
  return `${text.slice(0, length - 1).trim()}…`
}

export function blogPath(blog: Pick<WebsiteBlog, 'slug' | 'id'>) {
  return `/blogs/${blog.slug || blog.id}`
}

export function caseStudyPath(study: Pick<WebsiteCaseStudy, 'id'>) {
  return `/case-studies/${study.id}`
}

export function newsPath(article: Pick<WebsiteNews, 'slug' | 'id'>) {
  return `/news/${article.slug || article.id}`
}

export function eventPath(event: Pick<WebsiteEvent, 'slug' | 'id'>) {
  return `/events/${event.slug || event.id}`
}

export function formatContentDate(value?: string | null) {
  if (!value) return ''
  const date = new Date(`${value}T00:00:00`)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

export function formatContentTime(value?: string | null) {
  if (!value) return ''
  const [hours, minutes] = value.split(':')
  if (hours == null || minutes == null) return value
  const date = new Date()
  date.setHours(Number(hours), Number(minutes), 0, 0)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' })
}

export function useWebsiteBlogs(
  filters: MaybeRefOrGetter<WebsiteBlogFilters> = {},
  options?: { cacheKey?: string },
) {
  const { fetchWebsiteList, apiBase } = useWebsiteApi()
  const resolved = computed(() => toValue(filters))
  const key = computed(() => {
    const base = options?.cacheKey || 'website-blogs'
    return resolved.value.category ? `${base}-${slugifyCategory(resolved.value.category)}` : base
  })

  const asyncData = useAsyncData(
    () => key.value,
    async () => {
      const rows = await fetchWebsiteList<WebsiteBlog>('/api/website/blogs/', resolved.value)
      return sortByDisplayOrder(rows).map((row) => ({
        ...row,
        image: resolveMediaUrl(row.image, apiBase) || null,
        author: row.author
          ? { ...row.author, image: resolveMediaUrl(row.author.image, apiBase) || null }
          : row.author,
      }))
    },
    {
      ...liveDataOptions([] as WebsiteBlog[]),
      watch: [resolved],
    },
  )
  refreshOnClient(key.value, asyncData.refresh)
  return asyncData
}

export function useWebsiteBlog(id: MaybeRefOrGetter<string | number>) {
  const { fetchWebsiteItem, apiBase } = useWebsiteApi()
  const resolved = computed(() => String(toValue(id) || ''))

  return useAsyncData(
    () => `website-blog-${resolved.value}`,
    async () => {
      if (!resolved.value) return null
      const row = await fetchWebsiteItem<WebsiteBlog>(`/api/website/blogs/${resolved.value}/`)
      if (!row) return null
      return {
        ...row,
        image: resolveMediaUrl(row.image, apiBase) || null,
        author: row.author
          ? { ...row.author, image: resolveMediaUrl(row.author.image, apiBase) || null }
          : row.author,
      }
    },
    {
      watch: [resolved],
      default: () => null as WebsiteBlog | null,
    },
  )
}

export function useWebsiteCaseStudies(
  filters: MaybeRefOrGetter<WebsiteCaseStudyFilters> = {},
  options?: { cacheKey?: string },
) {
  const { fetchWebsiteList, apiBase } = useWebsiteApi()
  const resolved = computed(() => toValue(filters))
  const key = computed(() => {
    const base = options?.cacheKey || 'website-case-studies'
    const parts = [
      resolved.value.category,
      resolved.value.grade,
      resolved.value.board,
      resolved.value.subject,
    ]
      .filter(Boolean)
      .map((value) => slugifyCategory(String(value)))
    return parts.length ? `${base}-${parts.join('-')}` : base
  })

  const asyncData = useAsyncData(
    () => key.value,
    async () => {
      const rows = await fetchWebsiteList<WebsiteCaseStudy>('/api/website/case-studies/', resolved.value)
      return sortByDisplayOrder(rows).map((row) => ({
        ...row,
        image: resolveMediaUrl(row.image, apiBase) || null,
        author: row.author
          ? { ...row.author, image: resolveMediaUrl(row.author.image, apiBase) || null }
          : row.author,
      }))
    },
    {
      ...liveDataOptions([] as WebsiteCaseStudy[]),
      watch: [resolved],
    },
  )
  refreshOnClient(key.value, asyncData.refresh)
  return asyncData
}

export function useWebsiteCaseStudy(id: MaybeRefOrGetter<string | number>) {
  const { fetchWebsiteItem, apiBase } = useWebsiteApi()
  const resolved = computed(() => String(toValue(id) || ''))

  return useAsyncData(
    () => `website-case-study-${resolved.value}`,
    async () => {
      if (!resolved.value) return null
      const row = await fetchWebsiteItem<WebsiteCaseStudy>(`/api/website/case-studies/${resolved.value}/`)
      if (!row) return null
      return {
        ...row,
        image: resolveMediaUrl(row.image, apiBase) || null,
        author: row.author
          ? { ...row.author, image: resolveMediaUrl(row.author.image, apiBase) || null }
          : row.author,
      }
    },
    {
      watch: [resolved],
      default: () => null as WebsiteCaseStudy | null,
    },
  )
}

function withResolvedMedia<T extends { image?: string | null; author?: WebsiteContentAuthor | null }>(
  row: T,
  apiBase: string,
): T {
  return {
    ...row,
    image: resolveMediaUrl(row.image, apiBase) || null,
    author: row.author
      ? { ...row.author, image: resolveMediaUrl(row.author.image, apiBase) || null }
      : row.author,
  }
}

export function useWebsiteNews(
  filters: MaybeRefOrGetter<WebsiteNewsFilters> = {},
  options?: { cacheKey?: string },
) {
  const { fetchWebsiteList, apiBase } = useWebsiteApi()
  const resolved = computed(() => toValue(filters))
  const key = computed(() => {
    const base = options?.cacheKey || 'website-news'
    return resolved.value.category ? `${base}-${slugifyCategory(resolved.value.category)}` : base
  })

  const asyncData = useAsyncData(
    () => key.value,
    async () => {
      const rows = await fetchWebsiteList<WebsiteNews>('/api/website/news/', resolved.value)
      return rows.map((row) => withResolvedMedia(row, apiBase))
    },
    {
      ...liveDataOptions([] as WebsiteNews[]),
      watch: [resolved],
    },
  )
  refreshOnClient(key.value, asyncData.refresh)
  return asyncData
}

export function useWebsiteNewsArticle(id: MaybeRefOrGetter<string | number>) {
  const { fetchWebsiteItem, apiBase } = useWebsiteApi()
  const resolved = computed(() => String(toValue(id) || ''))
  const key = computed(() => `website-news-${resolved.value || 'empty'}`)

  const asyncData = useAsyncData(
    () => key.value,
    async () => {
      if (!resolved.value) return null
      const row = await fetchWebsiteItem<WebsiteNews>(`/api/website/news/${resolved.value}/`)
      if (!row) return null
      return withResolvedMedia(row, apiBase)
    },
    {
      watch: [resolved],
      default: () => null as WebsiteNews | null,
      getCachedData(cacheKey: string, nuxtApp: { isHydrating?: boolean; payload: { data: Record<string, WebsiteNews | null> } }) {
        if (nuxtApp.isHydrating) return nuxtApp.payload.data[cacheKey]
        return undefined
      },
    },
  )
  refreshOnClient(key.value, asyncData.refresh)
  return asyncData
}

export function useWebsiteEvents(
  filters: MaybeRefOrGetter<WebsiteEventFilters> = {},
  options?: { cacheKey?: string },
) {
  const { fetchWebsiteList, apiBase } = useWebsiteApi()
  const resolved = computed(() => toValue(filters))
  const key = computed(() => {
    const base = options?.cacheKey || 'website-events'
    return resolved.value.mode ? `${base}-${slugifyCategory(resolved.value.mode)}` : base
  })

  const asyncData = useAsyncData(
    () => key.value,
    async () => {
      const rows = await fetchWebsiteList<WebsiteEvent>('/api/website/events/', resolved.value)
      return rows.map((row) => ({
        ...row,
        image: resolveMediaUrl(row.image, apiBase) || null,
      }))
    },
    {
      ...liveDataOptions([] as WebsiteEvent[]),
      watch: [resolved],
    },
  )
  refreshOnClient(key.value, asyncData.refresh)
  return asyncData
}

export function useWebsiteEvent(id: MaybeRefOrGetter<string | number>) {
  const { fetchWebsiteItem, apiBase } = useWebsiteApi()
  const resolved = computed(() => String(toValue(id) || ''))

  return useAsyncData(
    () => `website-event-${resolved.value}`,
    async () => {
      if (!resolved.value) return null
      const row = await fetchWebsiteItem<WebsiteEvent>(`/api/website/events/${resolved.value}/`)
      if (!row) return null
      return {
        ...row,
        image: resolveMediaUrl(row.image, apiBase) || null,
      }
    },
    {
      watch: [resolved],
      default: () => null as WebsiteEvent | null,
    },
  )
}

/** Staff-only endpoint — exposed for completeness; not used on public pages. */
export function useWebsiteNewsletterSubscriptions(isSubscribed?: boolean) {
  const { fetchWebsiteList } = useWebsiteApi()

  return useAsyncData(
    `website-newsletter-${isSubscribed ?? 'all'}`,
    () =>
      fetchWebsiteList('/api/website/newsletter-subscriptions/', {
        is_subscribed:
          isSubscribed === undefined ? undefined : isSubscribed ? 'true' : 'false',
      }),
    { default: () => [] as unknown[], immediate: false, server: false },
  )
}
