<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { tutorReferral } from '~/data/tutors'
</script>

<template>
  <section id="tutor-referral" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="tutor-referral-heading">
    <div class="container-page relative">
      <article
        class="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-6 text-white shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)] sm:p-10 lg:p-12"
        v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
        <span aria-hidden="true"
          class="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <span aria-hidden="true"
          class="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" />

        <div class="relative grid items-center gap-8 lg:grid-cols-12">
          <div class="lg:col-span-8">
            <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-100/80">{{ tutorReferral.badge }}</p>
            <h2 id="tutor-referral-heading"
              class="mt-3 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              {{ tutorReferral.title }}
            </h2>
            <p class="mt-4 max-w-2xl text-sm leading-relaxed text-blue-50 sm:text-[15px]">
              {{ tutorReferral.description }}
            </p>
            <p class="mt-3 max-w-2xl text-[13px] leading-relaxed text-blue-100/85">{{ tutorReferral.note }}</p>

          </div>
          <div class="lg:col-span-4">
            <div class="rounded-[1.5rem]   px-6 py-8 text-center backdrop-blur-sm">
              <p class="font-display text-5xl font-black tracking-tight sm:text-6xl">{{ tutorReferral.reward }}</p>
              <p class="mt-3 text-sm font-semibold text-blue-50">{{ tutorReferral.rewardLabel }}</p>
              <a :href="tutorReferral.cta.href"
                class="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-12 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-cream-50">
                {{ tutorReferral.cta.label }}
                <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
