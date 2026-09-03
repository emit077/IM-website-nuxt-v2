<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { whyCareersSection, whyCareerValues } from '~/data/careers'

const accentClasses: Record<
  (typeof whyCareerValues)[number]['accent'],
  { tile: string; stripe: string; hover: string }
> = {
  blue: {
    tile: 'bg-blue-50 text-blue-600 ring-blue-100',
    stripe: 'bg-blue-500',
    hover: 'hover:border-blue-200',
  },
  indigo: {
    tile: 'bg-indigo-50 text-indigo-600 ring-indigo-100',
    stripe: 'bg-indigo-500',
    hover: 'hover:border-indigo-200',
  },
  emerald: {
    tile: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
    stripe: 'bg-emerald-500',
    hover: 'hover:border-emerald-200',
  },
  amber: {
    tile: 'bg-amber-50 text-amber-600 ring-amber-100',
    stripe: 'bg-amber-500',
    hover: 'hover:border-amber-200',
  },
  violet: {
    tile: 'bg-violet-50 text-violet-600 ring-violet-100',
    stripe: 'bg-violet-500',
    hover: 'hover:border-violet-200',
  },
  teal: {
    tile: 'bg-teal-50 text-teal-600 ring-teal-100',
    stripe: 'bg-teal-500',
    hover: 'hover:border-teal-200',
  },
}
</script>

<template>
  <section
    id="why-indian-mentors"
    class="relative overflow-hidden bg-white section-py"
    aria-labelledby="why-careers-heading"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl"
    />

    <div class="container-page relative">
      <CardHeader
        heading-id="why-careers-heading"
        :badge="whyCareersSection.kicker"
        :title="whyCareersSection.title"
        :description="whyCareersSection.description"
        :classes="whyCareersSection.classes"
      />

      <ul class="mt-8 grid grid-cols-1 gap-3 sm:mt-9 sm:grid-cols-2 lg:grid-cols-3 sm:gap-3.5" role="list">
        <li
          v-for="(item, i) in whyCareerValues"
          :key="item.id"
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 360, delay: i * 45 } }"
        >
          <article
            :class="[
              'group relative flex h-full items-start gap-3.5 overflow-hidden rounded-[1.15rem] border border-slate-200/80 bg-white p-4 shadow-[0_8px_22px_-16px_rgba(15,23,42,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-16px_rgba(15,23,42,0.28)] sm:gap-4 sm:p-[1.05rem]',
              accentClasses[item.accent].hover,
            ]"
          >
            <span
              aria-hidden="true"
              :class="['absolute inset-y-3 left-0 w-[3px] rounded-full', accentClasses[item.accent].stripe]"
            />
            <span
              :class="[
                'relative grid h-9 w-9 shrink-0 place-items-center rounded-xl ring-1 transition duration-300 group-hover:scale-105 sm:h-10 sm:w-10',
                accentClasses[item.accent].tile,
              ]"
            >
              <Icon :icon="item.iconMdi" class="h-[18px] w-[18px] sm:h-5 sm:w-5" aria-hidden="true" />
            </span>
            <div class="min-w-0 flex-1 pt-0.5">
              <h3 class="font-display text-[15px] font-bold leading-snug text-slate-900 sm:text-base">
                {{ item.title }}
              </h3>
              <p class="mt-1 text-[13px] leading-relaxed text-slate-500 sm:text-[13.5px]">
                {{ item.description }}
              </p>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
