<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import {
  emailSupport,
  phoneSupport,
  supportNumbers,
  whatsappSupport,
  workingHours,
} from '~/data/contact'

const primaryWa = whatsappSupport.numbers[0]
</script>

<template>
  <section id="call-us" class="scroll-mt-24 border-b border-slate-200/70 bg-cream-50 py-14 sm:py-16 lg:py-20"
    aria-labelledby="contact-support-heading">
    <div class="container-page">
      <CardHeader heading-id="contact-support-heading" content-class="!px-0 !py-0" badge="Contact Support"
        title="Reach Us Through Your Preferred Channel"
        description="Call, chat, or email — our support team is ready to help with enrollment, tutor allocation, and demo bookings." />

      <!-- Support channel cards -->
      <div class="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3" v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
        <!-- Call -->
        <div id="call-us-phone"
          class="group flex flex-col rounded-3xl border border-slate-200/70 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-7">
          <span class="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600 text-white ring-4 ring-blue-100"
            aria-hidden="true">
            <Icon icon="mdi:phone-outline" class="h-5 w-5" />
          </span>
          <h3 class="mt-5 text-lg font-bold text-slate-900">Call Support</h3>
          <p class="mt-1.5 text-sm leading-relaxed text-slate-600">Speak with our support team</p>
          <ul class="mt-4 space-y-1.5" role="list">
            <li v-for="number in whatsappSupport.numbers" :key="`call-${number.tel}`">
              <a :href="`tel:${number.tel}`"
                class="text-sm font-semibold tracking-wide text-slate-800 transition hover:text-blue-700">
                {{ number.display }}
              </a>
            </li>
          </ul>
          <a :href="`tel:${phoneSupport.number.tel}`"
            class="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 transition hover:gap-2.5">
            Call Now
            <Icon icon="mdi:chevron-right" class="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <!-- WhatsApp -->
        <div id="whatsapp"
          class="group flex flex-col rounded-3xl border border-slate-200/70 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg sm:p-7">
          <span class="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-600 text-white ring-4 ring-emerald-100"
            aria-hidden="true">
            <Icon icon="mdi:whatsapp" class="h-5 w-5" />
          </span>
          <h3 class="mt-5 text-lg font-bold text-slate-900">WhatsApp Support</h3>
          <p class="mt-1.5 text-sm leading-relaxed text-slate-600">Instant replies during working hours</p>
          <ul class="mt-4 space-y-1.5" role="list">
            <li v-for="number in whatsappSupport.numbers" :key="`wa-${number.tel}`">
              <a v-if="number.wa" :href="`https://wa.me/${number.wa}`" target="_blank" rel="noopener noreferrer"
                class="text-sm font-semibold tracking-wide text-slate-800 transition hover:text-emerald-700">
                {{ number.display }}
              </a>
            </li>
          </ul>
          <a v-if="primaryWa.wa" :href="`https://wa.me/${primaryWa.wa}`" target="_blank" rel="noopener noreferrer"
            class="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 transition hover:gap-2.5">
            Chat on WhatsApp
            <Icon icon="mdi:chevron-right" class="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <!-- Email -->
        <div id="email"
          class="group flex flex-col rounded-3xl border border-slate-200/70 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg sm:p-7">
          <span class="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-600 text-white ring-4 ring-indigo-100"
            aria-hidden="true">
            <Icon icon="mdi:email-outline" class="h-5 w-5" />
          </span>
          <h3 class="mt-5 text-lg font-bold text-slate-900">Email Support</h3>
          <p class="mt-1.5 text-sm leading-relaxed text-slate-600">Replies within 24–48 working hours</p>
          <p class="mt-4 break-all text-sm font-semibold tracking-wide text-slate-800">{{ emailSupport.address }}</p>
          <a :href="`mailto:${emailSupport.address}`"
            class="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700 transition hover:gap-2.5">
            Write to Us
            <Icon icon="mdi:chevron-right" class="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <!-- Need help band -->
      <div
        class="mt-6 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50/60 p-6 shadow-soft sm:p-8"
        v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 80 } }">
        <div class="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.6fr_1fr]">
          <CardHeader variant="section-left" heading-id="need-help-heading" content-class="!px-0 !py-0" badge=""
            title="<span class='text-gradient-brand'> Need Help?</span> </br>We're Available to Support You"
            description="Reach out anytime during working hours for quick support across enrolment, tutor allocation and demo bookings." />

          <div
            class="grid grid-cols-1 gap-3 rounded-2xl border border-blue-100 bg-white/80 p-4 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-1">
            <div class="flex items-center gap-3">
              <Icon icon="mdi:calendar-week-outline" class="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
              <div>
                <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Working days</p>
                <p class="text-sm font-semibold text-slate-800">{{ workingHours.days }}</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <Icon icon="mdi:clock-time-four-outline" class="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
              <div>
                <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Working hours</p>
                <p class="text-sm font-semibold text-slate-800">{{ workingHours.hours }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- All support numbers -->
      <div class="mt-12" v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 120 } }">
        <CardHeader variant="variant-1" heading-id="support-numbers-heading" content-class="!px-0 !py-0"
          badge="Authorised Lines" title="All Support Numbers"
          description="Use any of these numbers for enrolment, tutor allocation, demo booking and partnership discussions." />

        <div class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <a v-for="line in supportNumbers" :key="line.purpose" :href="`tel:${line.tel}`"
            class="group flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white px-4 py-3.5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
            <span
              class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon icon="mdi:phone-in-talk" class="h-4.5 w-4.5" />
            </span>
            <span class="min-w-0 flex-1">
              <span class="block text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">{{ line.purpose
                }}</span>
              <span class="block text-sm font-bold tracking-wide text-slate-900">{{ line.display }}</span>
            </span>
            <Icon icon="mdi:chevron-right" class="h-5 w-5 shrink-0 text-slate-300 transition group-hover:text-blue-600"
              aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
