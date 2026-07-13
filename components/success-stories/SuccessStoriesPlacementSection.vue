<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeader.vue'
import { placementStories, storyTabs } from '~/data/success-stories'

const section = storyTabs.find((t) => t.id === 'placements')!
</script>

<template>
  <section id="placement-stories" class="relative scroll-mt-28 section-surface-muted section-py"
    aria-labelledby="placement-stories-heading">
    <div class="container-page">
      <CardHeader heading-id="placement-stories-heading" :badge="section.kicker" :title="section.title"
        :description="section.description" :classes="section.classes" />

      <div class="mt-10 space-y-4 sm:space-y-5">
        <article v-for="(story, i) in placementStories" :key="story.id"
          class="group flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-card sm:flex-row sm:items-start sm:p-6"
          v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 60, duration: 450 } }">
          <div class="flex shrink-0 items-center gap-3 sm:w-48 sm:flex-col sm:items-start">
            <span class="font-display text-4xl font-black text-violet-200">{{ String(i + 1).padStart(2, '0') }}</span>
            <span
              class="inline-flex items-center gap-1 rounded-full bg-violet-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
              <Icon icon="mdi:check-decagram" class="h-3 w-3" aria-hidden="true" />
              Placed
            </span>
          </div>

          <div class="min-w-0 flex-1">
            <h3 class="font-display text-base font-bold text-slate-900 sm:text-lg">{{ story.title }}</h3>
            <p class="mt-1 text-[12.5px] text-slate-500">{{ story.profile }}</p>
            <p class="mt-2 text-[13px] font-medium text-violet-700">{{ story.placement }}</p>
            <blockquote class="mt-3 rounded-xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200/70">
              <p class="text-[13px] italic leading-relaxed text-slate-600">&ldquo;{{ story.quote }}&rdquo;</p>
            </blockquote>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
