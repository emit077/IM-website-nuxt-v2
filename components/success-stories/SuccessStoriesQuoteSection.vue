<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeader.vue'
import { accentThemes, type QuoteReview, type StoryTab } from '~/data/success-stories'

const props = defineProps<{
  section: StoryTab
  reviews: QuoteReview[]
  bgClass?: string
}>()

const theme = accentThemes[props.section.accent]

function initials(name: string) {
  const parts = name.replace(/^(Mrs?\.|Dr\.)\s*/i, '').trim().split(/\s+/)
  if (parts.length >= 2) return `${parts[0]![0]}${parts[parts.length - 1]![0]}`.toUpperCase()
  return name.slice(0, 2).toUpperCase()
}
</script>

<template>
  <section :id="section.id === 'institutions' ? 'institutional-feedback' : `${section.id}-reviews`"
    :class="['relative scroll-mt-28 section-py', bgClass ?? 'bg-white']"
    :aria-labelledby="`${section.id}-heading`">
    <div class="container-page">
      <CardHeader :heading-id="`${section.id}-heading`" classes="!px-0 !py-0" :badge="section.kicker"
        :title="`${section.title} <span class=\'text-gradient-brand\'>${section.titleHighlight}</span>`" :description="section.description"
        :accent="section.accent" />

      <div class="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        <article v-for="(review, i) in reviews" :key="review.id" :class="[
          'mb-4 break-inside-avoid rounded-2xl border bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-card sm:p-6',
          theme.border,
        ]" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + (i % 3) * 60, duration: 450 } }">
          <div class="flex items-center gap-0.5" aria-label="5 out of 5 stars">
            <span v-for="s in 5" :key="s" class="text-xs text-amber-400" aria-hidden="true">★</span>
          </div>

          <blockquote class="mt-3">
            <p class="text-[13.5px] leading-relaxed text-slate-700">&ldquo;{{ review.quote }}&rdquo;</p>
          </blockquote>

          <footer class="mt-4 flex items-center gap-2.5 border-t border-slate-100 pt-3">
            <span
              :class="['grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br text-[11px] font-bold text-white', theme.gradient]"
              aria-hidden="true">
              {{ initials(review.name) }}
            </span>
            <div>
              <p class="text-[13px] font-bold text-slate-900">{{ review.name }}</p>
              <p v-if="review.role" class="text-[11px] text-slate-500">{{ review.role }}</p>
              <p v-if="review.location" class="text-[11px] text-slate-500">{{ review.location }}</p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  </section>
</template>
