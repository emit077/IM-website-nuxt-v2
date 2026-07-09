<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { faqCategories, type FaqItem } from '~/data/faq'

const props = withDefaults(
  defineProps<{
    searchQuery?: string
    activeCategory?: string
  }>(),
  {
    searchQuery: '',
    activeCategory: 'all',
  },
)

const emit = defineEmits<{
  'reset-filters': []
}>()

const query = computed(() => props.searchQuery.trim().toLowerCase())

function itemMatchesSearch(item: FaqItem) {
  if (!query.value) return true
  return (
    item.question.toLowerCase().includes(query.value) ||
    item.answer.toLowerCase().includes(query.value)
  )
}

const filteredCategories = computed(() =>
  faqCategories
    .filter((category) => props.activeCategory === 'all' || category.id === props.activeCategory)
    .map((category) => ({
      ...category,
      items: category.items.filter(itemMatchesSearch),
    }))
    .filter((category) => category.items.length > 0),
)

const visibleItemCount = computed(() =>
  filteredCategories.value.reduce((sum, category) => sum + category.items.length, 0),
)

const hasActiveFilters = computed(
  () => query.value.length > 0 || props.activeCategory !== 'all',
)

function resetFilters() {
  emit('reset-filters')
}
</script>

<template>
  <section class="section-surface-muted section-py" aria-label="Frequently asked questions">
    <div class="container-page">
      <p
        v-if="hasActiveFilters && filteredCategories.length"
        class="mb-8 text-center text-xs font-medium text-slate-500"
      >
        Showing {{ visibleItemCount }} {{ visibleItemCount === 1 ? 'answer' : 'answers' }}
        <template v-if="filteredCategories.length === 1">in {{ filteredCategories[0].title }}</template>
        <template v-else>across {{ filteredCategories.length }} topics</template>
      </p>

      <div
        v-if="!filteredCategories.length"
        class="mx-auto max-w-md rounded-2xl border border-dashed border-slate-300 bg-white/80 px-6 py-14 text-center"
      >
        <Icon icon="mdi:help-box-outline" class="mx-auto h-12 w-12 text-slate-300" aria-hidden="true" />
        <p class="mt-4 font-display text-lg font-bold text-slate-800">No FAQs match your search</p>
        <p class="mt-1 text-sm text-slate-500">
          Try another keyword or choose a different topic filter.
        </p>
        <button type="button" class="btn-secondary mt-6" @click="resetFilters">Reset filters</button>
      </div>

      <div v-else class="space-y-14 sm:space-y-16">
        <article
          v-for="(category, catIndex) in filteredCategories"
          :id="category.id"
          :key="category.id"
          class="scroll-mt-28"
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: catIndex * 60, duration: 500 } }"
        >
          <div class="mx-auto max-w-3xl">
            <div class="flex items-start gap-4">
              <span
                class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-600 text-white shadow-sm"
                aria-hidden="true"
              >
                <Icon :icon="category.iconMdi" class="h-5 w-5" />
              </span>
              <div class="min-w-0">
                <h2 class="font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  {{ category.title }}
                </h2>
                <p class="mt-1.5 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                  {{ category.description }}
                </p>
              </div>
            </div>

            <div class="mt-6 space-y-3">
              <details
                v-for="item in category.items"
                :key="item.id"
                class="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 open:border-blue-200 open:shadow-[0_16px_44px_-20px_rgba(37,99,235,0.2)] open:ring-1 open:ring-blue-100"
                :open="hasActiveFilters && filteredCategories.length === 1 && category.items.length <= 3"
              >
                <summary
                  class="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-cream-50/80 sm:px-5 sm:py-[1.125rem] [&::-webkit-details-marker]:hidden"
                >
                  <span class="font-display text-[15px] font-semibold leading-snug text-slate-900 sm:text-base">
                    {{ item.question }}
                  </span>
                  <span
                    class="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-open:rotate-45 group-open:bg-blue-600 group-open:text-white"
                    aria-hidden="true"
                  >
                    <Icon icon="mdi:plus" class="h-4 w-4" />
                  </span>
                </summary>
                <div class="border-t border-slate-100 px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
                  <p class="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                    {{ item.answer }}
                  </p>
                </div>
              </details>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
