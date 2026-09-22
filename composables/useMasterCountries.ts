import type { MasterCountry } from '~/types/master-api'
import { isIndiaCountry } from '~/utils/phone'

/** Shown when the countries API has no active rows yet, so forms still default to India. */
export const INDIA_COUNTRY_FALLBACK: MasterCountry = {
  id: 0,
  country_name: 'India',
  dialing_code: '+91',
  abbreviation: 'IN',
  is_active: true,
}

function isEnabledCountry(row: MasterCountry | null | undefined): row is MasterCountry {
  if (!row) return false
  if (row.is_active === false) return false
  return Boolean(row.country_name?.trim() && row.dialing_code?.trim() && row.abbreviation?.trim())
}

function sortWithIndiaFirst(rows: MasterCountry[]) {
  return [...rows].sort((a, b) => {
    const aIndia = isIndiaCountry(a)
    const bIndia = isIndiaCountry(b)
    if (aIndia !== bIndia) return aIndia ? -1 : 1
    return a.country_name.localeCompare(b.country_name)
  })
}

/**
 * Active countries from `GET /api/master/countries/`.
 * The endpoint already returns only `is_active` rows.
 */
export function useMasterCountries() {
  const { fetchWebsiteList } = useWebsiteApi()

  const { data, pending } = useAsyncData(
    'master-countries',
    () => fetchWebsiteList<MasterCountry>('/api/master/countries/'),
    { default: () => [] as MasterCountry[] },
  )

  const countries = computed(() => {
    const enabled = sortWithIndiaFirst((data.value ?? []).filter(isEnabledCountry))
    return enabled.length ? enabled : [INDIA_COUNTRY_FALLBACK]
  })

  const defaultCountry = computed(
    () => countries.value.find((country) => isIndiaCountry(country)) ?? countries.value[0]!,
  )

  return { countries, pending, defaultCountry }
}
