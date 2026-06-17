<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { emailSupport } from '~/data/contact'
</script>

<template>
  <section
    id="email"
    class="scroll-mt-24 border-t border-slate-200/70 bg-white py-14 sm:py-16 lg:py-20"
    aria-labelledby="email-heading"
  >
    <div class="container-page">
      <div
        class="overflow-hidden rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-indigo-50 via-white to-violet-50 shadow-soft"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <div class="grid grid-cols-1 lg:grid-cols-5">
          <div class="border-b border-indigo-100/80 p-7 sm:p-8 lg:col-span-2 lg:border-b-0 lg:border-r">
            <span
              class="grid h-11 w-11 place-items-center rounded-xl bg-indigo-600 text-white ring-4 ring-indigo-100"
              aria-hidden="true"
            >
              <Icon icon="mdi:email-outline" class="h-5 w-5" />
            </span>
            <p class="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-700">
              Email Support
            </p>
            <h2
              id="email-heading"
              class="font-display mt-2 text-xl font-bold leading-snug text-slate-900 sm:text-2xl"
            >
              {{ emailSupport.title }}
            </h2>
            <p class="mt-3 text-sm leading-relaxed text-slate-600">
              {{ emailSupport.intro }}
            </p>

            <a
              :href="`mailto:${emailSupport.address}`"
              class="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-indigo-600 px-6 py-4 text-base font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 sm:w-auto"
            >
              <Icon icon="mdi:email-fast-outline" class="h-5 w-5 shrink-0" aria-hidden="true" />
              {{ emailSupport.ctaLabel }}
            </a>

            <p
              class="mt-4 break-all text-center text-sm font-semibold text-indigo-700 sm:text-left sm:text-base"
            >
              {{ emailSupport.address }}
            </p>

            <div class="mt-6 flex items-start gap-3 rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3">
              <Icon icon="mdi:clock-check-outline" class="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" aria-hidden="true" />
              <div>
                <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Response time</p>
                <p class="text-sm font-medium leading-relaxed text-slate-700">
                  {{ emailSupport.responseTime }}
                </p>
              </div>
            </div>
          </div>

          <div class="p-7 sm:p-8 lg:col-span-3">
            <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
              Email us for
            </p>
            <ul class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2" role="list">
              <li
                v-for="topic in emailSupport.topics"
                :key="topic"
                class="flex items-start gap-3 rounded-xl border border-slate-200/60 bg-white/80 px-4 py-3 text-sm text-slate-700"
              >
                <span
                  class="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-indigo-50 ring-1 ring-indigo-100"
                  aria-hidden="true"
                >
                  <IconCheck class="h-4 w-4 text-indigo-600" />
                </span>
                <span class="pt-1">{{ topic }}</span>
              </li>
            </ul>

            <p class="mt-6 rounded-xl border border-indigo-100 bg-indigo-50/70 px-4 py-3 text-center text-[13px] font-medium text-indigo-800">
              Prefer a quicker reply? Call or WhatsApp us during working hours for immediate assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
