<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import {
  enrollmentPlans,
  enrollmentPlansSection,
  planComparisonRows,
  premiumWhyChoose,
} from '~/data/student-parent'

const freePlan = enrollmentPlans.find((p) => p.id === 'free')!
const premiumPlan = enrollmentPlans.find((p) => p.id === 'premium')!
</script>

<template>
  <section id="enrollment-plans" class="relative bg-white section-py" aria-labelledby="enrollment-plans-heading">
    <div class="container-page">
      <CardHeader heading-id="enrollment-plans-heading" :badge="enrollmentPlansSection.badge"
        :title="enrollmentPlansSection.title" :description="enrollmentPlansSection.description"
        :classes="enrollmentPlansSection.classes" />

      <div class="mx-auto mt-12 " v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">

        <!-- Desktop: reference-style comparison card -->
        <div class="hidden sm:block">
          <table
            class="w-full table-fixed border-separate border-spacing-x-3 border-spacing-y-0 bg-transparent text-sm">
            <thead>
              <tr class="bg-transparent align-bottom">
                <th scope="col"
                  class="w-[28%] rounded-t-2xl border border-b-0 border-slate-200 bg-cream-50 px-5 py-5 text-left">
                  <span class="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                    Feature
                  </span>
                </th>

                <th scope="col" class="w-[36%] rounded-t-2xl border border-slate-200 bg-white p-5 text-left border-b-0">
                  <div class="flex items-start gap-3">
                    <span
                      class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-600 ring-1 ring-slate-200">
                      <Icon :icon="freePlan.iconMdi" class="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div class="min-w-0">
                      <p class="font-display text-lg font-bold leading-snug text-slate-900">
                        {{ freePlan.name }}
                      </p>
                      <p class="mt-0.5 text-[12px] leading-snug text-slate-500">{{ freePlan.tagline }}</p>
                      <p class="mt-4 font-display text-2xl font-extrabold text-slate-900">
                        {{ freePlan.price }}
                        <span v-if="freePlan.priceNote" class="ml-1 text-xs font-medium text-slate-500">
                          {{ freePlan.priceNote }}
                        </span>
                      </p>
                    </div>
                  </div>

                </th>

                <th scope="col"
                  class="relative w-[36%] rounded-t-2xl border border-b-0 border-[var(--theme-blue,#2a2fff)] bg-[var(--theme-blue,#2a2fff)] p-5 text-left">
                  <span
                    class="theme-badge-recommended absolute left-1/2 top-0 z-[1] -translate-x-1/2 -translate-y-1/2">
                    Recommended
                  </span>
                  <div class="flex items-start gap-3">
                    <span
                      class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15 text-white ring-1 ring-white/25">
                      <Icon :icon="premiumPlan.iconMdi" class="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div class="min-w-0">
                      <p class="font-display text-lg font-bold leading-snug text-white">
                        {{ premiumPlan.name }}
                      </p>
                      <p class="mt-0.5 text-[12px] leading-snug text-white/75">{{ premiumPlan.tagline }}</p>
                      <p class="mt-4 font-display text-2xl font-extrabold text-white">
                        {{ premiumPlan.price }}
                        <span v-if="premiumPlan.priceNote" class="ml-1 text-xs font-medium text-white/70">
                          {{ premiumPlan.priceNote }}
                        </span>
                      </p>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in planComparisonRows" :key="row.feature">
                <td class="border-x border-slate-200 bg-white px-5 py-3.5 text-left text-slate-700"
                  :class="{ 'rounded-b-2xl border-b': i === planComparisonRows.length - 1 }">
                  {{ row.feature }}
                </td>
                <td class="border-x border-slate-200 bg-white px-4 py-3.5 text-center text-slate-500"
                  :class="{ 'rounded-b-2xl border-b': i === planComparisonRows.length - 1 }">
                  {{ row.free }}
                </td>
                <td
                  class="border-x border-[var(--theme-blue,#2a2fff)] bg-[var(--theme-blue,#2a2fff)] px-4 py-3.5 text-center font-medium text-white"
                  :class="{ 'rounded-b-2xl border-b': i === planComparisonRows.length - 1 }">
                  {{ row.premium }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Mobile -->
        <ul class="overflow-hidden rounded-t-2xl border border-slate-200 bg-white sm:hidden" role="list">
          <li v-for="row in planComparisonRows" :key="row.feature" class="px-4 py-3.5">
            <p class="text-[13px] font-semibold text-slate-900">{{ row.feature }}</p>
            <div class="mt-2 grid grid-cols-2">
              <p class="border-r border-slate-200 pr-3 text-[12px] text-slate-500">
                <span class="block text-[10px] font-bold uppercase tracking-wide text-slate-400">Free</span>
                {{ row.free }}
              </p>
              <p class="pl-3 text-[12px] font-medium text-blue-700">
                <span class="block text-[10px] font-bold uppercase tracking-wide text-blue-400">Premium</span>
                {{ row.premium }}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="mx-auto mt-8 max-w-4xl rounded-3xl border border-slate-200/80 bg-cream-50/70 p-6 sm:p-7" v-motion
        :initial="{ opacity: 0, y: 12 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
        <h3 class="font-display text-base font-bold text-slate-900 sm:text-lg">Why families choose Premium</h3>
        <ul class="mt-4 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2" role="list">
          <li v-for="point in premiumWhyChoose" :key="point"
            class="flex items-start gap-2.5 text-[13px] text-slate-700">
            <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
            {{ point }}
          </li>
        </ul>
        <p class="mt-5 text-sm text-slate-600">
          At roughly <span class="font-semibold text-slate-900">₹100 per month</span>, Premium includes unlimited
          tutor access, progress reports, personalised recommendations, and 24/7 support.
        </p>
      </div>
    </div>
  </section>
</template>