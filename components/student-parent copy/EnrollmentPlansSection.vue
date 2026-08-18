<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import {
  enrollmentPlans,
  enrollmentPlansSection,
  planComparisonRows,
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

      <div class="mx-auto mt-12" v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">

        <!-- Desktop -->
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

                <th scope="col" class="w-[36%] rounded-t-2xl border border-b-0 border-slate-200 bg-white p-5 text-left">
                  <div class="text-center">
                    <p class="font-display text-2xl font-bold leading-snug text-slate-900">
                      {{ freePlan.name }}
                    </p>
                    <p class="mt-0.5 text-sm text-slate-500">{{ freePlan.tagline }}</p>
                    <p class="mt-4 font-display text-2xl font-extrabold text-slate-900">
                      <span class="relative inline-block text-slate-500">
                        {{ premiumPlan.price }}
                        <span
                          class="pointer-events-none absolute -left-3 -right-3 top-1/2 h-0.5 -translate-y-1/2 bg-red-400"
                          aria-hidden="true" />
                      </span>
                    </p>
                  </div>
                </th>

                <th scope="col"
                  class="relative w-[36%] rounded-t-2xl border border-b-0 border-[var(--theme-blue,#2a2fff)] bg-[var(--theme-blue,#2a2fff)] p-5 text-left">
                  <span
                    class="theme-badge-recommended absolute left-1/2 top-0 z-[1] -translate-x-1/2 -translate-y-1/2 bg-yellow-400">
                    Recommended
                  </span>
                  <div class="text-center">
                    <p class="font-display text-2xl font-bold leading-snug text-white">
                      {{ premiumPlan.name }}
                    </p>
                    <p class="mt-0.5 text-sm text-white/80">{{ premiumPlan.tagline }}</p>
                    <p class="mt-4 font-display text-2xl font-extrabold text-white">
                      {{ premiumPlan.price }}
                      <span v-if="premiumPlan.priceNote" class="ml-1 text-xs font-medium text-white/70">
                        {{ premiumPlan.priceNote }}
                      </span>
                    </p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in planComparisonRows" :key="row.feature">
                <td class="border-x border-slate-200 bg-white px-5 py-3.5 text-left text-slate-700">
                  {{ row.feature }}
                </td>
                <td class="border-x border-slate-200 bg-white px-4 py-3.5 text-center text-slate-500">
                  {{ row.free }}
                </td>
                <td
                  class="border-x border-[var(--theme-blue,#2a2fff)] bg-[var(--theme-blue,#2a2fff)] px-4 py-3.5 text-center font-medium text-white">
                  {{ row.premium }}
                </td>
              </tr>
              <tr>
                <td class="rounded-b-2xl border border-t-0 border-slate-200 bg-cream-50 px-5 py-4" />
                <td class="rounded-b-2xl border border-t-0 border-slate-200 bg-white px-4 py-4 text-center">
                  <a :href="freePlan.cta.href"
                    class="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-[13px] font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-700">
                    {{ freePlan.cta.label }}
                  </a>
                </td>
                <td
                  class="rounded-b-2xl border border-t-0 border-[var(--theme-blue,#2a2fff)] bg-[var(--theme-blue,#2a2fff)] px-4 py-4 text-center">
                  <a :href="premiumPlan.cta.href"
                    class="inline-flex w-full items-center justify-center rounded-xl bg-white px-3 py-2.5 text-[13px] font-semibold text-[var(--theme-blue,#2a2fff)] shadow-sm transition hover:-translate-y-0.5 hover:bg-cream-50">
                    {{ premiumPlan.cta.label }}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Mobile -->
        <div class="sm:hidden">
          <ul class="overflow-hidden rounded-t-2xl border border-b-0 border-slate-200 bg-white" role="list">
            <li v-for="row in planComparisonRows" :key="row.feature" class="border-b border-slate-100 px-4 py-3.5">
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
          <div class="grid grid-cols-2 gap-2 rounded-b-2xl border border-slate-200 bg-white p-3">
            <a :href="freePlan.cta.href"
              class="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-center text-[12px] font-semibold text-slate-800">
              {{ freePlan.cta.label }}
            </a>
            <a :href="premiumPlan.cta.href"
              class="inline-flex items-center justify-center rounded-xl bg-[var(--theme-blue,#2a2fff)] px-3 py-2.5 text-center text-[12px] font-semibold text-white">
              {{ premiumPlan.cta.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
