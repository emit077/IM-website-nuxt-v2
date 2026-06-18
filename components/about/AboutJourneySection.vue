<script setup lang="ts">
import { computed } from 'vue'
import CardHeader from '~/components/ui/cardheader.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import { aboutTimeline } from '~/data/about'

const yearLabels: Record<string, string> = {
  'Year 1': 'Foundation',
  'Year 2': 'Growth',
  'Year 3': 'Scale',
  'Year 4': 'Nationwide',
}

const activeTimeline = computed(() => aboutTimeline.filter((t) => t.status === 'Active'))

const journeyDescription = computed(
  () =>
    `Four chapters. ${activeTimeline.value.length} milestones. One mission — trusted mentorship for every learner in India.`,
)

const yearGroups = computed(() => {
  const groups: { year: string; label: string; milestones: typeof activeTimeline.value }[] = []
  for (const entry of activeTimeline.value) {
    const last = groups[groups.length - 1]
    if (last?.year === entry.year) {
      last.milestones.push(entry)
    } else {
      groups.push({
        year: entry.year,
        label: yearLabels[entry.year] ?? entry.year,
        milestones: [entry],
      })
    }
  }
  return groups
})
</script>

<template>
  <section id="journey" class="border-y border-slate-200/80 bg-white py-14 sm:py-16" aria-labelledby="journey-heading">
    <div class="container-page">
      <CardHeader
        variant="section"
        heading-id="journey-heading"
        content-class="!px-0 !py-0"
        badge="Our Journey"
        title="Milestones that shaped us"
        :description="journeyDescription"
      />

      <ol class="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 border-y border-slate-200" v-motion
        :initial="{ opacity: 0, y: 12 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 80 } }">
        <li v-for="group in yearGroups" :key="group.year"
          class="flex items-baseline justify-between gap-4 py-4 sm:py-5">
          <div class="min-w-0">
            <p class="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {{ group.year }}
            </p>
            <p class="font-display mt-0.5 text-base font-bold text-slate-900 sm:text-lg">
              {{ group.label }}
            </p>
          </div>
          <p class="shrink-0 text-right text-sm text-slate-500">
            {{ group.milestones.length }} milestone{{ group.milestones.length === 1 ? '' : 's' }}
          </p>
        </li>
      </ol>

      <div class="mt-8 text-center" v-motion :initial="{ opacity: 0 }"
        :visibleOnce="{ opacity: 1, transition: { duration: 500, delay: 160 } }">
        <NuxtLink to="/milestones" class="btn-secondary group inline-flex">
          Explore full timeline
          <IconArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
