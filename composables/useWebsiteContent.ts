import { computed, onMounted, toValue, type MaybeRefOrGetter } from 'vue'
import type { BannerSlide } from '~/components/home/BannerCarousel.vue'
import type { FaqCategory, FaqItem } from '~/data/faq'
import type { LeadershipProfile } from '~/data/about'
import { emailSupport, phoneSupport, type PhoneContact } from '~/data/contact'
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
  WebsiteFaqCategory,
  WebsiteHeroScreen,
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

/** Used when the primary-contacts API has no row. Must be non-null so SSR payload is kept. */
const fallbackPrimaryContact: UiPrimaryContact = {
  phone: phoneSupport.number,
  email: emailSupport.address,
  whatsapp: phoneSupport.number,
  workingHours: null,
}

export const FAQ_CATEGORY_ORDER = [
  'services',
  'special-educators',
  'academic-coverage',
  'student-parent',
  'contact',
  'about',
  'careers',
  'tutors',
  'institutions',
  'channel-partner',
  'insights',
  'support',
  'others',
] as const

const FAQ_CATEGORY_META: Record<
  string,
  { id: string; title: string; description: string; iconMdi: string }
> = {
  services: {
    id: 'services',
    title: 'Services',
    description: 'Home, online, hybrid, and specialised tutoring programmes.',
    iconMdi: 'mdi:book-open-variant',
  },
  'special-educators': {
    id: 'special-educators',
    title: 'Special Educators',
    description: 'Individualised support for diverse learning needs.',
    iconMdi: 'mdi:account-heart-outline',
  },
  'academic-coverage': {
    id: 'academic-coverage',
    title: 'Academic Coverage',
    description: 'Boards, grades, subjects, and exam preparation.',
    iconMdi: 'mdi:book-education-outline',
  },
  'student-parent': {
    id: 'student-parent',
    title: 'Students & Parents',
    description: 'Tutor matching, learning modes, and support for families.',
    iconMdi: 'mdi:account-school-outline',
  },
  contact: {
    id: 'contact',
    title: 'Contact',
    description: 'How to reach our counselling and enquiry teams.',
    iconMdi: 'mdi:email-outline',
  },
  about: {
    id: 'about',
    title: 'About Us',
    description: 'Our story, mission, and how Indian Mentors works.',
    iconMdi: 'mdi:information-outline',
  },
  careers: {
    id: 'careers',
    title: 'Careers',
    description: 'Roles, hiring process, and working at Indian Mentors.',
    iconMdi: 'mdi:briefcase-outline',
  },
  tutors: {
    id: 'tutors',
    title: 'Tutors',
    description: 'Registration, screening, payouts, and teaching opportunities.',
    iconMdi: 'mdi:human-male-board',
  },
  institutions: {
    id: 'institutions',
    title: 'Institutions',
    description: 'Teacher recruitment and institutional partnerships.',
    iconMdi: 'mdi:domain',
  },
  'channel-partner': {
    id: 'channel-partner',
    title: 'Channel Partner',
    description: 'Partnership models, territories, and partner support.',
    iconMdi: 'mdi:handshake-outline',
  },
  insights: {
    id: 'insights',
    title: 'Insights',
    description: 'Learning guidance, exams, and resources from the Insights Hub.',
    iconMdi: 'mdi:lightbulb-on-outline',
  },
  support: {
    id: 'support',
    title: 'Support',
    description: 'Accounts, payments, scheduling, and help after enrollment.',
    iconMdi: 'mdi:headset',
  },
  others: {
    id: 'others',
    title: 'Others',
    description: 'Additional answers that do not fit a single topic.',
    iconMdi: 'mdi:dots-horizontal-circle-outline',
  },
}

const FAQ_CATEGORY_ALIASES: Record<string, (typeof FAQ_CATEGORY_ORDER)[number]> = {
  'about us': 'about',
  student: 'student-parent',
  'students & parents': 'student-parent',
  career: 'careers',
  institute: 'institutions',
  'channel partner': 'channel-partner',
  'academic coverage': 'academic-coverage',
  'why us': 'about',
  'special educators': 'special-educators',
}

function slugifyCategory(category: string) {
  return category
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function canonicalFaqCategory(category: string) {
  const trimmed = category.trim()
  const lower = trimmed.toLowerCase()
  if (lower in FAQ_CATEGORY_META) return lower
  return FAQ_CATEGORY_ALIASES[lower] ?? slugifyCategory(trimmed)
}

export function getFaqCategoryMeta(category: string) {
  const id = canonicalFaqCategory(category)
  return FAQ_CATEGORY_META[id] ?? {
    id,
    title: category.trim() || 'FAQs',
    description: `Answers related to ${category.trim() || 'this topic'}.`,
    iconMdi: 'mdi:help-circle-outline',
  }
}

const FAQ_CATEGORY_TITLES = [
  'Home Page',
  'Our Tutoring Services',
  'Why Choose Us',
  'Academic Coverage',
  'Parents & Students',
  'Contact Us',
  'About Us',
  'Careers',
  'Tutors / Teaching Partners',
  'Institutions',
  'Channel Partners',
  'Insights Hub',
  'Help & Support',
  'Special Educators',
] as const

const FAQ_TITLE_ICONS: Record<string, string> = {
  'Home Page': 'solar:home-2-bold-duotone',
  'Our Tutoring Services': 'solar:book-2-bold-duotone',
  'Why Choose Us': 'solar:shield-check-bold-duotone',
  'Academic Coverage': 'solar:diploma-bold-duotone',
  'Parents & Students': 'solar:users-group-rounded-bold-duotone',
  'Contact Us': 'solar:letter-bold-duotone',
  'About Us': 'solar:info-circle-bold-duotone',
  'Careers': 'solar:case-round-bold-duotone',
  'Tutors / Teaching Partners': 'solar:square-academic-cap-bold-duotone',
  'Institutions': 'solar:buildings-2-bold-duotone',
  'Channel Partners': 'solar:hand-shake-bold-duotone',
  'Insights Hub': 'solar:lightbulb-bolt-bold-duotone',
  'Help & Support': 'solar:headphones-round-sound-bold-duotone',
  'Special Educators': 'solar:heart-pulse-bold-duotone',
}

/** Older site slugs that should still open the matching CMS category. */
const FAQ_LEGACY_SLUGS: Record<string, (typeof FAQ_CATEGORY_TITLES)[number]> = {
  services: 'Our Tutoring Services',
  'student-parent': 'Parents & Students',
  student: 'Parents & Students',
  contact: 'Contact Us',
  about: 'About Us',
  'about us': 'About Us',
  'why us': 'Why Choose Us',
  'why-choose': 'Why Choose Us',
  tutors: 'Tutors / Teaching Partners',
  institute: 'Institutions',
  'channel-partner': 'Channel Partners',
  'channel partner': 'Channel Partners',
  insights: 'Insights Hub',
  support: 'Help & Support',
  career: 'Careers',
  home: 'Home Page',
}

export function faqCategoryIcon(title: string) {
  return FAQ_TITLE_ICONS[title] ?? 'solar:question-circle-bold-duotone'
}

/** Prefer the icon stored on the category. Accepts `solar:name` or a bare Solar name. */
export function resolveFaqIcon(icon: string | null | undefined, title: string) {
  const raw = icon?.trim()
  if (!raw) return faqCategoryIcon(title)
  if (raw.includes(':')) return raw
  return `solar:${raw}`
}

export function matchedFaqCategoryTitle(value: string) {
  const key = value.trim().toLowerCase()
  if (!key) return null
  const legacy = FAQ_LEGACY_SLUGS[key]
  if (legacy) return legacy
  return FAQ_CATEGORY_TITLES.find((title) => title.toLowerCase() === key || slugifyCategory(title) === key) ?? null
}

/** Value accepted by `/api/website/faqs/?category=`. */
export function faqCategoryQuery(value: string) {
  const title = matchedFaqCategoryTitle(value)
  if (title) return title
  const trimmed = value.trim()
  return trimmed
}

export function faqCategorySlug(value: string) {
  const title = matchedFaqCategoryTitle(value)
  if (title) return slugifyCategory(title)
  if (/^\d+$/.test(value.trim())) return value.trim()
  return slugifyCategory(value)
}

export function mapFaqCategory(row: WebsiteFaqCategory): FaqCategory {
  const title = row.title?.trim() || 'FAQs'
  return {
    id: String(row.id),
    slug: slugifyCategory(title),
    title,
    subtitle: row.subtitle?.trim() || '',
    description: row.description?.trim() || '',
    iconMdi: resolveFaqIcon(row.icon, title),
    displayOrder: row.display_order ?? row.id,
    items: [],
  }
}

export function findFaqCategory(categories: FaqCategory[], param: string) {
  const value = decodeURIComponent(param).trim()
  if (!value) return undefined
  const lower = value.toLowerCase()
  const direct = categories.find(
    (category) => category.id === value || category.slug === lower || category.title.toLowerCase() === lower,
  )
  if (direct) return direct
  const title = matchedFaqCategoryTitle(value)
  if (!title) return undefined
  const titleKey = title.toLowerCase()
  return categories.find(
    (category) => category.title.toLowerCase() === titleKey || category.slug === slugifyCategory(title),
  )
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
  return [...items]
    .sort((a, b) => (a.display_order ?? a.id) - (b.display_order ?? b.id))
    .map((item) => {
      const quote = item.quote?.trim() || ''
      const rating = Number(item.rating) || 0
      return {
        id: String(item.id),
        category: item.category?.trim() || 'Testimonial',
        title: item.title?.trim() || quote,
        quote,
        person: item.person?.trim() || '',
        role: item.role?.trim() || '',
        duration: item.duration?.trim() || '',
        result: item.result?.trim() || '',
        thumb: resolveMediaUrl(item.thumb, apiBase) || '',
        video: resolveMediaUrl(item.testimonial_video, apiBase),
        rating,
      }
    })
}

function resolveMediaUrl(url?: string | null, apiBase = '') {
  return useApiMedia(url, apiBase) || undefined
}

type MergeableHeroButton = {
  label: string
  link?: string
  href?: string
  variant?: string
  icon?: unknown
  iconWrapperClass?: string
  showArrow?: boolean
}

type MergeableHero = {
  badge?: string
  title?: string
  subtitle?: string
  description?: string
  caption?: string
  backgroundImage?: string
  mobileBackgroundImage?: string
  actionBtns?: MergeableHeroButton[]
  trustStats?: { value: string; label: string; icon: string }[]
}

function mergeHeroButton(
  button: MergeableHeroButton | undefined,
  label: string | null | undefined,
  route: string | null | undefined,
) {
  const nextLabel = label?.trim() || button?.label || ''
  if (!button && !nextLabel) return null
  const href = route?.trim() || button?.href || button?.link || '#'
  return {
    ...button,
    label: nextLabel,
    link: href,
    href,
  }
}

/** Overlay a hero-screens API row onto the local hero. Blank API fields keep the local copy. */
export function mergeWebsiteHeroScreen<T extends MergeableHero>(
  fallback: T,
  screen: WebsiteHeroScreen | null | undefined,
): T {
  if (!screen) return fallback

  const buttons = fallback.actionBtns ?? []
  const actionBtns = [
    mergeHeroButton(buttons[0], screen.primary_cta_label, screen.primary_route),
    mergeHeroButton(buttons[1], screen.secondary_cta_label, screen.secondary_route),
  ].filter((button) => button?.label)

  const stats = (Array.isArray(screen.stats) ? screen.stats : [])
    .map((stat) => ({
      value: stat.value?.trim() || '',
      label: stat.label?.trim() || '',
      icon: stat.icon?.trim() || '',
    }))
    .filter((stat) => stat.value || stat.label)

  const backgroundImage = screen.bg_image?.trim()
    ? `url('${screen.bg_image.trim()}')`
    : fallback.backgroundImage
  const mobileBackgroundImage = screen.mobile_bg?.trim() || fallback.mobileBackgroundImage

  return {
    ...fallback,
    badge: screen.badge?.trim() || fallback.badge,
    title: screen.title?.trim() || fallback.title,
    subtitle: screen.subtitle?.trim() || fallback.subtitle,
    description: screen.description?.trim() || fallback.description,
    caption: screen.caption?.trim() || fallback.caption,
    backgroundImage,
    mobileBackgroundImage,
    actionBtns: actionBtns.length ? actionBtns : fallback.actionBtns,
    trustStats: stats.length ? stats : fallback.trustStats,
  } as T
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

function readFaqCategory(category: WebsiteFaq['category']): Pick<
  FaqCategory,
  'id' | 'slug' | 'title' | 'subtitle' | 'description' | 'iconMdi' | 'displayOrder'
> {
  if (category && typeof category === 'object') {
    const title = category.title?.trim() || 'FAQs'
    return {
      id: String(category.id),
      slug: slugifyCategory(title),
      title,
      subtitle: category.subtitle?.trim() || '',
      description: category.description?.trim() || '',
      iconMdi: resolveFaqIcon(category.icon, title),
      displayOrder: category.display_order ?? category.id,
    }
  }

  const label = typeof category === 'string' ? category : ''
  const title = matchedFaqCategoryTitle(label)
  if (title) {
    return {
      id: slugifyCategory(title),
      slug: slugifyCategory(title),
      title,
      subtitle: '',
      description: '',
      iconMdi: faqCategoryIcon(title),
      displayOrder: FAQ_CATEGORY_TITLES.indexOf(title),
    }
  }

  const meta = getFaqCategoryMeta(label || 'others')
  return {
    id: meta.id,
    slug: meta.id,
    title: meta.title,
    subtitle: '',
    description: meta.description,
    iconMdi: meta.iconMdi,
    displayOrder: 99,
  }
}

export function mapFaqs(items: WebsiteFaq[]): FaqCategory[] {
  const ordered = [...items].sort((a, b) => {
    const aCategory = readFaqCategory(a.category)
    const bCategory = readFaqCategory(b.category)
    return (
      aCategory.displayOrder - bCategory.displayOrder ||
      (a.display_order ?? a.id) - (b.display_order ?? b.id)
    )
  })
  const grouped = new Map<string, FaqCategory>()

  for (const item of ordered) {
    const meta = readFaqCategory(item.category)
    const group = grouped.get(meta.id) ?? { ...meta, items: [] }
    const subcategory = item.subcategory?.trim()
    group.items.push({
      id: String(item.id),
      question: item.que,
      answer: item.ans,
      subcategory: subcategory || undefined,
    })
    grouped.set(meta.id, group)
  }

  return [...grouped.values()].sort(
    (a, b) => a.displayOrder - b.displayOrder || a.title.localeCompare(b.title),
  )
}

export function useWebsiteHeroScreens(pageName: string) {
  const { fetchWebsiteList, apiBase } = useWebsiteApi()
  const key = `website-hero-screens-${pageName.replace(/\//g, '-')}`

  const asyncData = useAsyncData(
    key,
    async () => {
      const rows = await fetchWebsiteList<WebsiteHeroScreen>('/api/website/hero-screens/', {
        page_name: pageName,
      })
      return rows.map((row) => ({
        ...row,
        bg_image: resolveMediaUrl(row.bg_image, apiBase) || null,
        mobile_bg: resolveMediaUrl(row.mobile_bg, apiBase) || null,
        stats: Array.isArray(row.stats) ? row.stats : [],
      }))
    },
    liveDataOptions([] as WebsiteHeroScreen[]),
  )
  refreshOnClient(key, asyncData.refresh)
  return asyncData
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

export function useWebsiteTestimonials() {
  const { fetchWebsiteList, apiBase } = useWebsiteApi()

  const asyncData = useAsyncData(
    'website-testimonials',
    async () => {
      const rows = await fetchWebsiteList<WebsiteTestimonial>('/api/website/testimonials/')
      return mapTestimonials(rows, apiBase)
    },
    liveDataOptions([] as UiTestimonial[]),
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
      return mapPrimaryContact(rows) ?? fallbackPrimaryContact
    },
    liveDataOptions(fallbackPrimaryContact),
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

export function useWebsiteFaqCategories() {
  const { fetchWebsiteList } = useWebsiteApi()

  const asyncData = useAsyncData(
    'website-faq-categories',
    async () => {
      const rows = await fetchWebsiteList<WebsiteFaqCategory>(
        '/api/website/faq-categories/',
        undefined,
        { throwOnError: true },
      )
      return rows
        .map(mapFaqCategory)
        .sort((a, b) => a.displayOrder - b.displayOrder || a.title.localeCompare(b.title))
    },
    liveDataOptions([] as FaqCategory[]),
  )
  refreshOnClient('website-faq-categories', asyncData.refresh)
  return asyncData
}

export function useWebsiteFaqs(category?: MaybeRefOrGetter<string | undefined>) {
  const { fetchWebsiteList } = useWebsiteApi()
  const categoryQuery = computed(() => {
    const value = toValue(category)?.trim()
    return value ? faqCategoryQuery(value) : ''
  })
  const key = computed(() =>
    categoryQuery.value ? `website-faqs-${slugifyCategory(categoryQuery.value)}` : 'website-faqs',
  )

  const asyncData = useAsyncData(
    key,
    async () => {
      const rows = await fetchWebsiteList<WebsiteFaq>('/api/website/faqs/', {
        category: categoryQuery.value || undefined,
      })
      return mapFaqs(rows)
    },
    {
      ...liveDataOptions([] as FaqCategory[]),
      watch: [categoryQuery],
    },
  )
  onMounted(() => {
    const current = key.value
    clearNuxtData(current)
    void asyncData.refresh()
  })
  return asyncData
}

export function useWebsitePopularFaqs() {
  const { fetchWebsiteList } = useWebsiteApi()

  const asyncData = useAsyncData(
    'website-faqs-popular',
    async () => {
      const rows = await fetchWebsiteList<WebsiteFaq>('/api/website/faqs/', {
        is_popular: 'true',
      })
      const seen = new Set<string>()
      const items: FaqItem[] = []
      for (const row of rows) {
        const question = row.que?.trim()
        if (!question || seen.has(question)) continue
        seen.add(question)
        const subcategory = row.subcategory?.trim()
        items.push({
          id: String(row.id),
          question,
          answer: row.ans,
          subcategory: subcategory || undefined,
        })
      }
      return items
    },
    liveDataOptions([] as FaqItem[]),
  )
  refreshOnClient('website-faqs-popular', asyncData.refresh)
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
