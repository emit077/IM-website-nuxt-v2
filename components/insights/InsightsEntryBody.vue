<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { InsightCatalogItem } from '~/data/insights'
import { insightTypeMeta } from '~/data/insights'
import { externalLinks } from '~/data/external-links'
import {
  eventPath,
  excerptText,
  formatContentDate,
  newsPath,
  useWebsiteEvents,
  useWebsiteNews,
} from '~/composables/useWebsiteContent'
import { usePublicAsset } from '~/composables/usePublicAsset'

const props = defineProps<{
  item: InsightCatalogItem
}>()

const typeLabel = computed(() => insightTypeMeta[props.item.type].label)
const isEvent = computed(() => props.item.type === 'event')

const { data: articles } = await useWebsiteNews()
const { data: events } = await useWebsiteEvents()

const fallbackCover = () => usePublicAsset('/assets/img/insights/personalised-learning.png')

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
  const seed = props.item.id.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0)

  if (isEvent.value) {
    return shuffleWithSeed(events.value ?? [], seed)
      .slice(0, 3)
      .map((entry) => ({
        id: entry.id,
        title: entry.title,
        summary: excerptText(entry.overview, 110),
        href: eventPath(entry),
        image: entry.image || fallbackCover(),
        badge: entry.mode_display || entry.mode || 'Event',
        meta: formatContentDate(entry.event_date),
        iconMdi: 'mdi:microphone-outline',
      }))
  }

  return shuffleWithSeed(articles.value ?? [], seed)
    .slice(0, 3)
    .map((entry) => ({
      id: entry.id,
      title: entry.title,
      summary: excerptText(entry.body?.[0], 110),
      href: newsPath(entry),
      image: entry.image || fallbackCover(),
      badge: entry.category || 'News',
      meta: formatContentDate(entry.published_on),
      iconMdi: 'mdi:newspaper-variant-outline',
    }))
})

const relatedCta = computed(() =>
  isEvent.value
    ? { label: 'Book a free demo', href: externalLinks.studentSignup }
    : { label: 'Explore articles', href: '/blogs' },
)

const relatedBrowse = computed(() =>
  isEvent.value
    ? { label: 'Browse all events', href: '/events' }
    : { label: 'Browse all news', href: '/news' },
)
</script>

<template>
  <article class="relative overflow-hidden section-surface-muted section-py">
    <div class="container-page">
      <div class="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb">
          <ol
            class="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            <li>
              <NuxtLink to="/" class="transition hover:text-slate-700">Home</NuxtLink>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <NuxtLink to="/insights" class="transition hover:text-slate-700">Insights</NuxtLink>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <NuxtLink :to="isEvent ? '/events' : '/news'" class="transition hover:text-slate-700">
                {{ typeLabel }}
              </NuxtLink>
            </li>
          </ol>
        </nav>

        <p class="mt-8 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
          {{ typeLabel }}
        </p>
        <h1 class="heading-display mt-2 text-[1.85rem] leading-[1.12] sm:text-4xl">
          {{ item.title }}
        </h1>
        <p v-if="item.meta" class="mt-4 text-sm font-medium text-slate-500">{{ item.meta }}</p>
        <p class="mt-6 text-[15.5px] leading-relaxed text-slate-600">{{ item.summary }}</p>

        <div v-if="item.details?.length" class="mt-10 space-y-4 text-[15px] leading-relaxed text-slate-600">
          <p v-for="(paragraph, i) in item.details" :key="i">{{ paragraph }}</p>
        </div>

        <div class="mt-10 flex flex-wrap gap-3">
          <NuxtLink :to="relatedCta.href"
            class="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800">
            {{ relatedCta.label }}
          </NuxtLink>
          <NuxtLink :to="relatedBrowse.href"
            class="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
            {{ relatedBrowse.label }}
          </NuxtLink>
        </div>
      </div>

      <section v-if="related.length" class="mx-auto mt-14 max-w-5xl">
        <div class="text-center">
          <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">Keep exploring</p>
          <h2 class="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900">
            {{ isEvent ? 'More sessions' : 'More updates' }}
          </h2>
        </div>
        <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
          <li v-for="entry in related" :key="entry.id">
            <NuxtLink :to="entry.href"
              class="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card">
              <div class="aspect-[16/10] overflow-hidden bg-slate-100">
                <img :src="entry.image" :alt="entry.title"
                  class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
              </div>
              <div class="flex flex-1 flex-col p-5">
                <div class="flex items-center justify-between gap-3">
                  <span
                    class="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-blue-700 ring-1 ring-blue-100">
                    <Icon :icon="entry.iconMdi" class="h-3.5 w-3.5" aria-hidden="true" />
                    {{ entry.badge }}
                  </span>
                  <span v-if="entry.meta" class="text-[12px] font-medium text-slate-400">{{ entry.meta }}</span>
                </div>
                <h3 class="mt-3 font-display text-[15px] font-bold leading-snug text-slate-900 group-hover:text-blue-700">
                  {{ entry.title }}
                </h3>
                <p class="mt-2 line-clamp-2 flex-1 text-[13px] leading-relaxed text-slate-500">
                  {{ entry.summary }}
                </p>
                <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                  {{ isEvent ? 'View session' : 'Read update' }}
                  <Icon icon="mdi:arrow-right"
                    class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </section>
    </div>
  </article>
</template>
