<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeader.vue'
import { aboutComparison } from '~/data/about'

type ColumnKey = 'indianMentors' | 'coachingCenters' | 'selfStudy'

const columns: {
  key: ColumnKey
  label: string
  short: string
  icon: string
  highlight?: boolean
}[] = [
    {
      key: 'indianMentors',
      label: 'Indian Mentors',
      short: 'Structured mentorship',
      icon: 'mdi:shield-check',
      highlight: true,
    },
    {
      key: 'coachingCenters',
      label: 'Coaching Centers',
      short: 'Traditional coaching',
      icon: 'mdi:school-outline',
    },
    {
      key: 'selfStudy',
      label: 'Self-Study',
      short: 'Independent learning',
      icon: 'mdi:book-open-page-variant-outline',
    },
  ]

const totalFeatures = aboutComparison.rows.length

const scores = computed(() =>
  columns.reduce(
    (acc, col) => {
      acc[col.key] = aboutComparison.rows.filter((row) => row[col.key]).length
      return acc
    },
    {} as Record<ColumnKey, number>,
  ),
)

function cellIcon(value: boolean) {
  return value ? 'mdi:check' : 'mdi:close'
}

function cellWrapClass(value: boolean, highlight = false) {
  if (value) {
    return highlight
      ? 'bg-emerald-600 text-white ring-emerald-200'
      : 'bg-emerald-600 text-white ring-emerald-100'
  }
  return highlight
    ? 'bg-white/10 text-white/50 ring-white/20'
    : 'bg-slate-100 text-slate-300 ring-slate-200'
}
const sectionTitle = "The Difference Behind Every <span class='text-gradient-brand'>Student's Success</span> "
</script>

<template>
  <section id="comparison" class="relative overflow-hidden bg-[#f8fafc] py-14 sm:py-16 lg:py-20"
    aria-labelledby="comparison-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-indigo-200/15 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="comparison-heading" classes="!px-0 !py-0" badge="Our Competitive Advantage"
        :title="sectionTitle" :description="aboutComparison.subtitle" />
      <div class="mx-auto mt-10 grid  grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4" v-motion
        :initial="{ opacity: 0, y: 14 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
        <div v-for="col in columns" :key="col.key" :class="[
          'relative rounded-2xl border p-4 text-center transition duration-300 sm:p-5',
          col.highlight
            ? 'border-blue-300/70 bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-[0_20px_48px_-16px_rgba(37,99,235,0.35)] sm:scale-[1.03]'
            : 'border-slate-200/80 bg-white shadow-soft hover:border-slate-300',
        ]">
          <span v-if="col.highlight"
            class="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-blue-700">
            Recommended
          </span>

          <span :class="[
            'mx-auto inline-flex h-10 w-10 items-center justify-center rounded-xl',
            col.highlight ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-600',
          ]">
            <Icon :icon="col.icon" class="h-5 w-5" aria-hidden="true" />
          </span>

          <p
            :class="['font-display mt-3 text-sm font-bold sm:text-base', col.highlight ? 'text-white' : 'text-slate-900']">
            {{ col.label }}
          </p>
          <p :class="['mt-0.5 text-xs', col.highlight ? 'text-blue-100' : 'text-slate-500']">
            {{ col.short }}
          </p>

          <p :class="[
            'font-display mt-3 text-2xl font-extrabold tabular-nums',
            col.highlight ? 'text-white' : 'text-slate-900',
          ]">
            {{ scores[col.key] }}/{{ totalFeatures }}
          </p>
          <p
            :class="['text-[11px] font-medium uppercase tracking-wider', col.highlight ? 'text-blue-100/80' : 'text-slate-400']">
            features matched
          </p>
        </div>
      </div>
      <div class="mx-auto mt-8  overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-soft"
        v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 80 } }">
        <div class="hidden overflow-x-auto lg:block">
          <table class="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr class="border-b border-slate-200 bg-slate-50/80">
                <th class="px-6 py-4 font-semibold text-slate-700" scope="col">
                  Feature
                </th>
                <th v-for="col in columns" :key="col.key" :class="[
                  'px-4 py-4 text-center font-bold',
                  col.highlight
                    ? 'bg-gradient-to-b from-blue-600 to-blue-700 text-white'
                    : 'text-slate-700',
                ]" scope="col">
                  <span class="block">{{ col.label }}</span>
                  <span :class="[
                    'mt-0.5 block text-[11px] font-medium',
                    col.highlight ? 'text-blue-100' : 'text-slate-400',
                  ]">
                    {{ col.short }}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, ri) in aboutComparison.rows" :key="row.feature" :class="[
                'border-b border-slate-100 transition-colors last:border-0 hover:bg-blue-50/30',
                ri % 2 === 0 ? 'bg-white' : 'bg-slate-50/40',
              ]">
                <td class="px-6 py-4 font-medium text-slate-800">
                  <span class="flex items-center gap-3">
                    <span
                      class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg  text-[11px] font-bold tabular-nums text-slate-600"
                      aria-hidden="true">
                      {{ String(ri + 1).padStart(2, '0') }}
                    </span>
                    {{ row.feature }}
                  </span>
                </td>
                <td v-for="col in columns" :key="col.key" :class="[
                  'px-4 py-4 text-center',
                  col.highlight ? 'bg-blue-50/60' : '',
                ]">
                  <span :class="[
                    'inline-flex h-8 w-8 items-center justify-center rounded-full ring-1',
                    cellWrapClass(row[col.key], col.highlight),
                  ]">
                    <Icon :icon="cellIcon(row[col.key])" class="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span class="sr-only">{{ row[col.key] ? 'Yes' : 'No' }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul class="divide-y divide-slate-200 lg:hidden" role="list">
          <li v-for="(row, ri) in aboutComparison.rows" :key="row.feature" class="px-4 py-4 sm:px-5">
            <p class="flex items-start gap-2.5 font-medium text-slate-900">
              <span
                class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-100 text-[10px] font-bold text-slate-500"
                aria-hidden="true">
                {{ String(ri + 1).padStart(2, '0') }}
              </span>
              {{ row.feature }}
            </p>
            <div class="mt-3 grid grid-cols-3 gap-2">
              <div v-for="col in columns" :key="col.key" :class="[
                'rounded-xl p-2.5 text-center',
                col.highlight
                  ? 'bg-blue-50 ring-1 ring-blue-200'
                  : 'bg-slate-50 ring-1 ring-slate-100',
              ]">
                <p :class="[
                  'text-[10px] font-bold uppercase tracking-wide',
                  col.highlight ? 'text-blue-700' : 'text-slate-500',
                ]">
                  {{ col.label.split(' ')[0] }}
                </p>
                <span :class="[
                  'mx-auto mt-2 inline-flex h-7 w-7 items-center justify-center rounded-full ring-1',
                  cellWrapClass(row[col.key], false),
                ]">
                  <Icon :icon="cellIcon(row[col.key])" class="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <p class="mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-slate-500" v-motion
        :initial="{ opacity: 0 }" :visibleOnce="{ opacity: 1, transition: { duration: 500, delay: 160 } }">
        Indian Mentors checks every box — verified tutors, parent visibility, and measurable outcomes in one
        structured
        system.
      </p>
    </div>
  </section>
</template>
