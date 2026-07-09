<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { purposeSection } from '~/data/careers'
</script>

<template>
  <section
    id="purpose"
    class="relative scroll-mt-20 section-surface-muted section-py"
    aria-labelledby="purpose-heading"
  >
    <div class="container-page">
      <div
        class="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-soft"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }"
      >
        <div class="grid grid-cols-1 lg:grid-cols-5">
          <div
            class="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-7 text-white sm:p-8 lg:col-span-2"
          >
            <span
              class="grid h-11 w-11 place-items-center rounded-xl bg-white/15 ring-1 ring-white/25"
              aria-hidden="true"
            >
              <Icon icon="mdi:sprout-outline" class="h-5 w-5" />
            </span>
            <p class="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-blue-100">
              {{ purposeSection.kicker }}
            </p>
            <h2
              id="purpose-heading"
              class="font-display mt-3 text-xl font-bold leading-snug sm:text-2xl"
            >
              {{ purposeSection.title }}
            </h2>
          </div>

          <div class="flex flex-col justify-center p-7 sm:p-8 lg:col-span-3">
            <p
              v-for="(paragraph, i) in purposeSection.paragraphs"
              :key="i"
              :class="[
                'text-sm leading-relaxed text-slate-600 sm:text-base',
                i > 0 ? 'mt-4' : '',
              ]"
            >
              {{ paragraph }}
            </p>
            <p
              class="mt-6 border-t border-slate-100 pt-5 text-[13px] font-semibold leading-relaxed text-blue-700 sm:text-sm"
            >
              {{ purposeSection.tagline }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
