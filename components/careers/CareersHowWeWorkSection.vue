<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { howWeWorkSection, howWeWorkSteps } from '~/data/careers'
</script>

<template>
  <section id="how-we-work" class="relative scroll-mt-20 overflow-hidden bg-white section-py" aria-labelledby="how-we-work-heading">
    <div class="container-page relative">
      <CardHeader
        heading-id="how-we-work-heading"
        :badge="howWeWorkSection.kicker"
        :title="howWeWorkSection.title"
        :description="howWeWorkSection.description"
        :classes="howWeWorkSection.classes"
      />

      <ol class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 sm:gap-4" role="list">
        <li
          v-for="(step, i) in howWeWorkSteps"
          :key="step.no"
          v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 25 + i * 50, duration: 380 } }"
        >
          <article
            class="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-6"
          >
            <span class="font-display text-3xl font-black tabular-nums leading-none text-blue-500/20">{{ step.no }}</span>
            <h3 class="mt-3 font-display text-lg font-bold text-slate-900">{{ step.title }}</h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ step.description }}</p>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>
