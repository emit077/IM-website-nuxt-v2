<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { institutionalFeedback, storyTabs } from '~/data/success-stories'

const section = storyTabs.find((t) => t.id === 'institutions')!

const institutionMeta: Record<string, { type: string; iconMdi: string }> = {
  'sunrise-public': { type: 'CBSE School', iconMdi: 'mdi:school-outline' },
  'bright-future': { type: 'Coaching Institute', iconMdi: 'mdi:book-open-page-variant-outline' },
  'global-academy': { type: 'Academy', iconMdi: 'mdi:domain' },
  skilledge: { type: 'EdTech', iconMdi: 'mdi:monitor-dashboard' },
  'city-commerce': { type: 'Degree College', iconMdi: 'mdi:town-hall' },
}

const featured = institutionalFeedback[0]!
const rest = institutionalFeedback.slice(1)
const featuredMeta = institutionMeta[featured.id] ?? { type: 'Institution', iconMdi: 'mdi:domain' }

function crest(name: string) {
  const words = name.trim().split(/\s+/).filter((w) => !/^(the|and|&)$/i.test(w))
  if (words.length >= 2) return `${words[0]![0]}${words[1]![0]}`.toUpperCase()
  return name.slice(0, 2).toUpperCase()
}
</script>

<template>
  <section id="institutional-feedback" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="institutions-heading">
    <div aria-hidden="true" class="pointer-events-none absolute inset-0"
      style="background-image: radial-gradient(circle at 8% 20%, rgba(99,102,241,0.08), transparent 36%), radial-gradient(circle at 92% 80%, rgba(59,130,246,0.07), transparent 32%)" />

    <div class="container-page relative">
      <CardHeader heading-id="institutions-heading" :badge="section.kicker" :title="section.title"
        :description="section.description" :classes="section.classes" />

      <div class="mt-10 grid items-stretch gap-4 lg:grid-cols-2">
        <article
          class="relative flex min-h-[280px] flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-indigo-600 via-indigo-600 to-blue-700 p-6 text-white shadow-[0_28px_60px_-28px_rgba(79,70,229,0.55)] sm:min-h-[320px] sm:p-8"
          v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
          <Icon icon="mdi:format-quote-open" class="absolute -right-3 -top-4 h-28 w-28 text-white/10" aria-hidden="true" />

          <div class="relative flex items-center gap-3">
            <span
              class="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 font-display text-lg font-black backdrop-blur-sm"
              aria-hidden="true">
              {{ crest(featured.name) }}
            </span>
            <div>
              <p class="font-display text-lg font-bold leading-snug sm:text-xl">{{ featured.name }}</p>
              <p class="mt-0.5 inline-flex items-center gap-1 text-[12px] font-medium text-indigo-100">
                <Icon :icon="featuredMeta.iconMdi" class="h-3.5 w-3.5" aria-hidden="true" />
                {{ featuredMeta.type }}
              </p>
            </div>
          </div>

          <blockquote class="relative mt-8 flex-1">
            <p class="font-display text-xl font-semibold leading-snug sm:text-2xl">
              &ldquo;{{ featured.quote }}&rdquo;
            </p>
          </blockquote>

          <p class="relative mt-8 text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-200">
            Institutional partner
          </p>
        </article>

        <div class="grid h-full gap-4 sm:grid-cols-2">
          <article v-for="(review, i) in rest" :key="review.id"
            class="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-card"
            v-motion :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80 + i * 70, duration: 420 } }">
            <span
              class="inline-flex w-fit items-center gap-1.5 rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-indigo-700">
              <Icon :icon="(institutionMeta[review.id] ?? { iconMdi: 'mdi:domain' }).iconMdi" class="h-3.5 w-3.5"
                aria-hidden="true" />
              {{ institutionMeta[review.id]?.type ?? 'Institution' }}
            </span>

            <blockquote class="mt-3 flex-1">
              <p class="text-[13.5px] leading-relaxed text-slate-700">&ldquo;{{ review.quote }}&rdquo;</p>
            </blockquote>

            <p class="mt-4 font-display text-[14px] font-bold text-slate-900">{{ review.name }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
