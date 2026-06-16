<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import {
  emailSupport,
  headOffice,
  phoneSupport,
  websiteInfo,
  whatsappSupport,
  workingHours,
} from '~/data/contact'
</script>

<template>
  <section class="relative bg-cream-50 py-14 sm:py-16 lg:py-20" aria-label="Contact information">
    <div class="container-page">
      <!-- Head office + phone -->
      <div class="grid gap-5 lg:grid-cols-12 lg:gap-6">
        <article
          id="head-office"
          class="scroll-mt-28 lg:col-span-7"
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        >
          <div
            class="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:border-blue-200 sm:p-8"
          >
            <div class="flex items-start gap-4">
              <span
                class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
                aria-hidden="true"
              >
                <Icon icon="mdi:map-marker-outline" class="h-6 w-6" />
              </span>
              <div class="min-w-0">
                <span class="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">Head Office</span>
                <h2 class="font-display mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  {{ headOffice.title }}
                </h2>
                <p class="mt-1 text-sm font-medium text-slate-500">
                  {{ headOffice.subtitle }}
                </p>
              </div>
            </div>

            <address class="mt-6 not-italic">
              <p class="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-4 text-[14px] leading-relaxed text-slate-700 sm:px-5 sm:text-[15px]">
                {{ headOffice.address }}
              </p>
            </address>

            <div class="mt-5 space-y-4">
              <p class="text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
                {{ headOffice.intro }}
              </p>
              <ul class="space-y-2" role="list">
                <li
                  v-for="item in headOffice.responsibilities"
                  :key="item"
                  class="flex items-start gap-2 text-[14px] text-slate-700 sm:text-[15px]"
                >
                  <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  {{ item }}
                </li>
              </ul>
              <p class="text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
                {{ headOffice.closing }}
              </p>
            </div>
          </div>
        </article>

        <article
          id="call-us"
          class="scroll-mt-28 lg:col-span-5"
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80, duration: 500 } }"
        >
          <div
            class="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:border-blue-200 sm:p-8"
          >
            <div class="flex items-start gap-4">
              <span
                class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
                aria-hidden="true"
              >
                <Icon icon="mdi:phone-outline" class="h-6 w-6" />
              </span>
              <div>
                <span class="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">Call Us</span>
                <h2 class="font-display mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  {{ phoneSupport.title }}
                </h2>
              </div>
            </div>

            <p class="mt-5 text-[14px] leading-relaxed text-slate-600">
              {{ phoneSupport.intro }}
            </p>

            <ul class="mt-4 space-y-2" role="list">
              <li
                v-for="topic in phoneSupport.topics"
                :key="topic"
                class="flex items-start gap-2.5 text-[13px] text-slate-700"
              >
                <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                {{ topic }}
              </li>
            </ul>

            <div class="mt-6 border-t border-slate-100 pt-5">
              <p class="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                Authorised Phone Numbers
              </p>
              <ul class="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2" role="list">
                <li v-for="phone in phoneSupport.numbers" :key="phone.tel">
                  <a
                    :href="`tel:${phone.tel}`"
                    class="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-2.5 text-[13px] font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <Icon icon="mdi:phone" class="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                    {{ phone.display }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>

      <!-- Working hours banner -->
      <div
        class="mt-5 overflow-hidden rounded-3xl border border-blue-200/70 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 p-6 shadow-[0_20px_50px_-24px_rgba(29,78,216,0.55)] sm:p-8"
        v-motion
        :initial="{ opacity: 0, y: 14 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 120, duration: 500 } }"
      >
        <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div class="max-w-xl">
            <h2 class="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
              {{ workingHours.title }}
            </h2>
            <p class="mt-2 text-sm leading-relaxed text-blue-100 sm:text-[15px]">
              {{ workingHours.subtitle }}
            </p>
          </div>

          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4">
            <div class="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-sm">
              <div class="flex items-center gap-2.5">
                <Icon icon="mdi:calendar-week-outline" class="h-5 w-5 text-blue-200" aria-hidden="true" />
                <span class="text-xs font-bold uppercase tracking-[0.12em] text-blue-200">Office Working Days</span>
              </div>
              <p class="mt-2 text-base font-bold text-white sm:text-lg">
                {{ workingHours.days }}
              </p>
            </div>
            <div class="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-sm">
              <div class="flex items-center gap-2.5">
                <Icon icon="mdi:clock-outline" class="h-5 w-5 text-blue-200" aria-hidden="true" />
                <span class="text-xs font-bold uppercase tracking-[0.12em] text-blue-200">Office Working Hours</span>
              </div>
              <p class="mt-2 text-base font-bold text-white sm:text-lg">
                {{ workingHours.hours }}
              </p>
            </div>
          </div>
        </div>

        <p class="mt-5 flex items-center gap-2 text-sm font-medium text-blue-100">
          <Icon icon="mdi:gesture-tap" class="h-4 w-4 shrink-0" aria-hidden="true" />
          {{ workingHours.note }}
        </p>
      </div>

      <!-- WhatsApp, email, website -->
      <div class="mt-5 grid gap-5 lg:grid-cols-3 lg:gap-6">
        <article
          id="whatsapp"
          class="scroll-mt-28"
          v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 160, duration: 450 } }"
        >
          <div
            class="group flex h-full flex-col rounded-3xl border border-emerald-200/70 bg-white p-6 shadow-soft transition duration-300 hover:border-emerald-300 sm:p-7"
          >
            <div class="flex items-start gap-4">
              <span
                class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100"
                aria-hidden="true"
              >
                <Icon icon="mdi:whatsapp" class="h-5 w-5" />
              </span>
              <div>
                <span class="text-xs font-bold uppercase tracking-[0.14em] text-emerald-600">WhatsApp Support</span>
                <h2 class="font-display mt-1 text-lg font-bold text-slate-900">
                  {{ whatsappSupport.title }}
                </h2>
              </div>
            </div>

            <p class="mt-4 text-[13px] leading-relaxed text-slate-600">
              {{ whatsappSupport.intro }}
            </p>

            <p class="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
              WhatsApp Assistance For
            </p>
            <ul class="mt-3 space-y-2" role="list">
              <li
                v-for="topic in whatsappSupport.topics"
                :key="topic"
                class="flex items-start gap-2 text-[13px] text-slate-700"
              >
                <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                {{ topic }}
              </li>
            </ul>

            <ul class="mt-5 space-y-2" role="list">
              <li v-for="phone in whatsappSupport.numbers" :key="phone.wa">
                <a
                  :href="`https://wa.me/${phone.wa}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 text-[13px] font-semibold text-slate-800 transition hover:text-emerald-700"
                >
                  <Icon icon="mdi:whatsapp" class="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  {{ phone.display }}
                </a>
              </li>
            </ul>

            <a
              :href="`https://wa.me/${whatsappSupport.numbers[0].wa}`"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_-12px_rgba(16,185,129,0.65)] transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              <Icon icon="mdi:whatsapp" class="h-4 w-4" aria-hidden="true" />
              {{ whatsappSupport.ctaLabel }}
            </a>
          </div>
        </article>

        <article
          id="email"
          class="scroll-mt-28"
          v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200, duration: 450 } }"
        >
          <div
            class="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:border-blue-200 sm:p-7"
          >
            <div class="flex items-start gap-4">
              <span
                class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                aria-hidden="true"
              >
                <Icon icon="mdi:email-outline" class="h-5 w-5" />
              </span>
              <div>
                <span class="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">Email Support</span>
                <h2 class="font-display mt-1 text-lg font-bold text-slate-900">
                  {{ emailSupport.title }}
                </h2>
              </div>
            </div>

            <p class="mt-4 text-[13px] leading-relaxed text-slate-600">
              {{ emailSupport.intro }}
            </p>

            <div class="mt-6 rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-4">
              <p class="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Email Address</p>
              <a
                :href="`mailto:${emailSupport.address}`"
                class="mt-2 inline-flex items-center gap-2 break-all text-[15px] font-semibold text-blue-700 underline-offset-2 transition hover:text-blue-800 hover:underline"
              >
                <Icon icon="mdi:email-fast-outline" class="h-4 w-4 shrink-0" aria-hidden="true" />
                {{ emailSupport.address }}
              </a>
            </div>

            <div class="mt-5 flex items-start gap-3 rounded-2xl border border-amber-100 bg-amber-50/70 px-4 py-3.5">
              <Icon icon="mdi:clock-check-outline" class="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
              <div>
                <p class="text-xs font-bold uppercase tracking-[0.12em] text-amber-700">Response Time</p>
                <p class="mt-1 text-[13px] leading-relaxed text-amber-900/90">
                  {{ emailSupport.responseTime }}
                </p>
              </div>
            </div>
          </div>
        </article>

        <article
          id="website"
          class="scroll-mt-28"
          v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 240, duration: 450 } }"
        >
          <div
            class="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:border-blue-200 sm:p-7"
          >
            <div class="flex items-start gap-4">
              <span
                class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100"
                aria-hidden="true"
              >
                <Icon icon="mdi:web" class="h-5 w-5" />
              </span>
              <div>
                <span class="text-xs font-bold uppercase tracking-[0.14em] text-indigo-600">Visit Our Website</span>
                <h2 class="font-display mt-1 text-lg font-bold text-slate-900">
                  {{ websiteInfo.title }}
                </h2>
              </div>
            </div>

            <p class="mt-4 text-[13px] leading-relaxed text-slate-600">
              {{ websiteInfo.intro }}
            </p>

            <ul class="mt-4 space-y-2" role="list">
              <li
                v-for="topic in websiteInfo.topics"
                :key="topic"
                class="flex items-start gap-2 text-[13px] text-slate-700"
              >
                <Icon icon="mdi:chevron-right" class="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" aria-hidden="true" />
                {{ topic }}
              </li>
            </ul>

            <a
              :href="websiteInfo.url"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-auto pt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-indigo-700 underline-offset-4 transition hover:text-indigo-900 hover:underline"
            >
              <Icon icon="mdi:link-variant" class="h-4 w-4" aria-hidden="true" />
              {{ websiteInfo.displayUrl }}
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
