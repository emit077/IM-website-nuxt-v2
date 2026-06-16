<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { institutionsHero, institutionsHeroHighlights } from '~/data/institutions'

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section class="relative overflow-hidden bg-white" aria-labelledby="institutions-hero-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-[420px] max-w-5xl bg-gradient-to-b from-blue-100/60 via-indigo-50/40 to-transparent blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 top-32 -z-10 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />

    <div class="container-page pb-12 pt-10 text-center sm:pb-16 lg:pt-16">
      <span class="badge-pill mx-auto w-fit" v-motion :initial="{ opacity: 0, y: 12 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }">
        <span class="grid h-5 w-5 place-items-center rounded-full bg-blue-600 text-white">
          <Icon icon="mdi:office-building-outline" class="h-3 w-3" aria-hidden="true" />
        </span>
        <span>{{ institutionsHero.badge }}</span>
      </span>

      <p class="mx-auto mt-4 max-w-xl text-[13px] font-semibold text-slate-500 sm:text-sm" v-motion
        :initial="{ opacity: 0, y: 12 }" :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 80 } }">
        {{ institutionsHero.tagline }}
      </p>

      <h1 id="institutions-hero-heading"
        class="heading-display mx-auto mt-5 max-w-3xl text-balance text-[2rem] leading-[1.1] sm:text-[2.75rem] lg:text-[3.25rem]"
        v-motion :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 150, ease: [0.22, 1, 0.36, 1] } }">
        {{ institutionsHero.title }}
        <span class="text-gradient-brand">{{ institutionsHero.titleHighlight }}</span>
      </h1>

      <p class="mx-auto mt-5 max-w-2xl text-pretty text-[15px] leading-relaxed text-slate-600 sm:text-lg" v-motion
        :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 300 } }">
        {{ institutionsHero.description }}
      </p>

      <p class="mx-auto mt-4 max-w-2xl text-pretty text-[13.5px] leading-relaxed text-slate-500 sm:text-[15px]"
        v-motion :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 380 } }">
        {{ institutionsHero.intro }}
      </p>

      <div class="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row" v-motion
        :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 450 } }">
        <a :href="institutionsHero.primaryCta.href" class="btn-primary ripple group w-full sm:w-auto"
          @mousemove="rippleHandler">
          <Icon icon="mdi:account-tie-outline" class="h-4 w-4 shrink-0 opacity-95" aria-hidden="true" />
          {{ institutionsHero.primaryCta.label }}
          <IconArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <a :href="institutionsHero.secondaryCta.href" class="btn-secondary w-full sm:w-auto">
          <Icon icon="mdi:phone-outline" class="h-4 w-4 shrink-0" aria-hidden="true" />
          {{ institutionsHero.secondaryCta.label }}
        </a>
      </div>

      <ul class="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-2.5 text-left sm:grid-cols-2 sm:gap-3" role="list"
        v-motion :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 550 } }">
        <li v-for="prop in institutionsHero.valueProps" :key="prop"
          class="flex items-center gap-2.5 rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3 text-[13px] font-medium text-slate-700 shadow-soft sm:text-sm">
          <span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
            <IconCheck class="h-3.5 w-3.5 text-emerald-600" />
          </span>
          {{ prop }}
        </li>
      </ul>

      <p class="mx-auto mt-8 max-w-2xl text-pretty text-[13px] leading-relaxed text-slate-500 sm:text-sm" v-motion
        :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { duration: 600, delay: 650 } }">
        {{ institutionsHero.supporting }}
      </p>

      <p class="mx-auto mt-5 w-fit rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-[13px] font-semibold text-blue-700 sm:text-sm"
        v-motion :initial="{ opacity: 0, y: 12 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 720 } }">
        Our goal is simple: {{ institutionsHero.goal }}
      </p>

      <ul class="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3" role="list"
        aria-label="Recruitment trust signals" v-motion :initial="{ opacity: 0, y: 14 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 780 } }">
        <li v-for="item in institutionsHeroHighlights" :key="item.label"
          class="flex items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 px-3 py-2.5 shadow-soft">
          <Icon :icon="item.iconMdi" class="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
          <span class="text-[12px] font-semibold leading-tight text-slate-700 sm:text-[12.5px]">{{ item.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
