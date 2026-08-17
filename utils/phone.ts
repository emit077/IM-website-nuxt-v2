export type FormattedPhone = {
  display: string
  tel: string
  wa: string
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
