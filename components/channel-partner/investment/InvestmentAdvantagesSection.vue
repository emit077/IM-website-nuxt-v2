<script setup lang="ts">
import { Icon } from '@iconify/vue'
import BarChart from '~/components/ui/BarChart.vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { revenueStreamsSection, whyModelWorksSection } from '~/data/channel-partner-investment'
</script>
<template>
  <section id="revenue-streams" class="relative scroll-mt-20 section-surface-muted section-py"
    aria-labelledby="revenue-streams-heading">
    <div class="container-page">
      <CardHeader heading-id="revenue-streams-heading" :badge="revenueStreamsSection.kicker"
        :title="revenueStreamsSection.title" :description="revenueStreamsSection.description"
        :classes="revenueStreamsSection.classes" />

      <div class="mt-10 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
        <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7" role="list">
          <li v-for="(stream, i) in revenueStreamsSection.streams" :key="stream.title" v-motion
            :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 50, duration: 450 } }">
            <article
              class="group flex h-full items-center gap-3.5 rounded-3xl border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card">
              <span
                class="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
                aria-hidden="true">
                <Icon :icon="stream.iconMdi" class="h-5 w-5" />
              </span>
              <h3 class="font-display text-sm font-bold text-slate-900 sm:text-base">{{ stream.title }}</h3>
            </article>
          </li>
        </ul>

        <div class="lg:col-span-5" v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 120, duration: 500 } }">
          <div
            class="flex h-full flex-col justify-center rounded-3xl border border-slate-200/80 bg-slate-50/80 px-5 py-8 shadow-soft sm:px-8 sm:py-10">
            <p class="text-center text-xs font-bold uppercase tracking-wide text-blue-600">
              {{ revenueStreamsSection.chartTitle }}
            </p>
            <p class="mx-auto mt-2 max-w-xs text-center text-sm text-slate-600">
              {{ revenueStreamsSection.chartDescription }}
            </p>
            <div class="mt-8">
              <BarChart :dataset="revenueStreamsSection.dataset" :aria-label="revenueStreamsSection.chartAriaLabel" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="why-model-works"
    class="relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 section-py"
    aria-labelledby="why-model-works-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

    <div class="container-page relative">
      <div class="mx-auto max-w-3xl text-center">
        <CardHeader heading-id="why-model-works-heading" theme="dark" :badge="whyModelWorksSection.kicker"
          :title="whyModelWorksSection.title" :description="whyModelWorksSection.description"
          :classes="whyModelWorksSection.classes" />
      </div>
      <ul class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li v-for="(item, i) in whyModelWorksSection.advantages" :key="item.title" v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 50, duration: 400 } }">
          <div
            class="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3.5 backdrop-blur-sm">
            <span class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/15 text-white" aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-[18px] w-[18px]" />
            </span>
            <span class="text-[13px] font-semibold text-white sm:text-sm">{{ item.title }}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
