<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { partnerReviews, storyTabs } from '~/data/success-stories'

const section = storyTabs.find((t) => t.id === 'partners')!
</script>

<template>
  <section id="partners-reviews" class="relative scroll-mt-28 bg-blue-50/60 section-py"
    aria-labelledby="partners-heading">
    <div class="container-page">
      <CardHeader align="left" heading-id="partners-heading" :badge="section.kicker" :title="section.title"
        :description="section.description" :classes="section.classes" />

      <ol class="relative mt-10 space-y-0" aria-label="Channel partner feedback">
        <li v-for="(review, i) in partnerReviews" :key="review.id"
          class="relative grid gap-4 py-5 sm:grid-cols-12 sm:gap-6 sm:py-6"
          :class="i < partnerReviews.length - 1 ? 'border-b border-blue-100' : ''" v-motion
          :initial="{ opacity: 0, x: -12 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 40 + i * 70, duration: 450 } }">
          <div class="flex items-start gap-3 sm:col-span-4">
            <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-600 text-white shadow-sm"
              aria-hidden="true">
              <Icon icon="mdi:map-marker-radius-outline" class="h-4 w-4" />
            </span>
            <div>
              <p class="font-display text-base font-bold text-slate-900">{{ review.name }}</p>
              <p v-if="review.role" class="mt-0.5 text-[12px] font-semibold uppercase tracking-wide text-blue-700">
                {{ review.role }}
              </p>
            </div>
          </div>
          <blockquote class="sm:col-span-8">
            <p class="text-[14px] leading-relaxed text-slate-700">&ldquo;{{ review.quote }}&rdquo;</p>
          </blockquote>
        </li>
      </ol>
    </div>
  </section>
</template>
