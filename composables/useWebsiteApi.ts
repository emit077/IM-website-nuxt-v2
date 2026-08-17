import type { ApiEnvelope } from '~/types/website-api'

type QueryValue = string | number | boolean | undefined | null

/**
 * Shared GET client for public `/api/website/*` endpoints.
 * Expects the Django `ResponseHelper` envelope and returns `result`.
 */
export function useWebsiteApi() {
  const config = useRuntimeConfig()
  const apiBase = String(config.public.apiBase || '').replace(/\/$/, '')

  function endpoint(path: string) {
    const normalized = path.startsWith('/') ? path : `/${path}`
    return apiBase ? `${apiBase}${normalized}` : normalized
  }

  async function fetchWebsiteList<T>(
    path: string,
    query?: Record<string, QueryValue>,
  ): Promise<T[]> {
    if (!apiBase) {
      console.warn('[website-api] NUXT_PUBLIC_API_URL is not set; skipping', path)
      return []
    }

    try {
      const response = await $fetch<ApiEnvelope<T[]>>(endpoint(path), {
        method: 'GET',
        query: sanitizeQuery(query),
      })

      if (!response?.success || !Array.isArray(response.result)) {
        console.warn('[website-api] Unexpected response for', path, response?.message)
        return []
      }

      return response.result
    } catch (error) {
      console.warn('[website-api] Failed to fetch', path, error)
      return []
    }
  }

  return {
    apiBase,
    endpoint,
    fetchWebsiteList,
  }
}

function sanitizeQuery(query?: Record<string, QueryValue>) {
  if (!query) return undefined
  const next: Record<string, string | number | boolean> = {}
  for (const [key, value] of Object.entries(query)) {
    if (value === undefined || value === null || value === '') continue
    next[key] = value
  }
  return Object.keys(next).length ? next : undefined
}
