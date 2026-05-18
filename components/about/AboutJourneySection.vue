<script setup lang="ts">
import { computed, ref } from 'vue'
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

const activeTimeline = computed(() => aboutTimeline.filter((t) => t.status === 'Active'))

const years = computed(() => {
  const seen: string[] = []
  for (const e of activeTimeline.value) {
    if (!seen.includes(e.year)) seen.push(e.year)
  }
  return seen
})

const selectedYear = ref(years.value[0] ?? 'Year 1')

const selectedMilestones = computed(() =>
  activeTimeline.value.filter((e) => e.year === selectedYear.value),
)

const selectedIndex = computed(() => years.value.indexOf(selectedYear.value))
</script>

<template>
  <section
    id="journey"
    class="bg-cream-50 py-12 sm:py-14 lg:py-16"
    aria-labelledby="journey-heading"
  >
    <div class="container-page">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span class="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Our journey</span>
          <h2
            id="journey-heading"
            class="font-display mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Milestones that shaped us
          </h2>
        </div>

        <!-- Year stepper -->
        <motion.div
          class="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Timeline years"
        >
          <button
            v-for="(year, i) in years"
            :key="year"
            type="button"
            role="tab"
            :aria-selected="selectedYear === year"
            :class="[
              'relative rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition duration-300',
              selectedYear === year
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700',
            ]"
            @click="selectedYear = year"
          >
            {{ year }}
            <span
              v-if="selectedYear === year"
              class="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#FFD600]"
              aria-hidden="true"
            />
          </button>
        </motion.div>
      </div>

      <!-- Progress bar -->
      <div class="mt-8 hidden sm:block" aria-hidden="true">
        <div class="h-1.5 overflow-hidden rounded-full bg-slate-200">
          <motion.div
            class="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500"
            :style="{
              width: `${((selectedIndex + 1) / years.length) * 100}%`,
            }"
          />
        </div>
      </div>

      <!-- Milestone cards -->
      <div
        class="mt-8 grid gap-4 sm:grid-cols-2"
        role="tabpanel"
        :aria-label="`Milestones for ${selectedYear}`"
      >
        <article
          v-for="(entry, ei) in selectedMilestones"
          :key="entry.timeline_id"
          class="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_48px_-16px_rgba(37,99,235,0.18)] sm:p-6"
          v-motion
          :initial="{ opacity: 0, y: 14 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: ei * 80, duration: 450 } }"
        >
          <Icon
            :icon="milestoneIcons[(entry.display_order - 1) % milestoneIcons.length] ?? 'mdi:star'"
            class="pointer-events-none absolute -right-3 -top-3 h-20 w-20 text-blue-600/[0.06] transition group-hover:text-blue-600/[0.12]"
            aria-hidden="true"
          />

          <div class="flex items-start gap-4">
            <span
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
            >
              <Icon
                :icon="milestoneIcons[(entry.display_order - 1) % milestoneIcons.length] ?? 'mdi:star'"
                class="h-6 w-6"
                aria-hidden="true"
              />
            </span>
            <div class="min-w-0 flex-1">
              <span
                class="text-[10px] font-bold uppercase tracking-widest text-blue-500"
              >
                Step {{ String(ei + 1).padStart(2, '0') }}
              </span>
              <h3 class="font-display mt-1 text-lg font-bold text-slate-900">
                {{ entry.milestone_title }}
              </h3>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">
                {{ entry.milestone_description }}
              </p>
            </div>
            </div>
        </article>
      </div>
    </div>
  </section>
</template>
