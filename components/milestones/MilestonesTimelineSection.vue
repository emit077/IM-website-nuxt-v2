<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { aboutTimeline } from '~/data/about'

const milestoneIcons = [
  'mdi:lightbulb-on',
  'mdi:account-group',
  'mdi:book-education',
  'mdi:chart-line',
  'mdi:laptop',
  'mdi:rocket-launch',
  'mdi:map-marker-radius',
]

type YearTheme = {
  numeral: string
  label: string
  accent: string
  soft: string
  border: string
  glow: string
  surface: string
}

const yearThemes: Record<string, YearTheme> = {
  'Year 1': {
    numeral: '01',
    label: 'Foundation',
    accent: 'text-blue-600',
    soft: 'bg-blue-50',
    border: 'border-blue-100',
    glow: 'from-blue-400/20',
    surface: 'bg-white',
  },
  'Year 2': {
    numeral: '02',
    label: 'Growth',
    accent: 'text-violet-600',
    soft: 'bg-violet-50',
    border: 'border-violet-100',
    glow: 'from-violet-400/20',
    surface: 'bg-cream-50',
  },
  'Year 3': {
    numeral: '03',
    label: 'Scale',
    accent: 'text-emerald-600',
    soft: 'bg-emerald-50',
    border: 'border-emerald-100',
    glow: 'from-emerald-400/20',
    surface: 'bg-white',
  },
  'Year 4': {
    numeral: '04',
    label: 'Nationwide',
    accent: 'text-amber-600',
    soft: 'bg-amber-50',
    border: 'border-amber-100',
    glow: 'from-amber-400/20',
    surface: 'bg-cream-50',
  },
}

const activeTimeline = computed(() => aboutTimeline.filter((t) => t.status === 'Active'))

const yearGroups = computed(() => {
  const groups: { year: string; milestones: typeof activeTimeline.value }[] = []
  for (const entry of activeTimeline.value) {
    const last = groups[groups.length - 1]
    if (last?.year === entry.year) {
      last.milestones.push(entry)
    } else {
      groups.push({ year: entry.year, milestones: [entry] })
    }
  }
  return groups
})

function iconFor(order: number) {
  return milestoneIcons[(order - 1) % milestoneIcons.length] ?? 'mdi:star'
}

function themeFor(year: string) {
  return yearThemes[year] ?? yearThemes['Year 1']!
}

function globalIndex(entry: (typeof activeTimeline.value)[number]) {
  return activeTimeline.value.findIndex((t) => t.timeline_id === entry.timeline_id)
}
</script>

<template>
  <section
    id="timeline"
    class="relative overflow-hidden section-py"
    aria-labelledby="milestones-timeline-heading"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 opacity-[0.35]"
      style="background-image: linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px); background-size: 48px 48px"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-transparent to-cream-50"
    />

    <div class="container-page relative">
      <div
        class="mx-auto max-w-2xl text-center"
        v-motion
        :initial="{ opacity: 0, y: 18 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }"
      >
        <p class="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
          Timeline
        </p>
        <h2
          id="milestones-timeline-heading"
          class="font-display mt-4 text-[2rem] font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-[2.75rem]"
        >
          Four years of
          <span class="text-gradient-brand">purposeful growth</span>
        </h2>
        <p class="mt-5 text-base leading-relaxed text-slate-500 sm:text-lg">
          From vision to a pan-India mentor network — every milestone shaped by structure, trust, and measurable outcomes.
        </p>
      </div>

      <div class="relative mx-auto mt-14 max-w-5xl sm:mt-16">
        <div
          aria-hidden="true"
          class="absolute bottom-8 left-1/2 top-8 hidden w-px -translate-x-1/2 bg-gradient-to-b from-blue-200 via-violet-200 to-amber-200 lg:block"
        />

        <div
          v-for="(group, gi) in yearGroups"
          :key="group.year"
          :class="['year-chapter relative', gi > 0 ? 'mt-6 sm:mt-8' : '']"
        >
          <div
            :class="[
              'overflow-hidden rounded-[2rem] border border-slate-200/70 p-5 sm:p-8 lg:p-10',
              themeFor(group.year).surface,
            ]"
            v-motion
            :initial="{ opacity: 0, y: 28 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600, delay: gi * 80 } }"
          >
            <div
              aria-hidden="true"
              :class="[
                'pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br to-transparent blur-3xl',
                themeFor(group.year).glow,
              ]"
            />

            <div class="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div class="flex items-end gap-4 sm:gap-6">
                <span
                  aria-hidden="true"
                  :class="[
                    'font-display text-[4.5rem] font-extrabold leading-none tracking-tighter opacity-[0.12] sm:text-[6rem]',
                    themeFor(group.year).accent,
                  ]"
                >
                  {{ themeFor(group.year).numeral }}
                </span>
                <div class="pb-1 sm:pb-2">
                  <p :class="['text-xs font-bold uppercase tracking-[0.2em]', themeFor(group.year).accent]">
                    {{ group.year }}
                  </p>
                  <h3 class="font-display mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                    {{ themeFor(group.year).label }}
                  </h3>
                </div>
              </div>

              <span
                :class="[
                  'inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-bold ring-1',
                  themeFor(group.year).soft,
                  themeFor(group.year).accent,
                  themeFor(group.year).border,
                ]"
              >
                <Icon icon="mdi:flag-checkered" class="h-3.5 w-3.5" aria-hidden="true" />
                {{ group.milestones.length }} milestones
              </span>
            </div>

            <div class="relative mt-8 grid gap-4 sm:grid-cols-1 sm:gap-5">
              <article
                v-for="entry in group.milestones"
                :key="entry.timeline_id"
                :class="[
                  'group relative overflow-hidden rounded-2xl border bg-white/80 p-5 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:bg-white sm:p-6',
                  themeFor(group.year).border,
                ]"
              >
                <div
                  aria-hidden="true"
                  :class="[
                    'pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br to-transparent opacity-60 blur-2xl transition duration-500 group-hover:opacity-100',
                    themeFor(group.year).glow,
                  ]"
                />

                <div class="relative flex items-start justify-between gap-3">
                  <span
                    :class="[
                      'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ring-1',
                      themeFor(group.year).soft,
                      themeFor(group.year).accent,
                      themeFor(group.year).border,
                    ]"
                  >
                    <Icon :icon="iconFor(entry.display_order)" class="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span class="text-[11px] font-bold tabular-nums tracking-widest text-slate-300">
                    {{ String(globalIndex(entry) + 1).padStart(2, '0') }}
                  </span>
                </div>

                <h4 class="font-display relative mt-5 text-lg font-bold leading-snug text-slate-900">
                  {{ entry.milestone_title }}
                </h4>
                <p class="relative mt-2 text-sm leading-relaxed text-slate-500">
                  {{ entry.milestone_description }}
                </p>

                <div
                  aria-hidden="true"
                  :class="[
                    'absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-700 ease-out group-hover:w-full',
                    group.year === 'Year 1' ? 'bg-blue-500' : '',
                    group.year === 'Year 2' ? 'bg-violet-500' : '',
                    group.year === 'Year 3' ? 'bg-emerald-500' : '',
                    group.year === 'Year 4' ? 'bg-amber-500' : '',
                  ]"
                />
              </article>
            </div>
          </div>

          <div
            aria-hidden="true"
            class="absolute -bottom-4 left-1/2 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-white shadow-soft lg:flex"
          >
            <span
              :class="[
                'h-3 w-3 rounded-full',
                group.year === 'Year 1' ? 'bg-blue-600' : '',
                group.year === 'Year 2' ? 'bg-violet-600' : '',
                group.year === 'Year 3' ? 'bg-emerald-600' : '',
                group.year === 'Year 4' ? 'bg-amber-500' : '',
              ]"
            />
          </div>
        </div>
      </div>

      <p
        class="mx-auto mt-14 max-w-md text-center text-sm font-medium italic text-slate-400 sm:mt-16"
        v-motion
        :initial="{ opacity: 0 }"
        :visibleOnce="{ opacity: 1, transition: { duration: 500, delay: 300 } }"
      >
        Building India's most trusted personalised tutoring ecosystem — one milestone at a time.
      </p>
    </div>
  </section>
</template>
