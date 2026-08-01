<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { coverageOverviewSection } from '~/data/academic-coverage'

type PillarAccent = (typeof coverageOverviewSection.pillars)[number]['accent']

const accentMap: Record<
  PillarAccent,
  {
    border: string
    header: string
    number: string
    icon: string
    kicker: string
    metric: string
    link: string
  }
> = {
  blue: {
    border: 'border-blue-200/60',
    header: 'from-blue-50 via-white to-white',
    number: 'text-blue-100/90',
    icon: 'bg-blue-600 shadow-[0_12px_28px_-12px_rgba(37,99,235,0.55)]',
    kicker: 'text-blue-700',
    metric: 'bg-blue-50 text-blue-800 ring-blue-100',
    link: 'text-blue-600 hover:text-blue-700',
  },
  sky: {
    border: 'border-sky-200/60',
    header: 'from-sky-50 via-white to-white',
    number: 'text-sky-100/90',
    icon: 'bg-sky-600 shadow-[0_12px_28px_-12px_rgba(2,132,199,0.55)]',
    kicker: 'text-sky-700',
    metric: 'bg-sky-50 text-sky-800 ring-sky-100',
    link: 'text-sky-600 hover:text-sky-700',
  },
  indigo: {
    border: 'border-indigo-200/60',
    header: 'from-indigo-50 via-white to-white',
    number: 'text-indigo-100/90',
    icon: 'bg-indigo-600 shadow-[0_12px_28px_-12px_rgba(79,70,229,0.55)]',
    kicker: 'text-indigo-700',
    metric: 'bg-indigo-50 text-indigo-800 ring-indigo-100',
    link: 'text-indigo-600 hover:text-indigo-700',
  },
}
</script>

<template>
  <section id="coverage-overview" class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py"
    aria-labelledby="coverage-overview-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-28 -top-32 h-96 w-96 rounded-full bg-blue-200/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -bottom-36 -left-28 h-80 w-80 rounded-full bg-sky-200/20 blur-3xl" />
    <div class="container-page relative">
      <div class="mx-auto max-w-3xl text-center">
        <CardHeader heading-id="coverage-overview-heading" :badge="coverageOverviewSection.kicker"
          :title="coverageOverviewSection.title" :description="coverageOverviewSection.description"
          :classes="coverageOverviewSection.classes" />
      </div>

      <div class="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-3 lg:gap-6">
        <article v-for="(pillar, i) in coverageOverviewSection.pillars" :key="pillar.id" :class="[
          'group relative overflow-hidden rounded-[28px] border bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card',
          accentMap[pillar.accent].border,
        ]" v-motion :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 60 + i * 80, duration: 520 } }">
          <div :class="[
            'relative border-b border-slate-100/80 bg-gradient-to-br px-6 py-7 sm:px-7',
            accentMap[pillar.accent].header,
          ]">
            <span aria-hidden="true" :class="[
              'pointer-events-none absolute -right-1 -top-3 select-none font-display text-[6.5rem] font-black leading-none',
              accentMap[pillar.accent].number,
            ]">
              {{ pillar.number }}
            </span>
            <div class="relative flex items-start gap-4">
              <span :class="[
                'grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white',
                accentMap[pillar.accent].icon,
              ]" aria-hidden="true">
                <Icon :icon="pillar.iconMdi" class="h-6 w-6" />
              </span>
              <div class="min-w-0">
                <p :class="[
                  'text-[11px] font-bold uppercase tracking-[0.14em]',
                  accentMap[pillar.accent].kicker,
                ]">
                  Pillar {{ pillar.number }}
                </p>
                <h3 class="mt-1.5 font-display text-xl font-bold tracking-tight text-slate-900">
                  {{ pillar.title }}
                </h3>
                <span :class="[
                  'mt-3 inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ring-1',
                  accentMap[pillar.accent].metric,
                ]">
                  {{ pillar.metric }}
                </span>
              </div>
            </div>
          </div>

          <div class="flex h-full flex-col px-6 py-6 sm:px-7">
            <p class="text-sm leading-relaxed text-slate-600">{{ pillar.description }}</p>
            <a :href="pillar.href" :class="[
              'group/link mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition',
              accentMap[pillar.accent].link,
            ]">
              {{ pillar.cta }}
              <Icon icon="mdi:arrow-right"
                class="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
