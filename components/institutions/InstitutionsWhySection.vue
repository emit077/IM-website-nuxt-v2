<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeader.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { whyChooseAdvantages, institutionalSupport } from '~/data/institutions'
</script>

<template>
  <section id="why-institutions" class="relative bg-[#f8fafc] py-14 sm:py-16 lg:py-20"
    aria-labelledby="why-institutions-heading">
    <div class="container-page">
      <CardHeader
        
        heading-id="why-institutions-heading"
        classes="!px-0 !py-0"
        badge="Why Indian Mentors"
        title='Why institutions <span class="text-gradient-brand">choose us</span>'
        description="Educational organizations across India trust Indian Mentors for structured and reliable teacher recruitment solutions."
      />

      <ul class="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3" role="list">
        <li v-for="(adv, i) in whyChooseAdvantages" :key="adv.label" v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + (i % 6) * 40, duration: 400 } }">
          <div
            class="group flex h-full items-center gap-3.5 rounded-2xl border border-slate-200/70 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-soft sm:p-5">
            <span
              class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="adv.iconMdi" class="h-5 w-5" />
            </span>
            <p class="text-[13px] font-semibold leading-snug text-slate-800 sm:text-sm">
              {{ adv.label }}
            </p>
          </div>
        </li>
      </ul>

      <p class="mx-auto mt-8 max-w-2xl text-center text-[13px] leading-relaxed text-slate-500 sm:text-sm" v-motion
        :initial="{ opacity: 0 }" :visibleOnce="{ opacity: 1, transition: { duration: 500 } }">
        Whether your institution is expanding, replacing faculty, or building a new academic team,
        Indian Mentors provides professional recruitment support with clarity and reliability.
      </p>
      <div id="institutional-support"
        class="mt-12 scroll-mt-24 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-soft"
        v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
        <div class="grid grid-cols-1 lg:grid-cols-5">
          <div class="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-7 text-white sm:p-8 lg:col-span-2">
            <span
              class="grid h-11 w-11 place-items-center rounded-xl bg-white/15 ring-1 ring-white/25"
              aria-hidden="true">
              <Icon icon="mdi:school-outline" class="h-5 w-5" />
            </span>
            <h3 class="font-display mt-4 text-xl font-bold leading-snug sm:text-2xl">
              {{ institutionalSupport.title }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-blue-100/90">
              {{ institutionalSupport.description }}
            </p>
          </div>

          <div class="p-7 sm:p-8 lg:col-span-3">
            <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
              Institutional support includes
            </p>
            <ul class="mt-4 space-y-3" role="list">
              <li v-for="item in institutionalSupport.items" :key="item.label"
                class="flex items-start gap-3 text-sm text-slate-700">
                <span
                  class="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-emerald-50 ring-1 ring-emerald-100"
                  aria-hidden="true">
                  <IconCheck class="h-4 w-4 text-emerald-600" />
                </span>
                <span class="pt-1">{{ item.label }}</span>
              </li>
            </ul>
            <p class="mt-5 border-t border-slate-100 pt-4 text-[13px] italic leading-relaxed text-slate-500">
              {{ institutionalSupport.closing }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
