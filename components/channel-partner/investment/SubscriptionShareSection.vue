<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { BarChartDataset } from '~/components/ui/BarChart.vue'
import BarChart from '~/components/ui/BarChart.vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { subscriptionShareSection } from '~/data/channel-partner-investment'

const { partnerShare, platformShare, highlights, model, structure } = subscriptionShareSection

const dataset: BarChartDataset = {
  theme: 'light',
  data: [
    {
      label: partnerShare.label,
      data: partnerShare.percent,
      bgColor: 'bg-blue-500',
      detail: partnerShare.detail,
    },
    {
      label: platformShare.label,
      data: platformShare.percent,
      bgColor: 'bg-blue-300',
      detail: platformShare.detail,
    },
  ],
}
</script>

<template>
  <section id="subscription-share" class="relative scroll-mt-20 bg-white section-py"
    aria-labelledby="subscription-share-heading">
    <div class="container-page">

      <p class="mx-auto mt-4 max-w-3xl text-center text-sm font-medium leading-relaxed text-slate-500 sm:text-base"
        v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550, delay: 120 } }">
        {{ subscriptionShareSection.descriptionSecondary }}
      </p>

      <!-- Transparent 90:10 structure -->
      <div
        class="relative mt-10 overflow-hidden rounded-[22px] border border-indigo-300/35 bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-700 px-6 py-8 text-white shadow-[0_24px_55px_-30px_rgba(37,99,235,0.85)] sm:rounded-[28px] sm:px-8 sm:py-10 lg:px-12 lg:py-12"
        v-motion :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">

        <div class="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div class="lg:col-span-7">
            <CardHeader align="left" theme="dark" :badge="structure.kicker" classes="!px-0 !py-0">
              <template #title>
                <h3 id="subscription-structure-heading"
                  class="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {{ structure.title }}
                </h3>
              </template>
              <template #description>
                <p class="mt-5 text-sm font-medium leading-relaxed text-white/90 sm:text-base">
                  {{ structure.description }}
                </p>
              </template>
            </CardHeader>

            <ul class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3" role="list">
              <li v-for="(item, i) in highlights" :key="item.title" v-motion :initial="{ opacity: 0, y: 12 }"
                :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 280 + i * 70, duration: 450 } }">
                <div class="h-full rounded-2xl border border-white/10 bg-white/5 px-3.5 py-3.5 backdrop-blur-sm">
                  <span class="grid h-8 w-8 place-items-center rounded-lg bg-white/10 text-orange-300"
                    aria-hidden="true">
                    <Icon :icon="item.iconMdi" class="h-4 w-4" />
                  </span>
                  <p class="mt-2.5 text-[13px] font-bold text-white" v-html="item.title"></p>
                  <p class="mt-1 text-[11.5px] leading-relaxed text-blue-100/80" v-html="item.description"></p>
                </div>
              </li>
            </ul>

            <p class="mt-6 text-sm leading-relaxed text-blue-100/90" v-html="subscriptionShareSection.closing"></p>
          </div>

          <div class="lg:col-span-5">
            <div class="rounded-3xl border border-slate-200/80 bg-white px-4 py-8 shadow-soft sm:px-6 sm:py-10">
              <BarChart :dataset="dataset" show-gridlines :gridline-count="4"
                :aria-label="`Subscription revenue split: Channel Partner ${partnerShare.percent} percent, Indian Mentors ${platformShare.percent} percent`" />
            </div>
          </div>
        </div>
      </div>

      <!-- How the Revenue Model Works -->
      <div class="mt-12" v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <!-- <h3 class="text-center font-display text-lg font-bold text-slate-900 sm:text-xl">
          {{ model.title }}
        </h3> -->
        <CardHeader heading-id="subscription-share-heading" :badge="subscriptionShareSection.kicker"
          :title="subscriptionShareSection.title" :description="subscriptionShareSection.description"
          :classes="subscriptionShareSection.classes" />

        <!-- Desktop table -->
        <div
          class="relative mt-6 hidden overflow-hidden rounded-[20px] border border-slate-200/90 bg-white shadow-soft lg:block">
          <div class="relative overflow-x-auto">
            <table class="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr class="bg-blue-800">
                  <th v-for="(col, ci) in model.columns" :key="col.key" :class="[
                    'px-4 py-4 text-[13px] font-semibold tracking-wide text-white',
                    ci === 0 ? 'pl-5' : '',
                    ci === model.columns.length - 1 ? 'pr-5' : '',
                  ]">
                    {{ col.label }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in model.rows" :key="row.component" :class="[
                  'border-b border-slate-100 transition duration-200 last:border-0',
                  row.highlight ? 'bg-blue-50/90' : 'bg-white hover:bg-slate-50/80',
                ]">
                  <td class="px-4 py-4 pl-5">
                    <div class="flex flex-wrap items-center gap-2">
                      <span class="font-display text-[15px] font-bold text-slate-900">{{ row.component }}</span>
                      <span v-if="row.highlight"
                        class="inline-flex items-center rounded-md bg-blue-500 px-1.5 py-0 text-[10px] font-bold tracking-wide text-white">
                        Partner Earns
                      </span>
                    </div>
                  </td>
                  <td class="px-4 py-4 font-medium tabular-nums text-slate-700">{{ row.amount }}</td>
                  <td class="px-4 py-4">
                    <span :class="row.highlight
                      ? 'font-display text-[15px] font-bold text-blue-700'
                      : 'text-slate-500'">
                      {{ row.partnerShare }}
                    </span>
                  </td>
                  <td class="px-4 py-4 pr-5 font-medium text-slate-700">{{ row.platformShare }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="relative border-t border-slate-100 bg-slate-50/80 px-6 py-4">
            <p class="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
              <Icon icon="mdi:information-outline" class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
              {{ model.note }}
            </p>
          </div>
        </div>

        <!-- Mobile cards -->
        <ul class="mt-6 space-y-3 lg:hidden" role="list">
          <li v-for="(row, i) in model.rows" :key="row.component" v-motion :initial="{ opacity: 0, y: 12 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 60, duration: 420 } }">
            <article :class="[
              'relative overflow-hidden rounded-2xl border p-4 shadow-soft sm:p-5',
              row.highlight
                ? 'border-blue-200 bg-blue-50/60 ring-1 ring-blue-100'
                : 'border-slate-200/80 bg-white',
            ]">
              <div class="flex flex-wrap items-center gap-2">
                <h4 class="font-display text-base font-bold text-slate-900">{{ row.component }}</h4>
                <span v-if="row.highlight"
                  class="inline-flex items-center rounded-md bg-blue-500 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-white">
                  Partner Earns
                </span>
              </div>
              <p class="mt-1 text-sm font-medium tabular-nums text-slate-600">{{ row.amount }}</p>

              <div class="mt-4 grid grid-cols-2 gap-3">
                <div class="rounded-xl border border-slate-100 bg-white px-3 py-2.5">
                  <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Partner Share</p>
                  <p :class="[
                    'mt-1 text-sm font-bold',
                    row.highlight ? 'text-blue-700' : 'text-slate-500',
                  ]">
                    {{ row.partnerShare }}
                  </p>
                </div>
                <div class="rounded-xl border border-slate-100 bg-white px-3 py-2.5">
                  <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Platform Share</p>
                  <p class="mt-1 text-sm font-bold text-slate-800">{{ row.platformShare }}</p>
                </div>
              </div>
            </article>
          </li>
        </ul>

        <p class="mt-4 flex items-start gap-2 text-[13px] leading-relaxed text-slate-500 lg:hidden">
          <Icon icon="mdi:information-outline" class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
          {{ model.note }}
        </p>
      </div>
    </div>
  </section>
</template>
