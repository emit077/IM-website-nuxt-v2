<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { seIntro } from '~/data/special-educators'
</script>

<template>
  <section id="special-education-overview" class="relative scroll-mt-24 overflow-hidden bg-white section-py"
    aria-labelledby="special-education-overview-heading">
    <div class="container-page">
      <CardHeader heading-id="special-education-overview-heading" :badge="seIntro.badge" :title="seIntro.title"
        :classes="seIntro.classes" />

      <div class="mx-auto mt-8  space-y-4">
        <p v-for="(paragraph, i) in seIntro.paragraphs" :key="i"
          class="text-[14px] font-medium leading-relaxed text-slate-600 sm:text-[15px]" v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 80, duration: 420 } }">
          {{ paragraph }}
        </p>
      </div>

      <p
        class="mx-auto mt-8  rounded-2xl border border-amber-200/80 bg-amber-50/80 px-5 py-4 text-center text-[13px] leading-relaxed text-amber-900 sm:text-sm">
        {{ seIntro.note }}
      </p>
    </div>
  </section>
</template>
