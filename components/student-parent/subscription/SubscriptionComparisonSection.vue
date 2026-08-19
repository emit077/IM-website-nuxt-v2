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

const mobilePlans = [
  { key: 'gold' as const, plan: goldPlan, featured: false },
  { key: 'diamond' as const, plan: diamondPlan, featured: true },
  { key: 'platinum' as const, plan: platinumPlan, featured: false },
]
</script>

<template>
  <section id="plan-comparison" class="relative scroll-mt-36 bg-white section-py lg:scroll-mt-44"
    aria-labelledby="plan-comparison-heading">
    <div class="container-page">
      <CardHeader heading-id="plan-comparison-heading" :badge="planComparisonSection.badge"
        :title="planComparisonSection.title" :description="planComparisonSection.description"
        :classes="planComparisonSection.classes" />

      <div class="mx-auto mt-12" v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
        <div class="hidden lg:block">
          <table
            class="w-full table-fixed border-separate border-spacing-x-3 border-spacing-y-0 bg-transparent text-sm">
            <thead>
              <tr class="align-bottom">
                <th scope="col"
                  class="sticky top-0 z-[1] w-[22%] rounded-t-2xl border border-b-0 border-slate-200 bg-cream-50 px-5 py-5 text-left">
                  <span class="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                    Feature
                  </span>
                </th>

                <th scope="col"
                  class="sticky top-0 z-[1] w-[26%] rounded-t-2xl border border-b-0 border-slate-200 bg-white p-5 text-left">
                  <div class="text-center">
                    <p class="font-display text-2xl font-bold leading-snug text-slate-900">
                      {{ goldPlan.name }}
                    </p>
                    <p class="mt-0.5 text-sm text-slate-500">{{ goldPlan.duration }}</p>
                    <p class="mt-3 text-xs font-medium text-slate-500">{{ goldPlan.subtitle }}</p>
                  </div>
                </th>

                <th scope="col"
                  class="sticky top-0 z-[1] relative w-[26%] rounded-t-2xl border border-b-0 border-[var(--theme-blue,#2a2fff)] bg-[var(--theme-blue,#2a2fff)] p-5 text-left">
                  <span
                    class="theme-badge-recommended absolute left-1/2 top-0 z-[1] -translate-x-1/2 -translate-y-1/2 bg-yellow-400">
                    Most Popular
                  </span>
                  <div class="text-center">
                    <p class="font-display text-2xl font-bold leading-snug text-white">
                      {{ diamondPlan.name }}
                    </p>
                    <p class="mt-0.5 text-sm text-white/80">{{ diamondPlan.duration }}</p>
                    <p class="mt-3 text-xs font-medium text-white/70">{{ diamondPlan.subtitle }}</p>
                  </div>
                </th>

                <th scope="col"
                  class="sticky top-0 z-[1] w-[26%] rounded-t-2xl border border-b-0 border-slate-200 bg-white p-5 text-left">
                  <div class="text-center">
                    <p class="font-display text-2xl font-bold leading-snug text-slate-900">
                      {{ platinumPlan.name }}
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

        <div class="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 lg:hidden">
          <article v-for="item in mobilePlans" :key="item.key"
            :class="[
              'w-[min(20.5rem,85vw)] shrink-0 snap-center overflow-hidden rounded-3xl border',
              item.featured
                ? 'border-[var(--theme-blue,#2a2fff)] bg-[var(--theme-blue,#2a2fff)] text-white'
                : 'border-slate-200 bg-white',
            ]">
            <div class="relative px-5 pb-4 pt-6 text-center">
              <span v-if="item.featured"
                class="mb-3 inline-flex rounded-full bg-yellow-400 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-slate-900">
                Most Popular
              </span>
              <p :class="['font-display text-2xl font-bold', item.featured ? 'text-white' : 'text-slate-900']">
                {{ item.plan.name }}
              </p>
              <p :class="['mt-0.5 text-sm', item.featured ? 'text-white/80' : 'text-slate-500']">
                {{ item.plan.duration }}
              </p>
              <p :class="['mt-1 text-xs font-medium', item.featured ? 'text-white/70' : 'text-slate-500']">
                {{ item.plan.subtitle }}
              </p>
            </div>
            <ul role="list">
              <li v-for="row in subscriptionComparisonRows" :key="row.feature"
                :class="['border-t px-5 py-3', item.featured ? 'border-white/15' : 'border-slate-100']">
                <p :class="['text-[10px] font-bold uppercase tracking-wide', item.featured ? 'text-white/60' : 'text-slate-400']">
                  {{ row.feature }}
                </p>
                <p :class="['mt-1 text-[13px] font-medium', item.featured ? 'text-white' : 'text-slate-700']">
                  {{ row[item.key] }}
                </p>
              </li>
            </ul>
            <div :class="['p-4', item.featured ? 'bg-[var(--theme-blue,#2a2fff)]' : 'bg-white']">
              <a :href="item.plan.cta.href" :class="[
                'inline-flex w-full items-center justify-center rounded-xl px-3 py-2.5 text-[13px] font-semibold',
                item.featured
                  ? 'bg-white text-[var(--theme-blue,#2a2fff)]'
                  : 'border border-slate-300 bg-white text-slate-800',
              ]">
                {{ item.plan.cta.label }}
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
