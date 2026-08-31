<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { premiumPlanSection } from '~/data/tutor-registration-plans'
</script>

<template>
  <section id="premium-plan"
    class="relative scroll-mt-28 overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-800 section-py"
    aria-labelledby="premium-plan-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -bottom-28 -left-20 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />

    <div class="container-page relative">
      <div class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <CardHeader theme="dark" align="left" heading-id="premium-plan-heading" :badge="premiumPlanSection.badge"
          :title="premiumPlanSection.title" classes="!px-0 !py-0 max-w-2xl">
          <p class="mt-2.5 text-sm font-medium leading-relaxed text-white/90 sm:text-[15px]">
            {{ premiumPlanSection.description }}
          </p>
        </CardHeader>
        <div class="shrink-0 lg:pb-1">
          <p class="font-display text-4xl font-extrabold tracking-tight text-white sm:text-[2.75rem]">
            {{ premiumPlanSection.price }}
            <span class="ml-1 text-base font-semibold text-blue-100">{{ premiumPlanSection.priceNote }}</span>
          </p>
          <p class="mt-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-amber-200">
            {{ premiumPlanSection.featuresLabel }}
          </p>
        </div>
      </div>

      <ul class="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li v-for="(feature, i) in premiumPlanSection.features" :key="feature.title" v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + i * 30, duration: 360 } }">
          <article
            class="group flex h-full items-start gap-3.5 rounded-2xl border border-white/15 bg-white/[0.07] p-3.5 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.12] sm:p-4">
            <span
              class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/15 text-white ring-1 ring-white/20 transition group-hover:bg-white group-hover:text-blue-700"
              aria-hidden="true">
              <Icon :icon="feature.iconMdi" class="h-4 w-4" />
            </span>
            <div class="min-w-0">
              <h3 class="font-display text-[14.5px] font-bold leading-snug text-white">{{ feature.title }}</h3>
              <p class="mt-1 text-[12.5px] leading-relaxed text-blue-100">{{ feature.description }}</p>
            </div>
          </article>
        </li>
      </ul>

      <div
        class="mt-6 flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/[0.07] p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8"
        v-motion :initial="{ opacity: 0, y: 14 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 440 } }">
        <div class="min-w-0 flex-1">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-amber-200">
            {{ premiumPlanSection.bestSuitedLabel }}
          </p>
          <ul class="mt-2.5 grid gap-2 sm:grid-cols-2" role="list">
            <li v-for="item in premiumPlanSection.bestSuitedFor" :key="item"
              class="flex items-start gap-2 text-[13px] font-medium text-white">
              <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/15 text-amber-300"
                aria-hidden="true">
                <IconCheck class="h-3 w-3" />
              </span>
              {{ item }}
            </li>
          </ul>
        </div>
        <a :href="premiumPlanSection.cta.href"
          class="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition duration-300 hover:-translate-y-0.5 hover:bg-cream-50 lg:w-auto">
          <Icon icon="mdi:star-four-points-outline" class="h-4 w-4" aria-hidden="true" />
          {{ premiumPlanSection.cta.label }}
          <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>
