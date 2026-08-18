<script setup lang="ts">
import { subClosing } from '~/data/subscription'
</script>

<template>
  <section id="trust-footer" class="relative overflow-hidden bg-white section-py" aria-labelledby="sub-closing-heading">
    <div class="container-page">
      <div
        class="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 px-6 py-12 text-center shadow-[0_24px_60px_-24px_rgba(15,23,42,0.55)] sm:px-12 sm:py-16"
        v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <span aria-hidden="true"
          class="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
        <span aria-hidden="true"
          class="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl" />

        <div class="relative mx-auto max-w-3xl">
          <p class="font-display text-[12px] font-bold uppercase tracking-[0.28em] text-blue-200/80">
            {{ subClosing.badge }}
          </p>
          <h2 id="sub-closing-heading"
            class="mt-4 font-display text-[1.7rem] font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            {{ subClosing.title }}
          </h2>
          <p class="mt-4 text-sm font-medium text-blue-100/90 sm:text-base">{{ subClosing.tagline }}</p>
          <p class="mx-auto mt-5 max-w-2xl text-[13px] leading-relaxed text-blue-100/80 sm:text-sm">
            {{ subClosing.services }}
          </p>
          <p class="mt-5 text-[13px] font-semibold text-white/90">
            {{ subClosing.pillars.join(' | ') }}
          </p>
          <p class="mt-6 text-sm font-semibold text-amber-200">{{ subClosing.strip }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
