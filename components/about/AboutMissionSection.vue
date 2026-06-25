<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import { aboutMission, aboutMissionQuote } from '~/data/about'
</script>

<template>
  <section id="mission" class="relative overflow-hidden bg-[#f8fafc] py-14 sm:py-16 lg:py-20"
    aria-labelledby="mission-section-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 -top-10 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-indigo-100/30 blur-3xl" />

    <div class="container-page relative">
      <CardHeader variant="section" heading-id="mission-section-heading" content-class="!px-0 !py-0 max-w-3xl mx-auto"
        :badge="aboutMission.badge" title='Mission <span class="text-gradient-brand">First</span>, Always'
        :description="aboutMission.summary" v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }" />

      <!-- Quote -->
      <p class="font-display text-md font-semibold italic leading-relaxed text-slate-700 pt-5 text-center sm:text-md">
        {{ aboutMissionQuote }}
      </p>

      <ul class="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5" role="list">
        <li v-for="(pillar, i) in aboutMission.pillars" :key="pillar.title"
          class="group flex flex-col rounded-2xl border border-slate-200/80 bg-white p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_40px_-16px_rgba(37,99,235,0.22)]"
          v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 420, delay: i * 70 } }">
          <span
            class="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
            <Icon :icon="pillar.icon" class="h-6 w-6" aria-hidden="true" />
          </span>
          <p class="font-display mt-4 text-sm font-bold text-slate-900">
            {{ pillar.title }}
          </p>
          <p class="mt-2 text-xs leading-relaxed text-slate-500">
            {{ pillar.short }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
