<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import { heroContent, heroHighlights } from '~/data/channel-partner'

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section class="relative overflow-hidden bg-white" aria-labelledby="partner-hero-heading">
    <!-- Soft backdrop glow -->
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-[420px] max-w-5xl bg-gradient-to-b from-blue-100/60 via-indigo-50/40 to-transparent blur-3xl" />

    <div class="container-page pb-14 pt-10 text-center sm:pb-16 lg:pt-16">
      <span class="badge-pill mx-auto w-fit" v-motion :initial="{ opacity: 0, y: 12 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }">
        <span class="grid h-5 w-5 place-items-center rounded-full bg-blue-600 text-white">
          <Icon icon="mdi:handshake-outline" class="h-3 w-3" aria-hidden="true" />
        </span>
        <span>{{ heroContent.badge }}</span>
      </span>

      <h1 id="partner-hero-heading"
        class="heading-display mx-auto mt-6 max-w-3xl text-balance text-[2rem] leading-[1.1] sm:text-[2.75rem] lg:text-[3.25rem]"
        v-motion :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 150, ease: [0.22, 1, 0.36, 1] } }">
        {{ heroContent.titleLead }}
        <span class="text-gradient-brand">{{ heroContent.titleHighlight }}</span>
      </h1>

      <p class="mx-auto mt-5 max-w-2xl text-pretty text-[15px] leading-relaxed text-slate-600 sm:text-lg" v-motion
        :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 300 } }">
        {{ heroContent.description }}
      </p>

      <p class="mx-auto mt-4 max-w-2xl text-pretty text-[13.5px] leading-relaxed text-slate-500 sm:text-[15px]"
        v-motion :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 380 } }">
        {{ heroContent.subDescription }}
      </p>

      <!-- Tagline -->
      <p class="mx-auto mt-6 w-fit rounded-full border border-amber-200 bg-amber-50/80 px-4 py-1.5 text-[13px] font-semibold text-amber-700 sm:text-sm"
        v-motion :initial="{ opacity: 0, y: 12 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 430 } }">
        {{ heroContent.tagline }}
      </p>

      <div class="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row" v-motion
        :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 480 } }">
        <a :href="heroContent.primaryCta.href" class="btn-primary ripple group w-full sm:w-auto"
          @mousemove="rippleHandler">
          <Icon icon="mdi:account-plus-outline" class="h-4 w-4 shrink-0 opacity-95" aria-hidden="true" />
          {{ heroContent.primaryCta.label }}
          <IconArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <a :href="heroContent.secondaryCta.href" class="btn-secondary w-full sm:w-auto">
          <Icon icon="mdi:calendar-clock-outline" class="h-4 w-4 shrink-0" aria-hidden="true" />
          {{ heroContent.secondaryCta.label }}
        </a>
      </div>

      <!-- Trust highlights -->
      <ul class="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3" role="list" v-motion
        :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 580 } }">
        <li v-for="item in heroHighlights" :key="item.label"
          class="flex items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 px-3 py-2.5 shadow-soft">
          <Icon :icon="item.iconMdi" class="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
          <span class="text-[12px] font-semibold leading-tight text-slate-700 sm:text-[12.5px]">{{ item.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
