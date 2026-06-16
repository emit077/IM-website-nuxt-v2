<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import CardHeader from '~/components/ui/cardheader.vue'
import {
  accentThemes,
  studentStories,
  successStoriesHero,
  successStoriesHeroStats,
} from '~/data/success-stories'

const spotlight = computed(() => studentStories.find((s) => s.spotlight) ?? studentStories[0]!)
const theme = computed(() => accentThemes[spotlight.value.accent])

const heroTitle = `${successStoriesHero.title}<span class="text-gradient-brand">${successStoriesHero.titleHighlight}</span>`

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section class="relative overflow-hidden bg-cream-50" aria-labelledby="success-stories-hero-heading">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0"
      style="background-image: radial-gradient(circle at 15% 20%, rgba(59,130,246,0.12), transparent 40%), radial-gradient(circle at 85% 15%, rgba(99,102,241,0.1), transparent 35%)"
    />

    <div class="container-page relative py-10 sm:py-14 lg:py-16">
      <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div class="lg:col-span-7">
          <CardHeader
            variant="hero"
            heading-id="success-stories-hero-heading"
            content-class="!px-0 !py-0 max-w-2xl"
            :badge="successStoriesHero.badge"
            :title="heroTitle"
            :description="successStoriesHero.description"
            :tagline="successStoriesHero.intro"
          >
            <div class="flex flex-col gap-3 sm:flex-row">
              <a
                :href="successStoriesHero.primaryCta.href"
                class="btn-primary ripple group w-full sm:w-auto"
                @mousemove="rippleHandler"
              >
                {{ successStoriesHero.primaryCta.label }}
                <IconArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a :href="successStoriesHero.secondaryCta.href" class="btn-secondary w-full sm:w-auto">
                <Icon icon="mdi:phone-outline" class="h-4 w-4" aria-hidden="true" />
                {{ successStoriesHero.secondaryCta.label }}
              </a>
            </div>
          </CardHeader>

          <ul class="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4" role="list">
            <li
              v-for="(stat, i) in successStoriesHeroStats"
              :key="stat.label"
              class="rounded-xl border border-slate-200/80 bg-white px-3 py-3 shadow-soft"
              v-motion
              :initial="{ opacity: 0, y: 10 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 420 + i * 60, duration: 400 } }"
            >
              <p class="font-display text-lg font-extrabold text-slate-900">{{ stat.value }}</p>
              <p class="text-[10px] font-semibold uppercase tracking-wide text-slate-500">{{ stat.label }}</p>
            </li>
          </ul>
        </div>

        <div
          class="lg:col-span-5"
          v-motion
          :initial="{ opacity: 0, x: 20 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 700, delay: 200 } }"
        >
          <article
            class="relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_28px_60px_-28px_rgba(37,99,235,0.35)] sm:p-7"
          >
            <span
              aria-hidden="true"
              :class="['pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br opacity-30 blur-3xl', theme.gradient]"
            />

            <div class="relative">
              <span class="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                <Icon icon="mdi:star-four-points" class="h-3 w-3" aria-hidden="true" />
                Featured story
              </span>

              <div class="mt-5 flex items-center gap-3">
                <span
                  :class="['grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br text-sm font-bold text-white shadow-md', theme.gradient]"
                  aria-hidden="true"
                >
                  {{ spotlight.initials }}
                </span>
                <div>
                  <h2 class="font-display text-lg font-bold text-slate-900">{{ spotlight.name }}</h2>
                  <p :class="['text-[13px] font-medium', theme.text]">{{ spotlight.subtitle }}</p>
                </div>
              </div>

              <div class="mt-5 flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                <div class="flex-1 text-center">
                  <p class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Before</p>
                  <p class="mt-0.5 font-display text-xl font-extrabold text-slate-500">{{ spotlight.beforeLabel }}</p>
                </div>
                <Icon icon="mdi:arrow-right-bold" :class="['h-5 w-5 shrink-0', theme.text]" aria-hidden="true" />
                <div class="flex-1 text-center">
                  <p class="text-[10px] font-bold uppercase tracking-wider text-emerald-600">After</p>
                  <p class="mt-0.5 font-display text-xl font-extrabold text-emerald-700">{{ spotlight.afterLabel }}</p>
                </div>
              </div>

              <blockquote class="mt-5 border-l-2 border-blue-200 pl-4">
                <p class="text-[13.5px] italic leading-relaxed text-slate-600">
                  &ldquo;{{ spotlight.feedback }}&rdquo;
                </p>
              </blockquote>

              <a href="#student-stories" class="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue-700 transition hover:text-blue-800">
                Explore student journeys
                <Icon icon="mdi:arrow-down" class="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
