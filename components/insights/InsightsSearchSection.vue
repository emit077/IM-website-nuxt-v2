<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { insightsSearchSection } from '~/data/insights'
import {
  eventPath,
  excerptText,
  formatContentDate,
  newsPath,
  useWebsiteEvents,
  useWebsiteNews,
} from '~/composables/useWebsiteContent'
import { usePublicAsset } from '~/composables/usePublicAsset'

const { data: articles } = await useWebsiteNews()
const { data: events } = await useWebsiteEvents()

const fallbackCover = () => usePublicAsset('/assets/img/insights/personalised-learning.png')

const items = computed(() => {
  const eventItems = (events.value ?? []).slice(0, 3).map((item) => ({
    id: `event-${item.id}`,
    typeLabel: item.mode_display || item.mode || 'Event',
    meta: formatContentDate(item.event_date),
    title: item.title,
    summary: excerptText(item.overview, 120),
    href: eventPath(item),
    image: item.image || fallbackCover(),
    iconMdi: 'mdi:microphone-outline',
    accent: 'indigo' as const,
    cta: 'View session',
  }))
  const newsItems = (articles.value ?? []).slice(0, 3).map((item) => ({
    id: `news-${item.id}`,
    typeLabel: item.category || 'News',
    meta: formatContentDate(item.published_on),
    title: item.title,
    summary: excerptText(item.body?.[0], 120),
    href: newsPath(item),
    image: item.image || fallbackCover(),
    iconMdi: 'mdi:newspaper-variant-outline',
    accent: 'violet' as const,
    cta: 'Read update',
  }))
  return [...eventItems, ...newsItems]
})

const accentClasses = {
  indigo: {
    badge: 'bg-indigo-50 text-indigo-700 ring-indigo-100',
    hover: 'hover:border-indigo-200',
    cta: 'text-indigo-700',
  },
  violet: {
    badge: 'bg-violet-50 text-violet-700 ring-violet-100',
    hover: 'hover:border-violet-200',
    cta: 'text-violet-700',
  },
} as const
</script>

<template>
  <section id="explore" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="insights-search-heading">
    <div class="container-page">
      <CardHeader heading-id="insights-search-heading" :badge="insightsSearchSection.kicker"
        :title="insightsSearchSection.title" :description="insightsSearchSection.description"
        :classes="`${insightsSearchSection.classes} mx-auto max-w-3xl`" />

      <ul v-if="items.length" class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li v-for="item in items" :key="item.id">
          <NuxtLink :to="item.href" :class="[
            'group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card',
            accentClasses[item.accent].hover,
          ]">
            <div class="aspect-[16/10] overflow-hidden bg-slate-100">
              <img :src="item.image" :alt="item.title"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
            </div>
            <div class="flex flex-1 flex-col p-5">
              <div class="flex items-center justify-between gap-3">
                <span :class="[
                  'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] ring-1',
                  accentClasses[item.accent].badge,
                ]">
                  <Icon :icon="item.iconMdi" class="h-3.5 w-3.5" aria-hidden="true" />
                  {{ item.typeLabel }}
                </span>
                <span v-if="item.meta" class="shrink-0 text-[12px] font-medium text-slate-400">{{ item.meta }}</span>
              </div>
              <h3 class="mt-3 font-display text-base font-bold leading-snug text-slate-900">
                {{ item.title }}
              </h3>
              <p class="mt-2 line-clamp-2 flex-1 text-[13.5px] leading-relaxed text-slate-500">
                {{ item.summary }}
              </p>
              <span :class="['mt-4 inline-flex items-center gap-1 text-sm font-semibold', accentClasses[item.accent].cta]">
                {{ item.cta }}
                <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true" />
              </span>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
        <NuxtLink v-for="cta in insightsSearchSection.exploreCtas" :key="cta.href" :to="cta.href"
          class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-soft transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 hover:shadow-card">
          <Icon :icon="cta.iconMdi" class="h-4 w-4 text-blue-600" aria-hidden="true" />
          {{ cta.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
