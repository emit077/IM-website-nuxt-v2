<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { bulkHiringSection } from '~/data/institutions'
</script>

<template>
  <section id="bulk-hiring" class="relative scroll-mt-24 overflow-hidden bg-white section-py"
    aria-labelledby="bulk-hiring-heading">
    <div class="container-page relative">
      <CardHeader heading-id="bulk-hiring-heading" :badge="bulkHiringSection.badge" :title="bulkHiringSection.title"
        :description="bulkHiringSection.description" :classes="bulkHiringSection.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4" role="list">
        <li
          v-for="(item, i) in bulkHiringSection.cases"
          :key="item"
          class="flex items-start gap-2.5 rounded-2xl border border-slate-200/80 bg-white px-4 py-3.5 text-sm font-medium text-slate-700 shadow-soft"
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + i * 40, duration: 360 } }"
        >
          <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
          {{ item }}
        </li>
      </ul>

      <div class="mt-8 rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-6 text-white sm:p-8"
        v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
        <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-amber-200">{{ bulkHiringSection.workflowLabel }}</p>
        <div class="mt-4 flex flex-wrap items-center gap-2">
          <template v-for="(step, i) in bulkHiringSection.workflow" :key="step">
            <span class="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[12px] font-semibold">
              {{ step }}
            </span>
            <Icon
              v-if="i < bulkHiringSection.workflow.length - 1"
              icon="mdi:arrow-right"
              class="hidden h-4 w-4 text-blue-200 sm:block"
              aria-hidden="true"
            />
          </template>
        </div>
        <a
          :href="bulkHiringSection.cta.href"
          class="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5"
        >
          {{ bulkHiringSection.cta.label }}
          <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>
