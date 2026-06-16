<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import {
  cityImgBasePath,
  contactHero,
  contactHeroFeaturedCities,
  contactHeroHighlights,
  contactHeroStats,
} from '~/data/contact'

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section class="relative overflow-hidden bg-white" aria-labelledby="contact-hero-heading">
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10 bg-mesh-light" />
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
      style="background-image: radial-gradient(#1e293b 0.8px, transparent 0.8px); background-size: 24px 24px" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-16 top-32 -z-10 h-80 w-80 rounded-full bg-indigo-300/15 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-cream-50" />

    <div class="container-page pb-12 pt-10 lg:pb-16 lg:pt-14">
      <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div class="max-w-xl lg:max-w-none">
          <span class="badge-pill w-fit" v-motion :initial="{ opacity: 0, y: 12 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }">
            <span class="grid h-5 w-5 place-items-center rounded-full bg-blue-600 text-white">
              <Icon icon="mdi:earth" class="h-3 w-3" aria-hidden="true" />
            </span>
            <span>{{ contactHero.badge }}</span>
          </span>

          <p class="mt-4 text-[13px] font-semibold text-slate-500 sm:text-sm" v-motion :initial="{ opacity: 0, y: 12 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 80 } }">
            {{ contactHero.tagline }}
          </p>

          <h1 id="contact-hero-heading"
            class="heading-display mt-4 text-balance text-[2rem] leading-[1.08] sm:text-[2.65rem] lg:text-[3rem]"
            v-motion :initial="{ opacity: 0, y: 24 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 150, ease: [0.22, 1, 0.36, 1] } }">
            {{ contactHero.title }}
            <span class="text-gradient-brand">{{ contactHero.titleHighlight }}</span>
          </h1>

          <p class="mt-4 text-pretty text-[15px] font-medium leading-relaxed text-blue-700 sm:text-lg" v-motion
            :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 240 } }">
            {{ contactHero.subheadline }}
          </p>

          <p class="mt-4 text-pretty text-[15px] leading-relaxed text-slate-600 sm:text-base" v-motion
            :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 320 } }">
            {{ contactHero.description }}
          </p>

          <div class="mt-6 space-y-3" v-motion :initial="{ opacity: 0, y: 16 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 400 } }">
            <p v-for="(paragraph, i) in contactHero.supporting" :key="i"
              class="text-[14px] leading-relaxed text-slate-500 sm:text-[15px]">
              {{ paragraph }}
            </p>
          </div>

          <div class="mt-7 flex flex-col gap-3 sm:flex-row" v-motion :initial="{ opacity: 0, y: 16 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 480 } }">
            <a :href="contactHero.primaryCta.href" class="btn-primary ripple group w-full sm:w-auto"
              @mousemove="rippleHandler">
              <Icon icon="mdi:map-marker-radius-outline" class="h-4 w-4 shrink-0 opacity-95" aria-hidden="true" />
              {{ contactHero.primaryCta.label }}
              <IconArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a :href="contactHero.secondaryCta.href" class="btn-secondary w-full sm:w-auto">
              <Icon icon="mdi:phone-outline" class="h-4 w-4 shrink-0" aria-hidden="true" />
              {{ contactHero.secondaryCta.label }}
            </a>
          </div>

          <ul class="mt-8 grid grid-cols-2 gap-2.5 sm:gap-3" role="list" aria-label="Operational highlights" v-motion
            :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 560 } }">
            <li v-for="item in contactHeroHighlights" :key="item.label"
              class="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 px-3 py-2.5 shadow-soft">
              <Icon :icon="item.iconMdi" class="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
              <span class="text-[11.5px] font-semibold leading-tight text-slate-700 sm:text-xs">
                {{ item.label }}
              </span>
            </li>
          </ul>
        </div>

        <div class="relative mx-auto w-full max-w-md lg:max-w-none" v-motion :initial="{ opacity: 0, x: 24 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 700, delay: 280, ease: [0.22, 1, 0.36, 1] } }">
          <div aria-hidden="true"
            class="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-200/40 via-indigo-100/30 to-sky-100/40 blur-xl" />

          <div
            class="relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-3 shadow-[0_24px_60px_-28px_rgba(37,99,235,0.28)] sm:p-4">
            <div class="grid grid-cols-3 gap-2 sm:gap-3">
              <div v-for="(city, i) in contactHeroFeaturedCities" :key="city.id" :class="[
                'group relative overflow-hidden rounded-2xl',
                i === 0 ? 'col-span-2 row-span-2 aspect-[4/3]' : 'aspect-square',
              ]">
                <img :src="`${cityImgBasePath}/${city.image}.png`" :alt="`${city.label} tutoring services`"
                  class="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy"
                  decoding="async" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent"
                  aria-hidden="true" />
                <p class="absolute bottom-2 left-2 right-2 text-[11px] font-semibold text-white sm:text-xs"
                  :class="i === 0 ? 'text-sm sm:text-base' : ''">
                  {{ city.label }}
                </p>
              </div>
            </div>

            <div
              class="mt-3 flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50/80 px-4 py-3">
              <div class="flex items-center gap-2.5">
                <span class="grid h-9 w-9 place-items-center rounded-lg bg-blue-600 text-white" aria-hidden="true">
                  <Icon icon="mdi:map-marker-multiple-outline" class="h-4 w-4" />
                </span>
                <div>
                  <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-blue-700">
                    Nationwide Network
                  </p>
                  <p class="text-xs font-medium text-slate-600 sm:text-[13px]">
                    Structured support in metros & regional hubs
                  </p>
                </div>
              </div>
              <a href="#branch-offices"
                class="hidden shrink-0 items-center gap-1 text-xs font-semibold text-blue-700 transition hover:text-blue-800 sm:inline-flex">
                View all
                <Icon icon="mdi:arrow-right" class="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
