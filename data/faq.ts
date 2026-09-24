export type FaqItem = {
  id: string
  question: string
  answer: string
  subcategory?: string
}

export type FaqCategory = {
  id: string
  title: string
  description: string
  iconMdi: string
  items: FaqItem[]
}
