<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { curriculumStages } from '~/components/academic/gradesData'
</script>

<template>
  <section
    id="grades-nav"
    class="relative scroll-mt-20 border-y border-slate-200/70 bg-cream-50 py-8 sm:py-10"
    aria-label="Grades navigation"
  >
    <div class="container-page">
      <p class="text-center text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
        Jump to a stage
      </p>

      <ul class="mt-5 grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4" role="list">
        <li
          v-for="(stage, i) in curriculumStages"
          :key="stage.id"
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 35, duration: 400 } }"
        >
          <a
            :href="`#${stage.id}`"
            class="group flex h-full items-center gap-3 rounded-xl border border-slate-200/80 bg-white px-3.5 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-soft"
          >
            <span
              class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-lg ring-1 ring-blue-100 transition group-hover:bg-blue-600"
              aria-hidden="true"
            >
              {{ stage.emoji }}
            </span>
            <span class="min-w-0">
              <span class="block text-[13px] font-semibold leading-snug text-slate-800 group-hover:text-blue-700 sm:text-sm">
                {{ stage.title }}
              </span>
              <span class="mt-0.5 block truncate text-[11px] text-slate-500">{{ stage.subtitle }}</span>
            </span>
            <Icon
              icon="mdi:chevron-down"
              class="ml-auto h-4 w-4 shrink-0 text-slate-300 transition group-hover:text-blue-500"
              aria-hidden="true"
            />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
