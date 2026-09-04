<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { insightsClosing } from '~/data/insights'
</script>

<template>
  <section class="bg-white section-py" aria-labelledby="insights-closing-heading">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center" v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
        <span class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100"
          aria-hidden="true">
          <Icon icon="mdi:lightbulb-on-outline" class="h-6 w-6" />
        </span>
        <h2 id="insights-closing-heading"
          class="font-display mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {{ insightsClosing.title }}
        </h2>
        <p class="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          {{ insightsClosing.text }}
        </p>
        <a :href="insightsClosing.cta.href"
          class="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700">
          {{ insightsClosing.cta.label }}
          <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>
