<script setup lang="ts">
import { ref } from 'vue'
import FaqHeroSection from '~/components/faq/FaqHeroSection.vue'
import FaqSearchFilterSection from '~/components/faq/FaqSearchFilterSection.vue'
import FaqCategoriesSection from '~/components/faq/FaqCategoriesSection.vue'
import FaqClosingSection from '~/components/faq/FaqClosingSection.vue'
import FaqCTASection from '~/components/faq/FaqCTASection.vue'
import NewsletterSection from '~/components/shared/NewsletterSection.vue'

const searchQuery = ref('')
const activeCategory = ref('all')

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
  <div class="min-h-screen bg-cream-50">
    <FaqHeroSection />
    <FaqSearchFilterSection v-model:search-query="searchQuery" v-model:active-category="activeCategory" />
    <FaqCategoriesSection :search-query="searchQuery" :active-category="activeCategory" @reset-filters="resetFilters" />
    <FaqClosingSection />
    <FaqCTASection />
    <NewsletterSection />
  </div>
</template>
