<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { insightsHubCards, insightsNavSection, type InsightAccent } from '~/data/insights'

const accentClasses: Record<InsightAccent, { tile: string; hover: string; cta: string }> = {
  blue: {
    tile: 'bg-blue-50 text-blue-600 ring-blue-100 group-hover:from-blue-600 group-hover:to-indigo-700',
    hover: 'hover:border-blue-200',
    cta: 'text-blue-600 hover:text-blue-700',
  },
  emerald: {
    tile: 'bg-emerald-50 text-emerald-600 ring-emerald-100 group-hover:from-emerald-600 group-hover:to-teal-700',
    hover: 'hover:border-emerald-200',
    cta: 'text-emerald-600 hover:text-emerald-700',
  },
  amber: {
    tile: 'bg-amber-50 text-amber-600 ring-amber-100 group-hover:from-amber-500 group-hover:to-orange-600',
    hover: 'hover:border-amber-200',
    cta: 'text-amber-700 hover:text-amber-800',
  },
  violet: {
    tile: 'bg-violet-50 text-violet-600 ring-violet-100 group-hover:from-violet-600 group-hover:to-indigo-700',
    hover: 'hover:border-violet-200',
    cta: 'text-violet-600 hover:text-violet-700',
  },
  indigo: {
    tile: 'bg-indigo-50 text-indigo-600 ring-indigo-100 group-hover:from-indigo-600 group-hover:to-blue-700',
    hover: 'hover:border-indigo-200',
    cta: 'text-indigo-600 hover:text-indigo-700',
  },
  teal: {
    tile: 'bg-teal-50 text-teal-600 ring-teal-100 group-hover:from-teal-600 group-hover:to-emerald-700',
    hover: 'hover:border-teal-200',
    cta: 'text-teal-600 hover:text-teal-700',
  },
}
</script>

<template>
  <section id="hub" class="relative scroll-mt-28 overflow-hidden bg-white section-py" aria-labelledby="insights-nav-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-200/25 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="insights-nav-heading" :badge="insightsNavSection.kicker" :title="insightsNavSection.title"
        :description="insightsNavSection.description" :classes="`${insightsNavSection.classes} mx-auto max-w-3xl`" />

      <ul class="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6" role="list">
        <li v-for="(card, i) in insightsHubCards" :key="card.id" v-motion :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 40, duration: 420 } }">
          <article
            :class="[
              'group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-card sm:p-7',
              accentClasses[card.accent].hover,
            ]">
            <span
              :class="[
                'inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1 transition duration-300 group-hover:bg-gradient-to-br group-hover:text-white group-hover:shadow-lg group-hover:ring-transparent',
                accentClasses[card.accent].tile,
              ]"
              aria-hidden="true">
              <Icon :icon="card.iconMdi" class="h-6 w-6" />
            </span>

            <h3 class="mt-5 font-display text-lg font-bold leading-snug text-slate-900">
              {{ card.title }}
            </h3>
            <p class="mt-2.5 text-sm leading-relaxed text-slate-500">
              {{ card.description }}
            </p>

            <ul class="mt-5 space-y-2.5 border-t border-slate-100 pt-4" role="list">
              <li v-for="point in card.highlights" :key="point"
                class="flex items-start gap-2 text-[13.5px] leading-snug text-slate-700">
                <Icon icon="mdi:check-circle-outline" class="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                <span>{{ point }}</span>
              </li>
            </ul>

            <NuxtLink :to="card.cta.href"
              :class="[
                'mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold transition',
                accentClasses[card.accent].cta,
              ]">
              {{ card.cta.label }}
              <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true" />
            </NuxtLink>

            <span
              class="pointer-events-none absolute bottom-3 right-4 font-display text-4xl font-bold tabular-nums leading-none text-blue-500/15 transition duration-300 group-hover:text-blue-500/30 sm:bottom-4 sm:right-5 sm:text-5xl"
              aria-hidden="true">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
