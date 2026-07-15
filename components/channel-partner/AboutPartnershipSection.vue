<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { aboutSection } from '~/data/channel-partner'
</script>

<template>
  <section id="about-partnership" class="relative scroll-mt-20 section-surface-muted section-py"
    aria-labelledby="about-partnership-heading">
    <div class="container-page">
      <div class="mx-auto max-w-3xl">
      <CardHeader heading-id="about-partnership-heading" :badge="aboutSection.kicker" :title="aboutSection.title"
        :description="aboutSection.description" :classes="aboutSection.classes" />

        <ul class="mt-8 space-y-4" role="list">
          <li v-for="(point, i) in aboutSection.points" :key="i"
            class="flex items-start gap-3.5 rounded-2xl border border-slate-200/80 bg-white px-5 py-4 shadow-soft"
            v-motion :initial="{ opacity: 0, y: 12 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 60, duration: 450 } }">
            <span
              class="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100"
              aria-hidden="true">
              <IconCheck class="h-4 w-4" />
            </span>
            <p class="text-[13.5px] leading-relaxed text-slate-600 sm:text-sm">{{ point }}</p>
          </li>
        </ul>

        <p class="mt-8 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-3.5 text-[13px] leading-relaxed text-blue-900 sm:text-sm"
          v-motion :initial="{ opacity: 0, y: 10 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450, delay: 200 } }">
          <Icon icon="mdi:handshake-outline" class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
          Our structured partnership model ensures operational guidance, lead support, and business opportunities for every partner.
        </p>
      </div>
    </div>
  </section>
</template>
