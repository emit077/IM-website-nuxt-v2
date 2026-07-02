<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import { aboutRoadmap } from '~/data/about'

type Accent = 'blue' | 'indigo' | 'violet'

const accentClasses: Record<
  Accent,
  {
    tag: string
    tile: string
    number: string
    iconBadge: string
    hover: string
    line: string
  }
> = {
  blue: {
    tag: 'bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-100',
    tile: 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-500/25',
    number: 'text-blue-100',
    iconBadge: 'bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-100 group-hover/item:bg-blue-100',
    hover: 'hover:border-blue-200/80',
    line: 'from-blue-500 to-indigo-600',
  },
  indigo: {
    tag: 'bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-100',
    tile: 'bg-gradient-to-br from-indigo-500 to-violet-600 shadow-indigo-500/25',
    number: 'text-indigo-100',
    iconBadge: 'bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-100 group-hover/item:bg-indigo-100',
    hover: 'hover:border-indigo-200/80',
    line: 'from-indigo-500 to-violet-600',
  },
  violet: {
    tag: 'bg-violet-50 text-violet-700 ring-1 ring-inset ring-violet-100',
    tile: 'bg-gradient-to-br from-violet-500 to-fuchsia-600 shadow-violet-500/25',
    number: 'text-violet-100',
    iconBadge: 'bg-violet-50 text-violet-600 ring-1 ring-inset ring-violet-100 group-hover/item:bg-violet-100',
    hover: 'hover:border-violet-200/80',
    line: 'from-violet-500 to-fuchsia-600',
  },
}

const headerTitle = computed(
  () =>
    `${aboutRoadmap.title} <span class="text-gradient-brand">${aboutRoadmap.titleHighlight}</span> ${aboutRoadmap.titleSuffix}`,
)

const phaseNumber = (i: number) => String(i + 1).padStart(2, '0')
</script>

<template>
  <section id="roadmap" class="bg-slate-50/60 py-14 sm:py-16 lg:py-20" aria-labelledby="roadmap2-heading">
    <div class="container-page">
      <CardHeader variant="section" heading-id="roadmap2-heading" content-class="!px-0 !py-0"
        :badge="aboutRoadmap.badge" :title="headerTitle" :description="aboutRoadmap.subtitle" />

      <!-- 3-column card grid -->
      <div class="mt-12 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-7">
        <article v-for="(phase, pi) in aboutRoadmap.phases" :key="phase.id" v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480, delay: 80 + pi * 120 } }" :class="[
            'group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.25)]',
            accentClasses[phase.accent].hover,
          ]">
          <!-- Card header -->
          <div class="relative px-6 pb-5 pt-6 sm:px-7 sm:pt-7">
            <span
              class="pointer-events-none absolute right-5 top-5 select-none font-display text-6xl font-black leading-none"
              :class="accentClasses[phase.accent].number" aria-hidden="true">
              {{ phaseNumber(pi) }}
            </span>

            <div :class="[
              'flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg',
              accentClasses[phase.accent].tile,
            ]">
              <Icon :icon="phase.icon" class="h-6 w-6" aria-hidden="true" />
            </div>

            <span
              :class="['mt-5 inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider', accentClasses[phase.accent].tag]">
              {{ phase.tag }}
            </span>

            <h3 class="font-display mt-2 text-xl font-bold tracking-tight text-slate-900">
              {{ phase.title }}
            </h3>
          </div>

          <!-- Divider -->
          <div class="mx-6 h-px bg-slate-100 sm:mx-7" aria-hidden="true" />

          <!-- Items -->
          <ul class="flex flex-1 flex-col gap-1 p-4 sm:p-5" role="list">
            <li v-for="item in phase.items" :key="item.title"
              class="group/item flex items-start gap-3.5 rounded-2xl p-3 transition-colors duration-200 hover:bg-slate-50">
              <span
                :class="['flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors duration-200', accentClasses[phase.accent].iconBadge]">
                <Icon :icon="item.icon" class="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <div class="min-w-0 pt-0.5">
                <p class="text-[14px] font-semibold leading-snug text-slate-900">{{ item.title }}</p>
                <p class="mt-1 text-[13px] leading-relaxed text-slate-500">{{ item.description }}</p>
              </div>
            </li>
          </ul>

          <!-- Bottom accent line -->
          <div :class="['h-1 w-full bg-gradient-to-r', accentClasses[phase.accent].line]" aria-hidden="true" />
        </article>
      </div>

      <p
        class="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200/70 bg-white px-6 py-5 text-center text-sm leading-relaxed text-slate-600 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:text-base">
        {{ aboutRoadmap.note }}
      </p>
    </div>
  </section>
</template>
