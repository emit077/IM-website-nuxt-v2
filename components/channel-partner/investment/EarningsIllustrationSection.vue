<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import type { BarChartDataset } from '~/components/ui/BarChart.vue'
import BarChart from '~/components/ui/BarChart.vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { earningsIllustrationSection } from '~/data/channel-partner-investment'

const {
  monthlyBreakdown,
  annualProjection,
  scale,
  scaleTabs,
  scaleSubtitles,
  growthTip,
  closing,
} = earningsIllustrationSection

type ScalePeriod = (typeof scaleTabs)[number]['id']
const chartPeriod = ref<ScalePeriod>('monthly')

const BAR_COLORS = ['bg-blue-200', 'bg-blue-400', 'bg-blue-600', 'bg-blue-800'] as const

const PERIOD_ARIA: Record<ScalePeriod, string> = {
  monthly: 'Partner monthly earnings by student count',
  quarterly: 'Partner quarterly earnings by student count',
  halfYearly: 'Partner half-yearly earnings by student count',
  annual: 'Partner annual earnings by student count',
}

const chartAriaLabel = computed(() => PERIOD_ARIA[chartPeriod.value])

const dataset = computed<BarChartDataset>(() => ({
  theme: 'light',
  data: scale.map((row, i) => {
    const period = chartPeriod.value
    const valueByPeriod = {
      monthly: { full: row.monthly, short: row.monthlyShort },
      quarterly: { full: row.quarterly, short: row.quarterlyShort },
      halfYearly: { full: row.halfYearly, short: row.halfYearlyShort },
      annual: { full: row.annual, short: row.annualShort },
    }[period]

    return {
      label: String(row.students),
      data: row.percent,
      bgColor: BAR_COLORS[i % BAR_COLORS.length],
      labelSuffix: 'students',
      valueLabel: valueByPeriod.full,
      valueLabelShort: valueByPeriod.short,
      highlight: row.highlight,
    }
  }),
}))
</script>

<template>
  <section id="earnings-illustration" class="relative scroll-mt-20 bg-white section-py"
    aria-labelledby="earnings-illustration-heading">
    <div class="container-page">
      <CardHeader heading-id="earnings-illustration-heading" :badge="earningsIllustrationSection.kicker"
        :title="earningsIllustrationSection.title" :description="earningsIllustrationSection.description"
        :classes="earningsIllustrationSection.classes" />

      <div
        class="relative mt-8 overflow-hidden rounded-[20px] border border-slate-200/80 bg-white shadow-soft sm:mt-10 sm:rounded-[28px]"
        v-motion :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">

        <div class="grid lg:grid-cols-12 py-5">
          <div
            class="space-y-4 border-b border-slate-100 px-5 py-6 sm:px-7 sm:py-8 lg:col-span-5 lg:border-b-0 lg:border-slate-100 lg:px-7 lg:py-8">

            <div class="rounded-2xl border border-slate-200/90 bg-white px-4 py-4 sm:px-5 sm:py-5">
              <h3 class="font-display text-base font-bold text-[#1e3a8a]">
                {{ monthlyBreakdown.title }}
              </h3>

              <div class="mt-4 flex items-start justify-between gap-3">
                <div class="min-w-0">
                  <p class="text-sm font-medium text-slate-600">{{ monthlyBreakdown.totalLabel }}</p>
                  <p class="mt-0.5 text-xs text-slate-400">{{ monthlyBreakdown.formula }}</p>
                </div>
                <p class="shrink-0 font-display text-lg font-bold text-slate-900">
                  {{ monthlyBreakdown.total }}
                </p>
              </div>

              <div class="my-3.5 h-px bg-slate-100" aria-hidden="true" />

              <ul class="space-y-2.5" role="list">
                <li v-for="row in monthlyBreakdown.rows" :key="row.label"
                  class="flex items-center justify-between gap-3">
                  <span class="text-sm text-slate-600">{{ row.label }}</span>
                  <span :class="[
                    'font-display text-sm font-bold tabular-nums sm:text-base',
                    row.highlight ? 'text-amber-700' : 'text-slate-400',
                  ]">
                    {{ row.value }}
                  </span>
                </li>
              </ul>
            </div>

            <div class="rounded-2xl border border-slate-200/90 bg-white px-4 py-4 sm:px-5 sm:py-5">
              <h3 class="font-display text-base font-bold text-[#1e3a8a]">
                {{ annualProjection.title }}
              </h3>

              <div class="mt-4 flex items-center justify-between gap-3">
                <p class="text-sm font-medium text-slate-600">{{ annualProjection.totalLabel }}</p>
                <p
                  class="shrink-0 rounded-md bg-[#1e3a8a] px-2.5 py-1 font-display text-sm font-bold text-white sm:text-base">
                  {{ annualProjection.total }}
                </p>
              </div>

              <div class="my-3.5 h-px bg-slate-100" aria-hidden="true" />

              <ul class="space-y-2.5" role="list">
                <li v-for="row in annualProjection.rows" :key="row.label"
                  class="flex items-center justify-between gap-3">
                  <span class="text-sm text-slate-600">{{ row.label }}</span>
                  <span :class="[
                    'font-display text-sm font-bold tabular-nums sm:text-base',
                    row.highlight ? 'text-amber-700' : 'text-slate-400',
                  ]">
                    {{ row.value }}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex flex-col  px-5 py-7 sm:px-8 sm:py-8 lg:col-span-7 lg:px-8 lg:py-9 border-l border-slate-200">
            <!-- tabs -->
            <div class="flex flex-col items-center gap-3 sm:items-start">
              <div class="inline-flex flex-wrap justify-center rounded-full border border-slate-200 bg-slate-100/80 p-1"
                role="tablist" aria-label="Chart period">
                <button v-for="tab in scaleTabs" :key="tab.id" type="button" role="tab"
                  :aria-selected="chartPeriod === tab.id" :class="[
                    'rounded-full px-3 py-1.5 text-xs font-bold transition-colors sm:px-4 sm:text-sm',
                    chartPeriod === tab.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900',
                  ]" @click="chartPeriod = tab.id">
                  {{ tab.label }}
                </button>
              </div>
              <p class="text-xs font-medium text-slate-500 sm:text-sm">
                {{ scaleSubtitles[chartPeriod] }}
              </p>
            </div>
            <!-- bar chart -->
            <div class="mt-8 flex flex-1 items-center">
              <BarChart layout="fill" :dataset="dataset" :chart-key="chartPeriod" :aria-label="chartAriaLabel"
                show-gridlines :gridline-count="4" />
            </div>
            <div class="mt-5 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/90 px-4 py-3.5">
              <span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-100 text-blue-700"
                aria-hidden="true">
                <Icon icon="mdi:chart-line" class="h-4 w-4" />
              </span>
              <div class="min-w-0">
                <p class="text-sm font-bold text-[#1e3a8a]">{{ growthTip.title }}</p>
                <p class="mt-1 text-xs leading-relaxed text-blue-800/75 sm:text-sm">
                  {{ growthTip.description }}
                </p>
              </div>
            </div>
          </div>

        </div>


      </div>
      <p class="mx-auto mt-6 max-w-2xl px-1 text-center text-sm leading-relaxed text-slate-600 sm:mt-8">
        {{ closing }}
      </p>
    </div>
  </section>
</template>
