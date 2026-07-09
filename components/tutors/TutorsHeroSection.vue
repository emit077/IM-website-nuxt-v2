<script setup lang="ts">
import { Icon } from '@iconify/vue'
import HeroHeader from '~/components/ui/HeroHeader.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { heroContent, heroHighlights } from '~/data/tutors'
</script>

<template>
  <section class="relative overflow-hidden section-surface-white" aria-labelledby="tutors-hero-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-[420px] max-w-5xl bg-gradient-to-b from-blue-100/60 via-indigo-50/40 to-transparent blur-3xl" />

    <div class="container-page pb-14 pt-10 text-center sm:pb-16 lg:pt-16">
      <HeroHeader heading-id="tutors-hero-heading" content-class="!px-0 !py-0 mx-auto max-w-3xl text-center"
        :badge="heroContent.badge"
        title="Join India's growing network of <span class='text-gradient-brand'>professional mentors</span>"
        :description="heroContent.description">
        <div class="mt-6 flex flex-wrap items-center justify-center gap-2" v-motion :initial="{ opacity: 0, y: 12 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 380 } }">
          <span v-for="audience in heroContent.audiences" :key="audience"
            class="rounded-full border border-blue-100 bg-blue-50/70 px-3.5 py-1.5 text-[12px] font-semibold text-blue-700 sm:text-[13px]">
            {{ audience }}
          </span>
        </div>

        <div class="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row" v-motion
          :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 450 } }">
          <ActionBtn variant="primary" :href="heroContent.primaryCta.href" :label="heroContent.primaryCta.label"
            icon="mdi:handshake-outline" />
          <ActionBtn variant="secondary" :href="heroContent.secondaryCta.href"
            :label="heroContent.secondaryCta.label" :show-arrow="false" />
        </div>
      </HeroHeader>

      <ul class="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3" role="list" v-motion
        :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 550 } }">
        <li v-for="item in heroHighlights" :key="item.label"
          class="flex items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 px-3 py-2.5 shadow-soft">
          <Icon :icon="item.iconMdi" class="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
          <span class="text-[12px] font-semibold leading-tight text-slate-700 sm:text-[12.5px]">{{ item.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
