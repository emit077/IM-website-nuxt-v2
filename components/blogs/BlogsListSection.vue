<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { blogsListSection } from '~/data/blogs'
import { blogPath, excerptText, useWebsiteBlogs } from '~/composables/useWebsiteContent'

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

const { data: allBlogs } = await useWebsiteBlogs({}, { cacheKey: 'website-blogs-facets' })
const apiFilters = computed(() => ({
  category: category.value === 'all' ? undefined : category.value,
}))
const { data: blogs, pending, refresh } = await useWebsiteBlogs(apiFilters, {
  cacheKey: 'website-blogs-filtered',
})

const categories = computed(() => {
  const source = (allBlogs.value?.length ? allBlogs.value : blogs.value) ?? []
  return [...new Set(source.map((item) => item.category).filter(Boolean))].sort((a, b) => a.localeCompare(b))
})

const filteredBlogs = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  return (blogs.value ?? []).filter((item) => {
    const matchesCategory = category.value === 'all' || item.category === category.value
    const matchesQuery =
      !query ||
      [item.title, item.introduction, item.category, item.author?.name].join(' ').toLowerCase().includes(query)
    return matchesCategory && matchesQuery
  })
})

const hasActiveFilters = computed(() => Boolean(searchQuery.value.trim()) || category.value !== 'all')

function setCategory(next: string) {
  category.value = next
  router.replace({
    path: '/blogs',
    query: {
      ...(next !== 'all' ? { category: next } : {}),
      ...(searchQuery.value.trim() ? { q: searchQuery.value.trim() } : {}),
    },
    hash: '#blog-list',
  })
}

function resetFilters() {
  searchQuery.value = ''
  category.value = 'all'
  router.replace({ path: '/blogs', hash: '#blog-list' })
}
</script>

<template>
  <section id="blog-list" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="blog-list-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-20 bottom-8 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />

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
          <li class="text-slate-700">Blogs</li>
        </ol>
      </nav>

      <CardHeader heading-id="blog-list-heading" :badge="blogsListSection.kicker" :title="blogsListSection.title"
        :description="blogsListSection.description" :classes="`${blogsListSection.classes} mx-auto `" />

      <div class="mx-auto mt-8 max-w-5xl">
        <div class="relative">
          <Icon icon="mdi:magnify"
            class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            aria-hidden="true" />
          <input v-model="searchQuery" type="search" :placeholder="blogsListSection.searchPlaceholder"
            class="w-full rounded-2xl border border-slate-200/90 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-800 shadow-soft outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            aria-label="Search articles" />
        </div>
      </div>

      <div v-if="pending" class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        <div v-for="n in 6" :key="n" class="h-56 animate-pulse rounded-[1.5rem] bg-white/80" />
        <p class="sr-only">Loading articles</p>
      </div>

      <ul v-else-if="filteredBlogs.length" class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li v-for="blog in filteredBlogs" :key="blog.id">
          <NuxtLink :to="blogPath(blog)"
            class="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card">
            <div class="aspect-[16/10] overflow-hidden bg-slate-100">
              <img :src="blog.image || usePublicAsset('/assets/img/insights/personalised-learning.png')"
                :alt="blog.title" class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading="lazy" />
            </div>
            <div class="flex flex-1 flex-col p-5 sm:p-6">
              <div class="flex items-center justify-between gap-3">
                <span
                  class="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-blue-700 ring-1 ring-blue-100">
                  <Icon icon="mdi:notebook-edit-outline" class="h-3.5 w-3.5" aria-hidden="true" />
                  {{ blog.category }}
                </span>
                <span class="text-[12px] font-medium text-slate-400">{{ blog.read_time }} min</span>
              </div>
              <h3 class="mt-4 font-display text-base font-bold leading-snug text-slate-900 group-hover:text-blue-700">
                {{ blog.title }}
              </h3>
              <p class="mt-2 line-clamp-2 flex-1 text-[13.5px] leading-relaxed text-slate-500">
                {{ excerptText(blog.introduction, 140) }}
              </p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                Read Article
                <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true" />
              </span>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <div v-else class="mt-8 rounded-[1.5rem] border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
        <span
          class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100"
          aria-hidden="true">
          <Icon icon="mdi:magnify-close" class="h-6 w-6" />
        </span>
        <p class="mt-4 font-display text-lg font-bold text-slate-900">{{ blogsListSection.emptyTitle }}</p>
        <p class="mt-2 text-sm text-slate-500">{{ blogsListSection.emptyDescription }}</p>
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
