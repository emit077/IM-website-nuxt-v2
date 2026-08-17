<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { faqCategories, faqCategoryLinks } from '~/data/faq'

const searchQuery = defineModel<string>('searchQuery', { default: '' })
const activeCategory = defineModel<string>('activeCategory', { default: 'all' })

const { data: apiCategories } = await useWebsiteFaqs(faqCategories)

const categories = computed(() => {
  const links = apiCategories.value?.length
    ? apiCategories.value.map((category) => ({
        id: category.id,
        title: category.title,
        iconMdi: category.iconMdi,
      }))
    : [...faqCategoryLinks]

  return [{ id: 'all', title: 'All Topics', iconMdi: 'mdi:view-grid-outline' }, ...links]
})

function resetFilters() {
  searchQuery.value = ''
  activeCategory.value = 'all'
}
</script>

<template>
  <section id="faq-topics" class="relative scroll-mt-24 border-y border-slate-200/70 section-surface-muted section-py-compact" aria-label="Search and filter FAQs">
    <div class="container-page">
      <div class="mx-auto max-w-3xl">
        <div class="relative">
          <Icon icon="mdi:magnify"
            class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            aria-hidden="true" />
          <input v-model="searchQuery" type="search"
            placeholder="Search questions (e.g. tutor match, fees, enrollment)…"
            class="w-full rounded-2xl border border-slate-200/90 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            aria-label="Search frequently asked questions" />
        </div>

        <p class="mt-5 text-center text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
          Filter by topic
        </p>

        <div
          class="mt-3 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist" aria-label="Filter by FAQ category">
          <button v-for="category in categories" :key="category.id" type="button" role="tab"
            :aria-selected="activeCategory === category.id" :class="[
              'inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition',
              activeCategory === category.id
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/25'
                : 'border border-slate-200/90 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700',
            ]" @click="activeCategory = category.id">
            <Icon :icon="category.iconMdi" class="h-3.5 w-3.5" aria-hidden="true" />
            {{ category.title }}
          </button>
        </div>

        <button v-if="searchQuery.trim() || activeCategory !== 'all'" type="button"
          class="mx-auto mt-4 flex items-center gap-1.5 text-xs font-semibold text-blue-600 transition hover:text-blue-700"
          @click="resetFilters">
          <Icon icon="mdi:filter-off-outline" class="h-4 w-4" aria-hidden="true" />
          Clear search &amp; filters
        </button>
      </div>
    </div>
  </section>
</template>
