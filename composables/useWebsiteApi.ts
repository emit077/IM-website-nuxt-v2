import type { ApiEnvelope, ApiErrorEnvelope } from '~/types/website-api'
import type { CareerMutationResult } from '~/types/career-api'

type QueryValue = string | number | boolean | undefined | null

type FetchListOptions = {
  throwOnError?: boolean
}

/**
 * Shared client for public Django endpoints.
 * Expects the `ResponseHelper` envelope and returns `result`.
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
    options?: FetchListOptions,
  ): Promise<T[]> {
    if (!apiBase) {
      console.warn('[website-api] NUXT_PUBLIC_API_URL is not set; skipping', path)
      if (options?.throwOnError) {
        throw new Error('API host is not configured.')
      }
      return []
    }

    try {
      const url = endpoint(path)
      console.log('[website-api] GET', url, import.meta.server ? '(server)' : '(browser)')
      const response = await $fetch<ApiEnvelope<T[]>>(url, {
        method: 'GET',
        query: sanitizeQuery(query),
      })
      if (!response?.success || !Array.isArray(response.result)) {
        const message = response?.message || 'Unexpected response'
        console.warn('[website-api] Unexpected response for', path, message)
        if (options?.throwOnError) {
          throw new Error(message)
        }
        return []
      }

      return response.result
    } catch (error) {
      console.warn('[website-api] Failed to fetch', path, error)
      if (options?.throwOnError) {
        throw new Error(readFetchError(error).message || 'Failed to load data')
      }
      return []
    }
  }

  async function fetchWebsiteItem<T>(path: string): Promise<T | null> {
    if (!apiBase) {
      console.warn('[website-api] NUXT_PUBLIC_API_URL is not set; skipping', path)
      return null
    }

    try {
      const response = await $fetch<ApiEnvelope<T>>(endpoint(path), {
        method: 'GET',
      })

      if (!response?.success || response.result == null || typeof response.result !== 'object') {
        return null
      }

      return response.result
    } catch (error) {
      const payload = readFetchError(error)
      if (payload.status === 404 || payload.success === false) {
        return null
      }
      throw new Error(payload.message || 'Failed to load this role')
    }
  }

  async function postWebsiteForm<T>(path: string, body: FormData): Promise<CareerMutationResult<T>> {
    if (!apiBase) {
      return {
        success: false,
        message: 'API host is not configured.',
      }
    }

    try {
      const response = await $fetch<ApiEnvelope<T>>(endpoint(path), {
        method: 'POST',
        body,
      })

      if (!response?.success || response.result == null) {
        return {
          success: false,
          message: response?.message || 'Unable to submit this form.',
          errors: (response as ApiEnvelope<T> & ApiErrorEnvelope)?.errors,
        }
      }

      return {
        success: true,
        message: response.message,
        data: response.result,
      }
    } catch (error) {
      const payload = readFetchError(error)
      return {
        success: false,
        message: payload.message || 'Unable to submit this form.',
        errors: payload.errors,
        status: payload.status,
      }
    }
  }

  return {
    apiBase,
    endpoint,
    fetchWebsiteList,
    fetchWebsiteItem,
    postWebsiteForm,
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

function readFetchError(error: unknown): {
  status?: number
  success?: boolean
  message?: string
  errors?: Record<string, unknown>
} {
  if (!error || typeof error !== 'object') {
    return { message: 'Request failed' }
  }

  const err = error as {
    status?: number
    statusCode?: number
    message?: string
    data?: ApiErrorEnvelope & { result?: unknown }
  }

  return {
    status: err.status ?? err.statusCode,
    success: err.data?.success,
    message: err.data?.message || err.message || 'Request failed',
    errors: err.data?.errors,
  }
}
