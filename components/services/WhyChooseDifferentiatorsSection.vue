<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { whyChooseDifferentiators } from '~/data/why-choose'
</script>

<template>
  <section id="differentiators" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="differentiators-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-200/25 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="differentiators-heading" :badge="whyChooseDifferentiators.kicker"
        :title="whyChooseDifferentiators.title" :description="whyChooseDifferentiators.description"
        :classes="`${whyChooseDifferentiators.classes} mx-auto max-w-3xl`" />

      <ul class="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6" role="list">
        <li v-for="(feat, i) in whyChooseDifferentiators.features" :key="feat.title" v-motion
          :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 55, duration: 450 } }">
          <article
            class="group flex h-full flex-col rounded-[1.75rem] border border-slate-200/70 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-card sm:p-7">
            <span
              class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-hover:from-blue-600 group-hover:to-indigo-700 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/25"
              aria-hidden="true">
              <Icon :icon="feat.iconMdi" class="h-6 w-6" />
            </span>

            <h3 class="mt-5 font-display text-lg font-bold leading-snug text-slate-900">
              {{ feat.title }}
            </h3>
            <p class="mt-2.5 text-sm leading-relaxed text-slate-500">
              {{ feat.description }}
            </p>

            <ul class="mt-5 space-y-2.5 border-t border-slate-100 pt-5" role="list">
              <li v-for="point in feat.points" :key="point"
                class="flex items-start gap-2.5 text-[13.5px] leading-snug text-slate-700">
                <span
                  class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600"
                  aria-hidden="true">
                  <IconCheck class="h-3 w-3" />
                </span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
