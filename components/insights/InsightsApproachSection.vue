<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { insightsApproach } from '~/data/insights'

const approachImage = usePublicAsset(insightsApproach.image)
</script>

<template>
  <section id="approach"
    class="relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 section-py"
    aria-labelledby="insights-approach-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 -top-16 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-indigo-400/25 blur-3xl" />
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-[0.12]"
      style="background-image: radial-gradient(circle at 1px 1px, #fff 1px, transparent 0); background-size: 22px 22px" />

    <div class="container-page relative">
      <div class="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
        <div class="lg:col-span-6">
          <CardHeader theme="dark" align="left" heading-id="insights-approach-heading" :badge="insightsApproach.kicker"
            :title="insightsApproach.title" :description="insightsApproach.description"
            :classes="`${insightsApproach.classes} max-w-2xl`" />

          <ul class="mt-7 space-y-3" role="list">
            <li v-for="(point, i) in insightsApproach.points" :key="point.title" v-motion
              :initial="{ opacity: 0, x: -12 }"
              :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 60 + i * 70, duration: 380 } }">
              <article
                class="group flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.08] p-3.5 backdrop-blur-sm transition duration-300 hover:border-white/25 hover:bg-white/[0.14] sm:p-4">
                <span
                  class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15 text-white ring-1 ring-white/25"
                  aria-hidden="true">
                  <Icon :icon="point.iconMdi" class="h-5 w-5" />
                </span>
                <div class="min-w-0 pt-0.5">
                  <h3 class="font-display text-[15px] font-bold text-white">{{ point.title }}</h3>
                  <p class="mt-0.5 text-[13px] leading-relaxed text-blue-100/85">{{ point.description }}</p>
                </div>
              </article>
            </li>
          </ul>

          <a :href="insightsApproach.cta.href"
            class="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-cream-50">
            {{ insightsApproach.cta.label }}
            <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div class="relative lg:col-span-6" v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
          <figure class="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/10 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.55)]">
            <img :src="approachImage" :alt="insightsApproach.imageAlt"
              class="h-full min-h-[18rem] w-full object-cover object-center sm:min-h-[22rem] lg:min-h-[26rem]"
              loading="lazy" decoding="async" />
            <figcaption
              class="absolute inset-x-4 bottom-4 rounded-xl bg-white/95 px-4 py-3 font-display text-sm font-bold text-slate-900 shadow-soft backdrop-blur sm:inset-x-5 sm:bottom-5">
              Insights inform. Personalised guidance delivers results.
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
