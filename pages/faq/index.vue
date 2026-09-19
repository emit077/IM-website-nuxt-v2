<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import FaqHeroSection from '~/components/faq/FaqHeroSection.vue'
import FaqSearchFilterSection from '~/components/faq/FaqSearchFilterSection.vue'
import FaqCategoriesSection from '~/components/faq/FaqCategoriesSection.vue'
import FaqClosingSection from '~/components/faq/FaqClosingSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import NewsletterSection from '~/components/ui/shared/NewsletterSection.vue'
import { faqCta } from '~/data/faq'
import type { FaqCategory } from '~/data/faq'

const searchQuery = ref('')
const activeCategory = ref('all')
const faqCtas = faqCta.ctas.map((cta) => ({
  ...cta,
  primary: cta.label === 'Book Free Demo',
}))

const { data: faqCategories, pending, error, refresh } = await useWebsiteFaqs()
const categories = computed<FaqCategory[]>(() => faqCategories.value ?? [])

const route = useRoute()

function applyHashCategory() {
  const hash = route.hash.replace(/^#/, '')
  if (!hash || hash === 'faq-topics') return
  if (categories.value.some((category) => category.id === hash)) {
    activeCategory.value = hash
  }
}

onMounted(() => {
  applyHashCategory()
})

watch(
  () => [route.hash, categories.value.map((category) => category.id).join(',')],
  () => applyHashCategory(),
)

function resetFilters() {
  searchQuery.value = ''
  activeCategory.value = 'all'
}

useSeoMeta({
  title: 'FAQs — Indian Mentors',
  description:
    'Find answers about tutor matching, enrollment, fees, tutor registration, academic coverage, and partnerships at Indian Mentors.',
  ogTitle: 'FAQs — Indian Mentors',
  ogDescription:
    'Common questions from parents, students, tutors, and partners — answered clearly by the Indian Mentors team.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen section-surface-muted">
    <FaqHeroSection :categories="categories" />
    <FaqSearchFilterSection
      v-model:search-query="searchQuery"
      v-model:active-category="activeCategory"
      :categories="categories"
    />
    <FaqCategoriesSection
      :categories="categories"
      :pending="pending"
      :error="Boolean(error)"
      :search-query="searchQuery"
      :active-category="activeCategory"
      @reset-filters="resetFilters"
      @retry="refresh()"
    />
    <FaqClosingSection />
    <UiCTASection heading-id="faq-cta-heading" :badge="faqCta.badge" badge-icon-mdi="mdi:headset"
      :title="faqCta.title" :description="faqCta.description" :ctas="faqCtas" />
    <NewsletterSection />
  </div>
</template>
