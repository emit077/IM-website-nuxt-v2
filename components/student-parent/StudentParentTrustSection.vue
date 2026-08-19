<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { spCycle } from '~/data/student-parent'
</script>

<template>
  <section id="success-cycle" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="cycle-heading">
    <div class="container-page relative">
      <CardHeader heading-id="cycle-heading" :badge="spCycle.badge" :title="spCycle.title" :classes="spCycle.classes" />

      <ol class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
        <li v-for="(step, i) in spCycle.steps" :key="step.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 25 + i * 35, duration: 380 } }">
          <article
            class="relative flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft">
            <span class="font-display text-2xl font-black tabular-nums text-blue-500/20">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <h3 class="mt-2 font-display text-base font-bold uppercase tracking-wide text-slate-900">{{ step.title }}
            </h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ step.description }} </p>
          </article>
        </li>
      </ol>

      <p class="mx-auto mt-8 max-w-2xl text-center font-display text-lg font-bold text-slate-800 sm:text-xl">
        {{ spCycle.tagline }}
      </p>
    </div>
  </section>
</template>
