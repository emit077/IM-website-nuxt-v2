<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeader.vue'
import { aboutRoadmap } from '~/data/about'

type Accent = 'blue' | 'indigo' | 'violet'

const accentClasses: Record<
  Accent,
  {
    header: string
    tag: string
    number: string
    watermark: string
    glow: string
    iconBadge: string
    hover: string
    line: string
  }
> = {
  blue: {
    header: 'from-blue-500 via-blue-600 to-indigo-600',
    tag: 'bg-white/15 text-white ring-1 ring-inset ring-white/25',
    number: 'text-white/25',
    watermark: 'text-white/10',
    glow: 'bg-blue-400/25',
    iconBadge: 'bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-100 group-hover/item:bg-blue-100',
    hover: 'hover:border-blue-200/80',
    line: 'from-blue-500 to-indigo-600',
  },
  indigo: {
    header: 'from-indigo-500 via-indigo-600 to-violet-600',
    tag: 'bg-white/15 text-white ring-1 ring-inset ring-white/25',
    number: 'text-white/25',
    watermark: 'text-white/10',
    glow: 'bg-indigo-400/25',
    iconBadge: 'bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-100 group-hover/item:bg-indigo-100',
    hover: 'hover:border-indigo-200/80',
    line: 'from-indigo-500 to-violet-600',
  },
  violet: {
    header: 'from-violet-500 via-violet-600 to-fuchsia-600',
    tag: 'bg-white/15 text-white ring-1 ring-inset ring-white/25',
    number: 'text-white/25',
    watermark: 'text-white/10',
    glow: 'bg-violet-400/25',
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
      <CardHeader heading-id="roadmap2-heading" classes="!px-0 !py-0" :badge="aboutRoadmap.badge"
        :title="headerTitle" :description="aboutRoadmap.subtitle" />
      <div class="mt-12 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-7">
        <article v-for="(phase, pi) in aboutRoadmap.phases" :key="phase.id" v-motion :initial="{ opacity: 0, y: 24 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480, delay: 80 + pi * 120 } }" :class="[
            'group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.25)]',
            accentClasses[phase.accent].hover,
          ]">
          <div :class="[
            'relative overflow-hidden bg-gradient-to-r px-5 py-5 sm:px-6 sm:py-6',
            accentClasses[phase.accent].header,
          ]">
            <span :class="[
              'pointer-events-none absolute -right-6 -top-10 h-32 w-32 rounded-full blur-2xl',
              accentClasses[phase.accent].glow,
            ]" aria-hidden="true" />
            <Icon :icon="phase.icon" :class="[
              'pointer-events-none absolute -bottom-5 right-3 h-24 w-24 rotate-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3',
              accentClasses[phase.accent].watermark,
            ]" aria-hidden="true" />

            <div class="relative flex items-center gap-3.5">
              <span class="font-display text-3xl font-black leading-none sm:text-4xl"
                :class="accentClasses[phase.accent].number">
                {{ phaseNumber(pi) }}
              </span>
              <div class="min-w-0">
                <span :class="[
                  'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider',
                  accentClasses[phase.accent].tag,
                ]">
                  <Icon :icon="phase.icon" class="h-3.5 w-3.5" aria-hidden="true" />
                  {{ phase.tag }}
                </span>
                <h3 class="font-display mt-1.5 text-base font-extrabold tracking-tight text-white sm:text-lg"
                  v-html="phase.title">
                </h3>
              </div>
            </div>
          </div>
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
