import { withBase } from 'ufo'

/**
 * Resolve a file under `public/` for GitHub Pages (and other static hosts).
 * Uses Nuxt `app.baseURL` (set via `NUXT_APP_BASE_URL` at build time).
 *
 * @example
 * ```vue
 * <img :src="usePublicAsset('/img/banner/banner-1.png')" alt="" />
 * ```
 */
export function usePublicAsset(path: string): string {
  if (!path) return ''
  if (/^https?:\/\//i.test(path) || path.startsWith('data:')) return path
  if (path.startsWith('//')) return `https:${path}`

  const { app } = useRuntimeConfig()
  const normalized = path.startsWith('/') ? path : `/${path}`
  return withBase(normalized, app.baseURL || '/')
}

/** Resolve Django/S3 media paths against `NUXT_PUBLIC_API_URL`. */
export function useApiMedia(path?: string | null, apiBase = ''): string {
  const raw = path?.trim()
  if (!raw || raw === 'null' || raw === 'undefined') return ''
  if (/^https?:\/\//i.test(raw) || raw.startsWith('data:')) return raw
  if (raw.startsWith('//')) return `https:${raw}`
  if (raw.startsWith('/assets/') || raw.startsWith('assets/')) return usePublicAsset(raw)

  const config = apiBase ? { public: { apiBase } } : useRuntimeConfig()
  const base = String(config.public.apiBase || apiBase || '').replace(/\/$/, '')
  const normalized = raw.startsWith('/') ? raw : `/${raw}`
  return base ? `${base}${normalized}` : usePublicAsset(normalized)
}
