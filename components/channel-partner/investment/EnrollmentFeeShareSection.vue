<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { enrollmentFeeShareSection } from '~/data/channel-partner-investment'

const { partnerShare, platformShare } = enrollmentFeeShareSection

const shares = [
  {
    ...partnerShare,
    accentClass: 'text-blue-600',
    iconBgClass: 'bg-blue-50 text-blue-600 ring-blue-100',
    barClass: 'bg-blue-500',
  },
  {
    ...platformShare,
    accentClass: 'text-slate-800',
    iconBgClass: 'bg-slate-100 text-slate-700 ring-slate-200/80',
    barClass: 'bg-slate-400',
  },
]

/** SVG donut: circumference of r=42 circle */
const RING = 2 * Math.PI * 42
const partnerArc = (partnerShare.percent / 100) * RING
const platformArc = RING - partnerArc
</script>

<template>
  <section id="enrollment-fee-share" class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py"
    aria-labelledby="enrollment-fee-share-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-28 top-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-slate-100/80 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="enrollment-fee-share-heading" :badge="enrollmentFeeShareSection.kicker"
        :title="enrollmentFeeShareSection.title" :description="enrollmentFeeShareSection.description"
        :classes="enrollmentFeeShareSection.classes" />

      <div class="mt-10 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12 lg:gap-6">
        <!-- Share cards + donut -->
        <div class="flex flex-col gap-4 lg:col-span-5">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <article v-for="(share, i) in shares" :key="share.label"
              class="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-soft sm:p-6"
              v-motion :initial="{ opacity: 0, y: 14 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: i * 80, duration: 450 } }">
              <span class="grid h-10 w-10 place-items-center rounded-2xl ring-1" :class="share.iconBgClass"
                aria-hidden="true">
                <Icon :icon="share.iconMdi" class="h-5 w-5" />
              </span>
              <p class="mt-4 text-xs font-bold uppercase tracking-wide text-slate-500">{{ share.label }}</p>
              <p class="mt-1.5 font-display text-4xl font-bold" :class="share.accentClass">{{ share.percent }}%</p>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ share.detail }}</p>
              <div class="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100" aria-hidden="true">
                <div class="h-full rounded-full origin-left" :class="share.barClass" v-motion :initial="{ scaleX: 0 }"
                  :visibleOnce="{
                    scaleX: 1,
                    transition: { delay: 200 + i * 100, duration: 700, ease: 'easeOut' },
                  }" :style="{ width: `${share.percent}%`, minWidth: share.percent < 15 ? '12%' : undefined }" />
              </div>
            </article>
          </div>

          <!-- Donut chart -->
          <div
            class="flex items-center justify-center gap-6 rounded-3xl border border-slate-200/80 bg-slate-50/80 px-5 py-6 sm:gap-8"
            role="img"
            :aria-label="`Enrollment fee split: Channel Partner ${partnerShare.percent} percent, Indian Mentors ${platformShare.percent} percent`"
            v-motion :initial="{ opacity: 0, y: 12 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 120, duration: 500 } }">
            <div class="relative h-36 w-36 shrink-0 sm:h-40 sm:w-40">
              <svg class="h-full w-full -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="42" fill="none" stroke="#e2e8f0" stroke-width="12" />
                <circle cx="50" cy="50" r="42" fill="none" stroke="#3b82f6" stroke-width="12" stroke-linecap="round"
                  :stroke-dasharray="`${partnerArc} ${RING}`" stroke-dashoffset="0"
                  class="transition-all duration-700" />
                <circle cx="50" cy="50" r="42" fill="none" stroke="#94a3b8" stroke-width="12" stroke-linecap="butt"
                  :stroke-dasharray="`${platformArc} ${RING}`" :stroke-dashoffset="`${-partnerArc}`" />
              </svg>
              <div class="absolute inset-0 grid place-items-center">
                <div class="text-center">
                  <p class="font-display text-2xl font-bold text-blue-600 sm:text-3xl">{{ partnerShare.percent }}%</p>
                  <p class="text-[10px] font-semibold uppercase tracking-wide text-slate-500">Partner</p>
                </div>
              </div>
            </div>

            <ul class="min-w-0 space-y-3" role="list">
              <li v-for="share in shares" :key="`legend-${share.label}`" class="flex items-center gap-2.5">
                <span class="h-2.5 w-2.5 shrink-0 rounded-full" :class="share.barClass" aria-hidden="true" />
                <div class="min-w-0">
                  <p class="truncate text-sm font-bold text-slate-800">{{ share.label }}</p>
                  <p class="text-xs text-slate-500">{{ share.percent }}% share</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Purpose panel -->
        <article
          class="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/90 via-white to-slate-50 p-6 shadow-soft sm:p-8 lg:col-span-7"
          v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 100, duration: 500 } }">
          <div aria-hidden="true"
            class="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-100/60 blur-2xl" />

          <div class="relative flex items-start gap-3">
            <span class="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-600 text-white shadow-sm"
              aria-hidden="true">
              <Icon icon="mdi:clipboard-check-outline" class="h-5 w-5" />
            </span>
            <div>
              <h3 class="font-display text-lg font-bold text-blue-700">{{ enrollmentFeeShareSection.purposeTitle }}</h3>
              <p class="mt-1 text-sm text-slate-600">{{ enrollmentFeeShareSection.purposeIntro }}</p>
            </div>
          </div>

          <ul class="relative mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2" role="list">
            <li v-for="(item, i) in enrollmentFeeShareSection.purposes" :key="item.label"
              class="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/80 px-3.5 py-3 shadow-sm ring-1 ring-slate-100"
              v-motion :initial="{ opacity: 0, y: 10 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 160 + i * 60, duration: 400 } }">
              <span
                class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                aria-hidden="true">
                <Icon :icon="item.iconMdi" class="h-[18px] w-[18px]" />
              </span>
              <span class="text-[13.5px] font-medium text-slate-700 sm:text-sm">{{ item.label }}</span>
            </li>
          </ul>

          <div
            class="relative mt-6 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/90 px-4 py-3.5">
            <span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-100 text-blue-700"
              aria-hidden="true">
              <Icon icon="mdi:percent-outline" class="h-4 w-4" />
            </span>
            <p class="text-sm font-medium leading-relaxed text-blue-900">{{ enrollmentFeeShareSection.note }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
