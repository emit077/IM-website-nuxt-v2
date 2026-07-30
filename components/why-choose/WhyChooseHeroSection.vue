<script setup lang="ts">
import IconCheck from '~/components/icons/IconCheck.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import IconAcademic from '~/components/icons/IconAcademic.vue'
import { whyChooseHero } from '~/data/why-choose'

const secondaryIconClass =
  'grid h-6 w-6 place-items-center rounded-full bg-blue-100 text-blue-700 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white'
</script>

<template>
  <section class="relative overflow-hidden section-surface-white"
    :aria-labelledby="whyChooseHero.headingId">
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-blue-50/70 to-transparent" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-blue-200/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 top-10 h-56 w-56 rounded-full bg-indigo-200/20 blur-3xl" />

    <div
      class="container-page relative flex flex-col items-center pb-16 pt-14 text-center sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
      <span class="badge-pill w-fit" v-motion :initial="{ opacity: 0, y: 10 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 420 } }">
        <span class="grid h-5 w-5 place-items-center rounded-full bg-emerald-500 text-white" aria-hidden="true">
          <IconCheck class="h-3 w-3" />
        </span>
        <span class="text-xs md:text-sm">{{ whyChooseHero.badge }}</span>
      </span>

      <h1 :id="whyChooseHero.headingId"
        class="heading-display mt-6 max-w-3xl text-balance text-[2.15rem] leading-[1.1] text-slate-900 sm:mt-8 sm:text-5xl lg:text-[3.4rem]"
        v-html="whyChooseHero.title" v-motion :initial="{ opacity: 0, y: 14 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 60 } }" />

      <p class="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg"
        v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480, delay: 120 } }">
        {{ whyChooseHero.description }}
      </p>

      <div class="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4"
        v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480, delay: 180 } }">
        <ActionBtn variant="primary" :href="whyChooseHero.primaryCta.href"
          :label="whyChooseHero.primaryCta.label" :icon="IconAcademic" />
        <ActionBtn variant="secondary" :href="whyChooseHero.secondaryCta.href"
          :label="whyChooseHero.secondaryCta.label" icon="mdi:phone-outline"
          :icon-wrapper-class="secondaryIconClass" :show-arrow="false" />
      </div>
    </div>
  </section>
</template>
