<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import { aboutRoadmap } from '~/data/about'

type Accent = 'blue' | 'indigo' | 'violet'

const accentClasses: Record<
  Accent,
  { tag: string; node: string; glow: string; check: string; bar: string; hover: string; blob: string; watermark: string }
> = {
  blue: {
    tag: 'bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200/70',
    node: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    glow: 'shadow-blue-500/30',
    check: 'text-blue-600',
    bar: 'bg-gradient-to-r from-blue-500 to-indigo-600',
    hover: 'hover:border-blue-200',
    blob: 'bg-blue-400/20',
    watermark: 'text-blue-500/[0.06]',
  },
  indigo: {
    tag: 'bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200/70',
    node: 'bg-gradient-to-br from-indigo-500 to-violet-600',
    glow: 'shadow-indigo-500/30',
    check: 'text-indigo-600',
    bar: 'bg-gradient-to-r from-indigo-500 to-violet-600',
    hover: 'hover:border-indigo-200',
    blob: 'bg-indigo-400/20',
    watermark: 'text-indigo-500/[0.06]',
  },
  violet: {
    tag: 'bg-violet-50 text-violet-700 ring-1 ring-inset ring-violet-200/70',
    node: 'bg-gradient-to-br from-violet-500 to-fuchsia-600',
    glow: 'shadow-violet-500/30',
    check: 'text-violet-600',
    bar: 'bg-gradient-to-r from-violet-500 to-fuchsia-600',
    hover: 'hover:border-violet-200',
    blob: 'bg-violet-400/20',
    watermark: 'text-violet-500/[0.06]',
  },
}

const headerTitle = computed(
  () =>
    `${aboutRoadmap.title} <span class="text-gradient-brand">${aboutRoadmap.titleHighlight}</span> ${aboutRoadmap.titleSuffix}`,
)
</script>

<template>
  <section id="roadmap" class="bg-white py-14 sm:py-16 lg:py-20" aria-labelledby="roadmap-heading">
    <div class="container-page">
      <CardHeader variant="section" heading-id="roadmap-heading" content-class="!px-0 !py-0" :badge="aboutRoadmap.badge"
        :title="headerTitle" :description="aboutRoadmap.subtitle" />

      <!-- Connected vertical timeline -->
      <ol class="relative mx-auto mt-12 max-w-5xl" role="list">

        <li v-for="(phase, pi) in aboutRoadmap.phases" :key="phase.id" class="relative"
          :class="pi === aboutRoadmap.phases.length - 1 ? '' : 'pb-6 sm:pb-8'" v-motion :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480, delay: 80 + pi * 120 } }">
          <div class="relative pl-14 sm:pl-16">
            <!-- Phase card -->
            <div :class="[
              'group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]',
              accentClasses[phase.accent].hover,
            ]">
              <!-- Accent top bar -->
              <span :class="['absolute inset-x-0 top-0 h-1', accentClasses[phase.accent].bar]" aria-hidden="true" />

              <!-- Decorative background -->
              <span :class="[
                'pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl',
                accentClasses[phase.accent].blob,
              ]" aria-hidden="true" />
              <Icon :icon="phase.icon" :class="[
                'pointer-events-none absolute -bottom-5 -right-3 h-28 w-28 rotate-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3',
                accentClasses[phase.accent].watermark,
              ]" aria-hidden="true" />

              <div class="relative p-5 pt-6 sm:p-6 sm:pt-7">
                <div class="flex flex-wrap items-center">
                  <span class="text-md font-medium text-slate-400">
                    #{{ phase.tag }}
                  </span>
                </div>

                <h3 class="font-display mt-2 text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
                  {{ phase.title }}
                </h3>

                <ul class="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2" role="list">
                  <li v-for="item in phase.items" :key="item.title" class="flex items-start gap-2.5">
                    <Icon icon="mdi:check-circle"
                      :class="['mt-0.5 h-4 w-4 shrink-0', accentClasses[phase.accent].check]" aria-hidden="true" />
                    <p class="text-sm leading-relaxed text-slate-600">
                      <span class="font-semibold text-slate-900">{{ item.title }}</span>
                      <span class="block text-[13px] text-slate-500">{{ item.description }}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ol>

      <p
        class="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200/80 bg-white px-6 py-5 text-center text-sm leading-relaxed text-slate-600 shadow-[0_1px_3px_rgba(15,23,42,0.04)] sm:text-base">
        {{ aboutRoadmap.note }}
      </p>
    </div>
  </section>
</template>
