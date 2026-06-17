<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { phoneSupport, workingHours } from '~/data/contact'

const { number } = phoneSupport
</script>

<template>
  <section
    id="call-us"
    class="scroll-mt-24 bg-cream-50 py-14 sm:py-16 lg:py-20"
    aria-labelledby="call-us-heading"
  >
    <div class="container-page">
      <div
        class="overflow-hidden rounded-3xl border border-blue-200/60 bg-gradient-to-br from-blue-50 via-white to-indigo-50 shadow-soft"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <div class="grid grid-cols-1 lg:grid-cols-5">
          <div class="border-b border-blue-100/80 p-7 sm:p-8 lg:col-span-2 lg:border-b-0 lg:border-r">
            <span
              class="grid h-11 w-11 place-items-center rounded-xl bg-blue-600 text-white ring-4 ring-blue-100"
              aria-hidden="true"
            >
              <Icon icon="mdi:phone-outline" class="h-5 w-5" />
            </span>
            <p class="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">
              Call Us
            </p>
            <h2
              id="call-us-heading"
              class="font-display mt-2 text-xl font-bold leading-snug text-slate-900 sm:text-2xl"
            >
              {{ phoneSupport.title }}
            </h2>
            <p class="mt-3 text-sm leading-relaxed text-slate-600">
              {{ phoneSupport.intro }}
            </p>

            <a
              :href="`tel:${number.tel}`"
              class="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto"
            >
              <Icon icon="mdi:phone-in-talk" class="h-5 w-5 shrink-0" aria-hidden="true" />
              {{ number.display }}
            </a>

            <div class="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              <div class="flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3">
                <Icon icon="mdi:calendar-week-outline" class="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                <div>
                  <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Working days</p>
                  <p class="text-sm font-semibold text-slate-800">{{ workingHours.days }}</p>
                </div>
              </div>
              <div class="flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3">
                <Icon icon="mdi:clock-time-four-outline" class="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                <div>
                  <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Working hours</p>
                  <p class="text-sm font-semibold text-slate-800">{{ workingHours.hours }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="p-7 sm:p-8 lg:col-span-3">
            <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
              Support areas
            </p>
            <ul class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2" role="list">
              <li
                v-for="topic in phoneSupport.topics"
                :key="topic"
                class="flex items-start gap-3 rounded-xl border border-slate-200/60 bg-white/80 px-4 py-3 text-sm text-slate-700"
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

            <p class="mt-6 rounded-xl border border-blue-100 bg-blue-50/70 px-4 py-3 text-center text-[13px] font-medium text-blue-800">
              {{ workingHours.note }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
