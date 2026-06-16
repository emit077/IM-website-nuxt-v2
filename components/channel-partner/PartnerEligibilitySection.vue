<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { whoCanApplySection, eligibleApplicants } from '~/data/channel-partner'
</script>

<template>
  <section id="who-can-apply" class="relative scroll-mt-20 bg-white py-14 sm:py-16 lg:py-20"
    aria-labelledby="who-can-apply-heading">
    <div class="container-page">
      <!-- Section header -->
      <div class="mx-auto max-w-2xl text-center">
        <span class="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">{{ whoCanApplySection.kicker }}</span>
        <h2 id="who-can-apply-heading"
          class="font-display mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Ideal <span class="text-gradient-brand">partner profiles</span>
        </h2>
        <p class="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          {{ whoCanApplySection.description }}
        </p>
      </div>

      <!-- Applicant cards -->
      <ul class="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4" role="list">
        <li v-for="(applicant, i) in eligibleApplicants" :key="applicant.label" v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 400 } }"
          :class="i === eligibleApplicants.length - 1 ? 'col-span-2 sm:col-span-1' : ''">
          <div
            class="group flex h-full flex-col items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-3 py-5 text-center transition duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-soft">
            <span
              class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white">
              <Icon :icon="applicant.iconMdi" class="h-[22px] w-[22px]" aria-hidden="true" />
            </span>
            <span class="text-[13px] font-semibold leading-snug text-slate-800 group-hover:text-blue-700">
              {{ applicant.label }}
            </span>
          </div>
        </li>
      </ul>

      <!-- Note -->
      <div class="mx-auto mt-8 max-w-2xl" v-motion :initial="{ opacity: 0, y: 10 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
        <p
          class="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/70 px-4 py-3.5 text-[13px] leading-relaxed text-emerald-900 sm:text-sm">
          <Icon icon="mdi:lightbulb-on-outline" class="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
          {{ whoCanApplySection.note }}
        </p>
      </div>
    </div>
  </section>
</template>
