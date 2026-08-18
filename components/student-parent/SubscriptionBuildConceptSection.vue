<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { subConcept } from '~/data/subscription'
</script>

<template>
  <section id="how-it-works" class="relative scroll-mt-36 overflow-hidden bg-white section-py lg:scroll-mt-44"
    aria-labelledby="sub-concept-heading">
    <div class="container-page relative">
      <CardHeader heading-id="sub-concept-heading" :badge="subConcept.badge" :title="subConcept.title"
        :description="subConcept.description" :classes="subConcept.classes" />

      <ol class="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3" role="list">
        <li v-for="(step, i) in subConcept.steps" :key="step.no" v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 70, duration: 420 } }">
          <article
            class="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-cream-50/50 p-6 shadow-soft">
            <div class="flex items-center justify-between gap-3">
              <span class="grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-600 ring-1 ring-blue-100"
                aria-hidden="true">
                <Icon :icon="step.iconMdi" class="h-5 w-5" />
              </span>
              <span class="font-display text-3xl font-black tabular-nums text-blue-500/15">{{ step.no }}</span>
            </div>
            <p class="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">Step {{ step.no }}</p>
            <h3 class="mt-1 font-display text-lg font-bold text-slate-900">{{ step.title }}</h3>
            <p class="mt-1 text-[13px] font-semibold text-slate-700">{{ step.summary }}</p>
            <p class="mt-3 text-[13.5px] leading-relaxed text-slate-600">{{ step.description }}</p>
          </article>
        </li>
      </ol>

      <div
        class="mt-8 overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-slate-900 px-5 py-6 text-white shadow-soft sm:px-8"
        v-motion :initial="{ opacity: 0, y: 12 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
        <p class="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-blue-200">
          Visual structure
        </p>
        <ol class="mt-5 space-y-4" role="list">
          <li v-for="(layer, i) in subConcept.layers" :key="layer.label" class="text-center">
            <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">{{ layer.label }}</p>
            <p class="mt-1.5 font-display text-base font-semibold tracking-tight sm:text-lg">
              {{ layer.options.join('  |  ') }}
            </p>
            <Icon v-if="i < subConcept.layers.length - 1" icon="mdi:arrow-down" class="mx-auto mt-3 h-5 w-5 text-blue-300"
              aria-hidden="true" />
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
