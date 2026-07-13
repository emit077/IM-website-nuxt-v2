<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeader.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import {
  dashboardModules,
  erpDashboardSection,
  parentVisibilityPoints,
  secureEcosystemPoints,
} from '~/data/student-parent'

const frameworkSteps = ['Plan', 'Track', 'Review', 'Improve']
</script>

<template>
  <section id="erp-dashboard" class="relative section-surface-muted section-py" aria-labelledby="erp-heading">
    <div class="container-page">
      <CardHeader heading-id="erp-heading" :badge="erpDashboardSection.badge" :title="erpDashboardSection.title"
        :description="erpDashboardSection.description" :classes="erpDashboardSection.classes" />
      <div class="mx-auto mt-8 flex flex-wrap items-center justify-center gap-2" v-motion
        :initial="{ opacity: 0, y: 10 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
        <template v-for="(step, i) in frameworkSteps" :key="step">
          <span
            class="rounded-full border border-slate-200/80 bg-white px-4 py-1.5 text-[13px] font-semibold text-slate-700">
            {{ step }}
          </span>
          <Icon v-if="i < frameworkSteps.length - 1" icon="mdi:arrow-right" class="h-3.5 w-3.5 text-slate-400"
            aria-hidden="true" />
        </template>
      </div>
      <ul class="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3" role="list">
        <li v-for="(mod, i) in dashboardModules" :key="mod.id" v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + (i % 6) * 40, duration: 400 } }">
          <article
            class="group flex h-full items-start gap-3.5 rounded-2xl border border-slate-200/70 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-soft sm:p-5">
            <span
              class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="mod.iconMdi" class="h-5 w-5" />
            </span>
            <div>
              <h3 class="font-display text-[15px] font-bold text-slate-900">{{ mod.title }}</h3>
              <p class="mt-1 text-[13px] leading-relaxed text-slate-500">{{ mod.description }}</p>
            </div>
          </article>
        </li>
      </ul>
      <div class="mt-10 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2">
        <div class="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft sm:p-7" v-motion
          :initial="{ opacity: 0, y: 12 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
          <div class="flex items-center gap-3">
            <span
              class="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
              <Icon icon="mdi:shield-lock-outline" class="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 class="font-display text-base font-bold text-slate-900 sm:text-lg">Secure learning ecosystem</h3>
          </div>
          <ul class="mt-4 space-y-2.5" role="list">
            <li v-for="point in secureEcosystemPoints" :key="point"
              class="flex items-start gap-2.5 text-[13px] text-slate-700">
              <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              {{ point }}
            </li>
          </ul>
        </div>

        <div class="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft sm:p-7" v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450, delay: 80 } }">
          <div class="flex items-center gap-3">
            <span class="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
              <Icon icon="mdi:eye-check-outline" class="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 class="font-display text-base font-bold text-slate-900 sm:text-lg">Parents always know</h3>
          </div>
          <ul class="mt-4 space-y-2.5" role="list">
            <li v-for="point in parentVisibilityPoints" :key="point"
              class="flex items-start gap-2.5 text-[13px] text-slate-700">
              <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
