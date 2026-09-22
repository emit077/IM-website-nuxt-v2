/** Active country row from `GET /api/master/countries/`. */
export type MasterCountry = {
  id: number
  country_name: string
  /** ISD / calling code, e.g. `+91`. */
  dialing_code: string
  /** ISO country code, e.g. `IN`. */
  abbreviation: string
  is_active: boolean
}
