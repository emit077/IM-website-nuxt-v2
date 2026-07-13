<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import {
  whoCanApplySection,
  eligibleApplicants,
  eligibilityRequirements,
} from '~/data/channel-partner'
</script>

<template>
  <section id="who-can-apply" class="relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 section-py"
    aria-labelledby="who-can-apply-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

    <div class="container-page relative">
      <div class="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <div class="lg:col-span-7" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
          <p class="badge-ui-left text-sm font-semibold uppercase tracking-wide text-blue-200 before:bg-blue-200 after:bg-blue-200">
            {{ whoCanApplySection.kicker }}
          </p>
          <h2 id="who-can-apply-heading"
            class="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {{ whoCanApplySection.title }}
          </h2>
          <p class="mt-4 max-w-xl text-sm leading-relaxed text-blue-100 sm:text-base">
            {{ whoCanApplySection.description }}
          </p>

          <p class="mt-6 text-sm font-semibold text-white">{{ whoCanApplySection.suitableLabel }}</p>
          <ul class="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2" role="list">
            <li v-for="(applicant, i) in eligibleApplicants" :key="applicant.label" v-motion
              :initial="{ opacity: 0, y: 10 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 400 } }">
              <div
                class="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                <span
                  class="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/15 text-white"
                  aria-hidden="true">
                  <Icon :icon="applicant.iconMdi" class="h-4 w-4" />
                </span>
                <span class="text-[13px] font-semibold capitalize text-white sm:text-sm">{{ applicant.label }}</span>
              </div>
            </li>
          </ul>

          <p class="mt-6 text-[13px] font-medium text-blue-200 sm:text-sm">
            {{ whoCanApplySection.note }}
          </p>
        </div>

        <div class="lg:col-span-5" v-motion :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550, delay: 100 } }">
          <article class="rounded-3xl bg-white p-6 shadow-[0_24px_60px_-20px_rgba(15,23,42,0.35)] sm:p-8">
            <span class="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
              aria-hidden="true">
              <Icon icon="mdi:account-check-outline" class="h-6 w-6" />
            </span>
            <h3 class="mt-4 font-display text-xl font-bold text-slate-900">{{ eligibilityRequirements.title }}</h3>
            <p class="mt-1 text-sm text-slate-500">{{ eligibilityRequirements.subtitle }}</p>

            <ul class="mt-6 space-y-3" role="list">
              <li v-for="item in eligibilityRequirements.items" :key="item"
                class="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3">
                <span
                  class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-600 text-white"
                  aria-hidden="true">
                  <IconCheck class="h-3.5 w-3.5" />
                </span>
                <span class="text-[13px] font-medium text-slate-700 sm:text-sm">{{ item }}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.badge-ui-left::before {
  display: inline-block;
  content: "";
  width: 20px;
  height: 2px;
  position: relative;
  bottom: 4px;
  right: 10px;
  border-radius: 3px;
}
</style>
