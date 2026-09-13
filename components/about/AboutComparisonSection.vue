<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { aboutComparison } from '~/data/about'

type ColumnKey = 'indianMentors' | 'coachingCenters' | 'selfStudy'

const columns: {
  key: ColumnKey
  label: string
  highlight?: boolean
}[] = [
    { key: 'indianMentors', label: 'Indian Mentors', highlight: true },
    { key: 'coachingCenters', label: 'Coaching Centers' },
    { key: 'selfStudy', label: 'Self-Study' },
  ]
</script>

<template>
  <section id="comparison" class="relative scroll-mt-28 bg-white section-py" aria-labelledby="comparison-heading">
    <div class="container-page">
      <CardHeader heading-id="comparison-heading" :badge="aboutComparison.badge" :title="aboutComparison.title"
        :description="aboutComparison.description" :classes="aboutComparison.classes" />

      <div class="relative mt-8 overflow-hidden rounded-[20px] border border-slate-200/90 bg-white shadow-soft" v-motion
        :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <div class="overflow-x-auto">
          <table class="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr class="bg-blue-800">
                <th scope="col" class="w-[34%] px-4 py-4 pl-5 text-[13px] font-semibold tracking-wide text-white">
                  Feature
                </th>
                <th v-for="col in columns" :key="col.key" scope="col"
                  class="px-4 py-4 text-[13px] font-semibold tracking-wide text-white last:pr-5">
                  <span class="flex flex-wrap items-center gap-2">
                    {{ col.label }}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in aboutComparison.rows" :key="row.feature" :class="[
                'border-b border-slate-100 transition duration-200 last:border-0',
                i % 2 === 1 ? 'bg-blue-50/60' : 'bg-white hover:bg-slate-50/80',
              ]">
                <td class="px-4 py-3.5 pl-5 font-display text-[14.5px] font-bold text-slate-900">
                  {{ row.feature }}
                </td>
                <td v-for="col in columns" :key="col.key" class="px-4 py-3.5 last:pr-5">
                  <span class="inline-flex">
                    <span v-if="row[col.key]"
                      :class="col.highlight ? 'inline-flex text-blue-700' : 'inline-flex text-emerald-600'">
                      <IconCheck class="h-4 w-4" />
                      <span class="sr-only">Included</span>
                    </span>
                    <span v-else class="inline-flex text-rose-400">
                      <Icon icon="mdi:close" class="h-4 w-4" />
                      <span class="sr-only">Not included</span>
                    </span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="relative border-t border-slate-100 bg-slate-50/80 px-5 py-4 sm:px-6">
          <div class="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
            <Icon icon="mdi:information-outline" class="mt-0.5 h-6 w-6 shrink-0 text-blue-600" aria-hidden="true" />
            <p>{{ aboutComparison.footnote }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
