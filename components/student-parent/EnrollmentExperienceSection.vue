<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { enrollmentDashboard, enrollmentMatching } from '~/data/student-parent'
</script>

<template>
  <section id="academic-dashboard" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="dashboard-heading">
    <div class="container-page relative">
      <CardHeader heading-id="dashboard-heading" :badge="enrollmentDashboard.badge" :title="enrollmentDashboard.title"
        :description="enrollmentDashboard.description" :classes="enrollmentDashboard.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li v-for="(mod, i) in enrollmentDashboard.modules" :key="mod.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 25 + i * 30, duration: 380 } }">
          <article
            class="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card">
            <span
              class="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="mod.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-4 font-display text-base font-bold text-slate-900">{{ mod.title }}</h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ mod.description }}</p>
          </article>
        </li>
      </ul>

      <div
        class="mt-8 overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white px-4 py-5 shadow-soft sm:px-6"
        v-motion :initial="{ opacity: 0, y: 12 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 420 } }">
        <p class="text-center text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
          {{ enrollmentDashboard.previewLabel }}
        </p>
        <div class="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
          <template v-for="(label, i) in enrollmentDashboard.preview" :key="label">
            <span
              class="rounded-full bg-cream-50 px-3 py-1.5 text-[13px] font-semibold text-slate-800 ring-1 ring-slate-200/80">
              {{ label }}
            </span>
            <Icon v-if="i < enrollmentDashboard.preview.length - 1" icon="mdi:arrow-right"
              class="h-4 w-4 text-blue-500" aria-hidden="true" />
          </template>
        </div>
      </div>
    </div>
  </section>

  <section id="smart-matching" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="matching-heading">
    <div class="container-page relative">
      <CardHeader heading-id="matching-heading" :badge="enrollmentMatching.badge" :title="enrollmentMatching.title"
        :description="enrollmentMatching.description" :classes="enrollmentMatching.classes" />

      <p class="mt-10 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
        {{ enrollmentMatching.factorsLabel }}
      </p>
      <ul class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
        <li v-for="(item, i) in enrollmentMatching.factors" :key="item.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 35, duration: 400 } }">
          <article
            class="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-cream-50/50 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-card sm:p-6">
            <span
              class="grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-4 font-display text-base font-bold text-slate-900">{{ item.title }}</h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ item.description }}</p>
          </article>
        </li>
      </ul>

      <div
        class="mt-8 overflow-hidden rounded-[1.5rem] bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 px-5 py-5 text-center shadow-[0_20px_50px_-24px_rgba(29,78,216,0.5)] sm:px-8 sm:py-6"
        v-motion :initial="{ opacity: 0, y: 12 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
        <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-100/80">
          {{ enrollmentMatching.flowLabel }}
        </p>
        <div class="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
          <template v-for="(part, i) in enrollmentMatching.flow" :key="part">
            <span class="text-sm font-semibold text-white">{{ part }}</span>
            <span v-if="i < enrollmentMatching.flow.length - 1" class="text-amber-300" aria-hidden="true">→</span>
          </template>
        </div>
      </div>

      <div class="mt-10 flex justify-center">
        <ActionBtn variant="theme-secondary" :label="enrollmentMatching.cta.label" :href="enrollmentMatching.cta.href"
          icon="mdi:account-search-outline" />
      </div>
    </div>
  </section>
</template>
