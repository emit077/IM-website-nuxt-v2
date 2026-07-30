<script setup lang="ts">
import { whyChooseBrandMessage } from '~/data/why-choose'
</script>

<template>
  <section class="relative overflow-hidden bg-white section-py-compact" aria-labelledby="brand-message-heading">
    <div class="container-page text-center" v-motion :initial="{ opacity: 0, y: 14 }"
      :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
      <p id="brand-message-heading"
        class="font-display text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
        {{ whyChooseBrandMessage.brand }}
      </p>
      <h2 class="mx-auto mt-3 max-w-2xl font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
        {{ whyChooseBrandMessage.tagline }}
      </h2>
      <p class="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
        {{ whyChooseBrandMessage.description }}
      </p>
      <p class="mx-auto mt-4 max-w-xl text-sm font-medium italic leading-relaxed text-slate-500 sm:text-base">
        {{ whyChooseBrandMessage.closing }}
      </p>
    </div>
  </section>
</template>
