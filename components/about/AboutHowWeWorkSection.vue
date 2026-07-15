<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { aboutHowWeWork } from '~/data/about'
</script>

<template>
  <section id="how-we-work" class="relative overflow-hidden section-surface-muted section-py"
    aria-labelledby="how-we-work-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-200/25 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="how-we-work-heading" :badge="aboutHowWeWork.badge" :title="aboutHowWeWork.title"
        :description="aboutHowWeWork.description" :classes="aboutHowWeWork.classes" />

      <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <article v-for="(step, i) in aboutHowWeWork.steps" :key="step.title"
          class="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-card sm:p-8"
          v-motion :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480, delay: 60 + i * 80 } }">
          <span aria-hidden="true"
            class="absolute right-6 top-5 select-none font-display text-6xl font-extrabold leading-none tabular-nums text-transparent transition duration-300 [-webkit-text-stroke:1.5px_rgba(37,99,235,0.12)] group-hover:[-webkit-text-stroke-color:rgba(37,99,235,0.28)]">
            {{ String(i + 1).padStart(2, '0') }}
          </span>

          <span
            class="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-hover:scale-105 group-hover:from-blue-600 group-hover:to-indigo-700 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/30">
            <Icon :icon="step.icon" class="h-7 w-7" aria-hidden="true" />
          </span>

          <h3 class="font-display relative mt-6 text-lg font-bold leading-snug text-slate-900">
            {{ step.title }}
          </h3>
          <p class="relative mt-2.5 text-sm leading-relaxed text-slate-500">
            {{ step.description }}
          </p>

          <span aria-hidden="true"
            class="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 transition-transform duration-500 group-hover:scale-x-100" />
        </article>
      </div>
    </div>
  </section>
</template>
