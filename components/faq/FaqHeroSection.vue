<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { faqHero } from '~/data/faq'
</script>

<template>
  <section class="relative overflow-hidden bg-white" aria-labelledby="faq-hero-heading">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-[420px] max-w-5xl bg-gradient-to-b from-blue-100/60 via-indigo-50/40 to-transparent blur-3xl"
    />

    <div class="container-page pb-12 pt-10 text-center sm:pb-14 lg:pt-16">
      <span
        class="badge-pill mx-auto w-fit"
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <span class="grid h-5 w-5 place-items-center rounded-full bg-blue-600 text-white">
          <Icon icon="mdi:help-circle-outline" class="h-3 w-3" aria-hidden="true" />
        </span>
        <span>{{ faqHero.badge }}</span>
      </span>

      <h1
        id="faq-hero-heading"
        class="heading-display mx-auto mt-6 max-w-3xl text-balance text-[2rem] leading-[1.1] sm:text-[2.75rem] lg:text-[3.25rem]"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 150, ease: [0.22, 1, 0.36, 1] } }"
      >
        {{ faqHero.title }}
        <span class="text-gradient-brand">{{ faqHero.titleHighlight }}</span>
      </h1>

      <p
        class="mx-auto mt-5 max-w-2xl text-pretty text-[15px] leading-relaxed text-slate-600 sm:text-lg"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 300 } }"
      >
        {{ faqHero.description }}
      </p>

      <p
        class="mx-auto mt-4 max-w-xl text-[13.5px] leading-relaxed text-slate-500 sm:text-[15px]"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 380 } }"
      >
        {{ faqHero.supporting }}
      </p>
    </div>
  </section>
</template>
