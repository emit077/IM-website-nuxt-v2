<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { BarChartDataset } from '~/components/ui/BarChart.vue'
import BarChart from '~/components/ui/BarChart.vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { subscriptionShareSection } from '~/data/channel-partner-investment'

const { partnerShare, platformShare, highlights, services } = subscriptionShareSection

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
      <div
        class="relative overflow-hidden rounded-[22px] border border-indigo-300/35 bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-700 px-6 py-8 text-white shadow-[0_24px_55px_-30px_rgba(37,99,235,0.85)] sm:rounded-[28px] sm:px-8 sm:py-10 lg:px-12 lg:py-12"
        v-motion :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">

        <div class="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div class="lg:col-span-7">
            <CardHeader heading-id="subscription-share-heading" align="left" theme="dark"
              :badge="subscriptionShareSection.kicker" :title="subscriptionShareSection.title"
              :description="subscriptionShareSection.description" classes="!px-0 !py-0" />


            <ul class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3" role="list">
              <li v-for="(item, i) in highlights" :key="item.title" v-motion :initial="{ opacity: 0, y: 12 }"
                :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 280 + i * 70, duration: 450 } }">
                <div class="h-full rounded-2xl border border-white/10 bg-white/5 px-3.5 py-3.5 backdrop-blur-sm">
                  <span class="grid h-8 w-8 place-items-center rounded-lg bg-white/10 text-orange-300"
                    aria-hidden="true">
                    <Icon :icon="item.iconMdi" class="h-4 w-4" />
                  </span>
                  <p class="mt-2.5 text-[13px] font-bold text-white">{{ item.title }}</p>
                  <p class="mt-1 text-[11.5px] leading-relaxed text-blue-100/80">{{ item.description }}</p>
                </div>
              </li>
            </ul>

            <p class="mt-6 text-sm leading-relaxed text-blue-100/90">{{ subscriptionShareSection.closing }}</p>
          </div>

          <div class="lg:col-span-5">
            <div class="rounded-3xl border border-slate-200/80 bg-white px-4 py-8 shadow-soft sm:px-6 sm:py-10">
              <BarChart :dataset="dataset" show-gridlines :gridline-count="4"
                :aria-label="`Subscription revenue split: Channel Partner ${partnerShare.percent} percent, Indian Mentors ${platformShare.percent} percent`" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
