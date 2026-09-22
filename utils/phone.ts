import type { MasterCountry } from '~/types/master-api'

export type FormattedPhone = {
  display: string
  tel: string
  wa: string
}

export type PhoneCountry = Pick<MasterCountry, 'country_name' | 'dialing_code' | 'abbreviation'> & {
  id?: number
}

const FLAG_ALIASES: Record<string, string> = {
  UK: 'GB',
  EL: 'GR',
}

/** India is the product default when the countries API has not selected one yet. */
export function isIndiaCountry(country: PhoneCountry | null | undefined): boolean {
  if (!country) return true
  const abbreviation = (country.abbreviation ?? '').trim().toUpperCase()
  if (abbreviation === 'IN' || abbreviation === 'IND') return true
  if (dialingDigits(country.dialing_code) === '91') return true
  return (country.country_name ?? '').trim().toLowerCase() === 'india'
}

export function dialingDigits(code: string | null | undefined): string {
  return (code ?? '').replace(/\D/g, '')
}

export function formatDialingCode(code: string | null | undefined): string {
  const digits = dialingDigits(code)
  return digits ? `+${digits}` : ''
}

/** ISO 3166-1 alpha-2 flag emoji, when the abbreviation can produce one. */
export function countryFlagEmoji(abbreviation: string | null | undefined): string {
  const raw = (abbreviation ?? '').trim().toUpperCase()
  const code = FLAG_ALIASES[raw] ?? raw
  if (!/^[A-Z]{2}$/.test(code)) return ''
  return String.fromCodePoint(...code.split('').map((char) => 0x1f1e6 + char.charCodeAt(0) - 65))
}

/** Iconify rectangular 4:3 flag id for a 2-letter ISO code. */
export function countryFlagIcon(abbreviation: string | null | undefined): string | null {
  const raw = (abbreviation ?? '').trim().toUpperCase()
  const code = (FLAG_ALIASES[raw] ?? raw).toLowerCase()
  if (!/^[a-z]{2}$/.test(code)) return null
  return `flag:${code}-4x3`
}

/** National-number length for the selected country. India stays 10 digits. */
export function nationalNumberBounds(country: PhoneCountry | null | undefined): { min: number; max: number } {
  if (isIndiaCountry(country)) return { min: 10, max: 10 }
  const dialLen = dialingDigits(country?.dialing_code).length
  const max = Math.max(6, Math.min(12, 15 - Math.max(dialLen, 1)))
  return { min: 6, max }
}

export function normalizeNationalNumber(raw: string, country: PhoneCountry | null | undefined): string {
  let digits = raw.replace(/\D/g, '')
  const dial = dialingDigits(country?.dialing_code)
  const { max } = nationalNumberBounds(country)
  if (dial && digits.startsWith(dial) && digits.length > max) {
    digits = digits.slice(dial.length)
  }
  return digits.slice(0, max)
}

export function validateNationalMobile(
  value: string | null | undefined,
  country?: PhoneCountry | null,
): string | undefined {
  const digits = (value ?? '').replace(/\D/g, '')
  if (!digits) return 'Mobile number is required.'

  if (isIndiaCountry(country)) {
    if (digits.length !== 10) return 'Mobile number must be exactly 10 digits.'
    if (!/^[6-9]\d{9}$/.test(digits)) return 'Enter a valid Indian mobile (starts with 6–9).'
    return undefined
  }

  const { min, max } = nationalNumberBounds(country)
  const label = country?.country_name?.trim() || 'selected'
  if (digits.length < min || digits.length > max) {
    return min === max
      ? `Enter a ${min}-digit ${label} mobile number.`
      : `Enter a valid ${label} mobile number (${min}–${max} digits).`
  }
  return undefined
}

/**
 * Value stored / posted with a form.
 * India stays a 10-digit national number. Other countries include the dialing code.
 */
export function toSubmittedMobile(national: string, country: PhoneCountry | null | undefined): string {
  const digits = normalizeNationalNumber(national, country)
  if (isIndiaCountry(country)) return digits
  return `${dialingDigits(country?.dialing_code)}${digits}`.slice(0, 15)
}

/** Normalize API mobile strings into display / tel / WhatsApp forms. */
export function formatPhone(raw: string | null | undefined): FormattedPhone | null {
  if (!raw) return null
  const digits = raw.replace(/\D/g, '')
  if (digits.length < 10) return null

  const national = digits.length >= 12 && digits.startsWith('91')
    ? digits.slice(-10)
    : digits.slice(-10)
  const e164Digits = `91${national}`

  return {
    display: `+91 ${national.slice(0, 5)} ${national.slice(5)}`,
    tel: `+${e164Digits}`,
    wa: e164Digits,
  }
}
