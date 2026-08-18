<script setup lang="ts">
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { spClosing } from '~/data/student-parent'
</script>

<template>
  <section id="closing" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py-compact"
    aria-labelledby="closing-heading">
    <div class="container-page">
      <div
        class="relative overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 px-5 py-6 text-left shadow-[0_24px_60px_-24px_rgba(29,78,216,0.55)] sm:px-8 sm:py-7"
        v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <span aria-hidden="true"
          class="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-blue-400/25 blur-3xl" />
        <span aria-hidden="true"
          class="pointer-events-none absolute -bottom-24 -left-10 h-40 w-40 rounded-full bg-amber-300/15 blur-3xl" />

        <div class="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div class="max-w-2xl">
            <p class="font-display text-[11px] font-bold uppercase tracking-[0.28em] text-blue-100/80">
              {{ spClosing.badge }}
            </p>
            <h2 id="closing-heading"
              class="mt-2 font-display text-[1.35rem] font-extrabold leading-tight tracking-tight text-white sm:text-2xl">
              {{ spClosing.title }}
            </h2>
            <p class="mt-2 max-w-xl text-[13px] leading-relaxed text-blue-100 sm:text-sm">
              {{ spClosing.paragraphs[0] }}
            </p>
            <p class="mt-3 text-sm font-semibold text-white">
              {{ spClosing.brand }}
              <span class="font-medium text-blue-100/90"> · {{ spClosing.tagline }}</span>
            </p>
          </div>

          <div class="flex w-full shrink-0 flex-col items-start gap-3 lg:max-w-xs lg:w-80 lg:items-stretch">
            <p class="text-xs font-semibold text-amber-200">
              {{ spClosing.strip.join(' • ') }}
            </p>
            <ActionBtn class="!w-full" variant="theme-secondary" :label="spClosing.cta.label" :href="spClosing.cta.href"
              icon="mdi:rocket-launch-outline" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
