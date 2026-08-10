<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import { hiringSteps, hiringProcessSection, type HiringStep } from '~/data/tutors'

const accentClasses: Record<HiringStep['accent'], { tile: string; number: string; bar: string }> = {
  violet: { tile: 'bg-violet-100', number: 'text-violet-700', bar: 'bg-violet-600' },
  blue: { tile: 'bg-blue-100', number: 'text-blue-700', bar: 'bg-blue-600' },
  emerald: { tile: 'bg-emerald-100', number: 'text-emerald-700', bar: 'bg-emerald-500' },
  orange: { tile: 'bg-orange-100', number: 'text-orange-700', bar: 'bg-orange-500' },
  indigo: { tile: 'bg-indigo-100', number: 'text-indigo-700', bar: 'bg-indigo-600' },
}

const topRowSteps = computed(() => hiringSteps.slice(0, 2))
const bottomRowSteps = computed(() => hiringSteps.slice(2))

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section id="hiring-process" class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py"
    aria-labelledby="hiring-process-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white to-transparent" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-indigo-200/25 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="hiring-process-heading" :badge="hiringProcessSection.badge"
        :title="hiringProcessSection.title" :description="hiringProcessSection.description"
        :classes="hiringProcessSection.classes" />

      <div class="mt-10 grid grid-cols-1 items-stretch gap-6 lg:mt-12 lg:grid-cols-12 lg:gap-8">
        <!-- Left: 2 + 3 card grid -->
        <div class="flex flex-col gap-3.5 lg:col-span-8 lg:gap-4">
          <ol class="grid grid-cols-1 items-stretch gap-3.5 sm:grid-cols-3 lg:gap-4" role="list"
            aria-label="Hiring steps one and two">
            <li v-for="(step, i) in topRowSteps" :key="step.no"
              :class="['min-w-0', i === 0 ? 'sm:col-span-2' : 'sm:col-span-1']" v-motion
              :initial="{ opacity: 0, y: 14 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 50 + i * 70, duration: 420 } }">
              <article v-if="i === 0"
                class="relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-blue-400/25 bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 p-4 text-white shadow-[0_22px_48px_-26px_rgba(37,99,235,0.65)] sm:p-5">
                <div aria-hidden="true"
                  class="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

                <div class="relative flex items-start justify-between gap-2">
                  <span
                    class="grid h-10 w-10 place-items-center rounded-xl bg-white/15 font-display text-sm font-extrabold text-white ring-1 ring-white/25"
                    aria-hidden="true">
                    {{ step.no }}
                  </span>

                </div>
                <h3 class="relative mt-3 font-display text-[15px] font-extrabold tracking-tight text-white">
                  {{ step.title }}
                </h3>
                <p class="relative mt-1.5 text-[12.5px] leading-relaxed text-white/80">
                  {{ step.description }}
                </p>
                <div class="">
                  <a v-if="step.cta" :href="step.cta.href"
                    class="relative mt-4 inline-flex w-1/3 pr-10 items-center  gap-1.5 rounded-xl bg-white px-3.5 py-2.5 text-[12.5px] font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
                    @mousemove="rippleHandler">
                    {{ step.cta.label }}
                    <IconArrowRight class="h-3.5 w-3.5 shrink-0" />
                  </a>
                </div>
              </article>

              <article v-else
                class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_10px_28px_-18px_rgba(15,23,42,0.16)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_32px_-18px_rgba(37,99,235,0.18)]">
                <div class="flex flex-1 flex-col p-4 sm:p-5">
                  <span :class="[
                    'grid h-10 w-10 place-items-center rounded-xl font-display text-sm font-extrabold',
                    accentClasses[step.accent].tile,
                    accentClasses[step.accent].number,
                  ]" aria-hidden="true">
                    {{ step.no }}
                  </span>
                  <h3 class="font-display mt-3 text-[14.5px] font-bold leading-snug text-slate-900">
                    {{ step.title }}
                  </h3>
                  <p class="mt-1.5 flex-1 text-[12.5px] leading-relaxed text-slate-500">
                    {{ step.description }}
                  </p>
                  <span aria-hidden="true" class="mt-4 h-1 w-8 rounded-full bg-blue-500 mt-5" data-v-0e60153e=""></span>
                </div>
              </article>
            </li>
          </ol>

          <ol class="grid grid-cols-1 items-stretch gap-3.5 sm:grid-cols-3 lg:gap-4" role="list"
            aria-label="Hiring steps three to five">
            <li v-for="(step, i) in bottomRowSteps" :key="step.no" class="min-w-0" v-motion
              :initial="{ opacity: 0, y: 14 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 160 + i * 70, duration: 420 } }">
              <article
                class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_10px_28px_-18px_rgba(15,23,42,0.16)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_32px_-18px_rgba(37,99,235,0.18)]">
                <div class="flex flex-1 flex-col p-4 sm:p-5">
                  <span :class="[
                    'grid h-10 w-10 place-items-center rounded-xl font-display text-sm font-extrabold',
                    accentClasses[step.accent].tile,
                    accentClasses[step.accent].number,
                  ]" aria-hidden="true">
                    {{ step.no }}
                  </span>
                  <h3 class="font-display mt-3 text-[14.5px] font-bold leading-snug text-slate-900">
                    {{ step.title }}
                  </h3>
                  <p class="mt-1.5 flex-1 text-[12.5px] leading-relaxed text-slate-500">
                    {{ step.description }}
                  </p>
                  <span aria-hidden="true" class="mt-5 h-1 w-8 rounded-full bg-blue-500 mt-5" data-v-0e60153e=""></span>
                </div>
              </article>
            </li>
          </ol>
        </div>

        <!-- Right: image (height matches left grid) -->
        <div class="relative flex lg:col-span-4" v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520, delay: 100 } }">
          <div
            class="relative min-h-[280px] w-full flex-1 overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-slate-100 shadow-[0_22px_48px_-26px_rgba(15,23,42,0.28)] sm:min-h-[320px] lg:min-h-0">
            <img :src="usePublicAsset(hiringProcessSection.image)" :alt="hiringProcessSection.imageAlt"
              class="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
            <div aria-hidden="true"
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
            <div class="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-200">
                Teaching with Indian Mentors
              </p>
              <p class="mt-1.5 font-display text-lg font-bold text-white sm:text-xl">
                From profile to first session — guided every step
              </p>
              <a href="#tutor-register"
                class="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-[13px] font-semibold text-blue-700 transition hover:bg-blue-50">
                Start the Hiring Process
                <IconArrowRight class="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
