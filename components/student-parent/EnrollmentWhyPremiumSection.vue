<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { enrollmentWhyPremium } from '~/data/student-parent'
</script>

<template>
  <section id="why-premium" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="why-premium-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-16 bottom-6 h-72 w-72 rounded-full bg-indigo-200/25 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="why-premium-heading" :badge="enrollmentWhyPremium.badge"
        :title="enrollmentWhyPremium.title" :description="enrollmentWhyPremium.description"
        :classes="enrollmentWhyPremium.classes" />

      <ol class="mt-10 flex flex-wrap justify-center gap-3.5 lg:gap-4" role="list">
        <li v-for="(step, i) in enrollmentWhyPremium.items" :key="step.label"
          class="w-full sm:w-[calc((100%-0.875rem)/2)] lg:w-[calc((100%-2rem)/3)]" v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 45, duration: 420 } }">
          <article
            class="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card">
            <span
              class="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-hover:from-blue-600 group-hover:to-indigo-700 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="step.iconMdi" class="h-5 w-5" />
            </span>
            <p class="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">{{ step.label }}</p>
            <h3 class="mt-1 font-display text-base font-bold text-slate-900">{{ step.title }}</h3>
            <p class="mt-2 text-[13px] leading-relaxed text-slate-500">{{ step.description }}</p>
            <span
              class="pointer-events-none absolute bottom-3 right-4 font-display text-3xl font-bold tabular-nums text-blue-500/15"
              aria-hidden="true">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>
