<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { aboutRoadmap } from '~/data/about'

type Accent = 'blue' | 'indigo' | 'violet'

const accentClasses: Record<
  Accent,
  {
    ring: string
    header: string
    tag: string
    number: string
    check: string
    itemHover: string
    watermark: string
    glow: string
  }
> = {
  blue: {
    ring: 'ring-blue-200/60',
    header: 'from-blue-500 via-blue-600 to-indigo-600',
    tag: 'bg-white/15 text-white ring-1 ring-inset ring-white/25',
    number: 'text-white/25',
    check: 'text-blue-600',
    itemHover: 'hover:border-blue-200 hover:bg-blue-50/40',
    watermark: 'text-white/10',
    glow: 'bg-blue-400/25',
  },
  indigo: {
    ring: 'ring-indigo-200/60',
    header: 'from-indigo-500 via-indigo-600 to-violet-600',
    tag: 'bg-white/15 text-white ring-1 ring-inset ring-white/25',
    number: 'text-white/25',
    check: 'text-indigo-600',
    itemHover: 'hover:border-indigo-200 hover:bg-indigo-50/40',
    watermark: 'text-white/10',
    glow: 'bg-indigo-400/25',
  },
  violet: {
    ring: 'ring-violet-200/60',
    header: 'from-violet-500 via-violet-600 to-fuchsia-600',
    tag: 'bg-white/15 text-white ring-1 ring-inset ring-white/25',
    number: 'text-white/25',
    check: 'text-violet-600',
    itemHover: 'hover:border-violet-200 hover:bg-violet-50/40',
    watermark: 'text-white/10',
    glow: 'bg-violet-400/25',
  },
}

const phaseNumber = (i: number) => String(i + 1).padStart(2, '0')
</script>

<template>
  <section id="roadmap" class="section-surface-muted section-py" aria-labelledby="roadmap-heading">
    <div class="container-page">
      <CardHeader heading-id="roadmap-heading" :badge="aboutRoadmap.badge" :title="aboutRoadmap.title"
        :description="aboutRoadmap.description" :classes="aboutRoadmap.classes" />
      <div class="mx-auto mt-12 max-w-4xl">
        <div v-for="(phase, pi) in aboutRoadmap.phases" :key="phase.id" class="sticky"
          :style="{ top: `calc(5.5rem + ${pi * 2.25}rem)`, zIndex: 10 + pi }"
          :class="pi === aboutRoadmap.phases.length - 1 ? '' : 'pb-8 sm:pb-10'">
          <article v-motion :initial="{ opacity: 0, y: 40, scale: 0.97 }"
            :visibleOnce="{ opacity: 1, y: 0, scale: 1, transition: { duration: 520, delay: 60 } }" :class="[
              'group relative overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_-25px_rgba(15,23,42,0.35)] ring-1',
              accentClasses[phase.accent].ring,
            ]">
            <div
              :class="['relative overflow-hidden bg-gradient-to-r px-5 py-5 sm:px-7 sm:py-6', accentClasses[phase.accent].header]">
              <span
                :class="['pointer-events-none absolute -right-6 -top-10 h-36 w-36 rounded-full blur-2xl', accentClasses[phase.accent].glow]"
                aria-hidden="true" />
              <Icon :icon="phase.icon" :class="[
                'pointer-events-none absolute -bottom-6 right-4 h-28 w-28 rotate-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3',
                accentClasses[phase.accent].watermark,
              ]" aria-hidden="true" />

              <div class="relative flex items-center gap-4">
                <span class="font-display text-4xl font-black leading-none sm:text-5xl"
                  :class="accentClasses[phase.accent].number">
                  {{ phaseNumber(pi) }}
                </span>
                <div class="min-w-0">
                  <span
                    :class="['inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide', accentClasses[phase.accent].tag]">
                    <Icon :icon="phase.icon" class="h-3.5 w-3.5" aria-hidden="true" />
                    {{ phase.tag }}
                  </span>
                  <h3 class="font-display mt-1.5 text-lg font-extrabold tracking-tight text-white sm:text-xl">
                    {{ phase.title }}
                  </h3>
                </div>
              </div>
            </div>
            <div class="p-5 sm:p-7">
              <ul class="grid gap-3.5 sm:grid-cols-2" role="list">
                <li v-for="item in phase.items" :key="item.title" :class="[
                  'flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white p-4 transition-colors duration-300',
                  accentClasses[phase.accent].itemHover,
                ]">
                  <span
                    :class="['mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cream-50', accentClasses[phase.accent].check]">
                    <Icon :icon="item.icon" class="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <p class="min-w-0">
                    <span class="block text-sm font-semibold text-slate-900">{{ item.title }}</span>
                    <span class="mt-1 block text-[13px] leading-relaxed text-slate-500">{{ item.description }}</span>
                  </p>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>

      <p
        class="relative z-20 mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200/80 bg-white px-6 py-5 text-center text-sm leading-relaxed text-slate-600 shadow-[0_1px_3px_rgba(15,23,42,0.04)] sm:text-base">
        {{ aboutRoadmap.note }}
      </p>
    </div>
  </section>
</template>
