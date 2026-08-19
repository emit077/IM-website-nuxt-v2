<script setup lang="ts">
import { enrollmentClosing } from '~/data/student-parent'
</script>

<template>
  <section id="enrollment-closing" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="enrollment-closing-heading">
    <div class="container-page">
      <div
        class="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 px-6 py-12 text-center shadow-[0_24px_60px_-24px_rgba(29,78,216,0.55)] sm:px-12 sm:py-16"
        v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <span aria-hidden="true"
          class="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-blue-400/25 blur-3xl" />
        <span aria-hidden="true"
          class="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-amber-300/15 blur-3xl" />

        <div class="relative mx-auto max-w-3xl">
          <p class="font-display text-[12px] font-bold uppercase tracking-[0.28em] text-blue-100/80">
            {{ enrollmentClosing.badge }}
          </p>
          <h2 id="enrollment-closing-heading"
            class="mt-4 font-display text-[1.85rem] font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            {{ enrollmentClosing.title }}
          </h2>
          <p class="mt-5 text-sm font-semibold leading-relaxed text-amber-200 sm:text-[15px]">
            {{ enrollmentClosing.services.join(' • ') }}
          </p>

          <nav class="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2" aria-label="Enrollment next steps">
            <template v-for="(link, i) in enrollmentClosing.links" :key="link.label">
              <a :href="link.href"
                class="text-sm font-semibold text-white underline-offset-4 transition hover:underline">
                {{ link.label }}
              </a>
              <span v-if="i < enrollmentClosing.links.length - 1" class="text-blue-200/60" aria-hidden="true">|</span>
            </template>
          </nav>

          <p class="mt-8 font-display text-lg font-bold text-white">{{ enrollmentClosing.tagline }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
