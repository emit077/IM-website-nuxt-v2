<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { staffingModels, staffingModelsSection } from '~/data/institutions'
</script>

<template>
  <section id="staffing-models" class="relative scroll-mt-24 overflow-hidden section-surface-muted section-py"
    aria-labelledby="staffing-heading">
    <div class="container-page relative">
      <CardHeader heading-id="staffing-heading" :badge="staffingModelsSection.badge"
        :title="staffingModelsSection.title" :description="staffingModelsSection.description"
        :classes="staffingModelsSection.classes" />

      <div class="mt-10 overflow-hidden rounded-[1.6rem] border border-slate-200 bg-slate-200 shadow-soft lg:mt-12">
        <div class="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
          <article v-for="(model, i) in staffingModels" :id="model.id" :key="model.id"
            class="staffing-cell group bg-white p-6 sm:p-7">
            <div class="flex items-start justify-between gap-4">
              <span class="font-display text-[13px] font-bold tracking-[0.14em] text-blue-600" aria-hidden="true">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <Icon :icon="model.iconMdi"
                class="h-5 w-5 text-slate-400 transition-colors duration-300 group-hover:text-blue-600"
                aria-hidden="true" />
            </div>
            <h3 class="font-display mt-5 text-lg font-bold leading-snug text-slate-900">
              {{ model.title }}
            </h3>
            <p class="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
              {{ model.fit }}
            </p>
            <p class="mt-3 line-clamp-2 min-h-[2.6em] text-sm leading-snug text-slate-600">{{ model.description }}</p>
          </article>
        </div>
      </div>

      <div
        class="mt-8 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
        <p class="max-w-xl text-sm leading-relaxed text-slate-600">
          {{ staffingModelsSection.panelNote }}
        </p>
        <a :href="staffingModelsSection.cta.href"
          class="group inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
          {{ staffingModelsSection.cta.label }}
          <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.staffing-cell {
  transition: background-color 0.3s ease;
}

.staffing-cell:hover {
  background-color: #f8fafc;
}

@media (prefers-reduced-motion: reduce) {
  .staffing-cell {
    transition: none;
  }
}
</style>
