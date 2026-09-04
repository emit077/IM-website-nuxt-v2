<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { insightsFeaturedItems, insightsFeaturedSection, type InsightAccent } from '~/data/insights'

const accentClasses: Record<InsightAccent, { badge: string; icon: string; hover: string }> = {
  blue: {
    badge: 'bg-blue-50 text-blue-700 ring-blue-100',
    icon: 'bg-blue-50 text-blue-600 ring-blue-100',
    hover: 'hover:border-blue-200',
  },
  emerald: {
    badge: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    icon: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
    hover: 'hover:border-emerald-200',
  },
  amber: {
    badge: 'bg-amber-50 text-amber-800 ring-amber-100',
    icon: 'bg-amber-50 text-amber-600 ring-amber-100',
    hover: 'hover:border-amber-200',
  },
  violet: {
    badge: 'bg-violet-50 text-violet-700 ring-violet-100',
    icon: 'bg-violet-50 text-violet-600 ring-violet-100',
    hover: 'hover:border-violet-200',
  },
  indigo: {
    badge: 'bg-indigo-50 text-indigo-700 ring-indigo-100',
    icon: 'bg-indigo-50 text-indigo-600 ring-indigo-100',
    hover: 'hover:border-indigo-200',
  },
  teal: {
    badge: 'bg-teal-50 text-teal-700 ring-teal-100',
    icon: 'bg-teal-50 text-teal-600 ring-teal-100',
    hover: 'hover:border-teal-200',
  },
}
</script>

<template>
  <section id="featured" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="insights-featured-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-amber-200/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-20 bottom-8 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="insights-featured-heading" :badge="insightsFeaturedSection.kicker"
        :title="insightsFeaturedSection.title" :description="insightsFeaturedSection.description"
        :classes="`${insightsFeaturedSection.classes} mx-auto max-w-3xl`" />

      <ul class="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3" role="list">
        <li v-for="(item, i) in insightsFeaturedItems" :key="item.id" v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 50 + i * 70, duration: 420 } }">
          <NuxtLink :to="item.href" :class="[
              'group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-card sm:p-7',
              accentClasses[item.accent].hover,
            ]">
            <span aria-hidden="true"
              class="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100/40 blur-2xl transition duration-300 group-hover:bg-blue-200/50" />

            <div class="relative flex items-center justify-between gap-3">
              <span
                :class="[
                  'inline-flex items-center rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] ring-1',
                  accentClasses[item.accent].badge,
                ]">
                {{ item.typeLabel }}
              </span>
              <span
                :class="[
                  'grid h-10 w-10 place-items-center rounded-xl ring-1 transition duration-300 group-hover:scale-105',
                  accentClasses[item.accent].icon,
                ]"
                aria-hidden="true">
                <Icon :icon="item.iconMdi" class="h-5 w-5" />
              </span>
            </div>

            <h3 class="relative mt-5 font-display text-xl font-extrabold leading-snug tracking-tight text-slate-900">
              {{ item.title }}
            </h3>
            <p class="relative mt-3 flex-1 text-sm leading-relaxed text-slate-600">
              {{ item.description }}
            </p>
            <span class="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
              Read more
              <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true" />
            </span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
