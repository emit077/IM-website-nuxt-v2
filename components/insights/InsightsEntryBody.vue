<script setup lang="ts">
import type { InsightCatalogItem } from '~/data/insights'
import { insightEntriesByType, insightTypeMeta } from '~/data/insights'
import { externalLinks } from '~/data/external-links'

const props = defineProps<{
  item: InsightCatalogItem
}>()

const typeLabel = computed(() => insightTypeMeta[props.item.type].label)
const related = computed(() =>
  insightEntriesByType(props.item.type === 'news' ? 'news' : 'event')
    .filter((entry) => entry.id !== props.item.id)
    .slice(0, 2),
)
const relatedCta = computed(() =>
  props.item.type === 'event'
    ? { label: 'Book a free demo', href: externalLinks.studentSignup }
    : { label: 'Explore articles', href: '/blogs' },
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
              <NuxtLink to="/insights#explore" class="transition hover:text-slate-700">{{ typeLabel }}</NuxtLink>
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
          <NuxtLink to="/insights#explore"
            class="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
            Back to events &amp; news
          </NuxtLink>
        </div>

        <section v-if="related.length" class="mt-14">
          <h2 class="font-display text-xl font-bold text-slate-900">
            {{ item.type === 'news' ? 'More updates' : 'More sessions' }}
          </h2>
          <ul class="mt-5 grid gap-4 sm:grid-cols-2">
            <li v-for="entry in related" :key="entry.id">
              <NuxtLink :to="entry.href"
                class="group block h-full rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-blue-200">
                <p class="font-display text-[15px] font-bold text-slate-900 group-hover:text-blue-700">{{ entry.title }}</p>
                <p class="mt-2 text-[13px] leading-relaxed text-slate-500">{{ entry.summary }}</p>
              </NuxtLink>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </article>
</template>
