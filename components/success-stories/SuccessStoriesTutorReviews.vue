<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { storyTabs, tutorReviews } from '~/data/success-stories'

const section = storyTabs.find((t) => t.id === 'tutors')!
</script>

<template>
  <section id="tutors-reviews" class="relative scroll-mt-28 section-surface-muted section-py"
    aria-labelledby="tutors-heading">
    <div class="container-page">
      <CardHeader align="left" heading-id="tutors-heading" :badge="section.kicker" :title="section.title"
        :description="section.description" :classes="section.classes" />

      <ul class="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2" role="list">
        <li v-for="review in tutorReviews" :key="review.id" class="border-t border-slate-200 pt-5">
          <p v-if="review.role" class="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-700">
            {{ review.role }}
          </p>
          <blockquote class="mt-3">
            <p class="text-[15px] leading-relaxed text-slate-800 sm:text-base">
              &ldquo;{{ review.quote }}&rdquo;
            </p>
          </blockquote>
          <p class="mt-4 text-[13px] font-medium text-slate-500">{{ review.name }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
