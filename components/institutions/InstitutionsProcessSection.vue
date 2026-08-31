<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { hiringProcessOutcome, hiringSteps, institutionsProcessSection } from '~/data/institutions'

const accentClasses: Record<(typeof hiringSteps)[number]['accent'], { tile: string; number: string }> = {
  blue: { tile: 'bg-blue-100', number: 'text-blue-700' },
  indigo: { tile: 'bg-indigo-100', number: 'text-indigo-700' },
  violet: { tile: 'bg-violet-100', number: 'text-violet-700' },
  emerald: { tile: 'bg-emerald-100', number: 'text-emerald-700' },
  amber: { tile: 'bg-amber-100', number: 'text-amber-700' },
}
</script>

<template>
  <section id="hiring-process" class="relative scroll-mt-24 overflow-hidden bg-white section-py"
    aria-labelledby="process-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-indigo-100/40 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="process-heading" :badge="institutionsProcessSection.badge"
        :title="institutionsProcessSection.title" :description="institutionsProcessSection.description"
        :classes="institutionsProcessSection.classes" />

      <ol class="mt-10 hidden gap-3 xl:grid xl:grid-cols-5" role="list">
        <li
          v-for="(step, i) in hiringSteps"
          :key="step.no"
          class="relative"
          v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 25 + i * 50, duration: 380 } }"
        >
          <article
            class="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card"
          >
            <span
              :class="[
                'grid h-11 w-11 place-items-center rounded-xl font-display text-sm font-extrabold',
                accentClasses[step.accent].tile,
                accentClasses[step.accent].number,
              ]"
              aria-hidden="true"
            >
              {{ step.no }}
            </span>
            <span
              class="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-500"
              aria-hidden="true"
            >
              <Icon :icon="step.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-3 font-display text-[15px] font-bold leading-snug text-slate-900">{{ step.title }}</h3>
            <p class="mt-1.5 flex-1 text-[12.5px] leading-relaxed text-slate-500">{{ step.description }}</p>
          </article>
          <Icon
            v-if="i < hiringSteps.length - 1"
            icon="mdi:chevron-right"
            class="pointer-events-none absolute -right-2.5 top-8 z-10 hidden h-5 w-5 text-blue-300 xl:block"
            aria-hidden="true"
          />
        </li>
      </ol>

      <ol class="relative mx-auto mt-10 max-w-3xl space-y-0 xl:hidden" role="list">
        <li
          v-for="(step, i) in hiringSteps"
          :key="`mobile-${step.no}`"
          class="relative flex gap-5 sm:gap-6"
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 60 + i * 80, duration: 450 } }"
        >
          <div class="flex flex-col items-center">
            <span
              class="z-10 grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-600 text-white shadow-cta ring-4 ring-blue-100"
            >
              <Icon :icon="step.iconMdi" class="h-5 w-5" aria-hidden="true" />
            </span>
            <span
              v-if="i < hiringSteps.length - 1"
              aria-hidden="true"
              class="-mt-1 w-px flex-1 bg-gradient-to-b from-blue-200 to-blue-100"
            />
          </div>

          <div :class="['flex-1', i < hiringSteps.length - 1 ? 'pb-8 sm:pb-10' : '']">
            <div
              class="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-card sm:p-6"
            >
              <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
                Step {{ step.no }} · {{ step.subtitle }}
              </p>
              <h3 class="font-display mt-1.5 text-base font-bold text-slate-900 sm:text-lg">{{ step.title }}</h3>
              <p class="mt-1.5 text-[13px] leading-relaxed text-slate-600 sm:text-sm">{{ step.description }}</p>
              <ul class="mt-3.5 space-y-2" role="list">
                <li v-for="item in step.items" :key="item" class="flex items-start gap-2.5 text-[13px] text-slate-700">
                  <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ol>

      <div class="mt-10 hidden xl:grid xl:grid-cols-5 xl:gap-3">
        <article
          v-for="(step, i) in hiringSteps"
          :key="`detail-${step.no}`"
          class="rounded-2xl border border-slate-100 bg-cream-50/60 p-4"
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80 + i * 40, duration: 360 } }"
        >
          <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">{{ step.subtitle }}</p>
          <ul class="mt-3 space-y-2" role="list">
            <li v-for="item in step.items" :key="item" class="flex items-start gap-2 text-[12.5px] leading-snug text-slate-600">
              <IconCheck class="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
              {{ item }}
            </li>
          </ul>
        </article>
      </div>

      <p class="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-slate-600 sm:text-base" v-motion
        :initial="{ opacity: 0 }" :visibleOnce="{ opacity: 1, transition: { duration: 500 } }">
        {{ hiringProcessOutcome }}
      </p>
    </div>
  </section>
</template>
