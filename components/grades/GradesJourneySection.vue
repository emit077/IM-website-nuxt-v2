<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { curriculumStages } from '~/components/academic/gradesData'
</script>

<template>
  <section class="relative overflow-hidden bg-white py-8 sm:py-10" aria-label="Academic journey overview">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-200 to-transparent"
    />

    <div class="container-page">
      <div class="text-center">
        <p class="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Your learning journey</p>
        <p class="mt-1.5 text-sm text-slate-600 sm:text-[15px]">
          From first steps in nursery to university excellence
        </p>
      </div>

      <!-- Mobile: horizontal scroll -->
      <div class="grades-journey-scroll mt-6 -mx-5 flex gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0 lg:hidden">
        <a
          v-for="(stage, i) in curriculumStages"
          :key="stage.id"
          :href="`#${stage.id}`"
          class="group flex min-w-[7.5rem] shrink-0 snap-start flex-col items-center"
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 400 } }"
        >
          <span
            :class="[
              'relative z-10 grid h-12 w-12 place-items-center rounded-2xl text-xl shadow-md ring-4 ring-white transition duration-300 group-hover:scale-105',
              `bg-gradient-to-br ${stage.gradient}`,
            ]"
            aria-hidden="true"
          >
            {{ stage.emoji }}
          </span>
          <span class="mt-2.5 text-center text-[11px] font-bold leading-tight text-slate-800">{{ stage.title }}</span>
          <span class="mt-0.5 text-center text-[10px] text-slate-500">{{ stage.subtitle }}</span>
        </a>
      </div>

      <!-- Desktop: full timeline -->
      <ol class="mt-8 hidden items-start justify-between gap-2 lg:flex" role="list">
        <li
          v-for="(stage, i) in curriculumStages"
          :key="stage.id"
          class="relative flex flex-1 flex-col items-center"
          v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 50, duration: 450 } }"
        >
          <a :href="`#${stage.id}`" class="group flex flex-col items-center text-center">
            <span
              :class="[
                'relative z-10 grid h-14 w-14 place-items-center rounded-2xl text-2xl shadow-[0_10px_28px_-10px_rgba(15,23,42,0.35)] ring-4 ring-white transition duration-300 group-hover:-translate-y-1',
                `bg-gradient-to-br ${stage.gradient}`,
              ]"
              aria-hidden="true"
            >
              {{ stage.emoji }}
            </span>
            <span class="mt-3 text-xs font-bold text-slate-800 group-hover:text-blue-700">{{ stage.title }}</span>
            <span class="mt-0.5 max-w-[6.5rem] text-[10px] leading-tight text-slate-500">{{ stage.subtitle }}</span>
          </a>
          <Icon
            v-if="i < curriculumStages.length - 1"
            icon="mdi:chevron-right"
            class="absolute -right-3 top-5 h-4 w-4 text-slate-300"
            aria-hidden="true"
          />
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.grades-journey-scroll {
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.grades-journey-scroll::-webkit-scrollbar {
  display: none;
}
</style>
