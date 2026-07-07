<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import IconCalendar from '~/components/icons/IconCalendar.vue'
import TrustIndicators from '~/components/shared/TrustIndicators.vue'
import { trustStats } from '~/data/trust'

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section class="relative overflow-hidden bg-white" aria-labelledby="sp-hero-heading">
    <!-- Single soft backdrop glow, kept minimal -->
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-[420px] max-w-5xl bg-gradient-to-b from-blue-100/60 via-indigo-50/40 to-transparent blur-3xl" />

    <div class="container-page pb-14 pt-10 text-center sm:pb-16 lg:pt-16">
      <span class="badge-pill mx-auto w-fit" v-motion :initial="{ opacity: 0, y: 12 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }">
        <span class="grid h-5 w-5 place-items-center rounded-full bg-blue-600 text-white">
          <Icon icon="mdi:account-school-outline" class="h-3 w-3" aria-hidden="true" />
        </span>
        <span>For Students &amp; Parents</span>
      </span>

      <h1 id="sp-hero-heading"
        class="heading-display mx-auto mt-6 max-w-3xl text-balance text-[2rem] leading-[1.1] sm:text-[2.75rem] lg:text-[3.25rem]"
        v-motion :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 150, ease: [0.22, 1, 0.36, 1] } }">
        Personalised learning with
        <span class="text-gradient-brand">measurable progress</span>
      </h1>

      <p class="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-slate-600 sm:text-lg" v-motion
        :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 300 } }">
        One-to-one teaching, structured academic planning, and transparent tracking —
        a complete, dependable learning experience for every family.
      </p>

      <div class="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row" v-motion
        :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 450 } }">
        <a href="#book-demo" class="btn-primary ripple group w-full sm:w-auto" @mousemove="rippleHandler">
          <IconCalendar class="h-4 w-4 shrink-0 opacity-95" />
          Book Free Demo
          <IconArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <a href="#enrollment-plans" class="btn-secondary w-full sm:w-auto">View Plans</a>
      </div>

      <TrustIndicators class="mt-10" :items="trustStats" />
    </div>
  </section>
</template>
