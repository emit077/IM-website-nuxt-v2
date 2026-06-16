<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import { whyTestimonialsSection } from '~/data/success-stories'
</script>

<template>
  <section
    id="why-testimonials"
    class="relative scroll-mt-24 bg-cream-50 py-14 sm:py-16 lg:py-20"
    aria-labelledby="why-testimonials-heading"
  >
    <div class="container-page">
      <div class="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        <CardHeader
          variant="section-left"
          heading-id="why-testimonials-heading"
          content-class="!px-0 !py-0"
          :badge="whyTestimonialsSection.kicker"
          :title="`${whyTestimonialsSection.title} `"
          :title-highlight="whyTestimonialsSection.titleHighlight"
          :description="whyTestimonialsSection.description"
          accent="blue"
        />

        <ul class="grid gap-3 sm:grid-cols-2" role="list">
          <li
            v-for="(point, i) in whyTestimonialsSection.points"
            :key="point.label"
            class="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-3.5 shadow-soft"
            v-motion
            :initial="{ opacity: 0, x: 12 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 40 + i * 50, duration: 400 } }"
          >
            <span class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
              <Icon :icon="point.iconMdi" class="h-4 w-4" aria-hidden="true" />
            </span>
            <span class="text-[13px] font-semibold text-slate-800">{{ point.label }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
