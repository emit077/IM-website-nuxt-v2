<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { spMonitoring, spParentDashboard, spStudentDashboard } from '~/data/student-parent'
</script>

<template>
  <section id="academic-monitoring" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="monitoring-heading">
    <div class="container-page relative">
      <CardHeader heading-id="monitoring-heading" :badge="spMonitoring.badge" :title="spMonitoring.title"
        :description="spMonitoring.description" :classes="spMonitoring.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li v-for="(item, i) in spMonitoring.items" :key="item.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 400 } }">
          <article
            class="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card">
            <span
              class="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-4 font-display text-base font-bold text-slate-900">{{ item.title }}</h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ item.description }}</p>
          </article>
        </li>
      </ul>

      <p
        class="mx-auto mt-8 max-w-2xl rounded-2xl border border-blue-100 bg-blue-50/80 px-5 py-4 text-center text-sm font-semibold text-blue-800 sm:text-base">
        {{ spMonitoring.promise }}
      </p>
    </div>
  </section>

  <section id="parent-dashboard" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="parent-dash-heading">
    <div class="container-page relative">
      <CardHeader heading-id="parent-dash-heading" :badge="spParentDashboard.badge" :title="spParentDashboard.title"
        :classes="spParentDashboard.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
        <li v-for="(mod, i) in spParentDashboard.modules" :key="mod.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 25 + i * 30, duration: 380 } }">
          <article
            class="flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-cream-50/50 p-5 shadow-soft">
            <span class="grid h-10 w-10 place-items-center rounded-xl bg-white text-blue-600 ring-1 ring-blue-100"
              aria-hidden="true">
              <Icon :icon="mod.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-4 font-display text-[15px] font-bold text-slate-900">{{ mod.title }}</h3>
            <p class="mt-2 text-[13px] leading-relaxed text-slate-600">{{ mod.description }}</p>
          </article>
        </li>
      </ul>

      <div
        class="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 rounded-[1.5rem] border border-slate-200/80 bg-white px-4 py-4 shadow-soft">
        <template v-for="(label, i) in spParentDashboard.flow" :key="label">
          <span class="text-[13px] font-semibold text-slate-800 sm:text-sm">{{ label }}</span>
          <Icon v-if="i < spParentDashboard.flow.length - 1" icon="mdi:arrow-right" class="h-4 w-4 text-blue-500"
            aria-hidden="true" />
        </template>
      </div>
    </div>
  </section>

  <section id="student-dashboard" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="student-dash-heading">
    <div class="container-page relative">
      <CardHeader heading-id="student-dash-heading" :badge="spStudentDashboard.badge"
        :title="spStudentDashboard.title" :description="spStudentDashboard.description"
        :classes="spStudentDashboard.classes" />

      <ul class="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4" role="list">
        <li v-for="(tool, i) in spStudentDashboard.tools" :key="tool.title" v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 25 + i * 30, duration: 360 } }">
          <article
            class="flex h-full flex-col items-start rounded-[1.35rem] border border-slate-200/80 bg-white p-4 shadow-soft sm:p-5">
            <span class="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
              aria-hidden="true">
              <Icon :icon="tool.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-3 font-display text-[13.5px] font-bold leading-snug text-slate-900 sm:text-[15px]">
              {{ tool.title }}
            </h3>
          </article>
        </li>
      </ul>

      <p
        class="mx-auto mt-8 max-w-2xl rounded-2xl border border-slate-200/80 bg-white px-5 py-4 text-center text-sm font-semibold text-slate-700 sm:text-base">
        {{ spStudentDashboard.goal }}
      </p>
    </div>
  </section>
</template>
