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

  const { app } = useRuntimeConfig()
  const normalized = path.startsWith('/') ? path : `/${path}`
  return withBase(normalized, app.baseURL || '/')
}
