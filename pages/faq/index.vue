<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import FaqHeroSection from '~/components/faq/FaqHeroSection.vue'
import FaqLiveChatSection from '~/components/faq/FaqLiveChatSection.vue'
import type { FaqCategory } from '~/data/faq'
import { FAQ_CATEGORY_ORDER, canonicalFaqCategory } from '~/composables/useWebsiteContent'

const route = useRoute()
const query = ref(typeof route.query.q === 'string' ? route.query.q : '')

const { data: faqCategories, pending, error, refresh } = await useWebsiteFaqs()
const categories = computed<FaqCategory[]>(() => faqCategories.value ?? [])

const knownCategory = (value: string) =>
  (FAQ_CATEGORY_ORDER as readonly string[]).includes(canonicalFaqCategory(value))

watch(
  () => route.hash,
  (hash) => {
    const id = hash.replace(/^#/, '')
    if (!id || id === 'faq-topics' || !knownCategory(id)) return
    navigateTo(`/faq/${canonicalFaqCategory(id)}`, { replace: true })
  },
  { immediate: true },
)

const visibleCategories = computed(() => {
  const q = query.value.trim().toLowerCase()
  return categories.value.flatMap((category) => {
    if (!q) return [{ ...category, matchCount: category.items.length }]
    const topicHit =
      category.title.toLowerCase().includes(q) ||
      category.description.toLowerCase().includes(q)
    const matches = category.items.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.subcategory?.toLowerCase().includes(q),
    )
    if (!topicHit && !matches.length) return []
    return [{ ...category, matchCount: matches.length || category.items.length }]
  })
})

function categoryHref(id: string) {
  const q = query.value.trim()
  return q ? { path: `/faq/${id}`, query: { q } } : `/faq/${id}`
}

useSeoMeta({
  title: 'FAQs — Indian Mentors',
  description:
    'Browse FAQ topics for services, students, tutors, institutions, and partnerships at Indian Mentors.',
  ogTitle: 'FAQs — Indian Mentors',
  ogDescription:
    'Choose a topic to read answers from parents, students, tutors, and partners.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen bg-cream-50">
    <FaqHeroSection v-model:query="query" />

    <section class="container-page py-8 sm:py-10" aria-label="FAQ categories">
      <div v-if="pending && !categories.length" class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div v-for="n in 8" :key="n" class="h-36 animate-pulse rounded-xl bg-white" />
      </div>

      <div v-else-if="error && !categories.length"
        class="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-10 text-center">
        <p class="font-display text-base font-bold text-slate-800">Unable to load FAQs</p>
        <button type="button" class="btn-secondary mt-4" @click="refresh()">Try again</button>
      </div>

      <div v-else-if="!visibleCategories.length"
        class="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-10 text-center">
        <p class="font-display text-base font-bold text-slate-800">
          {{ categories.length ? 'No topics match your search' : 'FAQs will appear here soon' }}
        </p>
        <button v-if="query.trim()" type="button" class="btn-secondary mt-4" @click="query = ''">
          Clear search
        </button>
      </div>

      <ul v-else class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" role="list">
        <li v-for="category in visibleCategories" :key="category.id" class="min-w-0">
          <NuxtLink :to="categoryHref(category.id)"
            class="group flex h-full flex-col rounded-xl border border-slate-200/80 bg-white p-4 transition hover:border-blue-200 hover:shadow-[0_10px_28px_-18px_rgba(37,99,235,0.45)]">
            <div class="flex items-center justify-between gap-3">
              <span class="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                aria-hidden="true">
                <Icon :icon="category.iconMdi" class="h-4 w-4" />
              </span>
              <span class="text-[11px] font-semibold tabular-nums text-slate-400">
                {{ category.matchCount }}
              </span>
            </div>
            <h2 class="font-display mt-3 text-[15px] font-bold leading-snug text-slate-900">
              {{ category.title }}
            </h2>
            <p class="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500">
              {{ category.description }}
            </p>
            <span class="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
              Open
              <Icon icon="mdi:arrow-right" class="h-3.5 w-3.5 transition group-hover:translate-x-0.5"
                aria-hidden="true" />
            </span>
          </NuxtLink>
        </li>
      </ul>

      <!-- <FaqLiveChatSection /> -->

      <p class="mt-6 text-center text-xs text-slate-500">
        Still have a question?
        <NuxtLink to="/contact" class="font-semibold text-blue-600 hover:text-blue-700">Contact us</NuxtLink>
      </p>
    </section>
  </div>
</template>
