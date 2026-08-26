<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { tutorHowItWorks } from '~/data/tutors'
</script>

<template>
  <section id="how-it-works" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="how-it-works-heading">
    <div class="container-page relative">
      <CardHeader heading-id="how-it-works-heading" :badge="tutorHowItWorks.badge" :title="tutorHowItWorks.title"
        :description="tutorHowItWorks.description" :classes="tutorHowItWorks.classes" />

      <ol class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
        <li v-for="(step, i) in tutorHowItWorks.steps" :key="step.no" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 25 + i * 35, duration: 380 } }">
          <article
            class="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-6">
            <span class="font-display text-3xl font-black tabular-nums leading-none text-blue-500/20">{{ step.no
              }}</span>
            <h3 class="mt-3 font-display text-lg font-bold text-slate-900">{{ step.title }}</h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ step.description }}</p>
          </article>
        </li>
      </ol>

      <p class="mx-auto mt-8 max-w-3xl text-center font-display text-base font-bold text-slate-800 sm:text-lg">
        {{ tutorHowItWorks.journey }}
      </p>
    </div>
  </section>
</template>
