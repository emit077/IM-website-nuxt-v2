<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import {
  insightEntriesByType,
  insightTypeMeta,
  insightsSearchSection,
  type InsightCatalogItem,
} from '~/data/insights'

const items = [
  ...insightEntriesByType('event'),
  ...insightEntriesByType('news'),
] satisfies InsightCatalogItem[]
</script>

<template>
  <section id="explore" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="insights-search-heading">
    <div class="container-page">
      <CardHeader heading-id="insights-search-heading" :badge="insightsSearchSection.kicker"
        :title="insightsSearchSection.title" :description="insightsSearchSection.description"
        :classes="`${insightsSearchSection.classes} mx-auto max-w-3xl`" />

      <ul class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li v-for="(item, i) in items" :key="item.id" v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + i * 35, duration: 360 } }">
          <NuxtLink :to="item.href"
            class="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card">
            <div class="flex items-center justify-between gap-3">
              <span
                class="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-blue-700 ring-1 ring-blue-100">
                <Icon :icon="insightTypeMeta[item.type].iconMdi" class="h-3.5 w-3.5" aria-hidden="true" />
                {{ insightTypeMeta[item.type].label }}
              </span>
              <span v-if="item.featured"
                class="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-700 ring-1 ring-amber-100">
                Featured
              </span>
            </div>
            <h3 class="mt-4 font-display text-base font-bold leading-snug text-slate-900 group-hover:text-blue-700">
              {{ item.title }}
            </h3>
            <p class="mt-2 flex-1 text-[13.5px] leading-relaxed text-slate-500">
              {{ item.summary }}
            </p>
            <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
              Read details
              <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true" />
            </span>
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
