<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { FAQ_CATEGORY_ORDER, canonicalFaqCategory, getFaqCategoryMeta } from '~/composables/useWebsiteContent'

const route = useRoute()
const rawSlug = computed(() => decodeURIComponent(String(route.params.category || '')))
const slug = computed(() => canonicalFaqCategory(rawSlug.value))
const isKnownCategory = computed(() =>
  (FAQ_CATEGORY_ORDER as readonly string[]).includes(slug.value),
)

watch(
  [rawSlug, isKnownCategory],
  () => {
    if (!isKnownCategory.value) {
      showError(createError({ statusCode: 404, statusMessage: 'FAQ topic not found' }))
      return
    }
    if (slug.value !== rawSlug.value) {
      navigateTo({ path: `/faq/${slug.value}`, query: route.query }, { redirectCode: 301, replace: true })
    }
  },
  { immediate: true },
)

const meta = computed(() => getFaqCategoryMeta(slug.value))
const { data, pending, error, refresh } = await useWebsiteFaqs(slug)

const items = computed(() => data.value?.find((category) => category.id === slug.value)?.items ?? [])

const search = ref(typeof route.query.q === 'string' ? route.query.q : '')
watch(
  () => route.query.q,
  (value) => {
    search.value = typeof value === 'string' ? value : ''
  },
)

const filteredItems = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return items.value
  return items.value.filter(
    (item) =>
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q) ||
      item.subcategory?.toLowerCase().includes(q),
  )
})

const showSubcategory = computed(() => {
  const labels = new Set(items.value.map((item) => item.subcategory).filter(Boolean))
  return labels.size > 1
})

useSeoMeta({
  title: () => `${meta.value.title} FAQs — Indian Mentors`,
  description: () => meta.value.description,
  ogTitle: () => `${meta.value.title} FAQs — Indian Mentors`,
  ogDescription: () => meta.value.description,
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen bg-cream-50">
    <header class="border-b border-slate-200/80 bg-white">
      <div class="container-page py-5 sm:py-6">
        <NuxtLink to="/faq"
          class="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 transition hover:text-blue-600">
          <Icon icon="mdi:arrow-left" class="h-3.5 w-3.5" aria-hidden="true" />
          All topics
        </NuxtLink>

        <div class="mt-3 flex items-start gap-3">
          <span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-600 text-white" aria-hidden="true">
            <Icon :icon="meta.iconMdi" class="h-4 w-4" />
          </span>
          <div class="min-w-0">
            <h1 class="font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              {{ meta.title }}
            </h1>
            <p class="mt-1 text-sm leading-relaxed text-slate-500">
              {{ meta.description }}
              <span v-if="items.length" class="text-slate-400"> · {{ items.length }} answers</span>
            </p>
          </div>
        </div>

        <div class="relative mt-4 max-w-md">
          <Icon icon="mdi:magnify"
            class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true" />
          <input v-model="search" type="search" placeholder="Search this topic"
            class="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            aria-label="Search questions in this topic" />
        </div>
      </div>
    </header>

    <section class="container-page py-5 sm:py-6" :aria-label="`${meta.title} questions`">
      <div v-if="pending && !items.length" class="grid gap-2 lg:grid-cols-2">
        <div v-for="n in 6" :key="n" class="h-14 animate-pulse rounded-xl bg-white" />
      </div>

      <div v-else-if="error && !items.length"
        class="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-10 text-center">
        <p class="font-display text-base font-bold text-slate-800">Unable to load FAQs</p>
        <button type="button" class="btn-secondary mt-4" @click="refresh()">Try again</button>
      </div>

      <div v-else-if="!filteredItems.length"
        class="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-10 text-center">
        <p class="font-display text-base font-bold text-slate-800">
          {{ items.length ? 'No questions match your search' : 'No FAQs in this topic yet' }}
        </p>
        <button v-if="search.trim()" type="button" class="btn-secondary mt-4" @click="search = ''">
          Clear search
        </button>
        <NuxtLink v-else to="/faq" class="btn-secondary mt-4 inline-flex">All topics</NuxtLink>
      </div>

      <div v-else class="grid items-start gap-2 lg:grid-cols-2">
        <details v-for="item in filteredItems" :key="item.id"
          class="group overflow-hidden rounded-xl border border-slate-200/80 bg-white open:border-blue-200 open:ring-1 open:ring-blue-100">
          <summary
            class="flex cursor-pointer list-none items-start justify-between gap-3 px-3.5 py-3 text-left [&::-webkit-details-marker]:hidden">
            <span class="min-w-0">
              <!-- <span
                v-if="showSubcategory && item.subcategory"
                class="mb-0.5 block text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400"
              >
                {{ item.subcategory }}
              </span> -->
              <span class="block text-sm font-semibold leading-snug text-slate-900">
                {{ item.question }}
              </span>
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

      <p class="mt-6 text-center text-xs text-slate-500">
        Still have a question?
        <NuxtLink to="/contact" class="font-semibold text-blue-600 hover:text-blue-700">Contact us</NuxtLink>
      </p>
    </section>
  </div>
</template>
