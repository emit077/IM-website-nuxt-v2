<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { phoneSupport, workingHours } from '~/data/contact'
</script>

<template>
  <section
    id="call-us"
    class="scroll-mt-24 bg-cream-50 py-14 sm:py-16 lg:py-20"
    aria-labelledby="call-us-heading"
  >
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <span class="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Call Us</span>
        <h2
          id="call-us-heading"
          class="font-display mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          {{ phoneSupport.title }}
        </h2>
        <p class="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          {{ phoneSupport.intro }}
        </p>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        <div
          class="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-soft sm:p-7"
          v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }"
        >
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
            Support areas
          </p>
          <ul class="mt-4 space-y-3" role="list">
            <li
              v-for="topic in phoneSupport.topics"
              :key="topic"
              class="flex items-start gap-3 text-sm text-slate-700"
            >
              <span
                class="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-emerald-50 ring-1 ring-emerald-100"
                aria-hidden="true"
              >
                <IconCheck class="h-4 w-4 text-emerald-600" />
              </span>
              <span class="pt-1">{{ topic }}</span>
            </li>
          </ul>
        </div>

        <div
          class="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-soft sm:p-7"
          v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450, delay: 80 } }"
        >
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
            Authorised phone numbers
          </p>
          <ul class="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2" role="list">
            <li v-for="number in phoneSupport.numbers" :key="number.tel">
              <a
                :href="`tel:${number.tel}`"
                class="group flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3.5 py-3 text-sm font-semibold text-slate-800 transition duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-soft"
              >
                <span
                  class="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-600 text-white transition group-hover:bg-blue-700"
                  aria-hidden="true"
                >
                  <Icon icon="mdi:phone-outline" class="h-4 w-4" />
                </span>
                {{ number.display }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-8 overflow-hidden rounded-2xl border border-blue-200/60 bg-gradient-to-r from-blue-50 via-white to-indigo-50 shadow-soft"
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450, delay: 120 } }"
      >
        <div class="grid grid-cols-1 gap-6 p-6 sm:p-8 md:grid-cols-3 md:items-center md:gap-8">
          <div class="md:col-span-1">
            <div class="flex items-start gap-3">
              <span
                class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-600 text-white"
                aria-hidden="true"
              >
                <Icon icon="mdi:clock-outline" class="h-5 w-5" />
              </span>
              <div>
                <h3 class="font-display text-lg font-bold text-slate-900">
                  {{ workingHours.title }}
                </h3>
                <p class="mt-1 text-sm text-slate-600">
                  {{ workingHours.subtitle }}
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row md:col-span-2 md:justify-end">
            <div class="flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white px-4 py-3">
              <Icon icon="mdi:calendar-week-outline" class="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
              <div>
                <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Working days</p>
                <p class="text-sm font-semibold text-slate-800">{{ workingHours.days }}</p>
              </div>
            </div>
            <div class="flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white px-4 py-3">
              <Icon icon="mdi:clock-time-four-outline" class="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
              <div>
                <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Working hours</p>
                <p class="text-sm font-semibold text-slate-800">{{ workingHours.hours }}</p>
              </div>
            </div>
          </div>
        </div>
        <p class="border-t border-blue-100/80 bg-blue-50/50 px-6 py-3 text-center text-[13px] font-medium text-blue-800 sm:px-8">
          {{ workingHours.note }}
        </p>
      </div>
    </div>
  </section>
</template>
