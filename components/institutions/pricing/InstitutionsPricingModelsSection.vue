<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import {
  institutionsFeeModels,
  institutionsFeeModelsSection,
} from '~/data/institutions-pricing'

const accentClasses: Record<string, { chip: string; kicker: string; bar: string }> = {
  blue: {
    chip: 'bg-blue-50 text-blue-600 ring-blue-100',
    kicker: 'text-blue-700',
    bar: 'from-blue-500 to-indigo-500',
  },
  emerald: {
    chip: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
    kicker: 'text-emerald-700',
    bar: 'from-emerald-500 to-teal-500',
  },
}
</script>

<template>
  <section id="fee-models" class="relative scroll-mt-24 overflow-hidden bg-white section-py"
    aria-labelledby="fee-models-heading">
    <div class="container-page relative">
      <CardHeader heading-id="fee-models-heading" :badge="institutionsFeeModelsSection.badge"
        :title="institutionsFeeModelsSection.title" :description="institutionsFeeModelsSection.description"
        :classes="institutionsFeeModelsSection.classes" />

      <div class="mt-10 grid grid-cols-1 gap-5 lg:mt-12 lg:grid-cols-2">
        <article v-for="(model, i) in institutionsFeeModels" :id="model.id" :key="model.id"
          class="scroll-mt-28 flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-soft"
          v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 90, duration: 480 } }">
          <div class="border-b border-slate-100 px-6 py-6 sm:px-7 sm:py-7">
            <div class="flex items-start gap-4">
              <span :class="['grid h-12 w-12 shrink-0 place-items-center rounded-2xl ring-1', accentClasses[model.accent].chip]"
                aria-hidden="true">
                <Icon :icon="model.iconMdi" class="h-6 w-6" />
              </span>
              <div class="min-w-0">
                <p :class="['text-[11px] font-bold uppercase tracking-[0.14em]', accentClasses[model.accent].kicker]">
                  {{ model.kicker }}
                </p>
                <h3 class="font-display mt-1 text-xl font-bold text-slate-900 sm:text-2xl">{{ model.title }}</h3>
                <p class="mt-1 text-[13px] font-medium text-slate-500">{{ model.subtitle }}</p>
              </div>
            </div>
            <p class="mt-4 font-display text-lg font-bold text-slate-900">{{ model.fee }}</p>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ model.description }}</p>
          </div>

          <div class="flex flex-1 flex-col px-6 py-6 sm:px-7 sm:py-7">
            <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">{{ model.example.label }}</p>
            <dl class="mt-3 space-y-2 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
              <div v-for="row in model.example.rows" :key="row.label" class="flex items-start justify-between gap-4">
                <dt class="text-[13px] text-slate-500">{{ row.label }}</dt>
                <dd class="text-right text-[13.5px] font-semibold text-slate-900">{{ row.value }}</dd>
              </div>
            </dl>

            <p class="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">Works particularly well for</p>
            <ul class="mt-2.5 flex flex-wrap gap-1.5" role="list">
              <li v-for="role in model.roles" :key="role"
                class="rounded-full bg-white px-2.5 py-1 text-[11.5px] font-semibold text-slate-700 ring-1 ring-slate-200">
                {{ role }}
              </li>
            </ul>

            <div aria-hidden="true" :class="['mt-6 h-1 w-12 rounded-full bg-gradient-to-r', accentClasses[model.accent].bar]" />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
