<script setup lang="ts">
import { servicesConversionStrip } from '~/data/services'
</script>

<template>
  <section id="book-demo" class="relative overflow-hidden section-py"
    aria-labelledby="conversion-strip-heading">
    <div class="container-page">
      <div
        class="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-6 py-10 text-center shadow-[0_24px_60px_-24px_rgba(37,99,235,0.55)] sm:px-10 sm:py-12"
        v-motion :initial="{ opacity: 0, y: 18 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <div aria-hidden="true"
          class="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div aria-hidden="true"
          class="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" />

        <h2 id="conversion-strip-heading"
          class="relative font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          {{ servicesConversionStrip.title }}
        </h2>
        <p class="relative mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base">
          {{ servicesConversionStrip.description }}
        </p>

        <div class="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a v-for="cta in servicesConversionStrip.ctas" :key="cta.label" :href="cta.href" :class="[
            'inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5',
            cta.primary
              ? 'bg-white text-blue-700 shadow-lg hover:bg-blue-50'
              : 'border border-white/35 bg-white/10 text-white hover:bg-white/20',
          ]">
            {{ cta.label }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
