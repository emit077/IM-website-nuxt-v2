<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeader.vue'
import { planComparisonSection, planPositioning, subscriptionComparisonRows } from '~/data/student-parent'
</script>

<template>
  <section id="plan-comparison" class="relative section-surface-muted section-py"
    aria-labelledby="plan-comparison-heading">
    <div class="container-page">
      <CardHeader heading-id="plan-comparison-heading" :badge="planComparisonSection.badge"
        :title="planComparisonSection.title" :description="planComparisonSection.description"
        :classes="planComparisonSection.classes" />
      <div class="mt-10 hidden overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-soft lg:block"
        v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
        <table class="w-full text-left text-sm">
          <thead>
            <tr class="border-b border-slate-200/80 section-surface-muted">
              <th class="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Feature</th>
              <th class="px-4 py-4 text-center">
                <span class="block text-sm font-bold text-slate-900">Gold</span>
                <span class="text-xs font-normal text-slate-500">1 hr / day</span>
              </th>
              <th class="bg-blue-50/70 px-4 py-4 text-center">
                <span class="block text-sm font-bold text-blue-700">Diamond</span>
                <span class="text-xs font-medium text-blue-600">1.5 hrs / day · Popular</span>
              </th>
              <th class="px-4 py-4 text-center">
                <span class="block text-sm font-bold text-slate-900">Platinum</span>
                <span class="text-xs font-normal text-slate-500">2 hrs / day</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in subscriptionComparisonRows" :key="row.feature"
              class="border-b border-slate-100 last:border-0">
              <td class="px-6 py-3.5 font-medium text-slate-800">{{ row.feature }}</td>
              <td class="px-4 py-3.5 text-center text-slate-600">{{ row.gold }}</td>
              <td class="bg-blue-50/40 px-4 py-3.5 text-center font-medium text-blue-700">{{ row.diamond }}</td>
              <td class="px-4 py-3.5 text-center text-slate-600">{{ row.platinum }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul class="mt-10 space-y-2.5 lg:hidden" role="list">
        <li v-for="row in subscriptionComparisonRows" :key="row.feature"
          class="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-soft">
          <p class="text-[13px] font-bold text-slate-900">{{ row.feature }}</p>
          <dl class="mt-2.5 space-y-1.5 text-[13px]">
            <div class="flex gap-2">
              <dt class="w-20 shrink-0 font-semibold text-slate-500">Gold</dt>
              <dd class="text-slate-600">{{ row.gold }}</dd>
            </div>
            <div class="flex gap-2">
              <dt class="w-20 shrink-0 font-semibold text-blue-600">Diamond</dt>
              <dd class="font-medium text-blue-700">{{ row.diamond }}</dd>
            </div>
            <div class="flex gap-2">
              <dt class="w-20 shrink-0 font-semibold text-slate-500">Platinum</dt>
              <dd class="text-slate-600">{{ row.platinum }}</dd>
            </div>
          </dl>
        </li>
      </ul>
      <div class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div v-for="(pos, i) in planPositioning" :key="pos.name"
          class="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-soft" v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 50 + i * 60, duration: 400 } }">
          <span
            class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100">
            <Icon :icon="pos.iconMdi" class="h-[18px] w-[18px]" aria-hidden="true" />
          </span>
          <div>
            <p class="font-display text-[13px] font-bold text-slate-900">{{ pos.name }}</p>
            <p class="mt-0.5 text-xs leading-relaxed text-slate-500">{{ pos.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
