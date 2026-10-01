<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import FaqHeroSection from '~/components/faq/FaqHeroSection.vue'
import type { FaqCategory, FaqItem } from '~/data/faq'
import { faqCategorySlug, findFaqCategory, matchedFaqCategoryTitle } from '~/composables/useWebsiteContent'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'

const route = useRoute()
const query = ref(typeof route.query.q === 'string' ? route.query.q : '')

const { data: faqCategories, pending, error, refresh } = await useWebsiteFaqCategories()
const { data: faqGroups, pending: faqsPending } = await useWebsiteFaqs()
const { data: popularFaqs, pending: popularPending } = await useWebsitePopularFaqs()
const categories = computed<FaqCategory[]>(() => faqCategories.value ?? [])
const popularItems = computed<FaqItem[]>(() => popularFaqs.value ?? [])

const answersByCategory = computed(() => {
  const grouped = new Map<string, FaqItem[]>()
  for (const group of faqGroups.value ?? []) grouped.set(group.id, group.items)
  return grouped
})

watch(
  () => route.hash,
  (hash) => {
    const id = hash.replace(/^#/, '')
    if (!id || id === 'faq-topics') return
    const match = findFaqCategory(categories.value, id)
    if (match) {
      navigateTo(`/faq/${match.slug}`, { replace: true })
      return
    }
    if (matchedFaqCategoryTitle(id)) navigateTo(`/faq/${faqCategorySlug(id)}`, { replace: true })
  },
  { immediate: true },
)

function categoryAnswers(category: FaqCategory) {
  return (
    answersByCategory.value.get(category.id) ??
    faqGroups.value?.find((group) => group.slug === category.slug || group.title === category.title)?.items ??
    []
  )
}

const visibleCategories = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return categories.value
  return categories.value.filter((category) => {
    const topicHit = [category.title, category.subtitle, category.description].some((value) =>
      value.toLowerCase().includes(q),
    )
    if (topicHit) return true
    return categoryAnswers(category).some(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.subcategory?.toLowerCase().includes(q),
    )
  })
})

const searchPending = computed(() => Boolean(query.value.trim()) && faqsPending.value && !faqGroups.value?.length)

const visiblePopular = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return popularItems.value
  return popularItems.value.filter(
    (item) =>
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q) ||
      item.subcategory?.toLowerCase().includes(q),
  )
})

function categoryHref(category: FaqCategory) {
  const q = query.value.trim()
  return q ? { path: `/faq/${category.slug}`, query: { q } } : `/faq/${category.slug}`
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
      <div class="mb-8">
        <CardHeader heading-id="faq-categories-heading" badge="FAQ Categories" title="Browse FAQ Topics"
          description="Answers for services, students, tutors, institutions, and partnerships." />
      </div>

      <div v-if="pending && !categories.length" class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div v-for="n in 6" :key="n" class="h-52 animate-pulse rounded-2xl bg-white" />
      </div>

      <div v-else-if="error && !categories.length"
        class="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center">
        <p class="font-display text-base font-bold text-slate-800">Unable to load FAQ topics</p>
        <button type="button" class="btn-secondary mt-4" @click="refresh()">Try again</button>
      </div>

      <div v-else-if="searchPending && !visibleCategories.length" class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div v-for="n in 3" :key="n" class="h-52 animate-pulse rounded-2xl bg-white" />
      </div>

      <div v-else-if="!visibleCategories.length"
        class="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center">
        <p class="font-display text-base font-bold text-slate-800">
          {{ categories.length ? 'No topics match your search' : 'FAQs will appear here soon' }}
        </p>
        <button v-if="query.trim()" type="button" class="btn-secondary mt-4" @click="query = ''">
          Clear search
        </button>
      </div>

      <ul v-else class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" role="list">
        <li v-for="category in visibleCategories" :key="category.id" class="min-w-0">
          <NuxtLink :to="categoryHref(category)"
            class="group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-slate-200/80 bg-white p-5 shadow-[0_14px_36px_-28px_rgba(15,23,42,0.55)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_48px_-28px_rgba(37,99,235,0.55)] sm:p-6">
            <Icon :icon="category.iconMdi"
              class="pointer-events-none absolute -bottom-7 -right-5 h-32 w-32 text-blue-100/90 transition duration-300 group-hover:-translate-y-1 group-hover:text-blue-200"
              aria-hidden="true" />
            <div class="relative flex items-center justify-between gap-3">
              <span
                class="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-[0_12px_20px_-14px_rgba(37,99,235,0.95)]"
                aria-hidden="true">
                <Icon :icon="category.iconMdi" class="h-6 w-6" />
              </span>
              <span class="font-display text-[11px] font-semibold tabular-nums tracking-[0.2em] text-slate-300">
                {{ String(category.displayOrder).padStart(2, '0') }}
              </span>
            </div>
            <p v-if="category.subtitle"
              class="relative mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-600">
              {{ category.subtitle }}
            </p>
            <h2 class="font-display relative text-lg font-bold leading-snug text-slate-900"
              :class="category.subtitle ? 'mt-1.5' : 'mt-5'">
              {{ category.title }}
            </h2>
            <p v-if="category.description" class="relative mt-2 line-clamp-3 text-sm leading-relaxed text-slate-500">
              {{ category.description }}
            </p>
            <span class="relative mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-slate-900">
              View answers
              <Icon icon="solar:arrow-right-linear"
                class="h-4 w-4 text-blue-600 transition duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </NuxtLink>
        </li>
      </ul>

      <section v-if="popularPending || visiblePopular.length"
        class="mt-10 border-t border-slate-200/80 pt-8 sm:mt-12 sm:pt-10" aria-labelledby="popular-questions-heading">
        <CardHeader heading-id="popular-questions-heading" badge="Popular Questions"
          title="Quick Answers to Common Questions" />

        <div v-if="popularPending && !visiblePopular.length" class="mt-5 grid gap-2" aria-hidden="true">
          <div v-for="n in 4" :key="n" class="h-14 animate-pulse rounded-xl bg-white" />
        </div>

        <div v-else class="mt-5 grid items-start gap-2">
          <details v-for="item in visiblePopular" :key="item.id"
            class="group overflow-hidden rounded-xl border border-slate-200/80 bg-white open:border-blue-200 open:ring-1 open:ring-blue-100">
            <summary
              class="flex cursor-pointer list-none items-start justify-between gap-3 px-3.5 py-3 text-left [&::-webkit-details-marker]:hidden">
              <span class="min-w-0 text-sm font-semibold leading-snug text-slate-900">
                {{ item.question }}
              </span>
              <span
                class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-slate-50 text-slate-500 transition group-open:rotate-45 group-open:bg-blue-600 group-open:text-white"
                aria-hidden="true">
                <Icon icon="mdi:plus" class="h-3.5 w-3.5" />
              </span>
            </summary>
            <div class="border-t border-slate-100 px-3.5 pb-3.5 pt-2.5">
              <p class="text-sm leading-relaxed text-slate-600">{{ item.answer }}</p>
            </div>
          </details>
        </div>
      </section>

      <p class="mt-6 text-center text-xs text-slate-500">
        Still have a question?
        <NuxtLink to="/contact" class="font-semibold text-blue-600 hover:text-blue-700">Contact us</NuxtLink>
      </p>
    </section>
  </div>
</template>
