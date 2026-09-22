<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { newsListSection } from '~/data/news'
import {
  excerptText,
  formatContentDate,
  newsPath,
  useWebsiteNews,
} from '~/composables/useWebsiteContent'

const route = useRoute()
const router = useRouter()

const searchQuery = ref(typeof route.query.q === 'string' ? route.query.q : '')
const category = ref(typeof route.query.category === 'string' ? route.query.category : 'all')

watch(
  () => route.query,
  (query) => {
    searchQuery.value = typeof query.q === 'string' ? query.q : ''
    category.value = typeof query.category === 'string' ? query.category : 'all'
  },
)

const { data: allNews } = await useWebsiteNews({}, { cacheKey: 'website-news-facets' })
const apiFilters = computed(() => ({
  category: category.value === 'all' ? undefined : category.value,
}))
const { data: articles, pending, refresh } = await useWebsiteNews(apiFilters, {
  cacheKey: 'website-news-filtered',
})

const categories = computed(() => {
  const source = (allNews.value?.length ? allNews.value : articles.value) ?? []
  return [...new Set(source.map((item) => item.category).filter(Boolean))].sort((a, b) => a.localeCompare(b))
})

const filteredArticles = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  return (articles.value ?? []).filter((item) => {
    if (!query) return true
    return [item.title, item.category, item.location, ...(item.body ?? [])]
      .join(' ')
      .toLowerCase()
      .includes(query)
  })
})

const hasActiveFilters = computed(() => Boolean(searchQuery.value.trim()) || category.value !== 'all')

function setCategory(next: string) {
  category.value = next
  router.replace({
    path: '/news',
    query: {
      ...(next !== 'all' ? { category: next } : {}),
      ...(searchQuery.value.trim() ? { q: searchQuery.value.trim() } : {}),
    },
    hash: '#news-list',
  })
}

function resetFilters() {
  searchQuery.value = ''
  category.value = 'all'
  router.replace({ path: '/news', hash: '#news-list' })
}
</script>

<template>
  <section id="news-list" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="news-list-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-violet-200/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-20 bottom-8 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />

    <div class="container-page relative">
      <nav class="mb-8" aria-label="Breadcrumb">
        <ol
          class="flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          <li>
            <NuxtLink to="/" class="transition hover:text-slate-700">Home</NuxtLink>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <NuxtLink to="/insights" class="transition hover:text-slate-700">Insights</NuxtLink>
          </li>
          <li aria-hidden="true">/</li>
          <li class="text-slate-700">News &amp; Media</li>
        </ol>
      </nav>

      <CardHeader heading-id="news-list-heading" :badge="newsListSection.kicker" :title="newsListSection.title"
        :description="newsListSection.description" :classes="`${newsListSection.classes} mx-auto max-w-3xl`" />


      <div v-if="pending" class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        <div v-for="n in 6" :key="n" class="h-56 animate-pulse rounded-[1.5rem] bg-white/80" />
        <p class="sr-only">Loading news</p>
      </div>

      <ul v-else-if="filteredArticles.length" class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li v-for="(article, i) in filteredArticles" :key="article.id" v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + i * 40, duration: 360 } }">
          <NuxtLink :to="newsPath(article)"
            class="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-card">
            <div class="aspect-[16/10] overflow-hidden bg-slate-100">
              <img :src="article.image || usePublicAsset('/assets/img/insights/personalised-learning.png')"
                :alt="article.title" class="h-full w-full object-cover" loading="lazy" />
            </div>
            <div class="flex flex-1 flex-col p-5 sm:p-6">
              <div class="flex items-center justify-between gap-3">
                <span
                  class="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-violet-700 ring-1 ring-violet-100">
                  <Icon icon="mdi:newspaper-variant-outline" class="h-3.5 w-3.5" aria-hidden="true" />
                  {{ article.category }}
                </span>
                <span class="text-[12px] font-medium text-slate-400">{{ formatContentDate(article.published_on)
                  }}</span>
              </div>
              <h3 class="mt-4 font-display text-base font-bold leading-snug text-slate-900 group-hover:text-violet-700">
                {{ article.title }}
              </h3>
              <p v-if="article.location" class="mt-2 text-[12.5px] font-medium text-slate-500">
                {{ article.location }}
              </p>
              <p class="mt-2 flex-1 text-[13.5px] leading-relaxed text-slate-500">
                {{ excerptText(article.body?.[0], 140) }}
              </p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-violet-700">
                Read article
                <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true" />
              </span>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <div v-else class="mt-8 rounded-[1.5rem] border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
        <span
          class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-violet-50 text-violet-700 ring-1 ring-violet-100"
          aria-hidden="true">
          <Icon icon="mdi:magnify-close" class="h-6 w-6" />
        </span>
        <p class="mt-4 font-display text-lg font-bold text-slate-900">{{ newsListSection.emptyTitle }}</p>
        <p class="mt-2 text-sm text-slate-500">{{ newsListSection.emptyDescription }}</p>
        <button type="button"
          class="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
          @click="resetFilters">
          Reset filters
        </button>
        <button type="button" class="ml-4 text-sm font-semibold text-slate-500" @click="refresh()">
          Retry
        </button>
      </div>
    </div>
  </section>
</template>
