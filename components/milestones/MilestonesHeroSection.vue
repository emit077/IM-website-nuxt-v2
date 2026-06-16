<script setup lang="ts">
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import { aboutTimeline } from '~/data/about'

const milestoneCount = aboutTimeline.filter((t) => t.status === 'Active').length
</script>

<template>
  <section
    class="relative overflow-hidden bg-white"
    aria-labelledby="milestones-hero-heading"
  >
    <div aria-hidden="true" class="absolute inset-0 -z-10 bg-mesh-light" />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -top-20 -left-14 -z-10 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute top-28 -right-20 -z-10 h-80 w-80 rounded-full bg-sky-300/15 blur-3xl"
    />

    <div class="container-page pb-10 pt-10 lg:pb-14 lg:pt-16">
      <NuxtLink
        to="/about#journey"
        class="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-blue-600"
      >
        <IconArrowRight class="h-3.5 w-3.5 rotate-180" />
        Back to About
      </NuxtLink>

      <div class="mx-auto mt-8 max-w-2xl text-center lg:mt-10">
        <span class="badge-pill mb-5">
          <span class="grid h-5 w-5 place-items-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
            {{ milestoneCount }}
          </span>
          <span>Milestones</span>
        </span>

        <h1
          id="milestones-hero-heading"
          class="heading-display text-balance text-[2.35rem] leading-[1.06] sm:text-5xl lg:text-[3.25rem]"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
        >
          The Indian Mentors
          <span class="text-gradient-brand">growth story</span>
        </h1>

        <p
          class="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg"
          v-motion
          :initial="{ opacity: 0, y: 12 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
        >
          Four chapters and {{ milestoneCount }} milestones — from a founding vision to a nationwide network of verified mentors.
        </p>

        <a
          href="#timeline"
          class="btn-secondary group mt-8 inline-flex"
          v-motion
          :initial="{ opacity: 0, y: 12 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
        >
          View timeline
          <IconArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>

      <div
        aria-hidden="true"
        class="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-cream-50"
      />
    </div>
  </section>
</template>
