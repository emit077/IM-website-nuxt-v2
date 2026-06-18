<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import {
  emailSupport,
  phoneSupport,
  whatsappSupport,
  workingHours,
} from '~/data/contact'

const supportTopics = computed(() =>
  [...new Set([
    ...phoneSupport.topics,
    ...whatsappSupport.topics,
    ...emailSupport.topics,
  ])],
)

const primaryWa = whatsappSupport.numbers[0]
</script>

<template>
  <section
    id="call-us"
    class="scroll-mt-24 border-y border-slate-200/70 bg-cream-50 py-14 sm:py-16 lg:py-20"
    aria-labelledby="contact-support-heading"
  >
    <div class="container-page">
      <CardHeader
        variant="section"
        heading-id="contact-support-heading"
        content-class="!px-0 !py-0"
        badge="Contact Support"
        :title="workingHours.title"
        :description="workingHours.subtitle"
      />

      <div
        class="mt-10 overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-soft"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <div class="grid grid-cols-1 divide-y divide-slate-200/70 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          <div id="call-us-phone" class="p-6 sm:p-7">
            <span
              class="grid h-11 w-11 place-items-center rounded-xl bg-blue-600 text-white ring-4 ring-blue-100"
              aria-hidden="true"
            >
              <Icon icon="mdi:phone-outline" class="h-5 w-5" />
            </span>
            <p class="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">Call Us</p>
            <h3 class="mt-2 text-lg font-bold text-slate-900">{{ phoneSupport.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ phoneSupport.intro }}</p>
            <a
              :href="`tel:${phoneSupport.number.tel}`"
              class="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              <Icon icon="mdi:phone-in-talk" class="h-4 w-4 shrink-0" aria-hidden="true" />
              {{ phoneSupport.number.display }}
            </a>
          </div>

          <div id="whatsapp" class="p-6 sm:p-7">
            <span
              class="grid h-11 w-11 place-items-center rounded-xl bg-emerald-600 text-white ring-4 ring-emerald-100"
              aria-hidden="true"
            >
              <Icon icon="mdi:whatsapp" class="h-5 w-5" />
            </span>
            <p class="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700">WhatsApp</p>
            <h3 class="mt-2 text-lg font-bold text-slate-900">{{ whatsappSupport.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ whatsappSupport.intro }}</p>
            <a
              v-if="primaryWa.wa"
              :href="`https://wa.me/${primaryWa.wa}`"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              <Icon icon="mdi:whatsapp" class="h-4 w-4 shrink-0" aria-hidden="true" />
              {{ whatsappSupport.ctaLabel }}
            </a>
            <ul class="mt-3 flex flex-col gap-2" role="list">
              <li v-for="number in whatsappSupport.numbers" :key="number.tel">
                <a
                  v-if="number.wa"
                  :href="`https://wa.me/${number.wa}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
                >
                  <Icon icon="mdi:whatsapp" class="h-4 w-4 shrink-0" aria-hidden="true" />
                  {{ number.display }}
                </a>
              </li>
            </ul>
          </div>

          <div id="email" class="p-6 sm:p-7">
            <span
              class="grid h-11 w-11 place-items-center rounded-xl bg-indigo-600 text-white ring-4 ring-indigo-100"
              aria-hidden="true"
            >
              <Icon icon="mdi:email-outline" class="h-5 w-5" />
            </span>
            <p class="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-700">Email</p>
            <h3 class="mt-2 text-lg font-bold text-slate-900">{{ emailSupport.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ emailSupport.intro }}</p>
            <a
              :href="`mailto:${emailSupport.address}`"
              class="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-700"
            >
              <Icon icon="mdi:email-fast-outline" class="h-4 w-4 shrink-0" aria-hidden="true" />
              {{ emailSupport.ctaLabel }}
            </a>
            <p class="mt-3 break-all text-sm font-semibold text-indigo-700">{{ emailSupport.address }}</p>
            <p class="mt-2 text-xs leading-relaxed text-slate-500">{{ emailSupport.responseTime }}</p>
          </div>
        </div>

        <div class="border-t border-slate-200/70 bg-slate-50/60 px-6 py-6 sm:px-8">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.4fr]">
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
            <p class="flex items-center rounded-xl border border-blue-100 bg-blue-50/70 px-4 py-3 text-[13px] font-medium text-blue-800">
              {{ workingHours.note }}
            </p>
          </div>

          <p class="mt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
            We can help with
          </p>
          <ul class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
            <li
              v-for="topic in supportTopics"
              :key="topic"
              class="flex items-start gap-3 rounded-xl border border-slate-200/60 bg-white px-4 py-3 text-sm text-slate-700"
            >
              <span
                class="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-blue-50 ring-1 ring-blue-100"
                aria-hidden="true"
              >
                <IconCheck class="h-4 w-4 text-blue-600" />
              </span>
              <span class="pt-1">{{ topic }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
