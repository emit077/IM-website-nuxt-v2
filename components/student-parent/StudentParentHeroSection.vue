<script setup lang="ts">
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import IconCalendar from '~/components/icons/IconCalendar.vue'
import TrustIndicators from '~/components/home/TrustIndicators.vue'
import { heroContent } from '~/data/student-parent'

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section class="relative overflow-hidden bg-white" aria-labelledby="sp-hero-heading">
    <div aria-hidden="true" class="absolute inset-0 -z-10 bg-mesh-light" />
    <div aria-hidden="true" class="absolute inset-0 -z-10 opacity-[0.04]"
      style="background-image: radial-gradient(#1E293B 0.8px, transparent 0.8px); background-size: 24px 24px;" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -top-20 -left-14 -z-10 h-72 w-72 rounded-full bg-indigo-300/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute top-28 -right-20 -z-10 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />

    <div class="container-page pb-12 pt-10 text-center lg:pt-16">
      <span class="badge-pill mx-auto mb-5 w-fit">
        <span class="grid h-5 w-5 place-items-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
          🎓
        </span>
        <span>{{ heroContent.badge }}</span>
      </span>

      <h1 id="sp-hero-heading"
        class="heading-display text-balance py-4 text-[2rem] leading-[1.08] sm:text-5xl lg:text-[3.25rem]"
        v-motion :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 200, ease: [0.22, 1, 0.36, 1] } }">
        Personalised Learning.
        <span class="text-gradient-brand">Measurable Progress. Trusted Support.</span>
      </h1>

      <p class="mx-auto max-w-3xl text-pretty py-4 text-slate-600 sm:text-lg" v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 350 } }">
        {{ heroContent.description }}
      </p>

      <div class="my-6 flex flex-col items-center justify-center gap-3 sm:flex-row" v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }">
        <a href="#book-demo" class="btn-primary ripple group w-full sm:w-auto" @mousemove="rippleHandler">
          <IconCalendar class="h-4 w-4 shrink-0 opacity-95" />
          Book Free Demo
          <IconArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <a href="#enrollment-plans" class="btn-secondary w-full sm:w-auto">
          View Enrollment Plans
        </a>
      </div>

      <TrustIndicators class="mt-5" variant="hero-blue" />

      <div aria-hidden="true"
        class="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-cream-50" />
    </div>
  </section>
</template>
