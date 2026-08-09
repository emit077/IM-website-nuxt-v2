<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import {
  planComparisonSection,
  subscriptionComparisonRows,
  subscriptionPlans,
} from '~/data/student-parent'

const goldPlan = subscriptionPlans.find((p) => p.id === 'gold')!
const diamondPlan = subscriptionPlans.find((p) => p.id === 'diamond')!
const platinumPlan = subscriptionPlans.find((p) => p.id === 'platinum')!
</script>

<template>
  <section id="plan-comparison" class="relative bg-white section-py" aria-labelledby="plan-comparison-heading">
    <div class="container-page">
      <CardHeader heading-id="plan-comparison-heading" :badge="planComparisonSection.badge"
        :title="planComparisonSection.title" :description="planComparisonSection.description"
        :classes="planComparisonSection.classes" />

      <div class="mx-auto mt-12" v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
        <!-- Desktop -->
        <div class="hidden lg:block">
          <table
            class="w-full table-fixed border-separate border-spacing-x-3 border-spacing-y-0 bg-transparent text-sm">
            <thead>
              <tr class="bg-transparent align-bottom">
                <th scope="col"
                  class="w-[22%] rounded-t-2xl border border-b-0 border-slate-200 bg-cream-50 px-5 py-5 text-left">
                  <span class="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                    Feature
                  </span>
                </th>

                <th scope="col" class="w-[26%] rounded-t-2xl border border-b-0 border-slate-200 bg-white p-5 text-left">
                  <div class="text-center">
                    <p class="font-display text-2xl font-bold leading-snug text-slate-900">
                      {{ goldPlan.name.replace(' Plan', '') }}
                    </p>
                    <p class="mt-0.5 text-sm text-slate-500">{{ goldPlan.duration }}</p>
                    <p class="mt-3 text-xs font-medium text-slate-500">{{ goldPlan.subtitle }}</p>
                  </div>
                </th>

                <th scope="col"
                  class="relative w-[26%] rounded-t-2xl border border-b-0 border-[var(--theme-blue,#2a2fff)] bg-[var(--theme-blue,#2a2fff)] p-5 text-left">
                  <span
                    class="theme-badge-recommended absolute left-1/2 top-0 z-[1] -translate-x-1/2 -translate-y-1/2 bg-yellow-400">
                    Recommended
                  </span>
                  <div class="text-center">
                    <p class="font-display text-2xl font-bold leading-snug text-white">
                      {{ diamondPlan.name.replace(' Plan', '') }}
                    </p>
                    <p class="mt-0.5 text-sm text-white/80">{{ diamondPlan.duration }}</p>
                    <p class="mt-3 text-xs font-medium text-white/70">{{ diamondPlan.subtitle }}</p>
                  </div>
                </th>

                <th scope="col" class="w-[26%] rounded-t-2xl border border-b-0 border-slate-200 bg-white p-5 text-left">
                  <div class="text-center">
                    <p class="font-display text-2xl font-bold leading-snug text-slate-900">
                      {{ platinumPlan.name.replace(' Plan', '') }}
                    </p>
                    <p class="mt-0.5 text-sm text-slate-500">{{ platinumPlan.duration }}</p>
                    <p class="mt-3 text-xs font-medium text-slate-500">{{ platinumPlan.subtitle }}</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in subscriptionComparisonRows" :key="row.feature">
                <td class="border-x border-slate-200 bg-white px-5 py-3.5 text-left text-slate-700">
                  {{ row.feature }}
                </td>
                <td class="border-x border-slate-200 bg-white px-4 py-3.5 text-center text-slate-500">
                  {{ row.gold }}
                </td>
                <td
                  class="border-x border-[var(--theme-blue,#2a2fff)] bg-[var(--theme-blue,#2a2fff)] px-4 py-3.5 text-center font-medium text-white">
                  {{ row.diamond }}
                </td>
                <td class="border-x border-slate-200 bg-white px-4 py-3.5 text-center text-slate-500">
                  {{ row.platinum }}
                </td>
              </tr>
              <tr>
                <td class="rounded-b-2xl border border-t-0 border-slate-200 bg-cream-50 px-5 py-4" />
                <td class="rounded-b-2xl border border-t-0 border-slate-200 bg-white px-4 py-4 text-center">
                  <a :href="goldPlan.cta.href"
                    class="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-[13px] font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-700">
                    {{ goldPlan.cta.label }}
                  </a>
                </td>
                <td
                  class="rounded-b-2xl border border-t-0 border-[var(--theme-blue,#2a2fff)] bg-[var(--theme-blue,#2a2fff)] px-4 py-4 text-center">
                  <a :href="diamondPlan.cta.href"
                    class="inline-flex w-full items-center justify-center rounded-xl bg-white px-3 py-2.5 text-[13px] font-semibold text-[var(--theme-blue,#2a2fff)] shadow-sm transition hover:-translate-y-0.5 hover:bg-cream-50">
                    {{ diamondPlan.cta.label }}
                  </a>
                </td>
                <td class="rounded-b-2xl border border-t-0 border-slate-200 bg-white px-4 py-4 text-center">
                  <a :href="platinumPlan.cta.href"
                    class="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-[13px] font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-700">
                    {{ platinumPlan.cta.label }}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Mobile / tablet -->
        <div class="lg:hidden">
          <ul class="overflow-hidden rounded-t-2xl border border-b-0 border-slate-200 bg-white" role="list">
            <li v-for="row in subscriptionComparisonRows" :key="row.feature"
              class="border-b border-slate-100 px-4 py-3.5">
              <p class="text-[13px] font-semibold text-slate-900">{{ row.feature }}</p>
              <div class="mt-2 grid grid-cols-3 gap-2">
                <p class="text-[12px] text-slate-500">
                  <span class="block text-[10px] font-bold uppercase tracking-wide text-slate-400">Gold</span>
                  {{ row.gold }}
                </p>
                <p class="text-[12px] font-medium text-blue-700">
                  <span class="block text-[10px] font-bold uppercase tracking-wide text-blue-400">Diamond</span>
                  {{ row.diamond }}
                </p>
                <p class="text-[12px] text-slate-500">
                  <span class="block text-[10px] font-bold uppercase tracking-wide text-slate-400">Platinum</span>
                  {{ row.platinum }}
                </p>
              </div>
            </li>
          </ul>
          <div class="grid grid-cols-3 gap-2 rounded-b-2xl border border-slate-200 bg-white p-3">
            <a :href="goldPlan.cta.href"
              class="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-2 py-2.5 text-center text-[12px] font-semibold text-slate-800">
              {{ goldPlan.cta.label }}
            </a>
            <a :href="diamondPlan.cta.href"
              class="inline-flex items-center justify-center rounded-xl bg-[var(--theme-blue,#2a2fff)] px-2 py-2.5 text-center text-[12px] font-semibold text-white">
              {{ diamondPlan.cta.label }}
            </a>
            <a :href="platinumPlan.cta.href"
              class="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-2 py-2.5 text-center text-[12px] font-semibold text-slate-800">
              {{ platinumPlan.cta.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
