<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import NewsArticleBody from '~/components/news/NewsArticleBody.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import { newsFinalCta } from '~/data/news'
import type { WebsiteNews } from '~/types/website-api'
import {
  excerptText,
  formatContentDate,
  newsPath,
  useWebsiteNews,
  useWebsiteNewsArticle,
} from '~/composables/useWebsiteContent'
import { usePublicAsset } from '~/composables/usePublicAsset'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const { data: articles, pending: listPending } = await useWebsiteNews()
const listed = computed(
  () => (articles.value ?? []).find((item) => item.slug === slug.value || String(item.id) === slug.value) ?? null,
)
const articleId = computed(() => {
  if (listed.value) return String(listed.value.id)
  return /^\d+$/.test(slug.value) ? slug.value : ''
})
const { data: fetched, pending: itemPending } = await useWebsiteNewsArticle(articleId)
const article = computed(() => {
  const detail = fetched.value
  const listItem = listed.value
  if (detail && listItem) {
    return { ...listItem, ...detail, image: detail.image || listItem.image }
  }
  return detail ?? listItem
})
const pending = computed(() => listPending.value || itemPending.value)

function shuffleWithSeed<T>(items: T[], seed: number) {
  const arr = [...items]
  let s = seed || 1
  for (let i = arr.length - 1; i > 0; i -= 1) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    const j = s % (i + 1)
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const related = computed(() => {
  const current = article.value
  const all = articles.value ?? []
  if (!current) return [] as WebsiteNews[]
  const others = all.filter((item) => item.id !== current.id)
  const same = others.filter((item) => item.category === current.category)
  const rest = others.filter((item) => item.category !== current.category)
  return [...shuffleWithSeed(same, current.id), ...shuffleWithSeed(rest, current.id * 17 + 3)].slice(0, 3)
})

const relatedHeading = computed(() => {
  if (!article.value || !related.value.length) return 'More to read'
  const sameCount = related.value.filter((item) => item.category === article.value?.category).length
  if (sameCount === related.value.length) return `More in ${article.value.category}`
  return 'You may also like'
})

const ctas = [newsFinalCta.primaryCta, newsFinalCta.secondaryCta] as const

function coverSrc(item: WebsiteNews) {
  return item.image || usePublicAsset('/assets/img/insights/personalised-learning.png')
}

useSeoMeta({
  title: () => (article.value ? `${article.value.title} — News | Indian Mentors` : 'News — Indian Mentors'),
  description: () => (article.value ? excerptText(article.value.body?.[0], 160) : 'Indian Mentors news'),
  ogTitle: () => article.value?.title || 'Indian Mentors News',
  ogDescription: () => (article.value ? excerptText(article.value.body?.[0], 160) : ''),
  ogType: 'article',
  ogImage: () => article.value?.image || undefined,
})
</script>

<template>
  <div class="min-h-screen">
    <div v-if="pending" class="container-page section-py" aria-live="polite">
      <div class="mx-auto max-w-3xl space-y-4">
        <div class="h-10 w-2/3 animate-pulse rounded-lg bg-slate-100" />
        <div class="h-40 animate-pulse rounded-2xl bg-slate-100" />
      </div>
      <p class="sr-only">Loading news article</p>
    </div>

    <div v-else-if="!article" class="container-page section-py">
      <div class="mx-auto max-w-xl rounded-2xl border border-dashed border-slate-300 bg-cream-50/60 px-6 py-12 text-center">
        <p class="font-display text-2xl font-bold text-slate-900">Article not found</p>
        <p class="mt-2 text-sm text-slate-600">This update may have been moved or unpublished.</p>
        <NuxtLink to="/news"
          class="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800">
          Browse news
        </NuxtLink>
      </div>
    </div>

    <template v-else>
      <NewsArticleBody :article="article" />

      <section v-if="related.length" class="section-surface-white section-py">
        <div class="container-page">
          <div class="mx-auto max-w-2xl text-center">
            <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">Keep reading</p>
            <h2 class="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {{ relatedHeading }}
            </h2>
          </div>
          <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
            <li v-for="item in related" :key="item.id">
              <NuxtLink :to="newsPath(item)"
                class="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-card">
                <div class="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img :src="coverSrc(item)" :alt="item.title"
                    class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
                </div>
                <div class="flex flex-1 flex-col p-5">
                  <div class="flex items-center justify-between gap-3">
                    <span
                      class="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-violet-700 ring-1 ring-violet-100">
                      <Icon icon="mdi:newspaper-variant-outline" class="h-3.5 w-3.5" aria-hidden="true" />
                      {{ item.category }}
                    </span>
                    <span class="text-[12px] font-medium text-slate-400">{{ formatContentDate(item.published_on) }}</span>
                  </div>
                  <h3
                    class="mt-3 font-display text-[15px] font-bold leading-snug text-slate-900 transition group-hover:text-violet-700">
                    {{ item.title }}
                  </h3>
                  <p class="mt-2 line-clamp-2 flex-1 text-[13px] leading-relaxed text-slate-500">
                    {{ excerptText(item.body?.[0], 110) }}
                  </p>
                  <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-violet-700">
                    Read article
                    <Icon icon="mdi:arrow-right"
                      class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </section>

      <UiCTASection heading-id="news-article-cta-heading" :badge="newsFinalCta.badge" :title="newsFinalCta.title"
        :description="newsFinalCta.description" :supporting="newsFinalCta.supporting" :ctas="ctas" />
    </template>
  </div>
</template>
