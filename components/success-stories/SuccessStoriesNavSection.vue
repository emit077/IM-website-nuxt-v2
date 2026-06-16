<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { storyTabs } from '~/data/success-stories'

const navLinks = storyTabs
  .filter((t) => t.id !== 'students')
  .map((t) => ({
    id: t.id,
    label: t.label,
    href:
      t.id === 'placements'
        ? '#placement-stories'
        : t.id === 'institutions'
          ? '#institutional-feedback'
          : `#${t.id}-reviews`,
    iconMdi: t.iconMdi,
  }))
</script>

<template>
  <section class="sticky top-16 z-40 border-y border-slate-200/80 bg-white/90 py-3 backdrop-blur-md sm:top-[4.5rem]" aria-label="Section navigation">
    <div class="container-page">
      <ul
        class="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="list"
      >
        <li class="snap-start shrink-0">
          <a
            href="#student-stories"
            class="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-cream-50 px-3.5 py-2 text-[12.5px] font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 sm:px-4 sm:text-[13px]"
          >
            <span class="grid h-7 w-7 place-items-center rounded-full bg-white text-blue-600 ring-1 ring-blue-100">
              <Icon icon="mdi:school-outline" class="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            Students
          </a>
        </li>
        <li v-for="link in navLinks" :key="link.id" class="snap-start shrink-0">
          <a
            :href="link.href"
            class="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-cream-50 px-3.5 py-2 text-[12.5px] font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 sm:px-4 sm:text-[13px]"
          >
            <span class="grid h-7 w-7 place-items-center rounded-full bg-white text-blue-600 ring-1 ring-blue-100">
              <Icon :icon="link.iconMdi" class="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
