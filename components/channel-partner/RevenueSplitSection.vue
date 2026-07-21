<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { BarChartDataset } from '~/components/ui/BarChart.vue'
import BarChart from '~/components/ui/BarChart.vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { revenueSplitSection } from '~/data/channel-partner'

const { partnerShare, platformShare, highlights } = revenueSplitSection

const dataset: BarChartDataset = {
  theme: 'dark',
  data: [
    {
      label: 'Partner Share',
      data: partnerShare.percent,
      bgColor: 'bg-green-300',
      detail: partnerShare.detail,
    },
    {
      label: 'Platform Share',
      data: platformShare.percent,
      bgColor: 'bg-blue-300',
      detail: platformShare.detail,
    },
  ],
}
</script>

<template>
  <section id="revenue-split" class="relative scroll-mt-20 section-py" aria-labelledby="revenue-split-heading">
    <div class="container-page">
      <div
        class="relative overflow-hidden rounded-[22px] border border-indigo-300/35 bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-700 px-6 py-8 text-white shadow-[0_24px_55px_-30px_rgba(37,99,235,0.85)] sm:rounded-[28px] sm:px-8 sm:py-10 lg:px-12 lg:py-12"
        v-motion :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">
        <div aria-hidden="true"
          class="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
        <div aria-hidden="true"
          class="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-blue-400/15 blur-3xl" />

        <div class="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div class="lg:col-span-8">
            <CardHeader heading-id="revenue-split-heading" align="left" :badge="revenueSplitSection.kicker" show
              theme="dark" :title="revenueSplitSection.title" :description="revenueSplitSection.description"
              classes="!px-0 !py-0" />

            <ul class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3" role="list">
              <li v-for="(item, i) in highlights" :key="item.title" v-motion :initial="{ opacity: 0, y: 12 }"
                :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 280 + i * 70, duration: 450 } }">
                <div class="h-full rounded-2xl border border-white/10 bg-white/5 px-3.5 py-3.5 backdrop-blur-sm">
                  <span class="grid h-8 w-8 place-items-center rounded-lg bg-white/10" aria-hidden="true">
                    <Icon :icon="item.iconMdi" class="h-4 w-4" />
                  </span>
                  <p class="mt-2.5 text-[13px] font-bold text-white">{{ item.title }}</p>
                  <p class="mt-1 text-[11.5px] leading-relaxed text-blue-100/80">{{ item.description }}</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="lg:col-span-4">
            <BarChart class="lg:ml-auto lg:mr-4" :dataset="dataset"
              :aria-label="`Revenue split chart: Channel Partner ${partnerShare.percent} percent, Indian Mentors ${platformShare.percent} percent`"
              show-gridlines :gridline-count="4" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
